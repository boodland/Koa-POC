import { IncomingMessage, ServerResponse } from "http";

export type RunnableHandler = (req: IncomingMessage, res: ServerResponse) => void;