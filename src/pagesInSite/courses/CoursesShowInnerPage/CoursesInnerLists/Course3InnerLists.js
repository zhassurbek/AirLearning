import React, {useState} from "react";
import {Button, Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Col, Container} from "reactstrap";
import CourseCard from "../../coursesList/CourseCard";

// PAGE /course/02

const lessonsData = [
    {
        title: "Lesson 1. ANALOG AND DIGITAL DATA CONVERSIONS",
        description: "...",
        quizTitle: "Тест по уроку 1",
        quizDescription: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
    {
        title: "Lesson 2. ANALOG TO DIGITAL AND DIGITAL TO ANALOG CONVERSIONS",
        description: "...",
        quizTitle: "Тест по уроку 2",
        quizDescription: "...",
        image: "",
        lessonTitle: "",
        youtubeLink: "",
        fullDescriptionText: "",
    },
];

const Course1InnerInMainPage = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleOnClick = () => {
        setIsCompleted(true);
    };
    {
        lessonsData.map((itemLessonsData) => (
            <Col lg="4" md="6" sm="6">
                <CourseCard key={itemLessonsData.id} itemLessonsData={itemLessonsData}/>
            </Col>
        ))
    }

    return (
        <Container>
            <section>
                <ListGroup>
                    {lessonsData.map((course, index) => (
                        <ListGroup.Item key={index}>
                            <Card>
                                <Card.Img variant="top" src={course.image}/>
                                {/*для блока информации про урок(title, description)*/}
                                <Card.Body style={{border: '1px solid #f5f5f5', margin: '3px', borderRadius: '7px'}}>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>
                                    {!isCompleted && (
                                        <Link to={`/lesson/0${index + 8}`}>
                                            <Button>Перейти</Button>
                                        </Link>
                                    )}
                                </Card.Body>

                                {/*for test блока*/}
                                {/*<Card.Body style={{border: '1px solid #f5f5f5', margin: '3px', borderRadius: '7px'}}>*/}
                                {/*    <Card.Title>{course.quizTitle}</Card.Title>*/}
                                {/*    <Card.Text>{course.quizDescription}</Card.Text>*/}
                                {/*    {!isCompleted && (*/}
                                {/*        <Link to={`/lesson/quiz/0${index + 1}`}>*/}
                                {/*            <Button>Пройти</Button>*/}
                                {/*        </Link>*/}
                                {/*    )}*/}
                                {/*</Card.Body>*/}
                            </Card>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </section>
        </Container>
    );
};

export default Course1InnerInMainPage;