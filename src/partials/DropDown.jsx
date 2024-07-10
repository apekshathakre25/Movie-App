import React from "react";

const DropDown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select
        defaultValue="0"
        onChange={(e) => func(e.target.value)}
        name="format"
        id="format"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
