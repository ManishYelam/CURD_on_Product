import React, { useState } from 'react';
import productsData from '../products.json'; 
import { Table, Pagination, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const productsPerPage = 5;

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.desc.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.price.toString().includes(search)
    )
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleFormSubmit = (newProduct) => {
    if (editingProduct && editingProduct.id) {
      setProducts(products.map(product => (product.id === newProduct.id ? newProduct : product)));
    } else {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts([...products, { ...newProduct, id: newId }]);
    }
    setEditingProduct(null);
  };

  return (
    <div className="container mt-4">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Products"
          value={search}
          onChange={handleSearchChange}
        />
        <Button variant="primary" onClick={toggleSortOrder}>
          Sort {sortOrder === 'asc' ? 'Desc' : 'Asc'}
        </Button>
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.desc}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(product)}>
                  <FaEdit />
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Button variant="success" className="mt-3" onClick={() => setEditingProduct({})}>
        <FaPlus /> Add Product
      </Button>

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleFormSubmit}
          onCancel={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
