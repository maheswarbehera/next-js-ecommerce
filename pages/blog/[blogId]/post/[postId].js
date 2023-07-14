import { useRouter } from 'next/router';
import React from 'react'

const Index =  ()=>{


        const router = useRouter();
        const {blogId,postId} = router.query;

   return <div>
       blog: {blogId && blogId}
        post: {postId && postId}
    </div>
  
}

export default Index;
