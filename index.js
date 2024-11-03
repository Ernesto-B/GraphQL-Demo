import express from "express";
// graphql-request uses ESM syntax, thus add "type": "module" in package.json 
import { request, gql } from "graphql-request";
const app = express()

app.use(express.json());

// API you want to fetch from. Note, not all API's support GraphQL. You can find more on Apollo site
const GRAPHQL_API = "https://spacex-production.up.railway.app/"

app.post("/rocketInfo", async (req, res) => {
    const { limit } = req.body; // Extract limit from request body

    const query = gql`
        query ExampleQuery($limit: Int) {
            rockets(limit: $limit) {
                name
                description
                active
                cost_per_launch
                success_rate_pct
                wikipedia
            }
        }
    `;

    // Define the variables object with the extracted limit
    const variables = {
        limit: limit || 5 // Default to 5 if limit is not provided
    };

    try {
        // Pass the query and variables to the request
        const data = await request(GRAPHQL_API, query, variables);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("Failed to fetch rocket information");
        console.log(error);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; // Export app for testing