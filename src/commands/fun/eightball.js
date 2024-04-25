const { SlashCommandBuilder } = require('discord.js')
const choices = [
    'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
    'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
    'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
    'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
    'The future is uncertain.', 'I would rather not say.', 'Who cares?',
    'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Let the 8 ball decide your fate.')
        .addStringOption(option => option.setName('content') 
            .setDescription('The content the 8 ball will decide.')
            .setRequired(true)
        ),

    async execute(interaction) {
        if(interaction.channelId !== '1232711204192124929') {
            await interaction.reply({ content: 'You can only use this in bot commands channel.', ephemeral: true});
            return;
        }

        const reply = choices[Math.floor(Math.random() * choices.length)]

        await interaction.reply({ content: `The answer to \`${interaction.options.getString('content')}\` is **${reply}**`, ephemeral: true})
    }
}