import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, tap } from "rxjs";

export class AddUser {
    static readonly type = '[Products] AddUser'
    constructor(public user: UserModel) {

    }
}

export class FetchUser {
    static readonly type = '[Products] FetchUser'
    constructor(public page: number) {

    }
}

export interface UserModel {
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

@State<UserModel[]>({
    name: 'products',
    defaults: []
})
@Injectable()
export class UserState {

    constructor(public httpClient: HttpClient) {

    }

    @Action(AddUser)
    addProduct(ctx: StateContext<UserModel[]>, action: AddUser) {
        const state = ctx.getState()
        ctx.setState([
            ...state,
            {
                avatar: '',
                email: action.user.email,
                first_name: action.user.first_name,
                id: action.user.id,
                last_name: action.user.last_name,
            }
        ])
    }

    @Action(FetchUser, {cancelUncompleted: true})
    fetchProduct(ctx: StateContext<UserModel[]>, action: FetchUser) {
        return this.httpClient.get('https://reqres.in/api/users', { params: { 'page': action.page } },).pipe(delay(2000), tap((response: any) => {
            ctx.setState([
                ...response.data
            ]);
        }));
    }
}