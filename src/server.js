// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoute');
const eventRoutes = require('./routes/eventRoute');
const groupRoutes = require('./routes/groupRoute');
const discussionRoutes = require('./routes/discussionRoute');
const albumRoutes = require('./routes/albumRoute');


const mongoURI = `mongodb+srv://rahmaalbekbashy:mrazSB.15@cluster0.zvzhv9a.mongodb.net/facebook`
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
app.use(express.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/groups', groupRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/discussions', discussionRoutes);
app.use('/api/v1/albums', albumRoutes);
