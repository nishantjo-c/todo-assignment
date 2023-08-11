import todocardSCSS from './styles/Todocard.module.scss';
import addSvg from '../assets/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setListCard } from '../redux/cards';
import { useEffect, useState } from 'react';

export function Todocard({setVisible}){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const dispatch = useDispatch();
    const { listcard } = useSelector(state => state.card);

    // function handleClick(){
    //     console.log(listcard)
    // }
    useEffect(() => {
        console.log(listcard)
    }, [listcard])

    return (
        <div className={todocardSCSS.card}>
            <input type="text" placeholder='Add Todo' className={todocardSCSS.card__title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            <img src={addSvg} alt="add" className={todocardSCSS.card__addIcon} 
                    onClick={() => {
                        // dispatch(setListCard([...listcard, {title: title, description: description}]));
                        dispatch(setListCard([...listcard, {title: title, description: description}]));
                        
                        setVisible(false);
                        // handleClick();        
                    }} 
                    
                />
            <input type="text" placeholder='Add Todo Description' className={todocardSCSS.card__description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
        </div>
    )
}

export function Card({title, description, setVisible}){
 
    return (
        <div className={todocardSCSS.card}>
            
            <p className={todocardSCSS.card__title}>{title}</p>

            <img src={addSvg} alt="add" className={todocardSCSS.card__addIcon} 
                    onClick={() => {
                        setVisible(true);
                    }} 
                    
                />

            <p className={todocardSCSS.card__description}>{description}</p>
        </div>
    )
}
