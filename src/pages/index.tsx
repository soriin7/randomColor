import { type NextPage } from "next";
import { ColorBox } from "../components/ColorBox";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col m-auto justify-center h-screen items-center ">
        <ColorBox />
      </div>
    </>
  );
};

export default Home;
