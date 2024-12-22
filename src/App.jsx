import React from 'react'
import 'tailwindcss/tailwind.css'
const App = () => {
  return (

<body className='bg-white dark:bg-gray-900  ' >
  <header>
    <nav className='flex  ' >
      <img  className='h-[80px] mt-[10px] rounded-[10%] '  src="./src/assets/images/logo.jpg" alt="" />
      <ul className='flex gap-[35px]  mt-[25px] text-[gray] ml-[600px] ' >
        <li className='hover:text-white  cursor-pointer ' >Features</li>
        <li className='hover:text-white  cursor-pointer ' >Solution</li>         
        <li className='hover:text-white  cursor-pointer ' >Reviews</li>
        <li className='hover:text-white font-bold cursor-pointer ' >Premium</li>
      </ul>
      <button className='   mt-[25px] ml-[10px] rounded-full bg-[gray]  mb-[50px] pl-[5px] pr-[5px] text-orange-300 ' >new</button>
      <button className='   mt-[15px] ml-[20px] rounded-full bg-purple-600  mb-[45px]  pl-[10px] pr-[10px] text-white ' >Get started</button>
    </nav>
  </header>
  <div className='ml-[400px] mt-[50px] ' >
    <p className='text-white text-[50px] font-bold ' >Shaping a world with <br/>  <span className='ml-[70px]' >reimagination.</span> </p>
  </div>
  <div>
    <p className='text-white text-[20px] ml-[200px] mt-[20px] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit <br /> <span className='ml-[70px]' >illum.  Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</span>  </p>
  </div>
  <div className='ml-[540px] mt-[20px] flex ' >
    <button className='bg-purple-600 text-white rounded-full pt-[10px] pb-[10px] pl-[10px] pr-[10px] '>Get started</button>
    <button className='ml-[20px]   text-white  bg-gray-700 rounded-full pt-[10px] pb-[10px] pl-[10px] pr-[10px] ' >Learn more</button>
  </div>
  <hr className='mt-[50px] ml-[250px] mr-[250px] ' />
  <div className='flex ml-[250px] mt-[40px] ' >
<div className='flex flex-col' >
  <p className='text-white text-[20px] font-bold ' >The lowest price</p>
  <p className='   mt-2 text-gray-500 ' >Some text here</p>
</div>
<div className='flex flex-col ml-[125px] ' >
  <p className='text-white text-[20px] font-bold ' >The fastest on the market</p>
  <p className='   mt-2 text-gray-500 ' >Some text here</p>
</div>
<div className='flex flex-col ml-[100px] ' >
  <p className='text-white text-[20px] font-bold ' >The most loved  </p>
  <p className='   mt-2 text-gray-500 ' >Some text here</p>
</div>
  </div>
  <hr className='mt-[50px] ml-[250px] mr-[250px]  mb-[50px] '  />

<div className='flex ml-[200px]  ' >
<div className=' grayscale transition flex  hover:grayscale-0' >
  <img className='h-12 ml-[50px] ' src="./src/assets/images/microsift.jpg" alt="" />
</div>
<div className=' grayscale transition flex  hover:grayscale-0' >
  <img className='h-12 ml-[50px] ' src="./src/assets/images/airbnb.png" alt="" />
</div>
<div className=' grayscale transition flex  hover:grayscale-0' >
  <img className='h-12 ml-[50px] ' src="./src/assets/images/google.png" alt="" />
</div>
<div className=' grayscale transition flex  hover:grayscale-0' >
  <img className='h-[50px] ml-[50px] ' src="./src/assets/images/netflix.jpg" alt="" />
</div>
<div className=' grayscale transition flex  hover:grayscale-0' >
  <img className='h-12 ml-[50px] mt-[20px] ' src="./src/assets/images/cloud.png" alt="" />
</div>
</div>


</body>

  ) 
}

export default App