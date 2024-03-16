import React from "react";
import Link from "next/link";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const contact = [
  {
    type: "GitHub",
    url: "https://github.com/dufren",
    icon: <GithubIcon size={16} />,
  },
  {
    type: "Linkedin",
    url: "https://www.linkedin.com/in/ozgur-cokceken/",
    icon: <LinkedinIcon size={16} />,
  },
  {
    type: "Email",
    url: "mailto:ozgurcokckn@gmail.com",
    icon: <MailIcon size={16} />,
  },
];

const Header = () => {
  return (
    <header className="mb-8">
      <h1 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-extrabold text-center sm:text-left">
        Özgür Çokçeken
      </h1>
      <nav className="flex justify-center md:justify-end">
        <ul className="flex gap-4">
          {contact.map((item, idx) => (
            <Link
              className={`md:text-lg lg:text-xl transition-all duration-300 flex gap-1 items-center hover:bg-gray-200 px-2 py-1 rounded-md`}
              key={idx}
              href={item.url}
              target="_blank"
            >
              {item.icon}
              {item.type}
              <ArrowUpRight />
            </Link>
          ))}
        </ul>
      </nav>
      <hr className="my-5" />
    </header>
  );
};

export default Header;
