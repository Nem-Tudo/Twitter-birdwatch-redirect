import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main} style={{height: "100vh", flexDirection: "column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Criador (clique)</h1>
      <a style={{color: 'blueviolet'}} target='_blank' href='https://twitter.com/NemTudo_'>Twitter @NemTudo_</a>
      <a style={{color: 'blueviolet', marginTop: "10px"}} target='_blank' href='https://nemtudo.me/'>Portifólio nemtudo.me</a>
    </main>
  )
}
