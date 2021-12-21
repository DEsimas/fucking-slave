import { Client, Message } from "discord.js";
import { Server } from "../database/Servers";
import { User } from "../database/Users";
import { DAO } from "../database/DAO";
import { Log } from "../Log";
import { config } from "../config";
import { CommandHandler } from "./CommandHandler";

export class MessageHandler {
    private readonly client: Client;
    private readonly message: Message;

    constructor(client: Client, message: Message) {
        this.client = client;
        this.message = message;
    }
    
    public async handle(): Promise<void> {
        if(this.message.guild === null) {
            Log.warning("MessageHandler.ts", "Guld in message is null", { message: this.message });
            return;
        }
        const user = await DAO.Users.fetchByUserId(this.message.author.id);
        const server = await DAO.Servers.fetchByServerId(this.message.guild.id);

        if(server === null) {
            Log.warning("MessageHandler.ts", "Couldn't save server to the database");
            return;
        }

        if(server.doEmojis && user.emojiID) {
            if(this.message.author.id !== this.client.user?.id) {
                this.message.react(user.emojiID);
            } else {
                const avatar = await DAO.Avatars.getActive();
                if(avatar) {
                    this.message.react(avatar.emojiID);
                }
            }
        }
        const commandHandler = new CommandHandler(this.client, this.message, user, server);
        commandHandler.handle();
    }
};