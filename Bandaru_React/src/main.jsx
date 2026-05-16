import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Assignment2/Home.jsx'
import OnClick from './Event_Handling/OnClick.jsx'
import OnClick_passingAurg from './Event_Handling/OnClick_passingAurg.jsx'
import ArrayL from './Rendring/ArrayL.jsx'
import DropDown from './Event_Handling/DropDown.jsx'
import Todo from './To_DoLIst/Todo.jsx'
import MenuList from './Rendring/MenuList.jsx'
// import Filter from './Rendring/filter.jsx'
// import ProductsA from './Rendring/ProductsA.jsx'
// import ProductsAssignment2 from './Rendring/ProductsAssignment2.jsx'
// import CounterExample from './StateManagment/CounterExample.jsx'
// import SignUp from './StateManagment/SignUp.jsx'
// import Stylee from './Styling/Stylee.jsx'
// import Dynamic from './Styling/Dynamic.jsx'
// import Parents from './Styling/Parents.jsx'
// import Orders from './Styling/Orders.jsx'
// import Assignment_S from './Styling/Assignment_S.jsx'
import StudentMarks from './Styling/StudentMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <OnClick /> */}
    {/* <OnClick_passingAurg /> */}
  {/* <ArrayL /> */}
  {/* { <DropDown /> } */}
  {/* <Todo /> */}
  {/* <MenuList/>
  <Filter/> */}
  {/* <ProductsA/> */}
  {/* <ProductsAssignment2/> */}
  {/* <CounterExample/> */}
  {/* <SignUp/> */}
  {/* <Stylee/> */}
  {/* <Dynamic/> */}
   {/* <Orders/>
  <Parents/> */}
  {/* <Assignment_S/> */}
  <StudentMarks/>
  </StrictMode>,
)
