import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { MediaService } from "./media.service";
import { getEndpointFor } from "../endpoint";

@Component({
    selector: "media",
    templateUrl: 'media.component.html',
    styleUrl: 'media.scss',
    standalone: true
})
export class MediaComponent implements OnInit {
    @Input() messageControlName: string;
    @Input() attachmentControlName = 'attachment';
    @Input({required: true}) placeholder: string;
    imgUrl = getEndpointFor('marketing/media/');

    editForm: FormGroup;

    constructor(
      private readonly controlContainer: ControlContainer,
      private readonly mediaService: MediaService
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
        this.editForm.valueChanges.subscribe(data => console.log(data))
    }

    sendMedia(event: any) {
      const formData = new FormData();
      for (const file of event.target.files) {
        formData.append('media', file)
      }
      console.log(typeof event.target.files);
      
      this.mediaService
      .create(formData)
      .subscribe(data => {
        this.editForm
          .get(this.attachmentControlName)
          .setValue([
            ...this.editForm.get(this.attachmentControlName).value, 
            ...data
          ]);
      })
    }

    deleteMedia(image: number) {
      const images = this.editForm.get(this.attachmentControlName).value
      const index = images.indexOf(image)
      images.splice(index, 1);
      this.editForm.get(this.attachmentControlName).setValue(images);
    }
}