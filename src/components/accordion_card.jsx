import React from "react";
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class AccordionCard extends React.Component {
    constructor(props) {
        super(props);
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
                    <h2 className="collapsable-card__card-title">
                        {this.props.headerTitle}
                    </h2>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {this.props.content}
                </AccordionItemPanel>
            </AccordionItem>
        );
    }
}

export default AccordionCard;