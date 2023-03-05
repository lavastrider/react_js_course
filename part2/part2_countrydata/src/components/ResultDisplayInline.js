

const ResultDisplayInline = ({ names, onShow }) => {	
	
	return (
		<li>
			{names}
			<button onClick={onShow}>show</button>
		</li>
	)
}

export default ResultDisplayInline;