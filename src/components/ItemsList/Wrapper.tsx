import React, {useEffect, useState} from "react";
import {getCharacters} from "../../slices/CharactersSlice/charactersSlice";
import ItemsList from "./ItemsList";
import {ComicsState, getComics} from "../../slices/ComicsSlice/comicsSlice";
import {useAppDispatch} from "../../hook";
import './ItemsList.scss';
import {List} from "../../utils/interface";

type PropsType = {
    type: string
    listItem: List[]
    data: string
    classname: string
    error: ComicsState["isError"]
    loading: ComicsState['isLoading']
}

const Wrapper: React.FC<PropsType> = ({type,listItem,data,classname,error,loading}) => {
    const dispatch = useAppDispatch();
    const [items,setItems] = useState<List[]>([]);
    const [offset,setOffset] = useState(50);
    const [newItemLoading,setNewItemLoading] = useState(false)

    useEffect(() => {
        if(!listItem) return;
        // @ts-ignore
        setItems(listItem)
    },[listItem])

    useEffect(() => {
        onRequest(offset,true)
    },[dispatch])

    const onRequest = (offset: number,initial: boolean) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        switch (type) {
            case 'char':
                dispatch(getCharacters(offset))
                    .then(onCharListLoaded)
                break;
            case 'comics':
                dispatch(getComics(offset))
                    .then(onCharListLoaded)
                break;
        }
    }

    const onCharListLoaded = (newList: any) => {
        setItems([...items,...newList.payload])
        setOffset(offset => offset + 6)
        setNewItemLoading(false)
    }
    return (
        <div className="char__list">
            {
                loading && !newItemLoading ? (
                    <div style={{fontSize: 25, textAlign: 'center'}}>Загрузка...</div>
                ) : error ? (
                    <div style={{fontSize: 25, textAlign: 'center'}}>Ошибка...</div>
                ) : !items.length ? (
                    <div>Здесь ничего нет</div>
                ) : (
                    <>
                        <ul className={classname}>
                            <ItemsList items={items} data={data} />
                        </ul>
                        <button className="button button__main button__long"
                                onClick={() => onRequest(offset,false)}
                                disabled={newItemLoading}
                        >
                            <div className="inner">Загрузить ещё</div>
                        </button>
                    </>
                )
            }
        </div>
    )
}
export default Wrapper;