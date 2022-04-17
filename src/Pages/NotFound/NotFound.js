import React from 'react'

const NotFound = () => {
  return (
    <section className='container'>
      <div className='cols-12'>
        <div>
          <h3 className='mt-5 text-center text-danger'>
            Error 404
          </h3>
          <h1 className='text-secondary text-center'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='m-3  text-center'>
            You might have the wrong address, or the page may have moved.
          </p>
        </div>
        <div>
          <div className='w-50 mx-auto rounded-lg'>
            <img className='w-100'
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
