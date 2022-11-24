export default function Generate(){
    return(
        <div className=" w-[30%] h-[35vh] px-16 py-8 rounded-lg bg-[#171717] border-[#ffffff8a] border-[0.75px] flex flex-col justify-between ">
            <h3 className="text-center text-xl font-mono">
                Generate Summary
            </h3>
            <p className="mt-5 text-[#ffffff9a] text-center">
                Generates an overall summary depicting the non-sensitive healthcare data of the user
            </p>
            <div className="w-full flex justify-center mt-6">
                <button className="bg-[#0072F5] w-[125px] py-1 rounded-md">
                    Generate
                </button>
            </div>
        </div>
    )
}