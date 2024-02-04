




export const Background = () => {

    const particleArray = []
  
    for(let i= 0; i < 30; i++){
      
        if(i % 2 === 0){

            particleArray.push(
<div className={"particle particleOne"}>  </div>)

        }
        else{
            particleArray.push(
                <div className={"particle particleTwo"}>  </div> )


        }
        
        }



return(


<section className="particle-container">

{particleArray.map(item => item)}




</section>


)

}
