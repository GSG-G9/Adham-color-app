import React from "react";

const Red = (props) => {
  const { 
    history: { push }
   } = props;
  return(
    <div style={{backgroundColor:'red'}}>
      <div>This is Red </div>
      <div>Isn't it beautiful</div>

      <button onClick={() => push('/')}>
        <h4>Back to home page</h4>
      </button>
      
    </div>
      
    
  )
}

export default Red;