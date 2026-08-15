import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }

  50% {
    transform: translate(-50%, -50%) translateY(-8px);
  }
`;

const objectFloat = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(12deg) scale(1.12);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0.55;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 1;
  }
`;

const lightning = keyframes`
  0%, 100% {
    opacity: 0.25;
    transform: translate(-50%, -50%) scale(0.8);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

export const GameOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px;
  box-sizing: border-box;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(0, 0, 0, 0.55)"
            : "rgba(17, 17, 17, 0.28)"};

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  animation: ${fadeIn} 0.3s ease;
`;

export const GameWrapper = styled.div`
  position: relative;

  width: min(1100px, 100%);
  max-height: 94vh;

  padding: 18px;

  box-sizing: border-box;

  overflow: hidden;

  border: 1px solid
    ${({ theme }) => `${theme.button}45`};

  border-radius: 24px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(24, 24, 24, 0.72)"
            : "rgba(255, 255, 255, 0.68)"};

  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.32),
    0 0 80px ${({ theme }) =>
        `${theme.button}20`},
    inset 0 1px 1px
      rgba(255, 255, 255, 0.22);

  @media (max-width: 700px) {
    padding: 12px;
    border-radius: 18px;
  }
`;

export const GameHeader = styled.div`
  position: relative;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const GameTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 9px;

  margin: 0;

  color: ${({ theme }) => theme.text};

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;

  text-shadow:
    0 0 8px ${({ theme }) =>
        `${theme.button}80`},
    0 0 20px ${({ theme }) =>
        `${theme.button}65`},
    0 0 40px ${({ theme }) =>
        `${theme.button}45`};

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    ${({ theme }) => `${theme.button}30`};

  border-radius: 50%;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0.5)"};

  color: ${({ theme }) => theme.text};

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: rotate(90deg);

    background: ${({ theme }) =>
        `${theme.button}30`};

    box-shadow:
      0 0 18px ${({ theme }) =>
        `${theme.button}45`};
  }
`;

export const GameContent = styled.div`
  position: relative;
`;

export const GameBoard = styled.div`
  position: relative;

  width: 100%;
  height: min(620px, 72vh);

  min-height: 430px;

  overflow: hidden;

  border: 1px solid
    ${({ theme }) => `${theme.button}30`};

  border-radius: 20px;

  cursor: crosshair;

  background:
    radial-gradient(
      circle at 50% 50%,
      ${({ theme }) => `${theme.button}12`},
      transparent 42%
    ),
    ${({ $weather, theme }) =>
        $weather === "storm"
            ? "linear-gradient(145deg, rgba(30,25,50,.88), rgba(10,10,18,.96))"
            : theme.background === "#111111"
                ? "linear-gradient(145deg, rgba(25,25,25,.82), rgba(10,10,10,.95))"
                : "linear-gradient(145deg, rgba(255,255,255,.66), rgba(235,235,235,.9))"};

  transition: background 0.8s ease;

  @media (max-width: 700px) {
    height: 68vh;
    min-height: 430px;
  }
`;

export const BoardTop = styled.div`
  position: absolute;
  z-index: 20;

  top: 14px;
  left: 14px;
  right: 14px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 8px;

  pointer-events: none;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Stat = styled.div`
  padding: 8px 10px;

  border: 1px solid
    ${({ theme }) => `${theme.button}25`};

  border-radius: 12px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(255,255,255,.055)"
            : "rgba(255,255,255,.45)"};

  backdrop-filter: blur(14px);
`;

export const StatLabel = styled.div`
  color: ${({ theme }) => theme.muted};

  font-size: 9px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatValue = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  margin-top: 2px;

  color: ${({ $danger, theme }) =>
        $danger
            ? "#ff6b6b"
            : theme.text};

  font-size: 15px;
  font-weight: 800;

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const WeatherBadge = styled.div`
  position: absolute;
  z-index: 20;

  top: 105px;
  left: 50%;

  display: flex;
  align-items: center;
  gap: 6px;

  padding: 7px 12px;

  transform: translateX(-50%);

  border: 1px solid
    ${({ theme }) => `${theme.button}30`};

  border-radius: 999px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(255,255,255,.06)"
            : "rgba(255,255,255,.5)"};

  backdrop-filter: blur(14px);

  color: ${({ theme }) => theme.text};

  font-size: 11px;
  font-weight: 700;
`;

export const Player = styled.div`
  position: absolute;
  z-index: 15;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

  border: 2px solid
    ${({ theme }) => `${theme.button}cc`};

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      ${({ theme }) => `${theme.button}65`},
      ${({ theme }) => `${theme.button}20`}
    );

  box-shadow:
    0 0 20px ${({ theme }) =>
        `${theme.button}80`},
    0 0 45px ${({ theme }) =>
        `${theme.button}45`};

  color: ${({ theme }) => theme.button};

  animation: ${float} 2s ease-in-out infinite;

  pointer-events: none;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const GameObject = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  font-size: 23px;

  filter:
    drop-shadow(
      0 0 8px
      ${({ $danger, theme }) =>
        $danger
            ? "rgba(255,90,90,.8)"
            : `${theme.button}80`}
    );

  animation: ${objectFloat} 1.7s ease-in-out infinite;

  pointer-events: none;
`;

export const LightningZone = styled.div`
  position: absolute;
  z-index: 8;

  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

  border: 2px dashed
    rgba(255, 215, 80, 0.8);

  border-radius: 50%;

  background:
    rgba(255, 210, 60, 0.12);

  color: #ffd43b;

  animation:
    ${lightning}
    0.8s ease-in-out infinite;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Combo = styled.div`
  position: absolute;
  z-index: 30;

  top: 155px;
  left: 50%;

  transform: translateX(-50%);

  color: ${({ theme }) => theme.button};

  font-size: 16px;
  font-weight: 900;

  text-shadow:
    0 0 10px ${({ theme }) =>
        `${theme.button}aa`},
    0 0 25px ${({ theme }) =>
        `${theme.button}70`};
`;

export const GameMessage = styled.div`
  position: absolute;
  z-index: 30;

  left: 50%;
  top: 58%;

  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.button};

  font-size: 25px;
  font-weight: 900;

  text-shadow:
    0 0 15px ${({ theme }) =>
        `${theme.button}cc`};

  pointer-events: none;
`;

export const StartScreen = styled.div`
  position: absolute;
  z-index: 50;

  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px;

  text-align: center;

  background:
    radial-gradient(
      circle,
      ${({ theme }) => `${theme.button}14`},
      transparent 50%
    );
`;

export const StartIcon = styled.div`
  margin-bottom: 10px;

  font-size: 58px;

  filter:
    drop-shadow(
      0 0 18px
      ${({ theme }) => `${theme.button}75`}
    );
`;

export const StartTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.text};

  font-size: 30px;
  font-weight: 900;

  text-shadow:
    0 0 8px ${({ theme }) =>
        `${theme.button}80`},
    0 0 22px ${({ theme }) =>
        `${theme.button}55`};
`;

export const StartText = styled.p`
  max-width: 430px;

  margin: 10px 0 20px;

  color: ${({ theme }) => theme.muted};

  font-size: 14px;
  line-height: 1.6;
`;

export const StartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  min-width: 130px;
  height: 43px;

  border: none;
  border-radius: 11px;

  background: ${({ theme }) => theme.button};

  color: #111;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  box-shadow:
    0 8px 25px ${({ theme }) =>
        `${theme.button}45`};

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 12px 30px ${({ theme }) =>
        `${theme.button}65`};
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const GameHint = styled.div`
  position: absolute;

  bottom: 12px;
  left: 50%;

  transform: translateX(-50%);

  color: ${({ theme }) => theme.muted};

  font-size: 10px;

  opacity: 0.75;

  pointer-events: none;
`;

export const GameOver = styled(StartScreen)`
  background:
    radial-gradient(
      circle,
      ${({ theme }) => `${theme.button}18`},
      transparent 55%
    );
`;

export const FinalScore = styled.div`
  margin: 10px 0;

  color: ${({ theme }) => theme.button};

  font-size: 58px;
  font-weight: 900;

  text-shadow:
    0 0 15px ${({ theme }) =>
        `${theme.button}80`},
    0 0 40px ${({ theme }) =>
        `${theme.button}45`};
`;

export const NewRecord = styled.div`
  color: ${({ theme }) => theme.button};

  font-size: 12px;
  font-weight: 900;

  letter-spacing: 2px;
`;

export const ResultStats = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
`;

export const ResultItem = styled.div`
  min-width: 110px;

  padding: 10px 14px;

  border: 1px solid
    ${({ theme }) => `${theme.button}25`};

  border-radius: 12px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(255,255,255,.05)"
            : "rgba(255,255,255,.45)"};
`;

export const ResultLabel = styled.div`
  color: ${({ theme }) => theme.muted};

  font-size: 9px;
  text-transform: uppercase;
`;

export const ResultValue = styled.div`
  margin-top: 3px;

  color: ${({ theme }) => theme.text};

  font-size: 18px;
  font-weight: 800;
`;

export const ResultButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ResultButton = styled(StartButton)`
  min-width: 130px;
`;

export const SecondaryButton = styled.button`
  min-width: 90px;
  height: 43px;

  border: 1px solid
    ${({ theme }) => `${theme.button}35`};

  border-radius: 11px;

  background: transparent;

  color: ${({ theme }) => theme.text};

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
        `${theme.button}15`};

    transform: translateY(-2px);
  }
`;

export const JournalToggle = styled.button`
  position: absolute;
  z-index: 100;

  top: 50%;
  right: -1px;

  display: flex;
  align-items: center;
  gap: 7px;

  padding: 10px 9px;

  transform: translateY(-50%);

  border: 1px solid
    ${({ theme }) => `${theme.button}35`};

  border-right: none;

  border-radius: 12px 0 0 12px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(25,25,25,.82)"
            : "rgba(255,255,255,.68)"};

  backdrop-filter: blur(16px);

  color: ${({ theme }) => theme.button};

  font-size: 10px;
  font-weight: 800;

  cursor: pointer;

  writing-mode: vertical-rl;

  box-shadow:
    0 0 20px ${({ theme }) =>
        `${theme.button}20`};

  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
        `${theme.button}18`};

    box-shadow:
      0 0 25px ${({ theme }) =>
        `${theme.button}40`};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Journal = styled.aside`
  position: absolute;
  z-index: 200;

  top: 50%;
  right: 0;

  width: min(340px, 92%);

  max-height: 80%;

  padding: 16px;

  box-sizing: border-box;

  transform: translateY(-50%);

  overflow: hidden;

  border: 1px solid
    ${({ theme }) => `${theme.button}40`};

  border-radius: 18px 0 0 18px;

  background: ${({ theme }) =>
        theme.background === "#111111"
            ? "rgba(20,20,20,.88)"
            : "rgba(255,255,255,.86)"};

  backdrop-filter: blur(24px) saturate(160%);

  box-shadow:
    -20px 20px 60px rgba(0,0,0,.2),
    0 0 50px ${({ theme }) =>
        `${theme.button}20`};

  animation: ${fadeIn} 0.25s ease;
`;

export const JournalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const JournalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: 800;

  svg {
    color: ${({ theme }) => theme.button};
  }
`;

export const JournalClose = styled.button`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: transparent;

  color: ${({ theme }) => theme.muted};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.button};
  }
`;

export const JournalPages = styled.div`
  max-height: 52vh;

  overflow-y: auto;

  padding-right: 3px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background: ${({ theme }) =>
        `${theme.button}55`};
  }
`;

export const JournalPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const JournalPageTitle = styled.h3`
  margin: 0 0 5px;

  color: ${({ theme }) => theme.text};

  font-size: 15px;
`;

export const Achievement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  min-height: 54px;

  padding: 8px 10px;

  box-sizing: border-box;

  border: 1px solid
    ${({ $unlocked, theme }) =>
        $unlocked
            ? `${theme.button}45`
            : "rgba(128,128,128,.15)"};

  border-radius: 11px;

  background: ${({ $unlocked, theme }) =>
        $unlocked
            ? `${theme.button}0d`
            : "rgba(128,128,128,.06)"};
`;

export const AchievementIcon = styled.div`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 9px;

  background: ${({ theme }) =>
        `${theme.button}12`};

  font-size: 19px;
`;

export const AchievementInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AchievementName = styled.div`
  color: ${({ theme }) => theme.text};

  font-size: 11px;
  font-weight: 800;
`;

export const AchievementDescription = styled.div`
  margin-top: 2px;

  color: ${({ theme }) => theme.muted};

  font-size: 9px;
  line-height: 1.4;
`;

export const AchievementLocked = styled.span`
  filter: grayscale(1);

  opacity: 0.45;
`;

export const JournalNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 12px;
`;

export const PageButton = styled.button`
  width: 29px;
  height: 29px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ theme }) => `${theme.button}30`};

  border-radius: 8px;

  background: transparent;

  color: ${({ theme }) => theme.button};

  cursor: pointer;

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

export const PageNumber = styled.span`
  color: ${({ theme }) => theme.muted};

  font-size: 10px;
  font-weight: 700;
`;

export const WeatherCollection = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
`;

export const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding: 12px 6px;

  border: 1px solid
    ${({ $unlocked, theme }) =>
        $unlocked
            ? `${theme.button}35`
            : "rgba(128,128,128,.15)"};

  border-radius: 11px;

  background: ${({ $unlocked, theme }) =>
        $unlocked
            ? `${theme.button}0d`
            : "rgba(128,128,128,.06)"};

  opacity: ${({ $unlocked }) =>
        $unlocked ? 1 : 0.5};
`;

export const WeatherIcon = styled.div`
  font-size: 25px;
`;

export const WeatherName = styled.div`
  color: ${({ theme }) => theme.text};

  font-size: 9px;
  font-weight: 700;
`;