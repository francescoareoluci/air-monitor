import React from "react";
import PropTypes from 'prop-types';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import expand from "../images/expand.svg";

class AccordionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotationDeg: "0"
        }

        this.rotateElement = this.rotateElement.bind(this);
    }

    rotateElement() {
        let newRotation = "0";
        if (this.state.rotationDeg === "0") {
            newRotation = "-90";
        }

        this.setState({
            rotationDeg: newRotation
        });
    }

    render() {
        return (
            <AccordionItem 
                uuid={this.props.uuid}
                className="collapsable-card"
                aria-expanded={true}
            >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="collapsable-card__header-wrapper" onClick={this.rotateElement}>
                        <h2 className="collapsable-card__card-title">
                            {this.props.headerTitle}
                        </h2>
                        <img 
                            className={this.state.rotationDeg == "0" ? "collapsable-card__card-expand-down" : "collapsable-card__card-expand-up"} 
                            src={expand} />
                    </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {this.props.content}
                </AccordionItemPanel>
            </AccordionItem>
        );
    }
}

AccordionCard.propTypes = {
    uuid: PropTypes.string,
    headerTitle: PropTypes.string,
    content: PropTypes.func
}

export default AccordionCard;