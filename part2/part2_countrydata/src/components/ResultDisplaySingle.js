import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowOne = ([ langArr ]) => {
	return (
		<div>
			{langArr[1]}
		</div>
	)	
}
			

const ResultDisplaySingle = (props) => {

	//const countryFacts = props.countryInfo
	//console.log(countryFacts, 'is country facts which is props country info. it is an array of length 1. the object in it has the key 0. the value is the object that contains all the country data')
	
	const languages = props.countryInfo.map((info) => info.languages)
	//console.log(cFMap, 'is cFMap which is country facts map languages. it is an array of length 1. the object in it has a key of 0 and a value of the languages')
	
	//cFMap.forEach(console.log)
	
	//Object.keys(cFMap[0]).forEach(k=>console.log(cFMap[0][k], 'is what birb said to do'))
	
//	console.log(Object.keys(cFMap[0]).forEach(k=>cFMap[0][k]), 'is the full thing') <- outputs undefined
	
	//const cFMap0 = cFMap[0]
	//console.log(cFMap0, 'is cFMap at index 0. it is an object with four key-value pairs')
	
	const langVal = Object.values(languages[0])
	//console.log(cFMap0Val, 'is object values cfmap0. it is an array with four values, with the values of the object')
	
	const renderLang = langVal.map((item)=>
							<div><li>{item}</li></div>)
	
	//const cFMap0Ent = Object.entries(cFMap[0])
	//console.log(cFMap0Ent, 'is object entries cfmap0. it is an array of four arrays, each with two values in the array.')

//	<ShowOne lang={languages}/>
	
	return (
		<div>
			<h1>{props.countryInfo.map((izen) => izen.name.common)}</h1>
			<p></p>
			<p></p>
			<p>Capital: {props.countryInfo.map((cap) => cap.capital)}</p>
			<p>Area: {props.countryInfo.map((land) => land.area)}</p>
			<h3>Languages</h3>
					{renderLang}
			<p></p>
			<img src={props.countryInfo.map((banner)=>banner.flags.png)} alt="Country flag"/>
		</div>
	)
}	

export default ResultDisplaySingle;