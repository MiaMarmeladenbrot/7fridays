import { useQuery, gql } from '@apollo/client';
import ChangeCartItems from '../components/ChangeCartItems';
import { useParams } from 'react-router-dom';

const GET_ONE_PRODUCT = gql`
    query getOneProduct($id: ID!) {
        product(id: $id) {
            id
            name
            price
            description
            image
        }
    }
    `

const ProductDetailsPage = () => {
    const {id} = useParams()

    const {loading, error, data} = useQuery(GET_ONE_PRODUCT, { variables: { id }})

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>    

    return ( 
    <main className="px-10 flex gap-10 justify-center mt-24">
        <img className='w-72 h-96 object-cover rounded-lg mb-3' src={data.product.image} alt={data.product.name} />
        <div>
            <h3 className='font-poppins-bold text-3xl mb-2'>{data.product.name}</h3>
            <p className='font-poppins-reg mb-3'>{data.product.price} €</p> 
            <p className='font-poppins-reg max-w-96 mb-5'>{data.product.description}</p> 
            <ChangeCartItems productId={data.product.id}/>
        </div>
    </main> 
    );
}

export default ProductDetailsPage;