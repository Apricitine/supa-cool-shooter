eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([9fqzAC-EG-Z]|[\\da]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(f(S){q JSONP=(f(){q 8A=0,2W,3s,I,S=9;f 5m(1v){q 1Z=O.1P(\'1Z\'),5n=Q;1Z.2v=1v;1Z.async=17;1Z.8B=1Z.6D=f(){z(!5n&&(!9.5o||9.5o==="loaded"||9.5o==="complete")){5n=17;1Z.8B=1Z.6D=2X;z(1Z&&1Z.1Q){1Z.1Q.2m(1Z)}}};z(!2W){2W=O.3t(\'2W\')[0];z(!2W)2W=O.2f}2W.22(1Z)}f 2Y(1v,1R,1S){3s="?";1R=1R||{};J(I in 1R){z(1R.2n(I)){3s+=2Z(I)+"="+2Z(1R[I])+"&"}}q 2Y="5p"+(++8A);S[2Y]=f(T){1S(T);4A{3P S[2Y]}4B(e){}S[2Y]=2X};5m(1v+3s+"1S="+2Y);A 2Y}A{8C:2Y}}());q 3Q={6E:f(1v,1R,1S){z(9.6F()){9.5q[9.8D++]=1S;S.8E(6G.stringify({6H:"3R-6I",1v:1v,1k:"callApi",1R:1R}),"*");A}1R=1R||{};q 3s="?";J(I in 1R){z(1R.2n(I)){3s+=2Z(I)+"="+2Z(1R[I])+"&"}}q 31=E XMLHttpRequest();31.6D=f(){z(31.5o==4){1S(6G.8F(31.responseText))}}31.open("GET",1v+3s);31.withCredentials=17;31.setRequestHeader("Content-Type","application/5p");31.6J()},6F:f(){A!!O.8G("1A-has-been-initialized-6K-6K-6K")},5q:{},8D:0}z(3Q.6F()){S.3S("Y",f(e){q 4C;4A{4C=6G.8F(e.T)}4B(e){A}z(4C.6H==="3R-8H"&&4C.sanityCheck==="3R-8H-version1"){q Y=4C.payload;z(Y.1k==="response"){3Q.5q[Y.8I](Y.2f);3P 3Q.5q[Y.8I]}1b z(Y.1k==="V"){S.32.V()}}},Q)}f 23(){A S&&S.8J?S.8J:S}q 1d=f(2C){q 1K=f(){z(1K.$6L)A 9;z(1q 9.19==\'f\')A 9.19.2D(9,2g)};z(2C.2o){1K.4D=2C.2o;2C.2o.$6L=17;1K.1L=E 2C.2o;2C.2o.$6L=Q}J(q I in 2C)z(2C.2n(I))1K.1L[I]=2C[I];A 1K};z(1q 33!=\'2p\')33.1d=1d;q U=E 1d({19:f(x,y){z(1q x==\'8K\'){9.x=x.x;9.y=x.y}1b{9.x=x;9.y=y}},cp:f(){A E U(9.x,9.y)},5r:f(2h){9.x*=2h;9.y*=2h;A 9},3T:f(2h){A E U(9.x*2h,9.y*2h)},4E:f(2h){9.x/=2h;9.y/=2h;A 9},divNew:f(2h){A E U(9.x/2h,9.y/2h)},1E:f(1i){9.x+=1i.x;9.y+=1i.y;A 9},addNew:f(1i){A E U(9.x+1i.x,9.y+1i.y)},4F:f(1i){9.x-=1i.x;9.y-=1i.y;A 9},5s:f(1i){A E U(9.x-1i.x,9.y-1i.y)},1U:f(P){q x=9.x,y=9.y;9.x=x*Z.6M(P)-Z.5t(P)*y;9.y=x*Z.5t(P)+Z.6M(P)*y;A 9},rotateNew:f(P){A 9.cp().1U(P)},24:f(P){q l=9.1x();9.x=Z.6M(P)*l;9.y=Z.5t(P)*l;A 9},setAngleNew:f(P){A 9.cp().24(P)},4G:f(1l){q l=9.1x();z(l)9.5r(1l/l);1b 9.x=9.y=1l;A 9},setLengthNew:f(1l){A 9.cp().4G(1l)},6N:f(){q l=9.1x();z(l==0)A 9;9.x/=l;9.y/=l;A 9},normalizeNew:f(){A 9.cp().6N()},P:f(){A Z.atan2(9.y,9.x)},collidesWith:f(G){A 9.x>G.x&&9.y>G.y&&9.x<G.x+G.K&&9.y<G.y+G.M},1x:f(){q l=Z.8L(9.x*9.x+9.y*9.y);z(l<0.8M&&l>-0.8M)A 0;A l},is:f(5u){A 1q 5u==\'8K\'&&9.x==5u.x&&9.y==5u.y},3U:f(v2){A 9.x*v2.x+9.y*v2.y},inTriangle:f(a,b,c){q v0=c.5s(a);q v1=b.5s(a);q v2=p.5s(a);q 6P=v0.3U(v0);q 4J=v0.3U(v1);q 6Q=v0.3U(v2);q 6R=v1.3U(v1);q 6S=v1.3U(v2);q 6T=1/(6P*6R-4J*4J);q u=(6R*6Q-4J*6S)*6T;q v=(6P*6S-4J*6Q)*6T;A(u>0)&&(v>0)&&(u+v<1)},distanceFrom:f(1i){A Z.8L(Z.8N((9.x-1i.x),2),Z.8N(9.y-1i.y,2))},8O:f(){A\'[U(\'+9.x+\', \'+9.y+\') P: \'+9.P()+\', 1l: \'+9.1x()+\']\'}});z(1q 33!=\'2p\')33.U=U;q 2E=E 1d({19:f(x,y,w,h){9.D=E U(x,y);9.L={K:w,M:h}},8P:f(4K){A 4K.x>9.8Q()&&4K.x<9.6U()&&4K.y>9.8R()&&4K.y<9.6V()},setLeft:f(1e){9.D.x=1e+9.L.K/2},setTop:f(1r){9.D.y=1r+9.L.M/2},8Q:f(){A 9.D.x-9.L.K/2},8R:f(){A 9.D.y-9.L.M/2},6U:f(){A 9.D.x+9.L.K/2},6V:f(){A 9.D.y+9.L.M/2},cp:f(){A E 2E(9.D.x,9.D.y,9.L.K,9.L.M)}});z(1q 33!=\'2p\')33.2E=2E;q Fx=E 1d({19:f(){9.6W=[];9.1M={};9.4L={}},5w:f(3W){9.6W.1n(3W)},1E:f(I,1j){1j=1j||{};1j.34=1j.34||2F;1j.3u=1j.3u||4M.8S;1j.5x=1q 1j.5x==\'2p\'?Q:1j.5x;z(!1j.1M){q 35=1j.35||0;q 3X=1q 1j.3X==\'2p\'?1:1j.3X;1j.1M=[[35,3X]]}9.1M[I]=1j},12:f(26){26=1q 26===\'8T\'?26:1s();J(q I in 9.1M)z(9.1M.2n(I)){z(!9.4L[I]){9.6X(I,26);6Y}q 1B=9.1M[I];q N=26-9.4L[I].8U;z(N>1B.34){9.8V(1B,I);6Y}q 2G=1B.3u(N/1B.34);q 6Z=[];J(q i=0,t;t=1B.1M[i];i++){q x=2G*(t[1]-t[0])+t[0];6Z.1n(x)}9.5y(I,6Z,2G)}},6X:f(I,26){9.4L[I]={8U:26};q 36=[];J(q i=0,1B;1B=9.1M[I].1M[i];i++)36.1n(1B[0]);9.5y(I,36,0)},8V:f(1B,I){q 36=[];J(q i=0,t;t=1B.1M[i];i++)36.1n(t[1]);9.5y(I,36,1);z(!1B.5x){3P 9.4L[I];3P 9.1M[I];A}9.6X(I,1s())},5y:f(I,36,2G){J(q i=0,3W;3W=9.6W[i];i++)3W.5z.3Y(3W,I,36,2G)}});q 4M={8S:f(x){A x},70:f(x){A x*x},8W:f(x){A x*x*x},Shake:f(x){A Z.5t(x)}};q 1f={8X:60,4N:Q,boids:{flockRadius:400,L:2q},2H:f(){A"5A://3R.4O/"+71.1L.slice.3Y(2g).72("")},8Y:(1q O.1P(\'1y\').73!==\'2p\'),74:\'5B\'};S.1f=1f;z(!71.1L.3Z){71.1L.3Z=f(8Z){z(9===void 0||9===2X)90 E TypeError();q t=Object(9);q 1x=t.1l>>>0;z(1x===0)A-1;q n=0;z(2g.1l>0){n=Number(2g[1]);z(n!==n)n=0;1b z(n!==0&&n!==(1/0)&&n!==-(1/0))n=(n>0||-1)*Z.91(Z.92(n))}z(n>=1x)A-1;q k=n>=0?n:Z.2i(1x-Z.92(n),0);J(;k<1x;k++){z(k in t&&t[k]===8Z)A k}A-1}}f 1s(){A(E Date()).getTime()}f 1t(5C,3v){A f(){A 3v.2D(5C,2g)}}f 93(3a,3v,76){z(1q 3a.94==\'f\'){3a.94(3v,76);A 3a}J(q I in 3a)z(3a.2n(I))3v.3Y(76||S,3a[I],I);A 3a}f 2r(X,1k,fn){z(X.3S)X.3S(1k,fn,Q);1b z(X.95){X["e"+1k+fn]=fn;X[1k+fn]=f(){A X["e"+1k+fn](S.3w)};X.95("on"+1k,X[1k+fn])}}f 5D(X,1k,fn){z(X.77)X.77(1k,fn,Q);1b z(X.97){X.97("on"+1k,X[1k+fn]);X[1k+fn]=2X;X["e"+1k+fn]=2X}}f 3x(e){z(e.5E)e.5E();z(e.5F)e.5F();e.98=Q}f 99(78,79){z(H.9a)A 78.9a(79);A!!(78.compareDocumentPosition(79)&16)};f 7a(2I){q 7b={38:\'up\',40:\'7c\',37:\'1e\',39:\'1w\',27:\'5G\'};z(7b[2I])A 7b[2I];A String.fromCharCode(2I)};f 28(3b,2i){A Z.91(Z.28()*(2i-3b+1)+3b)};f 4Q(H){z(1q H.9b===\'f\'){q G=H.9b();q sx=S.9d;q sy=S.9f;A{K:G.K,M:G.M,1e:G.1e+sx,1r:G.1r+sy}}q G={K:H.4R,M:H.5H,1e:0,1r:0};q el=H;while(el){G.1e+=el.7d;G.1r+=el.9g;el=el.offsetParent}A G}f 9h(){q 2w=O;A(!2w.7e||2w.7e==\'CSS1Compat\')?2w.41:2w.2f}f 9i(){q 2w=9h();q 3b={x:2w.7f,y:2w.5I};q 2f=O.2f;A{x:Z.2i(2w.9j,2f.9j,3b.x),y:Z.2i(2w.9k,2f.9k,3b.y)}}f getStyle(H,4S){z(H.18[4S])A H.18[4S];z(H.9l)A H.9l[4S];A O.7g.7h(H,2X).getPropertyValue(4S)}f 3y(H,1j){J(q I in 1j)z(1j.2n(I)){q 4T=1j[I];z(1q 4T==="8T"&&I!=="3z"&&I!=="5J")4T=4T+\'px\';H.18[I]=4T}};f 42(2J,3c){A 2J.29.7i(E 9m(\'(\\\\s|^)\'+3c+\'(\\\\s|$)\'))}f 43(2J,3c){z(!42(2J,3c))2J.29+=" "+3c}f 4U(2J,3c){z(42(2J,3c)){q 9n=E 9m(\'(\\\\s|^)\'+3c+\'(\\\\s|$)\');2J.29=2J.29.5K(9n,\' \')}}f 7j(H){A H.cloneNode(17)}f 7k(9o,1j){q el=O.1P(9o);J(q I in 1j)z(1j.2n(I)){z(I===\'44\'){3y(el,1j[I])}1b{el[I]=1j[I]}}A el}q 7l=(f(){A S.requestAnimationFrame||S.webkitRequestAnimationFrame||S.mozRequestAnimationFrame||S.oRequestAnimationFrame||S.msRequestAnimationFrame||f(1S,H){S.45(1S,46/60)}})();f 4V(d,3v,5C){A 45(1t(5C,3v),d)}q 4W=E 1d({19:f(5L){z(5L&&5L.1F){9.1F=5L.1F}9.3d=[];9.3A=[];9.5M=2K[1].3e;9.1V=E U(0,0);9.7m=E U(0,0);9.1N={K:0,M:0};9.7n();9.3f=E 9p(9);9.3f.4X();9.48=E 9q(9);9.ui=E 9r(9);9.7o=E 9s(9);9.1O=E 9t(9);9.1O.9u();z(1q 7p!=="2p"){9.1C=E 7p(9)}9.5N=E 9v(9);9.3B=1s();9.5O={};9.4Y=1t(9,9.5P);9.7q=1t(9,9.5Q);9.7r=10;z(9.3g()){9.49={1D:E 7s(1f.2H("9w/9x/C/1D"),["7t","5R"]),5S:E 7s(1f.2H("9w/9x/C/5S"),["7t","5R"])}}1b{9.49={}}z(S.9y&&S.9y==="7u"){1f.74="7u"}2r(O,\'5P\',9.4Y);2r(O,\'5Q\',9.7q);2r(O,\'9z\',9.4Y)},7v:f(){9.7w();9.5N.2L=17;z(!1f.4N){9.9A=S.setInterval(1t(9,9.5T),46/1f.8X)}z(1f.4N){7l(1t(9,9.5T))}},5P:f(e){q c=7a(e.9B);9.5O[c]=17;5U(c){1W\'1e\':1W\'1w\':1W\'up\':1W\'7c\':1W\'5G\':1W\' \':3x(e);5V}5U(c){1W\'5G\':9.V();5V}},5Q:f(e){q c=7a(e.9B);9.5O[c]=Q;5U(c){1W\'1e\':1W\'1w\':1W\'up\':1W\'7c\':1W\'5G\':1W\' \':z(e.5E){e.5E()}z(e.5F){e.5F()}e.98=Q;5V}},5T:f(){q 7x=1s();q N=(7x-9.3B)/46;9.7n();J(q i=0,1a;1a=9.3d[i];i++){1a.12(N)}9.3f.12(N);9.7o.12(N);9.48.12(N);9.ui.12(N);z(9.1C){9.1C.12(N)}9.5N.12(N);9.3B=7x;z(1f.4N){7l(1t(9,9.5T))}},7w:f(){q T=Q;q 1z=9C.9D;z(S.5W&&S.5W.2j){1z=5W}z(9.1F&&9.1F.7y()){1z=9.1F.7y()}q 1a=E 9E(9);1a.7z(1z);9.3d.1n(1a);9.48.5X(1a.D)},4a:f(el){z(!el){90 E Error("Can\'t register unexisting H.");}9.3A.1n(el)},4b:f(el){9.3A.4Z(9.3A.3Z(el),1)},isKickAssElement:f(el){J(q i=0,H;H=9.3A[i];i++){z(el===H||99(H,el)){A 17}}A Q},2M:f(I){A!!9.5O[I]},7n:f(){q 9F=(!!S.ActiveXObject)&&O.7e=="BackCompat";9.1N={K:O.41.7f,M:O.41.5I};z(9F){9.1N.K=O.2f.7f;9.1N.M=O.2f.5I}z(9.1O&&9.1O.9G()){9.1N.M-=9.1O.9H()}9.1V.x=S.9d||O.41.9I;9.1V.y=S.9f||O.41.scrollTop;9.7m=9i()},9J:f(){J(q i=0,el;el=9.3A[i];i++){el.18.51=\'3h\'}},9K:f(){J(q i=0,el;el=9.3A[i];i++){el.18.51=\'visible\'}},9L:f(1z,2a){z(!2a){9.ui.3i("7A\'re 1s flying<br /><em>"+1z.2I+"<em>!!")}J(q i=0,1a;1a=9.3d[i];i++){1a.7z(1z)}},4c:f(2b,2a){9.5M=2b.3e;z(!2a){9.ui.3i("Changed to "+2b.2I.9N()+"!!!!")}J(q i=0,1a;1a=9.3d[i];i++){1a.9O(2b.3e)}},9P:f(id,2a){z(2K[id]){9.4c(2K[id],2a)}},flyOutPlayers:f(x,y){J(q i=0,1a;1a=9.3d[i];i++){1a.7B(x,-1a.L.M);1a.5Y=Q}},flyInPlayers:f(){J(q i=0,1a;1a=9.3d[i];i++){1a.7B(1a.D.x,2q,f(){9.5Y=17})}},9Q:f(5Z){9.ui.3i("OMG. 7A leveled up to: <9R>"+5Z+\'</9R>!<br /><9S>Be sure to check what cool E stuff you 8C in the 2k.</9S>\')},9T:f(){9.7o.7C()},V:f(){5D(O,\'5P\',9.4Y);5D(O,\'9z\',9.4Y);5D(O,\'5Q\',9.7q);J(q i=0,1a;1a=9.3d[i];i++){1a.V()}9.3f.V();9.48.V();9.1O.V();z(!1f.4N){clearInterval(9.9A)}23().32=Q;z(9.3g()){O.52.reload()}},3g:f(){A 23().IS_CLOUDFLARE_GAME},9U:f(){A!!23().7D},shouldShowAd:f(){A!9.1F&&!9.3g()},4d:f(){A!9.1F&&!9.3g()},9V:f(){A 9.1F||9.3g()}});S.4W=4W;q 7p=E 1d({19:f(C){9.C=C;9.T={};9.T.startedPlaying=1s();9.T.9W=0;9.T.9X=0;9.T.9Y=0;9.T.9Z=0;9.T.61=0;9.3B=0},61:f(){9.T.61=1},a0:f(px){9.T.9Y+=px},a1:f(2j){9.T.9Z+=2j},7E:f(){9.T.9X++;z(9.C.49.5S){9.C.49.5S.4e()}},a2:f(){9.T.9W++},12:f(N){9.3B+=N;z(9.3B>0.25){9.7F();9.3B=0}},7F:f(){q 53=[];J(q I in 9.T)z(9.T.2n(I)){53.1n(I+\':\'+9.T[I])}9.C.1O.62("stats:!"+53.72(\'|\'))}});q a3=E 1d({19:f(I){9.I=I},5m:f(1S){3Q.6E(1f.2H(\'mysite/api.5p\'),{site_key:9.I,1v:O.52.8O()},1t(9,f(T){z(T&&T.a4){9.3D=T.a4;1S(17)}1b{1S(Q)}}))},install:f(){},getShipId:f(){A 9.3D&&9.3D.7G.1z},7y:f(){A 9.3D&&9.3D.7G.ship_config},7H:f(){A 9.3D&&9.3D.7G.share_url}});q a5=E 1d({19:f(C){9.C=C;9.L={M:63}},a6:f(4D){9.1c=O.1P(\'4E\');9.1c.29=\'2c\';9.1c.id=\'1A-profile-2k\';4D.22(9.1c);q 2N=23().KICKASSSHIPID||"";9.1v=1f.2H(\'intermediate_postmessage.7I?1v=\'+2Z(23().a7||O.52.4f)+"&64="+2Z(O.52.4f)+"&preship="+(2N)+"&is_campaign="+(9.C.3g()?"17":"")+"&is_mysite="+(9.C.9U()?"17":""));9.7J=Q;9.3j=O.1P("3E");9.3j.7K=\'0\';9.3j.29=\'2c\';9.3j.K=\'2q%\';9.3j.M=9.L.M+\'px\';9.1c.22(9.3j);9.65="5A://3R.4O/".5K(/\\/$/,"");9.3j.2v=9.1v;9.7L=1t(9,f(3w){z(3w.64!==9.65&&3w.64!==9.65.5K("http://","5A://")){console.log("ignoring 3w 6H",3w.64);A}q Y=3w.T;z(Y==="ready"){9.54();A}q t=Y.66(\':!\');z(t.1l!==2){A}q 1k=t.a8().5K(/^./g,f(7i){A 7i.charAt(0).9N()});z(1q 9[\'a9\'+1k]==="f"){9[\'a9\'+1k](t.72(":!"))}});S.3S("Y",9.7L,Q);9.C.4a(9.1c)},67:f(Y){9.3j.contentWindow.8E(Y,9.65)},54:f(){9.7J=17;9.C.4a(9.1c.3t(\'3E\')[0]);9.67("1v:!"+(23().a7||O.52.4f));z(9.C.1C){9.C.1C.7F()}9.C.1O.54()},aa:f(Y){z(!9.7J){A}z(Y!=9.ab){4A{9.67(Y)}4B(e){}9.ab=Y}},messageTypeChangeShip:f(2O){2O=2O.66(",");q 2N=2O[0];q 7M=2O[1];q 2a=2O[2]===\'initial\';z(9.2N===2N){A}z(2a&&23().5W){A}9.2N=2N;3Q.6E(1f.2H(\'designer/1z/\'+2N+\'/construction.5p\'),{ship_id:2N,is_initial:2a?\'1\':\'0\'},1t(9,f(T){9.C.9L(T.T,2a);4A{S.focus()}4B(e){}}));z(!2a){9.4D.7N()}},messageTypeChangeWeapon:f(7M,2a){9.C.9P(7M,2a)},messageTypeSetMultiplier:f(4g){4g=parseInt(4g,10);z(isNaN(4g)||!4g){A}9.C.7r=4g},messageTypeNewRank:f(5Z){9.C.9Q(5Z)},messageTypePlayerMessage:f(Y){9.C.ui.3i(Y)},V:f(){9.C.4b(9.1c);9.C.4b(9.3E);S.77("Y",9.7L,Q);9.1c.1Q.2m(9.1c)}});q 9t=E 1d({19:f(C){9.C=C;9.7O=0;z(!23().KICKASS_INLINE_CSS){9.ac(1f.2H(\'55/menustyles.55\'))}},ad:f(){J(q id in 2K)z(2K.2n(id)){9.ae(2K[id],id)}9.7P()},9u:f(){9.1c=O.1P(\'4E\');9.1c.29=\'2c 2P \'+(9.C.4d()?"":"KICKASSNOMENU");9.1c.id=\'1A-2k\';z(9.C.4d()){9.1c.18.4h=\'-250px\';9.1c.18.68=\'56\'}1b{4U(9.1c,"2P")}4i().22(9.1c);q 3k=9.1c.3t(\'*\');J(q i=0;i<3k.1l;i++){9.C.4a(3k[i])}9.C.4a(9.1c);z(9.C.4d()){9.2k=E a5(9.C);9.2k.4D=9;9.2k.a6(9.1c)}1b{45(f(){9.54()}.1t(9),2q)}2r(9.submitScoreLink,\'3F\',1t(9,f(e){3x(e);9.57(\'af\')}));2r(9.menuLink,\'3F\',1t(9,f(e){3x(e);9.7Q();9.57(\'main\',17)}));2r(9.switchShipLink,\'3F\',1t(9,f(e){3x(e);9.57(\'ships\')}));2r(9.7R,\'3F\',1t(9,f(e){3x(e);9.C.9T()}));2r(9.pointsTabWrapper,\'3F\',1t(9,9.7Q));2r(9.3G,\'3F\',1t(9,9.ag));9.ad()},getShareHTML:f(){z(1q 23().7S!=="2p"){z(23().7S){q 1v=2Z(23().7S);A\'<3E 7T="2c 1A-58" 2v="//7U.7V.4O/ah/share_button.ai?4f=\'+1v+\'&1G;6J=Q&1G;aj=button&1G;K=47&1G;ak=Q&1G;al=58&1G;am=an&1G;69=ao&1G;M=21" ap="no" 7K="0" 18="ar:56; 6a:3h; K:as; M:at;" au="17"></3E>\'}1b{A\'\'}}1b{q 1v=\'5A://7U.7V.4O/3R\';z(9.C.1F){z(9.C.1F.7H()){1v=9.C.1F.7H()}1b{A""}}A\'<3E 7T="2c 1A-58" 2v="//7U.7V.4O/ah/58.ai?4f=\'+2Z(1v)+\'&1G;6J=Q&1G;aj=button_count&1G;K=47&1G;ak=Q&1G;al=58&1G;am=an&1G;69=ao&1G;M=21" ap="no" 7K="0" 18="ar:56; 6a:3h; K:as; M:at;" au="17"></3E>\'}},54:f(){9.1c.18.68=\'block\';z(9.C.9V()){45(1t(9,f(){4U(9.av,"1A-aw-ax")}),10);45(1t(9,f(){43(9.av,"1A-aw-ax")}),ay)}},57:f(6I,az){z(!az){9.4j()}z(9.2k){9.2k.67(\'navigate:!\'+6I)}},7Q:f(){z(9.C.4d()){z(42(9.1c,\'2P\')){9.4j()}1b{9.7N()}}1b{9.4j()}},ag:f(){z(42(9.3G,\'2P\')){9.aA()}1b{9.aB()}},aB:f(){9.3G.18.K=\'\';43(9.3G,\'2P\')},aA:f(){q 4k=9.3G.3t(\'li\');4k=4k[4k.1l-1];9.3G.18.K=(4k.7d+4k.4R-47)+\'px\';4U(9.3G,\'2P\')},4j:f(){z(9.C.4d()){9.1c.18.4h=\'\';4U(9.1c,\'2P\')}},7N:f(){9.1c.18.4h=\'\';43(9.1c,\'2P\')},aC:f(){9.7R.18.K=""},7P:f(){9.7R.18.K="0px"},9H:f(){A 9.1c.5I},9G:f(){A!42(9.1c,\'2P\')},aD:f(aE,D){q 2j=aE*9.C.7r;9.7O+=2j;9.2j.3H=9.7O;z(9.C.1C){9.C.1C.a1(2j)}9.C.ui.aF(D,2j)},ac:f(aG){q 4l=O.1P(\'4l\');4l.rel=\'stylesheet\';4l.1k=\'text/55\';4l.4f=aG;(O.2W||O.2f).22(4l)},62:f(53){z(9.2k){9.2k.aa(53)}},ae:f(2b,id){q li=O.1P(\'li\');li.29=\'2c 1A-2b-item\';li.2b=2b;li.18.backgroundImage=\'1v(\'+1f.2H(\'55/aH/1A/weap-\'+2b.id+\'.aI\')+\')\';li.3H=\'<7W 7T="2c">\'+2b.2I+\'</7W>\';9.weaponsList.22(li);2r(li,\'3F\',1t(9,f(e){3x(e);9.4c(2b);9.62("4c:!"+id)}))},4c:f(2b){9.C.4c(2b)},V:f(){q 3k=9.1c.3t(\'*\');J(q i=0;i<3k.1l;i++){9.C.4b(3k[i])}9.C.4b(9.1c);z(9.2k){9.2k.V()}9.1c.1Q.2m(9.1c)}});q 9r=E 1d({19:f(C){9.7X=0;9.C=C;9.59={};9.2s={};9.fx=E Fx();9.fx.5w(9)},12:f(N){9.fx.12()},5z:f(I,2R,2G){q 1k=I.66(\'-\')[0];q id=I.66(\'-\')[1];z(9.59[id]){q 2e=9.59[id];2e.18.1r=2R[0]+\'px\';2e.18.3z=2R[1];z(2G==1&&2e.1Q){2e.1Q.2m(2e);3P 9.59[id]}}1b z(9.2s[id]&&1k==\'aJ\'){q Y=9.2s[id];Y.18.1r=2R[0]+\'px\';z(2G==1){45(1t(9,f(){9.fx.1E(\'aK-\'+id,{1M:[[2R[0],-2q]],3u:4M.70,34:63})}),Y.4m||ay)}}1b z(9.2s[id]&&1k==\'aK\'){q Y=9.2s[id];Y.18.1r=2R[0]+\'px\';z(2G==1){Y.1Q.2m(Y);3P 9.2s[id]}}},aF:f(D,2j){q id=\'2e\'+(9.7X++);q y=9.C.1V.y+D.y;q 2e=7k(\'7W\',{3H:2j,29:\'2c\',44:{6b:\'7Y\',69:"aL aM",aN:"aO",3z:"1",3l:"5B",textShadow:"#aP 7Z 7Z 3px",1r:y,5J:"aQ"}});2e.18.1e=D.x-2e.4R/2+\'px\';4i().22(2e);9.59[id]=2e;9.fx.1E(\'2e-\'+id,{1M:[[y,y-15],[1,0]]})},3i:f(7I,4m){4m=4m||Q;q K=63;q id=9.7X++;q Y=7k(\'4E\',{3H:7I,29:\'2c\',id:\'1A-Y-\'+id,44:{6b:\'fixed\',1r:-2q,1e:\'50%\',marginLeft:-K/2,K:K,background:\'#222\',3z:0.8,padding:\'10px\',3l:\'#aP\',textAlign:\'80\',borderRadius:15,69:\'aL aM\',aN:\'aO\',5J:"aQ"}});Y.4m=4m;4i().22(Y);q to=9.aR();Y.aS=to;9.fx.1E(\'aJ-\'+id,{34:63,1M:[[-2q,to]],3u:4M.70});9.2s[id]=Y;A Y},aR:f(){q 1r=2q;J(q id in 9.2s)z(9.2s.2n(id))1r=Z.2i(9.2s[id].aS+9.2s[id].5H+10,1r);A 1r}});q 7s=E 1d({19:f(2v,6c){9.2v=2v;9.6c=6c;4n=8;9.81=(1q O.1P(\'3I\').4e)!=\'2p\';z(9.81){9.aT=4n;9.4n=[];J(q i=0;i<9.aT;i++){9.4n.1n({2L:Q,H:9.aU(9.aV())})}}},aV:f(){q aW={"5R":"3I/5R","7t":"3I/mpeg"}q 3I=O.1P("3I");J(q i=0,6d;6d=9.6c[i];i++){q 5a=O.1P("5a");5a.2v=9.2v+"."+6d;5a.1k=aW[6d];3I.22(5a)}A 3I},aU:f(el){z(1q el.3S==\'2p\')A el;q 82=9;el.3S(\'ended\',f(e){82.aX(el)},Q);A el},aX:f(aY){J(q i=0,2y;2y=9.4n[i];i++){z(2y.H===aY){2y.2L=Q}}},4e:f(){z(!9.81)A;J(q i=0,2y;2y=9.4n[i];i++){z(!2y.2L){2y.2L=17;z(1q 2y.H.4e==\'f\')2y.H.4e();A}}}});q 9C={9D:{2j:[[-10,10],[0,-15],[10,10]],2S:[{s:{w:20,h:7},p:{x:0,y:14},a:0}],2t:[{p:{x:0,y:-15},a:0}]}};q aZ=0;q 9E=E 1d({19:f(C){9.id=aZ++;9.C=C;9.1B=Q;9.5Y=17;9.D=E U(6e,6e);9.1X=E U(0,0);9.5b=E U(0,0);9.1m=E U(0,1);9.2T=0;9.4o=Q;9.2z=[];9.83=0;9.b0=0.8;9.84=6f;9.85=E U(0,0)},7z:f(1z){9.1z=1z;9.1o=[];J(q i=0,1H;1H=9.1z.2j[i];i++)9.1o.1n(E U(1H[0],1H[1]));9.1o.1n(9.1o[0]);9.2S=[];9.2t=[];9.b1(9.1z.2S);9.b2(9.1z.2t);9.L=9.b3();9.86=9.b4();z(9.W){9.W.V()}9.W=E 4p(E 2E(2q,2q,9.86.x,9.86.y));9.87=17},9O:f(3e){q 88=[];J(q i=0,1p;1p=9.2t[i];i++){q b5=E 3e(9,9.C,1p.D.x,1p.D.y,1p.P);88.1n(b5);1p.V()}9.2t=88},b1:f(2S){J(q i=0,T;T=2S[i];i++){q 2U=E b6(T);9.2S.1n(2U)}},b2:f(2t){J(q i=0,T;T=2t[i];i++){q 5M=89[T.m]||89.1p;q 1p=E 5M.3e(9,9.C,T.p.x,T.p.y,T.a);1p.1a=9;1p.C=9.C;9.2t.1n(1p)}},12:f(N){z(9.4o){z(!9.2z.1l){J(q i=0;i<(9.1o.1l-1);i++)9.2z[i]={D:E U(0,0),1m:(E U(1,1)).24(Z.PI*2*Z.28())}}J(q i=0;i<9.2z.1l;i++){9.2z[i].D.1E(9.2z[i].1m.cp().4G(50).5r(N))}9.W.3J();9.W.24(9.1m.P());9.W.4q(9.D);9.W.b7(9.1o,9.2z);z(1s()-9.83>46.0){9.4o=Q;9.2z=[];9.b8()}A}z(!9.1B){z(9.C.2M(\'1e\')||9.C.2M(\'1w\')){z(9.C.2M(\'1e\'))9.b9(N);z(9.C.2M(\'1w\'))9.ba(N)}1b{9.bb()}z(9.C.2M(\'up\'))9.bc();1b 9.bd()}z(9.C.2M(\' \')){9.8a=17;z(!9.4o)9.4r()}1b z(9.8a){9.8a=Q;9.6g()}z(9.2T)9.1m.24(9.1m.P()+9.2T*N);q be=9.5b.3T(N).4F(9.1X.3T(N*9.b0));9.1X.1E(be);z(9.1X.1x()>9.84)9.1X.4G(9.84);q 8b=9.1X.3T(N);9.D.1E(8b);z(9.C.1C){9.C.1C.a0(8b.1x())}q 8c=!9.5b.is({x:0,y:0});J(q i=0,2U;2U=9.2S[i];i++){2U.bf(8c);2U.12(N)}z(9.5Y)9.3n();z(!9.85.is(9.D)||9.2T||9.87){9.87=Q;9.W.3J();9.W.24(9.1m.P()+Z.PI/2);9.W.4q(9.D);z(8c){J(q i=0,2U;2U=9.2S[i];i++)2U.bg(9.W)}9.W.bh(9.1o);9.85=9.D.cp()}J(q i=0,1p;1p=9.2t[i];i++){1p.12(N)}},b8:f(){q w=9.C.1N.K;q h=9.C.1N.M;9.D=E U(28(0,w),28(0,h))},3n:f(){z(9.1B)A;q w=9.C.1N.K;q h=9.C.1N.M;q 4s=9.D.x+9.W.G.L.K/2;q 4t=9.D.y+9.W.G.L.M/2;z(4s>w){S.6h(9.C.1V.x+50,9.C.1V.y);9.D.x=0}1b z(9.D.x<0){S.6h(9.C.1V.x-50,9.C.1V.y);9.D.x=w-9.W.G.L.K/2}z(4t>h){S.6h(9.C.1V.x,9.C.1V.y+h*0.75);9.D.y=0}1b z(9.D.y<0){S.6h(9.C.1V.x,9.C.1V.y-h*0.75);9.D.y=h-9.W.G.L.M/2}},inRect:f(G){q 1K=Q;J(q i=0,1H;1H=9.1o[i];i++){z(G.8P(E U(1H.x+9.D.x,1H.y+9.D.y)))1K=17}A 1K},3o:f(by){z(9.4o)A;9.4o=17;9.83=1s()},bc:f(){z(9.C.1C){9.C.1C.61()}9.5b=(E U(2F,0)).24(9.1m.P())},bd:f(){9.5b=E U(0,0)},b9:f(N){9.2T=Z.2i(-Z.PI*2,9.2T-Z.PI*10*N)},ba:f(N){9.2T=Z.3b(Z.PI*2,9.2T+Z.PI*10*N)},bb:f(){9.2T=0},b3:f(){q 3K=0;J(q i=0,1H;1H=9.1o[i];i++)3K=Z.2i(3K,(E U(1H)).1x());J(q i=0,X;X=9.2S[i];i++){q p1=(E U(X.D.x-X.L.K/2,X.D.y-X.L.M/2)).1U(X.P);q p2=(E U(X.D.x+X.L.K/2,X.D.y-X.L.M/2)).1U(X.P);q p3=(E U(X.D.x-X.L.K/2,X.D.y+X.L.M/2)).1U(X.P);q p4=(E U(X.D.x+X.L.K/2,X.D.y+X.L.M/2)).1U(X.P);3K=Z.2i(3K,p1.1x(),p2.1x(),p3.1x(),p4.1x())}A{K:3K*2,M:3K*2}},b4:f(){A{x:Z.2i(9.L.K,9.L.M)*1,y:Z.2i(9.L.M,9.L.K)*1}},4r:f(){J(q i=0,1p;1p=9.2t[i];i++)1p.4r()},6g:f(){J(q i=0,1p;1p=9.2t[i];i++)1p.6g()},7B:f(x,y,1S){9.1B={35:{D:9.D.cp(),1m:9.1m.cp()},to:E U(x,y),1S:1S||f(){}};9.1B.26=9.getTimeforTween()},V:f(){9.W.V()}});q b6=E 1d({19:f(T,1z){9.D=E U(T.p);9.L={K:T.s.w,M:T.s.h};9.P=T.a||0;9.1z=1z;9.4u=Q;9.4v=1;9.fx=E Fx();9.fx.5w(9);9.1I={r:[],y:[]};9.8d=0;9.6i()},12:f(N){9.fx.12();z(1s()-9.8d>46/60)9.6i()},5z:f(I,2R){5U(I){1W\'1I\':9.4v=2R;5V}},bf:f(4u){z(!9.4u&&4u){9.4v=0.0;9.6i();9.fx.1E(\'1I\',{35:9.4v,3X:1,34:6j,3u:4M.8W})}9.4u=4u},bg:f(W){W.bm(9.1I,9.P)},6i:f(){q 8e=9.L.K,bn=9.L.K*0.05,6k=9.L.K*0.8,bo=6k*0.1,6l=8e/2,6m=6k/2,offsetY=-9.L.M/2,metaY=0;q px=9.D.x;q py=9.D.y-9.L.M/2;f 1i(x,y){A E U(x,y)}9.1I.r=[1i(-6l+px,py)];9.1I.y=[1i(-6m+px,py)];9.1I.82=9;J(q x=0;x<8e;x+=bn)9.1I.r.1n(1i(x-6l+px,9.4v*28(9.L.M*0.7,9.L.M)+py));9.1I.r.1n(1i(6l+px,py));J(q x=0;x<6k;x+=bo)9.1I.y.1n(1i(x-6m+px,9.4v*28(9.L.M*0.4,9.L.M*0.7)+py));9.1I.y.1n(1i(6m+px,py));9.8d=1s();q D=1i(px,py);J(q i=0,p;p=9.1I.r[i];i++)p.4F(D).1U(9.P).1E(D);J(q i=0,p;p=9.1I.y[i];i++)p.4F(D).1U(9.P).1E(D)}});q 9s=E 1d({19:f(C){9.C=C;9.6n=30;9.3q=9.6n},12:f(N){z(9.C.2M(\'F\')&&9.bp()){9.7C()}z(9.3q===-1||!9.C.5N.2L){A}9.3q-=N;z(9.3q<0){9.C.1O.aC();9.3q=-1;9.C.ui.3i("BOMB IS READY<br />(lower 1w corner or F)")}},7C:f(){q Y=9.C.ui.3i("3...",5000);4V(46,f(){Y.3H="2..."},9);4V(6f,f(){Y.3H="1..."},9);4V(bq,f(){Y.3H="boom"},9);4V(bq,9.bs,9);9.3q=9.6n},bs:f(){9.C.3f.4X();q bt=9.C.3f.3L;J(q i=0,el;(el=bt[i])&&i<10;i++){q G=4Q(el);q 80=E U(G.1e+G.K/2,G.1r+G.M/2);9.C.48.5X(80,el,bu);el.1Q.2m(el)}9.C.1O.7P();9.3q=9.6n},bp:f(){A 9.3q===-1}});q 8f=[\'BR\',\'SCRIPT\',\'STYLE\',\'TITLE\',\'META\',\'HEAD\',\'OPTION\',\'OPTGROUP\',\'LINK\'];q 5c=5;q 9p=E 1d({19:f(C){9.C=C;9.6o=0;9.3M=Q;9.3L=[];9.8g=2.5;9.6p=9.8g},12:f(N){z(9.C.2M(\'B\')){9.bv()}1b z(9.3M){9.bw()}9.6p-=N;z(9.6p<0){9.4X()}},bv:f(){z(1s()-9.6o>6j){J(q i=0,el;el=9.3L[i];i++){z(!9.3M)el.18.5d=\'7Z solid 8h\';1b el.18.5d=el.8i}9.3M=!9.3M;9.6o=1s();z(!9.3M){9.4X()}}},bw:f(){J(q i=0,el;el=9.3L[i];i++)el.18.5d=el.8i;9.6o=0;9.3M=Q},4X:f(){q 3k=O.3t(\'*\');9.3L=[];J(q i=0,el;el=3k[i];i++){z(9.8j(el)){9.3L.1n(el);el.8i=el.18.5d||(O.7g.7h(el,2X).5d)}}9.6p=9.8g},8j:f(H,6q){z(9.bx(H,6q))A Q;J(q i=0,3N;3N=H.childNodes[i];i++){z(3N.8k===1&&8f.3Z(3N.bz)===-1&&(3N.4R>=5c&&3N.5H>=5c)&&O.7g.7h(3N,2X).51!==\'3h\'){A Q}}A 17},bA:f(H){A 9.8j(H,17)},bx:f(H,6q){z(H.8k!==1)A 17;z(H==O.41||H==O.2f)A 17;z(8f.3Z(H.bz)!==-1)A 17;z(H.18.51==\'3h\'||H.18.68==\'56\')A 17;z(1q H.29=="string"&&H.29.3Z(\'2c\')!=-1)A 17;z(!6q){z(H.4R<5c||H.5H<5c)A 17}q G;z(H.7d<0||H.9g<0){G=4Q(H);z(G.1e+G.K<0||G.1r+G.M<0)A 17}z(!G)G=4Q(H);z(G.1r>=9.C.7m.y)A 17;A Q},V:f(){J(q I in 9.1J)z(9.1J.2n(I))J(q i=0,1h;1h=9.1J[I][i];i++)1h.V();9.1J={}}});q 9v=E 1d({19:f(C){9.C=C;9.2L=Q},12:f(N){z(9.2L&&9.C.3f.3L.1l==0){9.bB()}},bB:f(){9.2L=Q;9.C.ui.3i("7A\'re 5n!");z(9.C.3g()){9.C.1O.4j();9.C.1O.57(\'af\')}1b{9.C.1O.4j()}9.C.1O.62("gameFinished:!")}});q 9q=E 1d({19:f(C){9.C=C;9.4w=[]},12:f(N){q 26=1s();J(q i=0,1D;1D=9.4w[i];i++){z(26-1D.6r>(1D.bC||2F)){1D.V();9.4w.4Z(i,1);6Y}1D.12(N)}},5X:f(D,bD,6s){6s=6s||4x;q 1D=E 6s(D,bD);1D.C=9.C;1D.3n();9.4w.1n(1D);z(9.C.49.1D){9.C.49.1D.4e()}},V:f(){J(q i=0,1D;1D=9.4w[i];i++)1D.V();9.4w=[]}});q 3r=E 1d({19:f(1a,C,x,y,P){9.1a=1a;9.C=C;9.D=E U(x,y);9.P=P||0},4r:f(){},6g:f(){},6t:f(){},6u:f(){A 4x},12:f(N){9.C.9J();9.6t(N);9.C.9K()},5e:f(1h){q 3o=1h.5e();z(!3o)A Q;9.C.48.5X(1h.D,3o,9.6u());9.C.1O.aD(Z.3b(3o.3t(\'*\').1l+1,2q),1h.D);z(!3o.isShot){3o.1Q.2m(3o)}z(9.C.1C){9.C.1C.a2()}A 17},8l:f(bE){q D=9.bF();q 1m=9.bG();q 1h=E bE(D,1m);1h.C=9.C;1h.manager=9;1h.8m();1h.1X.1E(1h.1X.cp().4G(9.1a.1X.1x()));A 1h},bF:f(){A 9.1a.D.cp().1E(9.D.cp().1U(9.1a.1m.P()+Z.PI/2))},bG:f(){A 9.1a.1m.cp().1U(9.P)},V:f(){}});q bH=E 1d({2o:3r,19:f(1a,C,x,y,P){3r.1L.19.2D(9,2g);9.2A=[]},6u:f(){A bI},12:f(N){z(!9.2A.1l)A;9.6v();3r.1L.12.3Y(9,N)},6t:f(N){J(q i=0,1Y;1Y=9.2A[i];i++){1Y.12(N);z(9.5e(1Y)){}}},6v:f(){J(q i=0,1Y;1Y=9.2A[i];i++){z(1Y.8n){1Y.V();9.2A.4Z(i,1)}}},4r:f(){z(9.2A.1l>5){A}z(1s()-9.5f<2F){A}9.5f=1s();z(9.C.1C){9.C.1C.7E()}9.2A.1n(9.8l(bJ))},V:f(){z(9.2A.1l){J(q i=0,1Y;1Y=9.2A[i];i++){1Y.V()}9.2A=[]}}});q bK=E 1d({2o:3r,19:f(){3r.1L.19.2D(9,2g);9.5f=0;9.1J=[]},6u:f(){A 4x},12:f(N){z(!9.1J.1l){A}9.6v();3r.1L.12.3Y(9,N)},6v:f(){q 26=1s();J(q i=0,1h;1h=9.1J[i];i++){z(26-1h.6r>6f){1h.V();9.1J.4Z(i,1)}}},6t:f(N){J(q i=0,1h;1h=9.1J[i];i++){1h.12(N);z(9.5e(1h)){1h.V();9.1J.4Z(i,1)}}},4r:f(){z(1s()-9.5f<6e){A}9.5f=1s();9.bL();z(9.C.1C){9.C.1C.7E()}},bL:f(){z(9.1J.1l>7){9.1J[0].V();9.1J.a8()}q 1h=9.8l(5g);9.1J.1n(1h)},V:f(){J(q i=0,1h;1h=9.1J[i];i++){1h.V()}9.1J=[]}});q 5g=E 1d({19:f(D,1m){9.D=D.cp();9.1m=1m;9.1X=E U(2F,2F);9.6r=1s()},8m:f(){9.W=E 4p(E 2E(9.D.x,9.D.y,5,5));9.W.bM()},8o:f(){9.W.4q(9.D)},12:f(N){9.D.1E(9.1X.24(9.1m.P()).3T(N));9.3n();9.8o()},5e:f(){q H=O.elementFromPoint(9.D.x,9.D.y);z(H&&H.8k==3)H=H.1Q;q bN=H&&9.C.3f.bA(H)?H:Q;A bN},3n:f(){q w=9.C.1N.K;q h=9.C.1N.M;q 4s=9.D.x+9.W.G.L.K/2;q 4t=9.D.y+9.W.G.L.M/2;z(4s>w)9.D.x=0;1b z(9.D.x<0)9.D.x=w-9.W.G.L.K/2;z(4t>h)9.D.y=0;1b z(9.D.y<0)9.D.y=h-9.W.G.L.M/2},V:f(){9.W.V()}});q bJ=E 1d({2o:5g,19:f(){5g.1L.19.2D(9,2g);9.1X=E U(bO,bO);9.bP=9.D.cp()},8m:f(){q s=Z.2i(1f.5h.K,1f.5h.M);9.W=E 4p(E 2E(0,0,s,s))},12:f(N){5g.1L.12.2D(9,2g)},8o:f(){9.W.bQ(9.D,9.1m);9.bP=9.D.cp()},3n:f(){q w=9.C.1N.K;q h=9.C.1N.M;q 4s=9.D.x+9.W.G.L.K/2;q 4t=9.D.y+9.W.G.L.M/2;z(4s>w||9.D.x<0)9.8n=17;z(4t>h||9.D.y<0)9.8n=17},V:f(){9.W.V()}});1f.5h=O.1P(\'img\');1f.5h.2v=1f.2H(\'55/aH/1A/1Y.aI\');q 4y=E 1d({19:f(D,H){9.6r=1s();9.D=D.cp()},12:f(N){},3n:f(){},V:f(){}});q 4x=E 1d({2o:4y,19:f(D,H){4y.1L.19.2D(9,2g);9.8p=E U(150,0);9.3O=[];9.6w();9.W=E 4p(E 2E(D.x,D.y,6j,6j))},12:f(N){J(q i=0,2B;2B=9.3O[i];i++)2B.D.1E(2B.1X.3T(N).5r(28(0.5,1.0)).24(2B.1m.P()));9.W.3J();9.W.bR(9.3O)},6w:f(){J(q i=0,j=!1f.8Y?10:40;i<j;i++){9.3O.1n({1m:(E U(28(0,20)-10,28(0,20)-10)).6N(),1X:9.8p.cp(),D:E U(0,0),3l:[\'bS\',\'8h\'][28(0,1)]})}},3n:f(){q 1w=9.W.G.6U();q 4h=9.W.G.6V();q w=9.C.1N.K;q h=9.C.1N.M;z(1w>w)9.D.x-=1w-w;z(4h>h)9.D.y-=4h-h;9.W.4q(9.D)},V:f(){9.W.V()}});q bu=E 1d({2o:4x,19:f(D,H){4y.1L.19.2D(9,2g);9.8p=E U(6e,0);9.3O=[];9.6w();9.W=E 4p(E 2E(D.x,D.y,2F,2F));9.bC=6f;9.8q=0.6;9.8r=2;9.6x=9.8q},12:f(N){9.6x-=N;z(9.6x<=0&&9.8r>0){9.6x=9.8q;9.6w();9.8r--}4x.1L.12.3Y(9,N)}});q bI=E 1d({2o:4y,19:f(D,H){z(!H)A;4y.1L.19.2D(9,2g);9.H=H;9.fx=E Fx();9.fx.5w(9);9.35()},12:f(N){z(!9.H)A;9.fx.12()},5z:f(I,2R){z(I==\'3z\'){}},35:f(){q 2O=9.bT();q 1e=2O[0],1w=2O[1];q lT=\'1U(-\'+28(30,50)+\'bV) 2V(-bW, bX)\';q rT=\'1U(\'+28(30,50)+\'bV) 2V(bW, bX)\';3y(1e,{\'8s\':lT});3y(1w,{\'8s\':rT});9.1e=1e;9.1w=1w;9.fx.1E(\'3z\',{35:1,3X:0.5,34:2F})},bT:f(){q 2u=4Q(9.H);q 8t=9.8u(2u);q 5i=9.8u(2u);q 1e=7j(9.H);q 1w=7j(9.H);43(1e,\'2c\');43(1w,\'2c\');q 44={margin:0,6a:\'3h\'};3y(1e,44);3y(1w,44);8t.22(1e);5i.22(1w);5i.18.1e=2u.1e+2u.K/2+\'px\';5i.9I+=2u.K/2;9.H.18.3z=0;9.H.18.51=\'3h\';9.H.18.68=\'56\';A 93([8t,5i],f(el){el.18.3u=\'8s 500ms ease-in\'})},8u:f(2u){q 1K=O.1P(\'4E\');3y(1K,{6b:\'7Y\',1e:2u.1e,1r:2u.1r,K:2u.K*0.5,M:2u.M,6a:\'3h\'});4i().22(1K);A 1K},V:f(){4A{9.1e.1Q.2m(9.1e);9.1w.1Q.2m(9.1w);9.H.1Q.2m(9.H)}4B(e){}}});q 2K={1:{2I:\'3r\',id:\'1p\',3e:bK},2:{2I:\'Laser\',id:\'1Y\',3e:bH}};q 89={\'1p\':2K[1],\'1Y\':2K[2]};q bZ=E 1d({19:f(G){9.1y=O.1P(\'1y\');9.1y.29=\'2c\';with(9.1y.18){6b=\'7Y\';5J=\'1000000\'}1f.1A.4a(9.1y);z(9.1y.73)9.R=9.1y.73(\'2d\');9.G=G;9.P=0;9.8v();4i().22(9.1y)},5j:f(1o){z(!1o[0])A;9.R.5k();9.R.2V(9.G.L.K/2,9.G.L.M/2);9.R.1U(9.P);9.R.8w();9.R.c0(1o[0].x,1o[0].y);J(q i=0;i<1o.1l;i++){9.R.c1(1o[i].x,1o[i].y)}9.R.5l()},24:f(P){9.P=P},8v:f(){z(9.1y.K!=9.G.L.K)9.1y.K=9.G.L.K;z(9.1y.M!=9.G.L.M)9.1y.M=9.G.L.M;9.1y.18.1e=1f.1A.1V.x+(9.G.D.x-9.G.L.K/2)+\'px\';9.1y.18.1r=1f.1A.1V.y+(9.G.D.y-9.G.L.M/2)+\'px\'},c2:f(c3,c4,c5,c6){9.R.5k();9.R.2V(9.G.L.K/2,9.G.L.M/2);9.R.8w();9.R.c0(c3,c4);9.R.c1(c5,c6);9.R.c7();9.R.c8();9.R.5l()},c9:f(ca,D){D=D||{x:0,y:0};9.R.5k();9.R.2V(9.G.L.K/2,9.G.L.M/2);z(D)9.R.2V(D.x,D.y);9.R.8w();9.R.arc(0,0,ca,0,Z.PI*2,17);9.R.8x();9.R.c7();9.R.5l()},cb:f(x,y,w,h){9.R.5k();9.R.2V(9.G.L.K/2,9.G.L.M/2);9.R.2V(x,y);9.R.fillRect(x,y,w,h);9.R.5l();9.R.8x()},cc:f(6y){9.R.6z(6y,0,0,9.G.L.K,9.G.L.M)},6z:f(6y,x,y){9.R.5k();9.R.2V(9.G.L.K/2+x,9.G.L.M/2+y);9.R.1U(9.P);9.R.6z(6y,0,-11);9.R.5l()},4z:f(3l){9.R.fillStyle=3l},8y:f(3l){9.R.strokeStyle=3l},6A:f(K){9.R.lineWidth=K},6B:f(){9.R.8x()},cd:f(){9.R.c8()},3J:f(){9.R.clearRect(0,0,9.G.L.K,9.G.L.M)},V:f(){1f.1A.4b(9.1y);9.1y.1Q.2m(9.1y)}});q 4p=E 1d({19:f(G){9.G=G;9.1g=E bZ(G)},3J:f(){9.1g.3J()},4q:f(D){9.G.D=D.cp();9.1g.G=9.G;9.1g.8v()},24:f(P){9.1g.24(P)},bh:f(1o){9.1g.4z(\'7u\');9.1g.8y(\'5B\');9.1g.6A(1.5);9.1g.5j(1o);9.1g.6B();9.1g.5j(1o);9.1g.cd()},b7:f(1o,2z){9.1g.8y(\'5B\');9.1g.6A(1.5);J(q i=1,1H,6C=1o[0];1H=1o[i];i++,6C=1H){q o=2z[i-1];9.1g.c2(6C.x+o.D.x,6C.x+o.D.y,1H.x+o.D.x,1H.y+o.D.y)}},bm:f(1I,P){9.1g.6A(1.5);9.1g.4z(\'8h\');9.1g.5j(1I.r);9.1g.6B();9.1g.4z(\'bS\');9.1g.5j(1I.y);9.1g.6B()},bM:f(){9.1g.4z(1f.74);9.1g.c9(2.5)},bR:f(3O){J(q i=0,2B;2B=3O[i];i++){9.1g.4z(2B.3l);9.1g.cb(2B.D.x,2B.D.y,3,3)}},drawFace:f(ce){9.1g.cc(ce)},bQ:f(D,1m){9.3J();9.4q(D);9.1g.24(1m.P());9.1g.6z(1f.5h,0,0)},transformToSheetCoordinates:f(1i){q 1K=1i.cp().4F(E U(9.G.L.K/2,9.G.L.M/2));A 1K},V:f(){9.1g.V()}});q 2l=23();q 8z=f(){z(!2l.32){z(2l.7D){q 1F=E a3(2l.7D);1F.5m(f(ok){2l.32=1f.1A=E 4W({1F:ok?1F:Q});2l.32.7v()})}1b{2l.32=1f.1A=E 4W();2l.32.7v()}}1b{2l.32.7w()}};z(2l.LAZYLOAD_KICKASS){S.startBrowserBlaster=8z}1b{8z()}f 4i(){z(2l.cg){A O.8G(2l.cg)}1b{A O.2f}}})(1q 33!=\'2p\'?33:S);',[],761,'|||||||||this||||||function|||||||||||var|||||||||if|return||game|pos|new||rect|element|key|for|width|size|height|tdelta|document|angle|false|ctx|window|data|Vector|destroy|sheet|obj|message|Math|||update|||||true|style|initialize|player|else|container|Class|left|GameGlobals|drawer|bullet|vec|props|type|length|dir|push|verts|cannon|typeof|top|now|bind||url|right|len|canvas|ship|kickass|tween|statisticsManager|explosion|add|mySite|amp|vert|flames|bullets|ret|prototype|tweens|windowSize|menuManager|createElement|parentNode|params|callback||rotate|scrollPos|case|vel|laser|script|||appendChild|getGlobalNamespace|setAngle||time||random|className|isInitial|weapon|KICKASSELEMENT||bubble|body|arguments|factor|max|points|menu|namespace|removeChild|hasOwnProperty|Extends|undefined|100|addEvent|messages|cannons|coords|src|doc||channel|lineOffsets|lasers|particle|methods|apply|Rect|500|delta|path|name|ele|Weapons|isPlaying|isKeyPressed|shipId|pieces|KICKASShidden||value|thrusters|currentRotation|thruster|translate|head|null|jsonp|encodeURIComponent||xhr|KICKASSGAME|exports|duration|start|values||||arr|min|cls|players|cannonClass|bulletManager|isCampaign|hidden|showMessage|socketIframe|all|color||checkBounds|hit||nextBomb|Cannon|query|getElementsByTagName|transition|func|event|stopEvent|setStyles|opacity|elements|lastUpdate||mySiteData|iframe|click|weaponsMenu|innerHTML|audio|clear|largestDistance|enemyIndex|blinkActive|child|particles|delete|CORS|kickassapp|addEventListener|mulNew|dot||listener|end|call|indexOf||documentElement|hasClass|addClass|styles|setTimeout|1000||explosionManager|audioManager|registerElement|unregisterElement|changeWeapon|shouldShowMenu|play|href|mod|bottom|getAppContainerElement|showMenu|last|link|staytime|channels|isBroken|Sheet|setPosition|shootPressed|rightBound|bottomBound|isShown|flameY|explosions|ParticleExplosion|Explosion|setFillColor|try|catch|messageData|parent|div|sub|setLength|||dot01|point|running|Tween|useAnimationFrame|com||getRect|offsetWidth|prop|val|removeClass|delay|KickAss|updateEnemyIndex|keydownEvent|splice||visibility|location|fragment|onGameReady|css|none|navigateTo|like|pointBubbles|source|acc|ELEMENTSIZETHRESHOLD|outline|checkCollision|lastFired|Bullet|laserImage|rightContainer|tracePoly|save|restore|load|done|readyState|json|_callbacks|mul|subNew|sin|test||addListener|repeats|fire|set|https|black|bound|removeEvent|stopPropogation|preventDefault|esc|offsetHeight|clientHeight|zIndex|replace|options|weaponClass|sessionManager|keyMap|keydown|keyup|ogg|shot|loop|switch|break|KICKASSSHIP|addExplosion|isBound|rank||usedThrusters|sendMessageToMenu|300|origin|menuOrigin|split|socketPostMessage|display|font|overflow|position|formats|format|200|2000|shootReleased|scrollTo|generateFlames|250|yellowWidth|halfRed|halfYellow|bombShowDelay|lastBlink|nextUpdate|ignoreSize|bornAt|explosionClass|checkCollisions|getExplosionClass|removeOld|generateParticles|nextGenerate|image|drawImage|setLineWidth|fillPath|lastVert|onreadystatechange|request|calledByExtension|JSON|from|page|send|yes|prototyping|cos|normalize||dot00|dot02|dot11|dot12|invDenom|getRight|getBottom|listeners|tweenStart|continue|changes|Quadratic|Array|join|getContext|bulletColor||bindObject|removeEventListener|element1|element2|code|table|down|offsetLeft|compatMode|clientWidth|defaultView|getComputedStyle|match|cloneElement|newElement|requestAnimFrame|scrollSize|updateWindowInfo|bombManager|StatisticsManager|keyupEvent|multiplier|AudioManager|mp3|white|begin|addPlayer|currentTime|getShipConfig|setShip|You|flyTo|blow|KICKASS_SITE_KEY|addShotFired|syncWithServer|settings|getShareURL|html|isSocketReady|frameborder|onMessage|weaponId|hideMenu|numPoints|hideBombMenu|toggleMenu|bombLink|KICKASS_SHARE_URL|class|www|facebook|span|UNIQID|absolute|1px|center|supportsAudio|self|deadTime|terminalVelocity|lastPos|bounds|forceRedraw|newCannons|WeaponMap|isShooting|posDelta|showFlames|lastFrameUpdate|redWidth|ELEMENTSTHATARENOTTOBEINCLUDED|updateDelay|red|KICKASSOLDBORDER|isDestroyable|nodeType|createBullet|initCanvas|outOfBounds|draw|particleVel|generationDelay|generationTimes|transform|leftContainer|createContainer|updateCanvas|beginPath|fill|setStrokeColor|initKickAss|counter|onload|get|_callbackId|postMessage|parse|getElementById|extension|requestId|INSTALL_SCOPE|object|sqrt|005|pow|toString|hasPoint|getLeft|getTop|Linear|number|startTime|tweenFinished|Quintic|FPS|hasCanvas|searchElement|throw|floor|abs|each|forEach|attachEvent||detachEvent|returnValue|elementIsContainedIn|contains|getBoundingClientRect||pageXOffset||pageYOffset|offsetTop|getCompatElement|getScrollSize|scrollWidth|scrollHeight|currentStyle|RegExp|reg|tag|BulletManager|ExplosionManager|UIManager|BombManager|MenuManager|create|SessionManager|static|sounds|KickAssStyle|keypress|loopTimer|keyCode|Ships|Standard|Player|isIEQuirks|isVisible|getHeight|scrollLeft|hideAll|showAll|updateShips||toUpperCase|setCannons|changeWeaponById|newRank|strong|small|fireBomb|isMySite|shouldShowHowToImage|elementsDestroyed|shotsFired|distanceFlownInPixels|totalPointsThisSession|increaseDistanceWithPixels|increasePointsGainedWithPoints|addElementsDestroyed|MySite|embed|Menu|generate|KICKASSURL|shift|messageType|sendMessage|lastMessage|includeCSS|generateDefaults|addWeapon|highscores|toggleWeaponsMenu|plugins|php|layout|show_faces|action|colorscheme|dark|arial|scrolling||border|80px|21px|allowTransparency|howToImage|howto|invisible|4000|dontShowMenu|showWeaponsMenu|hideWeaponsMenu|showBombMenu|addPoints|killed|addPointsBubbleAt|file|gfx|png|messagedown|messageup|20px|Arial|fontWeight|bold|fff|10000000|getLowestBubbleY|kickassto|numChannels|prepareElement|buildAudioElement|TYPES|audioEnded|target|PLAYERIDS|friction|addThrusters|addCannons|getSizeFromVertsAndObjects|calculateBounds|newCannon|Thruster|drawBrokenPlayer|randomPos|rotateLeft|rotateRight|stopRotate|activateThrusters|stopThrusters|frictionedAcc|setIsShown|drawTo|drawPlayer|||||drawFlames|redIncrease|yellowIncrease|isReady|3000||blowStuffUp|index|MegaParticleExplosion|blink|endBlink|shouldIgnoreElement||tagName|isDestroyableFromCollision|weHaveWon|ttl|forElement|bulletClass|getABulletPos|getABulletDir|LaserCannon|SplitExplosion|LaserBullet|BallCannon|addBullet|drawBullet|didFind|750|lastDrawPos|drawLaser|drawExplosion|yellow|createClones||deg|100px|40px||SheetCanvas|moveTo|lineTo|drawLine|xFrom|yFrom|xTo|yTo|closePath|stroke|drawCircle|radius|drawRect|drawImageFull|strokePath|face||KICKASS_CONTAINER_ELEMENT'.split('|'),0,{}))
