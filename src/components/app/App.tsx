import AppHeader from "../appHeader/AppHeader";
import {ROUTES} from "../../utils/routes";
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";
import Wrapper from "../ItemsList/Wrapper";
import Single from "../SingleElement/Single";
import AppBanner from "../appBanner/AppBanner";
import {useAppSelector} from "../../hook";

const App = () => {
    const {comics: {isLoading,isError,list,comic},characters} = useAppSelector((state) => state)
    return (
        <div className="app">
            <AppHeader/>
            <AppBanner />
            <main>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />}/>
                    <Route path={ROUTES.COMICS} element={<Wrapper classname={'comics__grid'}
                                                                  type={'comics'}
                                                                  listItem={list}
                                                                  data={'comics'}
                                                                  loading={isLoading}
                                                                  error={isError}/>}
                    />
                    <Route path={ROUTES.SINGLE_CHARACTERS} element={<Single data={'char'}
                                                                            item={characters.char}
                                                                            type={'char'}/>}/>
                    <Route path={ROUTES.SINGLE_COMICS} element={<Single data={'comic'}
                                                                        item={comic}
                                                                        type={'comic'}/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;