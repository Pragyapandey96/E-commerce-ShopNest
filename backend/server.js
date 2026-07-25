const express = require ("express");
const cors = require("cors");
const dotenv = require ("dotenv");
const connectDB = require("./config/db");
const path = require('path');


dotenv.config();
connectDB();

const app = express();

// set CORS for frontend URL / allow single-node deploy
app.use(cors(
    {
        origin: ['http://localhost:3000', process.env.FRONTEND_URL],
        credentials: true
    }
));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.get("/", (req, res) => {
//     res.send("ShopNext Backend is working properly");
// });

app.use("/api/auth", require('./routes/authRoutes'));
app.use("/api/products", require('./routes/productRoutes'));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));


// Serve frontend in production
if(process.env.Node_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('ShopNest API is running in Development mode...');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});