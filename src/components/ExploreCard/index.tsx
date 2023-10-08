import styled from "@emotion/styled"

interface ExploreCardProps {
    title: string,
    description: string,
    link: string,
    anchorText: string,
    cardColor: string,
    cardImage: string
}

const TitleExploreCard = styled.h2`
color: ${props => props.theme.colors.base.b000};
font-size: 16px;
font-weight: 800;
line-height: 30px; /* 191.667% */
`

const DescriptionExploreCard = styled.p`
color: ${props => props.theme.colors.base.b000};
font-size: 14px;
line-height: 30px; /* 200% */
`

const AnchorExploreCard = styled.a`
color: ${props => props.theme.colors.base.b000};
font-size: 12px;
line-height: 30px; /* 200% */
text-decoration-line: underline;
`

const ExploreCard = ({ title, description, link = "#", anchorText, cardColor, cardImage }: ExploreCardProps) => {
    return (
        <div className="flex">
            <div style={{ backgroundColor: cardColor }} className="px-3 py-4 flex flex-col justify-center">
                <TitleExploreCard>{title}</TitleExploreCard>
                <DescriptionExploreCard>{description}</DescriptionExploreCard>
                <AnchorExploreCard href={link}>{anchorText}</AnchorExploreCard>
            </div>
            <img src={cardImage} alt="" className="w-1/2" />
        </div>
    )
}

export default ExploreCard