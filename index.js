const express = require("express")
const app = express()

console.log("Express@@@!!!")

app.get("/", (request, response) => {
  response.json({
    id: 1, 
    firstName: "Jim", 
    lastName: "Schenkelberg"
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening on port 3000...')
})
