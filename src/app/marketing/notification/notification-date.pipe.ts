import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'date'
})
export class DatePipe implements PipeTransform {

    transform(hours: number) {
        const day = Math.floor(hours / 24);
        const hoursView = hours - (Math.floor(hours / 24) * 24);

        var returnValue = "За ";
        
        day !== 0 && (returnValue += day.toString() + " дня и ");
        
        returnValue += hoursView.toString() + " часа до старта";
        
        return returnValue;
    }
}