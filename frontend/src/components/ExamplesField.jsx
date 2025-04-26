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
            i === index ? value : example 
        );
        setExamples(newExamples);
    };

    return (
        <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3">
            <label htmlFor={forLabel} className="block text-gray-700 font-bold mb-2">
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
                        id={`example-${index+1}`}
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
