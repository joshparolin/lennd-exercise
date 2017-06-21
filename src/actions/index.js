
export const populatePeople = (peopleData) => ({
  type: 'POPULATION_PEOPLE',
  peopleData
})

export const expandPerson = (id) => ({
  type: 'EXPAND_PERSON',
  id
})
