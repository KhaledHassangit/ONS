import React from 'react';

function Input(props) {
  return (
    <input
      {...props}
      className={`${props.className} w-full h-full bg-[#FFFFFF] placeholder:text-[#030F0F] placeholder:text-[12px] placeholder:font-[400] placeholder:leading-[100%] 
       border-[1px] border-[#D5DAE1] rounded-[7.98px] p-[11.98px] outline-none`}
    />
  );
}

export default Input;
