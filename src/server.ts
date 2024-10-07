import Fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = Fastify({
  logger: true
})


app.get('/prompts', async () => {
  const prompts = await prisma.prompt.findMany()
  return prompts
})

app.listen({
  port:3333,
}).then (() => {
  console.log("HTTP Server Running")
})