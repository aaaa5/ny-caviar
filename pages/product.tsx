import Header from "../components/Header"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
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
      
          <section className="mx-auto text-center" >
            <div className=" container pt-20 ">
              <img className="w-full " src="/static/halfmoon.png" alt=""  />
            </div>
            <div className="flex m-auto w-11/12">
              <img  className="w-2/6" src="/static/halfmoon.png" alt=""  />
              <img className="w-2/6" src="/static/halfmoon.png" alt=""  />
              <img  className="w-2/6"  src="/static/halfmoon.png" alt=""  />
            </div>
            <h1 className=" text-white uppercase text-4xl leading-10 mt-4">
              <img className="inline mr-2 w-2" src="/static/image 2.svg" alt="" />
                Kaluga fusion
              <img className="inline align-middle ml-2 w-2" src="/static/image 2.svg" alt="" />
            </h1>
            <p className="uppercase  mt-3 text-xl amber_caviar_cart -m-3" >
                amber caviar
            </p>
            <div className="text-white mt-10 text-center px-10 ">
              <p className=" mb-10 text-justify text-xs">Black caviar is a very nutritious and healthy treat. Its unique balanced composition is rich in proteins, vitamins, polyunsaturated fatty acids and microelements, including iodine, potassium, sodium, zinc, magnesium, phosphorus. The use of this product has a positive effect on the immune system and has a general strengthening effect on the body.<br/>
                 And today, all over the world, this product is considered a symbol of luxury and is one of the most expensive and refined delicacies.
                 In caviar we trust!<br/>
                 At NY CAVIAR you can order the best selection of caviar from Russia.<br/>
                 You also have an option to purchase caviar on our website in just a few clicks. All your order history will be saved in your personalized bucket so that makes future purchases easier — just in one click. <br/>
                 Every first Monday of each month, we organize wine & caviar tasting events for our loyal customers. There you can meet new friends, taste exclusive wine and caviar selection, relax and catch a good vibe.
              </p>
              


                  
            </div>
            <div className="mx-2 boxed-option grid grid-cols-2 gap-4">
                    
                    
                      
                      
                      <label>
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-1" type="radio" name="Options" value="100g (3.5oz) + 30g (1oz) free $169.00" tabindex="0" />
                        <span className="option-value-name " ><span >100g (3.5oz) + 30g (1oz) FREE </span><span className="option-serves">Serves 2-4</span><span className="option-price">$169</span></span>
                      </label>
                    
                      
                      
                      <label>
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-2" type="radio" name="Options" value="5x30g (5x1oz) $195.00" tabindex="0"/>
                        <span className="option-value-name" ><span >5x30g (5x1oz) </span><span className="option-serves">Serves 3-5</span><span className="option-price">$195</span></span>
                      </label>
                    
                      
                      
                      <label >
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-3" type="radio" name="Options" value="3x50g (3x1.7oz) $195.00" tabindex="0"/>
                        <span className="option-value-name" ><span >3x50g (3x1.7oz) </span><span className="option-serves">Serves 3-5</span><span className="option-price">$195</span></span>
                      </label>
                    
                      
                      
                      <label >
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-4" type="radio" name="Options" value="250g (8.8oz) $325.00" tabindex="0"/>
                        <span className="option-value-name" ><span >250g (8.8oz) </span><span className="option-serves">Serves 4-8</span><span className="option-price">$325</span></span>
                      </label>
                    
                      
                      
                      <label >
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-5" type="radio" name="Options" value="500g (17.6oz) $550.00" tabindex="0"/>
                        <span className="option-value-name" ><span >500g (17.6oz) </span><span className="option-serves">Serves 8-16</span><span className="option-price">$550</span></span>
                      </label>
                    
                      
                      
                      <label >
                        <input className="boxed-radio" data-select="option1" id="boxed-option-1-6" type="radio" name="Options" value="1680g (59.2oz) $1345.00" tabindex="0"/>
                        <span className="option-value-name" ><span >1680g (59.2oz) </span><span className="option-serves">Serves 20-40</span><span className="option-price">$1345</span></span>
                      </label>
                      
                  </div >
                  <div className="mt-3 mx-2 "> <button className="text-white uppercase bg-gold p-4 w-full rounded-sm"
                  
                  
                  >Add to Cart</button>
                  
                  </div>
                 
          </section>
      
        
   
   
   
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