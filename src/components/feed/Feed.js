import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'
function Feed() {
  return (
    <div className='feed'>
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
