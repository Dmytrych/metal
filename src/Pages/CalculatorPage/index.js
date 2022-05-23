import "./index.css"
import MultiChoice from "../../Components/MultiChoice/index"
import Calculator from "./Components/Calculator"
import { metals, metalFormsMapping} from "./multiChoiceConstants"
import { useState } from "react"

export default function CalculatorPage() {
    const [metalSelection, setMetalSelection] = useState(metals[0])
    const [formsList, setFormsList] = useState(metalFormsMapping[metalSelection])
    const [formSelection, setFormSelection] = useState(formsList[0])

    const handleMetalChange = (metal) => {
        setMetalSelection(metal);
        setFormsList(metalFormsMapping[metal])
        setFormSelection(metalFormsMapping[metal][0])
    }

    return <div className="unit-flex unit-y-center unit-x-center">
        <div className="calcualtor-window unit-flex thin-border units-column">
            <div className="top-menu full-width"></div>
            <div className="unit-flex thin-border full-height">
                <div className="app-sidebar units-row unit-flex full-height thin-border">
                    <div className="unit-40 toolbar-color thin-border">
                        <MultiChoice onSelectionChanged={handleMetalChange} buttonNames={metals} selection={metalSelection}/>
                    </div>
                    <div className="unit-60 toolbar-color units-column thin-border">
                        <MultiChoice onSelectionChanged={setFormSelection} buttonNames={formsList} selection={formSelection}/>
                    </div>
                </div>
                <div className="details">
                    <Calculator form={formSelection} metal={metalSelection}/>
                </div>
            </div>
        </div>
    </div>
}