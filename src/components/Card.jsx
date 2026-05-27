import '../styles/components.css'
import { capitalizeString } from '../utils/capitalizeString'

export default function Card({ img, title }) {
  return (
    <article className="card">
      <img width={220} src={img} alt="" className="card-img" />
      <h2 className="card-title">{capitalizeString(title)}</h2>
    </article>
  )
}
