import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  align-items: flex-end;
  height: 50px;
  padding: 20px;
  bottom: 0;
  background-color: var(--background-secondary);
  font-size: 0.7rem;

  & > a {
    text-decoration: none;
    color: var(--color-purple-secondary)
  }
`

const FooterContainer = styled.div`
  max-width: var(--screen-width);
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        Design inspired by <a href='https://www.freepik.com/free-vector/linear-vintage-vaporwave-background_13156547.htm' target='_blank'>freepik</a>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer