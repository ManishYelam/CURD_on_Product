import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductForm = ({ product = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: product.id || '',
    name: product.name || '',
    desc: product.desc || '',
    category: product.category || '',
    price: product.price || ''
  });

  useEffect(() => {
    setFormData({
      id: product.id || '',
      name: product.name || '',
      desc: product.desc || '',
      category: product.category || '',
      price: product.price || ''
    });
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{product.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDesc" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter product description"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCategory" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice" className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {product.id ? 'Update Product' : 'Add Product'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProductForm;
