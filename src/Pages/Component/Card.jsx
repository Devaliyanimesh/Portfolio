// @ts-nocheck


export default function WhatIdo(props) {

    let { whatIdoLable,data,grid,className } = props



    return (
        <section className="flex flex-col gap-7">
            {whatIdoLable && <div className=''>
                <h2 className='text-2xl font-semibold '> {whatIdoLable}</h2>
                <div className="mt-1 w-32 h-1 bg-accent"></div>
            </div>}
            <div className={`grid sm:grid-cols-2 md:grid-cols-${grid} gap-6 ${className}`}>
                {data.map((item,index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4 text-accent">

                                {Icon}
                                <h3 className="text-xl font-semibold ml-3 text-gray-800 truncate"> <abbr title={item.title} className='no-underline'>{item.title}</abbr></h3>
                            </div>
                            {item.paragraph && <p className="text-gray-600 text-base font-medium ml-1">
                                {item.paragraph}
                            </p>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
