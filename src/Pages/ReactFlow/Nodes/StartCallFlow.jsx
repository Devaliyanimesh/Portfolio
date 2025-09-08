export default function StartCallFlow({
  title = "Start Call Flow",
  subtitle = "Ask Daily",
}) {
  return (
    <div
      data-id="1"
      className="w-[550px] 
                  relative  z-0 visible"
    >
      <div className="flex justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="text-xl  text-center">
        <span className="text-sm opacity-45 ">Build a new call flow / </span>
        <span className="bg-gradient-to-r from-teal-400 to-green-400 px-1 py-1 rounded-lg text-accent ml-1 text-[8px]">
          {subtitle}
        </span>
      </div>
      <div className="flex justify-center">
        <div className="bg-callInfo h-2 w-2 rounded-full"></div>
      </div>
      <div className="flex justify-center">
        <div className="bg-callInfo h-[2rem] p-[0.10rem]"></div>
      </div>
    </div>
  );
}
