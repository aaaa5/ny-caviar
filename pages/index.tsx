import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Giftbox from "../components/Giftbox"
import Head from "next/head"



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
    products: [
      { id: "nextjs_halfmoon",name: "Halfmoon Betta", price: 25.00, image: "../static/halfmoon.png", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct,
      {id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/halfmoon.png",description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."} as IProduct,
      {id: "nextjs_crowntail", name: "Crowntail Betta", price: 7.50, image: "../static/halfmoon.png", description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."} as IProduct,
   
    ]
  }
}

export default Index