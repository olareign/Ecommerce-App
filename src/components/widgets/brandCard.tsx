import { IBrand, IBrandType } from "@/types/product.types";

export default function BrandCard({ brand }: { brand: IBrand }) {
  return (
    <div className="relative bg-black/10 backdrop-blur-sm rounded-xl p-6 hover:bg-black/20 transition-all duration-300">
      {/* Brand Tag */}
      <div className="inline-block bg-black/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
        {brand.name}
      </div>

      {/* Content Area */}
      <div className="flex items-center justify-between h-40">
        {/* Left Side - Brand Logo & Text */}
        <div className="space-y-4 flex-1">
          {/* Brand Logo */}
          <div className={`inline-flex items-center justify-center w-16 h-16 ${brand.logoBackground} rounded-xl shadow-lg overflow-clip`}>
            <span className={`${brand.logoBackground} font-bold text-sm`}>{brand.logoText}</span>
          </div>
          {/* Discount Text */}
          <h3 className={`${brand.textColor} text-xl font-bold leading-tight`}>
            {brand.discount}
          </h3>
        </div>

        {/* Right Side - Brand Mockup */}
        <div className="flex-shrink-0 ml-6">
          <div className="relative">
            {/* Brand Image */}
            <div className="w-24 h-40 bg-gray-800 rounded-xl shadow-2xl relative overflow-hidden border-2 border-gray-700">
              {/* Screen */}
              <div className={`absolute inset-2 bg-gradient-to-br ${brand.phoneColor} rounded-lg overflow-hidden`}>
                {/* Dynamic Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-b-lg"></div>
                
                {/* Screen Content - Animated */}
                <div className="mt-6 px-2 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="text-white text-xs font-bold">{brand.name}</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="h-1 bg-white/40 rounded w-full"></div>
                    <div className="h-1 bg-white/30 rounded w-3/4"></div>
                    <div className="h-1 bg-white/20 rounded w-1/2"></div>
                  </div>
                  
                  {/* App Icons */}
                  <div className="grid grid-cols-3 gap-1 mt-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-white/25 rounded-sm"></div>
                    ))}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/50 rounded-full"></div>
              </div>

              {/* Camera Bump */}
              <div className="absolute top-4 right-2 w-6 h-6 bg-gray-700 rounded-lg border border-gray-600">
                <div className="absolute inset-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Floating Animation Elements */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/15 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
}