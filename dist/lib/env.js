import * as e from "dotenv";
import { z as t } from "zod";
e.config();var D=t.object({DISCORD_APPLICATION_ID:t.string().default(""),DISCORD_CLIENT_ID:t.string().default(""),DISCORD_CLIENT_SECRET:t.string().default(""),DISCORD_PUBLIC_KEY:t.string().default(""),DISCORD_TOKENS:t.string().default("")}).parse(process.env);export { D as default };

