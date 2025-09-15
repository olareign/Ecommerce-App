import Image from "next/image";

export default function CategoryCard({
  categoryDetails,
}: {
  categoryDetails: { name: string; image: string };
}) {
  return (
    <div className="flex flex-col items-center m-2 md:m-4 gap-2 min-w-[100px] md:min-w-[120px]">
      <div className="rounded-full border bg-gray-300 border-gray-300 p-2 md:p-4 grid place-items-center hover:shadow-lg hover:border-sky-400 cursor-pointer overflow-clip w-20 h-20 md:w-28 md:h-28">
        <Image
          src={categoryDetails.image || "/samsung.png"}
          alt={categoryDetails.name || "Category"}
          width={120}
          height={120}
          className="object-contain w-full h-full"
          unoptimized={true}
        />
      </div>
      <h4 className="text-xs md:text-sm text-center text-gray-700 font-medium line-clamp-2">
        {categoryDetails.name}
      </h4>
    </div>
  );
}
