import { Pipe, PipeTransform } from "@angular/core"

@Pipe ({
    name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform{

    transform(value: any): number {
        
    let today: Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var timeCounter = dateDifferenceSeconds/secondsInDay; 

    if(timeCounter >= 1 && value < todayWithNoTime){
        return timeCounter;
    } else {
        return 0;
    }
    }
}
