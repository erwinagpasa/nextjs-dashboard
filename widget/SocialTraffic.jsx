export const SocialTraffic = () => {
  return (
  <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-200 w-full rounded">
  <div className="rounded-t mb-0 px-0 border-0">
    <div className="flex flex-wrap items-center px-4 py-2">
      <div className="relative w-full max-w-full flex-grow flex-1">
        <h3 className="font-semibold text-base text-gray-900">Social Traffic</h3>
      </div>
      <div className="relative w-full max-w-full flex-grow flex-1 text-right">
        <button className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th className="px-4 dark:bg-gray-600 text-gray-200 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Referral</th>
            <th className="px-4 dark:bg-gray-600 text-gray-200 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Visitors</th>
            <th className="px-4 dark:bg-gray-600 text-gray-200 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700">
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Facebook</th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">70%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700">
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Twitter</th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">3,380</td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">40%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700">
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Instagram</th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,105</td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">45%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-pink-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700">
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Google</th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,985</td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">60%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                    <div  className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700">
            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Linkedin</th>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2,250</td>
            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex items-center">
                <span className="mr-2">30%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
);
}
 
