import React, { useEffect, useState } from 'react';

const Server = () => {
  const [data, setData] = useState([]);
  const apidata = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    apidata();
  }, [])

  return (
    <>
      <div className='container mx-auto' >
        
      <table>
               <tr>
                <th style={{paddingRight:'50px'}}>ID</th>
                <th style={{paddingRight:'50px'}}>USER ID</th>
                <th style={{paddingRight:'50px'}}>TITLE</th>
               </tr>
               </table>
        {data && data.length > 1 && data?.map((res, i) => {
          return (
           
              
              <>
              
               
               <tr key={i}>
                <td style={{paddingRight:'50px'}}>{res.id}</td>
                <td style={{paddingRight:'50px'}}>{res.userId}</td>
                <td style={{paddingRight:'50px'}}>{res.title}</td>
                </tr>
              </>
          )

        })}
      </div>
    </>
  );
}

export default Server;
