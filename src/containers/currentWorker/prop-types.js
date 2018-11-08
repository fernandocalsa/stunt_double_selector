import PropTypes from 'prop-types'

export default {
  currentWorker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  approve: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired
}
