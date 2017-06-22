
export const populatePeople = (peopleData) => ({
  type: 'POPULATION_PEOPLE',
  peopleData
})

export const expandPerson = (id) => ({
  type: 'EXPAND_PERSON',
  id
})

export const setLoadingTrue = () => ({
  type: 'SET_LOADING_TRUE',
})

export const setLoadingFalse = () => ({
  type: 'SET_LOADING_FALSE',
})
