import Link from "next/link";

const experiences = [
  {
    time: "March 2024 - Current",
    company: {
      name: "Octet Turkey",
      url: "https://www.octet.com",
      title: "Specialist Frontend Developer",
    },
    description:
      "I joined Octet Turkey as a Specialist Frontend Developer. Here, I focused on developing user-friendly and interactive interfaces using modern web technologies in the financial technology field.",
  },
  {
    time: "May 2023 - March 2024 · 11 Month",
    company: {
      name: "ParamTech",
      url: "https://param.eu",
      title: "Junior Frontend Developer",
    },
    description:
      "My first step into Frontend Developer carrer. I worked on developing project called 'BackOffice'. Project mainly focuses internal staff needs. I learned a lot about React.js and Next.js during this time. I also had the opportunity to work with a great team.",
  },
  {
    time: "June 2022 - May 2023 · 1 Year",
    company: {
      name: "Istinye University",
      url: "https://www.istinye.edu.tr/en",
      title: "Web Developer",
    },
    description:
      "Shortly before graduation, I started working as a Web Developer at my university. During this time, while maintaining the university&apos;s needs, I also began learning React and successfully completed courses provided by Meta, earning certificates.",
  },
  {
    time: "March 2022 - June 2022 · 4 Month",
    company: {
      name: "Finartz",
      url: "https://finartz.com",
      title: "Intern",
    },
    description: "I joined Finartz for my university internship program.",
  },
];

export default function Home() {
  return (
    <main>
      <article>
        <div className="text-center sm:text-left">
          <p className="mb-5 text-md sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            Hey👋 I&apos;m a frontend developer based in Turkey, Istanbul.
          </p>

          <p className="mb-5 text-md sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            I develop things as a Specialist Frontend Developer at{" "}
            <span className="font-extrabold">Octet Turkey</span>. Previously, I
            worked as a Junior Frontend Developer at{" "}
            <span className="font-extrabold">ParamTech</span>.
          </p>

          <p className="mb-5 text-md sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            I enjoy working with{" "}
            <span className="font-extrabold">React.js</span> &{" "}
            <span className="font-extrabold">Next.js</span> and crafting
            beatiful frontend experiences.
          </p>
        </div>
      </article>

      <hr />

      <div className="my-5">
        <h1 className="mb-5 text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center sm:text-left">
          Experience
        </h1>

        <ol className="relative border-s border-black">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-black"></div>
              <time className="mb-1 text-sm md:text-md lg:text-xl font-normal leading-none text-gray-500">
                {experience.time}
              </time>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold">
                <Link
                  className="relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  href={experience.company.url}
                  target="_blank"
                >
                  {experience.company.name}
                </Link>{" "}
                - {experience.company.title}
              </h3>
              <p className="mb-4 text-md md:text-lg lg:text-xl font-normal text-gray-700">
                {experience.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
