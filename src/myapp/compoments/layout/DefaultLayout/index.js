import { useEffect } from "react";
import Header from "../Header"
import SideBar from "../SideBar"

const DefaultLayout = (props) => {
    const { children } = props
    
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex max-h-[100vh] overflow-y-auto flex-col">
                <div className="sticky z-[1] top-0 w-full">
                    <Header />
                </div>
                <div className="flex w-full gap-6">
                    <div className="hidden xl:w-1/3 xl:inline-block">
                        <SideBar />
                    </div>
                    <div className="w-full lg:w-2/3">
                        {children}
                    </div>
                    <div className="hidden lg:w-1/3 lg:inline-block">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout