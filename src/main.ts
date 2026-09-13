import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { exit } from "process";

const discordBotToken = process.env.DISCORD_BOT_TOKEN;

if (!discordBotToken) {
  console.log("Missing DISCORD_BOT_TOKEN in .env");
  exit();
}

console.log("App Started");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log("READY!!! Login in as " + readyClient.user.tag);
});

client.login(discordBotToken);
