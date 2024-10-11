// import '../styles/TestPage.css';
import React, { useState } from 'react';

const SuggestionsForm = () => {
  const [suggestions, setSuggestions] = useState(['']); // Initialize with one suggestion so that one input field is there when page is rendered

  const addSuggestion = () => {
    setSuggestions([...suggestions, '']); // Add a new empty suggestion
  };

  const deleteSuggestion = (index) => {
    const newSuggestions = [...suggestions]
    console.log(newSuggestions.splice(index, 1)) // logs array of removed elements
    console.log(newSuggestions)                  // logs array of remaining elements
    setSuggestions(newSuggestions);              // Delete suggestion
  };

  const handleSuggestionChange = (index, value) => {
    const newSuggestions = [...suggestions];
    newSuggestions[index] = value;
    setSuggestions(newSuggestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send suggestions to a server
    console.log(suggestions);
  };

  return (
    <>

      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion-field">
          <input
            type="text"
            value={suggestion}
            onChange={(e) => handleSuggestionChange(index, e.target.value)}
            className="suggestion-input"
            placeholder={`Suggestion ${index + 1}`}
          />
          <button type="button" onClick={() => deleteSuggestion(index)} className="add-suggestion-btn">
            -
          </button>
        </div>
      ))}
      
      <button type="button" onClick={addSuggestion} className="add-suggestion-btn">
        +
      </button>

    </>
  );
};

export default SuggestionsForm;
