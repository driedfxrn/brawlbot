const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Post a suggestion (Read pins of discuss-suggestions) before doing so.')
        .addStringOption(option => option.setName('content')
            .setDescription('Message to suggest.')
            .setMaxLength(248)
            .setMinLength(4)
            .setRequired(true)
        ),

    async execute(interaction) {
        // Color Code: #fffc04
        const member = await interaction.guild.members.fetch(interaction.user.id);
        const option = interaction.options.getString('content');
        const channel = await interaction.guild.channels.fetch('1170896501443145820');

        const embed = new EmbedBuilder()
            .setColor('#FFFC04')
            .setAuthor({ name: `${member.user.username}`, iconURL: `${member.displayAvatarURL()}`})
            .setDescription(option)
            .setFooter({ text: '🔼 Like it! | 🔽 Don\'t like it! | 🔶 Already Done | ❌ Won\'t be done | ✅ Will Be Done'});

        const message = await channel.send({ embeds: [embed], fetchReply: true});
        
        message.react('🔼')
			.then(() => message.react('🔽'))
			.catch(error => console.error('One of the emojis failed to react:', error));
        
        interaction.reply({ content: 'Posted your suggestion!'})
    }
}