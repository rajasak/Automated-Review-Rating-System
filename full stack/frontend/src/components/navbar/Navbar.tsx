import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="w-full bg-blue-500 p-4 ">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center ">
                <div className="flex gap-2 items-center sm:ml-10">
                    <p className="sm:text-xl text-white font-semibold">E-Cart</p>
                </div>
                <ul className="flex text-sm sm:text-lg gap-6 text-white font-semibold">
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/recent-review'}>REVIEW</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar