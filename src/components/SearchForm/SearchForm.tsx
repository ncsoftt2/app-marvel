import React from "react";
import {Formik, Field, ErrorMessage as FormikErrorMessage, Form} from "formik";
import {getCharSearch} from "../../slices/CharactersSlice/charactersSlice";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook";
import * as Yup from 'yup';
import './SearchForm.scss';

const SearchForm = () => {
    const {charInfo,isError} = useAppSelector(({characters}) => characters);
    const dispatch = useAppDispatch();
    const updateChar = (name: string) => {
        dispatch(getCharSearch(name))
        console.log(charInfo)
    }
    const errorMessage = isError ? <div className="char__search-critical-error">Ошибка...</div> : null;
    const results = !charInfo ? null : charInfo.length > 0 ?
        <div className="char__search-wrapper">
            <div className="char__search-success">Посетить страницу {charInfo[0].name}</div>
            <NavLink to={`/characters/${charInfo[0].id}`} className="button button__secondary">
                <div className="inner">На страницу</div>
            </NavLink>
        </div> :
        <div className="char__search-error">
            Персонаж не найден.
        </div>;
    return (
        <div className="char__search-form">
            <Formik
                initialValues = {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('Обязательное поле')
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Найти персонажа по имени:</label>
                    <div className="char__search-wrapper">
                        <Field id='charName'
                               type='search'
                               name='charName'
                               placeholder='Имя персонажа'
                        />
                        <button
                            type='submit'
                            className="button button__main"
                        >
                            <div className="inner">Поиск</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}
export default SearchForm;