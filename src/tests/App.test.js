import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Import Presentational Components
import Header from '../components/Header';
import Footer from '../components/Footer';

Enzyme.configure({ adapter: new Adapter() });

// Import Reducers
import rootReducer from '../reducers/rootReducer';

// Import Constants
import * as constants from '../constants';

// Import Constants
import * as actions from '../actions';

// Dummy data
const requestId = "7544791c-cb37-4056-9ec2-de80b2ec8e2b";
const errorMessage = "Invalid Authorization Token";
const quotes = {
    "done": true,
    "rateQuotes": [
    {
        "lenderName": "TFB Federal Credit Union",
        "loanType": "7/1 ARM",
        "interestRate": 4,
        "closingCosts": 5250,
        "monthlyPayment": 1909.6611818618114,
        "apr": 4.108324044675101
    },
    {
        "lenderName": "Bates College Credit Union",
        "loanType": "7/1 ARM",
        "interestRate": 3.875,
        "closingCosts": 2450,
        "monthlyPayment": 1880.9483354653669,
        "apr": 3.9252735460552226
    },
    {
        "lenderName": "Bates College Credit Union",
        "loanType": "10/1 ARM",
        "interestRate": 4,
        "closingCosts": 2450,
        "monthlyPayment": 1909.6611818618114,
        "apr": 4.0506417366996175
    },
    {
        "lenderName": "Tres Graduado Mortgage",
        "loanType": "15YR Fixed",
        "interestRate": 3.75,
        "closingCosts": 6000,
        "monthlyPayment": 1852.4623662884978,
        "apr": 3.871944458123837
    },
    {
        "lenderName": "Online National Financial Institution",
        "loanType": "10/1 ARM",
        "interestRate": 3.625,
        "closingCosts": 10500,
        "monthlyPayment": 1824.205208088716,
        "apr": 3.8362380186576948
    }
]};

// Unit Tests for reducers
describe('Rate Quotes Reducers', () => {
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {}))
        .toEqual(
            {
                "error": false, 
                "errorMessage": "", 
                "loading": false, 
                "quotes": [], 
                "requestId": ""
            }
        );
    }),
    it('should handle the test case to set the request id', () => {
        expect(
        rootReducer(
            {
                "error": false, 
                "errorMessage": "", 
                "loading": false, 
                "quotes": [], 
                "requestId": ""
            },
            {
                type: constants.SET_REQUEST_ID,
                requestId: requestId
            }
        )
        ).toEqual({
            requestId: requestId
        });
    }),
    it('should handle the test case to display the error message', () => {
        expect(
        rootReducer(
            {
                "error": false, 
                "errorMessage": "", 
                "loading": false, 
                "quotes": [], 
                "requestId": ""
            },
            {
                type: constants.DISPLAY_MESSAGE,
                errorMessage: errorMessage          
            }
        )
        ).toEqual({
            error: true,
            errorMessage: errorMessage
        });
    }),
    it('should handle the test case to hide the error message', () => {
        expect(
        rootReducer(
            {
                error: true,
                errorMessage: errorMessage
            },
            {
                type: constants.HIDE_MESSAGE
            }
        )
        ).toEqual({
            error: false,
            errorMessage: ''
        });
    }),
    it('should handle the test case to enable loader', () => {
        expect(
        rootReducer(
            {
                loading: false
            },
            {
                type: constants.ENABLE_LOADING
            }
        )
        ).toEqual({
            loading: true
        });
    }),
    it('should handle the test case to disable loader and set the rate quotes', () => {
        expect(
        rootReducer(
            {
                loading: true,
                quotes: []
            },
            {
                type: constants.SET_QUOTES,
                quotes: quotes
            }
        )
        ).toEqual({
            loading: false,
            quotes: quotes
        });
    });
});

// Unit tests for Components
function header() {
    const enzymeWrapper = mount(<Header/>);
    return {
        enzymeWrapper
    }
}

function footer() {
    const enzymeWrapper = mount(<Footer/>);
    return {
        enzymeWrapper
    }
}

describe('Rate Quotes Components', () => {
  it('should render header component', () => {
    const { enzymeWrapper } = header();

    expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);

    expect(enzymeWrapper.find('img').props().src).toEqual('https://rgblog6.wpengine.com/wp-content/uploads/2017/11/rg.png');

    expect(enzymeWrapper.find('span').text()).toBe('RateGravity - Rate Quotes App');
  }),
  it('should render footer component', () => {
    const { enzymeWrapper } = footer();

    expect(enzymeWrapper.find('footer').hasClass('footer')).toBe(true);

    expect(enzymeWrapper.find('span').text()).toBe('Copyrights © RateGravity 2018.');
  })
});