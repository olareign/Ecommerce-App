import Image from "next/image"

export default function CategoryCard({categoryDetails}: {categoryDetails: {name: string, image: string}}) {
    return (
        <div className="flex flex-col items-center m-4 gap-2">
            <div className="rounded-full border bg-gray-300 border-gray-300 p-4 grid place-items-center hover:shadow-lg hover:border-sky-400 cursor-pointer overflow-clip">
                <Image
                    src={categoryDetails.image || "/samsung.png"}
                    alt={categoryDetails.name || "Category"}
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>
            <h4>{categoryDetails.name}</h4>
        </div>
    )
}