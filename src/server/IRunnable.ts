import { RunnableHandler } from './ServerTypes';

export interface IRunnable {
    getRunnerHandler(): RunnableHandler;
}