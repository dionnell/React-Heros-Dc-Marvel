import { HeroList } from "../components"

export const DcPages = () => {
  return (
    <>
      <div className="p-3 ps-5 imageDC">
        <h1 className="titulo">Dc Comics</h1>
        <hr />

        <HeroList publisher={'DC Comics'}/>
      </div>
    </>
  )
}
