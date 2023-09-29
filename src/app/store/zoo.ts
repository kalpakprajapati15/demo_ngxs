import { State, Action, StateContext } from "@ngxs/store";
import { Injectable } from '@angular/core';
export class FeedAnimals {
    static readonly type = '[Zoo] FeedAnimals';
    constructor(public feedAmount: number) {

    }
}

export interface ZooStateModel {
    feed: boolean,
    feedAmount: number
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false,
        feedAmount: 0
    }
})
@Injectable()
export class ZooState {
    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedAnimals) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            feed: !state.feed,
            feedAmount: action.feedAmount
        })
    }
}