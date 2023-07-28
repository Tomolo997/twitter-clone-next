import Link from "next/link"
import { BiHomeCircle, BiUser, BiDotsVerticalRounded } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { BsBell, BsBookmark, BsTwitter } from "react-icons/bs"
import { HiOutlineHashtag } from "react-icons/hi"
import { HiEnvelope, HiOutlineEnvelope } from "react-icons/hi2"
import { MdVerified } from "react-icons/md"
const NAVIGATION_ITEMS = [
  {
    label: "Home",
    icon: BiHomeCircle,
  },
  {
    label: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    label: "Notifications",
    icon: BsBell,
  },
  {
    label: "Messages",
    icon: HiOutlineEnvelope,
  },
  {
    label: "Bookmarks",
    icon: BsBookmark,
  },
  {
    label: "Profile",
    icon: BiUser,
  },
]

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col mb-4 h-full">
      <div className="flex flex-col items-stretch h-screen space-y-4 mb-4 mt-4">
        <Link href="/" className="text-2xl px-6">
          <BsTwitter></BsTwitter>
        </Link>
        {NAVIGATION_ITEMS.map((item, index) => {
          return (
            <Link
              className="hover:bg-white/10 transition w-fit text-2xl duration-100 rounded-3xl py-2 px-6 flex justify-start space-x-2 items-center"
              key={item.label}
              href="/"
            >
              <div>
                <item.icon />
              </div>
              <div>{item.label}</div>
            </Link>
          )
        })}
        <button className="bg-primary m-4 rounded-full p-4 text-xl font-semibold hover:bg-opacity-90 transition duration-100">
          Tweet
        </button>
      </div>
      <button className="mb-4 w-full rounded-full hover:bg-opacity-10 hover:bg-white/10 p-2 flex place-content-around items-center transition duration-100">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1625358790118760448/Kj-xfrfN_x96.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </div>
        <div className="text-start">
          <div className="flex items-center">
            <div className="font-semibold">Tomaz Ovsenjak</div>
            <div className="ml-1">
              <MdVerified className="fill-primary"></MdVerified>
            </div>
          </div>
          <div className="text-xs">@maskobuilds</div>
        </div>
        <div>
          <BsThreeDots></BsThreeDots>
        </div>
      </button>
    </section>
  )
}

export default LeftSidebar
