import React from 'react'

const SearchResult = ({ searchResult, selectSearchResult }) => {
  return (
    <div 
        className='px-1 py-2 hover:bg-gray-200 hover:cursor-pointer'
        onClick={() => selectSearchResult(searchResult)}    
    >
        {searchResult.dicho}
    </div>
  )
}

export default SearchResult
