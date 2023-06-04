import React from "react";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";
import {
  ChatBubbleBottomCenterTextIcon,
  EllipsisHorizontalIcon,
  PaperClipIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

type TaskProps = {
  data: {
    id: string;
    label: string;
    title: string;
    messages: string[];
    attachments: number;
    members: {
      avatar: string;
      name: string;
    }[];
  };
  index: number;
};

function CardItem({ data, index }: TaskProps) {
  const { label, title, messages, attachments, members } = data;

  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 mt-3 border-solid border-2 border-purple-200 shadow-md"
        >
          <div className="flex justify-between">
            <label className="bg-purple-700 px-2 py-1 rounded text-white text-sm">
              {label}
            </label>
            <div className="group relative flex justify-center">
              <button className="">
              <TrashIcon className="w-5 h-5 text-gray-500" />
              </button>
              <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                ✨ You hover me!
              </span>
            </div>
          </div>

          <h5 className="my-3 text-lg leading-6">{title}</h5>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-gray-500" />
                <span>{messages.length}</span>
              </span>
              <span className="flex space-x-1 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span>{attachments}</span>
              </span>
            </div>

            <ul className="flex space-x-2">
              {members.map((member, key) => {
                return (
                  <li key={key}>
                    <Image
                      src={member.avatar}
                      width="36"
                      height="36"
                      style={{ objectFit: "cover" }}
                      className=" rounded-full "
                      alt={""}
                    />
                  </li>
                );
              })}
              <li>
                <button
                  className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                >
                  <UserPlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CardItem;
