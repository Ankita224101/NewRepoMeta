import React from 'react';
import data from './data.json';
import { useNavigate } from 'react-router-dom';

const WhatsappShare = () => {

    const navigate = useNavigate();
    const messageTemplate = (product) => {
        return `
            *Title*: ${product.title}
            *Price*: $${product.price}
            *Description*: ${product.description}
            *Product Image*: ${product.image} 
        `;
    };

    // const sendWhatsAppMessage = (product) => {
    //     const message = encodeURIComponent(messageTemplate(product));
    //     const url = `https://wa.me/?text=${message}`;
    //     window.open(url, '_blank');
    // };
    const handleProdDetail = (prductid) => {
        navigate(`/product/details/${prductid}`)


    }
    return (
        <>

            <h2>Share Products on WhatsApp</h2>
            <div className="product-list row">
                {data.data.map((product) => (
                    <div key={product.id} className="product-card col-md-3">

                        <img onClick={() => handleProdDetail(product.id)} src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>

                    </div>
                ))}
            </div>
        </>
    );
};
export default WhatsappShare;

