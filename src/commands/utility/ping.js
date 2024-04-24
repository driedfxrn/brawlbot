const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with latency.'),
    async execute(interaction) {
        await interaction.reply({ content: `**${Date.now() - message.createdTimestamp}**ms.`, ephemeral: true})
    }
}