import Topbar from "../../topbar/Topbar"
import Sidebar from "../../sidebar/Siderbar"
import Feed from "../../feed/Feed"
import Rightbar from "../../rightbar/Rightbar"
import './home.css'
function Home() {
  return (
   <>
<Topbar/>
<div className="homeContainer">
<Sidebar/>
<Feed/>
<Rightbar/>

</div>

   </>
  )
}

export default Home
