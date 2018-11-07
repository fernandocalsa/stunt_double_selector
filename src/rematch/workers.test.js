import workers from './workers'

describe('Workers model', () => {
  it('updateApprovedStatus updates a worker', () => {
    const prevState = [
      {
        id: 1,
        imageUrl: "charlie.jpg",
        firstName: "Charlie",
        lastName: "Simpson"
      },
      {
        id: 2,
        imageUrl: "craig.jpg",
        firstName: "Craig",
        lastName: "Lindsay"
      }
    ]
    const newState = workers.reducers.updateApprovedStatus(prevState, {
      workerId: 1,
      approved: false
    })
    expect(newState[0].approved).toBe(false)
  })
})