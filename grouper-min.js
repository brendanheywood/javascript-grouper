function grouper(j,b,a){var n=-1,f="",o,k,i,m,g,e,l,h;if(!j){return""}g=b(j[0]);n=g.length;e=(n+1)/2;l=1;h=e;for(k=0;k<j.length;k++){o=j[k];g=b(o);if(m){h=0;for(i=0;i<=e;i++){if(m[i]===g[i]){h++}}}if(h>e){h=e}else{if(m&&h<l){f+=m.slice(n-l+1,n-h+1).join("");f+=g.slice(h-1,e).join("");h=e}else{f+=g.slice(l-1,h).join("")}}m=g;l=h}f+=g.slice(h,n).join("");return f};
