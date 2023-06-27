import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {getCharacter} from "../../slices/CharactersSlice/charactersSlice";
import SingleElement from "./SingleElement";
import {getComic} from "../../slices/ComicsSlice/comicsSlice";
import {useAppDispatch} from "../../hook";
import {ICommonData} from "../../utils/interface";

type PropsType = {
    data: string
    type: string
    item: ICommonData
}

const Single: React.FC<PropsType> = ({type,item,data}) => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(!id) return;
        switch (type) {
            case 'char':
                dispatch(getCharacter(id))
                break;
            case 'comic':
                dispatch(getComic(id))
                break;
        }
    },[id])
    return (
        <>
            <SingleElement item={item} data={data}/>
        </>
    )
}
export default Single;