import Image from "next/image";
import Header from './home/comp/Header'
import Footer from "./home/comp/Footer";
import Cloudzz from "./home/comp/Cloudzz"
export default function Home() {
  return (
    <main >
      <Header/>
    

    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="">
          <div className="md:w-full">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="h-16 w-16 mr-4" src =""alt="Product image" />
                        <span className="font-semibold">The north coat</span>
                      </div>
                    </td>
                    <td className="py-4">$260</td>
                    <td className="py-4">
                      <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                        <div className="w-full flex justify-between items-center gap-x-1">
                          <div className="grow py-2 px-3">
                            <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" readOnly />
                          </div>
                          <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                            <button type="button"  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                            </button>
                            <button type="button"  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$260</td>
                    <td className="py-4">
                      <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="h-16 w-16 mr-4" src="https://res.cloudinary.com/dnchnaonz/image/upload/v1708311404/mqdu7vub2r5ssgmd4ujl.webp" alt="Product image" />
                        <span className="font-semibold">dsfdsfd</span>
                      </div>
                    </td>
                    <td className="py-4">$2000</td>
                    <td className="py-4">
                      <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                        <div className="w-full flex justify-between items-center gap-x-1">
                          <div className="grow py-2 px-3">
                            <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text"  readOnly />
                          </div>
                          <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                            <button type="button"  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                            </button>
                            <button type="button"  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$2000</td>
                    <td className="py-4">
                      <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="h-16 w-16 mr-4" src="https://res.cloudinary.com/dnchnaonz/image/upload/v1708327543/huezmrcfflisj03txkjp.jpg" alt="Product image" />
                        <span className="font-semibold">nkax Ecouteurs T3</span>
                      </div>
                    </td>
                    <td className="py-4">$$43</td>
                    <td className="py-4">
                      <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                        <div className="w-full flex justify-between items-center gap-x-1">
                          <div className="grow py-2 px-3">
                            <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text"  readOnly />
                          </div>
                          <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                            <button type="button" className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                            </button>
                            <button type="button"  className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$43</td>
                    <td className="py-4">
                      <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex py-8 justify-between">
            <div className="flex w-[900px]">
              <div className="flex w-[600px] h-10">
                <input type="email" placeholder="Coupon Code" className=" h-full w-full rounded-[7px] bg-white px-3 py-2.5 text-blue-gray-700 " />
                <button className="text-white w-full bg-red-500 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Apply Coupon</button>
              </div>
            </div>
            <div className="md:w-1/4 ">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$2303</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$2303</span>
                </div>
                <button className="text-white w-full bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Process to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cloudzz/>
      <Footer/>
    </main>
  );
}
