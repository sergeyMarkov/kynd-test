import { mount, createLocalVue } from '@vue/test-utils'
import NavigationMenu from './NavigationMenu.vue'
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

const routes = [
  { path: '/', component: { template: '<div>Home</div>' } },
  { path: '/members', component: { template: '<div>Members</div>' } },
  { path: '/about', component: { template: '<div>About</div>' } },
];

const router = new VueRouter({
  routes,
});

describe('NavigationMenu.vue', () => {
  // test('setup correctly', () => {
  //   expect(true).toBe(true);
  // });

  it('renders the nav menu properly', () => {
    const wrapper = mount(NavigationMenu, { localVue, router });
    const links = wrapper.findAll('nav a');
    expect(links.at(0).text()).toBe('Home');
    expect(links.at(0).props('to')).toBe('/');
    expect(links.at(1).text()).toBe('Members');
    expect(links.at(1).props('to')).toBe('/members');
    expect(links.at(2).text()).toBe('About');
    expect(links.at(2).props('to')).toBe('/about');
  })

  
})