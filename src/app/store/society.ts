import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Injectable } from '@angular/core';
export class AddHouse {
    static readonly type = '[Society] AddHouse';
    constructor(public house: House) {

    }
}

export interface SocietyStateModel {
    houses: Array<House>
}

export interface House {
    owner: string,
    number: number
}

@State<SocietyStateModel>({
    name: 'society',
    defaults: {
        houses: []
    }
})
@Injectable()
export class SocietyState {
    @Selector()
    static houses(state: SocietyStateModel) {
        return state.houses;
    }

    @Action(AddHouse)
    addHouse(ctx: StateContext<SocietyStateModel>, action: AddHouse) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            houses: [...state.houses, { number: action.house.number, owner: action.house.owner }]
        })
    }
}
