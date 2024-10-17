import React from 'react'

const FormField = ({
    htmlFor,
    label,
    id,
    name,
    placeholder = null,
    value,
    rows = 3,
    required = false, 
    onChange = () => {} // defaults to nothing if omitted
}) => {
    const labelClasses = "block text-gray-700 font-bold mb-2";

    return (
        <div className="mb-4">
            <label htmlFor={htmlFor} className={labelClasses}>
                {label}
            </label
            >
            <textarea
                className="border border-gray-400 rounded w-full py-2 px-3"
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                value={value}
                name={name}
                rows={rows}
                id={id}
            ></textarea>
        </div>
    )
};

export default FormField;
