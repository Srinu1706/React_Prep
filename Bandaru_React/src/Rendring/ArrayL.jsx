import React from 'react'

const ArrayL = () => {

    const names=['pushpa','Raka','Aaraya','Bunny']
  return (
    <div>
      {
        names.map((name,index)=>{
            return <h1>{name}</h1>
        })
      }
    </div>
  )
}

export default ArrayL
