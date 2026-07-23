const express = require ("express");
const cors = require("cors");
const dotenv = require ("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes")
dotenv.config();

connectDB();

const app = express();
app.use(cors(
    {
        origin: ['http://localhost:3000', process.env.FRONTEND_URL],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("ShopNext Backend is working properly");
});

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));


// Serve frontend in production
if(process.env.Node_ENV === 'production'){
    app.use(express.static(Path2D.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(Path.resolve(__dirname, '../frontend/build/index.html'));
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