import { ref } from "vue";

const getPosts = (url) => {
  const posts = ref([]);
  const error = ref(null);

  const load = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => (posts.value = data))
      .catch((err) => (error.value = err));
  };
  return { posts, error, load };
};

export default getPosts;
