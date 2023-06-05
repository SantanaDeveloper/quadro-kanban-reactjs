"use client";

import {
  ArrowsUpDownIcon,
  UserPlusIcon,
  EllipsisHorizontalIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CardItem from "./components/Card/CardItem";
import MockQuadros from "../data/mock-quadro.json";
import MockUsers from "../data/mock-users.json";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [boardData, setBoardData] = useState(MockQuadros);

  useEffect(() => {
    // Perform localStorage action
    const boards = localStorage.getItem("@stellarjetz_boards");
    if (boards) {
      console.log("Entrou");
      setBoardData(JSON.parse(boards));
    } else {
      localStorage.setItem("@stellarjetz_boards", "");
      console.log("No Entrou");
    }
  }, []);

  //State do modal de inclusão de tasks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const item = {
      id: createGuidId(),
      title: data.titulo,
      label: "Novo",
      messages: [],
      attachments: 0,
      members: [],
    };

    let newBoardData = boardData;

    newBoardData[selectedBoard].items.push(item);
    setBoardData(newBoardData);
    setShowModal(false);
    reset();
  };

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  function createGuidId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  /**
   * Manipula o evento de arrastar e soltar, reorganizando os itens em uma lista.
   * @param {object} dragEvent - O objeto de evento de arrastar e soltar.
   */
  const onDragEnd = (dragEvent: any) => {
    if (!dragEvent.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(dragEvent.source.droppableId)].items[
        dragEvent.source.index
      ];
    newBoardData[parseInt(dragEvent.source.droppableId)].items.splice(
      dragEvent.source.index,
      1
    );
    newBoardData[parseInt(dragEvent.destination.droppableId)].items.splice(
      dragEvent.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const dropTask = (id: string) => {
    const selectedTask = id;
    let newBoardData = boardData;
    newBoardData = newBoardData.map((board) => ({
      ...board,
      items: board.items.filter((task) => task.id !== selectedTask),
    }));
    setBoardData(newBoardData);
  };

  return (
    <main className="pl-32 pt-16">
      <div className="p-10">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">
              Quadro StellarJetz
            </h4>
            <button className="w-9 h-9 ml-5">
              <ArrowsUpDownIcon className="text-gray-500 rounded-full p-2 bg-white shadow-xl" />
            </button>
          </div>

          <div>
            <ul className="flex space-x-2">
              {MockUsers.map((user, key) => {
                return (
                  <li key={key}>
                    <Image
                      src={user.avatar}
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
                <button className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full">
                  <UserPlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Colunas Do Quadro */}
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-5 my-5">
              {boardData.map((board, Bindex) => {
                return (
                  <div key={board.boardName}>
                    <Droppable droppableId={Bindex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-100 rounded-md shadow-md
                            flex flex-col relative overflow-hidden p-3
                            ${snapshot.isDraggingOver && "bg-purple-200"}`}
                          >
                            <span className="w-full h-1 bg-gradient-to-r from-purple-700 to-purple-400 absolute inset-x-0 top-0"></span>
                            <h4 className="flex justify-between items-center mb-2">
                              <span className="text-2xl text-gray-600">
                                {board.boardName}
                              </span>
                              <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
                            </h4>

                            {board.items.length > 0 &&
                              board.items.map((task, index) => {
                                return (
                                  <CardItem
                                    droptask={dropTask}
                                    data={task}
                                    index={index}
                                    key={task.id}
                                  />
                                );
                              })}
                            {provided.placeholder}
                            <button
                              onClick={() => {
                                setSelectedBoard(Bindex);
                                setShowModal(true);
                              }}
                              className="flex justify-start items-center mt-6 space-x-2 text-lg"
                            >
                              <PlusCircleIcon className="w-5 h-5 text-gray-500" />
                              <span>Adicionar Tarefa</span>
                            </button>
                            {showModal && selectedBoard === Bindex ? (
                              <>
                                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-2/6 my-6 mx-auto max-w-3xl">
                                    <div className="border-solid border-2 border-purple-200 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h4 className="flex justify-between items-center mb-2">
                                          <span className="text-2xl text-gray-600">
                                            Nova Tarefa
                                          </span>
                                        </h4>
                                        <button
                                          className="bg-transparent border-0 text-black float-right"
                                          onClick={() => setShowModal(false)}
                                        >
                                          <XMarkIcon className="w-5 h-5 text-gray-500" />
                                        </button>
                                      </div>
                                      <div className="relative p-6 flex-auto">
                                        <form
                                          onSubmit={handleSubmit(onSubmit)}
                                          className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                                        >
                                          <label className="block text-black text-sm font-bold mb-1">
                                            Título
                                          </label>
                                          <input
                                            {...register("titulo", {
                                              required: true,
                                            })}
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                          />
                                          {errors.titulo && (
                                            <span className="text-red-700">
                                              O título é obrigatório
                                            </span>
                                          )}
                                        </form>
                                      </div>
                                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Cancelar
                                        </button>
                                        <button
                                          className="text-white bg-purple-600 active:bg-purple-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                          type="button"
                                          onClick={handleSubmit(onSubmit)}
                                        >
                                          Adicionar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </main>
  );
}
