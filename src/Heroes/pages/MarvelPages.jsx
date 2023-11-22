import { HeroList } from "../components"

export const MarvelPages = () => {


  return (
    <>
      <div className="p-3 ps-5 imageMarvel">
        <h1 className="titulo">Marvel Comics</h1>
        <hr />

        <HeroList publisher={'Marvel Comics'} />
      </div>
    </>
  )
}
