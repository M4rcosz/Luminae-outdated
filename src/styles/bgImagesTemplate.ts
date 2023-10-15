import styled from "@emotion/styled";

const StyledImageProduct = styled.div<{ image: string }>`
background-image: url(${props => props.image});
`

export default StyledImageProduct