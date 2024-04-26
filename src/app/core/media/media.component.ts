import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "media",
    templateUrl: 'media.component.html',
    styles: [`
        .right {
            input {
                display: none;
            }
        }
    `],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MediaComponent),
          multi: true,
        },
    ],
    standalone: true
})
export class MediaComponent implements ControlValueAccessor {
    value: number[] | null = null;
    onChange: any = () => {};
    onTouch: any = () => {};

    writeValue(value: number[]): void {
        this.value = value;
      }
    
      // Called when the form control is updated by the user
      registerOnChange(fn: any): void {
        this.onChange = fn;
      }
    
      // Called when the form control loses focus
      registerOnTouched(fn: any): void {
        this.onTouch = fn;
      }
}