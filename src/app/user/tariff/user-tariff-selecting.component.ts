import { Component } from "@angular/core";
import { UserModel } from "../user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { TariffService } from "../../tariff/tariff.service";
import { JsonPipe } from "@angular/common";

@Component({
    templateUrl: 'user-tariff-selecting.component.html',
    styleUrl: 'tariff.scss',
    standalone: true,
    imports: [JsonPipe]
})
export class UserTariffSelectingComponent {
    tariffId: number;
    users: UserModel[];
    selectingUsers: UserModel[];

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
            .usersSelect(this.tariffId)
            .subscribe(data => (this.users = data));

        this.tariffService
            .usersSelected(this.tariffId)
            .subscribe(data => (this.selectingUsers = data));
    }

    isActiveUser(user: UserModel) {
        return this.selectingUsers.some(item => (item.telegram_id === user.telegram_id));
    }

    selectUser(user: UserModel) {
        const index = this.selectingUsers.findIndex(item => (item.telegram_id === user.telegram_id));
        if (index > -1) {
            this.selectingUsers.splice(index, 1);
        } else {
            this.selectingUsers.push(user);
        }
    }

    save() {
        
        this.router.navigate(['tariffs/view/' + this.tariffId])
    }
}