import '../styles/components.css'
import { capitalizeString } from '../utils/capitalizeString'

export default function Card({ img, title, ...restProps }) {
  return (
    <article className="card" role="button" aria-label={title} {...restProps}>
      <img width={220} height={220} src={img} alt={title} className="card-img" />
      <h2 className="card-title">{capitalizeString(title)}</h2>
    </article>
  )
}
