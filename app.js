const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;


const tasks = [
  { id: 1, name: 'Milk',          status: 'done'    },
  { id: 2, name: 'Eggs',          status: 'done'    },
  { id: 3, name: 'Bread',         status: 'pending' },
  { id: 4, name: 'Butter',        status: 'pending' },
  { id: 5, name: 'Orange juice',  status: 'pending' },
];

// المسار الأول: معلومات عامة عن التطبيق والسيرفر
app.get('/', (req, res) => {
  res.json({
    app:  'CISC 886 Lab 8 - CI/CD',
    mode: process.env.MODE || 'production',
    node: process.version,
    host: os.hostname(),
  });
});

// المسار الثاني: عرض المهام مقسمة حسب الحالة (Done / Pending)
app.get('/tasks', (req, res) => {
  // التعديل هنا: استخدمنا filter بدل Object.groupBy عشان يشتغل على كل النسخ
  const grouped = {
    done: tasks.filter(task => task.status === 'done'),
    pending: tasks.filter(task => task.status === 'pending')
  };
  res.json(grouped);
});

app.listen(PORT, () => {
  console.log('--------------------------------------------------');
  console.log(`  CISC 886 Lab 8 — App started`);
  console.log(`  Port:  ${PORT}`);
  console.log(`  Host:  ${os.hostname()}`);
  console.log('--------------------------------------------------');
});