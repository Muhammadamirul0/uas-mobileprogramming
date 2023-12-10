import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import HeaderComponent from "../../components/header-components/HeaderComponent";
import CategoryReduxCreateDialogComponent from "../../components/category-redux-dialog-components/CategoryFormReduxDialogComponent";
import { Container, Card, Button, Table, Row, Col, Image, Form } from "react-bootstrap";
import { deleteCategory, findCategory, getCategorys, titleCategory } from "../../redux/actions/categorys";
import { deleteCategoryAsync, findCategoryAsync, getCategoryAsync } from "../../redux/services/categorys";

function CategoryReduxDialogPage() {
  const [isOpen, setIsOpen] = useState(false);
  const categorys = useSelector((state) => state.categorys.categorys);
  const dispatch = useDispatch();
  const [formSearch, setFormSearch] = useState({
    name: ''
  });
  
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setFormSearch({
      ...formSearch,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    const res = await getCategoryAsync(formSearch);
    dispatch(getCategorys(res));
  };

  useEffect(() => {
    handleGetCategorys();
  }, []);
  
  const handleGetCategorys = async () => {
    const res = await getCategoryAsync();
    dispatch(getCategorys(res));
  }
  
  const handleDeleteCategory = async ( categoryId ) => {
    await deleteCategoryAsync(categoryId);
    dispatch(deleteCategory({ id: categoryId }));
    Swal.fire("Berhasil", "Data berhasil dihapus");
  };

  const handleFormAddOpen = () => {
    dispatch(findCategory(null));
    dispatch(titleCategory('Create Category'))
    setIsOpen(true);
  }

  const handleFormEditOpen = async (categoryId = null) => {
    const res = await findCategoryAsync(categoryId);
    dispatch(findCategory(res));
    dispatch(titleCategory('Edit Category'))
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <HeaderComponent />
      <Container className="pt-3">
        <Row>
          <Col xl="6">
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                placeholder="Search by name"
                value={formSearch.name}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
          <Col xl="3">
            <Button onClick={handleSearch}>Search</Button>
          </Col>
          <Col style={{textAlign: 'right'}} xl="3">
            <Button onClick={handleFormAddOpen}>Create</Button>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xl="12">
            <CategoryReduxCreateDialogComponent
              isOpen={isOpen}
              onClose={handleFormClose}
              />

            <Card>
              <Card.Header>List Category</Card.Header>
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Deskripsi</th>
                      {/* <th>Price</th>
                      <th>stock</th> */}
                      <th>Gambar</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorys.map((category, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        {/* <td>{category.price}</td>
                        <td>{category.stock}</td> */}
                        <td><Image src={category.image_url} width={'100px'} fluid></Image></td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => handleFormEditOpen(category.id)}
                          >
                            Update
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default CategoryReduxDialogPage;
