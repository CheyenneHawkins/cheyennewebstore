import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

const PopupEdit = styled.div`
  display: none;
  position: fixed;
  transform: translate(0, -500px);
  z-index: 3;
`;

export default function Product({ product, editView }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <button
          type="button"
          id={product.id}
          onClick={(e) => {
            editView = 'flex';
            <UpdateProduct id={product.id} />;
            console.log('--');
            console.log('---');
            console.log(e.target.id);
            console.log(editView);
          }}
        >
          Edit
        </button>
        <PopupEdit>
          <UpdateProduct id={product.id} />
        </PopupEdit>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
      {/* TODO: add buttons to edit and delete item */}

      {/* <UpdateProduct /> */}
    </ItemStyles>
  );
}
