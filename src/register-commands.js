require("dotenv").config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const commands = [
  {
    name: "hey",
    description: "Replies with hey",
  },
  {
    name: "ping",
    description: "Replies with pong",
  },
];
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands....");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("Slash commands registered successfully");
  } catch (error) {
    console.error(`There has been an error: ${error.message}`);
  }
})();
