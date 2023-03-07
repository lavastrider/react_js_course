import ResultDisplaySingle from './ResultDisplaySingle'
import ResultDisplayInline from './ResultDisplayInline' 

const ResultDisplayMany = (props) => {

//	console.log(props.apiKey, 'is api key in display many')

	const onShowSingle = (commonName) => {
	
		console.log('he wanted to show the single country that was chosen by clicked button')
		console.log(commonName, 'is common name')
		
		console.log(props.filters, 'is props filters')
		//maybe setFilter(commonName), and then call RDS?
		props.setFilters(commonName)
		
		return (
			<div>
				<ResultDisplaySingle 
					countryInfo={props.countryDatas}
					icon={props.icon}
					setIcon={props.setIcon}
					apiKey={props.apiKey}
					temp={props.temp}
					setTemp={props.setTemp}
					wind={props.wind}
					setWind={props.setWind}
					alt={props.alt}
					setAlt={props.setAlt}/>
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

//	console.log(props.countryDatas, 'is props country data in result display')
//	console.log(props.countryDatas.length, 'is props countrydata length')
		
	if (props.countryDatas.length === 0) {
		return (
			<h1>There are no matches</h1>
			)
		}
}

export default ResultDisplayMany;