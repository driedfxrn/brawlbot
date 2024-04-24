# BrawlDev's Discord Bot

This bot is for brawlbattle's discord server! It's made by driedfxrn his admin. This is the github repo so you can open PRs or give me feedback/suggest ideas to add! :D

## Current Features

- Suggest Command
- Ping Command

## Installation

First you will need to install all the dependencies of the project.

```shell
npm install
yarn install
pnpm install
bun install
```

Once you have all the dependencies installed, you will need to create a file inside [./src](./src/) called `config.json`. You will need to copy the properties of the [config.demo.json](./src/config.demo.json) file and replace the values with those of your own bot.

> [!TIP]
> Here is the template of the `config.json` in case you can't see the `config.demo.json` file.
>
> ```json
> { 
>    "token": "Bot Token Here",
>    "clientId": "applicationIDHere",
>    "guildId": "mainGuildIDHere"
> }
> ```

### Running your bot

To run your bot, you will need to run the "dev" script in the following ways:

```shell
npm run dev
yarn run dev
pnpm run dev
bun run dev
```

> [!WARNING]
> It is important that your bot has all the intents activated in the `Discord Developer Portal`.
