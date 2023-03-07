import axios from 'axios'

const ResultDisplaySingle = (props) => {

//	const apiKey = props.apiKey
//	console.log(apiKey, 'is apiKey in display single')
	const lati = props.countryInfo.map((lat)=>lat.latlng[0])
	const longi = props.countryInfo.map((long)=>long.latlng[1])

	axios
		//get the weather data from the open weather site
		.get(`http://api.weatherapi.com/v1/current.json?key=${props.apiKey}&q=${props.countryInfo.map((izen)=>izen.capital[0])}`)
		
		//refine response data
		.then(response => {
			console.log(response.data, 'is response data')
			console.log(Object.values(response.data), 'is response data object values')
			console.log(Object.values(response.data)[1].temp_f, 'is response data object values 1 tempf') 
			props.setTemp(Object.values(response.data)[1].temp_f)
			props.setWind(Object.values(response.data)[1].wind_mph)
			props.setIcon(Object.values(response.data)[1].condition.icon)
			props.setAlt(Object.values(response.data)[1].condition.text)
		})
		
	console.log(props.alt, 'is alt')
	
	const languages = props.countryInfo.map((info) => info.languages)
	//console.log(cFMap, 'is cFMap which is country facts map languages. it is an array of length 1. the object in it has a key of 0 and a value of the languages')	

	
	const langVal = Object.values(languages[0])
	//console.log(cFMap0Val, 'is object values cfmap0. it is an array with four values, with the values of the object')
	
	const renderLang = langVal.map(
							(item)=>
								<div>
									<li>
										{item}
									</li>
								</div>
							)
	
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
			<img src={props.countryInfo.map((banner)=>banner.flags.png)} alt={props.countryInfo.map((text)=>text.alt)}/>
			<p></p>
			<h2>Weather in {props.countryInfo.map((cop) => cop.capital)}</h2>
			<p>Temperature: {props.temp} Fahrenheit</p>
			<img src={props.icon} alt={props.alt}/>
			<p>Wind: {props.wind} mph</p>
			<p></p>
		</div>
	)
}	

export default ResultDisplaySingle;