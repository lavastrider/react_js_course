import log from './logo.svg';
import './App.css';
import {useState } from 'react'


const Button = (props) => {
	return (
		<button onClick={props.onClick}>
			{props.text}
		</button>
	)
}

const StatisticLine = (props) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<p>{props.text}</p>
					</td>
					<td>
						<p>{props.value}</p>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

const Statistics = (props) => {	
	//calculating the average
	var total = 0
	//console.log(total, 'is total')
	
	//console.log(props, 'is props')
	
	if (props.allRat.length === 0) {
		//console.log('we didnt runnnn')
		return (
			<div>
				<p>No feedback given</p>
			</div>
		)
	}
	
	//console.log(props[1], 'is allRat[1]')
	//console.log(props.allRat.length, 'is allRat length')
	
	if (props.allRat.length > 0) {
		for (var i = 0; i < props.allRat.length; i++) {
			total += props.allRat[i]
			//console.log(props[i], 'is allRat[', i, ']')
			//console.log(total, 'is total')
			}
		var avg = total / props.allRat.length
		//console.log(avg, 'is avg')
	}	
	
	//calculating positive percent
	var positive = props.good / props.allRat.length
	positive *= 100
	//console.log(props.good, 'is amount good rating')
	
	return (
		<div>
			<StatisticLine text = 'good' value = {props.good}/>
			<StatisticLine text = 'neutral' value = {props.neutral}/>
			<StatisticLine text = 'bad' value = {props.bad}/>
			<StatisticLine text = 'all' value = {props.all}/>
			<StatisticLine text = 'average' value = {avg}/>
			<StatisticLine text = 'positive' value = {positive}/>
		</div>		
	)
	
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [allRat, setAll] = useState([])
	const [avg, setAvg] = useState(0)
	const [positive, setPositive] = useState(0)
	
	const handleGoodClick = () => {
		setGood(good+1)
		console.log(good, 'did good add')
		setAll(allRat.concat(1))
		console.log(allRat, 'did good all add')		
	}
		
	const handleNeutralClick = () => {
		setNeutral(neutral+1)
		console.log('did neutral add')
		setAll(allRat.concat(0))
		console.log(allRat, 'did neutral all add')
	}
	
	const handleBadClick = () => {
		setBad(bad+1)
		console.log('did bad add')
		setAll(allRat.concat(-1))
		console.log(allRat, 'did bad all add')
	}
	
	return (
		<div>
			<h1>give feedback</h1>
			<p></p>
			<Button
				onClick={handleGoodClick}
				text='good'
			/>
			<Button
				onClick={handleNeutralClick}
				text='neutral'
			/>
			<Button
				onClick={handleBadClick}
				text='bad'
			/>
			<h1>statistics</h1>
			<p></p>
			<Statistics good = {good} neutral = {neutral} bad = {bad} all = {allRat.length} allRat = {allRat} /> 
		</div>
	)
}


export default App;
