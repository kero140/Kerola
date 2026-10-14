(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const store = {
    get(k){ try { return localStorage.getItem(k); } catch(e) { return null; } },
    set(k,v){ try { localStorage.setItem(k,v); } catch(e) {} },
    del(k){ try { localStorage.removeItem(k); } catch(e) {} }
  };
  const C = Object.assign({finalLetter:'',finalMontage:[],hiddenRoom:[],clips:[]}, window.KEROLA_CONTENT || {});
  const screens = ['intro','passwordScreen','musicScreen','universe','secretScreen','secretReveal','pranksScreen','endingScreen'];

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
  const wrongMain = ['انا مكنتش متوقع انك مش هتعرفيه..خيبتي ظني','برضه مش عارفه انا حقيقي مصدوم','خلاص تعالي كلميني وحايليني شويه يمكن اقولك الباسوورد','قول كده كتير..الصبر ليه حدود هاااااا'];
  const wrongSecret = ['الباسوورد غلط يا رولا','طيب ما تفكري مره واحده..جربي فكره كده ايه اكتر بنت بحبها انا في الدنيا','يا رولا اكتر بنت بحبها..بنت زي القمر 😉🌕','اكيد جربتي اسمك واسم بنات تانيه كتير..بس خلاص هعفو عنك تعالي اساليني'];
  const scenes = {
    beginning:{chapter:'THE BEGINNING',title:'كل حاجة بدأت من تفصيلة',text:'في حاجات بتبدأ عادي جدًا… وبعدها بنكتشف إنها خدت مكان أكبر بكتير من اللي كنا متخيلينه.',media:'photo',src:'assets/photos/01.webp',reveal:'يمكن مش كل البدايات كانت مثالية، بس في صور بتفكرني قد إيه كنت مبسوط وأنا جنبك.',next:'littleThings'},
    littleThings:{chapter:'THE LITTLE THINGS',title:'التفاصيل اللي محدش يفهمها غيرنا',text:'مش كل ذكرى محتاجة كلام كبير. ساعات حركة صغيرة أو إفيه بايخ هو اللي بيفضل عايش.',media:'video',src:'assets/videos/03.mp4',reveal:'انت مفهمتش صح… انا قصدي على القمر اللي جنبي. 🌙',next:'frames'},
    frames:{chapter:'THE FRAMES',title:'أيام اتصورت… ولسه عايشة',text:'في صور بتثبت إننا كنا هناك، وفي صور بتفكرني أنا كنت حاسس بإيه وقتها.',media:'photo',src:'assets/photos/14.webp',reveal:'يوم السينما من الأيام اللي كنت حاسس فيها إني في أسعد لحظات حياتي.',next:'unsaid'},
    unsaid:{chapter:'THE UNSAID',title:'حاجات اتقالت من غير كلام',text:'رسالة على ورقة، رسمة صغيرة، إيد جنب إيد… حاجات بسيطة بس مش بسيطة عندي.',media:'photo',src:'assets/photos/27.webp',reveal:'«وحياه عينيك وفداها عينيا..انا بحبك قد عينيا...🫀»',next:'sunMoon'},
    sunMoon:{chapter:'THE SUN & THE MOON',title:'حبي زي الشمس… وانتي القمر بليل',text:'في لحظة هتسكت فيها النجوم شوية، عشان تسيب مكان للكلام اللي فضِل معايا.',media:'photo',src:'assets/photos/28.webp',reveal:'حبي زي الشمس وانتي القمر بليل 🌕\nمش مجرد جملة مكتوبة على هدية… دي واحدة من الحاجات اللي فضلت منورة جوايا.',next:'lastLetter'},
    lastLetter:{chapter:'THE LAST LETTER',title:'لسه في حاجة أخيرة',text:'قبل ما الرحلة تهدى، في شوية لحظات عايزك تشوفيهم براحتك.',media:'video',src:'assets/videos/25.mp4',reveal:'هنا مكان الرسالة الأخيرة والفيلم النهائي. هنكمّل محتواهم لما تحدد نص الرسالة والترتيب النهائي.',next:'ending'}
  };
  const sceneKeys = Object.keys(scenes);
  const memories = [
    ['01','صورة متخيلة لينا','photo','assets/photos/01.webp'],['02','فتح الهدية','video','assets/videos/02.mp4'],['03','القمر اللي جنبي','video','assets/videos/03.mp4'],['04','إيد في إيد','photo','assets/photos/04.webp'],['05','أول مرة شفت الهدية','video','assets/videos/05.mp4'],['06','تفصيلة صغيرة','video','assets/videos/06.mp4'],['07','رولا وهي صغيرة','photo','assets/photos/07.webp'],['08','حلم صغير للمستقبل','photo','assets/photos/08.webp'],['09','فرحة في صورة','photo','assets/photos/09.webp'],['10','قبل ما نروح أي حتة','photo','assets/photos/10.webp'],['11','تذاكر السينما','photo','assets/photos/11.webp'],['12','الفشار','photo','assets/photos/12.webp'],['13','الكولا','photo','assets/photos/13.webp'],['14','بعد الفيلم','photo','assets/photos/14.webp'],['15','أول تجربة سوشي','video','assets/videos/15.mp4'],['16','ملاحظات البوسات','video','assets/videos/16.mp4'],['17','شطرة ومجتهدة','photo','assets/photos/17.webp'],['18','رسمة قديمة','photo','assets/photos/18.webp'],['19','نفس اليوم، نفس الدفء','photo','assets/photos/19.webp'],['20','وش صغير على صوابعنا','photo','assets/photos/20.webp'],['23','يوم سينما تاني','photo','assets/photos/23.webp'],['27','رسالة على ورقة صفراء','photo','assets/photos/27.webp'],['28','الهدية اللي فيها الشمس والقمر','photo','assets/photos/28.webp']
  ];

  let selectedSong = null, mainTries = 0, secretTries = 0, currentScene = 'beginning', revealed = false, paused = false, sceneMode = 'scene';
  let visited = new Set();
  try { visited = new Set(JSON.parse(store.get('kerolaVisited') || '[]')); } catch(e) { visited = new Set(); }
  const saveVisited = () => store.set('kerolaVisited', JSON.stringify([...visited]));

  /* ---------- Audio ---------- */
  const audioPlayer = new Audio();
  audioPlayer.preload = 'none';
  const clipPlayer = new Audio();
  clipPlayer.preload = 'none';
  const savedVol = parseFloat(store.get('kerolaVolume'));
  audioPlayer.volume = isNaN(savedVol) ? 0.8 : Math.min(1, Math.max(0, savedVol));
  const audioReady = Array(songs.length).fill(false);
  let currentAudio = -1, resumeAfterClip = false;

  audioPlayer.addEventListener('play', () => $('#miniPlay').textContent = 'Ⅱ');
  audioPlayer.addEventListener('pause', () => $('#miniPlay').textContent = '▶');
  audioPlayer.addEventListener('timeupdate', () => { if (audioPlayer.duration) $('#fakeProgress').style.width = (audioPlayer.currentTime / audioPlayer.duration * 100) + '%'; });
  audioPlayer.addEventListener('ended', () => {
    for (let n = currentAudio + 1; n < songs.length; n++) { if (audioReady[n]) { playLocalTrack(n); return; } }
    $('#fakeProgress').style.width = '0%';
  });
  clipPlayer.addEventListener('ended', () => { if (resumeAfterClip) { resumeAfterClip = false; audioPlayer.play().catch(() => {}); } });

  songs.forEach((s, i) => {
    fetch(s.file, {method: 'HEAD'}).then(r => { audioReady[i] = r.ok; }).catch(() => { audioReady[i] = false; }).finally(refreshSongUI);
  });

  function refreshSongUI() {
    $$('.song-card').forEach((el, i) => { el.classList.toggle('missing', !audioReady[i]); el.querySelector('.song-state').textContent = audioReady[i] ? 'يشتغل هنا' : 'بحث برا الموقع'; });
    $$('.playlist-row').forEach((el, i) => { el.classList.toggle('missing', !audioReady[i]); el.querySelector('.track-open').textContent = audioReady[i] ? '▶' : 'بحث ↗'; });
  }
  function setNowPlaying(i) {
    selectedSong = i;
    $('#nowPlaying').textContent = songs[i].title;
    $('#playerArtist').textContent = songs[i].artist;
    $$('.playlist-row').forEach((el, j) => el.classList.toggle('current', j === i));
  }
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove('show'), 2600); }

  function openSong(i) {
    setNowPlaying(i);
    $('#miniPlayer').classList.remove('hidden');
    if (audioReady[i]) { playLocalTrack(i); }
    else {
      audioPlayer.pause();
      window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(songs[i].search), '_blank', 'noopener');
      toast('الأغنية دي بتتفتح برا الموقع — ارجعي بعد ما تسمعيها.');
    }
  }
  function playLocalTrack(i) {
    if (!audioReady[i]) { openSong(i); return; }
    if (currentAudio !== i) { audioPlayer.pause(); audioPlayer.src = songs[i].file; currentAudio = i; $('#fakeProgress').style.width = '0%'; }
    audioPlayer.play().then(() => { setNowPlaying(i); $('#miniPlayer').classList.remove('hidden'); }).catch(() => toast('المتصفح منع التشغيل؛ اضغطي تشغيل مرة تانية.'));
  }

  /* ---------- UI helpers ---------- */
  function showScreen(id) { document.body.dataset.screen = id; screens.forEach(s => $('#' + s).classList.toggle('active', s === id)); window.scrollTo({top: 0, behavior: 'smooth'}); }
  function makeSongCard(song, i) {
    const b = document.createElement('button');
    b.className = 'song-card' + (selectedSong === i ? ' selected' : '');
    b.innerHTML = `<span class="song-number">TRACK ${String(i + 1).padStart(2, '0')}</span><span class="song-check">✦</span><strong>${song.title}</strong><small>${song.artist}</small><em class="song-state"></em>`;
    b.addEventListener('click', () => {
      setNowPlaying(i);
      $$('.song-card').forEach((el, j) => el.classList.toggle('selected', j === i));
      $('#beginJourney').disabled = false;
      $('#songHint').textContent = 'اختيارك: ' + song.title + ' — ' + song.artist;
    });
    return b;
  }
  function buildSongs() {
    const g = $('#songGrid');
    songs.forEach((s, i) => g.appendChild(makeSongCard(s, i)));
    const rows = $('#playlistRows');
    songs.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'playlist-row';
      b.innerHTML = `<span class="track-no">${String(i + 1).padStart(2, '0')}</span><span class="track-info"><strong>${s.title}</strong><small>${s.artist}</small></span><span class="track-open"></span>`;
      b.addEventListener('click', () => openSong(i));
      rows.appendChild(b);
    });
    refreshSongUI();
  }

  /* ---------- Scenes ---------- */
  const otherScenesVisited = () => sceneKeys.filter(k => k !== 'lastLetter' && visited.has(k)).length;
  const lastLetterUnlocked = () => otherScenesVisited() >= sceneKeys.length - 1;
  function nextFor(s) {
    if (s.next === 'lastLetter' && !lastLetterUnlocked()) {
      const first = sceneKeys.find(k => k !== 'lastLetter' && !visited.has(k));
      if (first) return first;
    }
    return s.next;
  }
  function updateProgress() {
    const n = sceneKeys.filter(k => visited.has(k)).length;
    $('#progressFill').style.width = Math.max(8, n / sceneKeys.length * 100) + '%';
    $$('.orbit-star').forEach(b => b.classList.toggle('visited', visited.has(b.dataset.scene)));
    const last = $('.orbit-star[data-scene="lastLetter"]');
    if (last) last.classList.toggle('locked', !lastLetterUnlocked());
  }
  function mediaEl(type, src, title) {
    if (type === 'photo') { const img = document.createElement('img'); img.src = src; img.alt = title; img.decoding = 'async'; return img; }
    const v = document.createElement('video'); v.src = src + '#t=0.1'; v.controls = true; v.playsInline = true; v.preload = 'metadata'; v.setAttribute('playsinline', ''); return v;
  }
  function openModal() { $('#sceneModal').classList.add('open'); $('#sceneModal').setAttribute('aria-hidden', 'false'); document.body.classList.add('cinematic'); }
  function renderClips(key) {
    const box = $('#sceneExtra'); box.textContent = '';
    C.clips.filter(c => c.scene === key && c.file).forEach(c => {
      const b = document.createElement('button');
      b.className = 'pill-button subtle-button clip-button';
      const ic = document.createElement('span'); ic.textContent = '♪';
      b.append(document.createTextNode(c.line || 'مقطع صغير'), ic);
      b.addEventListener('click', () => playClip(c));
      box.appendChild(b);
      if (c.autoplay) playClip(c);
    });
  }
  function playClip(c) {
    resumeAfterClip = !audioPlayer.paused;
    audioPlayer.pause();
    clipPlayer.src = c.file;
    clipPlayer.volume = audioPlayer.volume;
    clipPlayer.play().catch(() => { resumeAfterClip = false; toast('المقطع مش متاح دلوقتي.'); });
  }
  function openScene(key) {
    const s = scenes[key]; if (!s) return;
    if (key === 'lastLetter' && !lastLetterUnlocked()) { toast('لسه في نجوم لازم تعدي عليها الأول ✦'); return; }
    sceneMode = 'scene'; currentScene = key; revealed = false;
    visited.add(key); saveVisited();
    $('#chapterName').textContent = s.chapter;
    updateProgress();
    $('#sceneEyebrow').textContent = s.chapter;
    $('#sceneTitle').textContent = s.title;
    $('#sceneText').textContent = s.text;
    $('#sceneText').classList.remove('revealed'); $('#sceneText').classList.add('scene-hidden-text');
    $('#revealSceneText').style.display = '';
    $('#revealSceneText').innerHTML = 'افتحي الذكرى <span>✧</span>';
    $('#nextScene').innerHTML = 'كمّلي <span>↗</span>';
    const m = $('#sceneMedia'); m.innerHTML = '';
    if (key === 'sunMoon') {
      const art = document.createElement('div'); art.className = 'sun-moon-art';
      art.innerHTML = '<div class="sun-halo"></div><div class="sun-disc"></div><div class="moon-disc"></div><div class="celestial-horizon"></div><div class="celestial-quote"><span>حبي زي الشمس</span><i>وانتي القمر بليل</i></div>';
      m.appendChild(art);
    } else { m.appendChild(mediaEl(s.media, s.src, s.title)); }
    renderClips(key);
    openModal();
  }
  function closeScene() {
    const v = $('#sceneMedia video'); if (v) v.pause();
    clipPlayer.pause();
    if (resumeAfterClip) { resumeAfterClip = false; audioPlayer.play().catch(() => {}); }
    $('#sceneModal').classList.remove('open'); $('#sceneModal').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cinematic');
  }
  function revealScene() {
    if (revealed) return; revealed = true;
    const s = scenes[currentScene];
    $('#sceneText').textContent = s.reveal; $('#sceneText').classList.add('revealed');
    $('#revealSceneText').innerHTML = 'الذكرى اتفتحت <span>✓</span>';
    $('#nextScene').innerHTML = (nextFor(s) === 'ending' ? 'للنهاية' : 'للذكرى اللي بعدها') + ' <span>↗</span>';
  }
  function openMemory(id, title, type, src) {
    sceneMode = 'memory';
    $('#sceneEyebrow').textContent = 'MEMORY ' + id;
    $('#sceneTitle').textContent = title;
    $('#sceneText').textContent = ''; $('#sceneText').classList.remove('scene-hidden-text', 'revealed');
    $('#revealSceneText').style.display = 'none';
    $('#nextScene').innerHTML = 'رجوع للذكريات <span>↗</span>';
    $('#sceneExtra').textContent = '';
    const m = $('#sceneMedia'); m.innerHTML = ''; m.appendChild(mediaEl(type, src, title));
    openModal();
  }
  function renderMemories() {
    const b = $('#panelBody'); b.innerHTML = '<div class="memory-grid"></div>';
    const grid = b.firstElementChild;
    memories.forEach(([id, title, type, src]) => {
      const c = document.createElement('button'); c.className = 'memory-card';
      let media;
      if (type === 'photo') { media = document.createElement('img'); media.src = src; media.alt = title; media.loading = 'lazy'; media.decoding = 'async'; }
      else { media = document.createElement('video'); media.src = src + '#t=0.1'; media.muted = true; media.preload = 'metadata'; media.playsInline = true; media.setAttribute('playsinline', ''); }
      c.appendChild(media);
      const span = document.createElement('span'); span.textContent = title; c.appendChild(span);
      const small = document.createElement('small'); small.textContent = 'ذكرى رقم ' + id; c.appendChild(small);
      c.addEventListener('click', () => { closePanel(); openMemory(id, title, type, src); });
      grid.appendChild(c);
    });
  }
  function closePanel() { $('#panel').classList.add('hidden'); }
  function openPanel(type) {
    $('#panel').classList.remove('hidden');
    if (type === 'memories') { $('#panelEyebrow').textContent = 'MEMORY ARCHIVE'; $('#panelTitle').textContent = 'الذكريات اللي عاشت'; renderMemories(); }
    else {
      $('#panelEyebrow').textContent = 'STAR MAP'; $('#panelTitle').textContent = 'خريطة النجوم';
      const b = $('#panelBody'); b.innerHTML = '<div class="map-grid"></div>'; const g = b.firstElementChild;
      Object.entries(scenes).forEach(([key, s]) => {
        const c = document.createElement('button'); c.className = 'map-star';
        const locked = key === 'lastLetter' && !lastLetterUnlocked();
        c.classList.toggle('locked', locked);
        c.innerHTML = `<span>${visited.has(key) ? '✦' : '✧'}</span>${s.title}`;
        c.addEventListener('click', () => { closePanel(); openScene(key); });
        g.appendChild(c);
      });
    }
  }

  /* ---------- Hidden room & ending ---------- */
  function appendItem(parent, it) {
    const card = document.createElement('article'); card.className = 'room-item';
    if (it.src) { card.appendChild(mediaEl(/\.(mp4|webm|mov)$/i.test(it.src) ? 'video' : 'photo', it.src, it.title || '')); }
    if (it.title) { const h = document.createElement('h3'); h.textContent = it.title; card.appendChild(h); }
    if (it.text) { const p = document.createElement('p'); p.textContent = it.text; card.appendChild(p); }
    parent.appendChild(card);
  }
  function renderHiddenRoom() {
    const list = $('#pranksList'); list.textContent = '';
    const has = Array.isArray(C.hiddenRoom) && C.hiddenRoom.length > 0;
    $('#pranksIntro').style.display = has ? 'none' : '';
    $('#pranksLocked').style.display = has ? 'none' : '';
    if (has) C.hiddenRoom.forEach(it => appendItem(list, it));
  }
  function showEnding() {
    const L = $('#endingLetter'); L.textContent = '';
    const txt = (C.finalLetter || '').trim();
    if (txt) { txt.split(/\n\s*\n/).forEach(par => { const p = document.createElement('p'); p.textContent = par.trim(); L.appendChild(p); }); }
    else { const p = document.createElement('p'); p.className = 'ending-empty'; p.textContent = 'الرسالة الأخيرة هتظهر هنا لما نصها يتضاف.'; L.appendChild(p); }
    const M = $('#endingMontage'); M.textContent = '';
    (C.finalMontage || []).map(id => memories.find(m => m[0] === id)).filter(Boolean).forEach(([id, title, type, src]) => appendItem(M, {title, src}));
    showScreen('endingScreen');
  }

  /* ---------- Events ---------- */
  $('#openEnvelope').addEventListener('click', () => { $('#openEnvelope').classList.add('opening'); setTimeout(() => showScreen('passwordScreen'), 650); });
  $('#mainPasswordForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#mainPassword').value.trim().toLowerCase();
    if (v === 'kerola') { showScreen('musicScreen'); $('#mainPasswordMessage').textContent = ''; return; }
    $('#mainPasswordMessage').textContent = wrongMain[Math.min(mainTries, wrongMain.length - 1)]; mainTries++;
    $('#mainPassword').value = '';
    $('#mainPassword').animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(0)'}], {duration: 220});
  });
  $('#beginJourney').addEventListener('click', () => {
    if (selectedSong === null) return;
    $('#miniPlayer').classList.remove('hidden');
    setNowPlaying(selectedSong);
    showScreen('universe');
    updateProgress();
    if (audioReady[selectedSong]) playLocalTrack(selectedSong);
    toast('الرحلة بدأت… خدي وقتك يا رولا');
  });
  $('#followLight').addEventListener('click', () => {
    const next = sceneKeys.find(k => k !== 'lastLetter' && !visited.has(k)) || 'beginning';
    openScene(next);
  });
  $$('.orbit-star').forEach(b => b.addEventListener('click', () => openScene(b.dataset.scene)));
  $$('.nav-item').forEach(b => b.addEventListener('click', () => {
    $$('.nav-item').forEach(n => n.classList.toggle('selected', n === b));
    if (b.dataset.tab === 'journey') { closePanel(); return; }
    openPanel(b.dataset.tab);
  }));
  $('#closePanel').addEventListener('click', closePanel);
  $('#closeScene').addEventListener('click', closeScene);
  $('#sceneModal').addEventListener('click', e => { if (e.target === $('#sceneModal') || e.target.classList.contains('scene-backdrop')) closeScene(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeScene(); $('#playlistSheet').classList.add('hidden'); } });
  $('#revealSceneText').addEventListener('click', revealScene);
  $('#nextScene').addEventListener('click', () => {
    if (sceneMode === 'memory') { closeScene(); openPanel('memories'); return; }
    const s = scenes[currentScene];
    if (!revealed) { revealScene(); return; }
    closeScene();
    const n = nextFor(s);
    if (n === 'ending') showEnding(); else openScene(n);
  });
  $('#pauseJourney').addEventListener('click', () => {
    paused = !paused;
    document.body.classList.toggle('paused', paused);
    $('#pauseJourney').textContent = paused ? '▶' : 'Ⅱ';
    $('#pauseJourney').setAttribute('aria-label', paused ? 'استئناف الحركة' : 'إيقاف الحركة مؤقتًا');
    toast(paused ? 'الحركة اتوقفت مؤقتًا' : 'رجعنا نتحرك');
  });
  $('#secretMoon').addEventListener('click', () => { secretTries = 0; $('#secretPasswordMessage').textContent = ''; $('#secretPassword').value = ''; showScreen('secretScreen'); });
  $('#backFromSecret').addEventListener('click', () => showScreen('universe'));
  $('#secretPasswordForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#secretPassword').value.trim().toLowerCase();
    if (v === 'rolaa') { store.set('kerolaSecretUnlocked', 'yes'); showScreen('secretReveal'); return; }
    $('#secretPasswordMessage').textContent = wrongSecret[Math.min(secretTries, wrongSecret.length - 1)]; secretTries++;
    $('#secretPassword').value = '';
  });
  $('#enterPranks').addEventListener('click', () => { renderHiddenRoom(); showScreen('pranksScreen'); });
  $('#backFromPranks').addEventListener('click', () => showScreen('universe'));
  $('#backToSky').addEventListener('click', () => { showScreen('universe'); updateProgress(); });
  $('#replayJourney').addEventListener('click', () => {
    visited = new Set(); store.del('kerolaVisited'); $('#chapterName').textContent = 'OUR UNIVERSE';
    closePanel(); showScreen('universe'); updateProgress(); toast('نبدأ من أول… ✦');
  });

  $('#miniPlay').addEventListener('click', () => {
    if (selectedSong === null) { toast('اختاري أغنية الأول'); showScreen('musicScreen'); return; }
    if (audioReady[selectedSong]) { if (audioPlayer.paused) playLocalTrack(selectedSong); else audioPlayer.pause(); }
    else openSong(selectedSong);
  });
  $('#expandPlayer').addEventListener('click', () => $('#playlistSheet').classList.toggle('hidden'));
  $('#closePlaylist').addEventListener('click', () => $('#playlistSheet').classList.add('hidden'));
  $('#volume').value = audioPlayer.volume;
  $('#volume').addEventListener('input', e => { const v = parseFloat(e.target.value); audioPlayer.volume = v; clipPlayer.volume = v; store.set('kerolaVolume', String(v)); });
  $('#playerBar').addEventListener('click', e => {
    if (!audioPlayer.duration || audioPlayer.paused && audioPlayer.currentTime === 0) return;
    const r = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (r.right - e.clientX) / r.width)); // RTL: the bar fills from the right
    audioPlayer.currentTime = ratio * audioPlayer.duration;
  });

  /* ---------- Starfield (light, parallax, reduced-motion aware) ---------- */
  const canvas = $('#starCanvas'), ctx = canvas.getContext('2d');
  let stars = [], w = 0, h = 0, dpr = 1; const pointer = {x: .5, y: .5};
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(210, Math.floor(w * h / 5200));
    stars = Array.from({length: count}, () => ({x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.35 + .25, a: Math.random() * .65 + .18, p: Math.random() * Math.PI * 2, s: Math.random() * .012 + .002, depth: Math.random()}));
    if (reduced) draw();
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const tw = reduced ? 1 : (.65 + Math.sin(s.p) * .35);
      const x = s.x + (pointer.x - .5) * s.depth * 10, y = s.y + (pointer.y - .5) * s.depth * 8;
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(245,239,255,${s.a * tw})`; ctx.fill();
      if (s.r > 1.1) { ctx.beginPath(); ctx.moveTo(x - s.r * 2.7, y); ctx.lineTo(x + s.r * 2.7, y); ctx.moveTo(x, y - s.r * 2.7); ctx.lineTo(x, y + s.r * 2.7); ctx.strokeStyle = `rgba(222,211,255,${s.a * .28 * tw})`; ctx.lineWidth = .5; ctx.stroke(); }
      if (!paused) s.p += s.s;
    }
    if (!reduced) requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', e => { pointer.x = e.clientX / w; pointer.y = e.clientY / h; }, {passive: true});
  resize(); if (!reduced) draw(); buildSongs(); updateProgress();
})();
