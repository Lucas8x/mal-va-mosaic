import styled, { css } from 'styled-components';

export const ImageCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCardInfo = styled.div`
  position: relative;
  margin-top: -20px;

  width: 100%;
  max-width: 225px;

  color: white;
  background-color: transparent;
`;

export const Main = styled.div`
  height: 100%;
  width: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VoiceActorImage = styled.img`
  height: 100%;
  width: 225px;
  transition: 0.3s ease-in-out;
  /* object-fit: cover; */
`;

export const ControlCss = css`
  width: 10px;
  height: 10px;
  background-color: transparent;
  color: white;
  border: 0;
`;

export const ControlLeft = styled.button`
  ${ControlCss}
  margin-right: -13px;
  position: relative;
`;

export const ControlRight = styled.button`
  ${ControlCss}
  margin-left: -13px;
  position: relative;
`;
