import styled from "styled-components";

interface TraceStrokeDownProps {
	isStrokeDown: boolean;
}

export const Container = styled.li<TraceStrokeDownProps>`
	position: relative;
	display: flex;
	align-items: center;
	color: #fff;
	margin: auto;

	margin-top: 1rem;

	::after,
	::before {
		position: absolute;
		content: "";
		width: 0.3rem;
		height: calc(100% + 1rem);
		top: calc(46%);
		left: 0.5rem;
		background-color: ${({ isStrokeDown }) =>
			isStrokeDown ? `#04d361` : `#3c3c42`};
		z-index: 10;
	}

	:last-child::after,
	:last-child::before {
		display: none;
	}
`;

export const Radio = styled.input`
	position: relative;
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 50%;
	z-index: 14;
	background-color: #3c3c42;

	:active {
		background-color: #04d361;
		opacity: 0.4;
	}

	:checked {
		background-color: #04d361;
	}

	:hover {
		animation-fill-mode: forwards;
		animation-duration: 500ms;
		animation-timing-function: ease;
		animation-name: shadow;
	}
`;

interface ContentProps {
	isEnabled: boolean;
}
export const Content = styled.div<ContentProps>`
	margin-left: 1rem;
	padding: 0.5rem;
	background-color: #202024;
	border-radius: 0.25rem;
	cursor: pointer;
	z-index: 123232;
	border: 4px solid ${({ isEnabled }) => (isEnabled ? `#04d361` : `#3c3c42`)};
	::before {
		position: absolute;
		content: "";
		width: 1.84rem;
		height: 4px;

		top: 45%;
		left: 8px;

		background-color: ${({ isEnabled }) => (isEnabled ? `#04d361` : `#3c3c42`)};
	}

	line-height: 1.25rem;
	span {
		font-size: 1.4rem;
		font-weight: bold;
		color: ${({ isEnabled }) => (isEnabled ? `#04d361` : `#FFF`)};
	}

	p {
		word-wrap: break-word;
		font-size: 1rem;
	}

	:hover {
		animation-fill-mode: forwards;
		animation-duration: 500ms;
		animation-timing-function: ease;
		animation-name: shadow;
	}
`;
