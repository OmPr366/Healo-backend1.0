const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const doctorRoute =  require('./routes/doctors')
// const testimonialRoute =  require('./routes/testimonials')

// const pin=require('pincode')
// var passport = require('passport');
// const session = require('express-session')
require("dotenv").config();
// bring routes

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
// const productCateg = require('./routes/Products/productCateg')
// const formRoutes  = require('./routes/form')
// const userRoutes = require('./routes/user')
const blogRoutes = require("./routes/blog");
const imageRoutes = require("./routes/image");

const homebanner = require("./routes/homebanner");
// const homeCateg =  require('./routes/HomePage/homeCateg')
// const newArrival =  require('./routes/Products/newArrival')
const homeList =  require('./routes/homelist')

// const singleProduct =  require('./routes/Products/singleProduct')
// const userCard = require('./routes/Products/userCart')
// const homeCollection = require('./routes/Products/homeCollection')
// const faqRoutes = require('./routes/faq')
// const galleryRoute =  require('./routes/gallery')
// const emailRoutes = require('./routes/emails');
const termRoutes = require("./routes/t&c");
// const paymentRoutes = require('./routes/payment');
// const ordersRoutes =  require('./routes/Products/orders')
// const appointmentRoutes =  require('./routes/appointment')
const excel = require("./routes/excel");
const subscriberRoutes = require("./routes/subscriber");
const IntroPop = require("./routes/introPop");
const AboutCardRoutes = require("./routes/aboutCard");
const AboutHeadRoutes = require("./routes/about/aboutHead");
// Products
const ProductCategRoutes = require("./routes/Products/ProductCateg");
const ProductMenuRoutes = require("./routes/Products/ProductMenu");
const ProductSubMenuRoutes = require("./routes/Products/ProductSubMenu");
const Product = require("./routes/Products/Product");
const PaymentRoute =  require("./routes/payment")
const CouponRoute =  require("./routes/Products/Coupons")
// const homeList =  require('./routes/homeList')
const toprated =  require('./routes/toprated')
const trendingProducts =  require('./routes/trendingProducts')
const topSelling =  require('./routes/topSelling')
const recentlyadded =  require('./routes/recentlyadded')
const popularProduct =  require('./routes/Products/PopularProduct')
const contact =  require('./routes/contact');
const allOrders =  require('./routes/allOrders')
// app
const app = express();

// db
mongoose.connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(cookieParser());

// cors
app.use(cors());

// routes middleware

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
// app.use('/api', formRoutes);
// app.use('/api',userRoutes);
app.use("/api", blogRoutes);
app.use("/api", imageRoutes);

// app.use('/api',doctorRoute);
// app.use('/api',testimonialRoute);
app.use("/api", homebanner);
// app.use('/api',homeCateg);
// app.use('/api',newArrival);
app.use('/api',homeList);

// app.use('/api',singleProduct);
// app.use('/api',userCard);
// app.use('/api',homeCollection)
// app.use('/api',faqRoutes)
// app.use('/api',productCateg)
// app.use('/api',galleryRoute)
// app.use('/api',emailRoutes)
app.use("/api", termRoutes);
// app.use('/api',paymentRoutes)
// app.use('/api',ordersRoutes);
// app.use('/api',appointmentRoutes);
app.use("/api", excel);
app.use("/api",contact);
app.use("/api", subscriberRoutes);
app.use("/api", IntroPop);
app.use("/api", AboutCardRoutes);
app.use("/api", AboutHeadRoutes);
app.use("/api",PaymentRoute);
app.use("/api",toprated);
app.use("/api",trendingProducts);
app.use("/api",topSelling);

// Products
app.use("/api", ProductCategRoutes);
app.use("/api", ProductMenuRoutes);
app.use("/api", ProductSubMenuRoutes);
app.use("/api", Product);
app.use("/api",CouponRoute);
app.use("/api",recentlyadded);
app.use("/api",popularProduct)
app.use("/api",allOrders);




// port
const port = process.env.PORT || 8000;
app.use("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
