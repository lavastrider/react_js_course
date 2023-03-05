const Person = ({ izena, removeEntry}) => {
	
	return (
		<li>
			{izena.name} {izena.number}
			<button onClick={removeEntry}>delete</button>
		</li>
	)
}

export default Person