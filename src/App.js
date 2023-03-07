import { Link, Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <div className="bg-[#f3f5f7]">
      <Link to="/">
        <nav className="bg-[#0f1616] pl-6 py-6 md:pl-72 text-white text-3xl font-bold tracking-wider w-full mb-8 md:mb-16">
          Newsopreneur
        </nav>
      </Link>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App
