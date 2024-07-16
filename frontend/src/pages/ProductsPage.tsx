import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const GET_PRODUCTS = gql`
    query {
        products {
            id
            name
            price
            description
            image
        }
    }
    `

const ProductsPage = () => {
    const {loading, error, data} = useQuery(GET_PRODUCTS)

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>


    return ( 
    <main className="mb-20 flex flex-col items-center">
        <Hero/>

        <h2 className='font-poppins-bold text-2xl mb-10'>All products</h2>
        <div className='px-10 grid grid-cols-4 gap-12'>
            {!loading && !error &&
                data.products.map((singleProduct: any) => (
                    <div key={singleProduct.id}  className='mb-5' > 
                        <Link  to={`/products/${singleProduct.id}`}>
                            <img className='w-56 h-72 object-cover mb-3 rounded-lg' src={singleProduct.image} alt={singleProduct.name} />
                            <h3 className='mb-2 font-poppins-reg text-lg'>{singleProduct.name}</h3>
                            <p className='mb-3 font-poppins-reg text-xs'>{singleProduct.price} €</p>  
                        </Link> 
                    </div>
                )
              )  
            }
        </div>
    </main>
     );
}
 
export default ProductsPage;