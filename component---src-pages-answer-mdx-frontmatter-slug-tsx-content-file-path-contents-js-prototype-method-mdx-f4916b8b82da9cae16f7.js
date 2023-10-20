"use strict";(self.webpackChunknull_quiz_answers=self.webpackChunknull_quiz_answers||[]).push([[619],{7938:function(e,n,t){t.r(n),t.d(n,{Head:function(){return h},default:function(){return d}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",strong:"strong",ol:"ol",li:"li",pre:"pre",code:"code",ul:"ul"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h2,null,"prototype?"),"\n",a.createElement(n.h3,null,"객체"),"\n",a.createElement(n.p,null,"prototype에 대해 설명하려면 객체에 대해 알아야 합니다.\n흔히 JavaScript에서 ",a.createElement(n.strong,null,"거의 모든 것이 객체"),"라고 설명합니다."),"\n",a.createElement(n.p,null,"JS의 요소는 객체와 원시 타입(primitive type)으로 나눌 수 있습니다."),"\n",a.createElement(n.p,null,"[원시 타입]"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"문자열 (string)"),"\n",a.createElement(n.li,null,"숫자 (number)"),"\n",a.createElement(n.li,null,"불리언 (boolean)"),"\n",a.createElement(n.li,null,"null"),"\n",a.createElement(n.li,null,"undefined"),"\n",a.createElement(n.li,null,"symbol (ES6부터 도입된 고유 식별자)"),"\n"),"\n",a.createElement(n.p,null,"위 타입을 제외한 JS 내의 모든 요소가 객체입니다. (함수, 배열, 정규표현식, 에러, etc)"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const arr = [1, 2, 3]; // Array의 객체\nconst hanum = new Person(); // Person의 객체\n")),"\n",a.createElement(n.h3,null,"JavaScript는 프로토타입 기반 언어"),"\n",a.createElement(n.p,null,"위 문구를 한 번쯤은 들어보셨을 겁니다."),"\n",a.createElement(n.p,null,"모든 객체는 프로토타입 객체(prototype object)를 가지며 자신의 프로토타입 객체에 정의된 속성에 접근할 수 있다는 뜻입니다."),"\n",a.createElement(n.p,null,"예를 들어 ",a.createElement(n.code,null,"Array")," 객체의 프로토타입은 ",a.createElement(n.code,null,"forEach()"),", ",a.createElement(n.code,null,"map()")," 등의 메서드를 가지고 있기 때문에 ",a.createElement(n.code,null,"[].forEach()")," 와 같은 형식으로 메서드를 사용할 수 있습니다."),"\n",a.createElement(n.p,null,"생성자 함수를 사용할 경우, 아래와 같이 프로토타입 메서드를 정의합니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'function Person(name) {\n  this._name = name;\n}\nPerson.prototype.getName = function () {\n  return this._name;\n};\n\nconst hanum = new Person("hanum");\nhanum.getName();\n')),"\n",a.createElement(n.h2,null,"프로토타입 객체에 메서드를 정의하는 것과 일반 메서드를 정의하는 것은 어떻게 다를까요?"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"prototype 객체는 인스턴스 내부에 존재하지 않습니다."),"\n인스턴스 외부에 별도 객체에 저장되어 있죠."),"\n",a.createElement(n.p,null,"퀴즈 문제처럼 일반 메서드를 이용한다면"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'function Person(name) {\n  this.name = name;\n  this.getName = function() {\n                      return this.name\n                   }\n\nconst p1 = new Person("p1");\nconst p2 = new Person("p2");\n')),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"p1"),", ",a.createElement(n.code,null,"p2"),"가 생성될 때마다 ",a.createElement(n.code,null,"getName()")," 함수를 생성해야 하므로 자원이 낭비될 뿐더러, ",a.createElement(n.strong,null,"p1과 p2 내부에 각각 ",a.createElement(n.code,null,"getName()"),"대한 정보를 저장합니다.")," 기능은 같지만, 각 인스턴스에 새로운 메서드를 추가했을때와 동일하게 동작합니다. 아래처럼요."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"p1.someFunc = () => {};\np2.otherFunc = () => {};\n")),"\n",a.createElement(n.p,null,"이는 메모리 관리에 비효율적입니다."),"\n",a.createElement(n.p,null,"위의 prototype 설명의 예시처럼 ",a.createElement(n.code,null,"prototype")," 객체에 ",a.createElement(n.code,null,"getName()"),"을 정의한다면, ",a.createElement(n.code,null,"p1"),"과 ",a.createElement(n.code,null,"p2"),"에서 동일한 ",a.createElement(n.code,null,"prototype")," 객체의 ",a.createElement(n.code,null,"getName()"),"을 이용하게 됩니다."),"\n",a.createElement(n.p,null,"객체가 가벼워지죠.\n따라서 퀴즈 상황의 경우 prototype을 이용하는 것이 유리합니다."),"\n",a.createElement(n.p,null,"그 외에도 일반 메서드가 아닌 프로토타입 메서드를 사용한다면"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"프로토타입 체인을 통한 상속"),"\n",a.createElement(n.li,null,"동적 업데이트 (일반 메서드의 경우 인스턴스 생성 이후 메서드 업데이트 불가능)"),"\n",a.createElement(n.li,null,"코드 가독성 향상 (객체 property로 프로토타입 메서드가 표시되지 않음)"),"\n"),"\n",a.createElement(n.p,null,"등의 장점이 있으니, 상황에 맞게 잘 사용하는 것이 좋습니다."),"\n",a.createElement(n.h3,null,"class 문을 사용한다면?"),"\n",a.createElement(n.p,null,"ES5에서 추가된 ",a.createElement(n.code,null,"class"),"문을 사용하면 훨씬 직관적으로 프로토타입 메서드를 작성할 수 있습니다.\n",a.createElement(n.code,null,"class"),"문 또한 완전히 새로운 것이 아닌 프로토타입 기반의 syntax sugar이기 때문이죠."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  getName() {\n    return this.name;\n  }\n}\n")),"\n",a.createElement(n.p,null,"사실 위의 코드는"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\nPerson.prototype.getName = function () {\n  return this.name;\n};\n")),"\n",a.createElement(n.p,null,"와 동일합니다. 하지만 객체 메서드를 사용하는 전자가 훨씬 직관적입니다. 재미있죠?"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=t(4630),u=t(394),o=t(837),s=t(9622);const E=u.styled.div.attrs({className:"container"}).withConfig({displayName:"mdxfrontmatter__slug__Container",componentId:"sc-14z8vhw-0"})(["margin-top:15%;"]),i=u.styled.div.withConfig({displayName:"mdxfrontmatter__slug__FlexEndContainer",componentId:"sc-14z8vhw-1"})(["display:flex;justify-content:end;"]);o.Z.registerLanguage("javascript",s.Z);const p=e=>{let{children:n,data:{mdx:t}}=e;const{title:l,date:r,tags:c,relatedLinks:m}=t.frontmatter;return(0,a.useEffect)((()=>{o.Z.highlightAll()}),[]),a.createElement(a.Fragment,null,a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/atom-one-dark.min.css"}),a.createElement(E,null,a.createElement("h1",null,l),a.createElement("div",null,a.createElement("i",null,"About "),null==c?void 0:c.map(((e,n)=>a.createElement("i",{key:n},e,n!==c.length-1&&", ")))),a.createElement(i,null,a.createElement("i",null,r)),a.createElement("hr",null)),a.createElement(E,null,a.createElement("section",null,n)),a.createElement("article",null,a.createElement("h3",null,"더 알아보려면?"),a.createElement("ul",null,null==m?void 0:m.map(((e,n)=>a.createElement("li",{key:n},a.createElement("a",{href:e||"#"},e)))))),a.createElement(i,null,a.createElement("a",{href:"https://github.com/0hhanum/null_quiz_answers/issues/new?title="+l+" 수정 요청&body=잘못된 정보를 고쳐주시면 기프티콘을 드려요 :)"},a.createElement("p",null,"잘못된 정보가 있나요?"))))};function d(e){return a.createElement(p,e,a.createElement(c,e))}const h=e=>{var n,t;let{data:l}=e;return a.createElement(m.Z,{title:(null===(n=l.mdx)||void 0===n||null===(t=n.frontmatter)||void 0===t?void 0:t.title)||""})}}}]);
//# sourceMappingURL=component---src-pages-answer-mdx-frontmatter-slug-tsx-content-file-path-contents-js-prototype-method-mdx-f4916b8b82da9cae16f7.js.map