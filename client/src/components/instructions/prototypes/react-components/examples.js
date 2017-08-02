export default {
    importReact: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;</pre></div>`,
    importApp: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;</pre></div>`,
    importTable: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">Table</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./table<span class="pl-pds">'</span></span>;</pre></div>`,
    dataProp: `<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">Table</span> <span class="pl-e">data</span>=<span class="pl-s">{students}</span>/&gt;</pre></div>`, 
    propsParam: `<div class="highlight highlight-source-js"><pre><span class="pl-k">export</span> <span class="pl-c1">default</span> (<span class="pl-smi">props</span>) <span class="pl-k">=&gt;</span> {</pre></div>`,
    studentData: `<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">students</span> <span class="pl-k">=</span> [
  {
      name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Peter Parker<span class="pl-pds">'</span></span>,
      course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Intro to Photography<span class="pl-pds">'</span></span>,
      grade<span class="pl-k">:</span> <span class="pl-c1">85</span>
  },
  {
      name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bruce Banner<span class="pl-pds">'</span></span>,
      course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Psychology<span class="pl-pds">'</span></span>,
      grade<span class="pl-k">:</span> <span class="pl-c1">91</span>
  },
  {
      name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tony Stark<span class="pl-pds">'</span></span>,
      course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mechanical Engineering<span class="pl-pds">'</span></span>,
      grade<span class="pl-k">:</span> <span class="pl-c1">100</span>
  }
];</pre></div>`,
    mapEx1: `<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">tableRows</span> <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">data</span>.<span class="pl-en">map</span>();
<span class="pl-c"><span class="pl-c">//</span> This is not complete and will not work yet</span></pre></div>`,
    mapEx2: `<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">tableRows</span> <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">data</span>.<span class="pl-en">map</span>((<span class="pl-smi">item</span>, <span class="pl-smi">index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(item);
    <span class="pl-k">return</span>;
});</pre></div>`,
    mapEx3: `<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">tableRows</span> <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">data</span>.<span class="pl-en">map</span>((<span class="pl-smi">item</span>, <span class="pl-smi">index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-c1">name</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-c1">course</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-c1">grade</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
    )
});</pre></div>`,
    mapEx4: `<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">tableRows</span> <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">data</span>.<span class="pl-en">map</span>((<span class="pl-smi">item</span>, <span class="pl-smi">index</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>tr key<span class="pl-k">=</span>{index}<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-c1">name</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-smi">course</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-smi">grade</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
    )
});</pre></div>`,
    example1: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>

<span class="pl-k">export</span> <span class="pl-c1">default</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> <span class="pl-k">&lt;</span>h1<span class="pl-k">&gt;</span>My first React functional component<span class="pl-k">&lt;</span><span class="pl-k">/</span>h1<span class="pl-k">&gt;</span>
}
</pre></div>`,
    example2: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">ReactDOM</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">App</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./components/app<span class="pl-pds">'</span></span>;

<span class="pl-smi">ReactDOM</span>.<span class="pl-en">render</span>(
    <span class="pl-k">&lt;</span>App<span class="pl-k">/</span><span class="pl-k">&gt;</span>,
    <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>)
);</pre></div>`,
    example3: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>table className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>table<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>thead className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>thead-inverse<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Name<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Course<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Grade<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>thead<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>tbody<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Bruce Wayne<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Criminal Justice<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span><span class="pl-c1">94</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Barry Allen<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Forensic Science<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span><span class="pl-c1">98</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Clark Kent<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>Creative Writing<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span><span class="pl-c1">86</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>tbody<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>table<span class="pl-k">&gt;</span>
    )
}
</pre></div>`,
    example4: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">Table</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./table<span class="pl-pds">'</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> () <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>div className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>h1<span class="pl-k">&gt;</span>Student Grade Table<span class="pl-k">&lt;</span><span class="pl-k">/</span>h1<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>Table<span class="pl-k">/</span><span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
    )
}
</pre></div>`,
    example5: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span> <span class="pl-smi">Table</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./table<span class="pl-pds">'</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> () <span class="pl-k">=&gt;</span> {

    <span class="pl-k">const</span> <span class="pl-c1">students</span> <span class="pl-k">=</span> [
        {
            name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Peter Parker<span class="pl-pds">'</span></span>,
            course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Intro to Photography<span class="pl-pds">'</span></span>,
            grade<span class="pl-k">:</span> <span class="pl-c1">85</span>
        },
        {
            name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bruce Banner<span class="pl-pds">'</span></span>,
            course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Psychology<span class="pl-pds">'</span></span>,
            grade<span class="pl-k">:</span> <span class="pl-c1">91</span>
        },
        {
            name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tony Stark<span class="pl-pds">'</span></span>,
            course<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mechanical Engineering<span class="pl-pds">'</span></span>,
            grade<span class="pl-k">:</span> <span class="pl-c1">100</span>
        }
    ];

    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>div className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>container<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>h1<span class="pl-k">&gt;</span>Student Grade Table<span class="pl-k">&lt;</span><span class="pl-k">/</span>h1<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>Table data<span class="pl-k">=</span>{students}<span class="pl-k">/</span><span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
    )
}
</pre></div>`,
    example6: `<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">tbody</span>&gt;
    {tableRows}
&lt;/<span class="pl-ent">tbody</span>&gt;</pre></div>`,
    example7: `<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>;

<span class="pl-k">export</span> <span class="pl-c1">default</span> (<span class="pl-smi">props</span>) <span class="pl-k">=&gt;</span> {

    <span class="pl-k">const</span> <span class="pl-c1">tableRows</span> <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">data</span>.<span class="pl-en">map</span>((<span class="pl-smi">item</span>, <span class="pl-smi">index</span>) <span class="pl-k">=&gt;</span> {
        <span class="pl-k">return</span> (
            <span class="pl-k">&lt;</span>tr key<span class="pl-k">=</span>{index}<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-c1">name</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-smi">course</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>td<span class="pl-k">&gt;</span>{<span class="pl-smi">item</span>.<span class="pl-smi">grade</span>}<span class="pl-k">&lt;</span><span class="pl-k">/</span>td<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
        )
    });

    <span class="pl-k">return</span> (
        <span class="pl-k">&lt;</span>table className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>table<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>thead className<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>thead-inverse<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span>tr<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Name<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Course<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                    <span class="pl-k">&lt;</span>th<span class="pl-k">&gt;</span>Grade<span class="pl-k">&lt;</span><span class="pl-k">/</span>th<span class="pl-k">&gt;</span>
                <span class="pl-k">&lt;</span><span class="pl-k">/</span>tr<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>thead<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>tbody<span class="pl-k">&gt;</span>
                {tableRows}
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>tbody<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span><span class="pl-k">/</span>table<span class="pl-k">&gt;</span>
    ) 
}
</pre></div>`
}
