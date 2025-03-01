(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{8650:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/User/Dashboard",function(){return s(2420)}])},2420:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(4848),r=s(6540),l=s(8869),i=s(6665),d=s(3093);s(4338);var n=s(9196);let o=e=>{let{userData:t,loading:s}=e,[o,c]=(0,r.useState)((null==t?void 0:t.name)||""),[x,m]=(0,r.useState)((null==t?void 0:t.mobile)||""),[h,u]=(0,r.useState)(null),[b,p]=(0,r.useState)(!1),[f,N]=(0,r.useState)(!1),[j,g]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[v,S]=(0,r.useState)([]),[C,_]=(0,r.useState)(""),[E,k]=(0,r.useState)(""),[D,T]=(0,r.useState)(!1),[L,P]=(0,r.useState)(""),A=async()=>{let e=i.I.firestore();try{let t=(await e.collection("certificate").get()).docs.map(e=>({id:e.id,...e.data()}));S(t)}catch(e){console.error("Error fetching data: ",e),d.oR.error("There was an error fetching the data.")}};if((0,r.useEffect)(()=>{A()},[]),s)return(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,a.jsx)("div",{className:"spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-t-blue-500 border-gray-200"})});let V=v&&Array.isArray(v)?v.filter(e=>{var t;return null===(t=e.lotno)||void 0===t?void 0:t.toLowerCase().includes(L.toLowerCase())}):[];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"w-full bg-gradient-to-r from-blue-50 to-blue-100 p-8  shadow-xl",children:[(0,a.jsxs)("h1",{className:"md:text-4xl text-xl font-semibold text-center text-blue-600 mb-6",children:["Welcome, ",null==t?void 0:t.name]}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700",children:"Name:"}),(0,a.jsx)("span",{className:"text-gray-900",children:null==t?void 0:t.name})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700",children:"Email:"}),(0,a.jsx)("span",{className:"text-gray-900",children:null==t?void 0:t.email})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out",children:[(0,a.jsx)("span",{className:"font-semibold text-gray-700",children:"Mobile Number:"}),(0,a.jsx)("span",{className:"text-gray-900",children:null==t?void 0:t.mobile})]}),(0,a.jsxs)("button",{onClick:()=>{g(!0)},className:"text-blue-500 flex gap-4 font-bold hover:text-blue-700",children:[(0,a.jsx)(l.SG1,{className:"mt-1"})," Edit Profile"]})]})]}),(0,a.jsx)("div",{className:"min-h-screen bg-white flex px-4",children:(0,a.jsxs)("div",{className:"w-full bg-white rounded-lg shadow-lg p-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold text-center text-teal-600 mb-6",children:"Search & Download Certificate Data"}),(0,a.jsx)("input",{type:"text",placeholder:"Search by Lot No.",value:L,onChange:e=>P(e.target.value),className:"mb-4 p-2 border rounded w-full"}),(0,a.jsx)(d.N9,{}),V&&V.length>0?(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"min-w-full table-auto border-collapse bg-white",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Certificate Title"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Material Code"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Expiry Date"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Lot Number"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Verification Status"}),(0,a.jsx)("th",{className:"px-4 py-2 text-left text-sm font-bold text-gray-700 border-b",children:"Actions"})]})}),(0,a.jsx)("tbody",{children:V.map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-teal-50",children:[(0,a.jsxs)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:[t+1,".",e.certificateTitle]}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:e.materialCode}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:e.expiryDate}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:e.lotno}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:"True"===e.Verified?(0,a.jsx)("span",{className:"text-green-600 font-semibold",children:"Verified"}):(0,a.jsx)("span",{className:"text-red-600 font-semibold",children:"Pending"})}),(0,a.jsx)("td",{className:"px-4 py-2 text-sm text-gray-600 border-b uppercase",children:(0,a.jsx)("button",{onClick:()=>{u(e),p(!0)},className:"text-teal-600 uppercase hover:text-teal-800",children:"View PDF"})})]},t))})]})}):(0,a.jsx)("p",{className:"mt-4 text-center text-gray-600",children:"No matching certificates found"})]})}),b&&(0,a.jsx)("div",{className:"fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50",children:(0,a.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl",children:[(0,a.jsx)(l.yGN,{className:"absolute top-4 right-4 text-gray-600 cursor-pointer",onClick:()=>p(!1)}),(0,a.jsx)(n.A,{fileUrl:null==h?void 0:h.pdfURL})]})})]})}},4338:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[883,951,864,673,465,301,93,264,714,636,593,792],()=>t(8650)),_N_E=e.O()}]);