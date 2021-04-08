import Product, { IProduct } from "./Product"

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="flex flex-col items-center product-list text-center">
      <h1 className="text-white uppercase text-4xl leading-10 ">in caviar<br/>
we trust</h1>
      <div className="flex mt-4 mb-10 ease-linea  ">
        <img className="mr-1.5 w-1.5" src="/static/image 2.svg" alt=""  />
        <img className="mr-1.5 mt-2 w-1.5" src="/static/image 3.svg" alt="" />
        <img className="w-1.5"src="/static/image 6.svg" alt=""/>
      </div >
      {props.products.map((productss, index) => <Product product={productss} key={index}/>)}
    </div>
  )
}

export default ProductList