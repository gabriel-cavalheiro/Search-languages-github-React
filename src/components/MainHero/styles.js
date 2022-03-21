import styled from 'styled-components';

export const ContainerMain = styled.main`
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  position: relative;
`;

export const SectionText = styled.section`
  width: 65%;
  font-weight: 600;
  font-size: 64px;
  line-height: 135%;
`;

export const SpanGithub = styled.span`
  background: linear-gradient(173.36deg, #FFFFFF 29.47%, rgba(255, 255, 255, 0.1) 43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SpanColor = styled.span`
  background: linear-gradient(267.24deg, #8141DA 33.18%, #1BBCEB 88.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  width: 300px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 14px 56px;
  margin-top: 24px;

  background: #4C54F5;

  border-radius: 18px;

  text-decoration: none;
  color: #fafafa;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  img {
    max-width: 18px;
    margin-left: 12px;
  }

  &:hover {
    filter: brightness(0.7);
    transform: scale(1.01);
  }
`;
