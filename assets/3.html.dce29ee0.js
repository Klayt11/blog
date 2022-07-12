import{_ as n,o as s,c as a,d as t}from"./app.ba452789.js";const e={},o=t(`<details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1Amarkdown</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Print blog meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blogmeta&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;---&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;title: \${1:$TM_FILENAME_BASE}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;author: \${2:sihaolin}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;tags:&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  - $3&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;---&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;\\r&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u751F\u6210\u535A\u5BA2\u5143\u4FE1\u606F&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary class="custom-container-title">\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5\uFF1A\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4</summary><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Print blog meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nowdate&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&#39;$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND&#39;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u751F\u6210\u5F53\u524D\u65E5\u671F\u65F6\u95F4&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u6700\u540E\uFF0C\u5728 setting.json \u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u914D\u7F6E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function i(l,c){return s(),a("div",null,p)}var r=n(e,[["render",i],["__file","3.html.vue"]]);export{r as default};
