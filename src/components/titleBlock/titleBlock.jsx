function TitleBlock({desc, title, descClassName, titlebg}) {

  return (
    <div className="title-bg">
      <div className="titleBlock">
        <div className="titleBlock-info">
          <h1>{title}</h1> 
          <button className={`titleBlock-btn`}>ОБСУДИТЬ ПРОЕКТ</button>
        </div>
        <h3 className={descClassName}>{desc}</h3>
      </div>
      <div className="bgtext">{titlebg}</div>
    </div>
  );
}

export default TitleBlock;