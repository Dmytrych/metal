import { useState } from "react"
import "./index.css"

export default function MultiChoice({onSelectionChanged}) {
    var multiChoiceButtons = ["Metal", "Copper", "Wow"]

    var [selection, setSelection] = useState()

    var onElementSelection = (name) => {
        setSelection(name);
        onSelectionChanged(name);
    }

    return <div className="units-column">
        {
            multiChoiceButtons.map(element => <MultiChoiceButton key={element} name={element} onSelection={onElementSelection} isSelected={selection === element}/>)
        }
    </div>
}

const MultiChoiceButton = ({name, onSelection, isSelected}) => {
    return <div className={"choice-button" + (isSelected ? " multi-choice-button-selected" : " multi-choice-button")} onClick={() => {onSelection(name)}}>{name}</div>
}