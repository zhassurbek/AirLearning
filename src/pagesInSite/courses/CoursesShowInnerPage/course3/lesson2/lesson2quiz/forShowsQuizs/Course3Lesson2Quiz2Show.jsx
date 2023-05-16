import React, {Fragment} from "react";
import Header from "../../../../../../../components/Header/Header";
import Course3Lesson2Test from "../Course3Lesson2Test";
import Footer from "../../../../../../../components/Footer/Footer";


// компонент для показа тестов на внутренной странице первого тест
// внутренняя страница первого теста

const Home = () => {
    return (<Fragment>
        <Header/>
        <div>
            <Course3Lesson2Test/>
        </div>

        <Footer/>
    </Fragment>);
};

export default Home;
