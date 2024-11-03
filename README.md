# GraphQL-Demo

This project is a simple Node.js and Express backend that uses GraphQL to fetch information about SpaceX rockets from a public SpaceX GraphQL API. The code demonstrates how to use GraphQL variables in a query to make requests based on user input.

## Features
- Fetch SpaceX rocket information such as name, description, cost per launch, and success rate.
- Use GraphQL variables to dynamically adjust the query based on user input.
- Simple Express.js setup to handle incoming POST requests and return JSON responses.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your local machine.
- An internet connection to fetch data from the SpaceX GraphQL API.

## Installation and Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Ernesto-B/GraphQL-Demo.git
   cd <dir-name>
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
2. **Start the server**
    ```bash
    node index.js
    ```
    - The server will run on `http://localhost:3000` by default.
## Notes
- GraphQL API: The project uses the SpaceX GraphQL API at https://spacex-production.up.railway.app/.
- Error Handling: If the request to the SpaceX API fails, a 500 error is returned with a "Failed to fetch rocket information" message.
- GraphQL Variables: The use of GraphQL variables makes the query dynamic, allowing the user to specify the number of rockets to retrieve.