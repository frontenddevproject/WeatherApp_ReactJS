import styled from 'styled-components';

interface CommonPropsInterface {
   width?: string,
   height?: string,
   margin?: string,
   padding?: string,
   alignItems?: string,
   background?: string,
   gap?: string,
   textAlign?: string,
   color?: string,
   fontSize?: string,
   fontWeight?: string,
   justifyContent?: string;
}

interface FlexPropsInterface {
   display?: string,
   justifyContent?: string,
   flexDirection?: string,
   flexWrap?: string
}

interface GridPropsInterface {
   display?: string;
   gridTemplateColumns?: string;
   gridTemplateRows?: string;
   gridTemplateAreas?: string;
   gridAutoRows?: string;
   gridAutoColumns?: string;
   gridAutoFlow?:string;
   gridColumnGap?: string;
   gridRowGap?: string;
   columnGap?: string;
   rowGap?: string;
}

export const Common = styled.div<CommonPropsInterface>`
   width: ${(props) => props.width || "auto"};
   height: ${(props) => props.height || "auto"};
   margin: ${(props) => props.margin || "0"};
   padding: ${(props) => props.padding || "0"};
   color: ${(props) => props.color || "black"};
   text-align: ${(props) => props.textAlign || "auto"};
   background: ${(props) => props.background || "none"};
   gap: ${(props) => props.gap || "0px"};
   align-items: ${(props) => props.alignItems || "start"};
   justify-content: ${(props) => props.justifyContent || "start"};
`

export const Flex = styled(Common)<FlexPropsInterface & CommonPropsInterface>`
   display: flex;
   
`

export const FlexRow = styled(Flex)`
   flex-direction: row;
   flex-wrap: ${(props) => props.flexWrap || "no-wrap"};
`

export const FlexColumn = styled(Flex)`
   flex-direction: column;
`  

export const Grid = styled(Common)<GridPropsInterface & CommonPropsInterface>`
   display: grid;
   grid-template-areas: ${(props) => props.gridTemplateAreas || "none"};
   grid-auto-rows: ${(props) => props.gridAutoRows || "auto"};
   grid-auto-columns: ${(props) => props.gridAutoColumns || "auto"};
   grid-auto-flow: ${(props) => props.gridAutoFlow || "row"};
   grid-column-gap: ${(props) => props.gridColumnGap || "0"};
   grid-row-gap: ${(props) => props.gridRowGap || "0"};
   column-gap: ${(props) => props.columnGap || "normal"};
   row-gap: ${(props) => props.rowGap || "normal"};
   
`

export const GridRow = styled(Grid)`
   grid-template-rows: ${(props) => props.gridTemplateRows || "none"};
`

export const GridColumns = styled(Grid)`
   grid-template-columns: ${(props) => props.gridTemplateColumns || "none"};
`

export const Wrapper = styled(Common)`
   width: 90%;
   padding: 50px;
   margin: 0 auto;
`