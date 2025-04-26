import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormField from '../components/FormField';
import ExamplesField from '../components/ExamplesField';


const SubmitDichoPage = () => {
    const navigate = useNavigate();

    const [dicho, setDicho] = useState('');
    const [literalMeaning, setLiteralMeaning] = useState('');
    const [actualMeaning, setActualMeaning] = useState('');
    const [examples, setExamples] = useState(['']);
    const [comments, setComments] = useState('');
    const [history, setHistory] = useState('');

    const submitDicho = async (e) => {
        e.preventDefault();
        const newDicho = {
            dicho,
            literalMeaning,
            actualMeaning,
            examples,
            comments,
            history: history || 'No history yet for this dicho.',
        };
        try {
            await axios.post('https://dichonario.onrender.com/submit-dicho', newDicho)
            navigate('/success');
        } catch (error) {
            console.log(error);
        }
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
                            <ExamplesField examples={examples} setExamples={setExamples} />

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