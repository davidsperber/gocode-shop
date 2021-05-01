import './App.css';
import './main.css'
function Products2({category,image,price,description,title}) { 
    return (

        <div className="product-card">
            <div className="product-image">
                {/* <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/> */}
                <img src={image} alt={description} title={title}/>
            </div>
            <div className="product-info">
                <h5>{category}</h5>
                <h6>{price}</h6>
            </div>
        </div>
    );

}

export default Products2;