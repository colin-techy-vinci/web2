import "./IsOnline.css"
interface IsOnlineProps{
    isOnline : boolean
}

const IsOnline = (props : IsOnlineProps) => {
    if (props.isOnline){
        return <div className="online">En Ligne</div>
    }
    return <div className="offline">Hors ligne</div>
}

export default IsOnline;