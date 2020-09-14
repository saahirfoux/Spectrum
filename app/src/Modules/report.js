import React, { useEffect, useState } from "react";
import { Table, Search } from "../Components";
import { Keys } from "../keys";

const Url = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
const Options = {
    headers: {
        Authorization: Keys.restaurant
    }
};

export const Report = () => {
    const [report, setReport] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const loadingMessage = isLoading ? (
        <h2>Loading, stand by. . .</h2>
    ) : null;

    const fetchData = async () => {
        const data = await fetch(Url, Options).then(response => response.json());
        
        data.sort((a,b) => {return a.name.localeCompare(b.name)})
        
        setReport(data);
        setLoading(false);
    };

    useEffect(() => {
        let matches = [];
        if (isLoading) {
            fetchData();
            return;
        }
        setSearchResults(matches);
        console.log(search, 'C se');
        for (let x = 0; x < report.length; x++) {
            let {name,city,state,telephone,genre} = report[x];
            if (new String(name + city + state + telephone + genre).toUpperCase().indexOf(search.toUpperCase()) > -1) {
                matches.push(report[x])
            }
        }
        if (search.length > 0 && matches.length === 0) {
            // no matches found
            console.warn('nada');
        } 
        console.log(matches, 'What was')
        setSearchResults(matches);
    },[search])

    return (
        <div>
            {loadingMessage}
            <Table data={searchResults.length > 0 ? searchResults : report} search={setSearch}/>
        </div>
    )
}