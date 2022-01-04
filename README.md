# INSULINE CALC
## Install dependencies
To install the dependencies, open your terminal and run
    
    npm i

## Run Server
To run the server on localhost port, run this command and go to http://localhost:4321

    npm start

### Get information
Open postman or similar program

Headers
    
    Authorization: Bearer 72a9e2f8af8e4060bc84861b5bd063ed5d8ba5bccf42a12d32f6f33aacbe170c
Body (JSON format)

    {
        "id": 1,
        "gender": 1,
        "age": 35,
        "height": 182,
        "weight": 80,
        "activity": 1.55,
        "numMeals": 3,
        "sport": 120,
        "stress": 65
    }

Do request

    http://localhost:4321/get/plan

## Tests
To do application test, open your terminal and run

    npm test
