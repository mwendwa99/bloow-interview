import * as React from "react"

const PauseBtn = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		fill="currentColor"
		className="bi bi-play-circle-fill"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm-32 320c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128zm128 0c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128z" />
	</svg>
)

export default PauseBtn
