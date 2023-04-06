<script>
    import "../app.css";
  import Cabecalho from "../components/Cabecalho.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main>
<Cabecalho/>
<slot />
<Footer />
</main>
