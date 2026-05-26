import '../styles/header.css'

export default function Header() {
  return (
    <header>
      <div className="title-container">
        <h1 className="title">Pokemon Card Challenge</h1>
      </div>

      <div className="score-container">
        <p>
          Score: <span>0</span>
        </p>
        <p>
          Best score: <span>0</span>
        </p>
      </div>
    </header>
  )
}
