import type { NextPage } from "next";
import Image from "next/image";

const Indexpack: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-gray-500 flex flex-col overflow-hidden rounded-3xl shadow-xl sm:bg-gray-200 sm:hover:bg-gray-400 md:bg-indigo-200 lg:bg-indigo-300 p-6 ">
        <span className="font-semibold text-3xl text-white">Select Item</span>
        <ul>
          <li>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 odd:bg-blue-50 even:bg-blue-400 rounded-md p-1"
              >
                <span className="text-gray-500">Grey Chair</span>
                <span className="font-semibold">$19</span>
              </div>
            ))}
          </li>
        </ul>
        <ul>
          {["a", "b", ""].map((item, idx) => (
            <li className="text-neutral-200 py-2 empty:hidden" key={idx}>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <div className="flex justify-between">
          <button
            className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-2/4 mx-auto
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:bg-red-500
         "
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 lg:pb-24 xl:pb-40 portrait:bg-indigo-600 landscape:bg-indigo-400">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="dark:bg-gray-500 rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="dark:text-white text-sm text-gray-500">
                Orders
              </span>
              <span className="font-bold">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-500 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="dark:text-white text-sm text-gray-500">
                Spent
              </span>
              <span className="font-bold">$3,140</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-bold group-hover:text-red-300 transition-colors">
              Tony Molloy
            </span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-500 overflow-hidden rounded-3xl shadow-xl p-6 lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>◀</span>
          <div className="space-x-3">
            <span>★ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Image
              src="/sinji.png"
              alt="sinji"
              layout="intrinsic" // required
              objectFit="cover" // change to suit your needs
              className="rounded-md" // just an example
              width={900} 
              height={500}
            />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between ">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 hover:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500  bg-opacity-50 hover:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-50 hover:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>

            <div className="flex items-center space-x-5">
              <button className="p-1.5  bg-blue-200  flex justify-center items-center rounded-lg first-line:aspect-square w-10 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 bg-blue-200 flex justify-center items-center rounded-lg aspect-square w-10 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-5 text-center w-32 text-xs rounded-lg text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indexpack;
