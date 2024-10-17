import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuggestionsForm = ({ id }) => {
    const [suggestions, setSuggestions] = useState('');
    const navigate = useNavigate();

    const submitSuggestions = async (e) => {
        e.preventDefault(); // prevents default reload/navigation from happening before our req is made
        try {
            const res = await axios.post(`https://dichonario.onrender.com/dichos/${id}/suggestions`, { suggestions });
            navigate('/success');
        } catch (error) {
            console.log('Error submitting form', error);
        }
    };

    return (
        <>
            <form className="text-lg/6 mt-14" onSubmit={submitSuggestions}>
                <label htmlFor="suggestions" className="block text-gray-900">
                    Have any suggestions for this dicho? Please let us know.
                </label>
                <textarea
                    id="suggestions"
                    name="suggestions"
                    className="border border-gray-500 rounded w-full py-1 px-1 resize-none"
                    rows="2"
                    required
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                >
                </textarea>
                <button className="bg-indigo-500 hover:bg-amber-500 text-white text-base px-1" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default SuggestionsForm;