import React from 'react'


const More = ({text}) => {
    return (
        <div className=''>
            <button className="button mx-auto bg-cg-blue border-4 border-cg-blue px-4 py-2 flex justify-center items-center space-x-3 rounded-lg text-cg-white hover:bg-blue-900 scale-75 md:scale-90 lg:scale-100 ">
                <span className="text font-semibold">{text}</span>
                <svg className="arrow text-cg-white fill-current" viewBox="0 0 448 512" height="1em"  xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            </button>
        </div>
    )
}

export default More
