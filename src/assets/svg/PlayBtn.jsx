import * as React from "react"

const PlayBtn = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 485.74 485.74"
		fill="currentColor"
		className="bi bi-play-circle-fill"
		style={{
			enableBackground: "new 0 0 485.74 485.74",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path d="M242.872 0C108.732 0 .004 108.736.004 242.864c0 134.14 108.728 242.876 242.868 242.876 134.136 0 242.864-108.736 242.864-242.876C485.736 108.736 377.008 0 242.872 0zm95.54 263.94-134.36 92.732c-16.776 11.588-30.584 4.248-30.584-16.316V145.38c0-20.556 13.808-27.9 30.584-16.312l134.32 92.732c16.764 11.584 16.804 30.548.04 42.14z" />
	</svg>
)

export default PlayBtn
