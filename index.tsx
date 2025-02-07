import Navbar from "@/components/Navbar/navbar";
import AuthBox from "@/components/AuthBox/AuthBox";
import "./Index.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <main>
        <AuthBox />
      </main>
    </div>
  );
}
