import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios({
            method: 'post',
            url: "/login",
            data: {
                email: Username,
                password: Password
            }
        }).then(async (res) => {
            if(res.data.message === "login success") {
                setUser(res.data.user);
                toast.success(`Welcome, ${res.data.user.name}`);
                navigate("/home");
            }
            else if (res.data.error === "Wrong credentials") {
                toast.error("Invalid credentials")
            }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            setLoading(false);
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="Username"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                id="Password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={Loading}
                        >
                            {Loading ? <Loader color='white'/> : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
