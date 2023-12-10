import './Card.scss';
import time from '../../svg/time.svg';
import people from '../../svg/people.svg';
import diagram from '../../svg/diagram.svg';


const Card =({ src, name })=>{

	return (
		<div className="card shadow">
			<div className=' position-relative'>
				<img src={src} className="card-img-top" alt="..." />
				<div className="card__i position-absolute w-100">
					<div className='d-flex'><img src={time} alt='...' /><span className='card__i__text'> Mins</span></div>
					<div className='d-flex'><img src={people} alt='...' /><span className='card__i__text'> Servings</span></div>
					<div className='d-flex'><img src={diagram} alt='...' /><span className='card__i__text'> Easy</span></div>
				</div>
			</div>

			<div className="card-body">
				<p className="card-text">
					<span className='card-name'>{name}</span>
					<a href='#' className='card__more'>View Recipe</a>
				</p>
			</div>
		</div>
	)
}
export default Card