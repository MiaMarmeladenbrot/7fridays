import { useQuery, gql } from '@apollo/client';
import ChangeCartItems from '../components/ChangeCartItems';
import { Link } from 'react-router-dom';
import ClearCart from '../components/ClearCart';

const GET_CART = gql`
    query {
        cart {
            items {
                product{
                    id
                    name
                    price
                    image
                }
                quantity
            }
            total
        }
    }
    `


const CartPage = () => {
    const {loading, error, data} = useQuery(GET_CART)

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>

    return ( 
    <main className='mt-28 px-10 flex flex-col items-center'>
        <h1 className='font-poppins-bold text-2xl text-center mb-5'>Your Cart</h1>
       
            {data.cart.items.map((singleItem: any) => (
                <div key={singleItem.product.id} className='flex items-center gap-5 mb-5'>
                    <Link to={`/products/${singleItem.product.id}`}>
                        <img className='w-16 h-20 object-cover rounded-lg' src={singleItem.product.image} alt={singleItem.product.name} />
                    </Link>
                    <div>
                        <p className='font-poppins-reg'>{singleItem.quantity}x {singleItem.product.name}</p>
                        <p className='font-poppins-reg'>{singleItem.product.price} €</p>
                        <ChangeCartItems productId={singleItem.product.id}/>
                    </div>
                </div>
            ))}
        
        <p className='font-poppins-reg text-lg mb-3'>total amount: {data.cart.total} €</p>

        <div>
            <button className='font-poppins-reg text-lg bg-green-600 py-1 px-2 rounded-lg mb-3 text-white mr-10'>Buy now</button>
            <ClearCart/>
        </div>
        
    </main> 
    );
}
 
export default CartPage;