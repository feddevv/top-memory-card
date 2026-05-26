export function normalizePokes(data) {
  if (!data) return null
  return {
    name: data.name,
    img: data.sprites.other['official-artwork'].front_default,
    id: data.id,
  }
}
