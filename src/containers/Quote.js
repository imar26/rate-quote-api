import React, { Component } from 'react';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [],
            loading: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            quotes: newProps.quotes,
            loading: newProps.loading
        });
    }

    render() {
        if(this.state.loading) {
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
        } else if(this.state.quotes.length < 1) {
            return <tr className="no-results"><td colSpan="6">No Results Found</td></tr>
        } else {
            return( 
                this.state.quotes.map((quote, i) => {
                    return <tr key={i}>
                        <td>{quote.lenderName}</td>
                        <td>{quote.loanType}</td>
                        <td>{quote.interestRate}%</td>
                        <td>${quote.closingCosts}</td>
                        <td>${quote.monthlyPayment.toFixed(2)}</td>
                        <td>{quote.apr.toFixed(3)}%</td>
                    </tr>
                })
            )     
        }
    }
}

export default Quote;