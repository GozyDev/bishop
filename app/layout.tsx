import { ReactNode } from "react";
import {Poppins} from 'next/font/google'
import '@/app/globals.css'
import Header from "@/app/component/header/header";
const poppins = Poppins({weight:["100",'400','700'],subsets:['latin']})
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head></head>
      <body className={poppins.className}>
      <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
