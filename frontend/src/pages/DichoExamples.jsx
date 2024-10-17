import React from 'react'

const DichoExamples = ({ examples }) => {
    return (
        <>
            <h3 className="text-indigo-800 font-bold mb-1">
                Example(s)
            </h3>
            {
                examples.map((example, index) => (
                    <p key={index} className="text-lg mb-3 whitespace-pre-wrap">
                        {index + 1}. {example}
                    </p>
                ))
            }
        </>
    )
}

export default DichoExamples;