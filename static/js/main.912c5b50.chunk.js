(this["webpackJsonpappstreet-ekart"]=this["webpackJsonpappstreet-ekart"]||[]).push([[0],{36:function(e,t){},37:function(e,t){},42:function(e,t,a){e.exports=a(73)},51:function(e,t,a){},53:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),i=a(38),s=a(16),l=(a(51),a(17));var u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"sticky-top mb-3 bg-white border-bottom shadow-sm"},o.a.createElement("nav",{className:"site-header py-3"},o.a.createElement("div",{className:"container d-flex flex-column flex-md-row justify-content-between"},o.a.createElement("h1",null,o.a.createElement(l.b,{exact:!0,to:"/"},"My Shop"))))))},p=a(6),d=a(7),m=a(9),h=a(8),f=a(18),v=a(10),E=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},this.props.data.map((function(t){return o.a.createElement("div",{className:"col-md-3 col-sm-6 col-6 plp-tile"},o.a.createElement(l.b,{to:"/products/".concat(t._id)},o.a.createElement("img",{class:"plp-image",src:t.images[0],alt:t.name}),o.a.createElement("h5",null,t.name),o.a.createElement("div",{className:"plp-price"},"\u20b9\xa0",e.priceFormat(t.sale_price))))}))))}},{key:"priceFormat",value:function(e){return e.toFixed(2)}}]),t}(o.a.Component),b=(a(53),a(40)),g=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{data:this.props.data}),o.a.createElement("div",null,o.a.createElement(b.a,{onClick:this.props.onLoadMore,className:"loadMore btn"},"Load More")))}}]),t}(o.a.Component),_=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0,products:[],currentPage:1},a.onLoadMore=a.onLoadMore.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.fetchProducts(),console.log(this.state.products)}},{key:"onLoadMore",value:function(e){e.preventDefault(),this.setState({currentPage:this.state.currentPage+1},this.fetchProducts)}},{key:"fetchProducts",value:function(){var e=this;fetch("https://assignment-appstreet.herokuapp.com/api/v1/products?page=".concat(this.state.currentPage)).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{products:e.products.concat(t.products)}}))})).catch((function(e){console.log("Error: ",e)}))}},{key:"render",value:function(){return console.log("aaaa",this.state.products),this.state.products.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{data:this.state.products,onLoadMore:this.onLoadMore})):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Loading..."))}}]),t}(o.a.Component),j=a(34),O=a.n(j),k=(a(69),a(70),function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0},this.props.images.map((function(e){return o.a.createElement("img",{src:e,alt:"iamge"})})))}}]),t}(o.a.Component)),y=(a(71),a(74)),F=a(75),N=a(35),C=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.selectedVariation,a=t.images,n=t.name,r=t.mark_price,c=t.sale_price,i=t.sale_msg;return console.log("attr",this.props),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-12"},o.a.createElement(k,{images:a})),o.a.createElement("div",{className:"col-md-6 col-12"},o.a.createElement("h5",{className:"seperator name"},n),o.a.createElement("div",{className:"description seperator"},this.props.data.primary_product.desc),o.a.createElement("div",{className:"price seperator"},"\u20b9\xa0",this.priceFormat(c),"\xa0",o.a.createElement("del",null,"\u20b9\xa0",this.priceFormat(r)),o.a.createElement("div",null,"You save \u20b9\xa0",this.priceFormat(r-c)," (",i,")"),o.a.createElement("div",null,"Local taxes included (wherever applicable)")),Object.keys(this.props.attr_option).map((function(t){return o.a.createElement("div",{className:"options seperator"},o.a.createElement("div",null,e.props.attr_option[t].data.length," ".concat(t," avaialable")),o.a.createElement(y.a,null,o.a.createElement(F.a,{type:"radio",name:e.props.attr_option[t].id,defaultValue:e.props.selected_option_ids[e.props.attr_option[t].id],onChange:e.props.handleClick},e.props.attr_option[t].data.map((function(e){return o.a.createElement(N.a,{variant:"outline-secondary",className:"mr-2",value:e._id},e.name)})))))})),o.a.createElement(b.a,{className:"mt-2",size:"lg",block:!0},"Add to cart"))))}},{key:"priceFormat",value:function(e){return e.toFixed(2)}}]),t}(o.a.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0,product:{},selected_variation:[],attr_option:[],selected_option_ids:[]},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e,t){var a=this.state.selected_option_ids,n=new Object;Object.keys(a).forEach((function(e){e===t.target.name?n[e]=t.target.value:n[e]=a[e]})),this.setState({selected_option_ids:n},this.updateSelectedVariation),console.log("idddd",t.target.name,t.target.value)}},{key:"componentDidMount",value:function(){var e=this;console.log("component did mount",this.props.match.params.id),fetch("https://assignment-appstreet.herokuapp.com/api/v1/products/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){return e.setState({product:t},e.getSelectedVariationData(t))})).catch((function(e){console.log("Error: ",e)})),console.log(this.state.product)}},{key:"render",value:function(){return this.state.product&&this.state.product.success?o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{data:this.state.product,selectedVariation:this.state.selected_variation,attr_option:this.state.attr_option,handleClick:this.handleClick,selected_option_ids:this.state.selected_option_ids})):(console.log(this.state.products),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Loading...")))}},{key:"updateSelectedVariation",value:function(){var e=this;this.state.product.product_variations.map((function(t){var a=Object.values(e.state.selected_option_ids).map((function(e){return e})).join("_"),n=Object.values(e.state.selected_option_ids).map((function(e){return e})).reverse().join("_");a!==t.sign.join("_")&&n!==t.sign.join("_")||e.setState({selected_variation:t})}))}},{key:"getSelectedVariationData",value:function(e){var t=this,a=new Object;e.product_variations.map((function(n){e.selected_option_ids.join("_")===n.sign.join("_")&&(t.setState({selected_variation:n}),e.options.forEach((function(t){e.selected_option_ids.includes(t._id)&&(a[t.attrib_id]=t._id)})))})),this.setState({selected_option_ids:a}),console.log(a);var n=[];e.attributes.forEach((function(t){n[t.name]=[],n[t.name].id=t._id,n[t.name].data=[],e.options.forEach((function(e){t._id===e.attrib_id&&n[t.name].data.push(e)}))})),this.setState({attr_option:n})}}]),t}(o.a.Component),w=a(14);var M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement(u,null),o.a.createElement(w.c,null,o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement(w.a,{exact:!0,path:"/",component:_}),o.a.createElement(w.a,{exact:!0,path:"/products/:id",component:S}))))))},x=a(36),L=a.n(x),P=a(37),V=a.n(P),D=Object(s.b)({plp:L.a,pdp:V.a}),J=(a(72),Object(s.c)(D));c.a.render(o.a.createElement(i.a,{store:J},o.a.createElement(M,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.912c5b50.chunk.js.map