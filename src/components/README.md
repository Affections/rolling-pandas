# Components

Add your React components here.

## Example Component Structure

```
src/components/
├── Button/
│   ├── Button.tsx
│   └── Button.styles.ts
├── Header/
│   ├── Header.tsx
│   └── Header.styles.ts
└── README.md (this file)
```

## Example Component with Styled Components

**Button.tsx**
```typescript
'use client'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
```

**Button.styles.ts**
```typescript
import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #333;
  }
`
```
