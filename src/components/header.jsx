
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://api.whatsapp.com/send?phone=558587988723&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tenho%20interesse%20de%20ser%20um%20associado%20Priv%C3%AA%20Residence%20Club%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
                  className='btn btn-custom btn-lg page-scroll'
                  target='blank'
                >
                  Assine já
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
