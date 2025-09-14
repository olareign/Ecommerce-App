import Image from "next/image";

export default function ProductCard({ 
    productDetails
}: {
    productDetails: {
        id: number;
        name: string;
        image: string;
        currentPrice: number;
        originalPrice: number;
        discount: number;
        savings: number;
    }
}) {

  // Helper function to safely format numbers
  const formatPrice = (price: number | undefined | null): string => {
    if (typeof price !== 'number' || isNaN(price)) {
      return '0';
    }
    return price.toLocaleString();
  };

  return (
    <div className="border-1 border-gray-300 rounded-lg hover:border hover:border-blue-300 hover:shadow-lg m-2 w-50 overflow-clip">
      <div className="flex bg-gray-100 relative">
        {/* Card main image */}
        <Image 
          src={productDetails.image || "/samsung.png"} 
          alt={productDetails.name || "Product"} 
          width={150}
          height={150}
          className="object-contain p-4"
        />
        {/* Card discount tag */}
        <div className="absolute -top-2 -right-2">
            <div className="bg-sky-500 text-white w-15 h-15 px-3 pt-4 rounded-b-lg font-bold text-xs">
                {productDetails.discount}%<br/>
                <span>OFF</span>
            </div>
        </div>
      </div>
      <div className="p-2">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-500 text-md leading-tight py-1">
          {productDetails.name}
        </h3>
        {/* Product Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-700">
            ₹{formatPrice(productDetails.currentPrice)}
          </span>
          {productDetails.originalPrice > 0 && productDetails.currentPrice !== productDetails.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{formatPrice(productDetails.originalPrice)}
            </span>
          )}
        </div>
      </div>
      <div className="py-2 mx-2 border-t-1 border-gray-200">
        {/* Product savings price */}
          <div className="text-green-600 font-semibold text-sm">
            Save - ₹{formatPrice(productDetails.savings)}
            </div>
      </div>
    </div>
  );
}