"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({title, containerStyle, handleClick, btnType = "button"} : CustomButtonProps) => {
  return (
   <button
   disabled={false}
   type={btnType}
   className={`custom-btn ${containerStyle} `}
    onClick={handleClick}
   >
<span className={`flex-1`}>
{title}
</span>
   </button>

  )
}

export default CustomButton
