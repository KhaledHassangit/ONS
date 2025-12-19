import { Modal } from "antd";
import Image from "next/image";
import React from "react";

export default function AddsOneModal({ open, setOpen, data }) {
  console.log(data);
  return (
    <Modal
      width={800}
      onCancel={() => setOpen(false)}
      open={open}
      title={"Order details"}
      setOpen={setOpen}
      footer={null}
    >
      <div className="bg-[#F9F9F9] my-4 flex items-center gap-3 rounded-lg p-3 min-h-[109px]">
        <Image alt="soap" width={85} height={85} src={data?.image} />
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-medium text-[#0A0A1F]">
              {data?.title}
            </h4>
            <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
              <Image
                src="/images/clean-Calendar.svg"
                alt="date"
                width={16}
                height={16}
              />
              <span>{data?.date}</span>
            </p>
            <p className="text-sm font-normal flex gap-[6px] items-center text-[#4F617D]">
              <Image
                src="/images/Clock Circle.svg"
                alt="date"
                width={16}
                height={16}
              />
              <span> {data?.time}</span>
            </p>
          </div>
        </div>
      </div>

      <button className="bg-(--main-orange-color) flex justify-center items-center !ms-auto h-[48px] text-white rounded-xl p-[10px]">
        send your request
      </button>
    </Modal>
  );
}
