
function Header(propsH){
//renders name of course
 return (
 	<div>
 		<h1>{propsH.course}</h1>
 	</div>
 	)
 };
 
 function Content(propsC){
 //renders parts
 console.log(propsC.parts[0].name)

 return(
 	<div>
	 	<Part p1 = {propsC.parts[0].name} e1 = {propsC.parts[0].exercises} />
 		<Part p2 = {propsC.parts[1].name} e2 = {propsC.parts[1].exercises} />
 		<Part p3 = {propsC.parts[2].name} e3 = {propsC.parts[2].exercises} /> 		
 	</div>
 )
 
 };
 
 function Total(propsT){
 //renders total
 const sum = propsT.parts[0].exercises + propsT.parts[1].exercises + propsT.parts[2].exercises
   
   return (
     <div>
       <p>
       Number of exercises {sum}
       </p>
      </div>
   )
 };
 
function Part(propsP){
 
 return (
 	<div>
 		<p> {propsP.p1} {propsP.e1} </p>
 		<p> {propsP.p2} {propsP.e2} </p>
 		<p> {propsP.p3} {propsP.e3} </p>
 	</div>
)
 
 };
 


function App() {
  const course = {
  	name: 'Half Stack application development',
  	parts: [
	  	{ name: 'Fundamentals of React',
	  	exercises: 10
	  },
	  {
	  	name: 'Using props to pass data',
	  	exercises: 7
	  },
	  {
	  	name: 'State of a component',
	  	exercises: 14
	  }
	 ]
  }
 
 
  
  return (
    <div>
		<Header course = {course.name} />
		
		<Content parts = {course.parts} />
		
		<Total parts = {course.parts} />
		    	    	
    	
    </div>
  );
}

export default App;
