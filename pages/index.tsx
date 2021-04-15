import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Giftbox from "../components/Giftbox"
import Head from "next/head"
import productList from "../lib/products.json"


interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="container mx-auto ">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      
          <section >
            <div className="bg_container container relative">
              <img src="/static/Bgsmall.jpg" alt=""  />
            </div>
          </section>
      
        
    <ProductList products={props.products} />
    <Giftbox />
    <Contact />
    <Footer />
</div>
  )
}

Index.getInitialProps = async () => {
  
  return {
    products: productList
  }
}

export default Index