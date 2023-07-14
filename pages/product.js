
import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import Navbar from '@/component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Index = ({data}) => {
  console.log({data});

  if(!data){
    return <div>loading...</div>
  }

  return (
    <>
    <Navbar/>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <h4>Product Listing</h4>
    <div className="flex flex-wrap -m-4">
          { data && data.length>1 && data.map(cur=>{
            return <div key={cur?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={`product/${cur?.id}`}  className="block relative h-48 rounded overflow-hidden">
              <img alt={`ecommerce ${cur?.id}`} className="object-cover object-center w-full h-full block" src={cur?.thumbnail}/>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <div>
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{cur?.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{cur?.title}</h2>
              <p className="mt-1"> &#8377; {cur?.price}</p>
              </div>
              <button type="button" class="bg-indigo-500 w-24 h-1/3 rounded ">
              <Link href={`product/${cur?.id}`}  className="btn btn-primary">View</Link>
</button>
              
            </div>
          </div>
          })}
    </div>
  </div>
</section></>
  )
}

export default Index



export const getServerSideProps = async () => {
  const response = await axios.get(`https://dummyjson.com/products`);
  const data = await response.data;
  return { props: { data:data?.products } }
}
