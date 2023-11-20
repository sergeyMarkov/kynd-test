import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import MembersService, { Member } from '@/services/members'
import { StoreState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
  state: {
    title: 'Front End Developer Test',
    members: []
  },
  getters: {
    averageAge: (state) => {
      if (state.members.length === 0) {
        return 0; 
      }
      const totalAge = state.members.reduce((sum, member) => sum + member.age, 0);
      return Math.round(totalAge / state.members.length);
    }
  },
  mutations: {
    setMembers(state, members: Member[]) {
      state.members = members;
    }
  },
  actions: {
    async fetchMembers(context: ActionContext<StoreState, StoreState>) {
      try {
        const members = await MembersService.loadMembers();
        context.commit('setMembers', members);
      } catch (error) {
        console.error('Error fetching members: ', error);
        throw error;
      }
    }
  },
  modules: {
  }
})
