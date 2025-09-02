// @ts-nocheck
export default function ContactSkelo() {
    return (
        <div className="space-y-4 mt-8 animate-pulse">
            {/* Section title skeleton */}
            <div className="h-6 w-40 bg-gray-300 rounded"></div>

            {/* Two Card skeletons side by side (like Phone & Email) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-[114px] bg-gray-200 rounded"></div>
                <div className="h-[114px] bg-gray-200 rounded"></div>
            </div>

            {/* Form section skeleton */}
            <div className="flex items-center gap-4">
                <div className="h-[450px] bg-gray-200 rounded w-1/2"></div>

                {/* Map skeleton */}
                <div className="h-[450px] bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    )
}
