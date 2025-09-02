// @ts-nocheck
export default function HomeSkelo() {
    return (
        <div className="col-span-12 md:col-span-8   rounded animate-pulse">
            <div className="flex flex-col gap-[3rem]">

                {/* About Me Section Skeleton */}
                <div>
                    <div className="mb-6">
                        <div className="h-6 w-40 bg-gray-300 rounded"></div>
                        <div className="mt-2 w-28 h-6 bg-gray-400 rounded"></div>
                    </div>
                    <div className="space-y-3 mb-6">
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    </div>
                </div>

                {/* What I Do Section Skeleton */}
                <div>
                    <div className="mb-6">
                        <div className="h-6 w-48 bg-gray-300 rounded"></div>
                        <div className="mt-2 w-32 h-1 bg-gray-400 rounded"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="h-8 w-1/2 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-4/5 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="h-8 w-2/5 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
