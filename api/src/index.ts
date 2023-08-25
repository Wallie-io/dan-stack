import app from './server'

const PORT = process.env.port || 8000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
