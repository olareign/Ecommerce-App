"use client";

import { useEffect, useState } from 'react';
import { categories, products } from '@/lib/db';
import ProductCard from '../ui/productList';
import CategoryCard from '../ui/categoryCard';
import BrandListSlider from '../ui/brandList';

type ListPageProps = {
    headerContent?: string ;
    isCategoryPage: boolean;
    isBrandPage?: boolean;
};

export default function ListPageLayout({ headerContent, isCategoryPage, isBrandPage }: ListPageProps) {
    const extractedCategories = Object.keys(products);
    
    const [dynamicCategory, setDynamicCategory] = useState(extractedCategories[0]);

    // Use a useEffect hook for dynamic switching only if no category prop is provided
    useEffect(() => {
        if (!isCategoryPage) {
            const intervalId = setInterval(() => {
                setDynamicCategory(prevCategory => {
                    const currentIndex = extractedCategories.indexOf(prevCategory);
                    const nextIndex = (currentIndex + 1) % extractedCategories.length;
                    return extractedCategories[nextIndex];
                });
            }, 4000);

            return () => clearInterval(intervalId);
        }
    }, [dynamicCategory]);

    // Use the determined category to get the full list of products
    const categoryToDisplay = dynamicCategory;
    const productList = products[categoryToDisplay] || [];
    return (
        <section>
            <header className="pt-8 mb-4 flex flex-col items-start border-b border-gray-300">
                <span className="inline-block border-b-3 border-blue-400 pb-1 text-clip font-semibold text-gray-500 text-2xl w-fit">
                    {headerContent}
                    {isCategoryPage ? 
                        <span className="ml-2 text-blue-400 ">Top Categories</span> 
                    : isBrandPage ?
                        <span className="ml-2 text-blue-400 ">Brands</span>
                    :categoryToDisplay && (
                        <span className="ml-2 text-blue-400 ">{categoryToDisplay}</span>
                    )}
                </span>
            </header>
            {/* Product List */}
            {isCategoryPage ?                   
                <div className="mt-4 flex flex-row justify-start scroll-auto overflow-x-scroll">
                    {categories.map((categoryDetails) => (
                        <CategoryCard key={categoryDetails.id} categoryDetails={categoryDetails} />
                    ))}
                    </div>
                : isBrandPage ?
                <div className="mt-4 flex flex-row justify-start scroll-auto overflow-x-scroll">
                    {/* Brand List Component can be placed here */}
                    <BrandListSlider category="Mobiles"/>
                </div>
                :
                <div className="mt-4 flex flex-row justify-start scroll-auto overflow-x-scroll">
                {productList.length > 0 ? (
                    productList.map( productDetails => (
                        <ProductCard key={productDetails.id} productDetails={productDetails} />
                    ))
                ) : (<p className="text-gray-500">No products available in this category.</p>)
                }
                </div>
            }
        </section>
    );
}
