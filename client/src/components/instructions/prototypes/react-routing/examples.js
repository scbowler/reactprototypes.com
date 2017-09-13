const viewApp = {show: 'View Full src/components/app.js Example', hide: 'Hide app.js Example'};
const viewIndex = {show: 'View Full src/index.js Example', hide: 'Hide index.js Example'};
const viewNav = {show: 'View Full src/component/nav.js Example', hide: 'Hide nav.js Example'};

export default {
    fs1e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">h1</span>&gt;This is ROUTING!&lt;/<span class="pl-ent">h1</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
);
</pre></div>`,
        text: viewApp
    },
    fs1e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);
</pre></div>`,
        text: viewIndex
    },
    fs2e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> BrowserRouter</span><span class="pl-k"> as</span><span class="pl-smi"> Router</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">Router</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;
    &lt;/<span class="pl-ent"><span class="pl-c1">Router</span></span>&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`
    },
    fs2e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> BrowserRouter</span><span class="pl-k"> as</span><span class="pl-smi"> Router</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">Router</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;
    &lt;/<span class="pl-ent"><span class="pl-c1">Router</span></span>&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);
</pre></div>`,
        text: viewIndex
    },
    fs2e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">h1</span>&gt;Welcome to our site&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed adipisci suscipit! Quasi, incidunt repudiandae fuga porro totam architecto. Numquam eveniet voluptas non accusantium nihil cumque sunt facere aut doloremque, nisi debitis quos facilis? Repellat dolor quo quis. Eaque dolores sunt earum voluptatum? Veritatis incidunt harum nihil et nesciunt iusto!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
)
</pre></div>`,
        text: {show: 'View Full src/component/welcome.js Example', hide: 'Hide welcome.js Example'}
    },
    fs2e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> Route</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs3e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> Link</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs3e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;

    &lt;/<span class="pl-ent">li</span>&gt;
&lt;/<span class="pl-ent">ul</span>&gt;</pre></div>`
    },
    fs3e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
&lt;/<span class="pl-ent">ul</span>&gt;</pre></div>`
    },
    fs3e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;</pre></div>`
    },
    fs3e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Link</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
    &lt;/<span class="pl-ent">ul</span>&gt;
)
</pre></div>`,
        text: viewNav
    },
    fs3e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Nav</span></span>/&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`
    },
    fs3e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Route</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Nav</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./nav<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Welcome</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./welcome<span class="pl-pds">'</span></span>;


<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Nav</span></span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
);</pre></div>`,
        text: viewApp
    },
    fs4e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">h1</span>&gt;Our Macarons&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed adipisci suscipit! Quasi, incidunt repudiandae fuga porro totam architecto. Numquam eveniet voluptas non accusantium nihil cumque sunt facere aut doloremque, nisi debitis quos facilis? Repellat dolor quo quis. Eaque dolores sunt earum voluptatum? Veritatis incidunt harum nihil et nesciunt iusto!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
)</pre></div>`,
        text: {show: 'View Full src/component/our_macarons.js Example', hide: 'Hide our_macarons.js Example'}
    },
    fs4e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Route</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Nav</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./nav<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Welcome</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./welcome<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> OurMacarons</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./our_macarons<span class="pl-pds">'</span></span>;


<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Nav</span></span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">OurMacarons</span></span><span class="pl-pse">}</span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
);</pre></div>`,
        text: viewApp
    },
    fs4e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Link</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Our Macarons&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
    &lt;/<span class="pl-ent">ul</span>&gt;
)
</pre></div>`,
        text: viewNav
    },
    fs4e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">exact</span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs4e5: {
        html: `import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Welcome from './welcome';
import OurMacarons from './our_macarons';


export default () => (
    <div className="container">
        <Nav/>
        <Route exact path="/" component={Welcome}/>
        <Route path="/our-macarons" component={OurMacarons}/>
    </div>
);`,
        text: viewApp
    },
    fs5e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">h1</span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed adipisci suscipit! Quasi, incidunt repudiandae fuga porro totam architecto. Numquam eveniet voluptas non accusantium nihil cumque sunt facere aut doloremque, nisi debitis quos facilis? Repellat dolor quo quis. Eaque dolores sunt earum voluptatum? Veritatis incidunt harum nihil et nesciunt iusto!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
)
</pre></div>`,
        text: {show: 'View Full src/component/gifts_parties.js Example', hide: 'Hide gifts_parties.js Example'}
    },
    fs5e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent">h1</span>&gt;Contact Us&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;<span class="pl-ent">p</span>&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sed adipisci suscipit! Quasi, incidunt repudiandae fuga porro totam architecto. Numquam eveniet voluptas non accusantium nihil cumque sunt facere aut doloremque, nisi debitis quos facilis? Repellat dolor quo quis. Eaque dolores sunt earum voluptatum? Veritatis incidunt harum nihil et nesciunt iusto!&lt;/<span class="pl-ent">p</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
)</pre></div>`,
        text: {show: 'View Full src/component/contact.js Example', hide: 'Hide contact.js Example'}
    },
    fs5e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">GiftsParties</span></span><span class="pl-pse">}</span>/&gt;
&lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Contact</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs5e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Route</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Nav</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./nav<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Welcome</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./welcome<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> OurMacarons</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./our_macarons<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> GiftsParties</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./gifts_parties<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Contact</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact<span class="pl-pds">'</span></span>;


<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Nav</span></span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">exact</span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Welcome</span></span><span class="pl-pse">}</span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">OurMacarons</span></span><span class="pl-pse">}</span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">GiftsParties</span></span><span class="pl-pse">}</span>/&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">Route</span></span> <span class="pl-e">path</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">component</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">Contact</span></span><span class="pl-pse">}</span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
);</pre></div>`,
        text: viewApp
    },
    fs5e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
&lt;/<span class="pl-ent">li</span>&gt;
&lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Contact&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
&lt;/<span class="pl-ent">li</span>&gt;</pre></div>`
    },
    fs5e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Link</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Our Macarons&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Link</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Contact&lt;/<span class="pl-ent"><span class="pl-c1">Link</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
    &lt;/<span class="pl-ent">ul</span>&gt;
)
</pre></div>`,
        text: viewNav
    },
    fs6e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> NavLink</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs6e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Our Macarons&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Contact&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
&lt;/<span class="pl-ent">ul</span>&gt;</pre></div>`,
    },
    fs6e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">exact</span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;</pre></div>`
    },
    fs6e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">exact</span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Our Macarons&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
    &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Contact&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
    &lt;/<span class="pl-ent">li</span>&gt;
&lt;/<span class="pl-ent">ul</span>&gt;</pre></div>`
    },
    fs6e5: {
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.nav-item</span> <span class="pl-e">.nav-link.selected</span> {
    <span class="pl-c1"><span class="pl-c1">color</span></span>: <span class="pl-c1">#999</span>;
    <span class="pl-c1"><span class="pl-c1">background-image</span></span>: <span class="pl-c1">linear-gradient</span>(<span class="pl-k">to</span> <span class="pl-c1">bottom</span>, <span class="pl-c1">#ddd</span>, <span class="pl-c1">#fff</span>);
}
</pre></div>`
    },
    fs6e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./nav.css<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs6e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> NavLink</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./nav.css<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">ul</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav nav-tabs mt-3<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">exact</span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Welcome&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/our-macarons<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Our Macarons&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/gifts-parties<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Gifts <span class="pl-c1">&amp;<span class="pl-ent">amp</span>;</span> Parties&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
        &lt;<span class="pl-ent">li</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-item<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">NavLink</span></span> <span class="pl-e">to</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>/contact<span class="pl-pds">"</span></span> <span class="pl-e">activeClassName</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>active selected<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>nav-link<span class="pl-pds">"</span></span>&gt;Contact&lt;/<span class="pl-ent"><span class="pl-c1">NavLink</span></span>&gt;
        &lt;/<span class="pl-ent">li</span>&gt;
    &lt;/<span class="pl-ent">ul</span>&gt;
)
</pre></div>`,
        text: viewNav
    }
};
