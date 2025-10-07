import { useState } from "react"

export default function UserInput() {
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
                [userIndetify]: newValue
            }
        })
    }
    return (
        <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(event:any) => handleInput('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(event:any) => handleInput('annualInvestment',event.target.value)} />
            </p>
        </div>
        <div className="input-group">
        <p>
            <label>Expected return</label>
            <input type="number" value={userInput.expectedReturn} onChange={(event:any) => handleInput('expectedReturn',event.target.value)} />
        </p>
        <p>
            <label>Duration</label>
            <input type="number" value={userInput.duration} onChange={(event:any) => handleInput('duration',event.target.value)} />
        </p>
    </div>
        </section>
    )
}