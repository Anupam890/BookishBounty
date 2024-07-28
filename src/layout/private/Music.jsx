

export default function Music() {
  return (
    <>
      <div className="trending">
        <h1 className="text-3xl  font-bold p-4">Trending</h1>
        {/* image sliding  */}
        
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 max-h-full">
        <div className="bg-gray-800 text-center text-white rounded-md p-4 col-span-2">
          Top Artist
        </div>
        
        <div className="bg-gray-800 text-center text-white rounded-md p-4">
          Genres
        </div>
        <div className="bg-gray-800 text-center text-white rounded-md p-4 col-span-2">
          Top Charts
        </div>
      </div>
    </>
  );
}
