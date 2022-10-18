import React from "react";

export const FormItem = ({
  type,
  label,
  name,
  placeholder,
  required,
  onChange,
  value,
  options,
}) => {
  if (type === "text" || type === "email" || type === "tel")
    return (
      <div className="md:mx-4 mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="form-input h-10"
          id={name}
          defaultValue={value}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          pattern={type === "tel" ? "[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" : "*"}
          placeholder={placeholder}
          required={required ? true : false}
        />
        {type === "tel" && (
          <p className="mt-1 ml-2  text-xs italic text-gray-400">
            {`e.g. "(012) 345-6789"`}
          </p>
        )}
        {/* {required && (
          <p className="form-input-error">{`${label} field is required`}</p>
        )} */}
      </div>
    );
  if (type === "select")
    return (
      <div className="md:mx-4  mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <select
          className="form-input h-10 "
          id={name}
          defaultValue={""}
          onChange={(event) => onChange(event.target.value)}
          required={required ? true : false}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* {required && (
          <p className="form-input-error">{`${label} field is required`}</p>
        )} */}
      </div>
    );

  if (type === "multiline")
    return (
      <div className="md:mx-4 mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <textarea
          className="form-input resize-none"
          required={required ? true : false}
          id={name}
          rows="7"
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        ></textarea>
        {/* {required && (
          <p className="form-input-error">{`${label} field is required`}</p>
        )} */}
      </div>
    );
};

export default FormItem;
