import React from 'react';

function TextArea(props) {
  return (
    <textarea
      {...props}
      className={`${props.className} w-full h-full bg-[#FFFFFF] placeholder:text-[#030F0F] placeholder:text-[12px] placeholder:font-[400] 
       border-[1px] border-[#D5DAE1]  rounded-[7.98px] p-[11.98px] outline-none`}

    />
  );
}

export default TextArea;
