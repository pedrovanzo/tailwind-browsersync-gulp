const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
// Serve static files from the 'public' directory
app.use(express.static('public'))
// Set the view engine to EJS
app.set('view engine', 'ejs')
// Define a route to render the EJS file
app.get('/', (req, res) => {
    // Serve .ejs
    res.render('index')
    // Serve .html
    // res.sendFile(path.join(__dirname, '/views/index.html'))
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})