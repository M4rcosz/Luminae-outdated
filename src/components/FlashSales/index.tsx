// import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { styledLink1 } from "../../common/styles/StyledLink";
import { StyledH3v1 } from "../styles/StyledH3";


const FlashSales = () => {
    return (
        <section className="mt-3">
            <div className="flex">
                <StyledH3v1>Flash Sales</StyledH3v1>
                <Link to="#" className="ml-auto" css={styledLink1}>View all</Link>
            </div>
            <ul>

            </ul>
        </section>
    )
}

export default FlashSales