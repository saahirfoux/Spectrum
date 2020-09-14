import React from "react";

function Select({options}) {
    return options.length > 0 ? (
        <select>
            {options.map(state => {
                return (
                    <option key={state.key} value={state.key}>{state.label}</option>
                );
            })}
        </select>
      ) : null;
      
}

function Checkbox({options}) {
    return options.length > 0 ? (
        <select>
            {options.map(state => {
                return (
                    <option key={state.key} value={state.key}>{state.label}</option>
                );
            })}
        </select>
      ) : null;
      
}

export const Filter = ({type, options}) => {

    switch(type) {
        case "Select":
            return (
                <Select options={options} />
            )
            break;
        case "Checkbox":
            return (
                <Checkbox/>
            )
            break;
        default:
            throw new Error("Invalid type");
    }
    
};