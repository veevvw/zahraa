// عدّل الاسم والرسالة واسم المرسل من ملف config في أعلى هذا الملف.
const CONFIG={name:"ANITA",sender:"Bilal",message:"كل عام وانتي أجمل صديقه وأحلى حلوه . أتمنى أيامج كلها فرح، وضحكتج ما تغيب، وكل أمنياتج تصير حقيقة. وجودج وحده يخلي الأشياء أحلى. أحبج هواية ❤️"};
document.title=`عيد ميلاد سعيد ${CONFIG.name} ❤️`;
document.getElementById('personName').textContent=CONFIG.name;
document.getElementById('senderName').textContent=CONFIG.sender;
document.getElementById('message').textContent=CONFIG.message;
const canvas=document.getElementById('matrix'),ctx=canvas.getContext('2d');let cols,drops;
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;cols=Math.floor(canvas.width/17);drops=Array(cols).fill(1)}
resize();addEventListener('resize',resize);
setInterval(()=>{ctx.fillStyle='rgba(9,6,17,.09)';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#ff4fa3';ctx.font='13px monospace';for(let i=0;i<drops.length;i++){let s=String.fromCharCode(0x30A0+Math.random()*96);ctx.fillText(s,i*17,drops[i]*17);if(drops[i]*17>canvas.height&&Math.random()>.975)drops[i]=0;drops[i]++}},55);
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function confetti(){const colors=['#ff4fa3','#ffd166','#fff','#b68cff','#ff8b5c'];for(let i=0;i<95;i++){let e=document.createElement('i');e.className='confetti';e.style.left=Math.random()*100+'vw';e.style.background=colors[Math.floor(Math.random()*colors.length)];e.style.width=(5+Math.random()*7)+'px';e.style.height=(8+Math.random()*10)+'px';e.style.borderRadius=Math.random()>.5?'50%':'2px';e.style.animationDuration=(2.5+Math.random()*3)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),6000)}}
document.getElementById('startBtn').onclick=()=>{show('reveal');confetti()};
document.getElementById('celebrateBtn').onclick=()=>{show('cake');confetti()};
document.getElementById('wishBtn').onclick=()=>{show('memories');confetti();const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)};
document.getElementById('againBtn').onclick=()=>show('intro');
