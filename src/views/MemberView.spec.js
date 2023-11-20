import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MemberView from './MemberView.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MemberView.vue', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        members: [],
      },
      getters: {
        averageAge: jest.fn(),
      },
      actions: {
        fetchMembers: jest.fn(),
      },
    });

    wrapper = mount(MemberView, {
      localVue,
      store,
    });
  });

  it('Renders `Load Members` button initially', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('Renders `Please wait..." when button is clicked', async () => {
	wrapper.setData({ buttonClicked: true });
	await wrapper.vm.$nextTick();
	expect(wrapper.find('p').text()).toBe('Please wait...');
	});

});
