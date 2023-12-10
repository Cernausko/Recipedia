import './Recipes.scss'
import Card from "../card/Card";

import photo1 from '../img/photo1.png'
import photo2 from '../img/photo2.png'
import photo3 from '../img/photo3.png'
import photo4 from '../img/photo4.png'
import photo5 from '../img/photo5.png'
import photo6 from '../img/photo6.png'

const Recipes =()=>{

    return (
        <section className="recipes container flex-column">
            <div className="recipes__title d-flex justify-content-between align-items-end">
                <div>
                    <h3>Discover, Create, Share</h3>
                    <p>Check our most popular recipes of this week</p>
                </div>
                <p className='click'>See All</p>
            </div>
            <div className="recipes__list d-flex">
                <Card src={photo1} name="Creamy Salad" />
                <Card src={photo2} name="Tofu Tomatoes Soup " />
                <Card src={photo3} name="Crunchy Potatoes" />
                <Card src={photo4} name="Mushroom Soup" />
                <Card src={photo5} name="Raspberry Pancake" />
                <Card src={photo6} name="Beef Teriyaki" />
            </div>
        </section>
    );
}

export default Recipes