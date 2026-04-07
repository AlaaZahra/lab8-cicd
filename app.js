const mongoose = require('mongoose');
const express = require('express');
const app = express();


const dbURI = process.env.DATABASE_URL || 'mongodb://db:27017/todolist';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));


const taskSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String
});
const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.listen(3000, () => console.log('Server running on port 3000'));