import React  from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ searchResults, selectSearchResult }) => {
    return (
    <div className="bg-white flex flex-col max-h-80 rounded-lg overflow-y-auto mt- max-h-64">
        { 
            searchResults.map((searchResult, index) => {
                return <SearchResult key={index} searchResult={searchResult} selectSearchResult={selectSearchResult} />;
            }) 
        }
    </div>
    )
}

export default SearchResultsList
