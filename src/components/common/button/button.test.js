import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './button.component'

configure({ adapter: new Adapter() })

describe('<Button />', function() {
  it('should execute callback on button click', function() {
    const clickAction = jest.fn()
    const wrapper = shallow(
      <Button onButtonClick={clickAction} label='test'/>
    )

    wrapper.find('button').at(0).simulate('click')
    expect(clickAction.mock.calls.length).toBe(1)
  })
})
