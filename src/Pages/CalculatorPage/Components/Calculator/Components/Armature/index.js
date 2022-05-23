import image from './Armature.png'

export default function Armature({metal}) {
    return <div>
        <img className="scheme-image" src={image}/>
        <div>
            <input type="text"/>
        </div>
    </div>
}