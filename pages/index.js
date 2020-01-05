import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <div className='container center'>
      <div className='title'>
        <h1>Select a protein</h1>
      </div>
      <div className='product-row'>
        {props.products.map(product => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}>
            <div className='card'>
              <span className='category'>Protein</span>
              <img key={product.image} src={product.image} width={250} />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    "http://my-json-server.typicode.com/wrongakram/demo/products"
  );
  const data = await res.json();
  return {
    products: data
  };
};

export default Index;
