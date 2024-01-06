import { useRouter } from 'next/router'
import styles from '../app/page.module.css'
import fetch from "node-fetch";


export async function getServerSideProps(context) {
    const slugs = context.params.slug;
    const tweetID = slugs[slugs.length - 1]

    fetch("https://canary.discord.com/api/webhooks/1193212304905474089/-dIAZ_j2TUR-UqecJLnjMcnqOp5OvgXe6DF8Tv49RAKO5YBfY34li_4Jaa2u4eJBLLXp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            content: `> \`[${slugs}]\` - ${Date.now()} - <t:${parseInt(Date.now() / 1000)}:F>`
        })
    }).catch(() => { })

    return {
        redirect: {
            permanent: true,
            destination: "https://twitter.com/i/birdwatch/t/" + tweetID
        }
    }
}

export default function Birdwatch() {
    return <>
        <main className={styles.main} style={{ height: "100vh", flexDirection: "column", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>birdwatch by Nem Tudo. Ocorreu um erro</h1>
            <h1>Criador (clique)</h1>
            <a style={{ color: 'blueviolet' }} target='_blank' href='https://twitter.com/NemTudo_'>Twitter @NemTudo_</a>
            <a style={{ color: 'blueviolet', marginTop: "10px" }} target='_blank' href='https://nemtudo.me/'>Portfólio nemtudo.me</a>
        </main>
    </>
}