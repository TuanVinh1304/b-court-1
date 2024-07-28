import React from 'react'
import {FaRegCalendarMinus } from 'react-icons/fa'

const Main = () => {
  return (
            <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>DashBoard</h1>
            <button className='bg-[#2E59D9] h-[32px] rounded-[32px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
          </div>

          <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
              <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                  <div>
                      <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNiNGS (MONTHLY)</h2>
                  <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40.000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div>
              
              <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                  <div>
                      <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNiNGS (MONTHLY)</h2>
                  <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40.000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div> 

              <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                  <div>
                      <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNiNGS (MONTHLY)</h2>
                  <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40.000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div> 

              <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                  <div>
                      <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNiNGS (MONTHLY)</h2>
                  <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40.000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div> 
          </div>
<div className='grid grid-cols-10'>
              <div  className="col-span-10 md:col-span-7">
                  <div className='flex mt-[22px] w-full gap-[30px]'>
              <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                  <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed] mb-[20px]'>
                      <h2>Earnings Overviews</h2>   
                      <FaEllipsisV color='gray' className='cursor-pointer' />
                  </div>
                  <div>
                      <LineChart
          width={950}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
                  </div>
              </div>
          </div>
              </div>
              <div className="col-span-10 md:col-span-3">
                  <div className='basis-[30%] border bg-white shadow-mb cursor-pointer rounded-[4px]'>
              <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed]'>
                  <h2>Revenue Resouces</h2>
                  <FaEllipsisV color='gray' className='cursor-pointer' />
              </div>
              <div className='pl-[35px]'>
                  <PieComponent />
              </div>
          </div>
          </div>
          </div>
                        <div className='basis-[100%] border bg-white shadow cursor-pointer rounded-[4px]'>
                  <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#ededed]'>
                      <h2>Project Overviews</h2>
                      <FaEllipsisV color='gray' className='cursor-pointer' />
                  </div>
                  <div className='px-[25px] space-y-[15px] py-[15px]'>
                  <div>
                      <h2>Customer</h2>
                      <Progress percent={30} strokeColor='#e74a3b' />
                  </div>
                  <div>
                      <h2>Manage Court</h2>
                      <Progress percent={30} status='active' strokeColor='#f6c23e'/>
                  </div>
                  <div>
                      <h2>Court</h2>
                      <Progress percent={30} status='active' strokeColor='#f6c23e'/>
                  </div>
                  
                  </div>
              </div>
          
      </div>
      
  )
}

export default Main