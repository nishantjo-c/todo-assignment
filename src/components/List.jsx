import listSCSS from './styles/List.module.scss';
import {Todocard} from './Todocard';
import Todotitle from './Todotitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListCard, setListTitle } from '../redux/cards';

function List(){
    const { listcard,listtitle } = useSelector(state => state.card);
    // console.log(listcard)
    const dispatch = useDispatch();
    
    // console.log(listtitle)

    return (
    <div className={listSCSS.wrapper}>
        <div className={listSCSS.wrapper__column}>
            <Todotitle />
            {/* {listtitle.map((each,key) => <Todotitle key={key} />)} */}
        </div>

            {/* <Todocard /> */}
    </div>
    )
}

export default List;