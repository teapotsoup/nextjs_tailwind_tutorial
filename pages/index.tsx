import type { NextPage } from "next";
import Form from "./form";
import Indexpack from "./indexpack";
import Animation from "./animation";


const Home: NextPage = () => {
  return (
    //다양한 태그에 애니메이션 적용+중첩 적용
    <Animation></Animation>

    //폼에 관한 테일윈드 css
    // <Form></Form>

    //테일윈드 튜토리얼 페이지
    //<Indexpack></Indexpack>
  );
};

export default Home;
