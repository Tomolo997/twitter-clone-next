import { FaRetweet } from "react-icons/fa"
import { BiMessageRounded, BiSolidBarChartAlt2 } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { GoShare } from "react-icons/go"
import { BsThreeDots } from "react-icons/bs"
import { NextFunctionComponent } from "next"
const SYMBOLS = [
  {
    name: "reply",
    icon: (
      <BiMessageRounded className="w-5 self-start h-5 fill-gray-600 mr-1" />
    ),
    number: 2,
  },
  {
    name: "retweet",
    icon: <FaRetweet className="w-5 h-5 fill-gray-600 mr-1" />,
    number: 2,
  },
  {
    name: "like",
    icon: <AiOutlineHeart className="w-5 h-5 fill-gray-600 mr-1" />,
    number: 2,
  },
  {
    name: "view",
    icon: <BiSolidBarChartAlt2 className="w-5 h-5 fill-gray-600 mr-1" />,
    number: 2,
  },
  {
    name: "share",
    icon: <GoShare className="w-5 h-5 fill-gray-600" />,
    number: null,
  },
]

const Tweet: NextFunctionComponent<props> = ({
  image,
  name,
  username,
  time,
  tweet,
  tweet_image,
  likes,
  retweets,
  views,
  replies,
}) => {
  return (
    <div className="w-full min-h-content mt-1 flex justify-start border-b border-gray-600 pb-1">
      <img
        src={image}
        alt=""
        className="w-10 h-10 rounded-full mb-auto mt-3 ml-2"
      />
      <div className="flex p-2 flex-col w-full">
        <div className="flex items-center">
          <div className=" font-bold text-s">{name}</div>
          <div className="text-s text-gray-600 ml-1">{username}</div>
          <div className="text-s text-gray-600 ml-1">·</div>
          <div className="text-s text-gray-600 ml-1">{time}</div>
          <BsThreeDots className="ml-auto mr-2"></BsThreeDots>
        </div>
        <div className="pr-4">{tweet}</div>
        <div className="flex w-[510px] justify-between mt-4 text-sm">
          <button className="flex justify-center text-gray-600 text-s items-center">
            <BiMessageRounded className="w-5 self-start h-5 fill-gray-600 mr-1" />
            <div className="ml-2">{replies}</div>
          </button>
          <button className="flex justify-center text-gray-600 text-s items-center">
            <FaRetweet className="w-5 h-5 fill-gray-600 mr-1" />
            <div className="ml-2">{retweets}</div>
          </button>
          <button className="flex justify-center text-gray-600 text-s items-center">
            <AiOutlineHeart className="w-5 h-5 fill-gray-600 mr-1" />
            <div className="ml-2">{likes}</div>
          </button>
          <button className="flex justify-center text-gray-600 text-s items-center">
            <BiSolidBarChartAlt2 className="w-5 h-5 fill-gray-600 mr-1" />
            <div className="ml-2">{views}</div>
          </button>
          <button className="flex justify-center text-gray-600 text-s items-center">
            <GoShare className="w-5 h-5 fill-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tweet
