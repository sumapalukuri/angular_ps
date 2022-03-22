export interface UpdateCounter {
    isTimerPaused: boolean;
    timeStamp: Date;
    pausedCount: number;
    resumedCount: number;
}