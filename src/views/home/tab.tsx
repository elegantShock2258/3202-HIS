import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './tabStyles.css'
export default function TabContainer({icon,title}){
    return <div className="tab-parent flex">
        <p className="iconTitle">{title}</p>
    </div>
}