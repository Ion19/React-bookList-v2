(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(65)},65:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(28),o=t.n(r),s=t(11),d=t(12),c=t(14),l=t(13),m=t(15),u=t(10),v=t(29),E=t.n(v),b=t(6),p=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={querry:""},t.onInputChange=function(e){t.setState({querry:e})},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e,a=this,t=this.props.content;if(this.state.querry){var n=new RegExp(E()(this.state.querry),"i");e=t.filter(function(e){return n.test(e.book_details[0].title)})}else e=t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"ui fluid icon input"},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return a.onInputChange(e.target.value)},value:this.state.querry}),i.a.createElement(b.b,{to:"/ShowCreatedList",className:"ui button"},i.a.createElement("i",{className:" book icon big"}),"Show Lists")),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("h2",null,"Book List"),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"ui cards grid"},e.map(function(e){return i.a.createElement("div",{key:e.book_details[0].primary_isbn10,className:"ui card seven wide column"},i.a.createElement("div",{className:""},i.a.createElement("img",{className:"right floated mini ui image",alt:"book",src:e.book_details[0].book_image})),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,i.a.createElement("div",{className:"header"},e.book_details[0].title),i.a.createElement("div",{className:"meta"},e.book_details[0].author),i.a.createElement("div",{className:"description"},e.book_details[0].description),i.a.createElement("div",{className:"ui compact menu"},i.a.createElement("div",{className:"ui simple dropdown item"},"Move to",i.a.createElement("i",{className:"dropdown icon"}),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"item",onClick:function(){return a.props.onAddToReadedList(e)}}," Add To Readed List"),i.a.createElement("div",{className:"item",onClick:function(){return a.props.onAddToCurrentyReadingList(e)}}," Add To Currently Readed List"),i.a.createElement("div",{className:"item",onClick:function(){return a.props.onAddToWantToReadList(e)}}," Add TO Want to Read List")))))))}),i.a.createElement(b.b,{to:"/ShowCreatedList",className:"ui button"},i.a.createElement("i",{className:" book icon big"}),"Show Lists")))}}]),a}(i.a.Component),k=t(32),N=t.n(k),R=t(8),f=function(e){var a=Object(R.a)(new Set(e.content));return i.a.createElement("div",{className:"ui"},i.a.createElement("div",{className:"ui divider"}),i.a.createElement("h2",{className:"center aligned header"},"Readed Books List"),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"ui items cards grid"},a.map(function(a){return i.a.createElement("div",{key:a.book_details[0].primary_isbn10,className:"ui item eight wide column"},i.a.createElement("div",{className:"ui card"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:a.book_details[0].book_image,alt:"book"})),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"header"},a.book_details[0].title),i.a.createElement("div",{className:"meta"},i.a.createElement("span",null,a.book_details[0].author)),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,a.book_details[0].description)),i.a.createElement("div",{className:"extra"},i.a.createElement("span",null,"$ ",a.book_details[0].price)),i.a.createElement("div",{className:"ui compact menu"},i.a.createElement("div",{className:"ui simple dropdown item"},"Options",i.a.createElement("i",{className:"dropdown icon"}),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"item",onClick:function(){return e.onRemoveFromReadedList(a)}},"Remove From Readed List")))))))})),i.a.createElement("div",{className:"ui divider"}))},_=function(e){Object(R.a)(new Set(e.content));return i.a.createElement("div",{className:"ui"},i.a.createElement("h2",{className:"center aligned header"},"Currently Reading Books List"),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"ui items cards grid"},e.content.map(function(a){return i.a.createElement("div",{key:a.book_details[0].primary_isbn10,className:"ui item eight wide column"},i.a.createElement("div",{className:"ui card"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:a.book_details[0].book_image,alt:"book"})),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"header"},a.book_details[0].title),i.a.createElement("div",{className:"meta"},i.a.createElement("span",null,a.book_details[0].author)),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,a.book_details[0].description)),i.a.createElement("div",{className:"extra"},i.a.createElement("span",null,"$ ",a.book_details[0].price)),i.a.createElement("div",{className:"ui compact menu"},i.a.createElement("div",{className:"ui simple dropdown item"},"Options",i.a.createElement("i",{className:"dropdown icon"}),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"item",onClick:function(t){return e.onRemoveFromCurrentlyReadingList(a)}},"Remove From Currently Reading List"),i.a.createElement("div",{className:"item",onClick:function(t){return e.onAddToWantToReadList(a)}},"Add To Want To Read List"),i.a.createElement("div",{className:"item",onClick:function(t){return e.onAddToReadedList(a)}},"Add To Readed List")))))))})),i.a.createElement("div",{className:"ui divider"}))},y=function(e){var a=Object(R.a)(new Set(e.content));return i.a.createElement("div",{className:"ui"},i.a.createElement("h2",{className:"center aligned header"},"Want To Read Books List"),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"ui items cards grid"},a.map(function(a){return i.a.createElement("div",{key:a.book_details[0].primary_isbn10,className:"ui item eight wide column"},i.a.createElement("div",{className:"ui card"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:a.book_details[0].book_image,alt:"book"})),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"header"},a.book_details[0].title),i.a.createElement("div",{className:"meta"},i.a.createElement("span",null,a.book_details[0].author)),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,a.book_details[0].description)),i.a.createElement("div",{className:"extra"},i.a.createElement("span",null,"$ ",a.book_details[0].price)),i.a.createElement("div",{className:"ui compact menu"},i.a.createElement("div",{className:"ui simple dropdown item"},"Options",i.a.createElement("i",{className:"dropdown icon"}),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"item",onClick:function(){return e.onRemoveFromReadedList(a)}},"Remove From Readed List"),i.a.createElement("div",{className:"item",onClick:function(){return e.onAddToReadedList(a)}},"Add To Readed List"),i.a.createElement("div",{className:"item",onClick:function(){return e.onAddToCurrentyReadingList(a)}},"Add To Currently Reading List")))))))})),i.a.createElement("div",{className:"ui divider"}))},g=t(7),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={allOfBooks:[],readedBooks:[],currentlyReading:[],wantToRead:[]},t.componentWillMount=function(){N()({method:"get",url:"https://api.nytimes.com/svc/books/v2/lists/2010-10-01/trade-fiction-paperback.json?list-name=hardcover-fiction&api-key=32ur3KWXvl87ZVz6s0OMMmDlvy42DXuZ",responseType:"json"}).then(function(e){console.log(Object(u.a)(Object(u.a)(t))),t.setState({allOfBooks:e.data.results})}).catch(function(e){console.log(e)})},t.addToReadedList=function(e){t.state.readedBooks.map(function(a){return a.book_details[0].title!==e.book_details[0].title})&&t.setState(function(a){return{readedBooks:a.readedBooks.concat(e),wantToRead:a.wantToRead.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10}),currentlyReading:a.currentlyReading.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t.addToCurrentlyReadingList=function(e){t.setState(function(a){return{currentlyReading:a.currentlyReading.concat(e),readedBooks:a.readedBooks.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10}),wantToRead:a.wantToRead.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t.addToWantToReadList=function(e){t.setState(function(a){return{wantToRead:a.wantToRead.concat(e),readedBooks:a.readedBooks.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10}),currentlyReading:a.currentlyReading.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t.removeFromReadedList=function(e){t.setState(function(a){return{readedBooks:a.readedBooks.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t.removeFromWantToReadedList=function(e){t.setState(function(a){return{wantToRead:a.wantToRead.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t.removeFromCurrentlyReadingList=function(e){t.setState(function(a){return{currentlyReading:a.currentlyReading.filter(function(a){return a.book_details[0].primary_isbn10!==e.book_details[0].primary_isbn10})}})},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"ui container "},i.a.createElement("div",{className:"content"},i.a.createElement(g.a,{exact:!0,path:"/",render:function(){return i.a.createElement(p,{content:e.state.allOfBooks,onAddToReadedList:e.addToReadedList,onAddToWantToReadList:e.addToWantToReadList,onAddToCurrentyReadingList:e.addToCurrentlyReadingList})}}),i.a.createElement(g.a,{path:"/ShowCreatedList",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.b,{to:"/"},i.a.createElement("i",{className:"angle left icon huge"}),"Search and Add to lists"),i.a.createElement(f,{content:e.state.readedBooks,onRemoveFromReadedList:e.removeFromReadedList}),i.a.createElement(y,{content:e.state.wantToRead,onAddToReadedList:e.addToReadedList,onRemoveFromReadedList:e.removeFromWantToReadedList,onAddToCurrentyReadingList:e.addToCurrentlyReadingList}),i.a.createElement(_,{content:e.state.currentlyReading,onAddToReadedList:e.addToReadedList,onAddToWantToReadList:e.addToWantToReadList,onRemoveFromCurrentlyReadingList:e.removeFromCurrentlyReadingList}),i.a.createElement(b.b,{to:"/"},i.a.createElement("i",{className:"search icon big"}),"Search and Add to lists"))}})))}}]),a}(i.a.Component);o.a.render(i.a.createElement(b.a,null,i.a.createElement(h,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cb624f70.chunk.js.map