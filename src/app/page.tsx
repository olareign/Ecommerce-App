import Footer from "@/components/layout/footer";
import ListPageLayout from "@/components/layout/listPageLayout";
import Navbar from "@/components/layout/navbar";
import Slider from "@/components/widgets/slider";
import { SITE_NAME } from "@/utils/constant";

export default function Home() {
  return (
    <>
      <header className="">
        <aside className="flex justify-between items-center p-2 bg-gray-200 px-4 md:px-16 text-sm hidden md:flex">
          <div>Welcome to worldwide of {SITE_NAME}!</div>
          <ul className="flex gap-2 list-none">
            <li>Deliver to 423651</li>
            <li className="border-l-gray-400 border-l-2 px-1">
              Track your Order!
            </li>
            <li className="border-l-gray-400 border-l-2 px-1">All Offers!</li>
          </ul>
        </aside>
      </header>
      <main className="min-h-screen bg-white px-4 md:px-8 lg:px-16">
        <Navbar />
        <Slider />
        <ListPageLayout
          headerContent="Grab the Best Deal"
          isCategoryPage={false}
          isBrandPage={false}
        />
        <ListPageLayout
          headerContent="Shop From"
          isCategoryPage={true}
          isBrandPage={false}
        />
        <ListPageLayout
          headerContent="Top"
          isCategoryPage={false}
          isBrandPage={true}
        />
      </main>
      <Footer />
    </>
  );
}
