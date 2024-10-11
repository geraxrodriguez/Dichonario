import '../styles/ExamplesSection.css';
import React, { useState } from 'react';

const examplesForm = () => {
  const [examples, setExamples] = useState(['']); // Initialize with one example so that one input field is there when page is rendered

  const addExample = () => {
    setExamples([...examples, '']); // Add a new empty example
  };

  const deleteExample = (index) => {
    const newExamples = [...examples]
    newExamples.splice(index, 1)
    //console.log(newExamples.splice(index, 1)) // logs array of removed elements
    //console.log(newExamples)                  // logs array of remaining elements
    setExamples(newExamples);              // Delete example
  };

  const handleExamplesChange = (index, value) => {
    const newExamples = [...examples];
    newExamples[index] = value;
    setExamples(newExamples);
  };

  return (
    <>

      {examples.map((example, index) => (
        <div key={index} className="example-field">
          <input
            type="text"
            value={example}
            onChange={(e) => handleExamplesChange(index, e.target.value)}
            className="example-input"
            placeholder={`Example ${index + 1}`}
          />
          <button type="button" onClick={() => deleteExample(index)} className="add-example-btn">
            -
          </button>
        </div>
      ))}
      
      <button type="button" onClick={addExample} className="add-example-btn">
        +
      </button>

    </>
  );
};

export default examplesForm;
