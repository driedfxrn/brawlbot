const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with latency.'),
    async execute(interaction) {
        const sent = await interaction.reply({
            content: 'Pinging...',
            fetchReply: true,
        })
        await interaction.editReply(
            `Ping Time: **${sent.createdTimestamp - interaction.createdTimestamp}**ms`,
        )
    },
}
