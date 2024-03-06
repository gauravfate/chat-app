import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1709717676~exp=1709718276~hmac=e5e50801fa56d9bf5560017600aec71eec2229dcc0a801e53093de9259548a94'
                            alt="user avatar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>Gaurav Fate</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default Conversation