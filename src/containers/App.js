import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Containers
import RateQuoteQuery from './RateQuoteQuery';
import RateQuotes from './RateQuotes';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="rateQuotes">
                    <div className="container">
                        <RateQuoteQuery setRequestId={this.props.setRequestId}
                            displayMessage={this.props.displayMessage}
                            hideMessage={this.props.hideMessage}
                            errorMessage={this.props.errorMessage} />
                        <RateQuotes requestId={this.props.requestId} />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;