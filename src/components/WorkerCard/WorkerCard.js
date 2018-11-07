import React, { Component } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import Draggable from 'react-draggable'
import WorkerInfo from '../WorkerInfo'
import styles from './styles'

class WorkerCard extends Component {
  handleStop = (e, data) => {
    if (data.lastX < -100) {
      console.log('reject')
    } else if (data.lastX > 100) {
      console.log('approve')
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
          <WorkerInfo
            imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            firstName="Fer"
            lastName="Calvo"
          />
          </div>
        </Draggable>
        <div style={styles.buttons}>
          <FaCheckCircle style={styles.iconApprove}/>
          <FaTimesCircle style={styles.iconReject} />
        </div>
      </div>
    )
  }
}

export default WorkerCard
