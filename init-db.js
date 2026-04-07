db = db.getSiblingDB('todolist');
db.tasks.drop();
db.tasks.insertMany([
  { id: 1, name: 'Buy Coffee for Lab 8', status: 'pending' },
  { id: 2, name: 'Clean Room', status: 'completed' },
  { id: 3, name: 'Finish Lab 8', status: 'pending' }
]);