import React from 'react'
import { shallow } from 'enzyme'
import WorkerInfo from './WorkerInfo'

describe('WorkerInfo', () => {
  it('Should render the image and the name', () => {
    const output = shallow(<WorkerInfo imageUrl="test.jpg" firstName="Charlie" lastName="Simpson" />)
    expect(output).toMatchSnapshot()
  })
})