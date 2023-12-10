import './Main.scss'
import photo from '../img/photo.png'


const Main =()=>{

    return (
        <main className='main container d-flex'>
            <div className='left'>
            <h2>Cooking Made Fun and Easy: Unleash Your Inner Chef</h2>
            <p>Discover more than <span>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
            <p className='click'>Explore Recipes</p>
            </div>
            <div className='right'>
            <img src={photo} className='photo' alt='Dish'/>
            </div>
            
        </main>
    );
}

export default Main