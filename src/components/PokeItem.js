import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"
const PokeItem = ({ url }) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] = useState('')
    const [typesArr, setTypesArr] = useState([])
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState('')

    useEffect(() => {
        getInfoByUrl(url)
            .then((res) => {
                setPokeObj(res.data)
                setPokeImg(res.data.sprites.front_default)
                setTypesArr(res.data.types)
                setHp(res.data.stats[0].base_stat)
                setPokeId(res.data.id)
            })
    }, [url])



    return (
        <Link to={`/pokedex/${pokeId}`}>
            <div>
                <div >
                    <img src={pokeImg} alt='' />
                    <div>
                        <h1>{pokeObj.name}</h1>
                    </div>
                    <div>
                        <h3>{typesArr.map((item) => <PokeType key={item.slot} type={item.type} />)}</h3>
                        <h2>HP: {hp}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PokeItem