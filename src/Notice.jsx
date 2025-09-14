import { CameraOff, MessageSquareOff, Skull, TimerOff } from "lucide-react";

const Notices = () => {
  return (
    <section>
      <div className="container mx-auto py-40 flex flex-col items-center justify-center">
        <h3 className="text-5xl text-center font-bold">NOTICE</h3>
        <span className="text-xl text-center mb-30">주의사항</span>
        <div className="flex justify-between gap-10">
          <article className="flex flex-col items-center">
            <TimerOff size={100} />
            <h5>10분전 도착</h5>
            <p>예약시간 10분전에 도착해주세요.</p>
          </article>
          <article className="flex flex-col items-center">
            <MessageSquareOff size={100} />
            <h5>누설금지</h5>
            <p>아직 체험하지 않는 분들이 계시기에 스포금지 요청드립니다.</p>
          </article>
          <article className="flex flex-col items-center">
            <CameraOff size={100} />
            <h5>사진촬영금지</h5>
            <p>컨셉 저작권으로 인하여 촬영 금지합니다.</p>
          </article>
          <article className="flex flex-col items-center">
            <Skull size={100} />
            <h5>위험물품 반입금지</h5>
            <p>고객의 안전을 위해서 위험물품은 금지합니다.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Notices;
