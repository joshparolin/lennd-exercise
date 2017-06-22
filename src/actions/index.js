
export const populatePeople = (peopleData) => ({
  type: 'POPULATION_PEOPLE',
  peopleData
})

export const expandPerson = (id) => ({
  type: 'EXPAND_PERSON',
  id
})

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING',
})

export const setIsNotLoading = () => ({
  type: 'SET_IS_NOT_LOADING',
})
