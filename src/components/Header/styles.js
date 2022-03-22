import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  background: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(12px);
  padding: 18px 12px;
  top: 0;
  right: 0;

  border-bottom: 1px solid #205686;
`;

export const DivLogo = styled.div`
  display: flex;

  img {
    margin-right: 8px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
      transform: scale(1.1);
    }
  }

  a {
    color: #fafafa;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  width: 240px;
  background: #4C54F5;
  border-radius: 18px;
  padding: 15px 30px;
  text-decoration: none;
  color: #fafafa;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  img {
    max-width: 18px;
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.7);
    transform: scale(1.01);
  }
`;
