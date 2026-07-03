    import React from 'react'
    
    const Child = (props) => {

        const {name, age, user}=props
      return (
            <div>
            <h2>Child Component</h2>
            <p>Name: {user.name} age:{user.age}</p>
            <p>Name :{name} age :{age}</p>
        </div>
      )
    }
    
    export default Child
    