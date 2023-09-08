import { editable } from '@theatre/r3f'

type Props = {
  children: any
  theatreKey: string
}

export default function EGroup({ children, theatreKey }: Props) {
  return <editable.group theatreKey={theatreKey}>{children}</editable.group>
}
