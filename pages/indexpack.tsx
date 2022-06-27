import type { NextPage } from "next";

const Indexpack: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 flex flex-col space-y-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>

        <ul>
          <li>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-500"
              >
                <span className="text-gray-500">Grey Chair</span>
                <span className="font-semibold">$19</span>
              </div>
            ))}
          </li>
        </ul>
        <ul>
          {["a", "b", "c", ""].map((item, idx) => (
            <li className="text-teal-500 py-2 empty:hidden" key={idx}>
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
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-bold">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-500 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-bold">$3,140</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-bold group-hover:text-red-300 transition-colors">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6  overflow-hidden rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>◀</span>
          <div className="space-x-3">
            <span>★ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 rounded-md"></div>
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
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
