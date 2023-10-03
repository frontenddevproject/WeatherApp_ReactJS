import styled from "styled-components";

export interface CommonPropertiesInterface {
   margin?: string;
   padding?: string;
   height?: string;
   width?: string;
   fontFamily?: string;
   fontSize?: string;
   fontWeigth?: string;
   color?: string;
   background?: string;
   backgroundColor?: string;
   border?: string;
   borderRadius?: string;
   outline?: string;
   cursor?: string;
   transition?: string
}

const Input = styled.input<CommonPropertiesInterface>`
   margin: ${(props) => props.margin ||"0"};
   width: ${(props) => props.width ||"100px"};
   padding: ${(props) => props.padding ||"0"};
   height: ${(props) => props.height ||"auto"};
   font-family: ${(props) => props.fontFamily ||"inherit"};
   font-size: ${(props) => props.fontSize ||"16px"};
   font-weight: ${(props) => props.fontWeigth ||"400"};
   color: ${(props) => props.color ||"black"};
   background: ${(props) => props.background ||"none"};
   background-color: ${(props) => props.backgroundColor ||"transparent"};
   border: ${(props) => props.border ||"none"};
   border-radius: ${(props) => props.borderRadius ||"0"};
   outline: ${(props) => props.outline ||"none"};
`
export const SearchInput = styled(Input)`
   padding: 20px 10px;
   height: 20px;
   width: 280px;
   border: 2px solid black;
   border-radius: 10px;
   background-color: #fff;
   font-family: Arial, Helvetica, sans-serif;
`

export const Button = styled.button<CommonPropertiesInterface>`
   margin: ${(props) => props.margin ||"0"};
   width: ${(props) => props.width ||"0"};
   padding: ${(props) => props.padding ||"0"};
   height: ${(props) => props.height ||"auto"};
   font-family: ${(props) => props.fontFamily ||"inherit"};
   font-size: ${(props) => props.fontSize ||"16px"};
   font-weight: ${(props) => props.fontWeigth ||"400"};
   color: ${(props) => props.color ||"black"};
   background: ${(props) => props.background ||"none"};
   background-color: ${(props) => props.backgroundColor ||"transparent"};
   border: ${(props) => props.border ||"none"};
   border-radius: ${(props) => props.borderRadius ||"0"};
   cursor: ${(props) => props.cursor ||"auto"};
   transition: ${(props) => props.transition ||"none"};
`

export const SearchButton = styled(Button)`
   height: 44px;
   width: 80px;
   border: 2px solid black;
   border-radius: 10px;
   background-color: #fff;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 16px;
   cursor: pointer;
   transition: all 0.3s;
`