(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{3506:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/Admin/Certificates",function(){return t(5528)}])},5528:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var a=t(4848),s=t(6540),l=t(6665),d=t(9196),c=t(8869);let i=()=>{let[e,r]=(0,s.useState)([]),[t,i]=(0,s.useState)(null);(0,s.useRef)();let[o,n]=(0,s.useState)(!0),[x,b]=(0,s.useState)(!1),[p,h]=(0,s.useState)(null),[u,y]=(0,s.useState)(null),[g,m]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{let e=l.I.firestore();try{let t=(await e.collection("certificate").get()).docs.map(e=>({id:e.id,...e.data()}));r(t)}catch(e){console.error("Error fetching data: ",e)}finally{n(!1)}})()},[]);let f=[...new Set(e.map(e=>e.certificateCategory))],j=t?e.filter(e=>e.certificateCategory===t):e;return(0,a.jsxs)("div",{className:"p-6",children:[o?(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mb-5 flex flex-wrap gap-3",children:[(0,a.jsx)("button",{onClick:()=>i(null),className:"px-4 py-2 rounded-lg text-sm font-medium ".concat(null===t?"bg-blue-600 text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:"Show All"}),f.map(e=>(0,a.jsx)("button",{onClick:()=>i(e),className:"px-4 py-2 rounded-lg text-sm uppercase font-medium ".concat(t===e?"bg-blue-600 uppercase text-white":"bg-gray-200 text-gray-800 hover:bg-gray-300"),children:e},e))]}),(0,a.jsxs)("table",{className:"w-full border-collapse border border-gray-300",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"bg-gray-200",children:[(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Title"}),(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Material Code"}),(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Lot No."}),(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Mfg Date"}),(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Expiry Date"}),(0,a.jsx)("th",{className:"border border-gray-300 px-4 py-2",children:"Action"})]})}),(0,a.jsx)("tbody",{children:j.map(e=>(0,a.jsxs)("tr",{className:"border border-gray-300 text-center",children:[(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2 uppercase",children:e.certificateTitle}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2 uppercase",children:e.materialCode}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2 uppercase",children:e.lotno}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.mfgDate}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:e.expiryDate}),(0,a.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:(0,a.jsx)("button",{onClick:()=>{y(e),m(!0)},className:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700",children:"View PDF"})})]},e.id))})]})]}),g&&u&&(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg w-full h-[100vh] overflow-y-auto relative",children:[(0,a.jsx)("button",{onClick:()=>m(!1),className:"absolute top-4  right-4 text-red-500 font-bold hover:text-red-700",children:(0,a.jsx)(c.yGN,{size:32})}),(0,a.jsx)(d.A,{data:u})]})})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[883,951,864,673,465,301,264,714,636,593,792],()=>r(3506)),_N_E=e.O()}]);