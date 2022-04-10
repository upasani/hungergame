import './resturant.css';
export const RestaurantDetails = ({ obj }) => {
    // console.log(obj.name);
    return (
        <div className="flex" id='main_div'>
            <img src={obj.img} alt="" />
            <div>
                <h3>{obj.name}</h3>
                <h4>{obj.title}</h4>
                <h4>cost {obj.cost.cost_one} for one</h4>
                <h4>cost {obj.cost.cost_two} for two</h4>
                <h4>Accept{obj.payment_methods.card==true}</h4>
            </div>
            <div>
                <p>Star:{obj.star}</p>
                <p>Votes:{obj.total_votes}</p>
                <p>Reviews:{obj.reviews}</p>

            </div>

        </div>
    )
}