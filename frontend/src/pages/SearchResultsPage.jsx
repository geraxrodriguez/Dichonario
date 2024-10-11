import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResultsPage = () => {
    const location = useLocation();
    const { input, searchResults } = location.state || { input: '', searchResults: [] };

    return (
        <section className='bg-blue-50 px-4 py-6 h-5/6'>
            
            {searchResults.length > 0 ? (
                <div className='text-left'>
                    <h1 className='text-black text-4xl mb-4'> Search results for: "{input}" </h1>
                    <ul className=''>
                        {searchResults.map((result, index) => (
                            <li className='text-blue-700 text-2xl mb-3' key={index}>
                                <Link to={`/dichos/${result._id}`} className='hover:text-orange-600'>"{result.dicho}"</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='text-left'>
                    <h1 className='text-black text-4xl mb-4'>
                        No results for: "{input}". Sorry :( 
                    </h1>
                    <h1 className='text-black text-4xl mb-4'>
                        <Link to='/submit-dicho' className='text-blue-600 hover:text-orange-600'> Click here </Link> to submit a dicho and help us grow :) 
                    </h1>
                    
                    {/* <Link to='/' className='text-blue-700 text-2xl hover:text-orange-600'>Home</Link> */}
                </div>
            )}

        </section>
    );
};

export default SearchResultsPage;