export default {
    importReact: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importReactComponent: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importApp: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactList: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactCard: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactData: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;</pre></div>`,
    logContactData: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Contact Data:<span class="pl-pds">'</span></span>,<span class="pl-smi"> contactData</span>);</pre></div>`,
    example1: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
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

<span class="pl-k">class</span> <span class="pl-en">ContactForm</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> &lt;<span class="pl-ent">h1</span>&gt;This will be the contact form&lt;/<span class="pl-ent">h1</span>&gt;
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactForm</span>;
</pre></div>`,
    example4: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">ContactForm</span></span>/&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example5: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> [ ];</pre></div>`,
    example6: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span> [
    {
<span class="pl-c1">        <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Clark<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Kent<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">phone</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>785-328-9020<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">email</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>superman@google.com<span class="pl-pds">'</span></span>
    },
    {
<span class="pl-c1">        <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Bruce<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Wayne<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">phone</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>201-725-5692<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">email</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>theRealBatman@google.com<span class="pl-pds">'</span></span>
    },
    {
<span class="pl-c1">        <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Barry<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>Allen<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">phone</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>319-210-7259<span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">email</span>:</span> <span class="pl-s"><span class="pl-pds">'</span>theFlash@google.com<span class="pl-pds">'</span></span>
    }
];
</pre></div>`,
    example7: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
<span class="pl-k">    return</span> &lt;<span class="pl-ent">h1</span>&gt;Full Name: <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h1</span>&gt;
}
</pre></div>`,
    example8: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    
}</pre></div>`,
    example9: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> &lt;<span class="pl-ent">h1</span>&gt;Contact List&lt;/<span class="pl-ent">h1</span>&gt;
    }
}</pre></div>`,
    example10: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;</pre></div>`,
    example11: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
    &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example12: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>();</pre></div>`,
    example13: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);
});</pre></div>`,
    example14: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">firstName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">lastName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>/&gt;
});</pre></div>`,
    example15: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">return</span> &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example16: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example17: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
            <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">            return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">firstName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">lastName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>/&gt;
        });

<span class="pl-k">        return</span> &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;</pre></div>`,
    example18: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
            <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">            return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">firstName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">lastName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>/&gt;
        });

<span class="pl-k">        return</span> &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;</pre></div>`,
    example19: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-6 my-3<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card<span class="pl-pds">"</span></span>&gt;
                
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example20: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-6 my-3<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-header<span class="pl-pds">"</span></span>&gt;
                
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-block<span class="pl-pds">"</span></span>&gt;
                    
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example21: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-6 my-3<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-header<span class="pl-pds">"</span></span>&gt;
                    
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-block<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">h4</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-title<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">h4</span>&gt;
                    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-text<span class="pl-pds">"</span></span>&gt;

                    &lt;/<span class="pl-ent">div</span>&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example22: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-6 my-3<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-header<span class="pl-pds">"</span></span>&gt;

                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-block<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">h4</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-title<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">h4</span>&gt;
                    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-text<span class="pl-pds">"</span></span>&gt;
                        &lt;<span class="pl-ent">p</span>&gt;&lt;<span class="pl-ent">b</span>&gt;Phone:&lt;/<span class="pl-ent">b</span>&gt;&lt;/<span class="pl-ent">p</span>&gt;
                        &lt;<span class="pl-ent">p</span>&gt;&lt;<span class="pl-ent">b</span>&gt;Email:&lt;/<span class="pl-ent">b</span>&gt;&lt;/<span class="pl-ent">p</span>&gt;
                    &lt;/<span class="pl-ent">div</span>&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}</pre></div>`,
    example23: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
            <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">            return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">firstName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">lastName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>/&gt;
        });

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-8<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                    <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;
</pre></div>`,
    example24: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example25: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span>/&gt;
});</pre></div>`,
    example26: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">contact</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span></span><span class="pl-pse">}</span>/&gt;
});</pre></div>`,
    example27: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi">firstName</span>,<span class="pl-smi"> lastName</span>,<span class="pl-smi"> phone</span>,<span class="pl-smi"> email</span>} <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">contact</span>;</pre></div>`,
    example28: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-header<span class="pl-pds">"</span></span>&gt;
    <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>`,
    example29: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">h4</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-title<span class="pl-pds">"</span></span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span><span class="pl-k"> +</span> <span class="pl-s"><span class="pl-pds">'</span></span> <span class="pl-s"><span class="pl-pds">'</span></span><span class="pl-k"> +</span><span class="pl-smi"> lastName</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h4</span>&gt;</pre></div>`,
    example30: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){

        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-smi"> contactData</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
            <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);

<span class="pl-k">            return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">contact</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span></span><span class="pl-pse">}</span>/&gt;
        });

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-8<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                    <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;
</pre></div>`,
    example31: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-k">const</span> {<span class="pl-smi">firstName</span>,<span class="pl-smi"> lastName</span>,<span class="pl-smi"> phone</span>,<span class="pl-smi"> email</span>} <span class="pl-k">=</span><span class="pl-smi"> props</span><span class="pl-k">.</span><span class="pl-smi">contact</span>;
    
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-6 my-3<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-header<span class="pl-pds">"</span></span>&gt;
                    <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-block<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">h4</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-title<span class="pl-pds">"</span></span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span><span class="pl-k"> +</span> <span class="pl-s"><span class="pl-pds">'</span></span> <span class="pl-s"><span class="pl-pds">'</span></span><span class="pl-k"> +</span><span class="pl-smi"> lastName</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">h4</span>&gt;
                    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>card-text<span class="pl-pds">"</span></span>&gt;
                        &lt;<span class="pl-ent">p</span>&gt;&lt;<span class="pl-ent">b</span>&gt;Phone:&lt;/<span class="pl-ent">b</span>&gt; <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">phone</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                        &lt;<span class="pl-ent">p</span>&gt;&lt;<span class="pl-ent">b</span>&gt;Email:&lt;/<span class="pl-ent">b</span>&gt; <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">email</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">p</span>&gt;
                    &lt;/<span class="pl-ent">div</span>&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`
}
