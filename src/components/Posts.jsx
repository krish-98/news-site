const Posts = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-6 ">
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className="w-[320px] flex flex-col gap-1 bg-white p-4 rounded-2xl hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <img
              className="rounded-xl"
              src={item?.jetpack_featured_media_url}
              alt="item?.post"
            />
            <p className="text-xs text-gray-600">{item?.date}</p>
            <h1 className="text-2xl font-bold tracking-wide">
              {item?.title?.rendered}
            </h1>
            <p className="text-gray-600 text-[15px]">
              {item?.excerpt?.rendered}
            </p>
            <a
              href={item?.canonical_url}
              target="_blank"
              rel="noreferrer"
              className="self-center bg-[#0f1616] text-white py-4 px-8 rounded-2xl mt-6 hover:bg-white hover:text-[#0f1616] hover:border hover:border-black transition-all duration-300 ease-in-out"
            >
              Read article
            </a>
          </div>
        ))}
    </div>
  )
}
export default Posts
