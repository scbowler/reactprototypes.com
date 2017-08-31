export default {
    importReact: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importReactComponent: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importApp: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactList: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactCard: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;</pre></div>`,
    importContactData: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts<span class="pl-pds">'</span></span>;</pre></div>`,
    contactListConstructor: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">        <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
    }
}</pre></div>`,
    logContactData: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Contact Data:<span class="pl-pds">'</span></span>,<span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span>);</pre></div>`,
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
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-4<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">ContactForm</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
        &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
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
    example12: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>();</pre></div>`,
    example13: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>item:<span class="pl-pds">'</span></span>,<span class="pl-smi"> item</span>);
});</pre></div>`,
    example14: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

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
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-k">            return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span> <span class="pl-e">firstName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">lastName</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">item</span><span class="pl-k">.</span><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span>/&gt;
        });

<span class="pl-k">        return</span> &lt;<span class="pl-ent">div</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">list</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">div</span>&gt;;
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;
</pre></div>`,
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
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

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
    example25: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

<span class="pl-k">    return</span> &lt;<span class="pl-ent"><span class="pl-c1">ContactCard</span></span> <span class="pl-e">key</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">index</span></span><span class="pl-pse">}</span>/&gt;
});</pre></div>`,
    example26: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

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
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
        }
    }

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

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
</pre></div>`,
    example32: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">render</span>(){
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">form</span>&gt;

        &lt;/<span class="pl-ent">form</span>&gt;        
    )
}</pre></div>`,
    example33: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;First Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example34: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;First Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;Last Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example35: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

}</pre></div>`,
    example36: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">    <span class="pl-s">form</span>:</span> {
<span class="pl-c1">        <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
<span class="pl-c1">        <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>
    }
}</pre></div>`,
    example37: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> firstName</span>,<span class="pl-smi"> lastName</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>;</pre></div>`,
    example38: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">input</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;</pre></div>`,
    example39: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">input</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;</pre></div>`,
    example40: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleInputChange</span>(<span class="pl-smi">event</span>){
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-smi">event</span>);

}</pre></div>`,
    example41: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);</pre></div>`,
    example42: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;First Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;Last Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example43: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleInputChange</span>(<span class="pl-smi">event</span>){
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-smi">event</span><span class="pl-k">.</span><span class="pl-smi">target</span><span class="pl-k">.</span><span class="pl-smi">value</span>);

}</pre></div>`,
    example44: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleInputChange</span>(<span class="pl-smi">event</span>){
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-smi">event</span><span class="pl-k">.</span><span class="pl-smi">target</span><span class="pl-k">.</span><span class="pl-smi">value</span>);
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-smi">event</span><span class="pl-k">.</span><span class="pl-smi">target</span><span class="pl-k">.</span><span class="pl-smi">name</span>);

}</pre></div>`,
    example45: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> value</span>,<span class="pl-smi"> name</span> } <span class="pl-k">=</span><span class="pl-smi"> event</span><span class="pl-k">.</span><span class="pl-smi">target</span>;</pre></div>`,
    example46: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> {<span class="pl-smi"> form</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;</pre></div>`,
    example47: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-smi">form</span>[<span class="pl-smi">name</span>]<span class="pl-k"> =</span><span class="pl-smi"> value</span>;</pre></div>`,
    example48: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">    <span class="pl-s">form</span>:</span> {<span class="pl-k">...</span><span class="pl-smi">form</span>}
});</pre></div>`,
    example49: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleInputChange</span>(<span class="pl-smi">event</span>){
    <span class="pl-k">const</span> {<span class="pl-smi"> value</span>,<span class="pl-smi"> name</span> } <span class="pl-k">=</span><span class="pl-smi"> event</span><span class="pl-k">.</span><span class="pl-smi">target</span>;

    <span class="pl-k">const</span> {<span class="pl-smi"> form</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-smi">    form</span>[<span class="pl-smi">name</span>]<span class="pl-k"> =</span><span class="pl-smi"> value</span>;

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">        <span class="pl-s">form</span>:</span> {<span class="pl-k">...</span><span class="pl-smi">form</span>}
    });
}</pre></div>`,
    example50: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleSubmit</span>(){
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>handleSubmit called, form values are:<span class="pl-pds">'</span></span>,<span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>);
}</pre></div>`,
    example51: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);</pre></div>`,
    example52: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span> &gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;First Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
        &lt;<span class="pl-ent">label</span>&gt;Last Name&lt;/<span class="pl-ent">label</span>&gt;
        &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
    &lt;/<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example53: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;</pre></div>`,
    example54: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">handleSubmit</span>(<span class="pl-smi">event</span>){
<span class="pl-smi">    event</span><span class="pl-k">.</span><span class="pl-en">preventDefault</span>();
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>handleSubmit called, form values are:<span class="pl-pds">'</span></span>,<span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>);
}</pre></div>`,
    example55: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactForm</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_form<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> () <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-4<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent"><span class="pl-c1">ContactForm</span></span>/&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example56: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactForm</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
        <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">            <span class="pl-s">form</span>:</span> {
<span class="pl-c1">                <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
<span class="pl-c1">                <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>
            }
        }

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
    }

    <span class="pl-en">handleInputChange</span>(<span class="pl-smi">event</span>){
        <span class="pl-k">const</span> {<span class="pl-smi"> value</span>,<span class="pl-smi"> name</span> } <span class="pl-k">=</span><span class="pl-smi"> event</span><span class="pl-k">.</span><span class="pl-smi">target</span>;

        <span class="pl-k">const</span> {<span class="pl-smi"> form</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span>;

<span class="pl-smi">        form</span>[<span class="pl-smi">name</span>]<span class="pl-k"> =</span><span class="pl-smi"> value</span>;

<span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-en">setState</span>({
<span class="pl-c1">            <span class="pl-s">form</span>:</span> {<span class="pl-k">...</span><span class="pl-smi">form</span>}
        });
    }

    <span class="pl-en">handleSubmit</span>(<span class="pl-smi">event</span>){
<span class="pl-smi">        event</span><span class="pl-k">.</span><span class="pl-en">preventDefault</span>();
        <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>handleSubmit called, form values are:<span class="pl-pds">'</span></span>,<span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>);
    }
    
    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> {<span class="pl-smi"> firstName</span>,<span class="pl-smi"> lastName</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>;

<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">label</span>&gt;First Name&lt;/<span class="pl-ent">label</span>&gt;
                    &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">firstName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">label</span>&gt;Last Name&lt;/<span class="pl-ent">label</span>&gt;
                    &lt;<span class="pl-ent">input</span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span> <span class="pl-e">value</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">lastName</span></span><span class="pl-pse">}</span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
                &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
            &lt;/<span class="pl-ent">form</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> ContactForm</span>;
</pre></div>`,
    example57: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    
}</pre></div>`,
    example58: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">label</span>&gt;&lt;/<span class="pl-ent">label</span>&gt;
            &lt;<span class="pl-ent">input</span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example59: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">label</span>&gt;&lt;/<span class="pl-ent">label</span>&gt;
            &lt;<span class="pl-ent">input</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example60: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> Field</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./field.js<span class="pl-pds">'</span></span>;</pre></div>`,
    example61: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;

    &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example62: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span>/&gt;

    &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example63: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;
    &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">label</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>First Name<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span>/&gt;

    &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">form</span>&gt;</pre></div>`,
    example64: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export default</span> <span class="pl-smi">props</span> <span class="pl-k">=&gt;</span> {
    <span class="pl-c1">console</span><span class="pl-k">.</span><span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>Field props:<span class="pl-pds">'</span></span>,<span class="pl-smi"> props</span>);
<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;
            &lt;<span class="pl-ent">label</span>&gt;&lt;/<span class="pl-ent">label</span>&gt;
            &lt;<span class="pl-ent">input</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;
        &lt;/<span class="pl-ent">div</span>&gt;
    )
}
</pre></div>`,
    example65: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">label</span>&gt;<span class="pl-pse">{</span><span class="pl-s1"><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">label</span></span><span class="pl-pse">}</span>&lt;/<span class="pl-ent">label</span>&gt;</pre></div>`,
    example66: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent">input</span> <span class="pl-pse">{</span><span class="pl-s1"><span class="pl-k">...</span><span class="pl-smi">props</span></span><span class="pl-pse">}</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span>/&gt;</pre></div>`,
    example67: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">render</span>(){
    <span class="pl-k">const</span> {<span class="pl-smi"> firstName</span>,<span class="pl-smi"> lastName</span> } <span class="pl-k">=</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">form</span>;

<span class="pl-k">    return</span> (
        &lt;<span class="pl-ent">form</span> <span class="pl-e">onSubmit</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span></span><span class="pl-pse">}</span>&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span> <span class="pl-e">label</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>First Name<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span>/&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span> <span class="pl-e">label</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Last Name<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span>/&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>phone<span class="pl-pds">"</span></span> <span class="pl-e">label</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Phone Number<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>tel<span class="pl-pds">"</span></span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span>/&gt;
            &lt;<span class="pl-ent"><span class="pl-c1">Field</span></span> <span class="pl-e">name</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>email<span class="pl-pds">"</span></span> <span class="pl-e">label</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>Email<span class="pl-pds">"</span></span> <span class="pl-e">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>email<span class="pl-pds">"</span></span> <span class="pl-e">onChange</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span></span><span class="pl-pse">}</span>/&gt;

            &lt;<span class="pl-ent">button</span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;
        &lt;/<span class="pl-ent">form</span>&gt;
    )
}</pre></div>`,
    example68: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">        <span class="pl-s">form</span>:</span> {
<span class="pl-c1">            <span class="pl-s">firstName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">lastName</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">phone</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
<span class="pl-c1">            <span class="pl-s">email</span>:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>
        }
    }

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleInputChange</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">handleSubmit</span><span class="pl-k">.</span><span class="pl-en">bind</span>(<span class="pl-c1">this</span>);
}</pre></div>`,
    example69: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>(<span class="pl-k">...</span>);</pre></div>`,
    example70: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>(<span class="pl-k">...</span>);</pre></div>`,
    example71: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactCard</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_card<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">ContactList</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {

    <span class="pl-en">render</span>(){
        <span class="pl-k">const</span> <span class="pl-smi">list</span><span class="pl-k"> =</span><span class="pl-c1"> this</span><span class="pl-k">.</span><span class="pl-smi">props</span><span class="pl-k">.</span><span class="pl-smi">contacts</span><span class="pl-k">.</span><span class="pl-en">map</span>((<span class="pl-smi">item</span>,<span class="pl-smi"> index</span>) <span class="pl-k">=&gt;</span> {

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

<span class="pl-k">export default</span><span class="pl-smi"> ContactList</span>;</pre></div>`,
    example72: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-smi"> ContactForm</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_form<span class="pl-pds">'</span></span>;

<span class="pl-k">class</span> <span class="pl-en">App</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
    <span class="pl-en">render</span>(){
<span class="pl-k">        return</span> (
            &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
                &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-4<span class="pl-pds">"</span></span>&gt;
                        &lt;<span class="pl-ent"><span class="pl-c1">ContactForm</span></span>/&gt;
                    &lt;/<span class="pl-ent">div</span>&gt;
                    &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span>/&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
            &lt;/<span class="pl-ent">div</span>&gt;
        )
    }
}

<span class="pl-k">export default</span><span class="pl-smi"> App</span>;
</pre></div>`,
    example73: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts.js<span class="pl-pds">'</span></span>;</pre></div>`,
    example74: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
    <span class="pl-en">super</span>(<span class="pl-smi">props</span>);

<span class="pl-c1">    this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
<span class="pl-c1">        <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
    }
}</pre></div>`,
    example75: `<div class="highlight highlight-source-js-jsx"><pre>&lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span> <span class="pl-e">contacts</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span></span><span class="pl-pse">}</span>/&gt;</pre></div>`,
    example76: `<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">import</span><span class="pl-smi"> React</span>, {<span class="pl-smi"> Component</span> }<span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
    <span class="pl-k">import</span><span class="pl-smi"> ContactList</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_list<span class="pl-pds">'</span></span>;
    <span class="pl-k">import</span><span class="pl-smi"> ContactForm</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>./contact_form<span class="pl-pds">'</span></span>;
    <span class="pl-k">import</span><span class="pl-smi"> contactData</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>../data/contacts.js<span class="pl-pds">'</span></span>;
    
    <span class="pl-k">class</span> <span class="pl-en">App</span> <span class="pl-k">extends</span> <span class="pl-en">Component</span> {
        <span class="pl-en">constructor</span>(<span class="pl-smi">props</span>){
            <span class="pl-en">super</span>(<span class="pl-smi">props</span>);
    
    <span class="pl-c1">        this</span><span class="pl-k">.</span><span class="pl-smi">state</span> <span class="pl-k">=</span> {
    <span class="pl-c1">            <span class="pl-s">contacts</span>:</span><span class="pl-smi"> contactData</span>
            }
        }
    
        <span class="pl-en">render</span>(){
    <span class="pl-k">        return</span> (
                &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span>&gt;
                    &lt;<span class="pl-ent">h1</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text-center my-3<span class="pl-pds">"</span></span>&gt;Address Book&lt;/<span class="pl-ent">h1</span>&gt;
                    &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>row<span class="pl-pds">"</span></span>&gt;
                        &lt;<span class="pl-ent">div</span> <span class="pl-e">className</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>col-4<span class="pl-pds">"</span></span>&gt;
                            &lt;<span class="pl-ent"><span class="pl-c1">ContactForm</span></span>/&gt;
                        &lt;/<span class="pl-ent">div</span>&gt;
                        &lt;<span class="pl-ent"><span class="pl-c1">ContactList</span></span> <span class="pl-e">contacts</span><span class="pl-k">=</span><span class="pl-pse">{</span><span class="pl-s1"><span class="pl-c1">this</span><span class="pl-k">.</span><span class="pl-smi">state</span><span class="pl-k">.</span><span class="pl-smi">contacts</span></span><span class="pl-pse">}</span>/&gt;
                    &lt;/<span class="pl-ent">div</span>&gt;
                &lt;/<span class="pl-ent">div</span>&gt;
            )
        }
    }
    
    <span class="pl-k">export default</span><span class="pl-smi"> App</span>;
    </pre></div>`
}
