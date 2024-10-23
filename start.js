const express = require('express');
const path = require('path');
const app = express();

// Указываем текущий каталог как источник статических файлов
app.use(express.static(path.join(__dirname)));

// Роут для загрузки index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = app;
