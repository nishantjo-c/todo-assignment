import todocardSCSS from './styles/Todocard.module.scss';
import addSvg from '../assets/plus.svg';

function Todocard(){

    function handleClick(){
        return
    }

    return (
        <div className={todocardSCSS.card}>
            <input type="text" placeholder='Add Todo' className={todocardSCSS.card__title} />
            <img src={addSvg} alt="add" className={todocardSCSS.card__addIcon} onClick={handleClick} />
            <input type="text" placeholder='Add Todo Description' className={todocardSCSS.card__description} />
        </div>
    )
}

export default Todocard;