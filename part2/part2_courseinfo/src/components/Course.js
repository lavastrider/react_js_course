const Header = (propsH) => {
	//renders name of course
	console.log('we were called')
	console.log(propsH, 'is propsH')
	console.log(propsH.heading, 'is propsh heading')
	
	
	return (
	 	<div>
	 		<h1>{propsH.heading}</h1>
	 	</div>
	 	)
 };
 
 const Content = (propsC) => {
 	//renders parts
 	//console.log(propsC.parts[0].name)
 
 	
 	
	const testing2 = propsC.info.map((title) => title.name)
	console.log(testing2, 'is names of the courses in part array inside coursse component')
	
	const testing3 = propsC.info.map(
		(title) => 
			<li key={title.id}> 
				{title.name} {title.exercises} 
			</li>
		)
	console.log(testing3, 'is testing3 for list of names and exercise amt')
	
 	return(
 		testing3
 	)
 };
 
  const Total = (propsT) => {
 	//renders total
 	
 	const questionAmt = propsT.calc.map(
		(title) => 
			title.exercises 
		)
	console.log(questionAmt, 'is questionAmt array for list of names and exercise amt')
	
 	const sum = questionAmt.reduce(
 		(accum, currVal) => accum + currVal)
   
	return (
		<div>
			<p></p>
			<b>total of {sum} exercises</b>
	      </div>
	   )
 };

const App = ({ course }) => {

	
	
	return (
		<div>
			<Header heading = {course.name}/>
			<Content info = {course.parts}/>
			<Total calc={course.parts}/>
		</div>
		)
			
}

export default App;