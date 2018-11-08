import uniqid from 'uniqid'

const apiKey = process.env.REACT_APP_API_KEY

export default {
  state: [],
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
    },
    add(state, worker) {
      return [
        ...state,
        worker
      ]
    }
  },
  effects: (dispatch) => ({
    approve(workerId) {
      dispatch.workers.updateApprovedStatus({ workerId, approved: true})
      dispatch.notification.display('Approved')
    },
    reject(workerId) {
      dispatch.workers.updateApprovedStatus({ workerId, approved: false})
      dispatch.notification.display('Rejected')
    },
    async load() {
      const page = Math.floor(Math.random() * 100)
      const url = `https://api.themoviedb.org/3/search/person?query=a&page=${page}&api_key=${apiKey}`
      let body
      try {
        const response = await fetch(url)
        body = await response.json()
        if (body.success === false) {
          throw new Error()
        }
      } catch(e) {
        return dispatch.notification.display('Error fetching actors')
      }
      const people = body.results
        .filter(({ profile_path }) => !!profile_path)
        .slice(0, 10)
      if (!people.length) {
        return dispatch.workers.load()
      }
      people.map(actor => dispatch.workers.add({
        imageUrl: 'https://image.tmdb.org/t/p/w300' + actor.profile_path,
        name: actor.name,
        id: uniqid()
      }))
    }
  })
}
