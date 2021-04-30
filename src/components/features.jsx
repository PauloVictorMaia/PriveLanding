import './styles.css';
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
 width: 100%;
 @media(max-width: 768px){
   flex-direction: column;
   align-items: center;
 }
`

const Item = styled.div`
 
 @media(max-width: 768px){
  width: 100%;
 }
`

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Vantagens</h2>
        </div>
        <Container>
          {props.data
            ? props.data.map((d, i) => (
                <Item key={i} className='col-xs-6 col-md-3'>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </Item>
              ))
            : 'Loading...'}
        </Container>
      </div>
    </div>
  )
}
