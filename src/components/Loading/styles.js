import styled, { keyframes } from 'styled-components';

const rotateSpinner = keyframes`
 0%{
   transform: rotate(0deg);
 }

 100%{
   transform: rotate(360deg);
 }
`;

export const ContainerLoad = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border-top: 3px solid #4C54F5;
  border-radius: 50%;
  animation: ${rotateSpinner} 0.5s linear infinite ;
  margin-bottom: 24px;
  `;
