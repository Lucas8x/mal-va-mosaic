import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight } from '@styled-icons/bootstrap/';

export const ImageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 225px;
  max-height: 350px;
`;

export const ImageCardInfo = styled.div`
  display: none;
  position: relative;
  width: 100%;
  margin-top: -36px;
  text-align: center;

  ${ImageCardContainer}:hover & {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const InfoName = styled.span`
  font-weight: 600;
  color: white;
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
  width: 100%;
  transition: 0.3s ease-in-out;
  /* object-fit: cover; */
`;

export const ControlCss = css<{ disabled: boolean }>`
  width: 100px;
  height: 25px;
  background-color: transparent;
  color: white;
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${ImageCardContainer}:hover & {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ControlLeft = styled(ChevronLeft)`
  ${ControlCss}
  margin-right: -13px;
  position: relative;
`;

export const ControlRight = styled(ChevronRight)`
  ${ControlCss}
  margin-left: -13px;
  position: relative;
`;
