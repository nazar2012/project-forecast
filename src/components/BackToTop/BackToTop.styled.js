import styled from "styled-components";

export const BackToTopButton = styled.button`
  position: fixed;

  right: 28px;
  bottom: 28px;

  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ $visible, theme }) =>
        theme.text === "#ffffff"
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(0, 0, 0, 0.08)"};

  border-radius: 50%;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  cursor: pointer;

  opacity: ${({ $visible }) =>
        $visible ? 1 : 0};

  visibility: ${({ $visible }) =>
        $visible ? "visible" : "hidden"};

  transform: ${({ $visible }) =>
        $visible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.8)"};

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.15);

  z-index: 900;

  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform:
      translateY(-4px)
      scale(1.05);

    background: ${({ theme }) => theme.button};
    color: #111111;

    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform:
      translateY(-1px)
      scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) => theme.button};

    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;

    width: 42px;
    height: 42px;
  }

  @media (max-width: 480px) {
    right: 16px;
    bottom: 16px;

    width: 40px;
    height: 40px;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  ${BackToTopButton}:hover & {
    transform: translateY(-2px);
  }
`;