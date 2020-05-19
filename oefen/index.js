// app.get('/billie-eilish-ilomilo-mbnn-remix.mp3', function (req, res) {
//   res.send('billie-eilish-ilomilo-mbnn-remix.mp3')
// })

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})