import { useState, useEffect } from "react";
import { getReviews } from "../services/ReviewService";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const apiReviews = await getReviews();
      setReviews(apiReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleNewReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]); // Adiciona a nova review ao topo
  };

  return (
    <section className="reviews">
      <h3>O que nossos clientes dizem</h3>
      <div className="reviews-container">
        {
          reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((review) =>
            <ReviewCard key={review.id} review={review} />
          )
        }
        {reviews.length === 0 && (<div>Sem avaliações até o momento</div>)}
        <div className="review-form-container">
          <h3>Deixe seu review</h3>
          <ReviewForm onNewReview={handleNewReview} fetchReviews={fetchReviews} /> {/* Passa a função aqui */}
        </div>
      </div>
    </section>
  );
}
