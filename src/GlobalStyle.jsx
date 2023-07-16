import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
:root{
    font-family: 'Work Sans', sans-serif;
    font-size : 62.5%;
    overflow-x : hidden;
}
h1{
    font-size : 6rem;
    font-weigh : 900;
    color : ${({ theme }) => theme.colors.heading};
}
h2{
    font-weight : 300;
    white-spacing : normal;
    text-align : center;
    font-size : 4.4rem;
    color : ${({ theme }) => theme.colors.heading};
}
h3{
    font-size : 1.8rem;
    font-weight : 400;
}
p{
    color : ${({ theme }) => theme.colors.text};
    opacity : .7;
    font-weight : 400;
    margin-top : 1rem;
    line-height : 1.5;
}
a{
    text-decoration : none;
}
li{
    list-style : none;
}
`;
