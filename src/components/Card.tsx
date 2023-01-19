// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export function Card({ titulo, conteudo, rodape }) {
  return (
    <div className="flex flex-col bg-slate-500">
      <h1>{titulo}</h1>
      <p>{conteudo}</p>
      <small>{rodape}</small>
    </div>
  )
}