// import { useState } from "react";
import { Routes, Route  } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import { MainPages, ComicsPage } from "../pages";

//import SingleComic from "../singleComic/SingleComic";



const App = () => {

    // const [selectedComics, setSelectedComics] = useState(null);

    // const onComicsSelected = (id) => {
    //     setSelectedComics(id);
    // }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path="/" element={<MainPages/>}/>
                    <Route path="/comics" element={<ComicsPage/>}/>
                </Routes>

                {/* <ErrorBoundary>
                    <SingleComic comicsId={selectedComics}/>
                </ErrorBoundary> */}
            </main>
        </div>
    )
}

export default App;