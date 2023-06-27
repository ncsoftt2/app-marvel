import {NavLink} from "react-router-dom";
import React from "react";
import {Helmet} from "react-helmet";
import {List} from "../../utils/interface";
import './ItemsList.scss';

type PropsType = {
    items: List[]
    data: string
}

const ItemsList: React.FC<PropsType> = ({items,data}) => {
    return (
        <>
            <Helmet>
                <meta name='description'
                      content={`${data === 'char' ? 'Персонажи Marvel' : 'Комиксы Marvel'}`}
                />
                <title>{`${data === 'char' ? 'Персонажи Marvel' : 'Комиксы Marvel'}`}</title>
            </Helmet>
            {items.map(({id,title,name,thumbnail},i) => (
                <NavLink to={data === 'char' ? `/characters/${id}` : `/comics/${id}`} key={i}>
                    <li className="char__item">
                        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={data === 'char' ? name : title}/>
                        <div className="char__name">{data === 'char' ? name : title}</div>
                    </li>
                </NavLink>
            ))}
        </>
    )
}

export default ItemsList;