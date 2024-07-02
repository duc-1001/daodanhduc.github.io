import OptionUsers from "../../item/OptionUsers"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css'; // optional
import Messenger from "../../item/Messenger";
import Notification from "../../item/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons";

const Options = (props) => {
    const { children, user } = props
    return (
        <div className="flex gap-4 items-center">
            <Tippy content='tạo'>
                <div className="w-10 bg-gray-300 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden border">
                    <FontAwesomeIcon className='text-lg' icon={faPlus} />
                </div>
            </Tippy>
            <Messenger>
                <Tippy content='tin nhắn'>
                    <div className="w-10 bg-gray-300 grid place-content-center cursor-pointer h-10 rounded-full overflow-hidden border">
                        <FontAwesomeIcon className='text-xl' icon={faFacebookMessenger} />
                    </div>
                </Tippy>
            </Messenger>
            <Notification>
                <Tippy content='thông báo'>
                    <div className="w-10 grid bg-gray-300 place-content-center cursor-pointer h-10 rounded-full overflow-hidden border">
                        <FontAwesomeIcon className='text-xl' icon={faBell} />
                    </div>
                </Tippy>
            </Notification>
            <OptionUsers user={user}>
                <Tippy content='tài khoản'>
                    <div className="w-10 cursor-pointer h-10 rounded-full overflow-hidden border">
                        <img src={user?.avatar} alt="avatar" />
                    </div>
                </Tippy>
            </OptionUsers>
        </div>
    )
}
export default Options