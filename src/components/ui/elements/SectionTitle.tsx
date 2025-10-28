const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center w-full">
    <h2 className="text-3xl md:text-5xl font-semibold mr-4 whitespace-nowrap">
      {title}
    </h2>
    <div className="flex-1 h-[2px] bg-black"></div>
  </div>
);

export default SectionTitle;