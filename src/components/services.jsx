import styled from 'styled-components'
import ImageP from '../assets/cumbuco.jpeg'
import ImageFortim from '../assets/guaramiranga.jpg'
import ImageFortim2 from '../assets/fortim.jpg'
import Noronha from '../assets/noronha.jpg'
import Rio from '../assets/Rio.jpg'
import Jeri from '../assets/Jeri.jpg'
import Disney from '../assets/Disney.jpg'
import Cancun from '../assets/cancun.jpg'
import Porto from '../assets/porto.jpg'

const Image = styled.div`
 background: url(${(props) => (props.image === 'cumbuco' && ImageP) || (props.image === 'Fortim' && ImageFortim) || (props.image === 'guaramiranga' && ImageFortim2) || (props.image === 'Noronha' && Noronha) || (props.image === 'Rio' && Rio) || (props.image === 'Jeri' && Jeri) || (props.image === 'Disney' && Disney) || (props.image === 'Cancún' && Cancun) || (props.image === 'Porto' && Porto)});
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-position: center;
 background-size: cover;
`;

export const Services = ({ data, title, subTitle }) => {
  console.log(data)
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{title}</h2>
          <p>
            {subTitle}
          </p>
        </div>
        <div className='row'>
          {data
            ? data.data.map((d, i) => (
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} key={`${d.name}-${i}`} className='col-md-4'>
                  <Image image={d.image}></Image>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
