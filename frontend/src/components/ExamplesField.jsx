import { useEffect, useState } from 'react';
import '../styles/ExamplesSection.css'


const ExamplesField = ({ examples, setExamples }) => {
    const [forLabel, setForLabel] = useState('example-0');

    useEffect(() => {
        setForLabel(`example-${examples.length}`);
    }, [examples]);

    const addExample = () => {
        setExamples([...examples, '']); 
    };

    const deleteExample = (index) => {
        if (examples.length === 1) { return; }    
        const newExamples = examples.filter((example, i) => i !== index);
        setExamples(newExamples); 
    };

    const handleChange = (index, value) => {
        const newExamples = examples.map((example, i) => 
            i === index ? value : example // returns same example unless we are on current index, then we return value
        );
        setExamples(newExamples);
    };

    return (
        <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3">
            <label htmlFor={forLabel} className="block text-gray-700 font-bold mb-2">
                * Example(s)
            </label>
            {examples.map((example, index) => ( // mapping through our examples array
                <div key={index} className="example-field"> {/* using our current idx as our key, we create div + children for every example */}
                    <input
                        type="text"
                        value={example} // sets what goes in the box equal to our current example
                        onChange={(e) => handleChange(index, e.target.value)} // whenever a change is made in our input field, this function is called, passing in our index and whatever is in the input field
                        className="example-input"
                        placeholder={`Example ${index + 1}`}
                        id={`example-${index+1}`}
                        name='examples'
                    />
                    <button type="button" onClick={() => deleteExample(index)} className="add-example-btn"> {/* deleteExample fires when our button is clicked, passign in our index as an argument */}
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
