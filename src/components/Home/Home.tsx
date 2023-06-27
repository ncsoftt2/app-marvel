import Wrapper from "../ItemsList/Wrapper";
import SearchForm from "../SearchForm/SearchForm";
import {useAppSelector} from "../../hook";

const Home = () => {
    const {characters: {isLoading,isError,list}} = useAppSelector((state) => state)
    return (
        <>
            <div className="char__content">
                <Wrapper listItem={list}
                         type={'char'}
                         data={'char'}
                         classname={'char__grid'}
                         loading={isLoading}
                         error={isError}
                />
                <SearchForm />
            </div>
        </>
    )
}
export default Home;