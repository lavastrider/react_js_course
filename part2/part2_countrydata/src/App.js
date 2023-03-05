import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ResultDisplayMany from './components/ResultDisplayMany'	

const App = () => {
	//filter is the typed letters in the filter box 
	const [filter, setFilter] = useState('')
	
	//countrydata is the returned values that the api will send of countries with
	//filter in the name
	const [countryData, setCountryData] = useState([])
	
	const [worth, setWorth] = useState([])
	


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
      		worth ={worth}
      		setWorth={setWorth}/>
      </div>
    </div>
  )
}

export default App;