import { Link } from "react-router-dom"
import { styledLink1 } from "../../common/styles/StyledLink"
import { theme } from "../ThemeProviderComp"
import Typography from "../Typography"

interface HeaderViewAllProps {
    title: string
    urlPath?: string
}

const HeaderViewAll = ({ title, urlPath = "#" }: HeaderViewAllProps) => {
    return (
        <div className="flex mx-5 mb-4">
            <Typography
                componente="h3"
                color={theme.colors.base.b900}
                className="text-xl font-semibold"
            >
                {title}
            </Typography>
            <Link to={urlPath} className="ml-auto" css={styledLink1}>View all</Link>
        </div>
    )
}

export default HeaderViewAll