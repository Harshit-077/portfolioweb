import Navbar from "./navbar/navbar";
import About from "./Home/about";
import "./globals.css";
import Footer from "./end/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}