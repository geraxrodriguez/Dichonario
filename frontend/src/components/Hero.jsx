import React, { useState } from 'react'
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

const Hero = ({
    title = 'Dichonario',
    subtitle = 'A dictionary for latin american colloquialisms.',
}) => {
    const [results, setResults] = useState([]);

    return (
        <main className="bg-indigo-700 flex flex-col justify-center">

            <div className="pt-32">
                <div className="max-w-7xl min-w-96 mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <h2 className="my-4 text-3xl text-white">
                        {subtitle}
                    </h2>
                    <p className="my-4 text-2xl text-white">
                        {/* Now, you too, can "jaja"! */}
                    </p>
                </div>

                <div className="max-w-2xl min-w-96 mx-auto ">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
            </div>


        </main>
    )
}

export default Hero;
