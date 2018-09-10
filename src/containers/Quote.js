import React, { Component } from 'react';

class Quote extends Component {
    render() {
        // If there are no quotes
        if(this.props.quotes && this.props.quotes.length < 1) {
            return <tr className="no-results"><td colSpan="6">No Results Found</td></tr>
        // Display rate quotes
        } else if(this.props.quotes && this.props.loading === false) {
            return( 
                this.props.quotes.map((quote, i) => {
                    return <tr key={i}>
                        <td>{quote.lenderName}</td>
                        <td>{quote.loanType}</td>
                        <td>{quote.interestRate}%</td>
                        <td>${quote.closingCosts}</td>
                        <td className="desktop">${quote.monthlyPayment.toFixed(2)}</td>
                        <td className="desktop">{quote.apr.toFixed(3)}%</td>
                    </tr>
                })
            )   
        // If loader is enabled  
        } else if(this.props.loading === true) {
            return <tr className="loading"><td colSpan="6"><div id="circularG">
            <div id="circularG_1" className="circularG"></div>
            <div id="circularG_2" className="circularG"></div>
            <div id="circularG_3" className="circularG"></div>
            <div id="circularG_4" className="circularG"></div>
            <div id="circularG_5" className="circularG"></div>
            <div id="circularG_6" className="circularG"></div>
            <div id="circularG_7" className="circularG"></div>
            <div id="circularG_8" className="circularG"></div>
            </div></td></tr>
        } else {
            return null
        }
    }
}

export default Quote;