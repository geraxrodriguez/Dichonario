import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const HomePage = () => {
    const navigate = useNavigate()

    const surpriseMe = async () => {
        try {
            const res = await axios.get("https://dichonario.onrender.com/surprise-me")
            const id = res.data;
            navigate(`/dichos/${id}`)
        } catch (error) {
            console.log("Error fetching DOTD's ID", error)
        }
    }

    return (
        <main className='flex flex-col items-center'>
            <div className='py-20 md:py-32'>
                <h1 data-testid='main-heading' className='text-white text-5xl md:text-7xl font-extrabold'>
                    Dichonario
                </h1>

                <h2 className='my-2 text-xl text-white'>
                    A dictionary for Latin American colloquialisms.
                </h2>

                <div className='w-full flex space-x-2 justify-center mt-3'>
                    <Link to='/dichos' className='bg-indigo-500 text-white rounded-md px-3 py-2 hover:outline-white hover:outline-double'>
                        Browse Dichos
                    </Link>
                    <button type='button' onClick={surpriseMe} className='bg-indigo-500 text-white rounded-md px-3 py-2 transition-none hover:outline-white hover:outline-double'>
                        Surprise Me
                    </button>
                </div>
            </div>
        </main>
    )
}

export default HomePage;
