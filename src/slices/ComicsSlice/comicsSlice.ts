import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../utils/constans";
import {ICommonData, List} from "../../utils/interface";

export const getComics = createAsyncThunk<List[],number>(
    'comics/getComics',
    async (offset:number = 0) => {
        const res = await axios(`${BASE_URL}/comics?limit=8&offset=${offset}&${API_KEY}`)
        return res.data.data.results
    }
)
export const getComic = createAsyncThunk<ICommonData,string>(
    'comic/getComic',
    async (id) => {
        const res = await axios(`${BASE_URL}/comics/${id}?${API_KEY}`)
        return res.data.data.results[0]
    }
)

export interface ComicsState  {
    list: List[]
    comic: ICommonData
    isLoading: boolean
    isError: boolean
}

const initialState: ComicsState = {
    list: [] as List[],
    comic: {} as ICommonData,
    isLoading: false,
    isError: false
}

const comicsSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComics.pending, state => {
                state.isError = false
                state.isLoading = true
            })
            .addCase(getComics.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                state.list = payload;
            })
            .addCase(getComics.rejected, state => {
                state.isError = true
                state.isLoading = false
            })

        builder
            .addCase(getComic.pending, state => {
                state.isError = false
                state.isLoading = true
            })
            .addCase(getComic.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                state.comic = payload;
            })
            .addCase(getComic.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
    }
})

export default comicsSlice.reducer