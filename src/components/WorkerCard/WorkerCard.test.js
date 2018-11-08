import React from 'react'
import { shallow } from 'enzyme'
import WorkerCard from './WorkerCard'

describe('WorkerCard', () => {
  it('Should render the worker info and buttons', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    expect(output).toMatchSnapshot()
  })

  it('card moves more than 100px to the right then it approves the worker', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    output.instance().handleStop(null, {lastX: 101})
    expect(props.onHandleWorker).toHaveBeenCalledWith(true)
  })

  it('card moves more than 100px to the left then it rejects the worker', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    output.instance().handleStop(null, {lastX: -101})
    expect(props.onHandleWorker).toHaveBeenCalledWith(false)
  })

  it('card moves less than 100px then onHandleWorker is not called', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    output.instance().handleStop(null, {lastX: 99})
    expect(props.onHandleWorker).not.toHaveBeenCalled()
  })

  it('clicks on approve icon approves the worker', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    output.find('#approveBtn').simulate('click')
    expect(props.onHandleWorker).toHaveBeenCalledWith(true)
  })

  it('clicks on reject icon rejects the worker', () => {
    const props = {
      worker: {
        imageUrl: "test.jpg",
        name: "Charlie"
      },
      onHandleWorker: jest.fn()
    }
    const output = shallow(<WorkerCard {...props} />)
    output.find('#rejectBtn').simulate('click')
    expect(props.onHandleWorker).toHaveBeenCalledWith(false)
  })
})