import Image from "next/image"

import styles from "../styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur
        fugiat dignissimos, animi nisi minima ipsa maiores veniam velit
        doloribus, culpa suscipit corporis laborum illo quo asperiores! Non, at
        porro?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
