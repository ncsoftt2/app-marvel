import {configureStore} from "@reduxjs/toolkit";
import characters from '../slices/CharactersSlice/charactersSlice';
import comics from '../slices/ComicsSlice/comicsSlice';


const store = configureStore({
    reducer: {characters,comics},
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store