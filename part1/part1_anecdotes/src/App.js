import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const Button = (props) => {
	return (
		<button onClick={props.onClick}>
			{props.text}
		</button>
	)
}

const VoteDisplay = (props) => {
	console.log(props.votes, 'is props dot votes')
	console.log(props.rnJesus, 'is props dot rnJesus')	
	
	return (
			<div>
			<p>This quote has {props.votes} votes</p>
			</div>
			)
		
	//for value of rnJesus, return text with 
	
	
}



const DisplayMostVote = (props) => {
	
	return (
		<div>
			<p>This quote has {props.votes} votes</p>
		</div>
		)		
}


const App = () => {
	//this is the list of quotes
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
    	'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    	'Premature optimization is the root of all evil.',
    	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    	'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    	'The only way to go fast, is to go well.'
    ]
    
    //this is the index of the randomly selected quote
    const [selected, setSelected] = useState(0)
    
    //this is the randomly generated number to randomly select a quote
    //it is set here to use outside of onClick
    const [rngExport, setRNG] = useState(0)
  	
  	
  	//this is the useState array of the points
  	//it contains the amount of votes each quote has
  	const [points, setPoints] = useState([ 0,0,0,0,0,0,0,0])

  	
  	//location is the variable for knowing what the quote with highest votes is
  	const [location, setLocation] = useState(0)
  	
  	//indexLocale is the index of points
  	const [indexLocale, setIndexLocale] = useState(0)
  	
  	const [show, setShow] = useState(points[selected])
  	

    
    const onClick = () => {
    	//roll rng
    	const rng = Math.floor(Math.random() * 8)
    	
    	//console.log msg to make show that random number created correctly
    	console.log(rng, 'is the randomly generated number')
    	
    	//console.log msg to make show what the previous anecdote was
    	console.log(anecdotes[selected], 'is the previous one')
    	
    	//assign the newly selected random phrase 
    	setSelected(rng)
    	
    	//console.log msg to make show that the quote is the same as the one in the list 
    	console.log(anecdotes[rng], 'is the current one')
    	
    	//assign the generated rng to the one marked for export
    	setRNG(rng)
    	
    	//assign location to be the same number as rngxport
    	setLocation(rng)
    	
    	//console.log msg to make show that the rng and location for export was correctly assigned
    	console.log(rngExport, 'for export is the same as the created rng', rng)
    	console.log(location, 'for location export is the same as the created rng', rng)
    	
    	//set the shown vote to be the one that is associated with the selected quote
    	setShow(points[selected])
    	
    	
    	return (
    		<div>
    			selected
    		</div>
    	)
    }
    
	const voting = () => {
	
		console.log('START')
		
		console.log(points[rngExport], 'is the value of the key at rng export index using points [ rng export ] words') 
		console.log(points[indexLocale], 'is the value of array at index indexLocale using the index and hoping it works with points [ index locale ] words')
		
		//setShow(points[selected])
		
		const copyPoints = [...points]
		console.log(copyPoints, 'is array of copied points')
		
		copyPoints[rngExport] += 1
		console.log(copyPoints, 'is array of copied points after add')
		
		//points.splice(rngExport, 1, copyPoints[rngExport])
		
		//set the shown vote to be the one that is associated with the selected quote
		setShow(points[selected])
		
		updatePoints(points, rngExport, copyPoints[rngExport])
			
		//once voted, does check for highest value
		getMost()
		
		//set the shown vote to be the one that is associated with the selected quote
		setShow(points[selected])
			
	}
	
	const getMost = () => { 
		//setting hV to first value to initialize
		var highestVal = points[0]
		
		for (const quote in points) {
			console.log(points[quote])
			highestVal = Math.max(highestVal, points[quote])
			console.log(highestVal, 'is the value of highest vote in first for loop')	
			}
		
		for (const quote in points) {
			if (points[quote] === highestVal) {
				setIndexLocale(quote)
				console.log('we assigned the index of highestVal')
				}
		} 
	}
	
	const updatePoints = (arr, rngExported, state) => {
		console.log(arr[rngExported], 'is array before splice')
		arr.splice(rngExported, 1, state)
		console.log(arr[rngExported], 'is array after splice')
	}
    
    return (
    	<div>
    		<h1>Anecdote of the day</h1>
    		{anecdotes[selected]}
    		<VoteDisplay votes={points[selected]} rnJesus={rngExport}/>
    		<p></p>
    		<Button
    			onClick = {voting}
    			text='vote'
    		/>
    		<Button
				onClick = {onClick}
				text='next anecdote'
			/>
			<p></p>
			<h1>Anecdote with most votes</h1>
			{anecdotes[indexLocale]}
			<DisplayMostVote votes={points[indexLocale]} quote={anecdotes[indexLocale]}/>
    	</div>
    	
    )
 }

export default App;