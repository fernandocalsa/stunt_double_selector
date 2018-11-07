export default {
  state: [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      firstName: "fer",
      lastName: "calvo"
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      firstName: "FER",
      lastName: "CALVO"
    }
  ],
  reducers: {
    updateApprovedStatus(state, { workerId, approved }) {
      const workerIndex = state.findIndex(({ id }) => id === workerId)
      if (workerIndex < 0) {
        return state
      }
      const all = [...state]
      all[workerIndex] = {
        ...state[workerIndex],
        approved
      }
      return all
    }
  },
  effects: (dispatch) => ({
    approve(workerId) {
      dispatch.workers.updateApprovedStatus({ workerId, approved: true})
    },
    reject(workerId) {
      dispatch.workers.updateApprovedStatus({ workerId, approved: false})
    }
  })
}
