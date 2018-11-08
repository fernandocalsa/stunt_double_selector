import PropTypes from 'prop-types'

export default {
  worker: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onHandleWorker: PropTypes.func.isRequired
}
