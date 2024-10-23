import "./ReviewCard.css";
import starFilled from "../assets/green-star.svg"
import starEmpty from "../assets/gray-star.svg"
export default function ReviewCard({ review }) {

    return (
        <div className="review">
            <div className="review-header">
                <p className="review-name">
                    {review.name}</p>
                <p className="review-date">{
                    new Date(review.created_at).toLocaleString('pt-br', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })
                }</p>
            </div>
            <div className="review-starts">
                {Array.from({ length: review.stars }).map((_, index) => (
                    <img src={starFilled} alt="Green Star" key={index} />

                ))}
                {Array.from({ length: 5 - review.stars }).map((_, index) => (
                    <img src={starEmpty} alt="Gray Star" key={index} />
                ))}

            </div>

            <p className="review-description">{review.description}</p>

            <span className="border-separator"></span>
        </div>
    );
}