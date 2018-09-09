import React, { Component } from 'react';

class RateQuoteQuery extends Component {
    baseURL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod';

    constructor() {
        super();

        this.state = {
            error: false,
            errorMessage: ''
        }
    }

    postQuery(event) {
        event.preventDefault();
        var loanSize = parseInt(this.refs.loanSize.value, 10);
        var propertyType = this.refs.propertyType.value;
        var creditScore = parseInt(this.refs.creditScore.value, 10);
        var occupancy = this.refs.occupancy.value;

        var rateObj = {
            loanSize: loanSize,
            propertyType: propertyType,
            creditScore: creditScore,
            occupancy: occupancy
        };

        var self = this;
        
        fetch(this.baseURL + '/ratequotes', {
            method: 'POST',
            body: JSON.stringify(rateObj),
            headers: {
                'Authorization': process.env.REACT_APP_API_KEY,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data.requestId) {
                self.props.requestId(data.requestId)
            } else {
                self.setState({
                    error: true,
                    errorMessage: data.errors[0]
                })
            }
        });

        event.target.reset();
    }
    render() {
        return (
            <div className="rateQuoteQuery">
                <form method="POST" onSubmit={this.postQuery.bind(this)}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>
                                Loan Size (in $)
                            </label>
                            <input type="number" ref="loanSize" className="form-control"
                                required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>
                                Property Type
                            </label>
                            <select ref="propertyType" className="form-control"
                                required>
                                <option value="SingleFamily">Single Family</option>
                                <option value="Condo">Condo</option>
                                <option value="Townhouse">Townhouse</option>
                                <option value="MultiFamily">Multi Family</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>
                                Credit Score
                            </label>
                            <input type="number" ref="creditScore" className="form-control"
                                required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>
                                Occupancy
                            </label>
                            <select ref="occupancy" className="form-control"
                                required>
                                <option value="Primary">Primary</option>
                                <option value="Secondary">Secondary</option>
                                <option value="Investment">Investment</option>
                            </select>
                        </div>
                    </div>
                    <div className="row submitBtn">
                        <div className="offset-md-10 col-md-2 form-group">                            
                            <input type="submit" value="Submit" className="btn subBtn" />
                        </div>
                        <span>{this.state.errorMessage}</span>
                    </div>
                </form>
            </div>
        )
    }
}

export default RateQuoteQuery;