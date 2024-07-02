import Header from "../Header"
import ModalOverlay from "../PopUp"

const HeaderOnlyLayout = (props) => {
    const { children } = props

    return (
        <div className="w-full h-full max-h-[100vh] overflow-y-auto">
            <div className="w-full h-full flex flex-col">
                <div className="sticky z-[1] top-0 w-full">
                    <Header />
                </div>
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default HeaderOnlyLayout