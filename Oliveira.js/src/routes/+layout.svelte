<script>
  import "../app.postcss";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>
<main>
  <Navbar />
  <slot />
  <Footer />
</main>
