import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"



export const Hero = () => {

  const { id } = useParams()

  const hero = useMemo( () => getHeroById(id),[id] ) 

  const navigate = useNavigate()

  const onReturn = () => {
    navigate(-1)
  }

  if ( !hero ){
    return <Navigate to="/marvel" />
  }

  return (
    <div className="container  ps-5">
    <div className="row justify-content-around mt-5">
      <div className="col-4">
        <img 
          src={ `/${ id }.jpg` } 
          alt={hero.superhero}
          className="img-thumbnail animate__bounceIn" 
        />
      </div>
      <div className="col-8 " >
        <h3 className="">{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Alter ego: </b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b> Publisher: </b> {hero.publisher} </li>
          <li className="list-group-item"> <b> First appearance: </b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3" > Characters </h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-info"
          onClick={ onReturn }
        >
          Back
        </button>
      </div>


    </div>
    </div>
  )
}
