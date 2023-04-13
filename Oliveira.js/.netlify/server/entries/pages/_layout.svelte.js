import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-gray-900 text-gray-300"><div class="container mx-auto py-10 px-4 md:flex md:justify-between"><div class="md:w-1/3 mb-6 md:mb-0"><h3 class="text-lg text-blue-500 font-bold mb-2 animate-pulse">Oliveira.js</h3>
      <p class="text-sm">&quot;A jornada de um desenvolvedor Fullstack é desafiadora, mas a recompensa é o conhecimento e a capacidade de criar soluções completas e úteis para o mundo digital.&quot;</p></div>
    <div class="md:w-1/3 mb-6 md:mb-0"><h3 class="text-lg text-blue-500 font-bold mb-2">Navegação</h3>
      <ul class="text-sm"><li><a href="/home" class="hover:text-white">Home</a></li>
        <li><a href="/about" class="hover:text-white">About</a></li>
        <li><a href="/gallery" class="hover:text-white">Portifolio</a></li>
        <li><a href="/contact" class="hover:text-white">Contact</a></li></ul></div>
    <div class="md:w-1/3"><h3 class="text-lg text-blue-500 font-bold mb-2">Contato</h3>
      <p class="text-sm">São Paulo capital</p>
      <p class="text-sm">Telefone: (11) 970640820</p>
      <p class="text-sm"><a href="https://github.com/Jeferson-Js" target="_blank">Github: https://github.com/Jeferson-Js</a></p>
      <p class="text-sm">Email: oliveira.jeferson.jso@gmail.com</p></div></div>
  <div class="bg-gradient-to-r from-purple-400 to-blue-500 text-sm py-4"><div class="container mx-auto text-center"><p class="animate-bounce text-white">Todos os direitos reservados © abril de 2023</p></div></div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><title>Inicío</title></header>
<header class="flex"><nav class="sm:flex lg:justify-between sm:justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 w-full h-20 fixed p-5 shadow shadow-slate-500 z-10"><a class="text-2xl text-white capitalize hidden md:block" href="/home"><h1><img class="w-20 h-16 rounded" src="/assets/Logo.png" alt="logo da aplicação"></h1></a>

        <ul class="flex justify-center items-center my-2 gap-3"><li class="text-white text-base hover:border-b border-dark-200 duration-1000"><a href="/home">Home</a></li>
            <li class="text-white text-base hover:border-b border-dark-200 duration-700"><a href="/about">About</a></li>
            <li class="text-white text-base hover:border-b border-dark-200 duration-700"><a href="/gallery">Portifolio</a></li>
            <li class="text-white text-base hover:border-b border-dark-200 duration-700"><a href="/contact">Contact</a></li></ul></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Layout as default
};
