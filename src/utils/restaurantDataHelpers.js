export const addLikedRestaurants = (data) => {
  if (data && data.userData && data.restaurants) {
    const likedIDs = data.userData[0].liked.restaurants;
    const liked = new Set(likedIDs.map((restaurant) => restaurant.id));
    return {
      ...data,
      restaurants: data.restaurants.map((restaurant) => ({
        ...restaurant,
        isLiked: liked.has(restaurant.id),
      })),
    };
  } else {
    return data;
  }
};

const addRestaurantRatings = (data) => {
  if (data && data.restaurants) {
    let ratings = [];
    const initRestaurants = data.restaurants;
    for (let restaurant of initRestaurants) {
      let rating = 0;
      let ratingSum = 0;
      if (restaurant.reviews && restaurant.reviews.length) {
        for (let review of restaurant.reviews) {
          ratingSum += review.rating;
        }
        rating = Math.round((ratingSum / restaurant.reviews.length) * 10) / 10;
      }
      ratings.push(rating);
    }
    const restaurants = initRestaurants.map((restaurant, index) => {
      return { ...restaurant, rating: ratings[index] };
    });
    return { ...data, restaurants: restaurants };
  } else {
    return data;
  }
};

export const processRestaurantData = (data) =>
  addLikedRestaurants(addRestaurantRatings(data));
