import * as React from "react"

const DeleteBtn = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 330 330"
		style={{
			enableBackground: "new 0 0 330 330",
			fill: "currentColor",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path d="M240 121.076H30V275c0 8.284 6.716 15 15 15h97.596c19.246 24.348 49.031 40 82.404 40 57.897 0 105-47.103 105-105 0-52.805-39.184-96.623-90-103.924zM225 300c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zM240 90h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-45V15c0-8.284-6.716-15-15-15H75c-8.284 0-15 6.716-15 15v45H15C6.716 60 0 66.716 0 75s6.716 15 15 15h225zM90 30h90v30H90V30z" />
		<path d="M256.819 193.181c-5.857-5.858-15.355-5.858-21.213 0L225 203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213L203.787 225l-10.606 10.606c-5.858 5.858-5.858 15.355 0 21.213a14.954 14.954 0 0 0 10.606 4.394c3.839 0 7.678-1.465 10.607-4.394L225 246.213l10.606 10.606a14.954 14.954 0 0 0 10.607 4.394 14.95 14.95 0 0 0 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213L246.213 225l10.606-10.606c5.859-5.859 5.859-15.355 0-21.213z" />
	</svg>
)

export default DeleteBtn
