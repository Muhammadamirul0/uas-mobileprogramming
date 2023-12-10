import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findCategoryAsync } from "../../redux/services/categorys";
import { findCategory } from "../../redux/actions/categorys";
import HeaderComponent from "../../components/header-components/HeaderComponent";
import { Card, Col, Container, Row } from "react-bootstrap";

function CategoryDetailPage() {
    const category = useSelector((state) => state.categorys.category);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const res = await findCategoryAsync(id);
        dispatch(findCategory(res));

        console.log('category')
        console.log(category)
    };

    return (
    <Fragment>
        <HeaderComponent />
        <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="6">
                <Card>
                    <Card.Img variant="top" src={ category?.image_url } />
                    <Card.Body>
                        <Card.Title>{ category?.name }</Card.Title>
                        <Card.Text>
                            { category?.description }
                        </Card.Text>
                        <Card.Text>
                            { category?.price }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    </Fragment>
);
}

export default CategoryDetailPage;