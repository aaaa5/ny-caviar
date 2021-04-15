import Header from "../../components/Header"
import { IProduct } from "../../components/Product"
import Footer from "../../components/Footer"
import Head from "next/head"
import {useState, useEffect} from "react"
import productList from "../../lib/products.json"


interface IIndexProps {
  products: IProduct[]
}


const Productpage = (props: IIndexProps ) => {
  
  const [orderOption, setOrderOption] = useState({
    name: props.products[0].option[0].label,
    price: props.products[0].option[0].price
  })
  const changeOrderOption = (n, p) => {
    setOrderOption({
      name:n,
      price:p
    })
  }

  const [orderQty, setOrderQty] = useState(1)
  const increment = () => {
    setOrderQty(orderQty+1)
    return false
  }
  const dectrement = () => {
    orderQty>1 ? setOrderQty(orderQty-1) : null
    return false
  }

  return (
    <div className="container mx-auto ">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      
      <section className="mx-auto text-center" >
        
        <h1 className="text-7xl text-white"></h1>
        
        <div className="container pt-20">
          <img className="w-full " src= {props.products.map(p=>(p.image)).toString()} alt=""  />
        </div>
        
        <h1 className=" text-white uppercase text-4xl leading-10 mt-4">
          <img className="inline mr-2 w-2" src="/static/image 2.svg" alt="" />
          {props.products[0].name}
          <img className="inline align-middle ml-2 w-2" src="/static/image 2.svg" alt="" />
        </h1>
        
        <p className="uppercase  mt-3 text-xl amber_caviar_cart -m-3" >
          {props.products[0].type}
        </p>

        <div className="text-white mt-10 text-center px-10 ">
          <p className=" mb-10 text-justify text-xs">
            {props.products[0].description}
          </p>      
        </div>
        <div>
          <button className="text-white uppercase" onClick={()=>{dectrement()}}>-</button>
          <input className="quantity-input__screen" type="text" value={orderQty} />
          <button className="text-white uppercase" onClick={()=>{increment()}}>+</button>
        </div>
        <div className="mx-2 boxed-option grid grid-cols-2 gap-4">
            {props.products.map(
              p =>{
                return(<>
                  {p.option.map ((o, idx) => {
                    return (
                      <label key={idx}>
                        <input className="boxed-radio"  id="" type="radio" checked={o.label==orderOption ? true: false}  name="Options" value={o.label} 
                          onChange={()=>{changeOrderOption(o.label, o.price)}}    />
                        <span className="option-value-name ">
                          <span >{o.label}</span>
                          <span className="option-serves">{o.serves}</span>
                          <span className="option-price">{o.price}</span>
                        </span>
                      </label>
                    )})}
                </>)
              })}
        </div>


        <div className="mt-3 mx-2 ">
          <button className="snipcart-add-item text-white uppercase bg-gold p-4 w-full rounded-sm"
            data-item-id={props.products[0].id}
            data-item-name={props.products[0].name + "-" + orderOption.name}
            data-item-price={Number(orderOption.price)*Number(orderQty)}
            data-item-url={"/product/" + props.products[0].id}
            data-item-image={props.products[0].image}>Add to Cart <span>${Number(orderOption.price)*Number(orderQty)}</span></button>
        </div>

      </section>
      <Footer />
    </div>
  )
}

Productpage.getInitialProps =   ({query}) => {
  
  let result = productList.filter(obj=>{
    return obj.id === query.slug
  })

  return {
    products:result
  }

}

export default Productpage