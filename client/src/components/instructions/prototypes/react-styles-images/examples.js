const scrapbook = { show: 'View full src/components/scrapbook.js example', hide: 'Hide scrapbook.js'};
const scrapbookImage = { show: 'View full src/components/scrapbook_image.js example', hide: 'Hide scrapbook_image.js'};
const imgData = { show: 'View full src/components/image_data.js example', hide: 'Hide image_data.js'};

export default {
    importReact: { 
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>main-container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>main-title<span class="pl-pds">"</span></span>&gt;Scrapbook&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`
    },
    fs1e2: { 
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e3: { 
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`
    },
    fs1e4: { 
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.main-container</span> {
    <span class="pl-c1"><span class="pl-c1">background-color</span></span>: <span class="pl-c1">lightblue</span>;
    <span class="pl-c1"><span class="pl-c1">min-height</span></span>: <span class="pl-c1">100<span class="pl-k">vh</span></span>;
    <span class="pl-c1"><span class="pl-c1">padding</span></span>: <span class="pl-c1">15<span class="pl-k">px</span></span>;
}</pre></div>`
    },
    fs1e5: { 
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.main-title</span> {
    <span class="pl-c1"><span class="pl-c1">color</span></span>: <span class="pl-c1">white</span>;
    <span class="pl-c1"><span class="pl-c1">font-size</span></span>: <span class="pl-c1">3.5<span class="pl-k">rem</span></span>;
    <span class="pl-c1"><span class="pl-c1">text-align</span></span>: <span class="pl-c1">center</span>;
}</pre></div>`
    },
    fs1e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./app.css<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e7: { 
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;

<span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`,
        text: {
            show: 'View full "src/index.js" example',
            hide: 'Hide index.js'
        }
    },
    fs1e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./app.css<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>main-container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>main-title<span class="pl-pds">"</span></span>&gt;Scrapbook&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
        text: {
            show: 'View full "src/components/app.js" example',
            hide: 'Hide app.js'
        }
    },
    fs1e9: {
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.main-container</span> {
    <span class="pl-c1"><span class="pl-c1">background-color</span></span>: <span class="pl-c1">lightblue</span>;
    <span class="pl-c1"><span class="pl-c1">min-height</span></span>: <span class="pl-c1">100<span class="pl-k">vh</span></span>;
    <span class="pl-c1"><span class="pl-c1">padding</span></span>: <span class="pl-c1">15<span class="pl-k">px</span></span>;
}

<span class="pl-e">.main-title</span> {
    <span class="pl-c1"><span class="pl-c1">color</span></span>: <span class="pl-c1">white</span>;
    <span class="pl-c1"><span class="pl-c1">font-size</span></span>: <span class="pl-c1">3.5<span class="pl-k">rem</span></span>;
    <span class="pl-c1"><span class="pl-c1">text-align</span></span>: <span class="pl-c1">center</span>;
}
</pre></div>`,
        text: {
            show: 'View full "src/components/app.css" example',
            hide: 'Hide app.css'
        }
    },
    fs2e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi">  React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-container<span class="pl-pds">"</span></span>&gt;
            Images will go here
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`
    },
    fs2e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> Scrapbook</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e3: {
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.scrapbook-container</span> {
    <span class="pl-c1"><span class="pl-c1">margin</span></span>: <span class="pl-c1">10<span class="pl-k">px</span></span> <span class="pl-c1">auto</span>;
    <span class="pl-c1"><span class="pl-c1">min-height</span></span>: <span class="pl-c1">85<span class="pl-k">vh</span></span>;
    <span class="pl-c1"><span class="pl-c1">position</span></span>: <span class="pl-c1">relative</span>;
    <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">80<span class="pl-k">vw</span></span>;
}</pre></div>`
    },
    fs2e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> Your names may vary</span>
<span class="pl-k">import</span><span class="pl-smi"> puppy</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">"</span>./images/puppy1.jpeg<span class="pl-pds">"</span></span>;</pre></div>`
    },
    fs2e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">puppy</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs2e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi">  React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">"</span>./images/puppy1.jpeg<span class="pl-pds">"</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook.css<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">puppy</span></span><span class="pl-pse">}</span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
        text: scrapbook
    },
    fs3e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> Your names may vary</span>
<span class="pl-k">import</span><span class="pl-smi"> puppy</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">"</span>./images/puppy1.jpeg<span class="pl-pds">"</span></span>;</pre></div>`
    },
    fs3e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> [];</pre></div>`
    },
    fs3e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> [
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    }
];</pre></div>`
    },
    fs3e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> puppy</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy1.jpeg<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> [
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    }
];</pre></div>`,
        text: imgData
    },
    fs3e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>scrapbook image props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);

<span class="pl-k">    return</span> &lt;<span class="pl-ent">div</span>&gt;Image goes here&lt;/<span class="pl-ent">div</span>&gt;
}
</pre></div>`,
        text: {
            show: 'View full src/components/scrapbook_image.js example',
            hide: 'Hide scrapbook_image.js'
        }
    },
    fs3e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> imageData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./image_data<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs3e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> ScrapbookImage</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook_image<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs3e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">ScrapbookImage</span></span> <span class="pl-e">about</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">imageData</span>[<span class="pl-c1">0</span>]</span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs3e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi">  React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> imageData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./image_data<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ScrapbookImage</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook_image<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook.css<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">ScrapbookImage</span></span> <span class="pl-e">about</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">imageData</span>[<span class="pl-c1">0</span>]</span><span class="pl-pse">}</span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
        text: scrapbook
    },
    fs3e10: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>scrapbook image props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);

    <span class="pl-k">const</span> {<span class="pl-smi"> src</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">about</span>;

<span class="pl-k">    return</span> &lt;<span class="pl-ent">div</span>&gt;Image goes here&lt;/<span class="pl-ent">div</span>&gt;
}</pre></div>`
    },
    fs3e11: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>scrapbook image props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);

    <span class="pl-k">const</span> {<span class="pl-smi"> src</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">about</span>;

<span class="pl-k">    return</span> &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">src</span></span><span class="pl-pse">}</span>/&gt;
}</pre></div>`
    },
    fs3e12: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>scrapbook image props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);

    <span class="pl-k">const</span> {<span class="pl-smi"> src</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">about</span>;

<span class="pl-k">    return</span> &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">src</span></span><span class="pl-pse">}</span>/&gt;
}
</pre></div>`,
        text: scrapbookImage
    },
    fs3e13: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c"><span class="pl-c">//</span> Your file names will vary</span>
<span class="pl-k">import</span><span class="pl-smi"> puppy1</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy1.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy2</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy2.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy3</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy3.jpg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy4</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy4.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy5</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy5.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy6</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy6.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy7</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy7.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy8</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy8.jpeg<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs3e14: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>{
<span class="pl-c1">    <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy2</span>,
<span class="pl-c1">    <span class="pl-s">style</span>:</span> {}
}</pre></div>`
    },
    fs3e15: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> puppy1</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy1.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy2</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy2.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy3</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy3.jpg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy4</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy4.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy5</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy5.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy6</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy6.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy7</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy7.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy8</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy8.jpeg<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> [
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy1</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy2</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy3</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy4</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy5</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy6</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy7</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy8</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {}
    }
];
</pre></div>`,
        text: imgData
    },
    fs3e16: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">images</span><span class="pl-k"> =</span><span class="pl-smi"> imageData</span><span class="pl-k">.</span><span class="pl-en">map</span>();</pre></div>`
    },
    fs3e17: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">images</span><span class="pl-k"> =</span><span class="pl-smi"> imageData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">img</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

});</pre></div>`
    },
    fs3e18: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">images</span><span class="pl-k"> =</span><span class="pl-smi"> imageData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">img</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">ScrapbookImage</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">about</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">img</span></span><span class="pl-pse">}</span>/&gt;
});</pre></div>`
    },
    fs3e19: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-container<span class="pl-pds">"</span></span>&gt;
    <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">images</span></span><span class="pl-pse">}</span>
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`
    },
    fs3e20: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi">  React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> imageData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./image_data<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ScrapbookImage</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook_image<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">'</span>./scrapbook.css<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {

    <span class="pl-k">const</span> <span class="pl-smi">images</span><span class="pl-k"> =</span><span class="pl-smi"> imageData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">img</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-k">        return</span> &lt;<span class="pl-ent"><span class="pl-c1">ScrapbookImage</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">about</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">img</span></span><span class="pl-pse">}</span>/&gt;
    });

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-container<span class="pl-pds">"</span></span>&gt;
            <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">images</span></span><span class="pl-pse">}</span>
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
        text: scrapbook
    },
    fs3e21: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">return</span> &lt;<span class="pl-ent">img</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-image<span class="pl-pds">"</span></span>  <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">src</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs3e22: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>scrapbook image props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);

    <span class="pl-k">const</span> {<span class="pl-smi"> src</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">about</span>;

<span class="pl-k">    return</span> &lt;<span class="pl-ent">img</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>scrapbook-image<span class="pl-pds">"</span></span>  <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">src</span></span><span class="pl-pse">}</span>/&gt;;
}
</pre></div>`,
        text: scrapbookImage
    },
    fs3e23: {
        html: `<div class="highlight highlight-source-css"><pre><span class="pl-e">.scrapbook-image</span> {
    <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">20<span class="pl-k">%</span></span>;
    <span class="pl-c1"><span class="pl-c1">border</span></span>: <span class="pl-c1">10<span class="pl-k">px</span></span> <span class="pl-c1">solid</span> <span class="pl-c1">#fff</span>;
}</pre></div>`
    },
    fs3e24: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> puppy1</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy1.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy2</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy2.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy3</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy3.jpg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy4</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy4.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy5</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy5.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy6</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy6.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy7</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy7.jpeg<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> puppy8</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./images/puppy8.jpeg<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> [
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy1</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>5%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(-10deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy2</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>40%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(6deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy3</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">right</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>15%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(-9deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy4</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>8%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">top</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>28%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(8deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy5</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>37%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">top</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>25%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(-12deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy6</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">right</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>12%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">top</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>26%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(10deg)<span class="pl-pds">'</span></span>
        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy7</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>25%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">top</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>48%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(-5deg)<span class="pl-pds">'</span></span>

        }
    },
    {
<span class="pl-c1">        <span class="pl-s">src</span>:</span><span class="pl-smi"> puppy8</span>,
<span class="pl-c1">        <span class="pl-s">style</span>:</span> {
<span class="pl-c1">            <span class="pl-s">right</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>25%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">top</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>52%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>rotate(16deg)<span class="pl-pds">'</span></span>
        }
    }
];
</pre></div>`,
        text: imgData
    }
}
