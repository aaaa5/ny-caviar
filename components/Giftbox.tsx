import Link from "next/link";

export default function Contact() {
  return (
    <section className="mb-24">
    <div className=" text-center">
    <img src="/static/nycjpg.jpg" alt="" className="header__logo" />
    <h2 className="text-white uppercase  ">gift box</h2>
        <p className="uppercase amber_caviar mt-2  " >
          <img className="inline mr-2 " src="/static/image7.svg" alt="" />
           amber caviar
          <img className="inline align-middle ml-2" src="/static/image7.svg" alt="" />
        </p>
        <button className="btn-find-out ">
        find out more
        </button>
    </div>
  </section>
  )
}