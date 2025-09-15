import Image from "next/image";

export default function ProductCard({
  productDetails,
}: {
  productDetails: {
    id: number;
    name: string;
    image: string;
    currentPrice: number;
    originalPrice: number;
    discount: number;
    savings: number;
  };
}) {
  // Helper function to safely format numbers
  const formatPrice = (price: number | undefined | null): string => {
    if (typeof price !== "number" || isNaN(price)) {
      return "0";
    }
    return price.toLocaleString();
  };

  return (
    <div className="border-1 border-gray-300 rounded-lg hover:border hover:border-blue-300 hover:shadow-lg m-1 md:m-2 w-40 sm:w-44 md:w-50 lg:w-52 flex-shrink-0 overflow-clip">
      <div className="flex bg-gray-100 relative">
        {/* Card main image */}
        <Image
          src={productDetails.image || "/samsung.png"}
          alt={productDetails.name || "Product"}
          width={150}
          height={150}
          className="object-contain p-2 md:p-4 w-full h-32 md:h-36"
          unoptimized={true}
        />
        {/* Card discount tag */}
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2">
          <div className="bg-sky-500 text-white w-12 h-12 md:w-15 md:h-15 px-2 md:px-3 pt-2 md:pt-4 rounded-b-lg font-bold text-xs flex flex-col items-center justify-center">
            <span>{productDetails.discount}%</span>
            <span className="text-xs">OFF</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-500 text-sm md:text-md leading-tight py-1 line-clamp-2">
          {productDetails.name}
        </h3>
        {/* Product Price */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-base md:text-lg font-bold text-gray-700">
            ₹{formatPrice(productDetails.currentPrice)}
          </span>
          {productDetails.originalPrice > 0 &&
            productDetails.currentPrice !== productDetails.originalPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through">
                ₹{formatPrice(productDetails.originalPrice)}
              </span>
            )}
        </div>
      </div>
      <div className="py-2 mx-2 border-t-1 border-gray-200">
        {/* Product savings price */}
        <div className="text-green-600 font-semibold text-xs md:text-sm">
          Save - ₹{formatPrice(productDetails.savings)}
        </div>
      </div>
    </div>
  );
}
