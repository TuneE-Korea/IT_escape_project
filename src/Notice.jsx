"use client";
import { CameraOff, MessageSquareOff, Skull, TimerOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Notices = () => {
  return (
    <section>
      <div className="container mx-auto my-40 flex flex-col items-center justify-center">
        <motion.div
          className="bg-amber-300 p-5 mb-20 flex flex-col items-center"
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, -15, 15, -15, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <h3 className="text-5xl text-center font-bold">NOTICE</h3>
          <span className="text-xl text-center ">주의사항</span>
        </motion.div>
        <div className="flex justify-between gap-10">
          <motion.article
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <TimerOff size={100} />
            <h5>10분전 도착</h5>
            <p>예약시간 10분전에 도착해주세요.</p>
          </motion.article>

          <motion.article
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <MessageSquareOff size={100} />
            <h5>누설금지</h5>
            <p>아직 체험하지 않는 분들이 계시기에 스포금지 요청드립니다.</p>
          </motion.article>
          <motion.article
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <CameraOff size={100} />
            <h5>사진촬영금지</h5>
            <p>컨셉 저작권으로 인하여 촬영 금지합니다.</p>
          </motion.article>
          <motion.article
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <Skull size={100} />
            <h5>위험물품 반입금지</h5>
            <p>고객의 안전을 위해서 위험물품은 금지합니다.</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Notices;
