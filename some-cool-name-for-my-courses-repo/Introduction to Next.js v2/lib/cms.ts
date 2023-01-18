const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};

export const getAllPosts = async () => {
  await delay(3000);

  return new Array(10).fill(1).map((_, i) => ({
    id: i,
    title: `Post ${i}`,
    content: `Content ${i}`,
    slug: `post-${i}`,
  }));
};
