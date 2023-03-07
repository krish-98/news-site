import axios from "axios"
import { useState, useEffect } from "react"
import { InfinitySpin } from "react-loader-spinner"
import Posts from "./Posts"

const Main = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      )
      .then((res) => {
        setNewsData(res?.data)
      })
  }, [])

  return (
    <main className="max-w-[1440px] mx-auto">
      {newsData.length > 0 ? (
        <Posts data={newsData} />
      ) : (
        <div className="h-screen bg-[#f3f5f7] text-[#0f1616] flex items-center justify-center w-full">
          <InfinitySpin width="400" color="#0f1616" />
        </div>
      )}
    </main>
  )
}
export default Main
