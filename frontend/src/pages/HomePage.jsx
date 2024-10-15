import CallToActions from "../components/CallToActions";

const HomePage = () => {
    return (
        <main className='flex flex-col items-center'>

            <div className='py-20 md:py-32'>
                <h1 data-testid='main-heading' className='text-white text-5xl md:text-7xl font-extrabold'>
                    Dichonario
                </h1>

                <h2 className='my-2 text-xl text-white'>
                    A dictionary for Latin American colloquialisms.
                </h2>

                <CallToActions />
            </div>

        </main>
    )
}

export default HomePage;
