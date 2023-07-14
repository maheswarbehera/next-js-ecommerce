import React from 'react'

const serverside = ({data}) => {
  return (
    <div>
      {data && data.length>1 && data?.map((cur,i)=>{
                return <div style={{background:"white",padding:"20px 0 50px 0",marginTop:"20px",color:"black",display:"flex",justifyContent:"center",alignContent:"center"}} key={i}>
                    <p>{cur.title}</p>
                </div>
            })}
    </div>
  )
}

export default serverside


export const getServerSideProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    return { props: { data } }
  }
   
