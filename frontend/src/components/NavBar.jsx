

function NavBar() {
    return (
        <div>
            <div className="flex justify-evenly px-4 py-2 text-gray-50 text-xl ">
                <div className="flex gap-10">
                    <h1 className="cursor-pointer hover:text-gray-500">Home</h1>
                    <h1 className="cursor-pointer hover:text-gray-500">About</h1>
                </div>
                <div className="dummy" />
                <div className="flex gap-10">
                    <h1 className="cursor-pointer hover:text-gray-500">Contact</h1>
                    <h1 className="cursor-pointer hover:text-gray-500">Login</h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar
