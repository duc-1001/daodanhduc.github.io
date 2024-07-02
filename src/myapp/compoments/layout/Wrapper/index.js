const Wrapper = (props) => {
    const { children } = props
    return (
        <div className="p-3 w-full border max-h-custom-max-height overflow-y-auto bg-white rounded shadow">
            {children}
        </div>
    )
}

export default Wrapper