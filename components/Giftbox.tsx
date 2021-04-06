import Link from "next/link";

export default function Contact() {
  return (
    <section className="margin_dift_box">
    <div className=" text-center">
    <img src="/static/nycjpg.jpg" alt="" className="header__logo" />
    <h2 className="text-white uppercase text_product">gift box</h2>
        <p className="uppercase text_color_size mt-2  " >
          <img className="inline mr-2 " src="/static/image7.svg" alt="" />
           amber caviar
          <img className="inline align-middle ml-2" src="/static/image7.svg" alt="" />
        </p>
        <button className="text-white uppercase border rounded-full py-2 px-5 mt-5">
        find out more
        </button>
    </div>
  </section>
  )
}