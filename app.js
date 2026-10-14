(() => {
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const screenIds = ['welcome','passwordScreen','musicScreen','universe','memoriesScreen','secretScreen','secretReveal','pranksScreen'];
  const wrongMain = [
    'انا مكنتش متوقع انك مش هتعرفيه..خيبتي ظني',
    'برضه مش عارفه انا حقيقي مصدوم',
    'خلاص تعالي كلميني وحايليني شويه يمكن اقولك الباسوورد',
    'الصبر ليه حدود هاااااا'
  ];
  const wrongSecret = [
    'الباسوورد غلط يا رولا',
    'طيب ما تفكري مره واحده..جربي فكره كده ايه اكتر بنت بحبها انا في الدنيا',
    'يا رولا اكتر بنت بحبها..بنت زي القمر 😉🌕',
    'اكيد جربتي اسمك واسم بنات تانيه كتير..بس خلاص هعفو عنك تعالي اساليني'
  ];
  const songs = [
    {title:'أما براوة',artist:'نجاة الصغيرة',search:'نجاة الصغيرة أما براوة',file:'assets/audio/01-ama-brawa.mp3'},
    {title:'القريب منك بعيد',artist:'نجاة الصغيرة',search:'نجاة الصغيرة القريب منك بعيد',file:'assets/audio/02-el-areeb-menk-baeed.mp3'},
    {title:'على رمش عيونها',artist:'وديع الصافي',search:'وديع الصافي على رمش عيونها',file:'assets/audio/03-ala-ramsh-oyonha.mp3'},
    {title:'حبيبتي ملاك',artist:'عمرو دياب',search:'عمرو دياب حبيبتي ملاك',file:'assets/audio/04-habibty-malak.mp3'},
    {title:'على حبك',artist:'عمرو دياب',search:'عمرو دياب على حبك',file:'assets/audio/05-ala-hobak.mp3'},
    {title:'قمرين',artist:'عمرو دياب',search:'عمرو دياب قمرين',file:'assets/audio/06-qamarain.mp3'},
    {title:'فاضي شوية',artist:'حمزة نمرة',search:'حمزة نمرة فاضي شوية',file:'assets/audio/07-fady-shwaya.mp3'},
    {title:'ما تيجي أعدي عليكي',artist:'توو ليت',search:'توو ليت ما تيجي أعدي عليكي',file:'assets/audio/08-mateegy-ada3y-aleiky.mp3'}
  ];
  const scenes = {
    beginning:{chapter:'THE BEGINNING',title:'كل حاجة بدأت من تفصيلة',text:'في حاجات بتبدأ عادي جدًا… وبعدها بنكتشف إنها خدت مكان أكبر بكتير من اللي كنا متخيلينه.',type:'photo',src:'assets/photos/01.webp',reveal:'يمكن مش كل البدايات كانت مثالية، بس في صور بتفكرني قد إيه كنت مبسوط وأنا جنبك.',next:'littleThings'},
    littleThings:{chapter:'THE LITTLE THINGS',title:'التفاصيل اللي محدش يفهمها غيرنا',text:'مش كل ذكرى محتاجة كلام كبير. ساعات حركة صغيرة أو إفيه بايخ هو اللي بيفضل عايش.',type:'video',src:'assets/videos/03.mp4',reveal:'انت مفهمتش صح… انا قصدي على القمر اللي جنبي. 🌙',next:'frames'},
    frames:{chapter:'THE FRAMES',title:'أيام اتصورت… ولسه عايشة',text:'في صور بتثبت إننا كنا هناك، وفي صور بتفكرني أنا كنت حاسس بإيه وقتها.',type:'photo',src:'assets/photos/14.webp',reveal:'يوم السينما من الأيام اللي كنت حاسس فيها إني في أسعد لحظات حياتي.',next:'unsaid'},
    unsaid:{chapter:'THE UNSAID',title:'حاجات اتقالت من غير كلام',text:'رسالة على ورقة، رسمة صغيرة، إيد جنب إيد… حاجات بسيطة بس مش بسيطة عندي.',type:'photo',src:'assets/photos/27.webp',reveal:'«وحياه عينيك وفداها عينيا..انا بحبك قد عينيا...🫀»',next:'sunMoon'},
    sunMoon:{chapter:'THE SUN & THE MOON',title:'حبي زي الشمس… وانتي القمر بليل',text:'في لحظة هتسكت فيها النجوم شوية، عشان تسيب مكان للكلام اللي فضِل معايا.',type:'celestial',src:'',reveal:'حبي زي الشمس وانتي القمر بليل 🌕\nمش مجرد جملة مكتوبة على هدية… دي واحدة من الحاجات اللي فضلت منورة جوايا.',next:'lastLetter'},
    lastLetter:{chapter:'THE LAST LETTER',title:'لسه في حاجة أخيرة',text:'قبل ما الرحلة تهدى، في شوية لحظات عايزك تشوفيهم براحتك.',type:'video',src:'assets/videos/25.mp4',reveal:'هنا مكان الرسالة الأخيرة والفيلم النهائي. هنكمّل محتواهم لما تحدد نص الرسالة والترتيب النهائي.',next:'beginning'}
  };
  const memories = [
    ['01','بداية الحكاية','photo','assets/photos/01.webp'],
    ['02','لحظة فتح الهدية','video','assets/videos/02.mp4'],
    ['03','القمر اللي جنبي','video','assets/videos/03.mp4'],
    ['04','إيد في إيد','photo','assets/photos/04.webp'],
    ['05','فرحة الهدية','video','assets/videos/05.mp4'],
    ['06','تفصيلة صغيرة مننا','video','assets/videos/06.mp4'],
    ['07','رولا وهي صغيرة','photo','assets/photos/07.webp'],
    ['08','حلم صغير للمستقبل','photo','assets/photos/08.webp'],
    ['09','فرحة في صورة','photo','assets/photos/09.webp'],
    ['10','قبل ما نروح أي حتة','photo','assets/photos/10.webp'],
    ['11','تذاكر السينما','photo','assets/photos/11.webp'],
    ['12','الفشار','photo','assets/photos/12.webp'],
    ['13','الكولا','photo','assets/photos/13.webp'],
    ['14','بعد الفيلم','photo','assets/photos/14.webp'],
    ['15','أول تجربة سوشي','video','assets/videos/15.mp4'],
    ['16','ملاحظات البوسات','video','assets/videos/16.mp4'],
    ['17','شطرة ومجتهدة','photo','assets/photos/17.webp'],
    ['18','رسمة قديمة','photo','assets/photos/18.webp'],
    ['19','نفس اليوم، نفس الدفء','photo','assets/photos/19.webp'],
    ['20','وش صغير على صوابعنا','photo','assets/photos/20.webp'],
    ['23','يوم سينما تاني','photo','assets/photos/23.webp'],
    ['25','لحظة متحركة من الحكاية','video','assets/videos/25.mp4'],
    ['27','رسالة على ورقة صفراء','photo','assets/photos/27.webp'],
    ['28','الهدية اللي فيها الشمس والقمر','photo','assets/photos/28.webp']
  ];
  let mainTries=0, secretTries=0, selectedSong=null, currentAudio=-1, paused=false, currentScene='beginning', revealed=false, memoryMode=false, soundEnabled=true;
  const audio = new Audio(); audio.preload='none';
  const visited = new Set();
  try { JSON.parse(localStorage.getItem('kerolaVisited')||'[]').forEach(k=>visited.add(k)); } catch (_) {}
  const availableSongs = new Set();
  const toastTimer = {id:null};

  function showScreen(id){
    screenIds.forEach(name=>$('#'+name).classList.toggle('active',name===id));
    $('#sceneModal').classList.remove('open'); $('#sceneModal').setAttribute('aria-hidden','true');
    document.body.classList.remove('cinematic');
    const video=$('#sceneMedia video'); if(video)video.pause();
    window.scrollTo({top:0,behavior:'auto'});
    if(id==='passwordScreen') setTimeout(()=>$('#mainPassword').focus({preventScroll:true}),100);
  }
  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer.id);toastTimer.id=setTimeout(()=>t.classList.remove('show'),2600)}
  function setProgress(){const n=Object.keys(scenes).filter(k=>visited.has(k)).length;$('#progressFill').style.width=(n/6*100)+'%';$('#progressLabel').textContent=n+' / 6'}
  function playSong(i){
    const song=songs[i]; selectedSong=i; updatePlayer(song); $('#miniPlayer').classList.remove('hidden');
    if(availableSongs.has(i)){
      if(currentAudio!==i){audio.pause();audio.src=song.file;currentAudio=i;}
      audio.play().then(()=>{updatePlayer(song);}).catch(()=>toast('اضغطي تشغيل مرة تانية لو المتصفح منع الصوت.'));
    } else {
      window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(song.search),'_blank','noopener,noreferrer');
      toast('ملف الأغنية مش موجود محليًا؛ فتحنا نتائج الاستماع.');
    }
  }
  function updatePlayer(song){$('#nowPlaying').textContent=song.title;$('#playerArtist').textContent=song.artist;$('#miniPlayer').classList.remove('hidden');}
  function buildSongs(){
    const grid=$('#songGrid'), rows=$('#playlistRows');
    songs.forEach((s,i)=>{
      const card=document.createElement('button');card.type='button';card.className='song-card';card.innerHTML=`<span class="track">TRACK ${String(i+1).padStart(2,'0')}</span><span class="check">✧</span><strong></strong><small></small>`;$('.song-card strong',card).textContent=s.title;$('.song-card small',card).textContent=s.artist;
      card.addEventListener('click',()=>{selectedSong=i;$$('.song-card').forEach((c,j)=>{c.classList.toggle('selected',j===i);$('.check',c).textContent=j===i?'✦':'✧'});updatePlayer(s);$('#songGrid').dataset.selected=String(i);toast('اختيارك: '+s.title)});grid.appendChild(card);
      const row=document.createElement('button');row.type='button';row.className='playlist-row';row.innerHTML=`<span class="track-no">${String(i+1).padStart(2,'0')}</span><span class="track-info"><strong></strong><small></small></span><span class="track-open">استماع ↗</span>`;$('.track-info strong',row).textContent=s.title;$('.track-info small',row).textContent=s.artist;row.addEventListener('click',()=>playSong(i));rows.appendChild(row);
      fetch(s.file,{method:'HEAD'}).then(r=>{if(r.ok)availableSongs.add(i)}).catch(()=>{});
    });
  }
  function renderSceneMedia(scene){
    const holder=$('#sceneMedia');holder.replaceChildren();
    if(scene.type==='celestial'){
      const art=document.createElement('div');art.className='celestial-art';art.innerHTML='<div class="celestial-sun"></div><div class="celestial-moon"></div><div class="celestial-caption"><span>حبي زي الشمس</span><em>وانتي القمر بليل</em></div>';holder.appendChild(art);return;
    }
    if(scene.type==='photo'){
      const img=document.createElement('img');img.src=scene.src;img.alt=scene.title;img.decoding='async';holder.appendChild(img);return;
    }
    const wrap=document.createElement('div');wrap.className='video-thumb';wrap.innerHTML='<span>▶</span><small>اضغطي لتشغيل الفيديو</small>';wrap.setAttribute('role','button');wrap.setAttribute('tabindex','0');
    const activate=()=>{const video=document.createElement('video');video.src=scene.src;video.controls=true;video.playsInline=true;video.preload='metadata';video.setAttribute('controlsList','nodownload');holder.replaceChildren(video);video.play().catch(()=>{});};wrap.addEventListener('click',activate);wrap.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate()}});holder.appendChild(wrap);
  }
  function openScene(key){
    $('#memoryNav').classList.add('hidden');
    const scene=scenes[key];if(!scene)return;currentScene=key;revealed=false;memoryMode=false;visited.add(key);try{localStorage.setItem('kerolaVisited',JSON.stringify([...visited]));}catch(_){}setProgress();
    $('#sceneEyebrow').textContent=scene.chapter;$('#sceneTitle').textContent=scene.title;$('#sceneText').textContent=scene.text;$('#revealSceneText').classList.remove('hidden');$('#revealSceneText').textContent='افتحي الذكرى ✧';$('#nextScene').innerHTML='كمّلي <b>↙</b>';renderSceneMedia(scene);$('#sceneModal').classList.add('open');$('#sceneModal').setAttribute('aria-hidden','false');document.body.classList.add('cinematic');$('#closeScene').focus({preventScroll:true});
  }
  function revealScene(){if(revealed)return;revealed=true;$('#sceneText').textContent=scenes[currentScene].reveal;$('#revealSceneText').textContent='الذكرى اتفتحت ✓';$('#nextScene').innerHTML='للذكرى اللي بعدها <b>↙</b>';}
  function closeScene(){const v=$('#sceneMedia video');if(v)v.pause();$('#memoryNav').classList.add('hidden');$('#sceneModal').classList.remove('open');$('#sceneModal').setAttribute('aria-hidden','true');document.body.classList.remove('cinematic');}
  let activeMemoryFilter='all';
  let visibleMemories=[];
  function renderMemories(){
    const grid=$('#memoryGrid');grid.replaceChildren();
    visibleMemories=memories.filter(item=>activeMemoryFilter==='all'||item[2]===activeMemoryFilter);
    $('#memoryCount').textContent=`${visibleMemories.length} ${activeMemoryFilter==='video'?'فيديو':activeMemoryFilter==='photo'?'صورة':'لحظة'}${activeMemoryFilter==='all'?' محفوظة':''}`;
    visibleMemories.forEach(([id,title,type,src],index)=>{
      const card=document.createElement('button');card.type='button';card.className='memory-card';card.style.setProperty('--card-index',index%8);
      const visual=document.createElement('span');visual.className='memory-visual';
      const img=document.createElement('img');img.src=type==='photo'?src:`assets/posters/${id}.jpg`;img.alt=title;img.loading='lazy';img.decoding='async';visual.appendChild(img);
      if(type==='video'){const badge=document.createElement('span');badge.className='video-badge';badge.innerHTML='<span>▶</span> فيديو';visual.appendChild(badge)}
      const caption=document.createElement('span');caption.className='memory-caption';
      const number=document.createElement('small');number.textContent='MEMORY '+id;
      const strong=document.createElement('strong');strong.textContent=title;
      const open=document.createElement('span');open.className='memory-open';open.textContent='افتحي اللحظة ↙';
      caption.append(number,strong,open);card.append(visual,caption);
      card.addEventListener('click',()=>openMemory(id,title,type,src));grid.appendChild(card);
    });
    $$('.memory-filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===activeMemoryFilter));
  }

  function openMemory(id,title,type,src){
    memoryMode=true;currentScene='memory';revealed=true;
    const index=visibleMemories.findIndex(item=>item[0]===id);
    $('#sceneEyebrow').textContent='A MOMENT TO KEEP · '+id;$('#sceneTitle').textContent=title;$('#sceneText').textContent='';$('#revealSceneText').classList.add('hidden');$('#nextScene').innerHTML='رجوع للألبوم <b>↙</b>';
    const holder=$('#sceneMedia');const previousVideo=$('#sceneMedia video');if(previousVideo)previousVideo.pause();holder.replaceChildren();
    if(type==='photo'){const img=document.createElement('img');img.src=src;img.alt=title;img.decoding='async';holder.appendChild(img)}
    else {const video=document.createElement('video');video.src=src;video.poster=`assets/posters/${id}.jpg`;video.controls=true;video.playsInline=true;video.preload='metadata';video.setAttribute('controlsList','nodownload');holder.appendChild(video)}
    $('#memoryNav').classList.remove('hidden');
    $('#memoryPosition').textContent=String(index+1).padStart(2,'0')+' / '+String(visibleMemories.length).padStart(2,'0');
    $('#memoryPrev').disabled=index<=0;$('#memoryNext').disabled=index>=visibleMemories.length-1;
    $('#memoryPrev').onclick=()=>{if(index>0){const item=visibleMemories[index-1];openMemory(...item)}};
    $('#memoryNext').onclick=()=>{if(index<visibleMemories.length-1){const item=visibleMemories[index+1];openMemory(...item)}};
    $('#sceneModal').classList.add('open');$('#sceneModal').setAttribute('aria-hidden','false');document.body.classList.add('cinematic');$('#closeScene').focus({preventScroll:true});
  }

  $('#startStory').addEventListener('click',()=>showScreen('passwordScreen'));
  $('#mainPasswordForm').addEventListener('submit',e=>{e.preventDefault();const value=$('#mainPassword').value.trim().toLowerCase();if(value==='kerola'){showScreen('musicScreen');$('#mainPasswordMessage').textContent='';return;}$('#mainPasswordMessage').textContent=wrongMain[Math.min(mainTries,wrongMain.length-1)];mainTries++;$('#mainPassword').value='';$('#mainPassword').focus({preventScroll:true});});
  $('#togglePassword').addEventListener('click',()=>{const i=$('#mainPassword');i.type=i.type==='password'?'text':'password'});
  $('#toggleSecretPassword').addEventListener('click',()=>{const i=$('#secretPassword');i.type=i.type==='password'?'text':'password'});
  $('#beginJourney').addEventListener('click',()=>{showScreen('universe');if(selectedSong!==null){updatePlayer(songs[selectedSong]);$('#miniPlayer').classList.remove('hidden')}setProgress();toast('الرحلة بدأت… خدي وقتك يا رولا')});
  $('#skipMusic').addEventListener('click',()=>{selectedSong=null;$('#miniPlayer').classList.add('hidden');showScreen('universe');setProgress()});
  $$('[data-scene]').forEach(b=>b.addEventListener('click',()=>openScene(b.dataset.scene)));
  $('#openMemories').addEventListener('click',()=>{renderMemories();showScreen('memoriesScreen')});
  $('#closeScene').addEventListener('click',closeScene);$$('[data-close-scene]').forEach(b=>b.addEventListener('click',closeScene));
  $('#revealSceneText').addEventListener('click',revealScene);
  $('#nextScene').addEventListener('click',()=>{if(memoryMode){closeScene();showScreen('memoriesScreen');return;}if(!revealed){revealScene();return;}const next=scenes[currentScene]?.next;closeScene();if(next)openScene(next)});
  $('#pauseJourney').addEventListener('click',()=>{paused=!paused;document.body.classList.toggle('paused',paused);$('#pauseJourney').textContent=paused?'▶':'Ⅱ';$('#pauseJourney').setAttribute('aria-label',paused?'استئناف الحركة':'إيقاف الحركة');toast(paused?'الحركة اتوقفت مؤقتًا':'رجعنا نتحرك')});
  $('#secretMoon').addEventListener('click',()=>{secretTries=0;$('#secretPasswordMessage').textContent='';$('#secretPassword').value='';showScreen('secretScreen')});
  $('#secretPasswordForm').addEventListener('submit',e=>{e.preventDefault();const value=$('#secretPassword').value.trim().toLowerCase();if(value==='rolaa'){showScreen('secretReveal');return;}$('#secretPasswordMessage').textContent=wrongSecret[Math.min(secretTries,wrongSecret.length-1)];secretTries++;$('#secretPassword').value='';$('#secretPassword').focus({preventScroll:true});});
  $('#enterPranks').addEventListener('click',()=>showScreen('pranksScreen'));
  $$('[data-back]').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.back)));
  $('#miniPlay').addEventListener('click',()=>{if(selectedSong===null){showScreen('musicScreen');toast('اختاري أغنية الأول');return;}if(availableSongs.has(selectedSong)){if(audio.paused)playSong(selectedSong);else audio.pause()}else playSong(selectedSong)});
  $('#expandPlayer').addEventListener('click',()=>$('#playlistSheet').classList.toggle('hidden'));$('#closePlaylist').addEventListener('click',()=>$('#playlistSheet').classList.add('hidden'));
  $('#soundToggle').addEventListener('click',()=>{soundEnabled=!soundEnabled;document.body.classList.toggle('quiet',!soundEnabled);$('#soundToggle').textContent=soundEnabled?'♫':'♪';$('#soundToggle').setAttribute('aria-label',soundEnabled?'إيقاف المؤثرات':'تفعيل المؤثرات')});
  audio.addEventListener('play',()=>$('#miniPlay').textContent='Ⅱ');audio.addEventListener('pause',()=>$('#miniPlay').textContent='▶');audio.addEventListener('timeupdate',()=>{if(audio.duration)$('#fakeProgress').style.width=(audio.currentTime/audio.duration*100)+'%'});audio.addEventListener('ended',()=>{const next=currentAudio+1;if(next<songs.length&&availableSongs.has(next))playSong(next);else toast('خلصت الأغنية. تقدري تختاري غيرها من القائمة.')});
  // Decorative star dust is CSS-only; it cannot intercept taps or launch media.
  const stars=$('#stars');for(let i=0;i<26;i++){const star=document.createElement('i');star.className='dust';star.style.left=((i*37)%97)+'%';star.style.top=((i*61+9)%95)+'%';star.style.animationDelay=((i%11)*-.7)+'s';stars.appendChild(star)}
  $$('.memory-filter').forEach(b=>b.addEventListener('click',()=>{activeMemoryFilter=b.dataset.filter;renderMemories()}));
  buildSongs();setProgress();renderMemories();
})();
