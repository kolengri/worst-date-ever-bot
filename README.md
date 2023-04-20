# worst-date-ever-bot

Telegram bot that is designed to help users virtually experience the worst date imaginable

Upon starting a conversation with the bot, the user will be taken on a date with a girl named Karen. Karen is a character who will behave disgustingly throughout the entire date, hoping to push her partner away and end the date as soon as possible.

Throughout the date, Karen will be rude, poorly behaved, tell inappropriate stories, swear, drink wine askew, and generally spoil her partner's mood.

Worst date ever bot is a great way to have a laugh and have some fun without risking ruining an actual date. Users can try their persuasion skills and attempt to convince Karen to change her behavior or simply enjoy the amusing situation.

# Installation

To install the dependencies for the project, run:

```
  npm install
```

or

```
  yarn install
```

# Usage

To run the bot, you will need to provide your Telegram Bot API key and OpenAI API key as environment variables. You can do this by creating a .env file in the project root directory and adding the following:

```
# .env
TELEGRAM_BOT_TOKEN=<your-telegram-bot-api-key>
OPENAI_API_KEY=<your-openai-api-key>
# Allowed users should be separated by comma.
# Example: "[1234,3221]"
# Find your ID is possible via the Telegram bot @myidbot
ALLOWED_USER_IDS = "[<list-of-allowed-users>]"
```

Once you have set up your environment variables, run the following command to start the bot:

```
npm run start
```

or

```
yarn start
```

# Features

TODO

# Contributing

If you would like to contribute to this project, please follow these steps:

- Fork the repository
- Create a new branch (git checkout -b feature/your-feature)
- Make your changes and commit them (git commit -am 'Add your feature')
- Push to the branch (git push origin feature/your-feature)
- Create a new pull request

# License

This project is licensed under the MIT License - see the LICENSE.md file for details.

# Acknowledgments

- The Telegram API documentation
- The OpenAI API documentation
- The Node.js and TypeScript communities
