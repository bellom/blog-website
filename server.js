const express = require('express')
const mongoose = require('mongoose')
const articlesRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use('/articles', articlesRouter)

app.get('/', (req, res) => {
  const articles = [{
    title: "my title"
  }]
  res.render('articles/index', { articles: articles})
})

app.listen(5000)