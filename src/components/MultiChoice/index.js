import { useState } from "react"
import "./index.css"

export default function MultiChoice({onSelectionChanged, buttonNames, selection}) {

    var onElementSelection = (name) => {
        onSelectionChanged(name);
    }

    return <div className="units-column full-height multi-choice-text">
        {
            buttonNames.map(element => <MultiChoiceButton key={element} name={element} onSelection={onElementSelection} isSelected={selection === element}/>)
        }
    </div>
}

const MultiChoiceButton = ({name, onSelection, isSelected}) => {
    return <div className={`choice-button unit-flex unit-x-center unit-x-center ${(isSelected ? "multi-choice-button-selected" : "multi-choice-button")}`} onClick={() => {onSelection(name)}}>
        <p className="button-text">{name}</p>
    </div>
}