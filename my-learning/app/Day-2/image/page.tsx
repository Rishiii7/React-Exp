import React from 'react'

const ImageGallery = () => {
  return (
    <div id="main" className='bg-purple-400 w-full h-screen p-[30px]'>
        <div id='container' className="w-full h-full m-auto flex flex-col overflow-auto">
            <img 
                src='/img1.png'
                className='object-fit h-full w-full sticky top-0'
            />
            <img 
                src='/img2.png'
                className='object-fit flex-shrink-0 h-full w-full sticky top-0'
            />
            <img 
                src='/img3.png'
                className='object-fit flex-shrink-0 h-full w-full sticky top-0'
            />
        </div>
        
    </div>
  )
}

export default ImageGallery;