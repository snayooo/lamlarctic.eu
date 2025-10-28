"use client";

import { useState, useEffect, useRef } from "react";
import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase("https://cms.lamlarctic.snac.dev");

export default function JourneyCarousel() {
  const [posts, setPosts] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    async function fetchPosts() {
      try {
        if (!process.env.NEXT_PUBLIC_CMS_USER || !process.env.NEXT_PUBLIC_CMS_PASS) {
          console.error("NEXT_PUBLIC_CMS_USER or NEXT_PUBLIC_CMS_PASS environment variables are not set.");
          return;
        }

        await pb.admins.authWithPassword(
          process.env.NEXT_PUBLIC_CMS_USER,
          process.env.NEXT_PUBLIC_CMS_PASS
        );

        const data = await pb.collection("journey_posts").getFullList<RecordModel>({
          sort: "-created",
        });
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch journey posts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const onMouseLeave = () => { isDragging.current = false; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const shimmerStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto py-4 cursor-grab"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {loading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-[60vw] md:min-w-[160px] rounded-lg overflow-hidden shadow flex-shrink-0"
                style={shimmerStyle}
              >
                <div className="w-full h-60 md:h-40 mb-2 rounded"></div>
                <div className="p-3 space-y-1">
                  <div className="h-5 rounded w-3/4"></div>
                  <div className="h-4 rounded w-full"></div>
                </div>
              </div>
            ))
          : posts.length === 0 ? (
              <p className="text-center text-gray-500 text-base mt-6 w-full">
                Aucun post pour le moment.
              </p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="w-[80vw] md:w-[450px] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
                >
                  {post.image && (
                    <img
                      src={`https://cms.lamlarctic.snac.dev/api/files/${post.collectionId}/${post.id}/${post.image}`}
                      alt={post.title || "Journey image"}
                      className="w-full h-60 md:h-72 object-cover"
                    />
                  )}
                  <div className="p-3">
                    <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                    <p className="text-gray-700 text-sm">{post.description}</p>
                  </div>
                </div>
              ))
            )}
      </div>
    </>
  );
}
