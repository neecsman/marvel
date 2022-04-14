import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";
import SingleComic from "../singleComic/SingleComic";

import decoration from '../../resources/img/vision.png';

const App = () => {
    
    const [selectedChar, setChar] = useState(null);
    const [selectedComics, setSelectedComics] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }

    const onComicsSelected = (id) => {
        setSelectedComics(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                <ErrorBoundary>
                    <ComicsList offset={8}/>
                </ErrorBoundary>

                {/* <ErrorBoundary>
                    <SingleComic comicsId={selectedComics}/>
                </ErrorBoundary> */}


            </main>
        </div>
    )
}

export default App;