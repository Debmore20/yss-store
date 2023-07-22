
const Footer = () => {
  return (
    <footer>
        <div className="h-fit w-full bg-gray-900 md:justify-evenly flex flex-col md:flex-row pl-4 md:pl-0">
            <div className="py-6 md:py-10">
                <h2 className="text-sm font-mono text-white text-opacity-80 mb-2 pr-6 md:pr-0 md:w-[240px]">Join our club for our latest merch, discounts and more...</h2>
                <form className="ml-2 md:ml-0 flex flex-col md:block">
                    <label className="text-xs font-mono text-white text-opacity-80 mb-1" htmlFor="email">E-mail: </label>
                    <input type="text" min={2} max={255} className="max-w-[40%] bg-slate-50 bg-opacity-70 rounded-md p-1 text-sm border-x-0" />
                    <button className="w-fit mt-4 md:ml-3 text-xs font-mono text-white text-opacity-80 px-2 py-1 hover:bg-slate-400 transition-all ease-out relative md:bottom-[2px] bg-slate-700 rounded-md">Join</button>
                </form>
            </div>
            <div className=" py-4 md:py-10">
                <h2 className="text-sm font-mono text-white text-opacity-80 mb-2 w-[240px]">Contact Us:</h2>
                <h3 className="text-xs ml-2 font-mono text-white text-opacity-80">Phone No: +1(234)-344-454</h3>
                <h3 className="text-xs ml-2 font-mono text-white text-opacity-80">Email: frozencandygroup@gmail.com</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer