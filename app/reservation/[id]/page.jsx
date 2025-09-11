"use client";
import { data } from "@/dummy/data";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const time = searchParams.get("time");
  const date = searchParams.get("date");

  // 2025/9/9
  const [newYear, newMonth, newDate] = date.split("/");
  const processedMonth =
    0 < +newMonth && +newMonth < 10 ? "0" + newMonth : newMonth;
  const processedDate = 0 < +newDate && +newDate < 10 ? "0" + newDate : newDate;

  const { id } = useParams();
  const { title } = data.find((v) => v.id == +id);

  const [participants, setParticipants] = useState(2);
  const change = (e) => {
    setParticipants((prev) => e.target.value);
  };

  const isNotTime = isNaN(+time.split(":")[0]);
  const isNotOperationTime = !(
    7 < +time.split(":")[0] && +time.split(":")[0] <= 23
  );

  const [nowTime] = new Date().toISOString().split("T");
  const [nowYear, nowMonth, nowDate] = nowTime.split("-");
  // const isFutrue = +nowYear <= newYear && +nowMonth <= newMonth && +nowDate <= newDate;
  if (isNotTime || isNotOperationTime)
    return <div>⛔ 잘못된 예약 요청입니다.</div>;

  return (
    <section>
      <div className="container mx-auto py-10 flex flex-col gap-10">
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            테마명
          </label>
          <input
            disabled
            value={title}
            className="border border-slate-500"
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            예약날짜
          </label>
          <input
            disabled
            value={newYear + "-" + processedMonth + "-" + processedDate}
            className="border border-slate-500"
            type="date"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            예약시간
          </label>
          <input
            disabled
            value={time}
            className="border border-slate-500"
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            예약자
          </label>
          <input className="border border-slate-500" type="text" />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            연락처
          </label>
          <input
            placeholder="01012341234"
            className="border border-slate-500"
            type="tel"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            인원
          </label>
          <select className="border" onChange={change}>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명</option>
            <option value="6">6명</option>
          </select>
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            결제 금액
          </label>
          <span>{+participants * 25000}</span>
        </div>
      </div>
    </section>
  );
};

export default Page;
