import "./home.scss"
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/share";

const Home = () => {
  return (
    <div className="home">
      {/* <Share/> */}
      <Posts/>  
    </div>
  )
}

export default Home
