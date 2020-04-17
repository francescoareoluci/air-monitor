import React from 'react';

function createData(date, temp, co2, rad, pm25) {
    return { date, temp, co2, rad, pm25 };
}
  
const rows = [
  createData('2020/02/07', 20, 6.0, 24, 4.0),
  createData('2020/02/06', 23, 9.0, 37, 4.3),
  createData('2020/02/05', 19, 16.0, 24, 6.0),
  createData('2020/02/04', 22, 3.7, 67, 4.3),
  createData('2020/02/02', 24, 16.0, 49, 3.9),
  createData('2020/02/01', 20, 12.0, 40, 5.6),
];


class SummaryTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        return (
                <div className="table-wrapper">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-cell">
                                <h2 className="table-header-cell">
                                    Day
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-header-cell">
                                    Temperature
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-header-cell">
                                    CO2
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-header-cell">
                                    RAD
                                </h2>
                            </div>
                            <div className="table-cell">
                                <h2 className="table-header-cell">
                                    PM2.5
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="table-body">
                        {rows.map((row) => (
                            <div className="table-row" key={row.name}>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.date}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.temp}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.co2}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.rad}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.pm25}
                                    </h2>
                                </div>
                  </div>
                ))}
              </div>
            </div>
        );
    }
}

export default SummaryTable;