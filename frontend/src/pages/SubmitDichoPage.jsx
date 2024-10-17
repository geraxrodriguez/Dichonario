import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExamplesSection.css'
// import ExamplesSection from '../components/ExamplesSection'
import axios from 'axios';
import FormField from '../components/FormField';

const SubmitDichoPage = () => {
    const [dicho, setDicho] = useState('');
    const [literalMeaning, setLiteralMeaning] = useState('');
    const [actualMeaning, setActualMeaning] = useState('');
    const [examples, setExamples] = useState(['']);
    const [related, setRelated] = useState('');
    const [comments, setComments] = useState('');
    const [history, setHistory] = useState('');

    const navigate = useNavigate();

    const labelClasses = "block text-gray-700 font-bold mb-2";

    const submitDicho = async (e) => {
        e.preventDefault();
        const newDicho = {
            dicho,
            literalMeaning,
            actualMeaning,
            examples,
            related,
            comments,
            history: history || 'No history yet for this dicho.',
        };
        try {
            await axios.post('http://localhost:2222/submit-dicho', newDicho)
            // await axios.post('https://dichonario.onrender.com/submit-dicho', newDicho)
            navigate('/success');
        } catch (error) {
            console.log(error);
        }
    };

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
        <>
            <section className="bg-indigo-50 text-left flex-1">
                <div className="mx-auto max-w-2xl min-w-xl py-5">

                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form onSubmit={submitDicho}>
                            <h1 className="text-3xl text-center font-semibold mb-6">
                                Submit a Dicho
                            </h1>

                            {/* Dicho */}
                            <FormField 
                                htmlFor='dicho'
                                label='* Dicho'
                                placeholder='Se me fue el avion'
                                required={true}
                                onChange={(e) => setDicho(e.target.value)}
                                value={dicho}
                                name="dicho"
                                id="dicho"
                                rows={1}                            
                            />

                            {/* Literal Meaning */}
                            <FormField
                                htmlFor='literalMeaning'
                                label={'* Literal Meaning'}
                                placeholder='The plane left without me'
                                required={true}
                                onChange={(e) => setLiteralMeaning(e.target.value)}
                                value={literalMeaning}
                                name="literalMeaning"
                                id="literalMeaning"
                            />

                            {/* Actual Meaning */}
                            <FormField
                                htmlFor='actualMeaning'
                                label='* Actual Meaning'
                                placeholder='I missed it. I was not paying attention'
                                required={true}
                                onChange={(e) => setActualMeaning(e.target.value)}
                                value={actualMeaning}
                                name="actualMeaning"
                                id="actualMeaning"
                            />

                            {/* History */}
                            <FormField
                                htmlFor='history'
                                label='History and Origins'
                                onChange={(e) => setHistory(e.target.value)}
                                value={history}
                                name="history"
                                id="history"
                            />

                            {/* Examples  */}
                            <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3 mb-2">
                                <label htmlFor="examples" className={labelClasses}>
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

                            {/* Other Comments */}
                            <FormField
                                htmlFor='comments'
                                label='Other Comments'
                                onChange={(e) => setComments(e.target.value)}
                                value={comments}
                                name="comments"
                                id="comments"
                            />

                            <div>
                                <button
                                    className="bg-indigo-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit Dicho
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SubmitDichoPage;