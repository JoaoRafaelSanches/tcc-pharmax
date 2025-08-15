import Link from "next/link";
export default function Sobre() {
  return (
    <div>
      <h1>acesso a telas</h1>
      <Link href="/sobre">sobre</Link>
      <br />
      <Link href="/contato">contato</Link>
      <br />
      <Link href="/cadastro">cadastro</Link>
      <br />
      <Link href="/login">login</Link>
      
      
      
   
    </div>
  );
}