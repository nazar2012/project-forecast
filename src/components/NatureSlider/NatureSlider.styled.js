import styled, { keyframes } from "styled-components";
const backgroundAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
const lightAnimationOne = keyframes`
	0% {
		transform: translate(0, 0) scale(1);
	}
	50% {
		transform: translate(150px, 60px) scale(1.2);
	}
	100% {
		transform: translate(0, 0) scale(1);
	}
`;
const lightAnimationTwo = keyframes`
	0% {
		transform: translate(0, 0) scale(1);
	}
	50% {
		transform: translate(-120px, -80px) scale(1.15);
	}
	100% {
		transform: translate(0, 0) scale(1);
	}
`;
export const NatureSection = styled.section`
	position: relative;
	width: 100vw;
	margin-left: calc(50% - 50vw);
	margin-top: 60px;
	padding: 55px 0 65px;
	box-sizing: border-box;
	overflow: hidden;
	background:
		linear-gradient(
			120deg,
			#f2f5f4,
			#e4ece9,
			#f8f8f8,
			#e6efec,
			#f2f5f4
		);
	background-size: 300% 300%;
	animation: ${({ $visible }) =>
    $visible
      ? `${backgroundAnimation} 14s ease-in-out infinite`
      : "none"};
	border-top: 1px solid #ffffff;
	border-bottom: 1px solid #e5e5e5;
	box-shadow:
		0 -10px 35px rgba(0, 0, 0, 0.04),
		0 10px 35px rgba(0, 0, 0, 0.05);
	&::before {
		content: "";
		position: absolute;
		width: 450px;
		height: 450px;
		top: -220px;
		left: -160px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.65);
		filter: blur(35px);
		animation: ${({ $visible }) =>
    $visible
      ? `${lightAnimationOne} 12s ease-in-out infinite`
      : "none"};
		pointer-events: none;
	}
	&::after {
		content: "";
		position: absolute;
		width: 500px;
		height: 500px;
		right: -220px;
		bottom: -280px;
		border-radius: 50%;
		background: rgba(210, 225, 220, 0.5);
		filter: blur(40px);
		animation: ${({ $visible }) =>
    $visible
      ? `${lightAnimationTwo} 15s ease-in-out infinite`
      : "none"};
		pointer-events: none;
	}
`;
export const NatureTitle = styled.h2`
	position: relative;
	z-index: 10;
	width: calc(100% - 80px);
	margin: 0 auto 40px;
	font-size: 28px;
	font-weight: 500;
	line-height: 1.2;
	letter-spacing: 2px;
	color: #111111;
	opacity: 1;
	transform: none;
	filter: none;
	transition:
		letter-spacing 0.5s ease,
		transform 0.5s ease;
`;
export const Slider = styled.div`
	position: relative;
	z-index: 5;
	width: 100%;
	height: 390px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: visible;
`;
export const Slide = styled.div`
	position: absolute;
	left: 50%;
	width: ${({ $position }) =>
    $position === 0 ? "590px" : "340px"};
	height: ${({ $position }) =>
    $position === 0 ? "350px" : "220px"};
	overflow: hidden;
	cursor: pointer;
	background: #dddddd;
	transform:
		translateX(
			${({ $position }) => {
    if ($position === 0) {
      return "-50%";
    }
    if ($position === -1) {
      return "calc(-50% - 390px)";
    }
    if ($position === 1) {
      return "calc(-50% + 390px)";
    }
    if ($position === -2) {
      return "calc(-50% - 780px)";
    }
    return "calc(-50% + 780px)";
  }}
		)
		scale(
			${({ $position }) =>
    $position === 0 ? "1" : "0.86"}
		);
	opacity: ${({ $position }) =>
    Math.abs($position) > 2
      ? "0"
      : $position === 0
        ? "1"
        : "0.65"};
	z-index: ${({ $position }) =>
    20 - Math.abs($position)};
	filter: ${({ $position }) =>
    $position === 0 ? "none" : "brightness(0.72)"};
	box-shadow: ${({ $position }) =>
    $position === 0
      ? "0 30px 70px rgba(0, 0, 0, 0.25)"
      : "0 12px 30px rgba(0, 0, 0, 0.12)"};
	transition:
		transform 0.7s ease,
		width 0.7s ease,
		height 0.7s ease,
		opacity 0.6s ease,
		filter 0.6s ease,
		box-shadow 0.7s ease;
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: 2;
		pointer-events: none;
		background:
			linear-gradient(
				120deg,
				rgba(255, 255, 255, 0.18),
				transparent 35%,
				transparent 65%,
				rgba(255, 255, 255, 0.08)
			);
	}
	&::after {
		content: "";
		position: absolute;
		inset: 0;
		
		z-index: 3;
		pointer-events: none;
		background: ${({ $position }) =>
    $position === 0
      ? "linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.2))"
      : "rgba(0, 0, 0, 0.08)"};
	}
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		transition: transform 0.8s ease;
	}
	&:hover img {
		transform: scale(1.06);
	}
	&:hover {
		box-shadow:
			0 35px 80px rgba(0, 0, 0, 0.28);
	}
`;
export const Loading = styled.div`
	position: relative;
	z-index: 5;
	width: 100%;
	height: 390px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	color: #555555;
`;
export const ErrorMessage = styled.div`
	position: relative;
	z-index: 5;
	width: 100%;
	height: 390px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 15px;
	color: #555555;
`;