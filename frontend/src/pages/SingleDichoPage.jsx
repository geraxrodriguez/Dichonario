import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DichoDetails from '../components/DichoDetails';
import DichoExamples from './DichoExamples';
import SuggestionsForm from '../components/SuggestionsForm';

const SingleDichoPage = () => {
    const [dicho, setDicho] = useState({});
    const [examples, setExamples] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getDicho = async () => {
            try {
                const res = await axios.get(`https://dichonario.onrender.com/dichos/${id}`);
                setDicho(res.data);
                setExamples(res.data.examples)
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        getDicho();
    }, []);

    return (
        <>
            <section className="bg-indigo-50 flex flex-1 justify-center">
                <div className="container py-10 px-6 max-w-screen-md">

                    <div className="bg-white p-5 rounded-xl shadow-md text-center">
                        <h1 className="text-3xl font-bold">
                            {dicho.dicho}
                        </h1>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md mt-4 text-left text-xl md:text-2xl">
                        <DichoDetails dicho={dicho} />
                        <DichoExamples examples={examples} />
                        <SuggestionsForm id={id} />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default SingleDichoPage
