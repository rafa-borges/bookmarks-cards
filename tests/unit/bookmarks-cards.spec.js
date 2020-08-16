import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

import BookmarksCards from '@/components/BookmarksCards.vue'
import sample from '@/data/sample-cards.js';

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const cards = []
cards.push(...sample)

describe('BookmarksCards.vue', () => {
  it('renders cards when passed', () => {
    const wrapper = shallowMount(BookmarksCards, {
      localVue,
      propsData: { cards }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
