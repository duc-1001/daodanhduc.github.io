import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { fetchLoginUser } from "../../redux/authSlice"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMess, setErrMess] = useState('')
    const [hidden, setHidden] = useState(false)
    const loading = useSelector(state => state?.auth?.loading)
    const user = useSelector(state => state?.auth?.user)

    useEffect(() => {
        if (user?._id) {
            navigate('/')
        }
    }, [user])

    const checkEmail = (email) => {
        if (!email) {
            setErrMess('Cannot be left blank')
            return false
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(email)) {
            setErrMess('')
        }
        else {
            setErrMess('Email is not allowed')
        }
        return re.test(email)
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if (checkEmail(email)) {
            await dispatch(fetchLoginUser({ email: email, password: password }))
        }
    }

    console.log(loading);

    return (
        <div className="h-screen w-screen flex flex-col items-center ">
            <div className="mt-20">
                <div className='m-auto'>
                    <img className="h-[80px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="logo" />
                </div>
                <div className=" bg-background shadow border rounded-md w-[400px] p-6">
                    <div className="flex">
                        <div className="m-auto font-bold text-xl">
                            LOGIN
                        </div>
                    </div>
                    <form onSubmit={handleLogin} className="w-full grid  mt-3">
                        <div className="w-full">
                            <div className="w-full">
                                <label className="block">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value.trim())} className="w-full p-2 border" type="email" placeholder="email"></input>
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <div className="w-full flex">
                                <div className="w-full">
                                    <label className="block">Password</label>
                                    <div className="w-full bg-white flex items-center border">
                                        <input value={password} onChange={(e) => setPassword(e.target.value.trim())} className="w-full p-2 mr-2" type={!hidden ? "password" : 'text'} placeholder="password"></input>
                                        {password && <FontAwesomeIcon onClick={() => setHidden(!hidden)} className="mr-3 cursor-pointer" icon={!hidden ? faEye : faEyeSlash} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-1 text-[12px] h-2 text-red-500 font-medium">
                            {errMess}
                        </div>
                        <div className="w-full mt-3 flex items-center justify-between">
                            <Link to={'/regsiter'} className="text-[13px] hover:underline text-blue-600">
                                Create new acount?
                            </Link>
                            <Link to={'/fogot_password'} className="text-[13px] hover:underline text-blue-600">
                                Fogot password?
                            </Link>
                        </div>
                        <div className="flex mt-7">
                            <button className="w-[100px] m-auto text-white rounded py-2 bg-green-600">
                                {loading ? <FontAwesomeIcon className=" animate-spin" icon={faSpinner} /> : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login