import { Link } from "react-router-dom"
import { styledLink1 } from "../../common/styles/StyledLink";
import FlashSalesCard from "./FlashSalesCard";
import data from "../../data/flashSales.json"
import Typography from "../Typography";
import { theme } from "../ThemeProviderComp";

const cardsFlashSales = data[0].flashSales;


const FlashSales = () => {
    return (
        <section className="mt-3 ">
            <div className="flex">
                <Typography
                    componente="h3"
                    color={theme.colors.base.b900}
                    className="text-xl font-semibold"
                >
                    Flash Sales
                </Typography>
                <Link to="#" className="ml-auto" css={styledLink1}>View all</Link>
            </div>
            <ul className="flex overflow-scroll gap-5">
                {cardsFlashSales.map(card => {
                    return (
                        <li key={card.id}
                            className="flex flex-col my-3 pb-2 pt-3 mx-1 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)] rounded-lg">
                            <FlashSalesCard
                                discountLeft={card.discountLeft}
                                imageProduct={card.imageProduct}
                                productName={card.productName}
                                productDescription={card.productDescription}
                                evaluationNumber={card.evaluationNumber}
                                price={card.price}
                                discountPrice={card.discountPrice}
                                discount={card.discount}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default FlashSales