const viewApp = { show: 'Show Full src/components/app.js Example', hide: 'Hide app.js Example'};
const viewMoviesContainer = { show: 'Show Full src/components/movies_container.js Example', hide: 'Hide movies_container.js Example'};
const viewMovie = { show: 'Show Full src/components/movie.js Example', hide: 'Hide movie.js Example'};

export default {
    fs1e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span>&gt;
            &lt;<span class="pl-ent">h3</span>&gt;Movie&lt;/<span class="pl-ent">h3</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    );
}
</pre></div>`,
        text: viewMovie
    },
    fs1e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Movie</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./movie<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">MoviesContainer</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h2</span>&gt;Movie Container&lt;/<span class="pl-ent">h2</span>&gt;
                &lt;<span class="pl-ent"><span class="pl-c1">Movie</span></span>/&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> MoviesContainer</span>;
</pre></div>`,
        text: viewMoviesContainer
    },
    fs1e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> MoviesContainer</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./movies_container<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> (
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Axios Demo&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">MoviesContainer</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
)
</pre></div>`,
        text: viewApp
    },
    fs2e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> axios</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>axios<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">componentDidMount</span>(){

}</pre></div>`
    },
    fs2e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">url</span><span class="pl-k"> =</span> <span class="pl-s"><span class="pl-pds">'</span>http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">axios</span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-smi">url</span>);</pre></div>`
    },
    fs2e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">axios</span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-smi">url</span>)<span class="pl-k">.</span><span class="pl-en">then</span>();</pre></div>`
    },
    fs2e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">axios</span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-smi">url</span>)<span class="pl-k">.</span><span class="pl-en">then</span>(() <span class="pl-k">=&gt;</span> {

});</pre></div>`
    },
    fs2e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">axios</span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-smi">url</span>)<span class="pl-k">.</span><span class="pl-en">then</span>((<span class="pl-smi">resp</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Resp:<span class="pl-pds">'</span></span>,<span class="pl-smi"> resp</span>);
});</pre></div>`
    },
    fs2e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">        <span class="pl-s">movies</span>:</span> []
    };
}</pre></div>`,
        text: {show: 'View constructor() Example', hide: 'Hide constructor() Example'}
    },
    fs2e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">axios</span><span class="pl-k">.</span><span class="pl-en">get</span>(<span class="pl-smi">url</span>)<span class="pl-k">.</span><span class="pl-en">then</span>((<span class="pl-smi">resp</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Resp:<span class="pl-pds">'</span></span>,<span class="pl-smi"> resp</span>);

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">movies</span>:</span><span class="pl-smi"> resp</span><span class="pl-k">.</span><span class="pl-smi">data</span><span class="pl-k">.</span><span class="pl-smi">feed</span><span class="pl-k">.</span><span class="pl-smi">entry</span>
    });
});</pre></div>`
    },
    fs2e10: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>The State is:<span class="pl-pds">'</span></span>,<span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>);</pre></div>`
    },
    fs3e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">movieList</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">movies</span><span class="pl-k">.</span><span class="pl-en">map</span>();</pre></div>`
    },
    fs3e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">movieList</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">movies</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">movieInfo</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

});</pre></div>`
    },
    fs3e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">movieList</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">movies</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">movieInfo</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">Movie</span></span> <span class="pl-e">info</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">movieInfo</span></span><span class="pl-pse">}</span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span>/&gt;;
});</pre></div>`
    },
    fs3e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">return</span> (
    &lt;<span class="pl-ent">div</span>&gt;
        <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi"> movieList</span> </span><span class="pl-pse">}</span>
    &lt;/<span class="pl-ent">div</span>&gt;
)</pre></div>`
    },
    fs3e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Movie Info:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">info</span>);</pre></div>`
    },
    fs3e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> info</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span>;</pre></div>`
    },
    fs3e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span>[<span class="pl-s"><span class="pl-pds">'</span>im:image<span class="pl-pds">'</span></span>][<span class="pl-c1">2</span>]<span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`
    },
    fs3e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">h3</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span>[<span class="pl-s"><span class="pl-pds">'</span>im:name<span class="pl-pds">'</span></span>]<span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h3</span>&gt;</pre></div>`
    },
    fs3e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span><span class="pl-k">.</span><span class="pl-smi">summary</span><span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;</pre></div>`
    },
    fs3e10: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Movie Info:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">info</span>);

    <span class="pl-k">const</span> {<span class="pl-smi"> info</span> } <span class="pl-k">=</span><span class="pl-smi"> props</span>;

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span>&gt;
            &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span>[<span class="pl-s"><span class="pl-pds">'</span>im:image<span class="pl-pds">'</span></span>][<span class="pl-c1">2</span>]<span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>/&gt;
            &lt;<span class="pl-ent">h3</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span>[<span class="pl-s"><span class="pl-pds">'</span>im:name<span class="pl-pds">'</span></span>]<span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h3</span>&gt;
            &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">info</span><span class="pl-k">.</span><span class="pl-smi">summary</span><span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    );
}
</pre></div>`,
        text: viewMovie
    }
};
