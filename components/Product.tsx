import {withRouter, RouterProps} from 'next/router'

export interface IProduct {
  
  id: string
  name: string
  price: number
  url: string  
  description: string
  image: string
}

interface IProductProps {
  product: IProduct
  router: RouterProps
}

const Product = (props: IProductProps) => {
  return (
    <div className="product w-full">
      <img  src={props.product.image} alt="" className="inline product__image"/>
      <h2 className="text-white uppercase text_product">{props.product.name}</h2>
      <p className="uppercase text-white mt-2  text_color_size" >
        <img className="inline mr-2 " src="/static/image7.svg" alt="" />
         amber caviar
        <img className="inline align-middle ml-2" src="/static/image7.svg" alt="" />
      </p>
      <button className="text-white uppercase border rounded-full py-2 px-5 mt-5">
      find out more
      </button>
    
      <div className="product__price-button-container">
        <div className="product__price">${props.product.price.toFixed(2)}</div>
        <button 
          className="snipcart-add-item product__button"
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.router.pathname}
          data-item-image={props.product.image}>
        <span> find out more</span>
        </button>
      </div>
    </div>
  )
}

export default withRouter(Product)