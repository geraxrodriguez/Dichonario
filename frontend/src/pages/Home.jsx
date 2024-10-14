import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';
import styles from '../styles/Home.module.css'

const Home = () => {
    const [results, setResults] = useState([]);

    return (
        <main className={styles.main}>
            <div className={styles.contentContainer}>
                {/* <div className="mx-auto text-center"> */}
                {/* <div className={styles.titleContainer}> */}
                    {/* <h1 className="text-white text-4xl sm:text-5xl md:text-6xl"> */}
                    <h1 data-testid='main-heading' className={styles.h1}>
                        Dichonario
                    </h1>
                    <h2 className={styles.h2}>
                    A dictionary for Latin American colloquialisms.
                    </h2>
                {/* </div> */}

                {/* <div className="max-w-2xl min-w-96 mx-auto "> */}
                {/* <div className={styles.searchBarContainer}> */}
                    <SearchBar setResults={setResults}/>
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                {/* </div> */}
            </div>


        </main>
    )
}

export default Home;