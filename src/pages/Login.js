import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerOnClick = () => {
        dispatch({
            type: '@user/login',
            payload: userName
        })
        navigate('/pokedex')

    }

    return (
        <div >
            <div >
                <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Pokemon User" />
                <button onClick={handlerOnClick} type="button">Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default Login