import React, { Component } from 'react';

class RateQuoteQuery extends Component {
    render() {
        return (
            <div className="rateQuoteQuery">
                <form method="POST">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>
                                Loan Size (in $)
                            </label>
                            <input type="text" ref="loanSize" className="form-control"
                                required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>
                                Property Type
                            </label>
                            <select ref="propType" className="form-control"
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
                            <input type="text" ref="creditScore" className="form-control"
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
                    <div className="row">
                        <div className="offset-md-10 col-md-2 form-group">
                            <input type="button" value="Submit" className="btn subBtn" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default RateQuoteQuery;