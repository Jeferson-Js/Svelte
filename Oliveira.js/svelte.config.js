import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter(),
    target: "#svelte",
  },
  preprocess: preprocess(),
};

export default config;
