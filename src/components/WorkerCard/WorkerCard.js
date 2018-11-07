import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import WorkerInfo from '../WorkerInfo'
import styles from './styles'
const WorkerCard = (props) => {
  return (
    <div>
      <WorkerInfo
        imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        firstName="Fer"
        lastName="Calvo"
      />
      <div style={styles.buttons}>
        <FaCheckCircle style={styles.iconApprove}/>
        <FaTimesCircle style={styles.iconReject} />
      </div>
    </div>
  )
}

export default WorkerCard
