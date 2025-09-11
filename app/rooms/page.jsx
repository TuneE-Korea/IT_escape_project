import { data } from "@/dummy/data";
import Room from "@/Room";

const Page = () => {
  return (
    <section className="bg-[#00083046] py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl text-white text-center mb-4">
          당신의 코딩력, 컴퓨팅사고력, 디버깅 능력은?
        </h2>
        <p className="text-center text-white">
          IT_ESCAPE는 참가자가 실제 상황을 방불케 하는 특별한 테마 룸에 갇힌 채
          60분 이내에
          <br />
          주어진 미션을 해결하여 탈출해야하는 신개념 문화/여가 시설입니다.
        </p>
        <div className="flex gap-10">
          {data.map((v, i) => (
            <Room key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
