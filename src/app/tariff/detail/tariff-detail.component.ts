import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TariffService } from "../tariff.service";
import { TariffDisplayOption, TariffModel } from "../tariff.model";
import { ResourceModel } from "../../resource/resource.model";
import { ResourceService } from "../../resource/resource.service";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: 'tariff-detail.component.html',
    styleUrl: 'tariff-detail.component.scss'
})
export class TariffDetailComponent implements OnInit {
    private readonly tariffService = inject(TariffService);
    private readonly resourceService = inject(ResourceService);
    dayOpen = false;
    displayOption = false;
    urlOpen = false;
    deleteAlert = false;
    tariffId: number;
    tariff: TariffModel;
    resources: ResourceModel[];

    editForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
        description: new FormControl(''),
        price: new FormArray([
            new FormGroup({
                currency: new FormControl("RUB", ),
                amount: new FormControl(null)
            }),
            new FormGroup({
                currency: new FormControl("USD"),
                amount: new FormControl(null)
            })
        ]),
        duration: new FormControl(null),
        trial: new FormControl(null),
        display_option: new FormControl("tariff_display_options_only_for_selected_users"),
        is_recurrent: new FormControl(false),
        resources: new FormControl([])
    })

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.tariffId = params['id']; // Access the 'id' parameter from the URL
          this.loadTariff();
        });

        this.loadResources();
        this.editForm.valueChanges.subscribe(data => console.log(data))
    }

    loadTariff() {
        this.tariffService
        .detail(this.tariffId)
        .subscribe(data => {
            this.tariff = data;
            this.editForm.patchValue({
                ...data
            })
        })
    }

    loadResources() {
        this.resourceService
        .resources()
        .subscribe(data => {
            this.resources = data;
        })
    }

    changeDay() {
        this.dayOpen = !this.dayOpen;
    }

    changeUrlOpen() {
        this.urlOpen = !this.urlOpen
    }

    changeDisplayOption(option?: TariffDisplayOption) {
        this.displayOption = !this.displayOption;
        this.editForm.patchValue({
            display_option: option
        })
    }

    displayOptionNames = [
        {
            name: "По ссылке",
            key: TariffDisplayOption.tariff_display_options_only_for_url_access
        },
        {
            name: "Некоторым",
            key: TariffDisplayOption.tariff_display_options_only_for_selected_users
        },
        {
            name: "Никому",
            key: TariffDisplayOption.tariff_display_option_not_prolong
        },
        {
            name: "Подписчикам",
            key: TariffDisplayOption.tariff_display_option_for_subscribers
        },
        {
            name: "Всем",
            key: TariffDisplayOption.tariff_display_option_for_all
        }
    ];

    setResource(id: number) {
        const index = this.editForm.get('resources').value.indexOf(id);
        
        if (index > -1) {
            this.editForm.patchValue({
                resources: [...this.editForm.get('resources').value.splice(index+1, 1)]
            })
        } else {
            this.editForm.patchValue({
                resources: [...this.editForm.get('resources').value, id]
            })
        }
    }

    save() {
        this.tariffService
        .update(this.editForm.getRawValue(), this.tariffId)
        .subscribe(data => {
            this.router.navigate(['tariffs/'])
        })
    }

    changeDeleteAlert() {
        this.deleteAlert = !this.deleteAlert
    }

    deleteTariff() {
        this.tariffService
        .delete(this.tariffId)
        .subscribe(data => {
            this.router.navigate(['tariffs/'])
        })
    }
}