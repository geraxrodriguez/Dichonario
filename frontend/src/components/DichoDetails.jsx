const DichoDetails = ({ dicho }) => {
    return (
        <>
            <h3 className="text-indigo-800 font-bold mb-1">
                Literal Translation:
            </h3>
            <p className="text-lg mb-6 whitespace-pre-wrap">
                {dicho.literalMeaning}
            </p>

            <h3 className="text-indigo-800 font-bold mb-1">
                Actually Means:
            </h3>
            <p className="text-lg mb-6 whitespace-pre-wrap">
                {dicho.actualMeaning}
            </p>

            <h3 className="text-indigo-800 font-bold mb-1">
                History and Origins:
            </h3>
            <p className="text-lg mb-6 whitespace-pre-wrap">
                {dicho.history}
            </p>


        </>
    )
}

export default DichoDetails;
