import { NavLink } from 'react-router-dom'

const SuccessPage = () => {
    return (
        <>
            <h1 className='text-white text-3xl font-bold mt-14'>
                Thank you for your submission :)
            </h1>
            <NavLink className='text-white text-lg font-bold mx-auto w-[20rem] my-5' to="/">
                Home
            </NavLink>
            <NavLink className='text-white text-lg font-bold mx-auto w-[20rem]' to="/dichos"> {/* flex-shrink-0 => item will not shrink */}
                Go to dichos.
            </NavLink>
        </>
    )
}

export default SuccessPage;
