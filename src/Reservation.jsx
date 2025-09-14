import { Key } from "lucide-react";
import Image from "next/image";
import ReservationButton from "./ReservationButton";

const Reservation = (props) => {
  const makeTables = (startTime, endTime) =>
    Array(endTime - startTime + 1)
      .fill(0)
      .map((v, i) => ({ time: i + startTime + ":00", isReserved: false }));

  return (
    <article className="flex gap-20 border border-cyan-700 rounded-2xl p-10">
      <picture className="relative flex-2 w-full h-[600px]">
        <Image
          src={props.image}
          alt={""}
          priority
          fill
          className="object-cover rounded-md"
        />
      </picture>
      <div className="flex flex-3 flex-col gap-10">
        <strong>{props.title}</strong>
        <span className="flex gap-1">
          난이도:{" "}
          {Array(props.keys)
            .fill(0)
            .map((v, i) => (
              <Key key={i} />
            ))}
        </span>
        <div className="grid grid-cols-3 gap-10">
          {makeTables(props.startTime, props.endTime).map((v, i) => (
            <ReservationButton key={i} {...v} id={props.id} date={props.date} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Reservation;
