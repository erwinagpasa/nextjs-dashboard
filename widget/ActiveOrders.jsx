import Link from 'next/link'

export const ActiveOrders = () => {
  return (
    <div className="w-full bg-white rounded py-2">
      <div className="flex flex-wrap items-center px-4 py-2">
      <div className="relative w-full max-w-full flex-grow flex-1">
        <h3 className="font-semibold text-base text-gray-900">Active Orders</h3>
      </div>
      <div className="relative w-full max-w-full flex-grow flex-1 text-right">
        <button className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
      </div>
    </div>


    <div className="h-96 overflow-y-auto px-3 hidden md:block">
      <div className="overflow-hidden">
        <div className="bg-slate-100 p-3 mb-2 rounded-lg">
          <div className="rightbox">
            <div className="rb-container">
              <ul className="rb">
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">China - GuangZhou</p>
                  <small className="timestamp text-slate-600">3rd May 2020 7:00 PM</small>
                </li>
          
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">Philippines - Dasmariñas</p>
                  <small className="timestamp text-slate-600">19th May 2020 3:00 PM</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="bg-slate-100 p-3 mb-2 rounded-lg">
          <div className="rightbox">
            <div className="rb-container">
              <ul className="rb">
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">China - Yiwu</p>
                  <small className="timestamp text-slate-600">3rd May 2020 7:00 PM</small>
                </li>
          
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">Philippines - Valenzuela</p>
                  <small className="timestamp text-slate-600">19th May 2020 3:00 PM</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="bg-slate-100 p-3 mb-2 rounded-lg">
          <div className="rightbox">
            <div className="rb-container">
              <ul className="rb">
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">China - Yiwu</p>
                  <small className="timestamp text-slate-600">3rd May 2020 7:00 PM</small>
                </li>
          
                <li className="rb-item" ng-repeat="itembx">
                  <p className="text-blue-600">Philippines - Valenzuela</p>
                  <small className="timestamp text-slate-600">19th May 2020 3:00 PM</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );
}
 
