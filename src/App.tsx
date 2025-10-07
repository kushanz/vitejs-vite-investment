// import { useState } from 'react'
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:100000,
    annualInvestment: 20000,
    expectedReturn: 5000,
    duration: 36
})
function handleInput(userIndetify:string,newValue:number) {
  setUserInput((previouseValue) => {
      return {
          ...previouseValue,
          [userIndetify]: +newValue
      }
  })
}

  return (
    <>
      <Header />
      <UserInput userInput={userInput} inputChange={handleInput} />
      <Results input={userInput}></Results>
    </>
  )
}

export default App
