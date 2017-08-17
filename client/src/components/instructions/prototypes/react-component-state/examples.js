export default {
    importReact: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importReactComponent: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importApp: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;</pre></div>`,
    importStopwatch: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> Stopwatch</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./stopwatch<span class="pl-pds">'</span></span>;</pre></div>`,
    importTime: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> Time</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./format_time<span class="pl-pds">'</span></span>;</pre></div>`,
    exportStopwatch: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;</pre></div>`,
    example1: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> (<span class="pl-smi">props</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Stopwatch&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example2: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`,
    example3: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h3</span>&gt;This will be the stopwatch&lt;/<span class="pl-ent">h3</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;</pre></div>`,
    example4: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Stopwatch</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./stopwatch<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> (<span class="pl-smi">props</span>) <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Stopwatch&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Stopwatch</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example5: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);
}</pre></div>`,
    example6: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">    <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">    <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
};</pre></div>`,
    example7: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;</pre></div>`,
    example8: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
    &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example9: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        };
    }

    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;
</pre></div>`,
    example10: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">start</span>(){
<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">start</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()
    });
}</pre></div>`,
    example11: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">stop</span>(){
<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>
    });
}</pre></div>`,
    example12: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span></span><span class="pl-pse">}</span>&gt;Start&lt;/<span class="pl-ent">button</span>&gt;</pre></div>`,
    example13: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);</pre></div>`,
    example14: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        };

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
    }

    <span class="pl-en">start</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()
        });
    }

    <span class="pl-en">stop</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>
        });
    }

    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span></span><span class="pl-pse">}</span>&gt;Start&lt;/<span class="pl-ent">button</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">stop</span></span><span class="pl-pse">}</span>&gt;Stop&lt;/<span class="pl-ent">button</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;
</pre></div>`,
    example15: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> status</span>,<span class="pl-smi"> start</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;</pre></div>`,
    example16: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">if</span>(<span class="pl-smi">status</span><span class="pl-k"> ===</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>){
            
}</pre></div>`,
    example17: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">    <span class="pl-s">elapsed</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()<span class="pl-k"> -</span><span class="pl-smi"> start</span>
});</pre></div>`,
    example18: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);</pre></div>`,
    example19: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">update</span>(){
    <span class="pl-k">const</span> {<span class="pl-smi"> status</span>,<span class="pl-smi"> start</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">    if</span>(<span class="pl-smi">status</span><span class="pl-k"> ===</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()<span class="pl-k"> -</span><span class="pl-smi"> start</span>
        });

        <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
    }
}</pre></div>`,
    example20: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);</pre></div>`,
    example21: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">reset</span>(){
<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">        <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
    });
}</pre></div>`,
    example22: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        };

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
    }

    <span class="pl-en">start</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()
        });

        <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
    }

    <span class="pl-en">stop</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>
        });
    }

    <span class="pl-en">reset</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        });
    }

    <span class="pl-en">update</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> status</span>,<span class="pl-smi"> start</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        if</span>(<span class="pl-smi">status</span><span class="pl-k"> ===</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>){
<span class="pl-c1">            this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">                <span class="pl-s">elapsed</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()<span class="pl-k"> -</span><span class="pl-smi"> start</span>
            });

            <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span></span><span class="pl-pse">}</span>&gt;Start&lt;/<span class="pl-ent">button</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">stop</span></span><span class="pl-pse">}</span>&gt;Stop&lt;/<span class="pl-ent">button</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">reset</span></span><span class="pl-pse">}</span>&gt;Reset&lt;/<span class="pl-ent">button</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;
</pre></div>`,
    example23: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

}</pre></div>`,
    example24: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">render</span>(){
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example25: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> FormatTime</span>;
</pre></div>`,
    example26: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">h1</span>&gt;&lt;<span class="pl-ent"><span class="pl-c1">Time</span></span>/&gt;&lt;/<span class="pl-ent">h1</span>&gt;</pre></div>`,
    example27: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">h1</span>&gt;&lt;<span class="pl-ent"><span class="pl-c1">Time</span></span> <span class="pl-e">elapsed</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>/&gt;&lt;/<span class="pl-ent">h1</span>&gt;</pre></div>`,
    example28: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Time</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./format_time<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        };

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
    }

    <span class="pl-en">start</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()
        });

        <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
    }

    <span class="pl-en">stop</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>
        });
    }

    <span class="pl-en">reset</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        });
    }

    <span class="pl-en">update</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> status</span>,<span class="pl-smi"> start</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        if</span>(<span class="pl-smi">status</span><span class="pl-k"> ===</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>){
<span class="pl-c1">            this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">                <span class="pl-s">elapsed</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()<span class="pl-k"> -</span><span class="pl-smi"> start</span>
            });

            <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;&lt;<span class="pl-ent"><span class="pl-c1">Time</span></span> <span class="pl-e">elapsed</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>/&gt;&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">p</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span></span><span class="pl-pse">}</span>&gt;Start&lt;/<span class="pl-ent">button</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">stop</span></span><span class="pl-pse">}</span>&gt;Stop&lt;/<span class="pl-ent">button</span>&gt;
                &lt;<span class="pl-ent">button</span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">reset</span></span><span class="pl-pse">}</span>&gt;Reset&lt;/<span class="pl-ent">button</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;
</pre></div>`,
    example29: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

}</pre></div>`,
    example30: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">    <span class="pl-s">hour</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">    <span class="pl-s">min</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">    <span class="pl-s">sec</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">    <span class="pl-s">ms</span>:</span> <span class="pl-c1">0</span>
}</pre></div>`,
    example31: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> hour</span>,<span class="pl-smi"> min</span>,<span class="pl-smi"> sec</span>,<span class="pl-smi"> ms</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;</pre></div>`,
    example32: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">hour</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">min</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">sec</span></span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">ms</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example33: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">hour</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">min</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">sec</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">ms</span>:</span> <span class="pl-c1">0</span>
        }

    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> hour</span>,<span class="pl-smi"> min</span>,<span class="pl-smi"> sec</span>,<span class="pl-smi"> ms</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">hour</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">min</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">sec</span></span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">ms</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> FormatTime</span>;
</pre></div>`,
    example34: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">componentWillReceiveProps</span>(<span class="pl-smi">nextProps</span>){

}</pre></div>`,
    example35: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-smi"> nextProps</span>;</pre></div>`,
    example36: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">sec</span><span class="pl-k"> =</span><span class="pl-smi"> elapsed</span><span class="pl-k"> /</span> <span class="pl-c1">1000</span>;</pre></div>`,
    example37: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">min</span><span class="pl-k"> =</span><span class="pl-smi"> sec</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>;</pre></div>`,
    example38: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">    <span class="pl-s">hour</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>),
<span class="pl-c1">    <span class="pl-s">min</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">    <span class="pl-s">sec</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">sec</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">    <span class="pl-s">ms</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">elapsed</span><span class="pl-k"> %</span> <span class="pl-c1">100</span>)
});</pre></div>`,
    example39: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Time</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./format_time<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Stopwatch</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        };

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">start</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">stop</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">update</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">reset</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
    }

    <span class="pl-en">start</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()
        });

        <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
    }

    <span class="pl-en">stop</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>
        });
    }

    <span class="pl-en">reset</span>(){
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>stopped<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">start</span>:</span><span class="pl-c1"> null</span>,
<span class="pl-c1">            <span class="pl-s">elapsed</span>:</span> <span class="pl-c1">0</span>
        });
    }

    <span class="pl-en">update</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> status</span>,<span class="pl-smi"> start</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        if</span>(<span class="pl-smi">status</span><span class="pl-k"> ===</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>){
<span class="pl-c1">            this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">                <span class="pl-s">elapsed</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>()<span class="pl-k"> -</span><span class="pl-smi"> start</span>
            });

            <span class="pl-en">setTimeout</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">update</span>, <span class="pl-c1">10</span>);
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span>,<span class="pl-smi"> status</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>jumbotron<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>display-3<span class="pl-pds">"</span></span>&gt;&lt;<span class="pl-ent"><span class="pl-c1">Time</span></span> <span class="pl-e">elapsed</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">elapsed</span></span><span class="pl-pse">}</span>/&gt;&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">hr</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>my-3<span class="pl-pds">"</span></span>/&gt;
                &lt;<span class="pl-ent">p</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lead text-center<span class="pl-pds">"</span></span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">status</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                &lt;<span class="pl-ent">p</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">button</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>btn btn-outline-success mx-3<span class="pl-pds">"</span></span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">start</span></span><span class="pl-pse">}</span>&gt;Start&lt;/<span class="pl-ent">button</span>&gt;
                    &lt;<span class="pl-ent">button</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>btn btn-outline-danger mx-3<span class="pl-pds">"</span></span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">stop</span></span><span class="pl-pse">}</span>&gt;Stop&lt;/<span class="pl-ent">button</span>&gt;
                    &lt;<span class="pl-ent">button</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>btn btn-outline-warning mx-3<span class="pl-pds">"</span></span> <span class="pl-e">onClick</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">reset</span></span><span class="pl-pse">}</span>&gt;Reset&lt;/<span class="pl-ent">button</span>&gt;
                &lt;/<span class="pl-ent">p</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Stopwatch</span>;</pre></div>`,
    example40: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span> <span class="pl-k">=</span> {
<span class="pl-c1">    <span class="pl-s">display</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>inline-block<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">position</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>relative<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>50%<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>translate(-50%)<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">width</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>295px<span class="pl-pds">'</span></span>
}</pre></div>`,
    example41: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">hour</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">min</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">sec</span></span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">ms</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example42: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">hour</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">min</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">sec</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">ms</span>:</span> <span class="pl-c1">0</span>
        }

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">display</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>inline-block<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">position</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>relative<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>50%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>translate(-50%)<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">width</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>295px<span class="pl-pds">'</span></span>
        }

    }

    <span class="pl-en">componentWillReceiveProps</span>(<span class="pl-smi">nextProps</span>){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-smi"> nextProps</span>;

        <span class="pl-k">const</span> <span class="pl-smi">sec</span><span class="pl-k"> =</span><span class="pl-smi"> elapsed</span><span class="pl-k"> /</span> <span class="pl-c1">1000</span>;
        <span class="pl-k">const</span> <span class="pl-smi">min</span><span class="pl-k"> =</span><span class="pl-smi"> sec</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>;

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">hour</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">min</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">sec</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">sec</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">ms</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">elapsed</span><span class="pl-k"> %</span> <span class="pl-c1">100</span>)
        });
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> hour</span>,<span class="pl-smi"> min</span>,<span class="pl-smi"> sec</span>,<span class="pl-smi"> ms</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">hour</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">min</span></span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">sec</span></span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">ms</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> FormatTime</span>;
</pre></div>`,
    example43: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">leadingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">    if</span>(<span class="pl-smi">number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span>){
<span class="pl-k">        return</span> <span class="pl-s"><span class="pl-pds">'</span>0<span class="pl-pds">'</span></span><span class="pl-k"> +</span><span class="pl-smi"> number</span>;
    }
<span class="pl-k">    return</span><span class="pl-smi"> number</span>;
}</pre></div>`,
    example44: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">leadingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">    return</span><span class="pl-smi"> number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span><span class="pl-s"> <span class="pl-s">\`</span><span class="pl-s">0<span class="pl-e">\${<span class="pl-smi">number</span>}</span></span><span class="pl-s">\`</span></span> <span class="pl-k">:</span><span class="pl-smi"> number</span>;
}</pre></div>`,
    example45: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">hour</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">min</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">sec</span>)</span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">ms</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example46: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">trailingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">    if</span>(<span class="pl-smi">number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span>){
<span class="pl-k">        return</span><span class="pl-smi"> number</span><span class="pl-k"> +</span> <span class="pl-s"><span class="pl-pds">'</span>0<span class="pl-pds">'</span></span>;
    }
<span class="pl-k">    return</span><span class="pl-smi"> number</span>;
}</pre></div>`,
    example47: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">trailingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">    return</span><span class="pl-smi"> number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span><span class="pl-s"> <span class="pl-s">\`</span><span class="pl-s"><span class="pl-e">\${<span class="pl-smi">number</span>}</span>0</span><span class="pl-s">\`</span></span> <span class="pl-k">:</span><span class="pl-smi"> number</span>;
}</pre></div>`,
    example48: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">hour</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">min</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">sec</span>)</span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">trailingZero</span>(<span class="pl-smi">ms</span>)</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example49: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">hour</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">min</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">sec</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">ms</span>:</span> <span class="pl-c1">0</span>
        }

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">display</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>inline-block<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">position</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>relative<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>50%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>translate(-50%)<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">width</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>383px<span class="pl-pds">'</span></span>
        }
    }

    <span class="pl-en">componentWillReceiveProps</span>(<span class="pl-smi">nextProps</span>){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-smi"> nextProps</span>;

        <span class="pl-k">const</span> <span class="pl-smi">sec</span><span class="pl-k"> =</span><span class="pl-smi"> elapsed</span><span class="pl-k"> /</span> <span class="pl-c1">1000</span>;
        <span class="pl-k">const</span> <span class="pl-smi">min</span><span class="pl-k"> =</span><span class="pl-smi"> sec</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>;

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">hour</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">min</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">sec</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">sec</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">ms</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">elapsed</span><span class="pl-k"> %</span> <span class="pl-c1">100</span>)
        });
    }

    <span class="pl-en">leadingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">        if</span>(<span class="pl-smi">number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span>){
<span class="pl-k">            return</span> <span class="pl-s"><span class="pl-pds">'</span>0<span class="pl-pds">'</span></span><span class="pl-k"> +</span><span class="pl-smi"> number</span>;
        }
<span class="pl-k">        return</span><span class="pl-smi"> number</span>;
    }

    <span class="pl-en">trailingZero</span>(<span class="pl-smi">number</span>){
<span class="pl-k">        if</span>(<span class="pl-smi">number</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span>){
<span class="pl-k">            return</span><span class="pl-smi"> number</span><span class="pl-k"> +</span> <span class="pl-s"><span class="pl-pds">'</span>0<span class="pl-pds">'</span></span>;
        }
<span class="pl-k">        return</span><span class="pl-smi"> number</span>;
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> hour</span>,<span class="pl-smi"> min</span>,<span class="pl-smi"> sec</span>,<span class="pl-smi"> ms</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">hour</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">min</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">leadingZero</span>(<span class="pl-smi">sec</span>)</span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">trailingZero</span>(<span class="pl-smi">ms</span>)</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> FormatTime</span>;
</pre></div>`,
    example50: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">FormatTime</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">hour</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">min</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">sec</span>:</span> <span class="pl-c1">0</span>,
<span class="pl-c1">            <span class="pl-s">ms</span>:</span> <span class="pl-c1">0</span>
        }

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">timerStyle</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">display</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>inline-block<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">position</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>relative<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">left</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>50%<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">transform</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>translate(-50%)<span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">width</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>383px<span class="pl-pds">'</span></span>
        }
    }

    <span class="pl-en">componentWillReceiveProps</span>(<span class="pl-smi">nextProps</span>){
        <span class="pl-k">const</span> {<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-smi"> nextProps</span>;

        <span class="pl-k">const</span> <span class="pl-smi">sec</span><span class="pl-k"> =</span><span class="pl-smi"> elapsed</span><span class="pl-k"> /</span> <span class="pl-c1">1000</span>;
        <span class="pl-k">const</span> <span class="pl-smi">min</span><span class="pl-k"> =</span><span class="pl-smi"> sec</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>;

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">hour</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> /</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">min</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">min</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">sec</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">sec</span><span class="pl-k"> %</span> <span class="pl-c1">60</span>),
<span class="pl-c1">            <span class="pl-s">ms</span>:</span><span class="pl-c1"> Math</span><span class="pl-k">.</span><span class="pl-en">floor</span>(<span class="pl-smi">elapsed</span><span class="pl-k"> %</span> <span class="pl-c1">100</span>)
        });
    }

    <span class="pl-en">leadingZero</span>(<span class="pl-smi">num</span>){
<span class="pl-k">        return</span><span class="pl-smi"> num</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span><span class="pl-s"> <span class="pl-s">\`</span><span class="pl-s">0<span class="pl-e">\${<span class="pl-smi">num</span>}</span></span><span class="pl-s">\`</span></span> <span class="pl-k">:</span><span class="pl-smi"> num</span>;
    }

    <span class="pl-en">trailingZero</span>(<span class="pl-smi">num</span>){
<span class="pl-k">        return</span><span class="pl-smi"> num</span><span class="pl-k"> &lt;</span> <span class="pl-c1">10</span> <span class="pl-k">?</span><span class="pl-s"> <span class="pl-s">\`</span><span class="pl-s"><span class="pl-e">\${<span class="pl-smi">num</span>}</span>0</span><span class="pl-s">\`</span></span> <span class="pl-k">:</span><span class="pl-smi"> num</span>; 
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> timerStyle</span>,<span class="pl-smi"> leadingZero</span>,<span class="pl-smi"> trailingZero</span>,<span class="pl-c1"> <span class="pl-s">state</span>:</span> {<span class="pl-smi"> hour</span>,<span class="pl-smi"> min</span>,<span class="pl-smi"> sec</span>,<span class="pl-smi"> ms</span> } } <span class="pl-k">=</span><span class="pl-c1"> this</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">style</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">timerStyle</span></span><span class="pl-pse">}</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">leadingZero</span>(<span class="pl-smi">hour</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">leadingZero</span>(<span class="pl-smi">min</span>)</span><span class="pl-pse">}</span>:<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">leadingZero</span>(<span class="pl-smi">sec</span>)</span><span class="pl-pse">}</span>.<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">trailingZero</span>(<span class="pl-smi">ms</span>)</span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> FormatTime</span>;
</pre></div>`,
    example51: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> start</span>,<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;</pre></div>`,
    example52: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">let</span> <span class="pl-smi">newStart</span><span class="pl-k"> =</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>();</pre></div>`,
    example53: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">if</span>(<span class="pl-smi">start</span>){
<span class="pl-smi">    newStart</span><span class="pl-k"> -=</span><span class="pl-smi"> elapsed</span>;
}</pre></div>`,
    example54: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">    <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">start</span>:</span><span class="pl-smi"> newStart</span>
});</pre></div>`,
    example55: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">start</span>(){
    <span class="pl-k">const</span> {<span class="pl-smi"> start</span>,<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

    <span class="pl-k">let</span> <span class="pl-smi">newStart</span><span class="pl-k"> =</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>();

<span class="pl-k">    if</span>(<span class="pl-smi">start</span>){
<span class="pl-smi">        newStart</span><span class="pl-k"> -=</span><span class="pl-smi"> elapsed</span>;
    }

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">start</span>:</span><span class="pl-smi"> newStart</span>
    });

    <span class="pl-en">setTimeout</span>(() <span class="pl-k">=&gt;</span> {
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">update</span>();
    }, <span class="pl-c1">100</span>);
}</pre></div>`,
    example56: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">start</span>(){
    <span class="pl-k">const</span> {<span class="pl-smi"> start</span>,<span class="pl-smi"> elapsed</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

    <span class="pl-k">const</span> <span class="pl-smi">now</span><span class="pl-k"> =</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">getTime</span>();

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">status</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>running<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">start</span>:</span><span class="pl-smi"> start</span> <span class="pl-k">?</span><span class="pl-smi"> now</span><span class="pl-k"> -</span><span class="pl-smi"> elapsed</span> <span class="pl-k">:</span><span class="pl-smi"> now</span>
    });

    <span class="pl-en">setTimeout</span>(() <span class="pl-k">=&gt;</span> {
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">update</span>();
    }, <span class="pl-c1">100</span>);
}</pre></div>`
};
