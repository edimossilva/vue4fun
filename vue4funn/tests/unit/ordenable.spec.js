import { shallowMount } from '@vue/test-utils'
import Ordenable from '@/components/shared/ordenable.vue'

const growerList = [
    { name: 'pedro' },
    { name: 'ana'  },
    { name: 'maria'}
  ]
  const propertyTitle = 'Nome';

describe('Ordenable.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Ordenable, {
      propsData: {
        list: growerList,
        propertyTitle: propertyTitle,
        propertyName: 'name'
       }
    })
    expect(wrapper.text()).toMatch(propertyTitle)
  })
})
