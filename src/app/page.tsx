import LeftSidebar from "@/components/LeftSidebar"
import Timeline from "@/components/Timeline"
import TrendingSection from "@/components/TrendingSection"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar></LeftSidebar>
        <Timeline></Timeline>
        <TrendingSection></TrendingSection>
        {/* <main>main section</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  )
}

export default Home
