const icon = {
  width: 50,
  height: 50
}

export default {
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  iconApprove: {
    ...icon,
    color: 'green'
  },
  iconReject: {
    ...icon,
    color: 'red'
  }
}
