## dev sketch
plan
  func reqs
  non func reqs
  ui sketch
  state sketch
  action sketch
pull stub
write actions
write reducers
write ui
hook up back-end
run req tests


## func reqs

fetch member info
  - loading
  - list of member info, filterable by 'name'
    - name
    - email
    - member status
    - address (show on click, hide if other list item clicked)
    - extras:
      - expanding row animation
      - gravatar (via email)
      - location info


## non func reqs

style ref at excercise-design.png
endpoint at  http://jsonplaceholder.typicode.com/users
icons from https://fortawesome.github.io/Font-Awesome/icons/
es 6/7
any css solution
react
extras:
  - tests
  - redux

## ui sketch

header
loading switch
  loading
  main  
    top   
      filter box
      num of people  
    list
      row
        main
          gravatar
          name box
            name
            email
          member status
          arrow icon
        expanded
          address

## state sketch

session: {
  loading:
  expandedPerson:
  filterText:
}
people: {
  $id: {
    id,
    name,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: {
        lat
        lng
      }
    }
  }
}

## action sketch

populate people: {
  ...fetched data
}
setLoadingTrue
setLoadingFalse
expand person: {
  id
}
