import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkerCard from '../../components/WorkerCard'
import propTypes from './prop-types'

export class CurrentWorker extends Component {
  static propTypes = propTypes
  onHandleWorker = approved => {
    const { approve, reject, currentWorker } = this.props
    approved ? approve(currentWorker.id) : reject(currentWorker.id)
  }
  render() {
    const { currentWorker, load } = this.props
    if (!currentWorker) {
      return (
        <button onClick={load}>
          Load more actors
        </button>
      )
    }
    return (
      <WorkerCard worker={this.props.currentWorker} onHandleWorker={this.onHandleWorker} />
    )
  }
}

const mapState = ({ workers }) => ({
  currentWorker: workers.find(({ approved }) => approved === undefined)
})

const mapDispatch = ({ workers }) => ({
  approve: workers.approve,
  reject: workers.reject,
  load: workers.load
})

export default connect(mapState, mapDispatch)(CurrentWorker)
