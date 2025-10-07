import { useState } from "react"

export default function UserInput({inputChange,userInput}) {

    return (
        <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInvestment} onChange={(event:any) => inputChange('initialInvestment',event.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInvestment} onChange={(event:any) => inputChange('annualInvestment',event.target.value)} />
            </p>
        </div>
        <div className="input-group">
        <p>
            <label>Expected return</label>
            <input type="number" value={userInput.expectedReturn} onChange={(event:any) => inputChange('expectedReturn',event.target.value)} />
        </p>
        <p>
            <label>Duration</label>
            <input type="number" value={userInput.duration} onChange={(event:any) => inputChange('duration',event.target.value)} />
        </p>
    </div>
        </section>
    )
}