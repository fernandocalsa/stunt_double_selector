import React, { Component } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import Draggable from 'react-draggable'
import WorkerInfo from '../WorkerInfo'
import styles from './styles'
import propTypes from './prop-types'

class WorkerCard extends Component {
  static propTypes = propTypes
  reject = () => this.props.onHandleWorker(false)
  approve = () => this.props.onHandleWorker(true)
  handleStop = (e, data) => {
    if (data.lastX < -100) {
      this.reject()
    } else if (data.lastX > 100) {
      this.approve()
    }
  }
  render() {
    return (
      <div style={{
        width: 500
      }}>
        <Draggable
          axis="x"
          defaultPosition={{x: 0, y: 0}}
          onStop={this.handleStop}
          position={{
            x: 0,
            y: 0
          }}
        >
          <div>
          <WorkerInfo {...this.props.worker} />
          </div>
        </Draggable>
        <div style={styles.buttons}>
          <FaCheckCircle style={styles.iconApprove} onClick={this.approve} />
          <FaTimesCircle style={styles.iconReject} onClick={this.reject} />
        </div>
      </div>
    )
  }
}

export default WorkerCard
