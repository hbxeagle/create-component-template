import SingleComponent from '../index'
import { mount } from 'avoriaz'

describe('SingleComponent', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple {{name}}', () => {
    wrapper = mount(SingleComponent)

    expect(wrapper.hasClass('md-{{name}}')).to.be.true
  })
})
