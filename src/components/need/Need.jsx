import { useState } from "react";

const messages = [
    "Type of driver",
    "Your State",
    "CDL",
    "Drive with Seven Stars",
];

function Need() {
    const [step, setStep] = useState(1);
    function handlePrevious() {
        if (step>1)
        setStep(step-1);
    }

    // function handleNext() {
    //     if (step<4)
    //     setStep(step+1);
    // }

    function handleNext() {
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Redirect to another page when "Apply" is clicked
            window.location.href = "#form";
        }
    }


    return (
        <div className="need">
            <h3 className="need__title">Joining Our Team? You'll Need to Submit:</h3>
            <div className="need__steps">
                <div className="need__numbers">
                    <div className={step >= 1 ? 'need__active' : ""}>1</div>
                    <div className={step >= 2 ? 'need__active' : ""}>2</div>
                    <div className={step >= 3 ? 'need__active' : ""}>3</div>
                    <div className={step >= 4 ? 'need__active' : ""}>4</div>
                </div>
            </div>

            <p className="need__message">{messages[step-1]}</p>

            <div className="need__buttons">
                <button className="need__button" onClick={handlePrevious}>Previous</button>
                <button className="need__button" onClick={handleNext}>{step >= 4 ? 'Apply' : 'Next'}</button>
            </div>
            <p className="need__last">Checked all prerequisites?</p>
            <p className="need__last">Let's hit the road together now!</p>
        </div>
    )
}

export default Need
