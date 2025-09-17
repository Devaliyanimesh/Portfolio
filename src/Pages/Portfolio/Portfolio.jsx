import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const portfolioItems = [
  {
    title: 'Call Flow',
    image: 'https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2022/01/19133018/call-flow-script.webp',
  },
];

const Portfolio = () => {
  let navigate = useNavigate()
  const [loading,setLoading] = useState(true);


  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1000); // 1s loading
    return () => clearTimeout(timer);
  },[]);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-semibold">Project</h2>
        <div className="mt-2 w-24 h-1 bg-accent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item,index) => (
          <div
            key={index}
            className="bg-accent rounded-lg shadow-md overflow-hidden"
          >
            {loading ? (
              // Skeleton loader
              <div className="h-48 w-full bg-gray-300 animate-pulse" />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full cursor-pointer"
                onClick={() => navigate("/callflow")}
              />
            )}
            <div className="p-2">
              {loading ? (
                <div className="h-6 bg-gray-300 w-3/4 animate-pulse rounded" />
              ) : (
                <h3 className="text-lg text-info font-semibold">{item.title}</h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
