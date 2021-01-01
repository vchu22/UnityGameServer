import { clearInterval } from "timers"

export default class Timer {
    executeAfter = (sec: number) : Promise<void> => {
        return new Promise((res, rej)=>{
            let interval = setInterval(()=>{
                res();
                clearInterval(interval);
            }, 1000 * sec)
        })
    }
}