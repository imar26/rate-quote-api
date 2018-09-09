import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Containers
import RateQuoteQuery from './RateQuoteQuery';
import RateQuotes from './RateQuotes';

class App extends Component {
    constructor() {
        super();

        this.state = {
            requestId: ''
        }

        this.setRequestId = this.setRequestId.bind(this);
    }

    setRequestId(requestId) {
        this.setState({
            requestId: requestId
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="rateQuotes">
                    <div className="container">
                        <RateQuoteQuery requestId={this.setRequestId} />
                        <RateQuotes requestId={this.state.requestId} />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;