import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center pt-48 gap-8">
      <h1 className="text-5xl lg:text-7xl tracking-wider">Error 404!</h1>
      <p className="text-xl">No such page found</p>
      <Link to="/" className="underline">
        <AiOutlineArrowLeft className="inline" /> Go back to Home
      </Link>
    </div>
  )
}
export default NotFound
