import { AiOutlineSearch } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
const TrendingSection = () => {
  return (
    <section className="w-[350px] ml-[900px] h-full flex flex-col justify-start items-center fixed">
      <div className="flex w-full justify-content items-center rounded-full bg-grayBackground mt-1 px-3 py-3">
        <div>
          <AiOutlineSearch className="w-6 h-6 fill-gray-400 pl-1"></AiOutlineSearch>
        </div>
        <input
          type="text"
          className="w-full h-full bg-transparent focus:outline-none ml-2 placeholder-gray-400 placeholder:text-sm placeholder:pl-2"
          placeholder="Search Twitter"
        />
      </div>
      <div className="flex flex-col w-full bg-grayBackground mt-2 rounded-2xl p-4 ">
        <div className="text-xl font-bold">Trends for you</div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col text-start">
            <div className="text-gray-500 text-xs">Trending</div>
            <div className="font-bold text-sm mt-1">Touchoname</div>
            <div className="text-gray-500 text-xs mt-1">8975 tweets</div>
          </div>
          <div>
            <BsThreeDots className="fill-gray-500"></BsThreeDots>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col text-start">
            <div className="text-gray-500 text-xs">Trending</div>
            <div className="font-bold text-sm mt-1">Arsenal</div>
            <div className="text-gray-500 text-xs mt-1">8975 tweets</div>
          </div>
          <div>
            <BsThreeDots className="fill-gray-500"></BsThreeDots>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col text-start">
            <div className="text-gray-500 text-xs">Trending</div>
            <div className="font-bold text-sm mt-1">Barca</div>
            <div className="text-gray-500 text-xs mt-1">8975 tweets</div>
          </div>
          <div>
            <BsThreeDots className="fill-gray-500"></BsThreeDots>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-grayBackground mt-2 rounded-2xl p-4 ">
        <div className="text-xl font-bold">Who to follow</div>
        <div className="flex items-center mt-4">
          <img
            src="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
            alt=""
            className="w-10 h-10 rounded-full mb-auto"
          />
          <div className="flex flex-col ml-2">
            <div className="font-bold text-sm">Tomaz Ovsenjak</div>
            <div className="text-gray-500 text-xs mt-0.5">@maskobuilds</div>
          </div>
          <button className="bg-white text-black px-3 py-2 rounded-full ml-auto text-sm font-bold">
            Follow
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
