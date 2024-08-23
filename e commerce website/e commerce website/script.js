document.getElementById('addProductForm').addEventListener('submit', addProduct);

function addProduct(e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: productName, description: productDescription })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

document.getElementById('editProductForm').addEventListener('submit', editProduct);

function editProduct(e) {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: productName, description: productDescription })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

document.getElementById('deleteProductForm').addEventListener('submit', deleteProduct);

function deleteProduct(e) {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}