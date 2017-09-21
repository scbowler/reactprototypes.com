const viewIndex = {show: 'View Full src/index.js Example', hide: 'Hide index.js Example'};
const viewClockReducer = {show: 'View Full src/reducers/clock_reducer.js Example', hide: 'Hide clock_reducer.js Example'};
const viewApp = {show: 'View Full src/components/app.js Example', hide: 'Hide app.js Example'};
const viewClock = {show: 'View Full src/components/clock.js Example', hide: 'Hide clock.js Example'};

export default {
    fs1e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-c1">DEFAULT_STATE</span> <span class="pl-k">=</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span><span class="pl-c1"> null</span> };</pre></div>`
    },
    fs1e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span>,<span class="pl-smi"> action</span>){

}</pre></div>`
    },
    fs1e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span><span class="pl-k"> =</span><span class="pl-c1"> DEFAULT_STATE</span>,<span class="pl-smi"> action</span>){

}</pre></div>`
    },
    fs1e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span><span class="pl-k"> =</span><span class="pl-c1"> DEFAULT_STATE</span>,<span class="pl-smi"> action</span>){
    <span class="pl-k">switch</span>(<span class="pl-smi">action</span><span class="pl-k">.</span><span class="pl-smi">type</span>){

    }
}</pre></div>`
    },
    fs1e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span><span class="pl-k"> =</span><span class="pl-c1"> DEFAULT_STATE</span>,<span class="pl-smi"> action</span>){
    <span class="pl-k">switch</span>(<span class="pl-smi">action</span><span class="pl-k">.</span><span class="pl-smi">type</span>){
        <span class="pl-k">default</span><span class="pl-k">:</span>
<span class="pl-k">            return</span><span class="pl-smi"> state</span>;
    }
}</pre></div>`
    },
    fs1e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-c1">DEFAULT_STATE</span> <span class="pl-k">=</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span><span class="pl-c1"> null</span> };

<span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span><span class="pl-k"> =</span><span class="pl-c1"> DEFAULT_STATE</span>,<span class="pl-smi"> action</span>){
    <span class="pl-k">switch</span>(<span class="pl-smi">action</span><span class="pl-k">.</span><span class="pl-smi">type</span>){
        <span class="pl-k">default</span><span class="pl-k">:</span>
<span class="pl-k">            return</span><span class="pl-smi"> state</span>;
    }
}</pre></div>`,
        text: viewClockReducer
    },
    fs1e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;

        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`
    },
    fs1e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Redux Clock!&lt;/<span class="pl-ent">h1</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`
    },
    fs1e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Redux Clock!&lt;/<span class="pl-ent">h1</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
        text: viewApp
    },
    fs1e10: {
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
    fs1e11: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> Provider</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e12: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> createStore</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>redux<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e13: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> combineReducers</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>redux<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e14: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> clockReducer</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./clock_reducer<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e15: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-en">combineReducers</span>();</pre></div>`
    },
    fs1e16: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-en">combineReducers</span>({
<span class="pl-c1">    <span class="pl-s">clock</span>:</span><span class="pl-smi"> clockReducer</span>
});</pre></div>`
    },
    fs1e17: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> combineReducers</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>redux<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> clockReducer</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./clock_reducer<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-en">combineReducers</span>({
<span class="pl-c1">    <span class="pl-s">clock</span>:</span><span class="pl-smi"> clockReducer</span>
});
</pre></div>`,
        text: {show: 'Show Full src/reducers/index.js Example', hide: 'Hide src/reducers/index.js Example'}
    },
    fs1e18: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> rootReducer</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./reducers/index<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs1e19: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">Provider</span></span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;
    &lt;/<span class="pl-ent"><span class="pl-c1">Provider</span></span>&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`
    },
    fs1e20: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">Provider</span></span> <span class="pl-e">store</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">createStore</span>(<span class="pl-smi">rootReducer</span>)</span><span class="pl-pse">}</span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;
    &lt;/<span class="pl-ent"><span class="pl-c1">Provider</span></span>&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`
    },
    fs1e21: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ReactDOM</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> Provider</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> createStore</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>redux<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> rootReducer</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./reducers/index<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> App</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span><span class="pl-k">.</span><span class="pl-en">render</span>(
    &lt;<span class="pl-ent"><span class="pl-c1">Provider</span></span> <span class="pl-e">store</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-en">createStore</span>(<span class="pl-smi">rootReducer</span>)</span><span class="pl-pse">}</span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">App</span></span>/&gt;
    &lt;/<span class="pl-ent"><span class="pl-c1">Provider</span></span>&gt;,
<span class="pl-c1">    document</span><span class="pl-k">.</span><span class="pl-en">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);
</pre></div>`,
        text: viewIndex
    },
    fs2e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">class</span> <span class="pl-en">Clock</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center mt-5<span class="pl-pds">"</span></span>&gt;

            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}</pre></div>`
    },
    fs2e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center mt-5<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">h1</span>&gt;Clock will go here&lt;/<span class="pl-ent">h1</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`
    },
    fs2e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Clock</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center mt-5<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;Clock will go here&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> Clock</span>;
</pre></div>`,
        text: viewClock
    },
    fs2e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Redux Clock!&lt;/<span class="pl-ent">h1</span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Clock</span></span>/&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`
    },
    fs2e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> Clock</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./clock<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center<span class="pl-pds">"</span></span>&gt;Redux Clock!&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Clock</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
        text: viewApp
    },
    fs2e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-c1">DEFAULT_STATE</span> <span class="pl-k">=</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>() };</pre></div>`
    },
    fs2e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> connect</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs2e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">function</span> <span class="pl-en">mapStateToProps</span>(<span class="pl-smi">state</span>){
    <span class="pl-k">return</span> {
<span class="pl-c1">        <span class="pl-s">time</span>:</span><span class="pl-smi"> state</span><span class="pl-k">.</span><span class="pl-smi">clock</span><span class="pl-k">.</span><span class="pl-smi">time</span>
    }
}</pre></div>`
    },
    fs2e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-en">connect</span>(<span class="pl-smi">mapStateToProps</span>)(<span class="pl-smi">Clock</span>);</pre></div>`
    },
    fs2e10: {
        html: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">time</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;</pre></div>`
    },
    fs2e11: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> connect</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Clock</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center mt-5<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">time</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">function</span> <span class="pl-en">mapStateToProps</span>(<span class="pl-smi">state</span>){
    <span class="pl-k">return</span> {
<span class="pl-c1">        <span class="pl-s">time</span>:</span><span class="pl-smi"> state</span><span class="pl-k">.</span><span class="pl-smi">clock</span><span class="pl-k">.</span><span class="pl-smi">time</span>
    }
}

<span class="pl-k">export default</span> <span class="pl-en">connect</span>(<span class="pl-smi">mapStateToProps</span>)(<span class="pl-smi">Clock</span>);
</pre></div>`,
        text: viewClock
    },
    fs3e1: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export</span> <span class="pl-k">function</span> <span class="pl-en">updateTime</span>(){

}
</pre></div>`
    },
    fs3e2: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">return</span> {
<span class="pl-c1">    <span class="pl-s">type</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>UPDATE_TIME<span class="pl-pds">'</span></span>,
<span class="pl-c1">    <span class="pl-s">payload</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>()
}</pre></div>`
    },
    fs3e3: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export</span> <span class="pl-k">function</span> <span class="pl-en">updateTime</span>(){
    <span class="pl-k">return</span> {
<span class="pl-c1">        <span class="pl-s">type</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>UPDATE_TIME<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">payload</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>()
    }
}</pre></div>`,
        text: {show: 'View Full src/actions/index.js Example', hide: 'Hide src/actions/index.js Example'}
    },
    fs3e4: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">switch</span>(<span class="pl-smi">action</span><span class="pl-k">.</span><span class="pl-smi">type</span>){
    <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">'</span>UPDATE_TIME<span class="pl-pds">'</span></span><span class="pl-k">:</span>

    <span class="pl-k">default</span><span class="pl-k">:</span>
<span class="pl-k">        return</span><span class="pl-smi"> state</span>;
}</pre></div>`
    },
    fs3e5: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">return</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>() };</pre></div>`
    },
    fs3e6: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-c1">DEFAULT_STATE</span> <span class="pl-k">=</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>() };

<span class="pl-k">export default</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span><span class="pl-k"> =</span><span class="pl-c1"> DEFAULT_STATE</span>,<span class="pl-smi"> action</span>){
    <span class="pl-k">switch</span>(<span class="pl-smi">action</span><span class="pl-k">.</span><span class="pl-smi">type</span>){
        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">'</span>UPDATE_TIME<span class="pl-pds">'</span></span><span class="pl-k">:</span>
            <span class="pl-k">return</span> {<span class="pl-c1"> <span class="pl-s">time</span>:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>()<span class="pl-k">.</span><span class="pl-en">toLocaleTimeString</span>() };
        <span class="pl-k">default</span><span class="pl-k">:</span>
<span class="pl-k">            return</span><span class="pl-smi"> state</span>;
    }
}
</pre></div>`,
        text: viewClockReducer
    },
    fs3e7: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span> {<span class="pl-smi"> updateTime</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../actions/index<span class="pl-pds">'</span></span>;</pre></div>`
    },
    fs3e8: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-en">connect</span>(<span class="pl-smi">mapStateToProps</span>, {<span class="pl-c1"><span class="pl-s">updateTime</span>:</span><span class="pl-smi"> updateTime</span>})(<span class="pl-smi">Clock</span>);</pre></div>`
    },
    fs3e9: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> <span class="pl-en">connect</span>(<span class="pl-smi">mapStateToProps</span>, {<span class="pl-smi">updateTime</span>})(<span class="pl-smi">Clock</span>);</pre></div>`,
        text: {show: 'Show Advanced Example', hide: 'Hide Example'}
    },
    fs3e10: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">componentWillMount</span>(){

}</pre></div>`
    },
    fs3e11: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">setInterval</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">updateTime</span>, <span class="pl-c1">1000</span>);</pre></div>`
    },
    fs3e12: {
        html: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> connect</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react-redux<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> {<span class="pl-smi"> updateTime</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../actions/index<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">Clock</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    
    <span class="pl-en">componentWillMount</span>(){
        <span class="pl-en">setInterval</span>(<span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">updateTime</span>, <span class="pl-c1">1000</span>);
    }

    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center mt-5<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">h1</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">time</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">function</span> <span class="pl-en">mapStateToProps</span>(<span class="pl-smi">state</span>){
    <span class="pl-k">return</span> {
<span class="pl-c1">        <span class="pl-s">time</span>:</span><span class="pl-smi"> state</span><span class="pl-k">.</span><span class="pl-smi">clock</span><span class="pl-k">.</span><span class="pl-smi">time</span>
    }
}

<span class="pl-k">export default</span> <span class="pl-en">connect</span>(<span class="pl-smi">mapStateToProps</span>, {<span class="pl-smi">updateTime</span>})(<span class="pl-smi">Clock</span>);
</pre></div>`,
        text: viewClock
    }
};