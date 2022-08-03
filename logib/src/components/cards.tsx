import Delete from "../images/x-button.png"
import Params from "../images/adjust.png"

export default function Cards(props: any) {
  return (
    <div className="px-10 py-4 text-center m-auto">
      <div className="grid grid-cols-2">
        <div className="text-left">
          <button onClick={() => props.handleDelete(props.campagne.id)}>
            <img src={Delete} width="30"></img>
          </button>
        </div>
        <div className="text-right">
          <button onClick={() => props.handleUpdate(props)}>
            <img src={Params} width="30"></img>
          </button>
        </div>
      </div>
      <div className="font-bold text-xl mb-2">
        <div className="text-red-600">
          Titre: {props.campagne.name}
        </div>
        <br />
        <div>
          Nom de la campagne:
        </div>
        {props.campagne.description}
        <br />
        <br />
        <div>
          Type: {props.campagne.type}
        </div>
        {props.campagne.personnages}
      </div>
    </div>
  )
}
