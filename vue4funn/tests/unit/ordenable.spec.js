import { shallowMount } from '@vue/test-utils'
import Ordenable from '@/components/shared/ordenable.vue'

const growerList = [
    { name: 'pedro' },
    { name: 'ana'  },
    { name: 'maria'}
  ]

const ascGrowerList = [
  { name: 'ana' },
  { name: 'maria' },
  { name: 'pedro' }
]

const dscGrowerList = [
  { name: 'pedro' },
  { name: 'maria' },
  { name: 'ana' }
]

const propertyTitle = 'Nome';

describe('Ordenable.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Ordenable, {
      propsData: {
        list: growerList,
        propertyTitle: propertyTitle,
        propertyName: 'name'
      }
    });
  });

  it('shows up label', () => {
    const upLabel = `${propertyTitle} - ▲`;
    expect(wrapper.text()).toMatch(upLabel)
  });


  describe('after first click', () => {

    it('shows down label', () => {
      const downLabel = `${propertyTitle} - ▼`;
      wrapper.find('th').trigger('click')

      expect(wrapper.text()).toMatch(downLabel)
    });

    it('sort asc the list', () => {
      wrapper.find('th').trigger('click')

      expect(wrapper.props('list')).toEqual(ascGrowerList)
    });

    describe('after second click', () => {
      it('sort dsc the list', () => {
        wrapper.find('th').trigger('click')
        wrapper.find('th').trigger('click')

        expect(wrapper.props('list')).toEqual(dscGrowerList)
      });
    });

    it("has the expected html structure", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
