const SkeletonCard = () => {
  return (
    <div className="w-full md:w-150 ring-1 ring-gray-700 rounded-lg p-5 flex flex-col gap-3">
      
      <div className="flex items-center gap-3">
        <div className="h-15 w-15 rounded-full bg-gray-700 animate-pulse"/>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 bg-gray-700 rounded animate-pulse"/>
          <div className="h-3 w-20 bg-gray-700 rounded animate-pulse"/>
        </div>
      </div>

      <div className="h-3 w-full bg-gray-700 rounded animate-pulse"/>
      <div className="h-3 w-3/4 bg-gray-700 rounded animate-pulse"/>

      <div className="flex flex-col md:flex-row gap-3 justify-around w-full">
        <div className="flex-1 h-16 bg-gray-700 rounded-lg animate-pulse"/>
        <div className="flex-1 bg-gray-700 rounded-lg animate-pulse"/>
        <div className="flex-1 bg-gray-700 rounded-lg animate-pulse"/>
      </div>

    </div>
  )
}

export default SkeletonCard;