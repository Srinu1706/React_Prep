import React from 'react'

const filter = () => {

    let names=['pushpa','Raka','Aaraya','Bunny']
  return (
    <div>
      {
        names.filter((name)=>name!=='pushpa').map((name)=><h1>{name}</h1>)  
            
        
      }
    </div>
  )
}

export default filter
