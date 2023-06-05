import React from "react";
import Image from "next/image";
import {
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  CogIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <>
      <div className="h-16 md:pl-32 md:fixed bg-stellar-primary-color w-full flex items-center justify-between pr-5 shadow-xl z-50">
        <div className="flex md:space-x-5 ml-auto">
          <div className="flex items-center text-white">
            <h3 className="font-bold mr-3 md:block ">
              Santana Developer
            </h3>
            <Image
              src="https://avatars.githubusercontent.com/u/48597174?v=4"
              width="36"
              height="36"
              style={{ objectFit: "cover" }}
              className="rounded-full "
              alt={""}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 bg-white  mb-2">
        <ul className="flex gap-3">
          <li className="flex flex-col justify-center items-center  bg-stellar-primary-color text-white p-2">
            <RectangleGroupIcon className="w-5 h-5 " />
            <span>Quadros</span>
          </li>
          <li className="flex flex-col justify-center items-center text-stellar-primary-color">
            <CalendarDaysIcon className="w-5 h-5" />
            <span>Calendário</span>
          </li>
          <li className="flex flex-col justify-center items-center text-stellar-primary-color">
            <CogIcon className="w-5 h-5" />
            <span>Administração</span>
          </li>
          <li className="flex flex-col justify-center items-center text-stellar-primary-color">
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span>Sair</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopBar;
