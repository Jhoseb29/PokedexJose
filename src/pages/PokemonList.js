import { useEffect, useState } from "react"
import PokeItem from "../components/PokeItem"
import getAllPokemons from "../services/getAllPokemons"

const PokemonList = () => {

  const [pokeList, setPokeList] = useState([])
  const [arrOffsetPos, setArrOffsetPos] = useState(0)


  useEffect(() => {
    getAllPokemons(arrOffsetPos)
      .then((res) => {
        setPokeList(res.data.results)
      })
  }, [arrOffsetPos])


  const list = pokeList.map((item) => <PokeItem key={item.url} url={item.url} />)


  return (
    <div>
      {list}
      {arrOffsetPos === 0 ? (
        <button type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
          Next 20
        </button>
      ) : (
        <>
          <button type="button" onClick={() => setArrOffsetPos(arrOffsetPos + 20)}>
            Next 20
          </button>
          <button type="button" onClick={() => setArrOffsetPos(arrOffsetPos - 20)}>
            Prev 20
          </button>
        </>
      )}
    </div>
  )
}

export default PokemonList