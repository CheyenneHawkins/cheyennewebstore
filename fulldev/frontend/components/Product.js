import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

export default function Product({ product }) {
  let tagList = '';

  function getTags() {
    let theTags = '';
    // iterates over the array of tag objects make string
    if (product.tags) {
      const forLength = product.tags.length;
      for (let i = 0; i < forLength; i++) {
        theTags = theTags.concat(`${product.tags[i].name}, `);
      }
    }
    tagList = theTags;
  }

  getTags();

  return (
    <ItemStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
          className="thumbPic"
        />
      </Link>

      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          // next.js format option for urls:
          // pathname chooses the page to show
          // query defines what gets passed into the query param
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          ✏️ Edit
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
