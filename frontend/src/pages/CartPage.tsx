import { useQuery, gql } from '@apollo/client';
import ChangeCartItems from '../components/ChangeCartItems';
import { Link } from 'react-router-dom';
import ClearCart from '../components/ClearCart';
import { useCartContext } from '../contexts/CartContext';
import { useEffect } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import { CartItem, Cart } from '../types/types';
import ErrorMessage from '../components/ErrorMessage';

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
    const { updatedCart } = useCartContext()
    const {loading, error, data, refetch} = useQuery<Cart>(GET_CART);

    useEffect(()=> {
        refetch();
    }, [updatedCart, refetch])

    if(loading) return <LoadingIcon/>
    if(error) return <ErrorMessage/>

    return ( 
    <main className='mt-28 px-10 flex flex-col items-center'>
        <h1 className='font-poppins-bold text-2xl text-center mb-5'>Your Cart</h1>
       
            {data?.cart.items && data?.cart?.items?.length < 1 ? 
                <p className='font-poppins-reg mb-5'>Nothing found yet? <Link className='text-[#4852af]' to="/"> Continue shopping!</Link> 😊</p>
                :
                data?.cart.items.map((singleItem: CartItem) => (
                    <div key={singleItem.product.id} className='flex items-center gap-5 justify-between min-w-60 mb-5'>
                        <div className='flex items-center gap-3'>
                        <Link to={`/products/${singleItem.product.id}`}>
                            <img className='w-16 h-20 object-cover rounded-lg' src={singleItem.product.image} alt={singleItem.product.name} />
                        </Link>
                        <div>
                            <p className='font-poppins-reg'>{singleItem.quantity}x {singleItem.product.name}</p>
                            <p className='font-poppins-reg'>{singleItem.product.price * singleItem.quantity} €</p>
                        </div>
                        </div>
                        <ChangeCartItems productId={singleItem.product.id}/>
                    </div>
                ))
            }
        
        <p className='font-poppins-reg text-lg mb-3'>total amount: {data?.cart.total} €</p>

        <div>
            <button className='font-poppins-reg bg-green-600 py-1 px-2 rounded-lg mb-3 text-white mr-10'>Buy now</button>
            <ClearCart/>
        </div>
        
    </main> 
    );
}
 
export default CartPage;