import { SerializedStyles } from '@emotion/react'
import React, { LiHTMLAttributes, ReactNode } from 'react'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  css?: SerializedStyles
  children: ReactNode
}

const ListItem = ({ children, ...props }: Props) => {
  return <li {...props}>{children}</li>
}

export default React.memo(ListItem)
