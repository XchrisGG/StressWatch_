const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const recoveryRoutes = require("./routes/recovery");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', recoveryRoutes); // Usa la ruta en tu aplicación



// routes

app.get("/", (req, res) => {
    res.send("Api funcionando");
});

mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("Conectado a MongoDB Atlas"))
   .catch((error) => console.error(error))




app.listen(port, () => console.log('server listening on port', port));