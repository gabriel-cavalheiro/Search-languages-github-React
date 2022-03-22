import styled from 'styled-components';

export const ContainerSearch = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 12px;
  margin-top: 12px;
  transform: translateY(96px);

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 58px;
  }
`;

export const ListRepos = styled.section`
  width: 100%;
  margin-top: 48px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;
