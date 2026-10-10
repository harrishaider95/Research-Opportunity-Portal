import 'dotenv/config'
import { createServer } from 'node:http'
import mongoose from 'mongoose'
import { createApp } from './app.js'
import Opportunity from './models/Opportunity.js'

const port = Number(process.env.PORT || 4000)
const connectionString = process.env.MONGODB_URI
const databaseName = process.env.MONGODB_DATABASE

async function startServer() {
  try {
    await mongoose.connect(connectionString, databaseName ? { dbName: databaseName } : {})
    await Opportunity.init()

    const server = createServer(createApp(Opportunity))

    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  } catch (error) {
    console.error('Server error:', error.message)
    process.exit(1)
  }
}

startServer()