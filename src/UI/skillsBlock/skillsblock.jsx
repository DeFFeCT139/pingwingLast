import arrow from '../../image/Arrow 1.svg'
import bot from '../../image/ping.svg'

function SkillsBlock() {

  return (
    <div className="skils-ttem skils-ttem-active">
      <div className="skils-ttem-body">
        <div className="skils-ttem-body-image">
          <img src={bot} alt="" className="skils-ttem-body-img" />
        </div>
        <h2 className="skils-ttem-body-title">Боты</h2>
        <div className="skils-ttem-body-line"></div>
        <div className="skils-ttem-body-desc">Если у вашего бизнеса еще нет веб-сайта, то пришло время его создать.</div>
        <a href="" className="skils-ttem-body-link">
          <span>Подробнее</span>
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
}

export default SkillsBlock;