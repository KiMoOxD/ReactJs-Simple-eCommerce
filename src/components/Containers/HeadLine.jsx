export default function HeadLine({ head, label, extra}) {
  return (
    <div className="py-5">
      <div className="flex justify-center md:justify-start">
        <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          {head}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-16 items-center md:items-end py-3">
        <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start tracking-wider font-semibold">
          {label}
        </h1>
        {extra && extra}
      </div>
    </div>
  );
}
