import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

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
    <main className="px-10 mb-20 flex flex-col items-center">
        <div className="text-center mb-10">  
            <h1 className='text-2xl mb-2'>Welcome in our shop!</h1>
            <p>Find all your favorite products in one place.</p>
        </div>

        <div className=' grid grid-cols-5 gap-12'>
            {!loading && !error &&
                data.products.map((singleProduct: any) => (
                    <div key={singleProduct.id}  className='mb-5 rounded-lg bg-slate-200 w-fit overflow-hidden' > 
                        <Link className='flex flex-col items-center ' to={`/products/${singleProduct.id}`}>
                            <img className='w-36 h-36 object-cover mb-3' src={singleProduct.image} alt={singleProduct.name} />
                            <h3>{singleProduct.name}</h3>
                            <p className='mb-3'>{singleProduct.price} €</p>  
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