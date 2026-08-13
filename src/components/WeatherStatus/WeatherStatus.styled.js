import styled from "styled-components";

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: fit-content;
  margin: 20px auto 40px 0;
  padding: 6px 12px;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 18px rgba(0, 0, 0, 0.1);
  }
`;

export const StatusIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  line-height: 1;
`;

export const StatusText = styled.span`
  color: #111111;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;