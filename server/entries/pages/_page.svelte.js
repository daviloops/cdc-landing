import { c as create_ssr_component, d as add_attribute } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1d9vok3{min-height:100vh;min-width:100vw;display:flex;flex-direction:column;background-image:url('../static/images/backgroundCdcBlue.svg');background-size:cover}.background-image.svelte-1d9vok3{width:100%;height:auto}.logo-container.svelte-1d9vok3{width:100%;padding:1rem;text-align:center}.logo-image.svelte-1d9vok3{width:208px;height:auto}.content-container.svelte-1d9vok3{width:100%;padding:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1}.in-progress-image-container.svelte-1d9vok3{margin-bottom:0.5rem}.in-progress-image.svelte-1d9vok3{width:91px;height:auto}.paper.svelte-1d9vok3{width:fit-content;padding:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#FFF;border-radius:1rem;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}.text.svelte-1d9vok3{text-align:center;font-size:20px;font-weight:600}.link.svelte-1d9vok3{text-decoration:none;&:hover {\n      text-decoration: underline;\n    }}",
  map: null
};
const srcFooterImg = "src/static/images/bottomBackground.svg";
const srcLogoImg = "src/static/images/logoDark.svg";
const srcInProgressImg = "src/static/images/roadBarrier.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<div class="container svelte-1d9vok3"><div class="logo-container svelte-1d9vok3"><img alt="logo"${add_attribute("src", srcLogoImg, 0)} class="logo-image svelte-1d9vok3"></div>
  <div class="content-container svelte-1d9vok3"><div class="paper svelte-1d9vok3"><div class="in-progress-image-container svelte-1d9vok3"><img alt="in-progress"${add_attribute("src", srcInProgressImg, 0)} class="in-progress-image svelte-1d9vok3"></div>
      <p class="text svelte-1d9vok3">Página en construcción...</p>
      <a href="https://api.whatsapp.com/send?phone=15551234567" class="link svelte-1d9vok3">más información</a></div></div>
  <img alt="background"${add_attribute("src", srcFooterImg, 0)} class="background-image svelte-1d9vok3">
</div>`;
});
export {
  Page as default
};
