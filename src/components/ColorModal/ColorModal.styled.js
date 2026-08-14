import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1200;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  box-sizing: border-box;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(0, 0, 0, 0.72)"
            : "rgba(17, 17, 17, 0.45)"};

  backdrop-filter: blur(6px);

  animation: colorOverlayAppear 0.25s ease;

  @keyframes colorOverlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 390px;

  padding: 28px;

  box-sizing: border-box;

  background: ${({ theme }) =>
        theme.background};

  color: ${({ theme }) =>
        theme.text};

  border: 1px solid
    ${({ theme }) =>
        theme.secondary};

  border-radius: 16px;

  box-shadow:
    0 20px 60px
    rgba(0, 0, 0, 0.2);

  animation: colorModalAppear 0.3s
    cubic-bezier(0.22, 1, 0.36, 1);

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  @keyframes colorModalAppear {
    from {
      opacity: 0;
      transform: translateY(15px)
        scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0)
        scale(1);
    }
  }

  @media screen and (min-width: 564px) {
    max-width: 430px;
    padding: 32px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 460px;
    padding: 36px;
    border-radius: 18px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 10px;
  right: 10px;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;
  border-radius: 50%;

  background: ${({ theme }) =>
        theme.card};

  color: ${({ theme }) =>
        theme.text};

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
        theme.secondary};

    transform: rotate(90deg);
  }

  &:active {
    transform: scale(0.92);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 8px;

  color: ${({ theme }) =>
        theme.text};

  font-size: 24px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  transition:
    color 0.3s ease;

  @media screen and (min-width: 564px) {
    font-size: 27px;
  }
`;

export const Description = styled.p`
  margin: 0 0 20px;

  color: ${({ theme }) =>
        theme.muted};

  font-size: 13px;
  line-height: 1.5;

  text-align: center;

  transition:
    color 0.3s ease;
`;

export const ColorInput = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 13px;

  box-sizing: border-box;

  border: 1px solid
    ${({ theme }) =>
        theme.secondary};

  border-radius: 9px;

  outline: none;

  background: ${({ theme }) =>
        theme.card};

  color: ${({ theme }) =>
        theme.text};

  font-size: 14px;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: ${({ theme }) =>
        theme.muted};
  }

  &:focus {
    border-color: ${({ theme }) =>
        theme.button};

    box-shadow:
      0 0 0 3px
      rgba(255, 179, 108, 0.15);
  }
`;

export const ColorSuggestions = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;

  max-height: 230px;

  overflow-y: auto;

  border: 1px solid
    ${({ theme }) =>
        theme.secondary};

  border-radius: 9px;

  background: ${({ theme }) =>
        theme.card};

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.08);

  animation: suggestionsAppear 0.2s ease;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
        theme.secondary};

    border-radius: 10px;
  }

  @keyframes suggestionsAppear {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ColorSuggestion = styled.button`
  width: 100%;
  min-height: 44px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 8px 10px;

  box-sizing: border-box;

  border: none;

  border-bottom: 1px solid
    ${({ theme }) =>
        theme.secondary};

  background: ${({ theme, $selected }) =>
        $selected
            ? theme.secondary
            : "transparent"};

  color: ${({ theme }) =>
        theme.text};

  cursor: pointer;

  text-align: left;

  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) =>
        theme.secondary};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ColorSquare = styled.span`
  width: 26px;
  height: 26px;

  flex-shrink: 0;

  border-radius: 7px;

  background: ${({ $color }) =>
        $color};

  border: 1px solid
    rgba(0, 0, 0, 0.08);

  box-shadow:
    inset 0 0 0 1px
    rgba(255, 255, 255, 0.15);

  transition:
    transform 0.2s ease;

  ${ColorSuggestion}:hover & {
    transform: scale(1.08);
  }
`;

export const ColorName = styled.span`
  color: ${({ theme }) =>
        theme.text};

  font-size: 13px;
  font-weight: 500;

  transition:
    color 0.25s ease;
`;

export const CheckIcon = styled.span`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) =>
        theme.text};

  animation: checkAppear 0.2s ease;

  svg {
    width: 17px;
    height: 17px;
  }

  @keyframes checkAppear {
    from {
      opacity: 0;
      transform: scale(0.6);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const NoResults = styled.div`
  padding: 14px;

  color: ${({ theme }) =>
        theme.muted};

  font-size: 13px;

  text-align: center;

  transition:
    color 0.25s ease;
`;

export const ApplyButton = styled.button`
  width: 100%;
  height: 42px;

  margin-top: 18px;

  border: none;
  border-radius: 9px;

  background: ${({ theme }) =>
        theme.button};

  color: #111111;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 5px 15px
    rgba(255, 179, 108, 0.22);

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);

    box-shadow:
      0 7px 20px
      rgba(255, 179, 108, 0.32);
  }

  &:active {
    transform: translateY(0)
      scale(0.98);
  }

  @media screen and (min-width: 564px) {
    height: 44px;
  }
`;