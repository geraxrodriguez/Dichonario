// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import SearchResultsList from './SearchResultsList';
// import axios from 'axios';
// import styles from '../styles/Home.module.css';

// const SearchBar = () => {
//   const [ input, setInput ] = useState("");
//   const [ searchResults, setSearchResults ] = useState([]);
//   const navigate = useNavigate();
//   // const [ selectedDicho, setSelectedDicho ] = useState({})

//   const fetchData = (input) => {
//     fetch('http://localhost:2222/dichos/')
//       .then((response) => response.json())
//       .then((json) => {
//         const dichos = json.dichos;
//         const searchResults = dichos.filter(dicho => {
//           return (
//             input &&                                  // if user has typed in a value
//             dicho &&                                  // if anything in our dichos 
//             dicho.dicho &&                            // if dicho has dicho property
//             dicho.dicho.toLowerCase().includes(input.toLowerCase()) // wouldn't we need to make the value lowercase too?
//           );
//         });
//         setSearchResults(searchResults);
//       })
//   };

//   // This functions does two things:
//   // 1. Sets our input variable, which then updates our 'value' attribute within the form.
//   // 2. Uses our input variable to fetch data from API after every change. 
//   const handleChange = eTargetValue => {
//     setInput(eTargetValue);
//     fetchData(input);
//   };
  
//   const selectSearchResult = selectedSearchResult => {
//     const id = selectedSearchResult._id
//     navigate(`/dichos/${id}`)
//     // setSelectedDicho(result);
//     // setResults([]);
//     // setInput(result);
//     // console.log(selectedSearchResult)
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     if (!input) { return; }
    
//     // want to make get request for matching dicho(s)
//     // searchResults is an array that contains our list of search results in format of [ {_id, dicho}, {_id, dicho}, ... ]
//     // if our array only has one element, our user is looking for that array
//     // let's check if it's an exact match, if it is then we can show the dicho page for that dicho
    
//     // access first searchResult
//     // if input and dicho from search result are match, navigate to that dicho's page
//     // else, navigate to 'results matching "dicho"'
//     if ( searchResults.length === 1 && input === searchResults[0].dicho ) {
//       navigate(`/dichos/${searchResults[0]._id}`)
//     }
//     else {
//       navigate(`/search?q=${input}`, { state: { input, searchResults } });
//     }
//   };

//   const surpriseMe = async () => {
//     try {
//       console.log('surprise me clicked')
//       const res = await axios.get('https://dichonario-mern.onrender.com/surprise-me');
//       const id = res.data
//       navigate(`/dichos/${id}`)
//     } catch (error) {
//       console.log('Error fetching DOTD\'s ID')
//     }
//   };

//   return (
//     <form onSubmit={submit} className={styles.searchBar}>
  
//       {/* INPUT FIELD */}
//       {/* <input
//         className="border rounded-lg w-full py-1 px-5 mb-1 text-2xl required"
//         placeholder="Search dichos..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       /> */}
  
//       {/* SEARCH RESULTS LIST */}
//       {/* { searchResults && 
//         searchResults.length > 0 && 
//         <SearchResultsList searchResults={searchResults} selectSearchResult={selectSearchResult} />
//       } */}
  
//       {/* BUTTONS */}
//       <div className="w-full flex space-x-2 justify-center mt-3">
//         {/* <button type="submit" className="bg-indigo-500 text-white rounded-md px-3 py-2">
//           Search
//         </button> */}

//         <div className="bg-indigo-500 text-white rounded-md px-3 py-2">
//           <Link to='https://dichonario.netlify.app/dichos'> Browse Dichos </Link>
//         </div>
//         <div className="bg-indigo-500 text-white rounded-md px-3 py-2">
//           <Link onClick={surpriseMe}> Surprise Me </Link>
//         </div>
//       </div>
  
//     </form>
  
//   )
// };


// export default SearchBar;
