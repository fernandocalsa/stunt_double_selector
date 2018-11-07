import PropTypes from 'prop-types'

export default {
  worker: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  onHandleWorker: PropTypes.func.isRequired
}
