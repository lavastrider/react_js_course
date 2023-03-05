import { useState, useEffect } from 'react'
import axios from 'axios'
import ResultDisplaySingle from './ResultDisplaySingle'
import ResultDisplayInline from './ResultDisplayInline' 

const ResultDisplayMany = (props) => {

	const onShowSingle = () => {
		return (
			<div>
				<ResultDisplaySingle countryInfo={props.countryDatas}/>
			</div>
			)
	}
	
	const show101 = () => {
		return (
				<div>
				{props.countryDatas.map((izen) => 
					<ResultDisplayInline 
						names = {izen.name.common}
						onShow={() => onShowSingle(izen.name.common)}/>	
				)}
			</div>		
		)
	}
			

	console.log(props.countryDatas, 'is props country data name')
	console.log(props.countryDatas.map((izen) => izen.name.common), 'is props country data names with map')
	
	//if props.length is greater than ten
	if (props.countryDatas.length >= 10) {
		return (
			<h1>Too many matches. Please type more than one letter.</h1>
		)
	}
	
//	const titles = props.countryDatas.map((izen) => izen.name.common)
//	console.log(titles, 'is titles')
	//<ResultDisplayInline name={names}/>
	
	
//	{props.countryDatas.map((izen) => <ResultDisplayInline names = {izen.name.common}/>	)}
	
	//if props.length is less than ten but greater than one
	if (props.countryDatas.length > 1 && props.countryDatas.length < 10) {
		return (
			show101()
		)
	}
	
//	<ResultDisplaySingle countryInfo={props.countryDatas} merit = {props.worth} setMerit = {props.setWorth}/>
	
	//if the number of objects returned is one
	if (props.countryDatas.length === 1) {
		return  (
			onShowSingle()
			)
		}

	console.log(props.countryDatas, 'is props country data in result display')
	console.log(props.countryDatas.length, 'is props countrydata length')

	return (
		<div>
			<p>this is gen return</p>
		</div>
	)
}

export default ResultDisplayMany;