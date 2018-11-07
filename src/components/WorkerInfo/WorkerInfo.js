import React from 'react'
import styles from './styles'
import propTypes from './prop-types'

const WorkerInfo = (props) => {
  const { imageUrl, firstName, lastName } = props
  return (
    <div style={styles.container}>
      <img
        style={styles.image}
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        />
      <span style={styles.name}>{firstName} {lastName}</span>
    </div>
  )
}

WorkerInfo.propTypes = propTypes

export default WorkerInfo
