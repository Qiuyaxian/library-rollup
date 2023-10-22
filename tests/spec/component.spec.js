import { shallowMount } from '@vue/test-utils'
import Main from '@/src/components/main'

describe('<Main/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Main)
    expect(wrapper.find('.library-rollup-template').text()).toEqual(
      '设个是demo组件'
    )
  })
})
