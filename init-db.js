db = db.getSiblingDB('todolist');
db.tasks.drop();
db.tasks.insertMany([
  { id: 1, name: 'Buy Milk', status: 'pending' },
  { id: 2, name: 'Clean Room', status: 'completed' },
  { id: 3, name: 'Finish Lab 8', status: 'pending' }
]);