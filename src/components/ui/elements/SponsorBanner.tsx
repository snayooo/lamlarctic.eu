"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PocketBase, { RecordModel } from "pocketbase";
import Link from "next/link";

const pb = new PocketBase("https://cms.lamlarctic.eu");

export default function SponsorMarquee() {
  const [sponsors, setSponsors] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        if (!process.env.NEXT_PUBLIC_CMS_USER || !process.env.NEXT_PUBLIC_CMS_PASS) {
          console.error(
            "NEXT_PUBLIC_CMS_USER or NEXT_PUBLIC_CMS_PASS environment variables are not set."
          );
          setLoading(false);
          return;
        }

        await pb.admins.authWithPassword(
          process.env.NEXT_PUBLIC_CMS_USER,
          process.env.NEXT_PUBLIC_CMS_PASS
        );

        const data = await pb.collection("sponsors").getFullList<RecordModel>({
          sort: "created",
        });
        setSponsors(data);
      } catch (err) {
        console.error("Failed to fetch sponsors:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSponsors();
  }, []);

  if (loading) {
    // Loading animation: pulse placeholders
    return (
      <div className="w-full overflow-hidden py-6">
        <div className="flex gap-6 animate-pulse">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-24 md:h-32 w-40 bg-gray-300 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (sponsors.length === 0) return null;

  return (
    <div className="w-full overflow-hidden py-6">
      <Marquee
        gradient={false} // no fading gradient at edges
        speed={50} // scroll speed
        pauseOnHover={false} // cannot stop on hover
        loop={0} // infinite loop
      >
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.id}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={`https://cms.lamlarctic.eu/api/files/${sponsor.collectionId}/${sponsor.id}/${sponsor.logo}`}
              alt={sponsor.sponsor_name}
              className="h-24 md:h-32 px-6 object-contain"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
