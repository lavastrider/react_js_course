import { useState } from 'react'
import Filter from './components/Filter'
import ResultDisplayMany from './components/ResultDisplayMany'	

const App = () => {
	//filter is the typed letters in the filter box 
	const [filter, setFilter] = useState('')
	
	//countrydata is the returned values that the api will send of countries with
	//filter in the name
	const [countryData, setCountryData] = useState([])
	
	const api_key = process.env.REACT_APP_API_KEY
	
	const [icon, setIcon] = useState('')
	const [temp, setTemp] = useState('')
	const [wind, setWind] = useState('')
	const [alt, setAlt] = useState('')
	


  return (
    <div>
      <Filter 
      	filter={filter}
      	setFilter={setFilter}
      	countryData={countryData}
      	setCountryData={setCountryData}
      	/>
      <div>
      	<ResultDisplayMany 
      		countryDatas={countryData} 
      		filters = {filter}
      		setFilters={setFilter}
      		apiKey={api_key}
      		icon={icon}
      		setIcon={setIcon}
      		temp={temp}
      		setTemp={setTemp}
      		wind={wind}
      		setWind={setWind}
      		alt={alt}
      		setAlt={setAlt}/>
      </div>
    </div>
  )
}

export default App;