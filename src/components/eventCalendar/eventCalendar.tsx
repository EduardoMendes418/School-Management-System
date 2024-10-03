"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  //TEMPORARY
  const events = [
    {
      id: 1,
      title: "Lorem1",
      time: "12:00 PM - 2:00PM",
      description: "teste1",
    },
    {
      id: 2,
      title: "Lorem2",
      time: "12:00 PM - 2:00PM",
      description: "teste2",
    },
    {
      id: 3,
      title: "Lorem3",
      time: "12:00 PM - 2:00PM",
      description: "teste3",
    },
  ];

  return (
    <div className="">
      <Calendar
        className="bg-white p-4 rounded-md"
        onChange={onChange}
        value={value}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/img/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-yellow-200 even:border-t-green-300"
            key={e.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <span className="text-gray-400 text-xs">{e.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
