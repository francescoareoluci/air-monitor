import React from 'react';
import scroll from '../images/expand.svg';
import scrollDisabled from '../images/expandDisabled.svg';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import helpIcon from '../images/helpOutline.svg'

function createData(date, temp, co2, pm10, pm25) {
    return { date, temp, co2, pm10, pm25 };
}
  
const rows = [
  createData('2020/02/07', 20, 6.0, 24, 4.0),
  createData('2020/02/06', 23, 9.0, 37, 4.3),
  createData('2020/02/05', 19, 16.0, 24, 6.0),
  createData('2020/02/04', 22, 3.7, 67, 4.3),
  createData('2020/02/02', 24, 16.0, 49, 3.9),
  createData('2020/02/01', 20, 12.0, 40, 5.6),
  createData('2020/01/30', 18, 5.3, 21, 4.4),
  createData('2020/01/29', 25, 4.6, 32, 5.2),
  createData('2020/01/28', 22, 13.0, 27, 3.2),
  createData('2020/01/27', 21, 4.8, 60, 5.8),
  createData('2020/01/26', 26, 11.3, 43, 4.2),
  createData('2020/01/25', 18, 14.2, 52, 4.7),
  createData('2020/01/24', 17, 11.2, 35, 3.8),
  createData('2020/01/23', 20, 5.7, 45, 5.2),
  createData('2020/01/22', 21, 14.1, 34, 5.9),
  createData('2020/01/21', 23, 10.4, 56, 2.6),
  createData('2020/01/20', 21, 4.6, 42, 3.4)
];

const displayableRows = 6;


class SummaryTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNextScrollEnabled: false,
            isPreviousScrollEnabled: false,
            currentPage: 0,
            isModalOpen: [false, false, false],
        };

        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);
    }

    increasePage() {
        if (displayableRows * (this.state.currentPage + 1) > rows.length) {
            return;
        }

        const nextPage = this.state.currentPage + 1;
        const isNextPageAvailable = displayableRows * (nextPage + 1) > rows.length ? false : true
        this.setState({
            currentPage: nextPage,
            isPreviousScrollEnabled: true,
            isNextScrollEnabled: isNextPageAvailable
        })
    }

    decreasePage() {
        if (this.state.currentPage === 0) {
            return;
        }

        const nextPage = this.state.currentPage - 1;
        const previousPageAvailable = nextPage === 0 ? false : true;
        this.setState({
            currentPage: nextPage,
            isPreviousScrollEnabled: previousPageAvailable,
            isNextScrollEnabled: true
        })
    }

    onOpenModal(modalId) {
        let newModalState = this.state.isModalOpen;
        newModalState[modalId] = true;
        this.setState({ isModalOpen: newModalState });
    }
     
    onCloseModal(modalId) {
        let newModalState = this.state.isModalOpen;
        newModalState[modalId] = false;
        this.setState({ isModalOpen: newModalState });
    }

    componentDidMount() {
        const isNextPageAvailable = displayableRows * (this.state.currentPage + 1) < rows.length ? true : false;

        this.setState({
            isNextScrollEnabled: isNextPageAvailable
        });
    }

    render (){
        const dataPageStart = displayableRows * this.state.currentPage;
        const dataPageEnd = displayableRows * (this.state.currentPage + 1);
        const displayRows = rows.slice(dataPageStart, dataPageEnd);

        return (
            <div className="table-header">
                <div className="table-wrapper">
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
                        <Modal className="table-modal" open={this.state.isModalOpen[0]} onClose={() => this.onCloseModal(0)} center>
                            <h2 className="modal-content">
                            Carbon dioxide (CO2) is an important trace gas in Earth's atmosphere. 
                            It is an integral part of the carbon cycle, a biogeochemical cycle in which carbon 
                            is exchanged between the Earth's oceans, soil, rocks and the biosphere. 
                            CO2 absorbs and emits infrared radiation and consequently is a greenhouse gas 
                            that plays a significant role in influencing Earth's surface temperature through the greenhouse effect.
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(0)}>
                                <h2 className="table-header-cell-text">
                                CO2
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                        <Modal className="table-modal" open={this.state.isModalOpen[1]} onClose={() => this.onCloseModal(1)} center>
                            <h2 className="modal-content">
                            Particulates, also known as particulate matter (PM), are microscopic particles of solid or 
                            liquid matter suspended in the air. Sources of particulate matter can be natural or anthropogenic.
                            They have impacts on climate and precipitation that adversely affect human health, in ways additional 
                            to direct inhalation. Types of atmospheric particles include suspended particulate matter, 
                            thoracic and respirable particles, inhalable coarse particles, which are coarse particles 
                            with a diameter between 2.5 and 10 micrometers (μm) (PM10), fine particles with a diameter of 2.5 μm or less (PM2.5).
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(1)}>
                                <h2 className="table-header-cell-text">
                                    PM10
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                        <Modal className="table-modal" open={this.state.isModalOpen[2]} onClose={() => this.onCloseModal(2)} center>
                            <h2 className="modal-content">
                            Particulates, also known as particulate matter (PM), are microscopic particles of solid or 
                            liquid matter suspended in the air. Sources of particulate matter can be natural or anthropogenic.
                            They have impacts on climate and precipitation that adversely affect human health, in ways additional 
                            to direct inhalation. Types of atmospheric particles include suspended particulate matter, 
                            thoracic and respirable particles, inhalable coarse particles, which are coarse particles 
                            with a diameter between 2.5 and 10 micrometers (μm) (PM10), fine particles with a diameter of 2.5 μm or less (PM2.5).
                            </h2>
                        </Modal>
                        <div className="table-cell">
                            <div className="table-header-cell clickable"
                                onClick={() => this.onOpenModal(2)}>
                                <h2 className="table-header-cell-text">
                                PM2.5
                                </h2>
                                <img className="help-icon" src={helpIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                    {displayRows.map((row) => (

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
                                    {row.pm10}
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
                <div className="table-footer">
                        <div className="table-footer-row">
                            <div className="table-footer-cell">
                                <img className="scroll-right" 
                                    src={this.state.isNextScrollEnabled ? scroll : scrollDisabled} 
                                    onClick={this.increasePage} 
                                    alt="next-page" />
                            </div>
                            <div className="table-footer-cell">
                                <img className="scroll-left" 
                                    src={this.state.isPreviousScrollEnabled ? scroll : scrollDisabled} 
                                    onClick={this.decreasePage} 
                                    alt="previous-page" />
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default SummaryTable;