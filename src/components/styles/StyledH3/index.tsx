import styled from "@emotion/styled"

const StylesH3v1 = styled.h3`
    color: ${props => props.theme.colors.base.b900};
    font-size: 20px;
    font-weight: 600;
    line-height: 20px; /* 100% */
`


export const StyledH3v1 = ({ children }: any) => {
    return <StylesH3v1>{children}</StylesH3v1>
}