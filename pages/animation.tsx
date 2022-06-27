import type { NextPage } from "next";

const Animation: NextPage = () => {
//클릭시 텍스트 오픈 애니메이션과 ul, li 설정.
  return <div className="flex flex-col space-y-2 p-5">
    <details className="open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">
            Which area do you want go to ?
        </summary>
        <span className="selection:bg-indigo-600 selection:text-white">JEJU!</span>
    </details>
    <ul className="list-none">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
    </ul>
    <input type="file" className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors p-1 file:border-0 file:rounded-xl file:text-white file:px-2 file:bg-purple-400 w-96 bg-slate-400 rounded-xl"/>
    <div className="flex flex-col space-y-2  p-5 ">
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Hello everyone!
      </p>
    </div>
  </div>;
};

export default Animation;
