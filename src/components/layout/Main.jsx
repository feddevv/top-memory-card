import Card from '../Card'

export default function Main({ pokes, isLoad }) {
  return (
    <main>
      {isLoad === false &&
        pokes.map((poke) => <Card key={poke.id} title={poke.name} img={poke.img} />)}
    </main>
  )
}
