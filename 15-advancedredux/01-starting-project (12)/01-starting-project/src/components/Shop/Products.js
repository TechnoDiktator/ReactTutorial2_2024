import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCT = [
  {id: 'p1',
    price:6,
    title:"My Right Leg",
    description:"I Have A small Right Leg"
  },
  {id: 'p2',
    price:12,
    title:"My Left leg",
    description:"I Have a longer Left Leg"
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            id = {product.id}
            key={product.id} 
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
