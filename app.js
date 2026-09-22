
const EUR=n=>n===null||n===undefined?"—":new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n);
async function getData(){const r=await fetch("/submission.json");if(!r.ok)throw new Error("submission.json failed");return r.json()}
function label(s){return s.replace(/([A-Z])/g," $1").replace(/^./,c=>c.toUpperCase())}
function badge(c){return `<span class="badge ${c}">${c}</span>`}
function moneyRows(o){return Object.entries(o).filter(([,v])=>typeof v==="number").map(([k,v])=>`<tr><td>${label(k)}</td><td class="money">${EUR(v)}</td></tr>`).join("")}
function effect(e){const a=[["Profit",e.profit],["Cash",e.cash],["Assets",e.assets],["Liabilities",e.liabilities],["Equity",e.equity]];return `<div class="effect-grid">${a.map(([k,v])=>`<div class="effect"><small>${k}</small><b>${EUR(v)}</b></div>`).join("")}</div>`}
window.DPI={EUR,getData,label,badge,moneyRows,effect}
