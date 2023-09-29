import { Component, OnInit } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MessageService } from "primeng/api";
import { AddRandomUser, AddUser, FetchUser, UserModel, UserState } from './store/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs_work';
  // animals$: Observable<ZooStateModel>;
  // @Select(SocietyState.houses)
  // societyHouses$: Observable<House[]>
  @Select(UserState)
  products$: Observable<UserModel[]>
  constructor(private store: Store, private actions$: Actions, private messageService: MessageService) {

  }
  ngOnInit(): void {

  }

  addProduct() {
    this.store.dispatch(new AddUser({ avatar: '', id: 1, email: 'kalpak.prajapati@bacancy.com', first_name: 'Kalpak', last_name: 'Prajapati' })).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'succcess', detail: 'User added successfully' })
    });
  }

  fetchProducts() {
    this.store.dispatch(new FetchUser(2)).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'succcess', detail: 'Users fetched successfully' })
    });
  }

  fetchProductsFast() {
    this.store.dispatch(new FetchUser(1)).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'succcess', detail: 'Users fetched successfully' })
    });
  }

  addRandom() {
    this.store.dispatch(new AddRandomUser()).subscribe(val => {
      this.messageService.add({ severity: 'success', summary: 'succcess', detail: 'Random user added successfully' })
    })
  }
}
