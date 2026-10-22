const heritageData = {
  "1. 석굴암/불국사": [
    { name: "석굴암", lat: 35.7958, lng: 129.3491, address: "경상북도 경주시 석굴로 238 (진현동)", desc: "토함산 중턱에 위치한 신라 시대의 인공 석굴 사원입니다." },
    { name: "불국사", lat: 35.7981, lng: 129.3323, address: "경상북도 경주시 불국로 385 (진현동)", desc: "신라 경덕왕 때 김대성이 창건한 한국의 대표적인 불교 건축물입니다." }
  ],
  "2. 해인사 장경판전": [
    { name: "해인사 장경판전", lat: 35.8014, lng: 128.0984, address: "경상남도 합천군 가야면 해인사길 122 (치인리)", desc: "팔만대장경을 안전하게 보존하기 위해 과학적으로 설계된 조선 시대 대장경 보관 건물입니다." }
  ],
  "3. 종묘": [
    { name: "종묘", lat: 37.5746, lng: 126.9942, address: "서울특별시 종로구 종로 157", desc: "조선 시대 역대 왕과 왕비의 신주를 모신 유교 사당입니다." }
  ],
  "4. 창덕궁": [
    { name: "창덕궁", lat: 37.5794, lng: 126.9910, address: "서울특별시 종로구 율곡로 99", desc: "조선 시대의 궁궐 중 하나로 자연 지형과 조화를 이룬 아름다운 정원이 특징입니다." }
  ],
  "5. 화성": [
    { name: "수원 화성", lat: 37.2856, lng: 127.0142, address: "경기도 수원시 장안구 영화동 320-2", desc: "조선 정조 때 축조된 성곽으로 군사적 방어 기능과 예술적 가치를 동시에 지닙니다." }
  ],
  "6. 경주역사유적지구": [
    { name: "남산지구", lat: 35.8055, lng: 129.2288, address: "경상북도 경주시 배동", desc: "불교 미술의 보물창고라 불리는 경주 남산의 유적 지구입니다." },
    { name: "월성지구", lat: 35.8315, lng: 129.2231, address: "경상북도 경주시 월성동 860", desc: "신라의 왕성이 위치했던 월성 일대의 역사 공간입니다." },
    { name: "대릉원지구", lat: 35.8381, lng: 129.2135, address: "경상북도 경주시 황남동 53", desc: "신라 시대의 대형 고분들이 모여 있는 역사적인 공간입니다." },
    { name: "황룡사지구", lat: 35.8353, lng: 129.2314, address: "경상북도 경주시 구황동 806-2", desc: "웅장했던 황룡사의 터가 보존되어 있는 사적지입니다." },
    { name: "산성지구", lat: 35.8201, lng: 129.2512, address: "경상북도 경주시 보문동", desc: "명활산성을 포함한 방어 유적 지구입니다." }
  ],
  "7. 고창ㆍ화순ㆍ강화 고인돌 유적": [
    { name: "고창 고인돌 유적", lat: 35.5034, lng: 126.6351, address: "전북특별자치도 고창군 아산면 상갑리 275-2", desc: "다양한 형식의 고인돌이 밀집해 있는 세계적인 선사시대 유적입니다." },
    { name: "화순 고인돌 유적", lat: 34.9814, lng: 126.9312, address: "전라남도 화순군 도곡면 효산리 1335-3", desc: "채석장 흔적과 거대한 고인돌 형태가 잘 보존되어 있습니다." },
    { name: "강화 고인돌 유적", lat: 37.7431, lng: 126.4812, address: "인천광역시 강화군 하점면 강화대로 994-19", desc: "탁자식 고인돌의 대표적인 형태를 보여주는 유적입니다." }
  ],
  "8. 제주화산섬과 용암동굴": [
    { name: "한라산 천연보호구역", lat: 33.3617, lng: 126.5292, address: "제주 제주시 영평동 산15-1", desc: "화산 지형과 다양한 생태계를 품은 남한 최고봉입니다." },
    { name: "성산일출봉 천연보호구역", lat: 33.4588, lng: 126.9425, address: "제주 서귀포시 성산읍 성산리 1", desc: "바다 위에 솟은 수성화산의 대표적인 지형입니다." },
    { name: "거문오름 용암동굴계 상류동굴군", lat: 33.5352, lng: 126.7114, address: "제주특별자치도 제주시 구좌읍 덕천리 910", desc: "세계적으로 가치 있는 화산 동굴 시스템입니다." },
    { name: "선흘리 벵뒤굴", lat: 33.5182, lng: 126.6623, address: "제주 제주시 조천읍 선흘리 365-1", desc: "미로형 용암동굴입니다." },
    { name: "김녕굴", lat: 33.5421, lng: 126.7612, address: "제주 제주시 구좌읍 김녕리", desc: "다양한 용암 생성물이 있는 동굴입니다." },
    { name: "만장굴", lat: 33.5283, lng: 126.7717, address: "제주 제주시 구좌읍 만장굴길 182", desc: "세계적인 규모의 용암동굴입니다." },
    { name: "용천동굴", lat: 33.5512, lng: 126.7934, address: "제주 제주시 구좌읍 월정리 1837-2", desc: "탄산염 생성물이 발달한 아름다운 용암동굴입니다." },
    { name: "당처물동굴", lat: 33.5523, lng: 126.7945, address: "제주 제주시 구좌읍 월정리 1457", desc: "독특한 동굴 호수가 발견된 유적입니다." }
  ],
  "9. 조선왕릉": [
    { name: "조선왕릉 군락 전체", lat: 37.6608, lng: 127.1447, address: "경기도 (30기), 서울 (9기), 강원 (1기), 북한 (2기)", desc: "조선 시대 왕과 왕비의 무덤으로 유교적 철학이 담겨 있습니다." }
  ],
  "10. 한국의 역사마을 : 하회와 양동": [
    { name: "안동 하회마을", lat: 36.5415, lng: 128.5158, address: "경북 안동시 풍천면 전서로 186", desc: "풍산 류씨의 동성마을로 전통 가옥과 문화가 잘 보존되어 있습니다." },
    { name: "경주 양동마을", lat: 36.0094, lng: 129.2486, address: "경북 경주시 강동면 양동리 125", desc: "조선 시대 양반 가옥과 전통 가옥이 어우러진 유서 깊은 마을입니다." }
  ],
  "11. 남한산성": [
    { name: "남한산성", lat: 37.4793, lng: 127.1845, address: "경기 광주시 남한산성면 산성리 산23", desc: "비상도시이자 조선 시대의 대표적인 산성 방어시설입니다." }
  ],
  "12. 백제역사유적지구": [
    { name: "공주 공산성", lat: 36.4631, lng: 127.1239, address: "충남 공주시 금성동 53-51", desc: "백제 수도 시절의 방어용 성곽입니다." },
    { name: "공주 무령왕릉과 왕릉원", lat: 36.4589, lng: 127.1245, address: "충남 공주시 왕릉로 37", desc: "백제 무령왕과 왕비의 무덤이 있는 왕릉원입니다." },
    { name: "부여 관북리유적", lat: 36.2831, lng: 126.9212, address: "충남 부여군 부여읍 부소로 13", desc: "사비 시대 백제의 왕궁 관련 유적입니다." },
    { name: "부여 부소산성", lat: 36.2847, lng: 126.9189, address: "충남 부여군 부여읍 부소로 31", desc: "사비 시대 백제의 역사가 서려 있는 유적입니다." },
    { name: "부여 정림사지", lat: 36.2792, lng: 126.9134, address: "충남 부여군 부여읍 정림로 83", desc: "백제 사비 시대의 대표적인 사찰 터와 오층석탑이 있습니다." },
    { name: "부여 왕릉원", lat: 36.2745, lng: 126.9267, address: "충남 부여군 부여읍 능산리 388-1", desc: "백제 왕실의 무덤들이 모여 있는 곳입니다." },
    { name: "부여 나성", lat: 36.2731, lng: 126.9312, address: "충남 부여군 부여읍 능산리 산67", desc: "사비 도성을 보호하기 위해 쌓은 외곽성입니다." },
    { name: "익산 왕궁리유적", lat: 35.9876, lng: 127.0211, address: "전북 익산시 왕궁면 궁성로 666 왕궁리유적전시장", desc: "백제 무왕 때의 왕궁 터입니다." },
    { name: "익산 미륵사지", lat: 36.0125, lng: 127.0341, address: "전북 익산시 금마면 기양리 32-7", desc: "백제 최대의 사찰 터로 석탑이 유명합니다." }
  ],
  "13. 산사, 한국의 산지 승원": [
    { name: "양산 통도사", lat: 35.4854, lng: 129.0658, address: "경상남도 양산시 통도사로 108", desc: "부처님의 진신사리를 모신 한국의 삼보사찰 중 하나입니다." },
    { name: "영주 부석사 무량수전", lat: 36.9961, lng: 128.6873, address: "경상북도 영주시 부석사로 345", desc: "무량수전이 있는 아름다운 화엄 종찰입니다." },
    { name: "안동 봉정사 극락전", lat: 36.6433, lng: 128.6272, address: "경북 안동시 서후면 봉정사길 222", desc: "한국 현존 최고의 목조건물이 있는 사찰입니다." },
    { name: "보은 법주사", lat: 36.5458, lng: 127.8286, address: "충북 보은군 속리산면 사내리 산1-1", desc: "속리산에 위치하며 국보 팔상전이 있는 고찰입니다." },
    { name: "공주 마곡사", lat: 36.5914, lng: 126.9075, address: "충청남도 공주시 사곡면 운암리 567", desc: "태화산 자락에 자리 잡은 전통 사찰입니다." },
    { name: "순천 선암사", lat: 34.9964, lng: 127.3403, address: "전라남도 순천시 승주읍 선암사길 450", desc: "조계산의 아름다운 자연과 승선교로 유명한 사찰입니다." },
    { name: "해남 대흥사", lat: 34.4828, lng: 126.6347, address: "전라남도 해남군 삼산면 구림리 766", desc: "두륜산의 수려한 산세를 배경으로 한 대규모 사찰입니다." }
  ],
  "14. 한국의 서원": [
    { name: "소수서원", lat: 36.9881, lng: 128.5303, address: "경북 영주시 순흥면 소백로 2740", desc: "한국 최초의 사액서원입니다." },
    { name: "도산서원", lat: 36.6897, lng: 128.8911, address: "경북 안동시 도산면 도산서원길 154", desc: "퇴계 이황의 학문과 덕행을 기리는 서원입니다." },
    { name: "병산서원", lat: 36.5331, lng: 128.4631, address: "경북 안동시 풍천면 병산길 386", desc: "낙동강과 병산의 절경이 어우러진 건축물입니다." },
    { name: "옥산서원", lat: 36.0358, lng: 129.1728, address: "경북 경주시 안강읍 옥산서원길 216-27", desc: "회재 이언적을 배향한 조선 시대 서원입니다." },
    { name: "도동서원", lat: 35.6547, lng: 128.4239, address: "대구 달성군 구지면 도동서원로 1", desc: "한훤당 김굉필의 학문을 기리는 서원입니다." },
    { name: "남계서원", lat: 35.5414, lng: 127.7331, address: "경남 함양군 수동면 남계서원길 8-11", desc: "두 번째로 창건된 유서 깊은 서원입니다." },
    { name: "필암서원", lat: 35.3131, lng: 126.7917, address: "전라남도 장성군 황룡면 필암서원로 184", desc: "하서 김인후를 배향한 서원입니다." },
    { name: "무성서원", lat: 35.6125, lng: 126.8394, address: "전북 정읍시 칠보면 원촌1길 44-12", desc: "최치원의 위패를 모신 향교 및 서원입니다." },
    { name: "돈암서원", lat: 36.2308, lng: 127.1558, address: "충남 논산시 연산면 임3길 26-14", desc: "사계 김장생의 학문과 덕행을 추모하는 서원입니다." }
  ],
  "15. 한국의 갯벌": [
    { name: "서천갯벌", lat: 36.0528, lng: 126.5756, address: "충남 서천군 비인면 선도리", desc: "철새들의 주요 낙원이자 생태 가치가 높은 갯벌입니다." },
    { name: "고창갯벌", lat: 35.5539, lng: 126.5317, address: "전북 고창군 심원면 두어리", desc: "다양한 해양 생물이 서식하는 청정 갯벌입니다." },
    { name: "신안갯벌", lat: 34.8425, lng: 126.1311, address: "전라남도 신안군 자은면 한운리", desc: "세계 최고 수준의 퇴적 구조를 지닌 광활한 갯벌입니다." },
    { name: "보성-순천갯벌", lat: 34.8361, lng: 127.4264, address: "전라남도 순천시 별량면 마산리", desc: "S자 갈대숲과 칠면조 군락이 어우러진 생태의 보물창고입니다." }
  ],
  "16. 가야고분군": [
    { name: "김해 대성동고분군", lat: 35.2289, lng: 128.8781, address: "경남 김해시 가야의길 126", desc: "금관가야의 지배층 무덤 유적입니다." },
    { name: "말이산고분군", lat: 35.2756, lng: 128.4064, address: "경남 함안군 가야읍 고분길 153-31", desc: "아라가야의 고분 밀집 지역입니다." },
    { name: "합천 옥전 고분군", lat: 35.5658, lng: 128.1633, address: "경남 합천군 쌍책면 성산리", desc: "다야 국가의 강력한 세력을 보여주는 고분군입니다." },
    { name: "지산동고분군", lat: 35.7289, lng: 128.2592, address: "경북 고령군 대가야읍 지산리", desc: "대가야의 독창적인 무덤 양식이 남은 유적입니다." },
    { name: "고성 송학동고분군", lat: 34.9786, lng: 128.3181, address: "경남 고성군 고성읍 송학리 470", desc: "소가야의 역사적 흔적이 담긴 고분군입니다." },
    { name: "유곡리와 두락리고분군", lat: 35.4821, lng: 127.5214, address: "전북 남원시 인월면 성내길 49-5", desc: "가야 문화의 영역 확장을 보여주는 고분군입니다." },
    { name: "교동과 송현동고분군", lat: 35.5412, lng: 128.4923, address: "경남 창녕군 창녕읍", desc: "비화가야의 지배층 무덤 유적입니다." }
  ],
  "17. 반구천의 암각화": [
    { name: "울주 대곡리 반구대 암각화", lat: 35.5947, lng: 129.1914, address: "울산 울주군 언양읍 대곡리 산234-1", desc: "선사 시대 고래와 동물 사냥 모습이 새겨진 세계적 바위 그림입니다." }
  ]
};

let map = null;
let activeMarkers = [];
let myLocationMarker = null;
let userLat = null;
let userLng = null;

kakao.maps.load(function() {
  const mapContainer = document.getElementById('map');
  const categoryListEl = document.getElementById('category-list');
  const panelContent = document.getElementById('panel-content');
  const placeholder = document.getElementById('placeholder');
  const categoryTitle = document.getElementById('category-title');
  const subLocationsList = document.getElementById('sub-locations-list');
  const detailCard = document.getElementById('detail-card');
  const mapOverlayInfo = document.getElementById('map-overlay-info');
  const selectedCatName = document.getElementById('selected-cat-name');
  const resetMapBtn = document.getElementById('reset-map-btn');
  const closeDetailBtn = document.getElementById('close-detail-btn');

  const mapOption = {
    center: new kakao.maps.LatLng(36.5, 127.5),
    level: 12
  };
  map = new kakao.maps.Map(mapContainer, mapOption);

  // 인앱 모달(팝업 레이어) 생성
  const modalEl = document.createElement('div');
  modalEl.id = 'route-modal';
  modalEl.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:9999; justify-content:center; align-items:center;";
  modalEl.innerHTML = `
    <div style="background:#1e1e1e; width:85%; max-width:900px; height:80vh; border-radius:12px; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
      <div style="display:flex; justify-content:space-between; align-items:center; padding:15px 20px; background:#2a2a2a; border-bottom:1px solid #333;">
        <h3 id="modal-title" style="color:white; margin:0; font-size:16px;">🚌 대중교통 길찾기 안내</h3>
        <button id="close-modal-btn" style="background:none; border:none; color:white; font-size:20px; cursor:pointer; font-weight:bold;">&times;</button>
      </div>
      <div style="flex:1; background:white; position:relative;">
        <iframe id="route-iframe" src="" style="width:100%; height:100%; border:none;"></iframe>
      </div>
    </div>
  `;
  document.body.appendChild(modalEl);

  const routeModal = document.getElementById('route-modal');
  const routeIframe = document.getElementById('route-iframe');
  const modalTitle = document.getElementById('modal-title');
  
  document.getElementById('close-modal-btn').onclick = () => {
    routeModal.style.display = 'none';
    routeIframe.src = '';
  };

  // 상단 '세계유산 만나러 가기' 버튼 생성
  const controlPanel = document.createElement('div');
  controlPanel.style.cssText = "position: absolute; top: 15px; right: 15px; z-index: 10; display: flex; gap: 8px;";
  controlPanel.innerHTML = `
    <button id="find-me-btn" style="background:#2563eb; color:white; border:none; padding:10px 16px; border-radius:8px; font-weight:bold; cursor:pointer; box-shadow:0 4px 6px rgba(0,0,0,0.1);">✨ 세계유산 만나러 가기</button>
  `;
  mapContainer.appendChild(controlPanel);

  document.getElementById('find-me-btn').onclick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLat = position.coords.latitude;
          userLng = position.coords.longitude;
          const locPosition = new kakao.maps.LatLng(userLat, userLng);

          if (myLocationMarker) {
            myLocationMarker.setMap(null);
          }

          const mySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="#2563eb" stroke="#ffffff" stroke-width="3"/><circle cx="18" cy="18" r="6" fill="#ffffff"/></svg>`;
          const myMarkerImg = new kakao.maps.MarkerImage('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(mySvg), new kakao.maps.Size(32, 32));

          myLocationMarker = new kakao.maps.Marker({
            position: locPosition,
            image: myMarkerImg
          });
          myLocationMarker.setMap(map);
          map.setCenter(locPosition);
          map.setLevel(7);
          alert("현재 위치가 설정되었습니다! 유산을 선택해 거리와 길찾기를 확인해보세요.");
        },
        () => {
          alert("위치 정보를 가져올 수 없습니다. 위치 권한을 확인해주세요.");
        }
      );
    } else {
      alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
    }
  };

  function createMarker(loc, category) {
    const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="#1e1e1e" stroke="#ffffff" stroke-width="3" /><circle cx="18" cy="18" r="6" fill="#ff4d4d" /></svg>`;
    const markerImage = new kakao.maps.MarkerImage('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgIcon), new kakao.maps.Size(32, 32));

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(loc.lat, loc.lng),
      image: markerImage
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      showDetail(loc, category);
      map.setLevel(5);
      map.panTo(new kakao.maps.LatLng(loc.lat, loc.lng));
    });

    marker.setMap(map);
    activeMarkers.push(marker);
    return marker;
  }

  function showAllMarkers() {
    clearMarkers();
    Object.entries(heritageData).forEach(([category, locations]) => {
      locations.forEach(loc => {
        createMarker(loc, category);
      });
    });
  }

  showAllMarkers();

  Object.keys(heritageData).forEach(category => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.innerText = category;
    btn.onclick = () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showCategoryLocations(category);
    };
    categoryListEl.appendChild(btn);
  });

  function showCategoryLocations(category) {
    const locations = heritageData[category];
    if (!locations) return;

    placeholder.classList.add('hidden');
    detailCard.classList.add('hidden');
    panelContent.classList.remove('hidden');

    categoryTitle.innerText = category;
    subLocationsList.innerHTML = '';
    mapOverlayInfo.classList.remove('hidden');
    selectedCatName.innerText = category;

    clearMarkers();
    const bounds = new kakao.maps.LatLngBounds();

    locations.forEach(loc => {
      const card = document.createElement('div');
      card.className = 'location-card';
      card.innerHTML = `<h4>${loc.name}</h4><p>📍 ${loc.address}</p>`;
      card.onclick = () => {
        showDetail(loc, category);
        map.setLevel(5);
        map.panTo(new kakao.maps.LatLng(loc.lat, loc.lng));
      };
      subLocationsList.appendChild(card);

      const marker = createMarker(loc, category);
      bounds.extend(marker.getPosition());
    });

    map.setBounds(bounds);
  }

  function showDetail(loc, category) {
    detailCard.classList.remove('hidden');
    document.getElementById('detail-category-badge').innerText = category;
    document.getElementById('detail-title').innerText = loc.name;
    document.getElementById('detail-address').innerText = `📍 ${loc.address}`;

    let infoArea = document.getElementById('distance-info-area');
    if (!infoArea) {
      infoArea = document.createElement('div');
      infoArea.id = 'distance-info-area';
      infoArea.style.cssText = "margin-top: 15px; padding-top: 12px; border-top: 1px solid #333;";
      detailCard.appendChild(infoArea);
    }

    let distanceText = "📍 우측 상단의 '세계유산 만나러 가기'를 먼저 눌러주세요.";
    let routeBtnHtml = "";

    if (userLat !== null && userLng !== null) {
      const dist = calculateDistance(userLat, userLng, loc.lat, loc.lng);
      distanceText = `📏 내 위치에서 직선 거리: <b>~${dist} km</b>`;
      routeBtnHtml = `
        <button id="open-route-modal" style="width:100%; margin-top:10px; background:#ffeb00; color:#1e1e1e; text-align:center; padding:10px; border-radius:6px; font-weight:bold; border:none; cursor:pointer;">
           🚌 대중교통 길찾기 (내 위치 연동)
        </button>
      `;
    }

    infoArea.innerHTML = `
      <p style="font-size:13px; color:#aaa; margin-bottom:8px;">${distanceText}</p>
      ${routeBtnHtml}
    `;

    // 길찾기 버튼 클릭 시 정확한 좌표 기반 카카오맵 길찾기 URL 생성
    const openRouteBtn = document.getElementById('open-route-modal');
    if (openRouteBtn) {
      openRouteBtn.onclick = () => {
        modalTitle.innerText = `🚌 [내 위치 ➔ ${loc.name}] 대중교통 길찾기`;
        
        if (userLat !== null && userLng !== null) {
          routeIframe.src = `https://map.kakao.com/link/to/${encodeURIComponent(loc.name)},${loc.lat},${loc.lng}/from/내 위치,${userLat},${userLng}`;
        } else {
          routeIframe.src = `https://map.kakao.com/link/to/${encodeURIComponent(loc.name)},${loc.lat},${loc.lng}`;
        }

        routeModal.style.display = 'flex';
      };
    }

    const descEl = document.getElementById('detail-desc');
    if (descEl) {
      descEl.innerText = "";
    }
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function clearMarkers() {
    activeMarkers.forEach(marker => marker.setMap(null));
    activeMarkers = [];
  }

  resetMapBtn.onclick = () => {
    map.setCenter(new kakao.maps.LatLng(36.5, 127.5));
    map.setLevel(12);
    mapOverlayInfo.classList.add('hidden');
    panelContent.classList.add('hidden');
    detailCard.classList.add('hidden');
    placeholder.classList.remove('hidden');
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    showAllMarkers();
  };

  closeDetailBtn.onclick = () => {
    detailCard.classList.add('hidden');
  };
});