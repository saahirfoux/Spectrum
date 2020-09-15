import React, { useEffect, useState } from "react";
import { Table } from "../Components";
import { Keys } from "../keys";

const Url = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
const Options = {
    headers: {
        Authorization: Keys.restaurant
    }
};

export const Report = () => {
    let genreSet = new Set();
    const [report, setReport] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [stateFilter, setStateFilters] = useState(false);
    const [genreFilter, setGenreFilters] = useState(false);
    const [genres, setGenres] = useState([]);
    const loadingMessage = isLoading ? (
        <h2>Loading, stand by. . .</h2>
    ) : null;
    
    const fetchData = async () => {
        const data = await fetch(Url, Options).then(response => response.json());
        
        data.sort((a,b) => {return a.name.localeCompare(b.name)})
        data.forEach((row) => {
            row.genre.split(',').forEach((genre) => {
                genreSet.add(genre)
            });
        });

        setGenres(Array.from(genreSet))
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
        for (let x = 0; x < report.length; x++) {
            let {name,city,state,telephone,genre} = report[x];
            // Strip genre then add new column for converted array set
            if (new String(name + city + state + telephone + genre).toUpperCase().indexOf(search.toUpperCase()) > -1) {
                matches.push(report[x])
            }
        }
        if (search.length > 0 && matches.length === 0) {
            // update logic when no matches found
        } 
        setSearchResults(matches);
    },[search])

    useEffect(() => {
        let matches = [];
        if (searchResults.length > 0) {
            for (let x = 0; x < searchResults.length; x++) {
                if (searchResults[x].genre.indexOf(genreFilter) > -1 || searchResults[x].genre.indexOf(stateFilter) > -1 ) {
                    matches.push(searchResults[x])
                }
            }
            if (matches.length > 0) {
                setSearchResults(matches);
            }
        } else {
            for (let x = 0; x < report.length; x++) {
                if (report[x].genre.indexOf(genreFilter) > -1 || report[x].genre.indexOf(stateFilter) > -1 ) {
                    matches.push(report[x])
                }
            }
            if (matches.length > 0) {
                setSearchResults(matches);
            }
        }
    }, [stateFilter, genreFilter])

    return (
        <div>
            {loadingMessage}
            <Table data={searchResults.length > 0 ? searchResults : report} search={setSearch} genres={genres} sFilter={setStateFilters} gFilter={setGenreFilters}/>
        </div>
    )
}