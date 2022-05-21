import React from 'react'

const MessageInput = () => {
    return(
        <div className='message-input'>
            <h3>Send Message</h3>
            <br/>
            <div className='input-form'>
                <input id='name' className='form-control' placeholder='name'/>
                <textarea id='message' className='form-control' placeholder='Your Message'></textarea>
                <button id='send' className='btn btn-success'>Send</button>
            </div>
        </div>
    )
}

export default MessageInput