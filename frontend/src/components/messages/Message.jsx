import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src={'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1709717676~exp=1709718276~hmac=e5e50801fa56d9bf5560017600aec71eec2229dcc0a801e53093de9259548a94'}
                        alt="user avatar"
                    />
                </div>
            </div>

            <div className={'chat-bubble text-white bg-blue-500'}>Hi! What is uppp?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
        </div>
    )
}

export default Message