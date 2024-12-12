import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import data from './data.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = data.data.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const shareOnWhatsApp = () => {
    const productUrl = `http://localhost:3000/product/details/${product.id}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${productUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content={`http://localhost:3000/product/details/${product.id}`} />
      </Helmet>

      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
    </div>
  );
};

export default ProductDetails;
