import React, { Component } from 'react';

// Import Containers
import Quote from './Quote';

class RateQuotes extends Component {    
    constructor() {
        super();

        this.state = {
            quotes: [],
            loading: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.getQuotes(newProps.requestId);
    }

    getQuotes(requestId) {
        this.setState({
            loading: true
        })
        fetch('https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes?requestId='+requestId, {
            method: 'GET',
            headers: {
                'Authorization': process.env.REACT_APP_API_KEY,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {            
            return response.json();
        }).then(data => {
            if(data.done === false) {
                this.getQuotes(requestId);
            } else {
                this.setState({
                    quotes: data.rateQuotes,
                    loading: false
                })
            }
        });
    }

    render() {
        return (
            <div className="quotes table-responsive">
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Lender</th>
                        <th scope="col">Product</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Closing Costs</th>
                        <th scope="col">Monthly Payment</th>
                        <th scope="col">APR</th>
                    </tr>
                </thead>
                <tbody>
                    <Quote quotes={this.state.quotes} loading={this.state.loading} />
                </tbody>
                </table>
            </div>            
        )
    }
}

export default RateQuotes;