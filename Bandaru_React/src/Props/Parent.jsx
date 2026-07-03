import React from 'react'
import Child from './Child'

const Parent = () => {

    const obj={
        id:1,
        name:"Kusuma",
        age:25
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name ={"Srinivas"} age={25}  user={obj}/>
    </div>
  )
}

export default Parent
