import { FaRegImage, FaRetweet } from "react-icons/fa"
import { MdOutlineGifBox } from "react-icons/md"
import LeftSidebar from "@/components/LeftSidebar"
import { BsEmojiSmile } from "react-icons/bs"
import { AiOutlineSchedule, AiOutlineHeart } from "react-icons/ai"
import { ImLocation } from "react-icons/im"
import { BiBold, BiItalic } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { BiMessageRounded, BiSolidBarChartAlt2 } from "react-icons/bi"
import { GoShare } from "react-icons/go"
import Tweet from "@/components/Tweet"
const FORM_TAGS = [
  {
    name: "image",
    icon: <FaRegImage className="w-6 h-6 fill-primary mr-2" />,
  },
  {
    name: "gif",
    icon: <MdOutlineGifBox className="w-6 h-6 fill-primary mx-2" />,
  },
  {
    name: "emoji",
    icon: <BsEmojiSmile className="w-6 h-6 fill-primary mx-2" />,
  },
  {
    name: "schedule",
    icon: <AiOutlineSchedule className="w-6 h-6 fill-primary mx-2" />,
  },
  {
    name: "location",
    icon: <ImLocation className="w-6 h-5 fill-primary mx-2" />,
  },
  {
    name: "bold",
    icon: <BiBold className="w-6 h-6 fill-primary mx-2" />,
  },
  {
    name: "italic",
    icon: <BiItalic className="w-6 h-6 fill-primary mx-2" />,
  },
]

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

const Timeline = () => {
  return (
    <section className=" ml-[290px] flex flex-col min-h-screen border-l border-r border-gray-600 w-[600px] h-full">
      <div className="text-2xl font-bold pt-4 pl-4">Home</div>
      <div className="w-full flex h-10 items-center justify-center mt-12 border-b border-gray-600">
        <div className="w-full h-full flex items-center justify-center ">
          <div className="font-bold h-full border-primary border-b-4">
            For You
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="font-bold h-full text-gray-600">Following</div>
        </div>
      </div>
      <div className="h-32 w-full border-b border-gray-600 flex justify-start items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
          className="w-10 h-10 rounded-full mb-auto mt-7 ml-2"
        />
        <div className="flex h-full flex-col flex-1 justify-start items-start pl-2">
          <input
            placeholder="What is happening?!"
            className="w-full bg-transparent h-full border-none text-2xl focus:border-none focus:ring-0 focus:outline-none "
          />
          <div className="flex mb-2">
            {FORM_TAGS.map((tag) => (
              <button className="flex justify-center items-center">
                {tag.icon}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-primary max-w-fit m-2 mr-4 mt-auto rounded-full px-4 py-2 bg-opacity-50 text-gray-400 font-semibold transition duration-100">
          Tweet
        </button>
      </div>

      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
      <Tweet
        image="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
        name="Tomaz Ovsenjak"
        username="@maskobuilds"
        time="1h"
        tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum"
        likes="14"
        retweets="15"
        views="1150"
        replies="1"
      />
    </section>
  )
}

export default Timeline
