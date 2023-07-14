import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Slider from '@/component/Slider'
import Footer from '@/component/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='container'>
        <Slider/>
      </div>
<Footer/>

    </main>
  )
}
