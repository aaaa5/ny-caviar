import Link from "next/link";

export default function Header() {
  return (
    <header  className="fixed container mx-auto bg-black z-10">
      <div className="px-6 pb-1 flex justify-between items-center ">
      <button className="flex">
        <img className="mr-1" src="/static/image 2.svg" alt="" />
        <img className="mr-1" src="/static/image 3.svg" alt=""  />
        <img src="/static/image 6.svg" alt="" />
      </button>
     
      <Link href="/">
       
          <img src="/static/logo.svg" alt="" className="header__logo" />
        
      </Link>
      <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
      <img src="/static/card.svg" alt="" className="header__logo" />
        <span className="header__price snipcart-total-price absolute"></span>
      </a>
      </div>
    </header>
  )
}