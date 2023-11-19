import { Link } from "react-router-dom"
import ReactFlipCard from "reactjs-flip-card";

const CharactersByHero = ({alter_ego, characters}) => {

    if (alter_ego === characters) return (<></>);

    return <p>{characters}</p>
}


export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,
}) => {

    const HeroImgUrl = `/assets/heroes/${ id }.jpg`

    const styles = {
        img:{
            width: 200, height: 300,borderRadius: 20
        },
        container: {padding: 20},        
        textAlignCenter: {textAlign: "center", padding: 10 },
        cardFront: { borderRadius: 20, width: 200, height: 300,},
        cardBack: ( publisher=='Marvel Comics' ) ? 
            {borderRadius: 20, width: 200, height: 300,color: 'white',
            background: 'linear-gradient(42deg, rgba(255,14,0,1) 0%, rgba(255,63,0,1) 35%, rgba(255,41,0,1) 59%, rgba(255,0,0,1) 100%)'} : 
            {borderRadius: 20, width: 200, height: 300,color: 'white',
            background: 'linear-gradient(42deg, rgba(0,0,0,1) 0%, rgba(167,167,167,1) 35%, rgba(142,142,142,1) 59%, rgba(0,0,0,1) 100%'},
        
    }

  return (
    <div className="col">
        <div style={{width: 200, height: 300}} className="mt-2 mb-2">
            <ReactFlipCard
                containerCss={'resizeBasedOnParent'}
                direction={"diagonal"}
                frontStyle={styles.cardFront}
                backStyle={styles.cardBack}
                frontComponent={ <img src={HeroImgUrl} alt={superhero} style={styles.img} className="card-img animate__bounceIn" /> }
                backComponent={<div className="card-body" >
                                    <h5 style={styles.textAlignCenter} className="card-title"> {superhero} </h5>
                                    <p className="card-text ms-2 mt-2">Name: {alter_ego}</p>
                                    <CharactersByHero characters={characters} alter_ego={alter_ego} />
                                    <p className="card-text ms-2 mt-2 ">
                                        <small className="" >{first_appearance} </small>
                                    </p>
                                    <Link className="text-reset card-text ms-2 mt-2" to={`/hero/${ id }`} >
                                        Mas..
                                    </Link>
                                </div>
                            }
            />
        </div>

        {/*<div className="card">

              
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={HeroImgUrl} alt={superhero} className="card-img animate__bounceIn" />
                </div>

                <div className="col-8">

                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text">{alter_ego}</p>
                        <CharactersByHero characters={characters} alter_ego={alter_ego} />
                        
                        <p className="card-text">
                            <small className="text-muted">{first_appearance} </small>
                        </p>
                        <Link to={`/hero/${ id }`}>
                            Mas..
                        </Link>

                    </div>

                </div>
            </div>        
            
        </div> */}

    </div>
  )
}
