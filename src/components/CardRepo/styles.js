import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 408px;
  height: 466px;

  background: rgba(250, 250, 250, 0.1);
  border: 2px solid #FAFAFA;
  box-sizing: border-box;
  backdrop-filter: blur(25px);
  border-radius: 38px;
  padding: 28px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fafafa;
    padding-bottom: 8px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 12px;

    li {
      margin: 12px 0px;
    }

    img {
      width: 18px;
      margin-right: 10px;
    }
  }

  h5 {
    margin-top: 8px;
    font-weight: 400;
  }

  a {
    display: inline-block;
    width: 100%;
    color: #CE79EF;
    transition: 0.5s ease;
    text-align: center;
    margin-top: 18px;

    &:hover {
      filter: brightness(0.6);
    }

    > img {
      margin-right: 8px;
    }
  }
  `;

export const UserProfile = styled.div`
    background-color: #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 16px;
  `;

export const TitleRepo = styled.div`
    text-align: center;
    transition: 0.5s ease;

    &:hover {
      filter: brightness(0.6);
    }
  `;
