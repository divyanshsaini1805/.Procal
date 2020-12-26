if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}
const express = require("express");
const app = express();
const indexRouter = require('./routes/index')
const shopRouter = require('./routes/shop')
const loginRouter = require('./routes/login')
const path = require("path")
// const expressLayouts = require("express-ejs-layouts")


app.set("views", __dirname + "/views");
// app.set('layout', 'layout/layouts')
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use(expressLayouts);


// const mongoose = require("mongoose");
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("connected to mongoose"));




app.use('/', indexRouter);
app.use('/shops', shopRouter);
app.use('/login', loginRouter);


app.listen(process.env.PORT || 80, () => {
  console.log("Listening at Port 80");
});
