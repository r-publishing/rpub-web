import{c as l,a as m,b,r as o,d as s,e as A,f as T}from"./vendor.31204d28.js";import{$ as f,C as a}from"./CopyText.4ba1af2e.js";/* empty css                                               */const n=l(import.meta.url,{modules:[{module:f,specifier:"../../components/CopyText.svelte"}],hydratedComponents:[a],hoisted:[]}),L=m(import.meta.url,"https://r-publishing.github.io/rpub-web");b(async(t,i,r)=>{const d=t.createAstro(L,i,r),{project:e}=d.props,p=[{props:{"data-astro-id":"2T7Y76LA"},children:".Project.astro-2T7Y76LA{width:100%;}.DonateLabel.astro-2T7Y76LA{margin-bottom:0;margin-left:0.6em;}"}];for(const c of p)t.styles.add(c);return o`
<div class="col d-flex align-items-start shadow-sm astro-2T7Y76LA">
    <div class="Project astro-2T7Y76LA">
        ${s(t,r.title)}
        ${s(t,r.description)}
        ${e.donationRevAddr?o`<p class="DonateLabel astro-2T7Y76LA">Donate REV</p>${A(t,"CopyText",a,{text:e.donationRevAddr,"client:visible":!0,"client:component-path":n.getPath(a),"client:component-export":n.getExport(a),class:"astro-2T7Y76LA"})}`:null}


        ${e.url?o`<a class="btn btn-primary btn-margin astro-2T7Y76LA"${T(e.url,"href")} target="_blank" rel="noreferrer">Visit Project</a>`:o`<a class="btn disabled btn-primary btn-margin astro-2T7Y76LA">Coming soon</a>`}
    </div>
</div>

`});
