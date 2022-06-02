const DatabaseBox = ({meaning , databseTitle}) => {
    return (
        <div className='meaning-section__box'  style={{display : meaning && meaning.length ? 'block' : 'none'}}>
              {meaning && meaning.length !== 0 ?<div className='meaning-section__box-title'><span>لغت نامه: </span> <h3 className='database-title'>{databseTitle}</h3></div> : ''}
              {meaning.map((item, key) => {
                return (
                    <div key={key}>
                    <span className={item.pron ? 'pronunciation' : ''} style={{display : item.pron ? 'block' : 'none'}}>تلفظ {item.pron}</span>
                    <p>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
    )
}

export default DatabaseBox