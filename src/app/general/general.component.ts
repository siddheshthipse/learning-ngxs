import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddUsers, DeleteUsers, GetUsers, UpdateUsers } from '../actions/app.action';
import { AppState } from '../states/app.state';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  //Here I have used Reactive Form, you can also use Template Driven Form instead
  userForm: FormGroup;
  userInfo: [];
  @Select(AppState.selectStateData) userInfo$: Observable<any>;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: ['']
    })

    this.store.dispatch(new GetUsers());

    this.userInfo$.subscribe((returnData) => {
      this.userInfo = returnData;
    })
  }

  addUser() {
    console.log(this.userForm.value)
    this.store.dispatch(new AddUsers(this.userForm.value));
    this.userForm.reset();
  }

  updateUser(id, i) {

    const newData = {
      id: id,
      name: "Siddhesh Thipse",
      username: "iamsid2399",
      email: 'siddheshthipse@gmail.com',
      phone: '02138-280044',
      website: 'samplewebsite.com'
    }

    this.store.dispatch(new UpdateUsers(newData, id, i));
  }

  deleteUser(i) {
    console.log("The i value is:-", i);
    this.store.dispatch(new DeleteUsers(i));
  }
}
