import styled from 'styled-components'

const LogoEl = styled.div`
  cursor: default;
  font-size: 30px;
  font-weight: 700;
  color: var(--color-text);
  span {
    color: rgb(255, 0, 0);
  }
`

const Logo: React.FC = () => {
  return (
    <LogoEl>
      Movie<span>Ins</span>
    </LogoEl>
  )
}

export default Logo
