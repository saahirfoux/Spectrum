import React from "react";

export const Filter = ({type, options, sFilter, gFilter}) => {

    const DefaultFilter = false;
    const SelectState = ({options}) => {
        const handleChange = (e) => {
            sFilter(e.target.value);
        }

        return options.length > 0 ? (
            <select onChange={handleChange}>
                <option key="state" value={DefaultFilter}>All</option>
                {options.map(state => {
                    return (
                        <option key={state.key} value={state.key}>{state.label}</option>
                    );
                })}
            </select>
          ) : null;
    }

    const SelectGenre = ({options}) => {

        const handleChange = (e) => {
            gFilter(e.target.value);
        }
        return options.length > 0 ? (
            <select onChange={handleChange}>
                <option key="genre" value={DefaultFilter}>All</option>
                {options.map(genre => {
                    return (
                        <option key={genre} value={genre}>{genre}</option>
                    );
                })}
            </select>
          ) : null;
    }
    switch(type) {
        case "State":
            return (
                <SelectState options={options} sFilter={sFilter} />
            )
        case "Genre":
            return (
                <SelectGenre options={options} gFilter={gFilter} />
            )
        default:
            throw new Error("Invalid type");
    }
    
};