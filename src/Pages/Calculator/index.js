import "./index.css"
import MultiChoice from "../../components/MultiChoice/index"

export default function Calculator() {
    return <div className="calcualtor-window unit-flex">
        <div className="app-sidebar units-row unit-flex full-height">
            <div className="unit-40">
                <MultiChoice onSelectionChanged={name => console.log(name)}/>
            </div>
            <div className="unit-60 units-column">
                <div>Forms</div>
                <div>Spiral</div>
            </div>
        </div>
        <div className="details">
            Calculator
        </div>
    </div>
}