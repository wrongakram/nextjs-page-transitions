import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Product = props => (
  <div>
    <div className='fullscreen'>
      <div className='product'>
        <div className='img'>
          <img key={props.product.image} src={props.product.image} />
        </div>
        <div className='product-details'>
          <div className='inner'>
            <Link href='/'>
              <div>
                <a className='go-back'>Back to products</a>
              </div>
            </Link>
            <div>
              <span className='category'>Protein</span>
            </div>
            <h1>{props.product.name}</h1>
            <p>{props.product.details}</p>
            <div className='additonals'>
              <span>Soy Free</span>
              <span>Gluten Free</span>
            </div>
            <div className='qty-price'>
              <div className='qty'>
                <div className='minus'>-</div>
                <div className='amount'>1</div>
                <div className='add'>+</div>
              </div>
              <span className='price'>{props.product.price}</span>
            </div>
            <div className='btn-row'>
              <button className='add-to-cart'> Add to cart</button>
              <button className='subscribe'> Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Product.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `http://my-json-server.typicode.com/wrongakram/demo/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
