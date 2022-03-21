import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;

  background-color: #050810;
  color: #fafafa;

  &::-webkit-scrollbar{
    padding-right: 2px;
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background: #151B26;
  }
}

svg,img{
  width: 100%;
  //height: auto;
}


`;
