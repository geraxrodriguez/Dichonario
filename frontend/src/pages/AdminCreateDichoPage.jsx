import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExamplesSection.css'
import axios from 'axios';

const SubmitDichoPage = () => {
    const [dicho, setDicho] = useState('');
    const [literalMeaning, setLiteralMeaning] = useState('');
    const [actualMeaning, setActualMeaning] = useState('');
    const [examples, setExamples] = useState(['']);
    const [related, setRelated] = useState('');
    const [comments, setComments] = useState('');
    const [history, setHistory] = useState('');

    // navigate use to redirect after submitting Dicho
    const navigate = useNavigate();

    // FUNCTION FOR SUBMITTING DICHO
    const submitDicho = (e) => {
        e.preventDefault(); // prevent default form submission
        const newDicho = {
            dicho,
            literalMeaning,
            actualMeaning,
            examples,
            related,
            comments,
            history: history || 'No history yet for this dicho.',
        };
        console.log("New Dicho:", newDicho)
        axios
            // .post('http://localhost:2222/admin/create-dicho', newDicho)
            .post('https://dichonario-mern.onrender.com/admin/create-dicho', newDicho)
            .then(() => {
                console.log('Dicho submitted successfully.')
                navigate('/success');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    // Functions for Example(s) sub-section
    const addExample = () => {
        setExamples([...examples, '']); // Add a new empty example
    };

    const deleteExample = (index) => {
        if (index === 0) { return; }           // user is only able to delete exampel field if there is more than one field
        const newExamples = [...examples]
        newExamples.splice(index, 1)
        setExamples(newExamples);              // Delete example

        //console.log(newExamples.splice(index, 1)) // logs array of removed elements
        //console.log(newExamples)                  // logs array of remaining elements
    };

    const handleChange = (index, value) => {
        const newExamples = [...examples];
        newExamples[index] = value;
        setExamples(newExamples);
    };
    return (
        <>
            <section className="bg-indigo-50 text-left flex-1">
                {/* section */}
                <div className="mx-auto max-w-2xl min-w-xl py-5">
                    {/* outer */}

                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form onSubmit={submitDicho}>
                            <h2 className="text-3xl text-center font-semibold mb-6">
                                YOU ARE CREATING A NEW DICHO. UPON SUBMITTING, IT WILL BE LIVE. TREAD CAREFULLY.
                            </h2>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Dicho</label
                                >
                                <input
                                    type="text"
                                    id="dicho"
                                    name="dicho"
                                    className="border border-gray-400 rounded w-full py-2 px-3 mb-2"
                                    required
                                    value={dicho}
                                    onChange={(e) => setDicho(e.target.value)}
                                />
                            </div>

                            {/* Literal Meaning */}
                            <div className="mb-4">
                                <label
                                    htmlFor="literalMeaning"
                                    className="block text-gray-700 font-bold mb-2"
                                >Literal Meaning</label
                                >
                                <textarea
                                    id="literalMeaning"
                                    name="literalMeaning"
                                    className="border border-gray-400 rounded w-full py-2 px-3"
                                    rows="3"
                                    required
                                    value={literalMeaning}
                                    onChange={(e) => setLiteralMeaning(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Actual Meaning */}
                            <div className="mb-4">
                                <label
                                    htmlFor="actualMeaning"
                                    className="block text-gray-700 font-bold mb-2"
                                >Actual Meaning</label
                                >
                                <textarea
                                    id="actualMeaning"
                                    name="actualMeaning"
                                    className="border border-gray-400 rounded w-full py-2 px-3"
                                    rows="3"
                                    required
                                    value={actualMeaning}
                                    onChange={(e) => setActualMeaning(e.target.value)}
                                ></textarea>
                            </div>

                            {/* History  */}
                            <div className="mb-4">
                                <label
                                    htmlFor="history"
                                    className="block text-gray-700 font-bold mb-2"
                                >History and Origins</label
                                >
                                <textarea
                                    id="history"
                                    name="history"
                                    className="border border-gray-400 rounded w-full py-2 px-3"
                                    rows="3"
                                    value={history}
                                    onChange={(e) => setHistory(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Examples  */}
                            <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3 mb-2">
                                <label
                                    htmlFor="examples"
                                    className="block text-gray-700 font-bold mb-2"
                                >Example(s)</label
                                >
                                {examples.map((example, index) => (
                                    <div key={index} className="example-field">
                                        <textarea
                                            className="example-input border border-gray-400"
                                            id="examples"
                                            name="examples"
                                            rows="1"
                                            required
                                            value={example}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                        ></textarea>
                                        {/* <input
                                            type="text"
                                            value={example}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            className="example-input"
                                            placeholder={`Example ${index + 1}`}
                                            id='examples'
                                            name='examples'
                                        /> */}
                                        <button type="button" onClick={() => deleteExample(index)} className="add-example-btn">
                                            -
                                        </button>
                                    </div>
                                ))}

                                <button type="button" onClick={addExample} className="add-example-btn">
                                    + Add Another Example
                                </button>
                            </div>

                            {/* Related */}
                            {/* <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3">
                                <label
                                    htmlFor="related"
                                    className="block text-gray-700 font-bold mb-2"
                                >Related Dichos</label
                                >
                                <textarea
                                    id="related"
                                    name="related"
                                    className="border rounded w-full py-2 px-3"
                                    rows="3"
                                    placeholder='"se me fue el avion" = "se me durmio el gallo"'
                                    value={related}
                                    onChange={(e) => setRelated(e.target.value)}
                                ></textarea>
                            </div> */}

                            {/* Comments */}
                            <div className="mb-4">
                                <label
                                    htmlFor="comments"
                                    className="block text-gray-700 font-bold mb-2"
                                >Other Comments</label
                                >
                                <textarea
                                    id="comments"
                                    name="comments"
                                    className="border border-gray-400 rounded w-full py-0 px-3"
                                    rows="3"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                ></textarea>
                            </div>

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