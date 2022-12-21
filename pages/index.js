import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { Address } from '../widget/Address'

// import { ChartWidget } from '../widget/Chart'
import { ContactForm } from '../widget/ContacForm'
import { ActiveOrders } from '../widget/ActiveOrders'
import { RecentActivities } from '../widget/RecentActivities'
import { SocialTraffic } from '../widget/SocialTraffic'
import { UserList } from '../widget/UserList'
import { GoogleMappage } from '../widget/GoogleMap'
import { Overview } from '../widget/Overview'


export default function Home() {
  return (   
    <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
      <Navbar />
      <Sidebar />
    

      <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
        <Overview />
    

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


        {/* <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">    
          <SocialTraffic />
          <RecentActivities />
        </div> */}
            
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
