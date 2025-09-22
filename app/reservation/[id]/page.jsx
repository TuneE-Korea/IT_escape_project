"use client";
import { data } from "@/dummy/data";
// next 14버전 이후부터는 app 라우터 사용시 useRouter를 /router에서 import 하는 것이 아니라 /navigation에서 해야한다!
// 아니면 mount 에러남.
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  // next의 router 컴포넌트
  const router = useRouter();
  const searchParams = useSearchParams();
  const time = searchParams.get("time");
  const date = searchParams.get("date");

  // 2025/9/9
  const [newYear, newMonth, newDate] = date.split("/");
  // 1~9월, 1~9일은 앞에 0을 붙여준다.
  const processedMonth =
    0 < +newMonth && +newMonth < 10 ? "0" + newMonth : newMonth;
  const processedDate = 0 < +newDate && +newDate < 10 ? "0" + newDate : newDate;

  const { id } = useParams();
  const { title } = data.find((v) => v.id == +id);

  const [participants, setParticipants] = useState(2);
  const membersChange = (e) => {
    setParticipants((prev) => e.target.value);
  };

  // 시간의 입력 형식이 맞지 않는 경우 체크
  const isNotTime = isNaN(+time.split(":")[0]);
  // 예약 가능한 시간대는 8시부터 23시까지로 설정
  const isNotOperationTime = !(
    7 < +time.split(":")[0] && +time.split(":")[0] <= 23
  );
  // DATE 객체 활용! new Date().toISOString() 이걸 쓰면 '2025-09-14T12:08:48.687Z' 같은 양식으로 반환해줌.
  const [nowTime] = new Date().toISOString().split("T");
  // const [nowYear, nowMonth, nowDate] = nowTime.split("-");
  // 다음 연도, 다음 월인 경우 아래와 같은 로직을 쓰면 안돼서 일단 주석처리.
  // const isFutrue = +nowYear <= newYear && +nowMonth <= newMonth && +nowDate <= newDate;

  if (isNotTime || isNotOperationTime)
    return <div>⛔ 잘못된 예약 요청입니다.</div>;

  // [중요!] State로 다른 컴포넌트의 입력값 가지고 오기
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const valueChange = (e, targetName) => {
    if (targetName == "name") {
      setName((prev) => e.target.value);
    } else if (targetName == "phone") {
      setPhone((prev) => e.target.value);
    }
  };
  const send = () => {
    if (name == "" || phone == "") {
      alert("예약자 또는 연락처 입력란이 비어있습니다. 채워주세요!");
    } else {
      const data = {
        id,
        title,
        date: newYear + "-" + processedMonth + "-" + processedDate,
        time,
        name,
        phone,
        participants,
        price: participants * 25000,
      };
      // 프론트 -> 백으로 보내는 법 ; fetch
      fetch("http://localhost:3001/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((v) => v.json())
        .then((v) => {
          if (v.msg != "Created") {
            alert("안 만들어짐");
          } else {
            alert("예약되었습니다.");
            router.back();
          }
        });
    }
  };

  return (
    <section>
      <div className="container mx-auto px-5 py-10 flex flex-col gap-10">
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
          <input
            onChange={(e) => valueChange(e, "name")}
            className="border border-slate-500"
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            연락처
          </label>
          <input
            onChange={(e) => valueChange(e, "phone")}
            placeholder="01012341234"
            className="border border-slate-500"
            type="tel"
          />
        </div>
        <div className="flex gap-10">
          <label className="font-bold" htmlFor="">
            인원
          </label>
          <select className="border" onChange={membersChange}>
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
          <span>{`${participants * 25000}원`}</span>
        </div>
        <button
          onClick={send}
          className="bg-amber-200 w-fit border-0 rounded-md p-3"
        >
          결제하기
        </button>
      </div>
    </section>
  );
};

export default Page;
