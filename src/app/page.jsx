import style from './page.module.css'

import Image from 'next/image'
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

    <Image
      src={"/temp/arvore.jpg"}
      alt="Árvore"
      width={130}
      height={90}
     
    />


     <Image
      src={"/temp/arvore2.jpg"}
      alt="Árvore pequena"
      width={1300}
      height={900}
     
    />

    
    
    </div>
  )
}


