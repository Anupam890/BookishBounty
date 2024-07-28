

export default function Music() {
  return (
    <>
      <div className="trending">
        <h1 className="text-3xl  font-bold p-4">Trending</h1>
        {/* image sliding  */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
              alt="profile"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h4 className="font-bold">Artist Name</h4>
              <p className="text-sm text-gray-400">Album Name</p>
            </div>
          </div>
          <div className="controls flex items-center gap-2 mt-4 md:mt-0"></div>
        </div>
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
