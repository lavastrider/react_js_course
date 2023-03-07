import { useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {

  useEffect(() => {
    console.log('effect run, filter is now', props.filter)

    // skip if filter is not defined
    if (props.filter) {
      console.log('fetching country data...')
      axios

      	//get the entire json document from the site
        .get("https://restcountries.com/v3.1/all")

        //then edit/refine response
        .then(response => {

        	//console.log(`${response.data.length} is response data length while ${filter.length} is filter length`)
        	  			
  			props.setCountryData(response.data.filter((item) => item.name.common.toLowerCase().includes(props.filter.toLowerCase())))      	
        	
        })
    }
  }, [props.filter])
  
  //render effect when first rendered and when filter is changed

  const handleFilterChange = (event) => {
  	event.preventDefault()
  	//when the input is changed, re-set value to filter
    props.setFilter(event.target.value)
  }

  return (
    <div>
      <form>
        find countries:
        	<input 
        		value={props.filter} 
        		onChange={handleFilterChange} 
        	/>
      </form>
    </div>
  )
}

export default Filter;