import './Footer.scss'
import { ReactComponent as Logo } from '../../svg/logo.svg';


const Footer =()=>{
    return (
		<footer className='footer container'>
            <div className='footer__logo d-flex'>
			<Logo/>
            <p className='logo_text' href='#'>Recipedia</p>
            </div>
			<div className='footer__row d-flex'>
				<div className='footer__links d-flex'>
					<div>
						<h3>Menu</h3>
						<ul>
							<li><a href='#'>Home</a></li>
							<li><a href='#'>Recipe</a></li>
							<li><a href='#'>Community</a></li>
							<li><a href='#'>About Us</a></li>
						</ul>
					</div>
					<div>
						<h3>Categories</h3>
						<ul>
							<li><a href='#'>Breakfast</a></li>
							<li><a href='#'>Lunch</a></li>
							<li><a href='#'>Dinner</a></li>
							<li><a href='#'>Dessert</a></li>
							<li><a href='#'>Drink</a></li>
						</ul>
					</div>
					<div>
						<h3>Social</h3>
						<ul>
							<li><a href='#'>Instagram</a></li>
							<li><a href='#'>Twitter</a></li>
							<li><a href='#'>Youtube</a></li>
							<li><a href='#'>Facebook</a></li>
						</ul>
					</div>
				</div>
				<div className='footer__right'>
					<h3>Sign up for our newsletter</h3>
					<div className='d-flex footer__register'>
						<input type='text' className='footer__email__address' placeholder='Your Email Address' />
						<p className='footer__submit'>Submit</p>
					</div>

				</div>
			</div>
		</footer>
	);
}

export default Footer