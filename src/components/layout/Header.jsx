import '../../styles/layout.css'

export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="title-container">
        <h1 className="title">Pokemon Card Challenge</h1>
      </div>

      <div className="score-container">
        <p>
          Score: <span>{score}</span>
        </p>
        <p>
          Best score: <span>{bestScore}</span>
        </p>
      </div>
    </header>
  )
}
