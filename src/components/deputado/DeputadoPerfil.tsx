import { DeputadoDespesas } from "./DeputadoDespesas"
import { DeputadoPerfilBase } from "./DeputadoPerfilBase"

export const DeputadoPerfil = ({ id }: { id: string }) => {
  return (
    <div>
      <DeputadoPerfilBase id={id} />
      <DeputadoDespesas id={id} />
    </div>
  )
}