import ExploreCard from "../../components/ExploreCard"
import FlashSales from "../../components/FlashSales";

import imageExploreCard1 from "/images/cardExplore/cardExplore-1.jpg";
import imageExploreCard2 from "/images/cardExplore/cardExplore-2.jpg";



export const Landing = () => {
    return (
        <>
            <h1 style={{ opacity: "0", position: "absolute", width: "1px", margin: "-1px", zIndex: "-1" }}>Landing Page</h1>
            <section className="px-5 gap-y-3 flex flex-col mb-5">
                <ExploreCard
                    cardColor="#BF2E3B"
                    title="Never-Ending Summer"
                    description="Throwback Shirts & all-day dressed"
                    anchorText="Explore all category"
                    cardImage={imageExploreCard1}
                    link="#"

                />
                <ExploreCard
                    cardColor="#006c9e"
                    title="Best Lovin Sellers"
                    description="Bikini & Poolside glam include"
                    anchorText="Explore all category"
                    cardImage={imageExploreCard2}
                    link="#"
                />
                <FlashSales />
            </section>
        </>
    )
}

export default Landing