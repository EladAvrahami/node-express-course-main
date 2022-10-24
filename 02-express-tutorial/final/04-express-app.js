const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware (create new public folder )
app.use(express.static('./public'))//by using express.static files will be available all over the program

/*
//אפשר לוותר על הכתובת הזאת מגיוון שבכל מקרה ברית המחדל היא להגיע
לקובץ האינדקס של השבלונה בתיקייה ציבורית 
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))//we can also use path.join()
})
*/
app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
   //when start the app open http://localhost:5000/ in browser
})
