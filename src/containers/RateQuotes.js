import React, { Component } from 'react';

class RateQuotes extends Component {
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
                    <tr>
                        <td>TFB Federal</td>
                        <td>10/1 ARM</td>
                        <td>4.125%</td>
                        <td>$10,000</td>
                        <td>$2,000</td>
                        <td>4.375%</td>
                    </tr>
                </tbody>
                </table>
            </div>            
        )
    }
}

export default RateQuotes;