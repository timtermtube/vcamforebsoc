# Before to read
본 글은 한국어로만 작성되어 있습니다. The README was written in only Korean.

# 경고
일부 사이트에서 사용할 시 사이트가 렌더되지 않는 오류가 있습니다. 크롬 익스텐션 전역 변수 exceptions에 사이트의 주소를 (프로토콜 제외) 추가하십시오.
모든 getMediaDevices()에서 작동되지는 않습니다. 3월 21일 기준 Zoom은 브라우저 클라이언트 사용 시에 작동이 가능합니다.
소리 녹음을 지원하지 않습니다. 크롬 익스텐션을 쓰는 디바이스에서 따로 사운드 인풋이 가능한 디바이스를 사용하여야 합니다.
Discord를 포함한 일부 사이트에서 CORS 문제로 사용이 불가한 경우가 있습니다.
아울러, 사용 시 브라우저의 카메라 감지를 활성화해야 작동하는 앱들은 OBS 가상 카메라 설치가 필요합니다.

# 설명
4월부터 우리학교 온클이 전체 실시간으로 전환된다는 말이 있다던데 카메라사기 귀찮아서 WebRTC 기능 이용해서 폰이랑 컴퓨터 VideoInput Device를 chrome extension으로 연동시킴

# 요구 사항
Chrome Extension + WebRTC가 작동이 가능한 모든 브라우저
https ensure를 사용할 수 있는 서버용 하드웨어 1대

# 라이브러리 부재 시 (+ 사용 방법)
npm i express peer
sudo node index.js
