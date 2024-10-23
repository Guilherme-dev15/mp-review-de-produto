import './StarsRating.css'
import { useState } from 'react'
import greenStar from '../assets/green-star.svg'
import grayStar from '../assets/gray-star.svg'

export default function StarsRating({ value, onChange }) {
    const [hoveredStar, setHoverStar] = useState(-1)
    const [selectedStar, setSelectedStar] = useState(value)
    const stars = [1, 2, 3, 4, 5]

    const handleClick = (star) => {
        setSelectedStar(star);
        setHoverStar(-1);
        onChange(star);  // Correção aqui
    }

    return (
        <div className="stars-rating" onMouseLeave={() => setHoverStar(-1)}>
            {
                stars.map((star) => (
                    <button
                        key={star}
                        type='button'
                        aria-selected={star <= selectedStar && hoveredStar === -1}
                        onClick={() => handleClick(star)}
                        onMouseOver={() => setHoverStar(star)}
                    >
                        <img
                            src={star <= hoveredStar || (selectedStar >= star && hoveredStar === -1) ? greenStar : grayStar}
                            alt={`${star} estrela(s)`}
                        />
                    </button>
                ))
            }
        </div>
    )
}
