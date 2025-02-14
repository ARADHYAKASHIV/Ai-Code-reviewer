require('dotenv').config()
const app = require('./src/app')

// Add detailed startup logging
console.log('Starting server...')
console.log('Loading environment variables...')
console.log('Initializing Express application...')

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
    console.log('Environment:', process.env.NODE_ENV || 'development')
    console.log('Google Gemini Key:', process.env.GOOGLE_GEMINI_KEY ? 'Loaded' : 'Missing')
    console.log('hello')
}).on('error', (err) => {
    console.error('Server failed to start:', err)
    process.exit(1)
})
