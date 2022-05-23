import Armature from "../Armature"
import Bend from "../Bend"
import IBeam from "../IBeam"
import Ribbon from "../Ribbon"
import Sheet from "../Sheet"
import Square from "../Square"
import Cilinder from "../Cilinder"
import Profile from "../Profile"
import Angle from "../Angle"
import Flange from "../Flange"
import Hexagon from "../Hexagon"
import Channel from "../Channel"
import Pipe from "../Pipe"
import constants from "../../../../../../Localization"

const formMapper = (props) => ({
    [constants.armature]: <Armature {...props}/>,
    [constants.iBeam]: <IBeam {...props}/>,
    [constants.square]: <Square {...props}/>,
    [constants.cilinder]: <Cilinder {...props}/>,
    [constants.ribbon]: <Ribbon {...props}/>,
    [constants.sheet]: <Sheet {...props}/>,
    [constants.bend]: <Bend {...props}/>,
    [constants.pipe]: <Pipe {...props}/>,
    [constants.profile]: <Profile {...props}/>,
    [constants.andgle]: <Angle {...props}/>,
    [constants.flange]: <Flange {...props}/>,
    [constants.channel]: <Channel {...props}/>,
    [constants.hexahedron]: <Hexagon {...props}/>
})

export default function CalculationForm({metal, form}) {
    return <div>
        {formMapper(metal)[form]}
    </div>
}