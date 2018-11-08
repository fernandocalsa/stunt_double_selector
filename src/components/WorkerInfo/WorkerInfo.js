import React from 'react'
import styles from './styles'
import propTypes from './prop-types'

const WorkerInfo = (props) => {
  const { imageUrl, name } = props
  return (
    <div style={styles.container}>
      <img
        draggable="false"
        style={styles.image}
        src={imageUrl}
        alt={name}
        />
      <span style={styles.name}>{name}</span>
    </div>
  )
}

WorkerInfo.propTypes = propTypes

export default WorkerInfo
