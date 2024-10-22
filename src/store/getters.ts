// src/store/getters.ts
import { GetterTree } from 'vuex';
import { State } from './state';
import { Employee } from '../interfaces';

export const getters: GetterTree<State, State> = {
  getCount(state): number {
    return state.count;
  },

  getEmployees(state): Employee[] {
    return state.employees
  }
};
