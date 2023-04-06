<script>
import Footer from "../components/Footer.svelte";
import Navbar from "../components/Navbar.svelte";
import './app.css'
</script>

<main>
    <Navbar />
    <slot />
    <Footer />
</main>
