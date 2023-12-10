import Image from 'next/image'
import Messagebar from './components/messagebar'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Chatapp from './components/chatapp'

export default function Home() {
  
  return (
    <main className='flex '>
      <Sidebar/>
      <div className='flex flex-col h-screen  w-full ' >
      <Navbar />
      <Chatapp/>
      </div>
      
    </main>
  )
}
