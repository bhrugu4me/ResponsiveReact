import React from 'react';

const SVG = (
	style = {},
	fill = '',
	stroke = '',
	width = '100%',
	className = '',
	viewBox = '0 0 500 500'
) => (
	<svg
		width={width}
		style={style}
		height={width}
		viewBox={viewBox}
		stroke={stroke}
		xmlns='http://www.w3.org/2000/svg'
		className={`svg-icon ${className || ''}`}
		xmlnsXlink='http://www.w3.org/1999/xlink'
		enableBackground='new 0 0 500 500'
	>
		<path
			clipRule='evenodd'
			fill={fill}
			d='M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V68.29c0-20.077-16.262-36.34-36.34-36.34H68.29c-20.077,0-36.34,16.264-36.34,36.34V431.711z   M259.086,413.538V268.172h-36.342v-54.514h36.342c0-93.671,3.993-99.939,118.112-99.939v54.513  c-60.149,0-54.514,3.362-54.514,45.427h54.514v54.514h-54.514v145.366H259.086z'
			fillRule='evenodd'
		/>
	</svg>
);

export default SVG;
