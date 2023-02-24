import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiMoonLine } from 'react-icons/ri'
import Logo from './Logo'
import { useEffect, useState } from 'react'

const HeaderEl = styled.div`
  padding: 15px 0px;
  background-color: var(--bg-header);
`

const Container = styled.div`
  max-width: 1840px;
  margin: 0px auto;
  padding: 0px 10px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Item = styled.li`
  cursor: pointer;
  color: var(--text-color);
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  margin-right: 16px;
  &:hover {
    background-color: #ff000013;
  }
`
const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--bg-theme);
  }
`

const Header: React.FC = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo />
          <List>
            <Item>
              <Link to='/'>HOME</Link>
            </Item>
            <Item>
              <Link to='/movies'>MOVIES</Link>
            </Item>
            <Item>
              <Link to='/tvseries'>TV SERIES</Link>
            </Item>
            <Item>
              <Link to='/'>SEARCH</Link>
            </Item>
            <ThemeButton onClick={toggleTheme}>
              <RiMoonLine size={22} />
            </ThemeButton>
          </List>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
