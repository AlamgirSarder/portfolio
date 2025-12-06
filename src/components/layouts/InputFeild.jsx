import React from 'react'

const InputFeild = ({label}) => {
  return (
    <div>
         <div className="relative">
                    <input
                      type="text"
                      id="feild_id"
                      className="block w-[300px] px-[26px] py-[26px] text-xl text-[#B4AFC6] font-primary font-semibold rounded-lg border border-primary appearance-none focus:outline-none focus:border-white peer shadow-lg shadow-primary/10"
                      placeholder=" "
                    /> 
                    <label
                      for="feild_id"
                      className="absolute text-base text-[#B4AFC6] duration-300 transform  top-2 -translate-y-4  bg-basecolor px-4 left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0"
                    >
                      {label}
                    </label>
                  </div>
    </div>
  )
}

export default InputFeild