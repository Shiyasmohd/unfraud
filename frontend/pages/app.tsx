import Generate from "../components/Generate Summary/Generate";
import Predict from "../components/Predict Fraud/Predict";

export default function App(){
    return(
        <div className="hero-section flex justify-center items-center" style={{height: "calc(100vh - 76px)"}}>
            <div className="w-full flex justify-around p-8 ">
                <Predict/>
            </div>
        </div>
    )
}