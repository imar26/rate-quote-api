# RateGravity | Rate Quotes App

This web application allows the user to enter loan information and then displays rate quotes from the API

## Steps to Setup and Run the Application

### Installation and Running
1. You need to have **node.js** and **npm** installed on your machine. Once installed, you can check the versions using the below commands

```sh
node -v
npm -v
```
Links for reference:
* [install node.js](https://nodejs.org/en/download/)

2. Clone the project from GitHub Repository and Install all the necessary packages

```sh
git clone https://github.com/imar26/rate-quote-api.git
cd rate-quote-api
npm install
```

3. Create the `.env` file and save it in the root folder of your application

```sh
REACT_APP_API_KEY = YOUR_API_KEY
```

4. Run the react application

```sh
npm start
```

5. Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

### How to Use
1. Fill the form by entering the loan information

    * Loan Size - Enter loan amount in dollars ($)
    * Credit Score - Enter number in the range of 300 - 800
    * Property Type - Select the type of property
    * Occupancy - Select the occupancy

2. Click on Quote Rates button

### Technologies Used

* React JS
* Redux
* API