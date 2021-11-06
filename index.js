const { Client, Intents } = require('discord.js')

process.env.NODE_ENV !== 'production' &&
  require('dotenv').config({ path: '.env.local' })

const { GUILDS } = Intents.FLAGS

async function main() {
  const client = new Client({ intents: [GUILDS] })

  await client.login(process.env.DISCORD_BOT_TOKEN)
  console.log(`Logged in as ${client.user.tag}`)

  const channel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID)
  await channel.send(`Hello Discord`)

  return process.exit()
}

main().catch(console.log)
