import Header from "@/components/Header";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import CartContextProvider from "@/components/CartContextProvider";
import Toast from "@/components/Toast";

export const metadata = {
  title: "Sneakers Online Store",
  description: "Rock your sneaker game",
};

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kumbhSans.className}>
      <body>
        <CartContextProvider>
          <Header />
          <main>{children}</main>
          <Toast />
        </CartContextProvider>
      </body>
    </html>
  );
}
