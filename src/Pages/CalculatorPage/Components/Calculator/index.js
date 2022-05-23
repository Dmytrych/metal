import CalculationForm from "./Components/CalculationForm"

export default function Calculator({form, metal}) {
    return <div>
        <CalculationForm form={form} metal={metal}/>
    </div>
}