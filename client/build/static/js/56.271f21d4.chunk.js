(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{2772:function(n,e,t){"use strict";t.r(e);var a=t(12),o=t(13),r=t(29),i=t(27),l=t(28),c=t(32),d=t(0),s=t.n(d),p=t(2757),h=t(167),u=t(67),x=t(178),f=t(149),m=t(122),g=t(42),b=t(40),N=t(7),w=t(41),y=t(70);function j(){var n=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 160px);\n\n  @media only screen and (max-width: 767px) {\n    max-height: 60vh;\n  }\n\n  .isoSearchNotes {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 77px;\n      padding: 0 15px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid rgba(230, 230, 230, 0.7);\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      -webkit-box-shadow: none;\n      -moz-box-shadow: none;\n      border-radius: 0;\n      box-shadow: none;\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n    }\n\n    &:hover,\n    &:focus {\n      .ant-input {\n        border-color: rgba(230, 230, 230, 0.7) !important;\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: ",";\n    right: ",";\n    color: ",";\n  }\n\n  .isoNoteList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .isoList {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 0;\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n\n      &.active {\n        background-color: ",";\n      }\n\n      .isoNoteBGColor {\n        width: 5px;\n        display: flex;\n        margin: ",";\n        flex-shrink: 0;\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 5px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 20px;\n    }\n\n    .isoNoResultMsg {\n      padding: 15px 20px;\n      text-align: center;\n      color: ",";\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n"]);return j=function(){return n},n}function v(){var n=Object(g.a)(["\n  padding: 50px 35px;\n  display: flex;\n  height: 100%;\n  min-height: 300px;\n  background: none;\n\n  @media only screen and (max-width: 767px) {\n    padding: 40px 20px;\n    height: auto;\n    flex-direction: column;\n\n    &.ant-layout.ant-layout-has-sider {\n      flex-direction: column;\n    }\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 50px 20px;\n  }\n\n  .isoNoteListSidebar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    "," background: #ffffff;\n    border-right: ","px solid\n      ",";\n    border-left: ","px solid\n      ",";\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 260px !important;\n      flex: 0 0 260px !important;\n      max-width: none !important;\n      min-width: 0 !important;\n    }\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      max-width: 100% !important;\n      min-width: 0 !important;\n      margin-bottom: 30px;\n      flex: 0 !important;\n      overflow: hidden;\n      overflow-y: auto;\n    }\n  }\n\n  .isoNotepadWrapper {\n    background: #ffffff;\n\n    .isoHeader {\n      height: auto;\n      line-height: inherit;\n      padding: 20px 30px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      flex-direction: row;\n      background-color: #ffffff;\n      border-bottom: 1px solid ",";\n\n      @media only screen and (max-width: 480px) {\n        padding: 20px;\n      }\n\n      @media only screen and (max-width: 400px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .isoColorChooseWrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        flex-direction: row;\n        margin-right: ",";\n        margin-left: ",";\n\n        span {\n          font-size: 13px;\n          color: ",";\n        }\n\n        .isoColorChooser {\n          width: 20px;\n          height: 20px;\n          cursor: pointer;\n          border: 0;\n          margin: ",";\n          padding: 0;\n          ",";\n        }\n      }\n\n      .isoAddNoteBtn {\n        background-color: ",";\n        border: 0;\n        padding: 5px 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        @media only screen and (max-width: 400px) {\n          margin: ",";\n        }\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n\n    .isoNoteEditingArea {\n      display: flex;\n      height: 100%;\n\n      @media (max-width: 800px) {\n        height: 300px;\n      }\n\n      .isoNoteTextbox {\n        font-size: 14px;\n        color: ",";\n        line-height: 24px;\n        width: 100%;\n        height: calc(100% - 30px);\n        border: 0;\n        outline: 0;\n        padding: 20px 30px;\n        resize: none;\n\n        &:focus {\n          box-shadow: none;\n        }\n\n        @media only screen and (max-width: 480px) {\n          padding: 20px;\n        }\n      }\n    }\n\n    @media (max-width: 767px) {\n      .isoNoteListSidebar.ant-layout-sider {\n        width: auto !important;\n        margin-bottom: 30px;\n        flex: 0 0 450px !important;\n      }\n    }\n  }\n"]);return v=function(){return n},n}var O=b.b.div(v(),"",function(n){return"rtl"===n["data-rtl"]?0:1},Object(N.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?1:0},Object(N.palette)("border",0),Object(N.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(N.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(w.a)("3px"),Object(N.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(w.a)("3px"),Object(w.c)(),function(n){return n["data-rtl"],"15px 0 0 0"},Object(N.palette)("primary",1),Object(N.palette)("text",2)),C=b.b.div(j(),Object(N.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"15px":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"15px"},Object(w.c)(),function(n){return"rtl"===n["data-rtl"]?"auto":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"auto"},Object(N.palette)("grayscale",0),Object(N.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(N.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 20px":"0 20px 0 0"},Object(N.palette)("secondary",2),Object(N.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"},function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"},Object(N.palette)("grayscale",0),Object(w.c)(),Object(N.palette)("primary",0),Object(N.palette)("grayscale",0),Object(N.palette)("secondary",2)),k=Object(y.a)(O),E=Object(y.a)(C),z=t(1080);var L=function(n){function e(n){var t;return Object(a.a)(this,e),(t=Object(r.a)(this,Object(i.a)(e).call(this,n))).singleNote=t.singleNote.bind(Object(c.a)(Object(c.a)(t))),t.onChange=t.onChange.bind(Object(c.a)(Object(c.a)(t))),t.state={search:""},t}return Object(l.a)(e,n),Object(o.a)(e,[{key:"singleNote",value:function(n){var e=this.props,t=e.selectedId,a=e.deleteNote,o=e.changeNote,r=e.colors,i=t===n.id?"active":"";return s.a.createElement("div",{className:"isoList ".concat(i),key:n.id},s.a.createElement("div",{className:"isoNoteBGColor",style:{width:"5px",background:r[n.color]}}),s.a.createElement("div",{className:"isoNoteText",onClick:function(){return o(n.id)}},s.a.createElement("h3",null,n.note),s.a.createElement("span",{className:"isoNoteCreatedDate"},Object(x.e)(n.createTime))),s.a.createElement(f.b,{className:"isoDeleteBtn",icon:"close",type:"button",onClick:function(){return a(n.id)}}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,e=this.state.search,t=function(n,e){return(e=e.toUpperCase())?n.filter(function(n){return n.note.toUpperCase().includes(e)}):n}(this.props.notes,e);return s.a.createElement(E,{className:"isoNoteListWrapper"},s.a.createElement(m.b,{placeholder:"Search Notes",className:"isoSearchNotes",value:e,onChange:this.onChange}),s.a.createElement("div",{className:"isoNoteList"},t&&t.length>0?s.a.createElement(z.a,null,t.map(function(e){return n.singleNote(e)})):s.a.createElement("span",{className:"isoNoResultMsg"},"No note found")))}}]),e}(d.Component),S=t(319),B=t(1002),I=u.a.changeNote,T=u.a.addNote,W=u.a.editNote,A=u.a.deleteNote,D=u.a.changeColor,H=p.a.Header,G=p.a.Content,J=function(n){function e(n){var t;return Object(a.a)(this,e),(t=Object(r.a)(this,Object(i.a)(e).call(this,n))).updateNote=t.updateNote.bind(Object(c.a)(Object(c.a)(t))),t}return Object(l.a)(e,n),Object(o.a)(e,[{key:"updateNote",value:function(n){var e=this.props;(0,e.editNote)(e.selectedId,n.target.value)}},{key:"render",value:function(){var n=this.props,e=n.notes,t=n.selectedId,a=n.changeNote,o=n.deleteNote,r=n.addNote,i=n.colors,l=n.seectedColor,c=n.changeColor,d=void 0!==t?e.filter(function(n){return n.id===t})[0]:null;return s.a.createElement(k,{className:"isomorphicNoteComponent"},s.a.createElement("div",{style:{width:"340px"},className:"isoNoteListSidebar"},s.a.createElement(L,{notes:e,selectedId:t,changeNote:a,deleteNote:o,colors:i})),s.a.createElement(p.a,{className:"isoNotepadWrapper"},s.a.createElement(H,{className:"isoHeader"},void 0!==t?s.a.createElement("div",{className:"isoColorChooseWrapper"},s.a.createElement(S.a,{colors:i,changeColor:c,seectedColor:l})," ",s.a.createElement("span",null,s.a.createElement(B.a,{id:"notes.ChoseColor"}))):"",s.a.createElement(f.b,{type:"primary",className:"isoAddNoteBtn",onClick:r},s.a.createElement(B.a,{id:"notes.addNote"}))),s.a.createElement(G,{className:"isoNoteEditingArea"},void 0!==t?s.a.createElement(m.c,{className:"isoNoteTextbox",value:d.note,onChange:this.updateNote,autoFocus:!0}):"")))}}]),e}(d.Component);e.default=Object(h.b)(function(n){var e=n.Notes;return{notes:e.notes,selectedId:e.selectedId,colors:e.colors,seectedColor:e.seectedColor}},{addNote:T,editNote:W,deleteNote:A,changeNote:I,changeColor:D})(J)}}]);
//# sourceMappingURL=56.271f21d4.chunk.js.map