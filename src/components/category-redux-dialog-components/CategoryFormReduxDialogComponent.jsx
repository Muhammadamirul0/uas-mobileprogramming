import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  createCategoryAsync,
  updateCategoryAsync,
} from "../../redux/services/categorys";
import { createCategory, updateCategory } from "../../redux/actions/categorys";

const CategoryCreateReduxDialogComponent = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorys.category);
  const title = useSelector((state) => state.categorys.title);
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });

  useEffect(() => {
    resetForm();
    handleFormUpdate();
  }, [isOpen]);

  const handleFormUpdate = async () => {
    if (category?.id)
      setFormData({
        name: category.name,
        description: category.description,
        price: category.price,
        stock: category.stock,
        image_url: category.image_url,
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if( (form.checkValidity() === false)) {
      return setValidated(true);
    }

    const res = await createCategoryAsync(formData);
    dispatch(createCategory(res));

    resetForm();
    onClose();
    Swal.fire("Berhasil", "Data berhasil ditambahkan");
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if( (form.checkValidity() === false)) {
      return setValidated(true);
    }
    const res = await updateCategoryAsync(category.id, formData);
    dispatch(updateCategory(res));

    resetForm();
    onClose();
    Swal.fire("Berhasil", "Data berhasil diubah");
  };

  const resetForm = () => {
    setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image_url: "",
    });
  };

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      dialogClassName="modal-dialog modal-lg"
      centered
    >
      <Form noValidate validated={validated} onSubmit={category?.id ? handleUpdateSubmit : handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Name is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Description is required
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Price is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required
                type="text"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Stock is required
              </Form.Control.Feedback>
            </Form.Group> */}
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                required
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Image URL is required
              </Form.Control.Feedback>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="gray" onClick={onClose}>
            Close
          </Button>
          <Button type="submit">
            {category?.id ? 'Update Category' : 'Create Category'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CategoryCreateReduxDialogComponent;