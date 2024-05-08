const express = require("express");
const app = express();

const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});

app.get('/categories/:categoryName/products', async (req, res) => {
    const { categoryName } = req.params;
    const { n, page, sortBy, sortOrder } = req.query;

    try {
        // Logic to fetch top products from e-commerce companies
        // This is a simplified example; you'll need to implement actual API calls
        
        // Sample API call using Axios
        const response = await axios.get(`https://api.example.com/products?category=${categoryName}&limit=${n}&page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
        
        // Sample response data
        const products = response.data.products;

        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Endpoint to retrieve details of a specific product
app.get('/categories/:categoryName/products/:productId', async (req, res) => {
    const { categoryName, productId } = req.params;

    try {
        // Logic to fetch product details from e-commerce companies
        // This is a simplified example; you'll need to implement actual API calls
        
        // Sample API call using Axios
        const response = await axios.get(`https://api.example.com/products/${productId}`);
        
        // Sample response data
        const productDetails = response.data;

        res.json({ productDetails });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product details" });
    }
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
});
