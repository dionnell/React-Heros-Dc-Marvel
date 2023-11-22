import { useLocation, useNavigate } from 'react-router-dom'
import queryString  from 'query-string'

import { useForm } from '../../Hook/useForm'
import { HeroCardSearch } from '../components'
import { getHeroesByName } from '../helpers'

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q =''} = queryString.parse( location.search )
  const heroes = getHeroesByName(q)
  
  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0 

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) =>{
    event.preventDefault()
    //if ( searchText.trim().length <= 1 ) return
  
    navigate(`?q=${searchText}`)
  
  }

  return (
    <>
      <div className="p-3 ps-5">
        <h1>Search</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            Serching
            <hr />
            <form aria-label='form' onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off" 
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-2">
                Search
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
            <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }} >
              Search a hero
            </div>
            <div aria-label="alert-danger" className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
              hero <b> {q} </b> No existing
            </div>

            {
              heroes.map( hero => (
                <HeroCardSearch key={hero.id} {...hero} />
              ) )
            }


          </div>
        </div>
      </div>
    </>
  )
}
