import { addLikedRestaurants } from "./restaurantDataHelpers";
import { addLikedStories } from "./storiesDataHelpers";

export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "loading":
      newState = { ...state, isLoading: true, hasError: false };
      break;

    case "loaded":
      newState = {
        data: { ...state.data, ...action.payload.data },
        isLoading: false,
        hasError: action.payload.hasError,
      };
      break;

    case "updateComment":
      {
        const stories = [...state.data.stories];
        const updatedStory = stories.find(
          (story) => story.id === action.payload.id
        );

        updatedStory.comments.unshift(action.payload.comment);
        newState = { ...state, data: { ...state.data, stories: [...stories] } };
      }
      break;

    case "likeRestaurant":
      {
        const initLikedRestaurants = state.data.userData[0].liked.restaurants;
        let updatedLikedRestaurants = initLikedRestaurants.filter(
          (restaurant) => restaurant.id !== action.payload.id
        );

        if (updatedLikedRestaurants.length >= initLikedRestaurants.length) {
          updatedLikedRestaurants = [
            ...updatedLikedRestaurants,
            { id: action.payload.id },
          ];
        }

        const updatedData = addLikedRestaurants({
          ...state.data,
          userData: [
            {
              ...state.data.userData[0],
              liked: {
                ...state.data.userData[0].liked,
                restaurants: updatedLikedRestaurants,
              },
            },
          ],
        });

        newState = { ...state, data: updatedData };
      }
      break;

    case "likeStory":
      {
        const initLikedStories = state.data.userData[0].liked.stories;
        let updatedLikedStories = initLikedStories.filter(
          (story) => story.id !== action.payload.id
        );

        let addLikes = 0;

        if (updatedLikedStories.length >= initLikedStories.length) {
          updatedLikedStories = [
            ...updatedLikedStories,
            { id: action.payload.id },
          ];
          addLikes = 1;
        } else {
          addLikes = -1;
        }

        const updatedStories = state.data.stories.map((story) =>
          story.id === action.payload.id
            ? { ...story, likes: story.likes + addLikes }
            : story
        );

        const updatedData = addLikedStories({
          ...state.data,
          userData: [
            {
              ...state.data.userData[0],
              liked: {
                ...state.data.userData[0].liked,
                stories: updatedLikedStories,
              },
            },
          ],
          stories: [...updatedStories],
        });

        newState = { ...state, data: updatedData };
      }
      break;

    default:
      throw new Error();
  }
  return newState;
};
