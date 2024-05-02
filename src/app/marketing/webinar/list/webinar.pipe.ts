import { Pipe, PipeTransform } from "@angular/core";
import { BroadCastSettings } from "../webinar.model";
import { getDate } from "../../../app.functions";

@Pipe({
    name: "webinarDate"
})
export class WebinarDatePipe implements PipeTransform {
    transform(value: BroadCastSettings) {
        // return getDate(value.time)
    }
}