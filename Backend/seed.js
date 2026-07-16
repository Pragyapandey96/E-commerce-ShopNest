require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./model/User");
const Product = require("./model/Product");
const Order = require("./model/Order");

const products = [
    {
        name: "Wireless Noise-Cancelling Headphones",
        description: "Over-ear Bluetooth headphones with active noise cancellation and a 30-hour battery.",
        price: 4999,
        category: "Electronics",
        stock: 18,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        numReviews: 124
    },
    {
        name: "Minimal Leather Backpack",
        description: "Durable everyday backpack with a padded laptop compartment and front organizer pocket.",
        price: 3299,
        category: "Fashion",
        stock: 24,
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        numReviews: 76
    },
    {
        name: "Smart Fitness Watch",
        description: "Track workouts, heart rate, sleep, and notifications with a bright AMOLED display.",
        price: 6499,
        category: "Electronics",
        stock: 12,
        imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        numReviews: 98
    },
    {
        name: "Ceramic Coffee Mug Set",
        description: "Set of four matte-finish ceramic mugs, perfect for tea, coffee, and hot chocolate.",
        price: 1199,
        category: "Home & Kitchen",
        stock: 40,
        imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        numReviews: 52
    },
    {
        name: "Organic Cotton T-Shirt",
        description: "Soft regular-fit crew-neck T-shirt made from breathable organic cotton.",
        price: 899,
        category: "Fashion",
        stock: 55,
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        numReviews: 41
    },
    {
        name: "Stainless Steel Water Bottle",
        description: "Insulated 750 ml bottle that keeps drinks cold for 24 hours and hot for 12 hours.",
        price: 749,
        category: "Home & Kitchen",
        stock: 36,
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        numReviews: 89
    }
];

const seedDatabase = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing from Backend/.env");
        }

        await mongoose.connect(process.env.MONGO_URI);

        await Promise.all([Order.deleteMany({}), Product.deleteMany({}), User.deleteMany({})]);

        const password = await bcrypt.hash("password123", 10);
        const users = await User.insertMany([
            { name: "Admin User", email: "admin@shopnest.com", password, role: "admin", verified: true },
            { name: "Aarav Sharma", email: "aarav@example.com", password, verified: true },
            { name: "Priya Patel", email: "priya@example.com", password, verified: true }
        ]);

        const createdProducts = await Product.insertMany(products);

        await Order.insertMany([
            {
                user: users[1]._id,
                items: [
                    { productId: createdProducts[0]._id, quantity: 1, price: createdProducts[0].price },
                    { productId: createdProducts[5]._id, quantity: 2, price: createdProducts[5].price }
                ],
                totalAmount: createdProducts[0].price + (createdProducts[5].price * 2),
                address: { fullName: "Aarav Sharma", street: "42 Park Street", city: "Kolkata", postalCode: "700016", country: "India" },
                paymentId: "seed_payment_001",
                status: "delivered"
            },
            {
                user: users[2]._id,
                items: [{ productId: createdProducts[2]._id, quantity: 1, price: createdProducts[2].price }],
                totalAmount: createdProducts[2].price,
                address: { fullName: "Priya Patel", street: "18 MG Road", city: "Bengaluru", postalCode: "560001", country: "India" },
                paymentId: "seed_payment_002",
                status: "shipped"
            }
        ]);

        console.log("Database seeded: 3 users, 6 products, and 2 orders created.");
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
};

seedDatabase();
