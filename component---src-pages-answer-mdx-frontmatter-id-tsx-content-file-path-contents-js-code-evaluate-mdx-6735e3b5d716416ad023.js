"use strict";(self.webpackChunknull_quiz_answers=self.webpackChunknull_quiz_answers||[]).push([[18],{6955:function(e,n,l){l.r(n),l.d(n,{Head:function(){return h},default:function(){return p}});var t=l(1151),c=l(7294);function a(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return c.createElement(c.Fragment,null,c.createElement("blockquote",null,c.createElement(n.p,null,"트위터 @heyImMapleLeaf 트윗에서 따온 퀴즈입니다. 링크 하단 첨부")),"\n",c.createElement(n.h2,null,"10?"),"\n",c.createElement(n.p,null,"정답을 맞추셨나요?\n결과가 10인 이유는 연산자의 결합 순서와 평가 시점의 ",c.createElement(n.code,null,"i"),"값 때문입니다."),"\n",c.createElement(n.p,null,c.createElement(n.code,null,"i += x()"),"는 ",c.createElement(n.code,null,"i = i + x()"),"로도 나타낼 수 있습니다."),"\n",c.createElement(n.p,null,c.createElement("mark",null,"해당 라인이 평가되는 시점의 i는 0 입니다.")," 따라서 ",c.createElement(n.code,null,"i = 0 + x()"),"가 됩니다."),"\n",c.createElement(n.p,null,"순서대로 적어보면\n",c.createElement(n.code,null,"i += x()")," -> ",c.createElement(n.code,null,"i = i + x()")," -> ",c.createElement(n.code,null,"i = 0 + x()")," -> ",c.createElement(n.code,null,"i = 0 + 10")),"\n",c.createElement(n.p,null,"이렇게 됩니다."),"\n",c.createElement(n.p,null,c.createElement(n.code,null,"x()"),"의 ",c.createElement(n.code,null,"return")," 전에 콘솔을 찍어보면 이해하기 쉬운데요,"),"\n",c.createElement(n.pre,null,c.createElement(n.code,{className:"language-javascript"},"function x() {\n  i++;\n  console.log(i);\n  return 10;\n}\ni += x();\nconsole.log(i);\n// 1\n// 10\n")),"\n",c.createElement(n.p,null,c.createElement(n.code,null,"i++"),"가 실행되어 ",c.createElement(n.code,null,"i"),"가 ",c.createElement(n.code,null,"1"),"이 되었다가 ",c.createElement(n.code,null,"10"),"이 됩니다."),"\n",c.createElement("u",null,"이런 헷갈리는 코드를 작성하지 않는 게 중요하겠죠?"),"\n",c.createElement(n.h3,null,"번외"),"\n",c.createElement(n.p,null,"재미있는 건 연산의 순서를 변경하면 결과도 달라진다는 것.\n",c.createElement(n.code,null,"i = x() + i")," 의 결과는 ",c.createElement(n.code,null,"11"),"입니다."),"\n",c.createElement(n.p,null,"동일하게 순서대로 생각해보면"),"\n",c.createElement(n.p,null,c.createElement(n.code,null,"i = x() + i")," -> ",c.createElement(n.code,null,"i = 10 + i")," (이때 i = 1) -> ",c.createElement(n.code,null,"i = 10 + 1")),"\n",c.createElement(n.p,null,"이래서 11이 됩니다."),"\n",c.createElement("ins",null,"역시 이렇게 헷갈리는 코드를 작성하지 않는게 중요하겠죠? ~_~"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?c.createElement(n,e,c.createElement(a,e)):a(e)},u=l(4630),m=l(394),i=l(837),o=l(9622);const E=m.styled.div.attrs({className:"container"}).withConfig({displayName:"mdxfrontmatter__id__Container",componentId:"sc-1gyqok2-0"})(["margin-top:15%;"]),s=m.styled.div.withConfig({displayName:"mdxfrontmatter__id__FlexEndContainer",componentId:"sc-1gyqok2-1"})(["display:flex;justify-content:end;"]);i.Z.registerLanguage("javascript",o.Z);const d=e=>{let{children:n,data:{mdx:l}}=e;const{title:t,date:a,tags:r,relatedLinks:u}=l.frontmatter;return(0,c.useEffect)((()=>{i.Z.highlightAll()}),[]),c.createElement(c.Fragment,null,c.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/atom-one-dark.min.css"}),c.createElement(E,null,c.createElement("h1",null,t),c.createElement("div",null,c.createElement("i",null,"About "),null==r?void 0:r.map(((e,n)=>c.createElement("i",{key:n},e,n!==r.length-1&&", ")))),c.createElement(s,null,c.createElement("i",null,a)),c.createElement("hr",null)),c.createElement(E,null,c.createElement("section",null,n)),c.createElement("article",null,c.createElement("h3",null,"더 알아보려면?"),c.createElement("ul",null,null==u?void 0:u.map(((e,n)=>c.createElement("li",{key:n},c.createElement("a",{href:e||"#"},e)))))),c.createElement(s,null,c.createElement("a",{href:"https://github.com/0hhanum/null_quiz_answers/issues/new?title="+t+" 수정 요청&body=잘못된 정보를 고쳐주시면 기프티콘을 드려요 :)"},c.createElement("p",null,"잘못된 정보가 있나요?"))))};function p(e){return c.createElement(d,e,c.createElement(r,e))}const h=e=>{var n,l;let{data:t}=e;return c.createElement(u.Z,{title:(null===(n=t.mdx)||void 0===n||null===(l=n.frontmatter)||void 0===l?void 0:l.title)||""})}}}]);
//# sourceMappingURL=component---src-pages-answer-mdx-frontmatter-id-tsx-content-file-path-contents-js-code-evaluate-mdx-6735e3b5d716416ad023.js.map