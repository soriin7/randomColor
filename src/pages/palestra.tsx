import { Card } from "../components/Card";

export default function Palestra() {
  return (
    <div className="flex m-0 justify-center h-screen items-center">
      <Card
        titulo={'Card 1'}
        conteudo={'Lorem ipsum dolor sit amet'}
        rodape={'A small footer'}
      />
    </div>
  )
}