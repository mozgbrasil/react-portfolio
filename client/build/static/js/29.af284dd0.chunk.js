(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1851:function(e,n,a){},1853:function(e,n,a){},2701:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return we});var t,s,i,o,l,r=a(12),h=a(13),d=a(29),c=a(27),p=a(28),m=a(0),v=a.n(m),w=a(1850),u=a(2702),y=a(1114),g=(a(1851),a(1853),15881030),M=14209233,f=5845806,S=2300175,x=16095342,b=6865856,E=0,C=(new Date).getTime(),z=(new Date).getTime(),I=[],D=[];function P(){t={speed:0,initSpeed:35e-5,baseSpeed:35e-5,targetBaseSpeed:35e-5,incrementSpeedByTime:25e-7,incrementSpeedByLevel:5e-6,distanceForSpeedUpdate:100,speedLastUpdate:0,distance:0,ratioSpeedDistance:50,energy:100,ratioSpeedEnergy:3,level:1,levelLastUpdate:0,distanceForLevelUpdate:1e3,planeDefaultHeight:100,planeAmpHeight:80,planeAmpWidth:75,planeMoveSensivity:.005,planeRotXSensivity:8e-4,planeRotZSensivity:4e-4,planeFallSpeed:.001,planeMinSpeed:1.2,planeMaxSpeed:1.6,planeSpeed:0,planeCollisionDisplacementX:0,planeCollisionSpeedX:0,planeCollisionDisplacementY:0,planeCollisionSpeedY:0,seaRadius:600,seaLength:800,wavesMinAmp:5,wavesMaxAmp:20,wavesMinSpeed:.001,wavesMaxSpeed:.003,cameraFarPos:500,cameraNearPos:150,cameraSensivity:.002,coinDistanceTolerance:15,coinValue:3,coinsSpeed:.5,coinLastSpawn:0,distanceForCoinsSpawn:100,ennemyDistanceTolerance:10,ennemyValue:10,ennemiesSpeed:.6,ennemyLastSpawn:0,distanceForEnnemiesSpawn:50,status:"playing"},ie.innerHTML=Math.floor(t.level)}var L,k,U,_,H,R={x:0,y:0};function N(){L=window.innerHeight,k=window.innerWidth,l.setSize(k,L),i.aspect=k/L,i.updateProjectionMatrix()}function T(e){var n=e.clientX/k*2-1,a=1-e.clientY/L*2;R={x:n,y:a}}function B(e){e.preventDefault();var n=e.touches[0].pageX/k*2-1,a=1-e.touches[0].pageY/L*2;R={x:n,y:a}}function A(e){"waitingReplay"===t.status&&(P(),pe())}function F(e){"waitingReplay"===t.status&&(P(),pe())}var X=function(){this.mesh=new w.o,this.mesh.name="pilot",this.angleHairs=0;var e=new w.b(15,15,15),n=new w.n({color:f,shading:w.h}),a=new w.l(e,n);a.position.set(2,-12,0),this.mesh.add(a);var t=new w.b(10,10,10),s=new w.m({color:x}),i=new w.l(t,s);this.mesh.add(i);var o=new w.b(4,4,4),l=new w.m({color:f}),r=new w.l(o,l);r.geometry.applyMatrix((new w.k).makeTranslation(0,2,0));var h=new w.o;this.hairsTop=new w.o;for(var d=0;d<12;d++){var c=r.clone(),p=d%3,m=Math.floor(d/3);c.position.set(4*m-4,0,4*p-4),c.geometry.applyMatrix((new w.k).makeScale(1,1,1)),this.hairsTop.add(c)}h.add(this.hairsTop);var v=new w.b(12,4,2);v.applyMatrix((new w.k).makeTranslation(-6,0,0));var u=new w.l(v,l),y=u.clone();u.position.set(8,-2,6),y.position.set(8,-2,-6),h.add(u),h.add(y);var g=new w.b(2,8,10),M=new w.l(g,l);M.position.set(-1,-4,0),h.add(M),h.position.set(-5,5,0),this.mesh.add(h);var S=new w.b(5,5,5),b=new w.m({color:f}),E=new w.l(S,b);E.position.set(6,0,3);var C=E.clone();C.position.z=-E.position.z;var z=new w.b(11,1,11),I=new w.l(z,b);this.mesh.add(E),this.mesh.add(C),this.mesh.add(I);var D=new w.b(2,3,2),P=new w.l(D,s);P.position.set(0,0,-6);var L=P.clone();L.position.set(0,0,6),this.mesh.add(P),this.mesh.add(L)};X.prototype.updateHairs=function(){for(var e=this.hairsTop.children,n=e.length,a=0;a<n;a++){e[a].scale.y=.75+.25*Math.cos(this.angleHairs+a/3)}this.angleHairs+=t.speed*E*40};var Y=function(){this.mesh=new w.o,this.mesh.name="airPlane";var e=new w.b(80,50,50,1,1,1),n=new w.n({color:g,shading:w.h});e.vertices[4].y-=10,e.vertices[4].z+=20,e.vertices[5].y-=10,e.vertices[5].z-=20,e.vertices[6].y+=30,e.vertices[6].z+=20,e.vertices[7].y+=30,e.vertices[7].z-=20;var a=new w.l(e,n);a.castShadow=!0,a.receiveShadow=!0,this.mesh.add(a);var t=new w.b(20,50,50,1,1,1),s=new w.n({color:M,shading:w.h}),i=new w.l(t,s);i.position.x=50,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);var o=new w.b(15,20,5,1,1,1),l=new w.n({color:g,shading:w.h}),r=new w.l(o,l);r.position.set(-40,20,0),r.castShadow=!0,r.receiveShadow=!0,this.mesh.add(r);var h=new w.b(30,5,120,1,1,1),d=new w.n({color:g,shading:w.h}),c=new w.l(h,d);c.position.set(0,15,0),c.castShadow=!0,c.receiveShadow=!0,this.mesh.add(c);var p=new w.b(3,15,20,1,1,1),m=new w.n({color:M,transparent:!0,opacity:.3,shading:w.h}),v=new w.l(p,m);v.position.set(5,27,0),v.castShadow=!0,v.receiveShadow=!0,this.mesh.add(v);var u=new w.b(20,10,10,1,1,1);u.vertices[4].y-=5,u.vertices[4].z+=5,u.vertices[5].y-=5,u.vertices[5].z-=5,u.vertices[6].y+=5,u.vertices[6].z+=5,u.vertices[7].y+=5,u.vertices[7].z-=5;var y=new w.n({color:f,shading:w.h});this.propeller=new w.l(u,y),this.propeller.castShadow=!0,this.propeller.receiveShadow=!0;var x=new w.b(1,80,10,1,1,1),b=new w.n({color:S,shading:w.h}),E=new w.l(x,b);E.position.set(8,0,0),E.castShadow=!0,E.receiveShadow=!0;var C=E.clone();C.rotation.x=Math.PI/2,C.castShadow=!0,C.receiveShadow=!0,this.propeller.add(E),this.propeller.add(C),this.propeller.position.set(60,0,0),this.mesh.add(this.propeller);var z=new w.b(30,15,10,1,1,1),I=new w.n({color:g,shading:w.h}),D=new w.l(z,I);D.position.set(25,-20,25),this.mesh.add(D);var P=new w.b(24,24,4),L=new w.n({color:S,shading:w.h}),k=new w.l(P,L);k.position.set(25,-28,25);var U=new w.b(10,10,6),_=new w.n({color:f,shading:w.h}),H=new w.l(U,_);k.add(H),this.mesh.add(k);var R=D.clone();R.position.z=-D.position.z,this.mesh.add(R);var N=k.clone();N.position.z=-k.position.z,this.mesh.add(N);var T=k.clone();T.scale.set(.5,.5,.5),T.position.set(-35,-5,0),this.mesh.add(T);var B=new w.b(4,20,4);B.applyMatrix((new w.k).makeTranslation(0,10,0));var A=new w.n({color:g,shading:w.h}),F=new w.l(B,A);F.position.set(-35,-5,0),F.rotation.z=-.3,this.mesh.add(F),this.pilot=new X,this.pilot.mesh.position.set(-10,27,0),this.mesh.add(this.pilot.mesh),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0},W=function(){this.mesh=new w.o,this.nClouds=20,this.clouds=[];for(var e=2*Math.PI/this.nClouds,n=0;n<this.nClouds;n++){var a=new j;this.clouds.push(a);var s=e*n,i=t.seaRadius+150+200*Math.random();a.mesh.position.y=Math.sin(s)*i,a.mesh.position.x=Math.cos(s)*i,a.mesh.position.z=-300-500*Math.random(),a.mesh.rotation.z=s+Math.PI/2;var o=1+2*Math.random();a.mesh.scale.set(o,o,o),this.mesh.add(a.mesh)}};W.prototype.moveClouds=function(){for(var e=0;e<this.nClouds;e++){this.clouds[e].rotate()}this.mesh.rotation.z+=t.speed*E};var V=function(){var e=new w.f(t.seaRadius,t.seaRadius,t.seaLength,40,10);e.applyMatrix((new w.k).makeRotationX(-Math.PI/2)),e.mergeVertices();var n=e.vertices.length;this.waves=[];for(var a=0;a<n;a++){var s=e.vertices[a];this.waves.push({y:s.y,x:s.x,z:s.z,ang:Math.random()*Math.PI*2,amp:t.wavesMinAmp+Math.random()*(t.wavesMaxAmp-t.wavesMinAmp),speed:t.wavesMinSpeed+Math.random()*(t.wavesMaxSpeed-t.wavesMinSpeed)})}var i=new w.n({color:b,transparent:!0,opacity:.8,shading:w.h});this.mesh=new w.l(e,i),this.mesh.name="waves",this.mesh.receiveShadow=!0};V.prototype.moveWaves=function(){for(var e=this.mesh.geometry.vertices,n=e.length,a=0;a<n;a++){var t=e[a],s=this.waves[a];t.x=s.x+Math.cos(s.ang)*s.amp,t.y=s.y+Math.sin(s.ang)*s.amp,s.ang+=s.speed*E,this.mesh.geometry.verticesNeedUpdate=!0}};var j=function(){this.mesh=new w.o,this.mesh.name="cloud";for(var e=new w.e(20,20,20),n=new w.n({color:M}),a=3+Math.floor(3*Math.random()),t=0;t<a;t++){var s=new w.l(e.clone(),n);s.position.x=15*t,s.position.y=10*Math.random(),s.position.z=10*Math.random(),s.rotation.z=Math.random()*Math.PI*2,s.rotation.y=Math.random()*Math.PI*2;var i=.1+.9*Math.random();s.scale.set(i,i,i),this.mesh.add(s),s.castShadow=!0,s.receiveShadow=!0}};j.prototype.rotate=function(){for(var e=this.mesh.children.length,n=0;n<e;n++){var a=this.mesh.children[n];a.rotation.z+=.005*Math.random()*(n+1),a.rotation.y+=.002*Math.random()*(n+1)}};var O,q,J,Z=function(){var e=new w.r(8,2),n=new w.n({color:g,shininess:0,specular:16777215,shading:w.h});this.mesh=new w.l(e,n),this.mesh.castShadow=!0,this.angle=0,this.dist=0},G=function(){this.mesh=new w.o,this.ennemiesInUse=[]};G.prototype.spawnEnnemies=function(){for(var e=t.level,n=0;n<e;n++){var a;(a=I.length?I.pop():new Z).angle=-.1*n,a.distance=t.seaRadius+t.planeDefaultHeight+(2*Math.random()-1)*(t.planeAmpHeight-20),a.mesh.position.y=-t.seaRadius+Math.sin(a.angle)*a.distance,a.mesh.position.x=Math.cos(a.angle)*a.distance,this.mesh.add(a.mesh),this.ennemiesInUse.push(a)}},G.prototype.rotateEnnemies=function(){for(var e=0;e<this.ennemiesInUse.length;e++){var n=this.ennemiesInUse[e];n.angle+=t.speed*E*t.ennemiesSpeed,n.angle>2*Math.PI&&(n.angle-=2*Math.PI),n.mesh.position.y=-t.seaRadius+Math.sin(n.angle)*n.distance,n.mesh.position.x=Math.cos(n.angle)*n.distance,n.mesh.rotation.z+=.1*Math.random(),n.mesh.rotation.y+=.1*Math.random();var a=ee.mesh.position.clone().sub(n.mesh.position.clone()),s=a.length();s<t.ennemyDistanceTolerance?(O.spawnParticles(n.mesh.position.clone(),15,g,3),I.unshift(this.ennemiesInUse.splice(e,1)[0]),this.mesh.remove(n.mesh),t.planeCollisionSpeedX=100*a.x/s,t.planeCollisionSpeedY=100*a.y/s,U.intensity=2,ce(),e--):n.angle>Math.PI&&(I.unshift(this.ennemiesInUse.splice(e,1)[0]),this.mesh.remove(n.mesh),e--)}};var K=function(){var e=new w.r(3,0),n=new w.n({color:39321,shininess:0,specular:16777215,shading:w.h});this.mesh=new w.l(e,n)};K.prototype.explode=function(e,n,a){var t=this,s=this.mesh.parent;this.mesh.material.color=new w.d(n),this.mesh.material.needsUpdate=!0,this.mesh.scale.set(a,a,a);var i=e.x+50*(2*Math.random()-1),o=e.y+50*(2*Math.random()-1),l=.6+.2*Math.random();u.a.to(this.mesh.rotation,l,{x:12*Math.random(),y:12*Math.random()}),u.a.to(this.mesh.scale,l,{x:.1,y:.1,z:.1}),u.a.to(this.mesh.position,l,{x:i,y:o,delay:.1*Math.random(),ease:y.c.easeOut,onComplete:function(){s&&s.remove(t.mesh),t.mesh.scale.set(1,1,1),D.unshift(t)}})};var Q=function(){this.mesh=new w.o,this.particlesInUse=[]};Q.prototype.spawnParticles=function(e,n,a,t){for(var s=n,i=0;i<s;i++){var o;o=D.length?D.pop():new K,this.mesh.add(o.mesh),o.mesh.visible=!0;o.mesh.position.y=e.y,o.mesh.position.x=e.x,o.explode(e,a,t)}};var $,ee,ne,ae,te,se,ie,oe,le=function(){var e=new w.r(5,0),n=new w.n({color:39321,shininess:0,specular:16777215,shading:w.h});this.mesh=new w.l(e,n),this.mesh.castShadow=!0,this.angle=0,this.dist=0},re=function(e){this.mesh=new w.o,this.coinsInUse=[],this.coinsPool=[];for(var n=0;n<e;n++){var a=new le;this.coinsPool.push(a)}};function he(){C=(new Date).getTime(),E=C-z,z=C,"playing"===t.status?(Math.floor(t.distance)%t.distanceForCoinsSpawn===0&&Math.floor(t.distance)>t.coinLastSpawn&&(t.coinLastSpawn=Math.floor(t.distance),q.spawnCoins()),Math.floor(t.distance)%t.distanceForSpeedUpdate===0&&Math.floor(t.distance)>t.speedLastUpdate&&(t.speedLastUpdate=Math.floor(t.distance),t.targetBaseSpeed+=t.incrementSpeedByTime*E),Math.floor(t.distance)%t.distanceForEnnemiesSpawn===0&&Math.floor(t.distance)>t.ennemyLastSpawn&&(t.ennemyLastSpawn=Math.floor(t.distance),J.spawnEnnemies()),Math.floor(t.distance)%t.distanceForLevelUpdate===0&&Math.floor(t.distance)>t.levelLastUpdate&&(t.levelLastUpdate=Math.floor(t.distance),t.level++,ie.innerHTML=Math.floor(t.level),t.targetBaseSpeed=t.initSpeed+t.incrementSpeedByLevel*t.level),function(){t.planeSpeed=me(R.x,-.5,.5,t.planeMinSpeed,t.planeMaxSpeed);var e=me(R.y,-.75,.75,t.planeDefaultHeight-t.planeAmpHeight,t.planeDefaultHeight+t.planeAmpHeight),n=me(R.x,-1,1,.7*-t.planeAmpWidth,-t.planeAmpWidth);t.planeCollisionDisplacementX+=t.planeCollisionSpeedX,n+=t.planeCollisionDisplacementX,t.planeCollisionDisplacementY+=t.planeCollisionSpeedY,e+=t.planeCollisionDisplacementY,ee.mesh.position.y+=(e-ee.mesh.position.y)*E*t.planeMoveSensivity,ee.mesh.position.x+=(n-ee.mesh.position.x)*E*t.planeMoveSensivity,ee.mesh.rotation.z=(e-ee.mesh.position.y)*E*t.planeRotXSensivity,ee.mesh.rotation.x=(ee.mesh.position.y-e)*E*t.planeRotZSensivity,i.fov=me(R.x,-1,1,40,80),i.updateProjectionMatrix(),i.position.y+=(ee.mesh.position.y-i.position.y)*E*t.cameraSensivity,t.planeCollisionSpeedX+=(0-t.planeCollisionSpeedX)*E*.03,t.planeCollisionDisplacementX+=(0-t.planeCollisionDisplacementX)*E*.01,t.planeCollisionSpeedY+=(0-t.planeCollisionSpeedY)*E*.03,t.planeCollisionDisplacementY+=(0-t.planeCollisionDisplacementY)*E*.01,ee.pilot.updateHairs()}(),function(){t.distance+=t.speed*E*t.ratioSpeedDistance,ae.innerHTML=Math.floor(t.distance);var e=502*(1-t.distance%t.distanceForLevelUpdate/t.distanceForLevelUpdate);oe.setAttribute("stroke-dashoffset",e)}(),function(){t.energy-=t.speed*E*t.ratioSpeedEnergy,t.energy=Math.max(0,t.energy),te.style.right=100-t.energy+"%",te.style.backgroundColor=t.energy<50?"#f25346":"#68c3c0",t.energy<30?te.style.animationName="blinking":te.style.animationName="none";t.energy<1&&(t.status="gameover")}(),t.baseSpeed+=(t.targetBaseSpeed-t.baseSpeed)*E*.02,t.speed=t.baseSpeed*t.planeSpeed):"gameover"===t.status?(t.speed*=.99,ee.mesh.rotation.z+=2e-4*(-Math.PI/2-ee.mesh.rotation.z)*E,ee.mesh.rotation.x+=3e-4*E,t.planeFallSpeed*=1.05,ee.mesh.position.y-=t.planeFallSpeed*E,ee.mesh.position.y<-200&&(se.style.display="block",t.status="waitingReplay")):t.status,ee.propeller.rotation.x+=.2+t.planeSpeed*E*.005,$.mesh.rotation.z+=t.speed*E,$.mesh.rotation.z>2*Math.PI&&($.mesh.rotation.z-=2*Math.PI),U.intensity+=(.5-U.intensity)*E*.005,q.rotateCoins(),J.rotateEnnemies(),ne.moveClouds(),$.moveWaves(),l.render(s,i),requestAnimationFrame(he)}function de(){t.energy+=t.coinValue,t.energy=Math.min(t.energy,100)}function ce(){t.energy-=t.ennemyValue,t.energy=Math.max(0,t.energy)}function pe(){se.style.display="none"}function me(e,n,a,t,s){return t+(Math.max(Math.min(e,a),n)-n)/(a-n)*(s-t)}function ve(e){ae=document.getElementById("distValue"),te=document.getElementById("energyBar"),se=document.getElementById("replayMessage"),ie=document.getElementById("levelValue"),oe=document.getElementById("levelCircleStroke"),P(),L=window.innerHeight,k=window.innerWidth,s=new w.q,o=k/L,50,.1,1e4,i=new w.p(50,o,.1,1e4),s.fog=new w.i(16243114,100,950),i.position.x=0,i.position.z=200,i.position.y=t.planeDefaultHeight,(l=new w.s({alpha:!0,antialias:!0})).setSize(k,L),l.shadowMap.enabled=!0,document.getElementById("world").appendChild(l.domElement),window.addEventListener("resize",N,!1),_=new w.j(11184810,0,.9),U=new w.a(14452852,.5),(H=new w.g(16777215,.9)).position.set(150,350,350),H.castShadow=!0,H.shadow.camera.left=-400,H.shadow.camera.right=400,H.shadow.camera.top=400,H.shadow.camera.bottom=-400,H.shadow.camera.near=1,H.shadow.camera.far=1e3,H.shadow.mapSize.width=4096,H.shadow.mapSize.height=4096,new w.c(H.shadow.camera),s.add(_),s.add(H),s.add(U),(ee=new Y).mesh.scale.set(.25,.25,.25),ee.mesh.position.y=t.planeDefaultHeight,s.add(ee.mesh),($=new V).mesh.position.y=-t.seaRadius,s.add($.mesh),(ne=new W).mesh.position.y=-t.seaRadius,s.add(ne.mesh),q=new re(20),s.add(q.mesh),function(){for(var e=0;e<10;e++){var n=new Z;I.push(n)}J=new G,s.add(J.mesh)}(),function(){for(var e=0;e<10;e++){var n=new K;D.push(n)}O=new Q,s.add(O.mesh)}(),document.addEventListener("mousemove",T,!1),document.addEventListener("touchmove",B,!1),document.addEventListener("mouseup",A,!1),document.addEventListener("touchend",F,!1),he()}re.prototype.spawnCoins=function(){for(var e=1+Math.floor(10*Math.random()),n=t.seaRadius+t.planeDefaultHeight+(2*Math.random()-1)*(t.planeAmpHeight-20),a=10+Math.round(10*Math.random()),s=0;s<e;s++){var i;i=this.coinsPool.length?this.coinsPool.pop():new le,this.mesh.add(i.mesh),this.coinsInUse.push(i),i.angle=-.02*s,i.distance=n+Math.cos(.5*s)*a,i.mesh.position.y=-t.seaRadius+Math.sin(i.angle)*i.distance,i.mesh.position.x=Math.cos(i.angle)*i.distance}},re.prototype.rotateCoins=function(){for(var e=0;e<this.coinsInUse.length;e++){var n=this.coinsInUse[e];if(!n.exploding)n.angle+=t.speed*E*t.coinsSpeed,n.angle>2*Math.PI&&(n.angle-=2*Math.PI),n.mesh.position.y=-t.seaRadius+Math.sin(n.angle)*n.distance,n.mesh.position.x=Math.cos(n.angle)*n.distance,n.mesh.rotation.z+=.1*Math.random(),n.mesh.rotation.y+=.1*Math.random(),ee.mesh.position.clone().sub(n.mesh.position.clone()).length()<t.coinDistanceTolerance?(this.coinsPool.unshift(this.coinsInUse.splice(e,1)[0]),this.mesh.remove(n.mesh),O.spawnParticles(n.mesh.position.clone(),5,39321,.8),de(),e--):n.angle>Math.PI&&(this.coinsPool.unshift(this.coinsInUse.splice(e,1)[0]),this.mesh.remove(n.mesh),e--)}};var we=function(e){function n(e,a){var t;return Object(r.a)(this,n),t=Object(d.a)(this,Object(c.a)(n).call(this,e,a)),console.warn("constructor"),t.textRef=null,t}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentWillMount",value:function(){console.warn("componentWillMount")}},{key:"componentDidMount",value:function(){console.warn("componentDidMount"),ve(this.threeRootElement)}},{key:"render",value:function(){return v.a.createElement("div",{className:"aviator-1"},v.a.createElement("div",{className:"game-holder",id:"gameHolder"},v.a.createElement("div",{className:"header"},v.a.createElement("h1",null,v.a.createElement("span",null,"the"),"Aviator"),v.a.createElement("h2",null,"fly it to the end"),v.a.createElement("div",{className:"score",id:"score"},v.a.createElement("div",{className:"score__content",id:"level"},v.a.createElement("div",{className:"score__label"},"level"),v.a.createElement("div",{className:"score__value score__value--level",id:"levelValue"},"1"),v.a.createElement("svg",{className:"level-circle",id:"levelCircle",viewBox:"0 0 200 200"},v.a.createElement("circle",{id:"levelCircleBgr",r:"80",cx:"100",cy:"100",fill:"none",stroke:"#d1b790",strokeWidth:"24px"}),v.a.createElement("circle",{id:"levelCircleStroke",r:"80",cx:"100",cy:"100",fill:"none",stroke:"#68c3c0",strokeWidth:"14px",strokeDasharray:"502"}))),v.a.createElement("div",{className:"score__content",id:"dist"},v.a.createElement("div",{className:"score__label"},"distance"),v.a.createElement("div",{className:"score__value score__value--dist",id:"distValue"},"000")),v.a.createElement("div",{className:"score__content",id:"energy"},v.a.createElement("div",{className:"score__label"},"energy"),v.a.createElement("div",{className:"score__value score__value--energy",id:"energyValue"},v.a.createElement("div",{className:"energy-bar",id:"energyBar"}))))),v.a.createElement("div",{className:"world",id:"world"}),v.a.createElement("div",{className:"message message--replay",id:"replayMessage"},"Click to Replay"),v.a.createElement("div",{className:"message message--instructions",id:"instructions"},"Grab the blue pills",v.a.createElement("span",null,"avoid the red ones"))))}}]),n}(m.Component)}}]);
//# sourceMappingURL=29.af284dd0.chunk.js.map