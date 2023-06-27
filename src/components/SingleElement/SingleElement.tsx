import './SingleElement.scss';
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";
import React from "react";
import {ICommonData} from "../../utils/interface";

type PropsType = {
    item: ICommonData
    data: string
}

const SingleElement: React.FC<PropsType> = ({item,data}) => {
    const {name,title,description,thumbnail,prices,pageCount,textObjects} = item
    return (
        <div className="single-comic">
            <Helmet>
                <meta name='description'
                      content={`${data === 'char' ? name : title}`}
                />
                <title>{`${data === 'char' ? name : title}`}</title>
            </Helmet>
            <img src={thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : ''} alt={data === 'char' ? name : title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{data === 'char' ? name : title}</h2>
                <p className="single-comic__descr">{
                    description ? description : 'Нет описания'
                }
                </p>
                {data === 'char' ? null : (
                    <>
                        <p className="single-comic__descr">{pageCount ? `${pageCount} стр` : 'нет данных'}</p>
                        <p className="single-comic__descr">Язык: {textObjects?.language || "en-us"}</p>
                        <div className="single-comic__price">Цена: {prices ? `${prices[0].price}$`: 'нет данных'}</div>
                    </>
                )}
            </div>
            <NavLink to={`${data === 'char' ? '/' : '/comics'}`}>Назад</NavLink>
        </div>
    )
}

export default SingleElement;