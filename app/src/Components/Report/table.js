import React from "react";
import { Search, Filter } from "../../Components";
import { states } from "./states"

function Body({report}) {
    return report.length > 0 ? (
        <table>
          {report.map(restaurant => {
            return (
                <tr key={restaurant.id}>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.city}</td>
                    <td>{restaurant.state}</td>
                    <td>{restaurant.telephone}</td>
                    <td>{restaurant.genre}</td>
                </tr>
            );
          })}
        </table>
      ) : null;
}

export const Table = ({data, search, genres, sFilter, gFilter}) => {
    return (
        <div>
            <Search search={search}/>
            <Filter type="State" options={states} sFilter={sFilter}/>
            <Filter type="Genre" options={genres} gFilter={gFilter}/>
            <Body report={data}/>
        </div>
    )
};