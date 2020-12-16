const express = require('express');
const apiRoute = require('./routes/apiRoutes/index');
const htmlRoute = require('./routes/htmlRoutes/index');
const app = express();
const PORT = process.env.PORT || 3001;

    // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
    // parse incoming JSON data
app.use(express.json());
    // Html and Api routes
app.use("/api", apiRoute);    
app.use('/', htmlRoute);

    // allows access to css, images & js files w/o creating specific routes
app.use(express.static('public'));




app.listen(PORT, () => {
    console.log(`API server on port ${PORT}`)
});