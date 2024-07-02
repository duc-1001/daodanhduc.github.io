import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { userRegsiter } from "../../service/auth";
import { useNavigate } from "react-router-dom";

const Regsiter = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfrimPass, setComfrimPass] = useState('');
    const [hidden, setHidden] = useState(false);
    const [hiddenCom, setHiddenCom] = useState(false);

    const [messUserName, setMessUserName] = useState('');
    const [messEmail, setMessEmail] = useState('');
    const [messPass, setMessPass] = useState('');
    const [messComfrimPass, setMessComfrimPass] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePass = (e) => {
        setPassword(e.target.value.trim());
    };

    const handleComfrimPass = (e) => {
        setComfrimPass(e.target.value.trim());
    };

    const checkEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            setMessEmail('');
        } else {
            setMessEmail('Email không hợp lệ');
        }
        return re.test(email);
    };

    const checkPassword = (password) => {
        if (password.length < 6) {
            setMessPass('Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        }
        setMessPass('');
        return true;
    };

    const checkUserName = (username) => {
        if (!username.trim()) {
            setMessUserName('Không được để trống');
            return false;
        }
        setMessUserName('');
        return true;
    };

    const checkComfirmPass = (password, comfrimPass) => {
        if (password !== comfrimPass) {
            setMessComfrimPass('Mật khẩu xác nhận không đúng');
            return false;
        }
        setMessComfrimPass('');
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (checkUserName(username) && checkEmail(email) && checkPassword(password) && checkComfirmPass(password, comfrimPass)) {
                setLoading(true);
                let res = await userRegsiter(username, email, password);
                setLoading(false);
                navigate('/login');
            }
        } catch (error) {
            if (error) {
                setMessEmail(error?.response?.data);
                setLoading(false);
            }
        }
    };

    return (
        <div className="h-screen w-screen flex items-center flex-col bg-background">
            <div>
                <img className="h-[80px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="logo"/>
            </div>
            <div className="p-6 border bg-white shadow rounded-md w-[400px]">
                <div className="flex justify-center">
                    <div className="font-bold text-xl">
                        ĐĂNG KÝ
                    </div>
                </div>
                <form onSubmit={onSubmit} className="w-full grid gap-5 mt-3">
                    <div className="w-full">
                        <div className="">
                            Username
                        </div>
                        <input value={username} onChange={handleUserName} className="w-full p-2 border" placeholder="Tên người dùng" />
                        <div className="text-[12px] h-2 mt-1 text-red-500 font-medium">
                            {messUserName}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="">
                            Email
                        </div>
                        <input value={email} onChange={handleEmail} className="w-full p-2 border" type="email" placeholder="Email" />
                        <div className="text-[12px] h-2 mt-1 text-red-500 font-medium">
                            {messEmail}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="">
                            Mật khẩu
                        </div>
                        <div className="w-full  flex bg-white gap-3 items-center border">
                            <input onChange={handlePass} className="w-full p-2 " value={password} type={hidden ? 'text' : "password"} placeholder="Mật khẩu" />
                            {password && <FontAwesomeIcon onClick={() => setHidden(!hidden)} className="cursor-pointer mr-3" icon={!hidden ? faEye : faEyeSlash} title="Hiển thị mật khẩu" />}
                        </div>
                        <div className="text-[12px] h-2 mt-1 text-red-500 font-medium">
                            {messPass}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="">
                            Xác nhận mật khẩu
                        </div>
                        <div className="w-full flex bg-white gap-3 items-center border">
                            <input onChange={handleComfrimPass} className="w-full p-2 " value={comfrimPass} type={!hiddenCom ? "password" : 'text'} placeholder="Xác nhận mật khẩu" />
                            {comfrimPass && <FontAwesomeIcon onClick={() => setHiddenCom(!hiddenCom)} className="cursor-pointer mr-3" icon={!hiddenCom ? faEye : faEyeSlash} title="Hiển thị mật khẩu" />}
                        </div>
                        <div className="text-[12px] h-2 mt-1 text-red-500 font-medium">
                            {messComfrimPass}
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <button type="submit" className="w-[100px] py-2  m-auto bg-green-600 rounded text-white">
                            {loading ? <FontAwesomeIcon className=" animate-spin" icon={faSpinner} /> : "Đăng ký"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Regsiter;
