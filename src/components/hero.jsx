import React from "react";

export default function Hero() {
  return (
    <div className="h-[70vh] p-4 flex items-center lg:items-end bg-slate-500 lg:rounded-3xl bg-[url('https://images.unsplash.com/photo-1527283646354-d874f249ea2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row justify-evenly gap-3 items-center w-full">
        <div className="lg:pl-9 lg:pb-9">
          <h2 className="text-[40px] md:text-[60px] lg:text-[100px] text-white mb-[-20px] lg:mb-[-50px]">Redefining Your</h2>
          <h2 className="text-[40px] md:text-[60px] lg:text-[100px] text-white">Tech Expreience</h2>
        </div>
        <div className="text-center lg:text-start lg:pr-9">
          <p className="text-stone-100 shadow">
            At UpTech, we're redefining your tech experience<br /> by offering the
            latest & most innovative products.
          </p>
          <div className="flex justify-center lg:justify-start gap-2 my-3">
            <button className="text-sm py-2 px-5 bg-stone-50 text-black rounded-full">Browse Products</button>
            <button className="text-sm py-2 px-5 border text-white border-stone-50 rounded-full">About us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
