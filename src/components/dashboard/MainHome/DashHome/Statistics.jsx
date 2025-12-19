import Image from "next/image";
import React from "react";

const statistics_data = [
    {
        id:1,
        image:"/images/dash/buliding.svg",
        title:"Balance",
        titleColor:"text-[#0A0A1F]",
        num:"1200 $",
        desc:"+ 2 from yasterday",
        descColor:"text-[#2DCA72]",
        numColor:"text-(--main-dark-color)",
    },
    {
        id:2,
        image:"/images/dash/buliding-2.svg",
        title:"New orders",
        titleColor:"text-(--main-orange-color)",
        num:"08",
        numColor:"text-(--main-dark-color)",
        desc:"Next 24 h",
        descColor:"text-[#76767B]"
    },
    {
        id:3,
        image:"/images/dash/buliding-2.svg",
        title:"Finiched orders",
        titleColor:"text-[#2DCA72]",
        num:"08",
        numColor:"text-(--main-dark-color)",
        desc:"Next 24 h",
        descColor:"text-[#76767B]"
    },
    {
        id:4,
        image:"/images/dash/buliding-2.svg",
        title:"guest reviews",
        titleColor:"text-[#2DCA72]",
        num:"08",
        numColor:"text-(--main-dark-color)",
        desc:"Next 24 h",
        descColor:"text-[#76767B]"
    },
    {
        id:5,
        image:"/images/dash/buliding-5.svg",
        title:"Ads & promo",
        titleColor:"text-[#2DCA72]",
        num:"08",
        numColor:"text-(--main-dark-color)",
        desc:"Next 24 h",
        descColor:"text-[#76767B]"
    },
]

export default function Statistics() {
  return (
    <div className="grid grid-cols-5 mt-3 gap-2 items-center">
      {statistics_data.map(item => <div key={item.id} className="items-start shadow-[0px_4px_24px_0px_#0000000F]  h-[120px] p-3 rounded-2xl bg-white flex  gap-3 justify-between">
      <Image src={item.image} alt={item.title} width={42} height={42} />
      <div className="flex flex-col gap-1">
        <p className={`whitespace-nowrap text-base font-medium ${item.titleColor}`}>{item.title}</p>
        <p className={`whitespace-nowrap text-[24px] font-bold ${item.numColor}`}>{item.num}</p>
        <p className={`whitespace-nowrap text-sm font-medium ${item.descColor}`}>{item.desc}</p>
      </div>
      <div></div>
     </div>)}

    </div>
  );
}
