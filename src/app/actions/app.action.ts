//Here we define four actions for CRUD operations respectively

//Read
export class GetUsers {
    static readonly type = '[Users] Fetch';
}

//Create
export class AddUsers {
    static readonly type = '[Users] Add';
    constructor(public payload: any) { }
}

//Update
export class UpdateUsers {
    static readonly type = '[Users] Update';
    constructor(public payload: any, public id: number, public i:number) { }
}

//Delete
export class DeleteUsers {
    static readonly type = '[Users] Delete';
    constructor(public id: number) { }
}

