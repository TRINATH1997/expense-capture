import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { merge } from 'rxjs';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  return function (state: S, action: A): S {
    const nextState = reducer(state, action);
    const savedState = JSON.parse(localStorage.getItem('__storage__')) || {};
    merge(nextState, savedState);
    localStorage.setItem('__storage__', nextState);
    return nextState;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storageMetaReducer]
  : [storageMetaReducer];
