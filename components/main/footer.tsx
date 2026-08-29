import Link from "next/link";

import { FOOTER_CONTACTS } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 border-t border-purple-500/20 px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-purple-300">
          Contact Me
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {FOOTER_CONTACTS.map(({ link, name, label, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target={link.startsWith("tel:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-full border border-purple-500/30 bg-[#030014]/60 px-5 py-3 hover:border-purple-400/70 hover:bg-purple-500/10 transition"
            >
              <Icon className="h-5 w-5 text-purple-300" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-400">{name}</span>
                <span className="text-sm text-white font-medium tracking-wide" dir="ltr">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-[14px] text-center text-gray-400">
          &copy; Kareem Zedan {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};
