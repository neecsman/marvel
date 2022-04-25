import { lazy, Suspense } from "react";
import { Routes, Route  } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPages = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));


const App = () => {

    return (
        <div className="app">
            <AppHeader/>
            <main>
             <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<MainPages/>}/>
                    <Route path="/comics" element={<ComicsPage/>}/>
                    <Route path={`/comics/:comicId`} element={<SingleComicPage/>}/>
                    <Route path="*" element={<Page404/>}/>                   
                </Routes>
             </Suspense>
            </main>
        </div>
    )
}

export default App;