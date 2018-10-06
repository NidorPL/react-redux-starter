import { getActionType } from "../helpers";
import {GET, START} from "../constants";
import { evolve, T, F, always } from "ramda";

export const defaultState = {
  loading: false,
  err: null
};

export function reducer(state = defaultState, action) {

    const { type } = action;

    switch (type) {
    case getActionType(GET, START):

        return evolve({ loading: T }, state);

    default:
      return state;
  }
}
