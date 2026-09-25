import Image from "next/image";

export default function Home() {
  return (<>
   <div className="flex justify-center text-white h-[44vh] items-center flex-col gap-4">
    <div className="font-bold text-5xl flex gap-2 justify-center items-center"><span><img src="tea.gif" width={44} alt="" /></span>Buy me a Chai</div>
    <p>A crowdfunding platform for creators. Get funded by your fans and followers</p>
    <div className="flex gap-2"><button type="button" className="rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Now!</button>
    <button type="button" className="rounded-2xl text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Sign Up</button></div>
   </div>
    <div className="bg-white h-1 opacity-10"></div>
    
    <div className="text-white container mx-auto">
      <h1 className="text-2xl font-bold text-center my-14">Your fans can buy you a chai</h1>
    <div className="flex gap-5 justify-around">

      <div className="item space-y-3"><img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="man.gif" alt="" /><p className="font-bold">Fund Yourself</p></div>
      <div className="item space-y-3"><img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="coin.gif" alt="" /><p className="font-bold">Fund Yourself</p></div>
      <div className="item space-y-3"><img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="group.gif" alt="" /><p className="font-bold">Fund Yourself</p></div>

    </div>
     </div>
   </>
  );
}
