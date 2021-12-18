import { config } from './config';
import { config as dotenv } from 'dotenv';
import { Client, Intents } from 'discord.js';
import { DAO } from './database/DAO';
import { Log } from './Log';

export class Bot {
    private readonly DAO: DAO;
    private readonly client: Client;
    private readonly intents: number[];
    private readonly config: typeof config;

    constructor() {
        dotenv();

        this.DAO = new DAO();
        this.config = config;

        this.intents = [
            Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.DIRECT_MESSAGES
        ];

        this.client = new Client({ intents: this.intents});
    }

    public connectDB(uri?: string): Promise<void> {
        return this.DAO.connect(uri || process.env.MONGO || "");
    }

    public login(token?: string): void {
        this.client.login(token || process.env.TOKEN).then(token => {
            Log.info(`Logged in with token: ${token}`);
        }).catch(error => {
            Log.error(`Failed to log in\n${error}`);
        });

        this.client.on(this.config.events.ready, async () => {console.log("ready")});
        this.client.on(this.config.events.message, () => {console.log('message')});
        this.client.on(this.config.events.guildCreate, () => {console.log('new guild')});
        this.client.on(this.config.events.guildDelete, () => {console.log('guild deleted')});
    }
};