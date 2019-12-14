import React from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({columns,sortColumn,onSort,data}) => {

   

    return ( 
        <table className="table">
            <TableHeader columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody columns={columns} data={data} />
            {/* <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock} </td>
                        <td>{movie.dailyRentalRate} </td>
                        <td></td>
                        <td></td>

                    </tr>
                ))}

            </tbody> */}

        </table>
     );
}
 
export default Table;