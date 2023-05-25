import { c as create_ssr_component, e as escape } from './index-b446aefc.js';

const css = {
  code: "@import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');@import url('https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css');@import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');@font-face{font-family:'kaushan-script';font-style:bold;font-weight:600;src:url(https://euem.net/fonts/kaushan-script-regular-webfont.woff) format(woff)\n\n    }@font-face{font-family:'campton-bold';font-style:bold;src:url(https://euem.net/fonts/Campton-BoldDEMO.woff2) format(woff2)\n\n    }@font-face{font-family:'campton-light';font-style:normal;src:url(https://euem.net/fonts/Campton-LightDEMO.woff2) format(woff2)\n\n    }#navigation.svelte-64f1ls.svelte-64f1ls{position:fixed;width:100%;height:50px;background-color:var(--white);display:flex;justify-content:space-between;margin:auto;z-index:100000}.navigation-div.svelte-64f1ls.svelte-64f1ls{width:50%;margin:auto}.navigation-item.svelte-64f1ls.svelte-64f1ls{line-height:50px;text-align:left;text-decoration:none;color:black;padding:20px 20px 20px 0px;font-size:18px;font-family:'campton-bold'}#logo.svelte-64f1ls.svelte-64f1ls{position:absolute;height:30px;padding:auto;padding:10px 10px 10px 40px\n\n    }.footer.svelte-64f1ls.svelte-64f1ls{display:flex}.footer.svelte-64f1ls .box.svelte-64f1ls{width:25%;font-family:'campton-light';text-align:left;align-items:center;justify-content:center;padding:60px 80px;font-size:20px}",
  map: null
};
let midnight = "#215060";
let viridian = "#3A9693";
let white = "#FAFAFA";
let cardinal = "#AD343E";
let orange = "#F77F00";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"root"}" style="${"--midnight : " + escape(midnight, true) + "; --viridian : " + escape(viridian, true) + "; --white : " + escape(white, true) + "; --cardinal : " + escape(cardinal, true) + "; --orange : " + escape(orange, true)}"><div id="${"navigation"}" class="${"svelte-64f1ls"}"><div class="${"navigation-div svelte-64f1ls"}"><a href="${"/"}" class="${"navigation-item svelte-64f1ls"}"><img src="${"https://cdcssl.ibsrv.net/ibimg/smb/120x161_80/webmgr/0a/0/m/5a6644267f0e2_BBCClogo1.png"}" id="${"logo"}" class="${"svelte-64f1ls"}"></a>
            <a href="${"/"}" class="${"navigation-item svelte-64f1ls"}" style="${"padding-left: 50px; font-family:'kaushan-script'"}">BBCC</a>
            <a href="${"/"}" class="${"navigation-item svelte-64f1ls"}" style="${"padding-left: 10px;"}">Home</a>
            <a href="${"/about"}" class="${"navigation-item svelte-64f1ls"}">About us</a>
            <a href="${"/tips"}" class="${"navigation-item svelte-64f1ls"}">Tips</a></div>

        <div class="${"navigation-div svelte-64f1ls"}"><a href="${"/services"}" class="${"navigation-item svelte-64f1ls"}">Services</a>
            <a href="${"/cases"}" class="${"navigation-item svelte-64f1ls"}">Cases</a>
            <a href="${"/reservation"}" class="${"navigation-item svelte-64f1ls"}">Reservation</a></div></div>

    ${slots.default ? slots.default({}) : ``}

    <div class="${"footer svelte-64f1ls"}"><div class="${"box svelte-64f1ls"}">Contact Info
        
            <div style="${"padding-top:20px; font-size:13px;"}">617-523-1400
            
            </div></div>
        <div class="${"box svelte-64f1ls"}">Operation Hours

            <div style="${"padding-top:20px; font-size:13px;"}">Tuesday 10:00 A.M. - 12:00 A.M.
            
            </div></div>
        <div class="${"box svelte-64f1ls"}">Location

            <div style="${"padding-top:20px; font-size:13px;"}">67 Newbury Street<br>
                Boston, MA 02116
            
            </div></div>
        <div class="${"box svelte-64f1ls"}">Social Media

            <div style="${"padding-top:20px; font-size:13px;"}"><a href="${"https://www.facebook.com/people/Boston-Benevolent-Chiropractic-Clinic/100069382900176/"}" style="${"text-decoration:none; color:black;"}">Facebook</a></div></div></div>

</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c794ba26.js.map
