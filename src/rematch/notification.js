export default {
  state: null,
  reducers: {
    add(state, notification) {
      return notification
    }
  },
  effects: (dispatch) => ({
    display(notification) {
      dispatch.notification.add(notification)
      setTimeout(() => {
        dispatch.notification.add(null)
      }, 1000)
    }
  })
}
