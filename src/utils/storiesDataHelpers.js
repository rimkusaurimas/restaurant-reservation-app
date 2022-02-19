export const addLikedStories = (data) => {
  if (data && data.userData && data.stories) {
    const likedIDs = data.userData[0].liked.stories;
    const liked = new Set(likedIDs.map((story) => story.id));
    return {
      ...data,
      stories: data.stories.map((story) => ({
        ...story,
        isLiked: liked.has(story.id),
      })),
    };
  } else {
    return data;
  }
};
