import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { WebinarService } from "../../webinar.service";
import { getEndpointFor } from "../../../../core/endpoint";

@Component({
    selector: 'webinar-content-create',
    templateUrl: 'webinar-content-create.component.html',
    styleUrl: 'upload-video.scss'
})
export class WebinarContentCreateComponent implements OnInit {
    editForm: FormGroup;
    file: File;
    videoUrl: string;
    fileSize: number;

    constructor(
        private readonly controlContainer: ControlContainer,
        private readonly webinarService: WebinarService
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
        this.loadImage()
    }

    loadImage() {
        const videoId = this.editForm.get('video_id').value;
        if (videoId) {
            this.videoUrl = getEndpointFor('marketing/media/') + videoId;
        }
    }

    videoSend(event: any) {
        this.file = event.target.files[0];
        this.videoUrl = URL.createObjectURL(this.file);
        this.fileSize = Math.floor(this.file.size / (1024 ** 2));

        const formData = new FormData();
        formData.append('video', this.file);
        this.webinarService
        .sendVideo(formData)
        .subscribe(data => {
            this.editForm.patchValue({
                video_id: data.id
            });
        })
    }

    clearVideo() {
        this.editForm.patchValue({
            video_id: null
        });
        this.file = undefined;
        this.videoUrl = undefined;
        this.fileSize = undefined;
    }
}