import { c as create_ssr_component, v as validate_component, o as onDestroy, d as add_attribute } from './index-b446aefc.js';

const css$1 = {
  code: "@import 'leaflet/dist/leaflet.css';#map.svelte-jfjj3u{position:initial;height:100%;width:100%}",
  map: null
};
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapElement;
  onDestroy(async () => {
  });
  $$result.css.add(css$1);
  return `<div id="${"map"}" class="${"svelte-jfjj3u"}"${add_attribute("this", mapElement, 0)}></div>`;
});
const css = {
  code: "#reservation-top.svelte-v6vspp{height:350px;display:flex;padding-top:50px}#reservation-top-left.svelte-v6vspp{display:flex;flex-direction:column;width:50%}#reservation-top-right.svelte-v6vspp{width:50%}#reservation-title.svelte-v6vspp{font-family:'campton-bold';font-size:60px;padding:50px 80px;margin-top:auto}#reservation-middle.svelte-v6vspp{display:flex}#reservation-middle-left.svelte-v6vspp{width:calc(50% - 160px);background-color:#FAFAFA;font-family:'campton-light';font-size:26px;padding:80px}#reservation-middle-right.svelte-v6vspp{width:calc(50% - 160px);font-family:'campton-light';font-size:26px;padding:80px}.divider.svelte-v6vspp{height:1px;background-color:var(--midnight)}.input.svelte-v6vspp{width:calc(100% - 15px);height:50px;font-family:'campton-light';font-size:20px;padding:5px;margin-top:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"reservation-top"}" class="${"svelte-v6vspp"}"><div id="${"reservation-top-left"}" class="${"svelte-v6vspp"}"><div id="${"reservation-title"}" class="${"svelte-v6vspp"}">Reservation
    
        </div></div>

    <div id="${"reservation-top-right"}" class="${"svelte-v6vspp"}">${validate_component(LeafletMap, "LeafletMap").$$render($$result, {}, {}, {})}</div></div>

<div class="${"divider svelte-v6vspp"}"></div>

<div id="${"reservation-middle"}" class="${"svelte-v6vspp"}"><div id="${"reservation-middle-left"}" class="${"svelte-v6vspp"}">Name<br>

        <input class="${"input svelte-v6vspp"}" style="${"border-color: #215060;"}" placeholder="${"Louis Brandeis (Required)"}"> <br> <br>

        Email<br>

        <input class="${"input svelte-v6vspp"}" style="${"border-color: #3A9693"}" placeholder="${"XXXX@XXXX.XXX (Required)"}"> <br> <br>

        Phone Number<br>

        <input class="${"input svelte-v6vspp"}" style="${"border-color: #AD343E"}" placeholder="${"(XXX)XXX-XXXX (Required)"}"> <br> <br></div>

    <div id="${"reservation-middle-right"}" class="${"svelte-v6vspp"}">Notes to the Doctor <br>

        <textarea style="${"width:calc(100% - 15px); height: calc(100% - 165px); font-size:20px; font-family:'campton-light'; margin-top: 10px; padding: 5px; border-color: #F77F00; border-width:2px;"}"></textarea>

        <div style="${"height:20px"}"></div>
        <a href="${"/reservation"}" style="${"width:calc(100% - 25px); height: 50px; background-color: #FAFAFA; border-color: black; border-width: 2px; padding: 14px; border-style: solid; align-items:center; justify-content:center; margin-top: 20px; text-decoration: none; color: black;"}">Submit

        </a></div></div>

<div class="${"divider svelte-v6vspp"}"></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-22131798.js.map
