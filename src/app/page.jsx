import style from './page.module.css'
export default function Home() {
  return (
    <div className="container">
    <h1 className={style.tituloHome}> Titulo 1</h1>
    <h2> Titulo 2</h2>
    <h3> Titulo 3</h3>
    <p className="txtDestaque">primeiro exemplo no next </p>
    <p>primeiro texto next</p>
    <small>texto next</small>
    <br />
    <div className="quadrado"></div>
    </div>
  )
}


