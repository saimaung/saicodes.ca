"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const expertises = [
  {
    num: '01',
    title: "Data Platform",
    description: "I've experiences building scalable and secure enterprise data platforms for ML/AI solutions since 2016.",
    href: "",
  },
  {
    num: '02',
    title: "Data Engineering",
    description: "I've experiences building high-performance ETL pipelines for ML/AI solutions, favoring Parquet over CSV, dynamic partitioning, and optimized Spark params.",
    href: "",
  },
  {
    num: '03',
    title: "Infrastructure",
    description: "I've experiences in infrastructure and cloud engineering ranging from application deployment on Kubernetes, infrastructure automation on major cloud providers, and CI/CD pipelines.",
    href: "",
  },
  {
    num: '04',
    title: "Architect",
    description: "I have experiences in architecting projects from scratch and implementing the design in code by leading the team to deliver the product.",
    href: "",
  },
  {
    num: '05',
    title: "ML/AI",
    description: "I enjoy building ML/AI solutions. Projects include local co-pilot, building Neural Network and training them in PyTorch, and fine-tuning LLMs.",
    href: "",
  },
  {
    num: '06',
    title: "Web Development",
    description: "I enjoy designing and building web applications in Figma, Reactjs, Nextjs, Framer Motion and Tailwindcss.",
    href: "",
  },
]

const Expertises = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {
            expertises.map((expertise, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-center gap-6 group"
                  >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"> { expertise.num } </div>
                    <Link
                      href={expertise.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  <h2
                    className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                    >
                      { expertise.title }
                  </h2>
                  <p className="text-white/60">{ expertise.description }</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Expertises
