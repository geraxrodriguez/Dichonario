import React from 'react'
import '../styles/ExamplesSection.css'


const ExamplesField = ({ examples, setExamples }) => {
    const addExample = () => {
        setExamples([...examples, '']); // Add a new empty example
    };

    const deleteExample = (index) => {
        if (index === 0) { return; }
        const newExamples = [...examples]
        newExamples.splice(index, 1)
        setExamples(newExamples);
    };

    const handleChange = (index, value) => {
        const newExamples = [...examples];
        newExamples[index] = value;
        setExamples(newExamples);
    };

    return (
        <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3">
            <label htmlFor="examples" className="block text-gray-700 font-bold mb-2">
                * Example(s)
            </label>
            {examples.map((example, index) => (
                <div key={index} className="example-field">
                    <input
                        type="text"
                        value={example}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="example-input"
                        placeholder={`Example ${index + 1}`}
                        id='examples'
                        name='examples'
                    />
                    <button type="button" onClick={() => deleteExample(index)} className="add-example-btn">
                        -
                    </button>
                </div>
            ))}

            <button type="button" onClick={addExample} className="add-example-btn">
                + Add Another Example
            </button>
        </div>
    )
}

export default ExamplesField
