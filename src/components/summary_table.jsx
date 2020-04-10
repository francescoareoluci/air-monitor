import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
  createData('2020/02/07', 20, 6.0, 24, 4.0),
  createData('2020/02/06', 23, 9.0, 37, 4.3),
  createData('2020/02/05', 19, 16.0, 24, 6.0),
  createData('2020/02/04', 22, 3.7, 67, 4.3),
  createData('2020/02/02', 24, 16.0, 49, 3.9),
];


class SummaryTable extends React.Component {
    constructor(props) {
        super(props);
    }


    render (){
        const classes = makeStyles({
            table: {
                minWidth: 650,
            }
        })

        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2 className="table-header-cell">
                                    Day
                                </h2>
                            </TableCell>
                            <TableCell align="center">
                                <h2 className="table-header-cell">
                                    Temperature
                                </h2>
                            </TableCell>
                            <TableCell align="center">
                                <h2 className="table-header-cell">
                                    CO2
                                </h2>
                            </TableCell>
                            <TableCell align="center">
                                <h2 className="table-header-cell">
                                    RAD
                                </h2>
                            </TableCell>
                            <TableCell align="center">
                                <h2 className="table-header-cell">
                                    PM2.5
                                </h2>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    <h2 className="table-body-cell">
                                        {row.name}
                                    </h2>
                                </TableCell>
                                <TableCell align="center">
                                    <h2 className="table-body-cell">
                                        {row.calories}
                                    </h2>
                                </TableCell>
                                <TableCell align="center">
                                    <h2 className="table-body-cell">
                                        {row.fat}
                                    </h2>
                                </TableCell>
                                <TableCell align="center">
                                    <h2 className="table-body-cell">
                                        {row.carbs}
                                    </h2>
                                </TableCell>
                                <TableCell align="center">
                                    <h2 className="table-body-cell">
                                        {row.protein}
                                    </h2>
                                </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
}

export default SummaryTable;
