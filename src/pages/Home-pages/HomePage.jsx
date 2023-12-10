import { Fragment, useEffect } from 'react';
import HeaderComponent from '../../components/header-components/HeaderComponent';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/services/products';
import { getProducts } from '../../redux/actions/products';
import ProductComponent from '../../components/product-components/ProductComponent';
import CategoryComponent from '../../components/category-components/CategoryComponent';
import { getCategoryAsync } from '../../redux/services/categorys';
import { getCategorys } from '../../redux/actions/categorys';

const HomePage = () => {
    const products = useSelector((state) => state.products.products);
    const categorys = useSelector((state) => state.categorys.categorys);
    const dispatch = useDispatch();

    useEffect(() => {
        handleGetProducts();
        handleGetCategorys();
    }, []);
    
    const handleGetCategorys = async () => {
        const res = await getCategoryAsync();
        dispatch(getCategorys(res));
    }

    const handleGetProducts = async () => {
        const res = await getProductsAsync();
        dispatch(getProducts(res));
    }

    return (
        <Fragment>
            <HeaderComponent />

            <Container>
                <div className='pb-4'>
                    <Image width={'100%'} src="https://img.ws.mms.shopee.co.id/6e27d30d8d898a631d758fb98cfd4b86" fluid />
                </div>
                <div>
                    <h4 align="center">Catergory Aero</h4>
                    <Row>
                       {
                            categorys.map((category, index) => (
                                <Col md="2" sm="6" key={index}>
                                    <CategoryComponent data={category} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div>
                    <h4 align="center">Product Aero</h4>
                    <Row>
                        {
                            products.map((product, index) => (
                                <Col md="2" sm="6" key={index}>
                                    <ProductComponent data={product} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </Fragment>
    )
}

export default HomePage;