'use client'
import styles from "./Embed.module.css";

interface Props {
  embedId?: string,
  name?: string
}

export function Embed({
  embedId,
  name
}: Props) {
  return (
    <section>
      <iframe
        className={styles.embed}
        height="460"
        scrolling="no"
        frameBorder="no"
        title={`${name} - HTMLui`} src={`https://codepen.io/renansalazar/embed/${embedId}?default-tab=html%2Cresult`}
        loading="lazy"
      >
        See the Pen
      </iframe>
    </section>
  )
}
