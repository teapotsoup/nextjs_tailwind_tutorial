import type { NextPage } from "next";
import Indexpack from "../components/indexpack";
// import Form from "./form";
// import Indexpack from "../components/indexpack";
// import Animation from "../components/animation";

const Home: NextPage = () => {
  return (
    //테일윈드 튜토리얼 페이지
    <Indexpack></Indexpack>
    
    //다양한 태그에 애니메이션 적용+중첩 적용
    // <Animation></Animation>

    //폼에 관한 테일윈드 css
    // <Form></Form>
  );
};

export default Home;
