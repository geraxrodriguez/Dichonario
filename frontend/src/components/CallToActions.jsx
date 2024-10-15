import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const CallToActions = () => {
    const navigate = useNavigate()
    const ctaClasses = 'bg-indigo-500 text-white rounded-md px-3 py-2 hover:outline-white hover:outline-double'

    const surpriseMe = async () => {
        try {
            const res = await axios.get("https://dichonario.onrender.com/surprise-me")
            const id = res.data;
            navigate(`/dichos/${id}`)
        } catch (error) {
            console.log("Error fetching random dicho ID", error)
        }
    };

    return (
        <div className='w-full flex space-x-2 justify-center mt-3'>
            <Link to='/dichos' className={`${ctaClasses}`}>
                Browse Dichos
            </Link>
            <button type='button' onClick={surpriseMe} className={`${ctaClasses}`}>
                Surprise Me
            </button>
        </div>
    )
}

export default CallToActions;
