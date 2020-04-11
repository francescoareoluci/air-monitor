import React from 'react';

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
                                        {row.name}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.calories}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.fat}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.carbs}
                                    </h2>
                                </div>
                                <div className="table-cell">
                                    <h2 className="table-body-cell">
                                        {row.protein}
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