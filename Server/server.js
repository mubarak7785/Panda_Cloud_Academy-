require('dotenv').config();
const express = require('express');
const {connection} = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const enrollmentRoutes = require("./routes/enrollmentRoutes")
const quizRoutes = require('./routes/quizRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const questionRoutes = require('./routes/questionRoutes');
const { swaggerDocs, swaggerUi } = require('./swagger');


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', moduleRoutes);
app.use('/api', enrollmentRoutes);
app.use('/api', quizRoutes);
app.use('/api', reviewRoutes);
app.use('/api', questionRoutes);
 // Add Swagger UI route

const PORT = process.env.PORT || 5000;
app.listen(PORT , async()=>{
    try{
        await connection
        console.log('Connected to MongoDB');
    }catch(err){ 
        console.error('Server failed to connect to MongoDB', err)
    }
    console.log(`Server running on port ${PORT}`)
})






// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     })
//     .catch(err => console.error('Failed to connect to MongoDB', err));
