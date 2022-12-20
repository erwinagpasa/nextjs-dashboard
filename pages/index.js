import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Address } from '../widget/Address'
import Link from 'next/link'
// import { ChartWidget } from '../widget/Chart'
import { ContactForm } from '../widget/ContacForm'
import { ActiveOrders } from '../widget/ActiveOrders'
import { RecentActivities } from '../widget/RecentActivities'
import { SocialTraffic } from '../widget/SocialTraffic'
import { UserList } from '../widget/UserList'
import { GoogleMappage } from '../widget/GoogleMap'

export default function Home() {
  return (
   
    <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
      <Navbar />
      <Sidebar />
    
     
      
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div className="bg-slate-200 rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">

            <div className="flex justify-center items-center w-14 h-14 bg-slate-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">1,257</p>
              <small>Today's order</small>
            </div>
          </div>

          <div className="bg-slate-200 rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-slate-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">557</p>
              <small>This month delivered</small>
            </div>
          </div>

          <div className="bg-slate-200 rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-slate-100 rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-slate-700 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">$11,257</p>
              <small>This month revenue</small>
            </div>
          </div>

          <div className="bg-slate-100 rounded-md flex items-center justify-center pl-3 text-slate-700 font-medium group">           
            <Link className="block w-full relative " href="/">
            <span>Logistics Dashboard</span>              
            <span className="block text-xs text-gray-500">Version 1.0.0 | Build 1</span>
          </Link>
          </div>
        </div>
    

<div className="p-4">    
  <div className="flex flex-row">
  <div className="flex-initial  w-2/5 pr-2 hidden md:block">
    <ActiveOrders />
    </div>
    <div className="flex-initial max-sm:w-full w-3/5 pl-3 ">
    <GoogleMappage />
      {/* <ChartWidget /> */}
    </div>
   
  </div>
</div>

 

        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">    
          <SocialTraffic />
          <RecentActivities />
        </div>
            
          <UserList />

        <div className="mt-8 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Address />
            <ContactForm />
          </div>
        </div>        
       </div>
    </div>
  )
}