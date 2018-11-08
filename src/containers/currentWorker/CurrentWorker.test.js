import React from 'react'
import { shallow } from 'enzyme'
import { CurrentWorker } from './CurrentWorker'

describe('CurrentWorker', () => {
  it('When there is a current worker it displays the worker card', () => {
    const props = {
      currentWorker: {
        id: 'testId',
        name: 'Test',
        imageUrl: 'test.jpg'
      },
      approve: jest.fn(),
      reject: jest.fn(),
      load: jest.fn()
    }
    const output = shallow(<CurrentWorker {...props} />)
    expect(output).toMatchSnapshot()
  })
  it('When there is no a current worker it displays a button', () => {
    const props = {
      approve: jest.fn(),
      reject: jest.fn(),
      load: jest.fn()
    }
    const output = shallow(<CurrentWorker {...props} />)
    expect(output).toMatchSnapshot()
  })
})