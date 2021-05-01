import './App.css';
import './main.css';
import './style.css';
function Products2({ category, image, price, description, title }) {
    return (

        <div className="product-card">
            <div className="product-image">
            </div>
            <div className="product-info">
                <img src={image} alt={description} />
                <h4>{title}</h4>
                <h6>{price}</h6>
            </div>
        </div>
    );

}

export default Products2;