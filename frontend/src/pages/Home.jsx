import { motion } from "motion/react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="mainContainer w-full h-screen flex flex-col space-y-6 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="headingText"
      >
        <h1 className="text-6xl font-semibold">Buy Less. Choose Better.</h1>
      </motion.div>

      <Button buttonName={"View All Product"} />
    </div>
  );
}
