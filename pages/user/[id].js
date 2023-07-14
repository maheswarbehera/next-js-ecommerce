import { useRouter } from 'next/router';
import React from 'react'

const Index =  ()=>{


        const router = useRouter();
        const {id} = router.query;

   return <div>
        {id && id}
    </div>
  
}

export default Index;
