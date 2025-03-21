import { useRef } from "react";
import { motion } from "framer-motion";
import B1ND from "./components/B1ND";
import Finder from "./components/Finder";
import Footer from "./components/Footer";
import Introduce from "./components/Introduce";
import Iphone from "./components/Iphone";
import MEMOA from "./components/MEMOA";
import Skool from "./components/Skool";

function App() {
  const introduceRef = useRef<HTMLDivElement>(null);
  const b1ndRef = useRef<HTMLDivElement>(null);
  const memoaRef = useRef<HTMLDivElement>(null);
  const finderRef = useRef<HTMLDivElement>(null);
  const skoolRef = useRef<HTMLDivElement>(null);

  const handleTopIconClick = (name: string) => {
    if (name === "도담도담") {
      b1ndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "MEMOA") {
      memoaRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Finder") {
      finderRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Skool") {
      skoolRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-12 lg:p-20  min-h-screen">
      <motion.div
        className="w-full md:w-2/3 space-y-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          ref={introduceRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Introduce />
        </motion.div>

        <motion.div
          ref={b1ndRef}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <B1ND />
        </motion.div>

        <motion.div
          ref={memoaRef}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MEMOA />
        </motion.div>

        <motion.div
          ref={finderRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Finder />
        </motion.div>

        <motion.div
          ref={skoolRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skool />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block justify-center items-start mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Iphone onTopIconClick={handleTopIconClick} />
      </motion.div>
    </div>
  );
}

export default App;