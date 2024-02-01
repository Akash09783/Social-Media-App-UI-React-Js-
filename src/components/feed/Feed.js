import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'
import {Posts} from '../../dummyData'

function Feed() {
  return (
    <>
<div className='feed'>
      <Share/>
    {Posts.map((p)=>(
        <Post  key={p.id} post={p}/>
       

        
    ))}
  
    
  
    
    </div>


    </>
    
  )
}

export default Feed
