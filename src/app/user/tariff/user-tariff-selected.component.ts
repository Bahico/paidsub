import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { UserModel } from "../user.model";
import { TariffService } from "../../tariff/tariff.service";

@Component({
    templateUrl: 'user-tariff-selected.component.html',
    styleUrl: 'tariff.scss',
    standalone: true,
    imports: [RouterModule]
})
export class UserTariffSelectedComponent {
    tariffId: number;
    users: UserModel[];

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly tariffService: TariffService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.tariffId = params['id']; // Access the 'id' parameter from the URL
          this.loadUsers();
        });
    }

    loadUsers() {
        this.tariffService
        .usersSelected(this.tariffId)
        .subscribe(data => (this.users = data));
    }

    save() {
        this.router.navigate(['tariffs/view/' + this.tariffId])
    }
}