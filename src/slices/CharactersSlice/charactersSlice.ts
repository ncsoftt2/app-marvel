import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../utils/constans";
import {ICommonData, List} from "../../utils/interface";

export const getCharacters = createAsyncThunk<List[],number>(
    'characters/getCharacters',
    async (offset = 0) => {
        const res = await axios(`${BASE_URL}/characters?limit=6&offset=${offset}&${API_KEY}`)
        return res.data.data.results
    }
)

export const getCharacter = createAsyncThunk<ICommonData,string>(
    'char/getCharacter',
    async (id) => {
        const res = await axios(`${BASE_URL}/characters/${id}?${API_KEY}`)
        return res.data.data.results[0]
    }
)
export const getCharSearch = createAsyncThunk<SearchChar,string>(
    'search/getCharSearch',
    async (name: string) => {
        const res = await axios(`${BASE_URL}/characters?name=${name}&${API_KEY}`)
        return res.data.data.results
    }
)

interface SearchChar {
    name: string
    id: number
}
export interface CharactersState  {
    list: List[]
    char: ICommonData
    isLoading: boolean
    isError: boolean
    charInfo: SearchChar[] | null
}

const initialState: CharactersState = {
    list: [] as List[],
    char: {} as ICommonData,
    isLoading: false,
    isError: false,
    charInfo: null as SearchChar[] | null
}

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getCharacters.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                state.list = payload;
            })
            .addCase(getCharacters.rejected, state => {
                state.isLoading = false
                state.isError = true
            })

        builder
            .addCase(getCharacter.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getCharacter.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                state.char = payload;
            })
            .addCase(getCharacter.rejected, state => {
                state.isLoading = false
                state.isError = true
            })

        builder
            .addCase(getCharSearch.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isError = false;
                // @ts-ignore
                state.charInfo = payload;
            })
            .addCase(getCharSearch.rejected, state => {
                state.isLoading = false
                state.isError = true
            })
    }
})

export default characterSlice.reducer