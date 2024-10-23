const getReviews = async () => {
  try {
    const response = await fetch(`https://apis.codante.io/api/reviews-api/reviews`);
    if (!response.ok) {
      throw new Error('Error trying to fetch the reviews.');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Re-lançando o erro para ser tratado em outro lugar, se necessário
  }
};

async function createReview(name, description, stars) {
  try {
    const response = await fetch(`https://apis.codante.io/api/reviews-api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, stars }),
    });

    if (!response.ok) {
      const errorDetails = await response.json(); // Captura o corpo da resposta de erro
      console.error(`API Error: ${response.status}`, errorDetails);
      throw new Error("An error occurred while submitting your review.");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
}


export { getReviews, createReview };
