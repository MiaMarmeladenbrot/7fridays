import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
    query {
        products {
            id
            name
            price
            description
        }
    }
    `

const ProductsPage = () => {
    const {loading, error, data} = useQuery(GET_PRODUCTS)

    if(loading) return <p>Loading</p>
    if(error) return <p>Something went wrong</p>


    return ( 
    <main className="px-10">
        <div className="text-center">  
            <h1>Welcome in our shop!</h1>
            <p>Find all your favorite products in one place.</p>
        </div>

        <div>
            {!loading && !error && 
            data.products.map((singleProduct: any) => (
                <div key={singleProduct.id}>
                    <h3>{singleProduct.name}</h3>
                    <p>{singleProduct.price} €</p>
                </div>
                )
              )  
            }


        </div>
  
    </main>
     );
}
 
export default ProductsPage;