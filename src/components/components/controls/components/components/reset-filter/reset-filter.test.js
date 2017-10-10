import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ResetFilter from './reset-filter.component'

configure({ adapter: new Adapter() })

describe('<ResetFilter />', function() {
  it('should execute callback on button click', function() {
    const reset = jest.fn()
    const wrapper = shallow(
      <ResetFilter onReset={reset} />
    )

    wrapper.find('button').at(0).simulate('click')
    expect(reset.mock.calls.length).toBe(1)
  })
})
