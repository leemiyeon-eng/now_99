
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.tsx';
import { toPng } from 'html-to-image';
import { NewsTopBar, NewsMainHeader, NewsNavBar } from './components/NewsHeader.tsx';
import {
    ArrowRightIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CloseIcon,
    BlogAnalysisIcon,
    BlogTipIcon,
    TextCountIcon,
    KeywordIcon,
    InfoIcon,
    LinkIcon,
    CommentIcon,
    ViewIcon,
    FileIcon,
    NewspaperIcon,
    UpvoteIcon,
    DownvoteIcon,
    ImageIcon,
    PencilIcon,
    GlobeIcon
} from './components/Icons.tsx';

// --- Data --- //
const campaignsData = [
    { id: 1, title: "나지금 키워드미션 A", description: "원고료 6,000원 제공!", image: { type: 'special', text: '상금 : 1,500,000원!' }, details: "D-25", tags: [{ text: "나지금1기 수료자", type: "new" }, { text: "키워드 난이도 A", type: "type-service" }, { text: "인테리어", type: "type-keyword" }], reward: "6,000P" },
    { id: 2, title: "나지금 키워드미션B", description: "마음경 미니 어플 1개월 사용권 무료 제공!", image: { type: 'special', text: '상금 : 1,000,000원!' }, details: "D-2", tags: [{ text: "나지금1기 수료중", type: "recommend" }, { text: "키워드 난이도 A", type: "type-service" }, { text: "인테리어", type: "type-keyword" }], applicants: "신청 0 / 10", reward: null },
    { id: 3, title: "나지금 키워드미션C", description: "마음경 미니 어플 1개월 사용권 무료 제공!", image: { type: 'special', text: '상금 : 500,000원!' }, details: "D-2", tags: [{ text: "일반신청자", type: "type-general" },{ text: "키워드 난이도 B", type: "type-service" }, { text: "인테리어", type: "type-keyword" }], applicants: "신청 0 / 10", reward: null },
    { id: 4, title: "쿠션팩트 포스팅", description: "원고료 100,000원 제공!", image: { type: 'placeholder' }, details: "매주 10명 모집", tags: [{ text: "추천", type: "recommend" }, { text: "기자단", type: "type-reporter" }], applicants: "신청 40 / 30", reward: "12,000P" },
    { id: 5, title: "나지금 소개", description: "원고료 20,000원 제공!", image: { type: 'placeholder' }, details: "D-3", tags: [{ text: "추천", type: "recommend" }, { text: "NEW", type: "new" }, { text: "기자단", type: "type-reporter" }], applicants: "신청 22 / 10", reward: "20,000P" },
];

const slidesData = [
    { id: 'analytics', background: 'var(--bg-dark)', content: { badge: 'NEW NEW NEW', title: <>블로그 분석 기능이<br />출시되었어요</>, subtitle: '블로그 아이디를 입력하고, 월 예상 금액을 확인해 보세요', buttonText: '블로그 분석 바로가기', buttonClass: 'btn-green', buttonIcon: true }, image: <div className="slide-image-placeholder analytics-image" role="img" aria-label="Application screenshots"></div> },
    { id: 'welcome', background: 'linear-gradient(90deg, #c38c73 0%, #a88d7b 50%, #7d7e79 100%)', content: { badge: 'EVENT', title: <>게시글 읽기만 해도<br /><strong>13,000 포인트</strong> 지급</>, buttonText: '자세히 보기', buttonClass: 'btn-white', }, image: ( <div className="slide-image-placeholder welcome-card-wrapper"> <div className="welcome-card"> <div className="welcome-card-content"> <span className="point-text">Welcome<br />Point</span> <span className="point-amount">3,000</span> <span className="point-logo">NoW</span> </div> </div> </div> ) },
    { id: 'mobile', background: 'linear-gradient(90deg, #f88c5d, #f65c4e)', content: { title: <>나지금 일하는 중 <br /><strong>크라우드워커</strong> 모집!</>, subtitle: 'AI 선생님되고, 쏠쏠한 수익까지~', buttonText: '지원하러 가기', buttonClass: 'btn-white', }, image: <div className="slide-image-placeholder phone-mockup" role="img" aria-label="App on mobile phone"></div> },
    { id: 'refund', background: '#fdf4e3', className: 'slide-light', content: { preTitle: '뭐? 포인트를 현금으로 환급할 수 있다고??', title: <>나지금 포인트,<br /><strong>현금으로 환급 가능!</strong></>, buttonText: '자세히 보기', buttonClass: 'btn-blue', }, },
    { id: 'widget', background: '#ff8a3d', content: { badge: 'EVENT', title: <>나지금 배너 달면<br /><strong>포인트지급 200% UP!</strong></>, buttonText: '자세히 보기', buttonClass: 'btn-dark', }, image: <div className="slide-image-placeholder widget-image" role="img" aria-label="App widgets"></div> }
];

const takingSlidesData = [
    {
        id: 'applicant-special',
        background: 'linear-gradient(90deg, #4a00e0, #8e2de2)',
        content: {
            badge: '수료자 전용',
            title: <>블로그 전문가를 위한<br /><strong>특별 캠페인</strong></>,
            subtitle: '최고의 리워드를 받을 수 있는 기회를 놓치지 마세요!',
            buttonText: '지금 확인하기',
            buttonClass: 'btn-white',
            buttonIcon: true
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="A shining medal"><span style={{fontSize: '100px'}}>🏅</span></div>
    },
    {
        id: 'application-tip',
        background: 'linear-gradient(to right, #eef2f3, #8e9eab)',
        className: 'slide-light',
        content: {
            title: <>지원서 작성, <br /><strong>합격률을 높이는 TIP!</strong></>,
            subtitle: '나지금 블로그 스쿨 전문가가 알려주는 지원서 작성법',
            buttonText: '가이드 보기',
            buttonClass: 'btn-dark',
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="Document with a checkmark"><span style={{fontSize: '100px'}}>📝✅</span></div>
    },
    {
        id: 'announcement',
        background: 'linear-gradient(to right, #fdbb2d, #22c1c3)',
        content: {
            badge: '발표',
            title: <><strong>'나지금 2기'</strong><br />선발 결과 안내</>,
            subtitle: '지원해주신 모든 분들께 감사드립니다.',
            buttonText: '결과 확인하기',
            buttonClass: 'btn-white',
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="Megaphone"><span style={{fontSize: '100px'}}>📢</span></div>
    }
];

const readingSlidesData = [
    {
        id: 'read-and-earn',
        background: 'linear-gradient(to right, #0072ff, #00c6ff)',
        content: {
            badge: 'POINT EVENT',
            title: <>뉴스만 읽어도<br /><strong>포인트가 차곡차곡!</strong></>,
            subtitle: '흥미로운 기사를 읽고 리워드도 받아가세요.',
            buttonText: '지금 기사 읽기',
            buttonClass: 'btn-white',
            buttonIcon: true
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="Stack of coins and a newspaper"><span style={{fontSize: '100px'}}>📰💰</span></div>
    },
    {
        id: 'hot-topic',
        background: 'linear-gradient(to right, #e52d27, #b31217)',
        content: {
            badge: 'HOT TOPIC',
            title: <>오늘의 가장 뜨거운<br /><strong>실시간 이슈 확인하기</strong></>,
            subtitle: '세상의 모든 소식을 가장 빠르게 만나보세요.',
            buttonText: '실시간 뉴스 보기',
            buttonClass: 'btn-white',
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="Flame icon"><span style={{fontSize: '100px'}}>🔥</span></div>
    },
    {
        id: 'best-comment',
        background: 'linear-gradient(to right, #fffc00, #ffffff)',
        className: 'slide-light',
        content: {
            title: <>베스트 댓글에 도전하고<br /><strong>추가 포인트</strong>를 받으세요!</>,
            subtitle: '당신의 날카로운 분석과 재치있는 의견을 보여주세요.',
            buttonText: '댓글 쓰러 가기',
            buttonClass: 'btn-dark',
        },
        image: <div className="slide-image-placeholder" role="img" aria-label="Trophy and speech bubble"><span style={{fontSize: '100px'}}>🏆💬</span></div>
    }
];

const bestCommentsData = [
    { rank: 1, title: '윤석열 측 "尹, 북한 무인기 보내는 것까지 보고받지…', user: 'pcs7****', time: '07.15 09:55', source: '뉴시스', sourceTime: '07.15 09:31', content: '드론사령관이 군통수권자 허락없이 무인기를 평양상공으로 날려보냈다? 잘못하면 전쟁이 벌어질수있는데? ㅋㅋㅋㅋ ㅋㅋㅋㅋ', replies: 1, upvotes: 548, downvotes: 13 },
    { rank: 2, title: '윤석열 측 "尹, 북한 무인기 보내는 것까지 보고받지…', user: 'code****', time: '07.15 09:52', source: '뉴시스', sourceTime: '07.15 09:31', content: '그러면 드론 사령관은 군형법상 불법전투개시 해병인데 형량은 사형 감당 되겠어?', replies: 5, upvotes: 486, downvotes: 16 },
    { rank: 3, title: '윤석열 측 "尹, 북한 무인기 보내는 것까지 보고받지…', user: 'dlck****', time: '07.15 09:31', source: '뉴시스', sourceTime: '07.15 09:31', content: '아무것도 안했는데 군인들은 미쳐서 무장한 상태로 국회에 헬기로 내려서고 무인기는 스스로 북한 평상 상공으로 날아가? 이것 좀 봐~신기하지? 하며 빌빌 선회하고. 넌 아무것도 한게 없는데 그치 석열아?', replies: 2, upvotes: 467, downvotes: 11 },
    { rank: 4, title: '내란특검 "尹 강제구인 지휘 불이행 서울구치소에 책…', user: 'pert****', time: '07.15 13:24', source: '연합뉴스', sourceTime: '07.15 13:18', content: '내란수괴대행이 임명한 서울구치소장이니까 같은 패거리이지', replies: 3, upvotes: 438, downvotes: 17 },
    { rank: 5, title: '내란특검 "尹 강제구인 지휘 불이행 서울구치소에 책…', user: 'pjh9****', time: '07.15 13:23', source: '연합뉴스', sourceTime: '07.15 13:18', content: '구치소 소장도 수상하다!!', replies: 3, upvotes: 421, downvotes: 19 },
    { rank: 6, title: '진짜 장마 온다…내일 오후부터 토요일까지 전국에 …', user: 'myli****', time: '07.15 12:32', source: '연합뉴스', sourceTime: '07.15 11:55', content: '며칠 전에는 전문가가 나와서 장마 끝났다고 하더니. 한국은 전문가도 없구나. 그래서 노벨상도 안 나오나?', replies: 10, upvotes: 405, downvotes: 16 },
    { rank: 7, title: '용인, 일본 아니고 한국인데…韓·日전 \'오후 7시24…', user: 'dskr****', time: '07.15 09:14', source: '엑스포츠뉴스', sourceTime: '07.15 08:44', content: '정용규 이 멍청한 새끼야', replies: 10, upvotes: 402, downvotes: 15 },
];

const practiceTestData = [
    {
        id: 1,
        questionText: "반려견의 사회화를\n망가뜨리는 원인으로 가장 옳지 않은 것은?",
        options: [
            "퍼피시절 모견과 너무 이른 분리로 인한 스트레스와 사회화 기회 박탈",
            "예방 접종이 완료되기 전까지 산책하지 않아\n너무 늦은 시기의 사회화 시작",
            "사회성이 좋지 않은 반려견들과 만남으로 인한 부정적 감정의 형성",
            "너무 적은 산책량으로 인한 사회화 경험 부족",
            "퍼피 시기 잦은 보호자 변경으로 인한 환경 변화"
        ],
        correctAnswerIndex: 3
    },
    {
        id: 2,
        questionText: "강아지가 초콜릿을 먹었을 때 가장 먼저 해야 할 일은 무엇인가요?",
        options: [
            "물을 많이 마시게 한다.",
            "즉시 동물병원에 데려간다.",
            "집에서 구토를 유도한다.",
            "다른 간식을 줘서 희석시킨다.",
            "편안하게 잠을 재운다."
        ],
        correctAnswerIndex: 1
    },
    {
        id: 3,
        questionText: "고양이의 '꾹꾹이' 행동의 의미로 가장 거리가 먼 것은 무엇인가요?",
        options: [
            "보호자에 대한 애정과 신뢰의 표현",
            "편안함과 안정감을 느끼고 있다는 표시",
            "어릴 적 어미젖을 빨던 행동의 연장선",
            "자신의 체취를 묻혀 영역을 표시하는 행동",
            "상대방을 공격하기 위한 준비 자세"
        ],
        correctAnswerIndex: 4
    }
];

const skincareTestData = [
    {
        id: 1,
        questionText: "올바른 세안법의 마무리 단계로 가장 추천되는 물의 온도는?",
        options: [
            "뜨거운 물",
            "미지근한 물",
            "찬물",
            "얼음물",
            "상관없음"
        ],
        correctAnswerIndex: 2
    },
    {
        id: 2,
        questionText: "자외선 차단제의 'SPF' 지수가 의미하는 것은 무엇인가요?",
        options: [
            "자외선 A(UVA) 차단 지수",
            "자외선 B(UVB) 차단 지수",
            "미백 효과 지수",
            "수분 함유량 지수",
            "피부 자극 지수"
        ],
        correctAnswerIndex: 1
    },
    {
        id: 3,
        questionText: "다음 중 피부 노화의 가장 큰 외부적 요인은 무엇인가요?",
        options: [
            "건조한 환경",
            "잘못된 식습관",
            "스트레스",
            "자외선",
            "부족한 수면"
        ],
        correctAnswerIndex: 3
    }
];

const noiseTestData = [
    {
        id: 1,
        questionText: "실내에서 '사뿐치'를 높이기 위한 가장 좋은 방법은 무엇인가요?",
        options: [
            "뒤꿈치로 쿵쿵 걷기",
            "슬리퍼를 신고 걷기",
            "까치발로 다니기",
            "점프하며 이동하기",
            "큰 소리로 음악 틀기"
        ],
        correctAnswerIndex: 1
    },
    {
        id: 2,
        questionText: "늦은 밤이나 이른 새벽에 세탁기, 청소기 사용을 자제해야 하는 이유는?",
        options: [
            "전기 요금이 비싸서",
            "기계 수명이 단축되어서",
            "진동과 소음이 아래층에 전달될 수 있어서",
            "물이 샐 수 있어서",
            "먼지가 많이 날려서"
        ],
        correctAnswerIndex: 2
    },
    {
        id: 3,
        questionText: "아이들이 있는 집에서 층간소음을 줄이기 위한 효과적인 방법이 아닌 것은?",
        options: [
            "놀이매트 깔기",
            "실내화를 신도록 교육하기",
            "뛰거나 점프하는 놀이는 자제시키기",
            "가구를 끌지 않도록 주의하기",
            "밤늦게 신나게 뛰어놀게 하기"
        ],
        correctAnswerIndex: 4
    }
];

const pointMallData = [
  { id: 1, name: '10만원 현금환급', price: '100,000P', img: 'https://i.imgur.com/Kq2jFzE.png', tag: '100,000원 지급' },
  { id: 2, name: '5만원 현금환급', price: '50,000P', img: 'https://i.imgur.com/Kq2jFzE.png', tag: '50,000원 지금' },
  { id: 3, name: '블로그스쿨 1대1 멘토링', price: '148,900P', img: 'https://i.imgur.com/iC5e2A4.png', specialOverlay: { line1: '블로그스쿨', line2: '1대1 멘토링' }, sub: '인플루언서 성공 비법 공개!' },
  { id: 4, name: '도트북 기능성노트 5권', price: '25,000P', img: 'https://i.imgur.com/gK9p2zR.png', sub: '답답한 오늘에서 벗어나자!' },
  { id: 5, name: '바른자세 서포트 체어 커블체어 와이더', price: '59,800P', img: 'https://i.imgur.com/9O04g8X.png', hot: true },
  { id: 6, name: '바른자세 서포트 체어 커블체어 키즈', price: '54,900P', img: 'https://i.imgur.com/s6W5g8J.png', hot: true },
  { id: 7, name: 'CKI 헤어드라이기', price: '41,500P', img: 'https://i.imgur.com/lJ4d7eX.png', sub: 'CKI-D303' },
  { id: 8, name: '네오스마트펜 M1', price: '170,000P', img: 'https://i.imgur.com/cW2O1kM.png', sub: 'Neo smartpen M1' },
  { id: 9, name: '샤오미 7세대 보조배터리', price: '58,900P', img: 'https://i.imgur.com/tX6H2fN.png', sub: '20000m Ah 2C' },
  { id: 10, name: '삼성 C27R502 68cm 커브드 모니터', price: '224,000P', img: 'https://i.imgur.com/J8e8g1O.png', sub: '삼성 C27R502 68cm' },
  { id: 11, name: '테팔 전기 커피포트 올레아', price: '69,900P', img: 'https://i.imgur.com/pY9t4fF.png', sub: 'KI160D 1.7L' },
  { id: 12, name: '오아 무드가습기 500', price: '67,900P', img: 'https://i.imgur.com/w1j3a4c.png', sub: '모델명: W0010' },
];

const hotDealData = [
  { id: 1, name: '게이밍 마우스 G-PRO', price: '49,000P', originalPrice: '89,000P', discount: '45%', img: 'https://i.imgur.com/gX1y4Oa.png', sub: '초경량 고성능' },
  { id: 2, name: '기계식 키보드 DECK-108', price: '125,000P', originalPrice: '180,000P', discount: '31%', img: 'https://i.imgur.com/5O8wZ2b.png', sub: 'PBT 이중사출 키캡' },
  { id: 3, name: '4K 웹캠 STREAM-CAM', price: '78,000P', originalPrice: '110,000P', discount: '29%', img: 'https://i.imgur.com/uG5v5Ym.png', sub: '오토포커스 기능' },
  { id: 4, name: '서큘레이터 AIR-COOL', price: '35,000P', originalPrice: '60,000P', discount: '42%', img: 'https://i.imgur.com/bF2JgP9.png', sub: '저소음 BLDC 모터' },
  { id: 5, name: '블루투스 스피커 SOUND-GO', price: '55,000P', originalPrice: '95,000P', discount: '42%', img: 'https://i.imgur.com/6S3d3eF.png', hot: true, sub: 'IPX7 방수 등급' },
  { id: 6, name: '스마트 워치 FIT-WATCH', price: '89,000P', originalPrice: '150,000P', discount: '41%', img: 'https://i.imgur.com/uR2R1eF.png', hot: true, sub: '심박수 및 산소포화도 측정' },
  { id: 7, name: '무선이어폰 TWS-AIR', price: '62,000P', originalPrice: '105,000P', discount: '41%', img: 'https://i.imgur.com/zW3b3fG.png', sub: '노이즈 캔슬링' },
  { id: 8, name: '캡슐 커피머신 CAFE-ONE', price: '99,000P', originalPrice: '160,000P', discount: '38%', img: 'https://i.imgur.com/vH2i2nS.png', sub: '19바 압력' },
];


// --- Components --- //

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    contentClassName?: string;
}
const Modal = ({ onClose, children, contentClassName }: ModalProps) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className={`modal-content ${contentClassName || ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                <CloseIcon />
            </button>
            {children}
        </div>
    </div>
);

const CampaignCard = ({ campaign, isClickable, onClick }) => (
    <div
        className={`campaign-card ${isClickable ? 'clickable' : ''}`}
        onClick={onClick}
        aria-labelledby={`campaign-title-${campaign.id}`}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={isClickable ? (e) => { if (e.key === 'Enter') onClick(); } : undefined}
    >
        <div className={`card-image-placeholder ${campaign.image.type === 'special' ? 'special' : ''} ${campaign.image.type === 'placeholder' ? 'placeholder-style' : ''}`}>
           {campaign.image.type === 'placeholder' ? '[이미지 준비중]' : (campaign.image.text && <pre>{campaign.image.text}</pre>)}
        </div>
        <div className="card-content">
            <h3 id={`campaign-title-${campaign.id}`}>
                <span style={{ color: '#888', display: 'block', fontSize: '12px' }}>{campaign.description}</span>
                {campaign.title}
            </h3>
            <div className="card-info">
                <span>{campaign.details}</span>
            </div>
            {campaign.tags.length > 0 && (
                <div className="card-tags">
                    {campaign.tags.map(tag => (
                        <span key={tag.text + tag.type} className={`tag ${tag.type}`}>{tag.text}</span>
                    ))}
                </div>
            )}
             <div className="card-footer">
                <span className="applicants">{campaign.applicants}</span>
                {campaign.reward && <span className="reward">리워드 {campaign.reward}</span>}
            </div>
        </div>
    </div>
);

const CampaignsSection = ({ onCampaignClick }) => (
    <section className="campaigns-section" aria-labelledby="campaigns-heading">
        <div className="container">
            <div className="section-header">
                <h2 id="campaigns-heading">추천 캠페인</h2>
                <button className="view-more">더 보기</button>
            </div>
            <div className="campaign-grid">
                {campaignsData.map(campaign => {
                    const isClickable = campaign.id === 1 || campaign.id === 2;
                    return (
                        <CampaignCard
                            key={campaign.id}
                            campaign={campaign}
                            isClickable={isClickable}
                            onClick={isClickable ? () => onCampaignClick(campaign.id) : undefined}
                        />
                    );
                })}
            </div>
        </div>
    </section>
);

interface SlideContent {
    preTitle?: string;
    badge?: string;
    title: React.ReactNode;
    subtitle?: string;
    buttonText: string;
    buttonClass: string;
    buttonIcon?: boolean;
}

interface Slide {
    id: string;
    background: string;
    className?: string;
    content: SlideContent;
    image?: React.ReactNode;
}

const HeroCarousel: React.FC<{ slides: Slide[] }> = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length), 5000);
        return () => resetTimeout();
    }, [activeIndex, slides]);

    const goToSlide = (slideIndex: number) => setActiveIndex(slideIndex);
    const goToPrev = () => setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    const goToNext = () => setActiveIndex((activeIndex + 1) % slides.length);

    return (
        <section className="hero-carousel" aria-roledescription="carousel" aria-label="Promotional Banners">
            <div className="carousel-wrapper">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`slide ${slide.className || ''} ${index === activeIndex ? 'active' : ''}`} style={{ background: slide.background }} aria-hidden={index !== activeIndex}>
                        <div className="container">
                            <div className={`slide-content ${slide.id === 'refund' ? 'centered' : ''}`}>
                                {slide.content.preTitle && <p className="pre-title">{slide.content.preTitle}</p>}
                                {slide.content.badge && <p className="badge">{slide.content.badge}</p>}
                                <h1>{slide.content.title}</h1>
                                {slide.content.subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: slide.content.subtitle.replace('\n', '<br/>') }}></p>}
                                <button className={`slide-button ${slide.content.buttonClass}`}>
                                    {slide.content.buttonText} {slide.content.buttonIcon && <ArrowRightIcon />}
                                </button>
                            </div>
                            {slide.image && <div className="slide-image">{slide.image}</div>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button onClick={goToPrev} className="carousel-control prev" aria-label="Previous slide"><ChevronLeftIcon /></button>
                <button onClick={goToNext} className="carousel-control next" aria-label="Next slide"><ChevronRightIcon /></button>
            </div>
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={`dot ${index === activeIndex ? 'active' : ''}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
            </div>
        </section>
    );
};

const HomePage = ({ onCampaignClick }) => (
    <main>
        <HeroCarousel slides={slidesData} />
        <CampaignsSection onCampaignClick={onCampaignClick} />
    </main>
);

// --- Blog Analysis Page Components ---
const AnalysisNav = () => (
    <nav className="analysis-nav">
        <button className="analysis-nav-item active"><BlogAnalysisIcon /><span>블로그 분석</span></button>
        <button className="analysis-nav-item"><BlogTipIcon /><span>블로그 TIP</span></button>
        <button className="analysis-nav-item"><TextCountIcon /><span>글자 수 세기</span></button>
        <button className="analysis-nav-item"><KeywordIcon /><span>키워드 조합</span></button>
    </nav>
);

const AnalysisStatCard = ({ label, value, tag, tagColor }: { label: string; value: string; tag?: string; tagColor?: string; }) => (
    <div className="stat-card">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {tag && <div className={`stat-tag ${tagColor}`}>{tag}</div>}
    </div>
);

const VisitorChart = () => (
    <div className="chart-container">
        <h4>방문자 수 통계</h4>
        <div className="bar-chart">
            <div className="bar-item" style={{ height: '90%' }}><span className="bar-label">2025.07.08</span></div>
            <div className="bar-item" style={{ height: '85%' }}><span className="bar-label">2025.07.09</span></div>
            <div className="bar-item" style={{ height: '70%' }}><span className="bar-label">2025.07.10</span></div>
            <div className="bar-item" style={{ height: '75%' }}><span className="bar-label">2025.07.11</span></div>
            <div className="bar-item" style={{ height: '60%' }}><span className="bar-label">2025.07.12</span></div>
        </div>
    </div>
);

const ScoreGauge = () => (
    <div className="chart-container">
        <h4>내 블로그의 점수는?</h4>
        <div className="score-gauge">
            <div className="gauge-content">
                <div>평균 점수 : 5점</div>
                <div className="gauge-main-text">내 블로그의 점수는 <br /><strong>10점</strong>입니다.</div>
            </div>
        </div>
    </div>
);

const PostItem = ({ post }) => (
    <li className={`post-item ${post.highlight ? 'highlight' : ''}`}>
        <div className="post-tags">
            {post.tags.map(tag => <span key={tag.text} className={`post-tag ${tag.type}`}>{tag.text}</span>)}
        </div>
        <div className="post-main">
            <div className="post-icon"><FileIcon/></div>
            <div className="post-details">
                <div className="post-title-line">
                    <span className={`post-user-tag ${post.userTag.type}`}>{post.userTag.text}</span>
                    <h5 className="post-title">{post.title}</h5>
                </div>
                <p className="post-description">{post.description}</p>
            </div>
        </div>
        <div className="post-meta">
            <span className="post-meta-item"><LinkIcon /> {post.date}</span>
            <span className="post-meta-item"><CommentIcon /> {post.comments}</span>
            {post.views && <span className="post-meta-item"><ViewIcon /> {post.views}</span>}
        </div>
    </li>
);

const RecentPostsSection = () => {
    const [activeTab, setActiveTab] = useState('all');
    const posts = [
        { id: 1, highlight: true, tags: [{text: '긍정', type: 'positive'}, {text: '협찬고객', type: 'sponsored'}], userTag: {text: 'blog', type: 'blog'}, title: '모공커버 쿠션 추천 이더엔 쿠션&세미 매트', description: '협찬고객이 이더엔 쿠션 제품 사용 후기를 상세히 공유했습니다. 촉촉함과 커버력 등 긍정적 특성을 강조했습니다.', date: '2025.03.17', comments: 2 },
        { id: 2, highlight: true, tags: [{text: '긍정', type: 'positive'}, {text: '협찬고객', type: 'sponsored'}], userTag: {text: '제제', type: 'user'}, title: '올리브영 추천 VDL 커버스테인하이커버쿠션 여름용 모공커버 베이스로 딱!', description: '협찬고객이 VDL 커버스테인하이커버 쿠션 사용 후기를 공유했습니다. 모공커버와 지속력에 대해 높은 만족도를 표현했습니다.', date: '2025.05.29', comments: 17 },
        { id: 3, highlight: false, tags: [{text: '긍정', type: 'positive'}, {text: '협찬고객', type: 'sponsored'}], userTag: {text: '다람', type: 'user'}, title: '모공커버 여름쿠션 올리브영 추천! VDL 커버스테인 하이커버', description: '협찬고객이 VDL 커버스테인 하이커버 쿠션 사용 후기를 공유했습니다. 커버력과 지속력에 대한 높은 만족도를 표현했습니다.', date: '2025.05.29', comments: 13 },
        { id: 4, highlight: false, tags: [{text: '중립', type: 'neutral'}, {text: '일반고객', type: 'general'}], userTag: {text: '♡´·-', type: 'user'}, title: '세미매트쿠션 로트리 1호 포슬린 사용 후기', description: '일반고객이 로트리 1호 포슬린 사용 후기를 공유했습니다. 세미매트 피팅감과 모공 커버 효과를 설명했습니다. 가벼운 텍스처와 자연스러운 커버력으로 데일리 메이크업에 적합하다고 평가했습니다.', date: '2025.07.09', comments: 1 },
        { id: 5, highlight: false, tags: [{text: '중립', type: 'neutral'}, {text: '협찬고객', type: 'sponsored'}], userTag: {text: '별밤', type: 'user'}, title: '웨이크메이크 심리스 심리스 웨어 커버 쿠션 추천템으로 모공 커버 끝!', description: '협찬고객이 웨이크메이크 신제품 심리스 심리스 웨어 커버 쿠션을 소개했습니다. 제품 특징과 프로모션 정보를 상세히 안내했습니다.', date: '2025.03.31', comments: 3 },
        { id: 6, highlight: false, tags: [{text: '긍정', type: 'positive'}, {text: '협찬고객', type: 'sponsored'}], userTag: {text: '의주뷰티', type: 'user'}, title: '24시간 모공커버 * 메이크업 지속 OK 쏘내추럴 파우더포룸 수분쿨링 메이크업픽서', description: '협찬고객이 쏘내추럴 메이크업픽서 사용 후기를 상세히 공유했습니다. 제품 특징과 프로모션 정보를 상세히 안내했습니다.', date: '2025.05.28', comments: 2 },
        { id: 7, highlight: false, tags: [{text: '중립', type: 'neutral'}, {text: '일반고객', type: 'general'}], userTag: {text: '천아베베(…', type: 'user'}, title: '모공 커버 절실해요', description: '특정 브랜드 언급 없이 모공 고민과 쿠션 제품에 대해 문의했습니다. 브랜드 연관성 없는 일반적인 뷰티 관련 경험문의입니다.', date: '2025.06.09', views: 226, comments: 5 }
    ];

    return (
        <section className="recent-posts-section">
            <div className="posts-header">
                <h3>최근 포스트</h3>
                <button className="toggle-posts">^</button>
            </div>
            <div className="post-tabs">
                <span className="tab-title">모공커버</span>
                <button className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>전체 7</button>
                <button className={`tab ${activeTab === 'positive' ? 'active' : ''}`} onClick={() => setActiveTab('positive')}>긍정 4</button>
                <button className={`tab ${activeTab === 'neutral' ? 'active' : ''}`} onClick={() => setActiveTab('neutral')}>중립 3</button>
            </div>
            <div className="posts-list-container">
                 <div className="posts-list-header">
                    <h4>- 패션·미용 인기글</h4>
                    <span className="new-badge">NEW 7</span>
                </div>
                <ul className="post-list">
                    {posts.map(post => <PostItem key={post.id} post={post} />)}
                </ul>
            </div>
        </section>
    );
}

const BestCommentItem = ({ comment }) => {
    const isTopThree = comment.rank <= 3;
    return (
        <li className="best-comment-item">
            <div className={`rank-badge ${isTopThree ? 'gold' : 'silver'}`}>
                <span>Best</span>
                <span className="rank-number">{comment.rank}</span>
            </div>
            <div className="comment-content-wrapper">
                <div className="comment-title-section">
                    <p className="comment-item-title">{comment.title}</p>
                    <span className="comment-source">{comment.source} | {comment.sourceTime}</span>
                </div>
                <div className="comment-user-info">
                    <span className="comment-user">{comment.user}</span>
                    <span className="comment-time">{comment.time}</span>
                </div>
                <p className="comment-body">
                    <NewspaperIcon /> {comment.content}
                </p>
                <div className="comment-footer">
                    <button className="comment-replies">댓글의 댓글 {comment.replies}</button>
                    <div className="comment-votes">
                        <button className="vote-item upvote"><UpvoteIcon /> 추천</button>
                        <span className="vote-count">{comment.upvotes}</span>
                        <button className="vote-item downvote"><DownvoteIcon /> 반대</button>
                        <span className="vote-count">{comment.downvotes}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};


const BestCommentsSection = () => {
    return (
        <section className="best-comments-section">
            <div className="best-comments-header">
                <h3>투데이 베스트 댓글</h3>
                <div className="date-selector">
                    <button className="active">일간</button>
                    <input type="date" defaultValue="2025-07-15" />
                    <button>주간</button>
                </div>
            </div>
            <ul className="best-comments-list">
                {bestCommentsData.map(comment => <BestCommentItem key={comment.rank} comment={comment} />)}
            </ul>
        </section>
    );
};

const BlogAnalysisPage = () => (
    <main className="analysis-page container">
        <AnalysisNav />
        <div className="analysis-content">
            <header className="analysis-header">
                <h2>블로그 분석</h2>
                <p>블로그 아이디를 입력하고, 내 블로그 영향력을 확인해 보세요!</p>
            </header>
            <div className="analysis-search-bar">
                <SearchIcon size={24} />
                <input type="text" defaultValue="sooyeon1202" />
                <button>검색하기</button>
            </div>
            <div className="analysis-result-tags">
                <div className="result-tag">
                    <span className="tag-label">블로그 아이디</span>
                    <span className="tag-value">sooyeon1202</span>
                </div>
                <div className="result-tag">
                    <span className="tag-label">블로그 이름</span>
                    <span className="tag-value">수여니 뷰티 | 네이버 블로그</span>
                </div>
                 <button className="go-to-blog-btn">블로그 바로가기 &rarr;</button>
            </div>
             <div className="analysis-results-grid">
                <AnalysisStatCard label="오늘 랭킹" value="15,608" tag="좋음" tagColor="green" />
                <AnalysisStatCard label="오늘 적립금" value="20,698" />
                <AnalysisStatCard label="총 적립금" value="21,185,000" />
                <AnalysisStatCard label="오늘 방문자" value="15,608" tag="좋음" tagColor="green" />
                <AnalysisStatCard label="평균 방문자" value="20,698" />
                <AnalysisStatCard label="전체 방문자" value="3,181,973" />
                <AnalysisStatCard label="블로그 지수" value="4.97점" tag="좋음" tagColor="green" />
                <AnalysisStatCard label="이웃 수" value="8,383명" />
                <AnalysisStatCard label="게시글 수" value="2923" />
            </div>
             <div className="analysis-charts-grid">
                <VisitorChart />
                <ScoreGauge />
            </div>
            <div className="tip-banner">
                <InfoIcon />
                <span>블로그 TIP 게시판에서 블로그 점수를 높이는 방법을 알아보세요.</span>
                <button>블로그 Tip 바로가기 &rarr;</button>
            </div>
            <RecentPostsSection />
            <BestCommentsSection />
        </div>
    </main>
);

const ReadingPage = () => (
    <main>
        <HeroCarousel slides={readingSlidesData} />
    </main>
);

const PetTestNotice = ({ onOpenNoiseTestModal, onOpenPracticeTestModal, onOpenSkincareTestModal }) => (
    <section className="pet-test-notice-section">
        <div className="container">
            <div className="notice-block" role="button" tabIndex={0} onClick={onOpenNoiseTestModal}>
                <h3>2025 층간소음 사뿐사뿐! 사뿐치 테스트</h3>
                <div className="notice-details">
                    <p>나의 사뿐치는 과연 몇점일까?</p>
                </div>
            </div>
            <div className="notice-block" role="button" tabIndex={0} onClick={onOpenPracticeTestModal}>
                <h3>2025 반려인능력시험 온라인 필기시험 공지</h3>
            </div>
            <div className="notice-block" role="button" tabIndex={0} onClick={onOpenSkincareTestModal}>
                <h3>2025 제 1회 스킨케어 능력시험</h3>
            </div>
            <div className="notice-block" role="button" tabIndex={0}>
                <h3>2025 반려인능력시험 시험응시</h3>
                 <div className="notice-details">
                    <p>9월 7일(일) 오전 10 : 30 부터 입장 가능합니다.</p>
                    <p>시험 시작 30분 전부터 입장 가능합니다.</p>
                </div>
            </div>
        </div>
    </section>
);

const TestCertificate = () => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (certificateRef.current === null) {
            return;
        }
        try {
            const dataUrl = await toPng(certificateRef.current, { cacheBust: true });
            const link = document.createElement('a');
            link.download = '2025-반려인능력시험-응시확인증.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('oops, something went wrong!', err);
        }
    };

    return (
        <div className="test-certificate-wrapper">
            <div className="test-certificate-container" ref={certificateRef}>
                <div className="certificate-header">
                    <h2 className="certificate-main-title">2025 반려인능력시험</h2>
                    <h3 className="certificate-subtitle">응시 확인증</h3>
                </div>
                <div className="certificate-info">
                    <div className="info-field">
                        <span>부문</span>
                        <span>강아지</span>
                    </div>
                    <div className="info-field">
                        <span>이름</span>
                        <span>나지금</span>
                    </div>
                </div>
                <div className="certificate-body">
                    <p>귀하는 서울시와 나지금 Pet가 공동으로 주최하는</p>
                    <p className="highlight">'2025 서울시x나지금 PET 반려인능력시험'에</p>
                    <p>응시하였음을 확인합니다.</p>
                    <br />
                    <p>좋은 반려인이 되기위한 귀하의 노력에 박수를 보내며</p>
                    <p>반려동물과 행복한 날들만 가득하길 기원합니다.</p>
                </div>
            </div>
            <button className="download-btn" onClick={handleDownload}>다운로드</button>
        </div>
    );
};


const PracticeTestModalContent = () => {
    const [questions] = useState(practiceTestData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectOption = (optionIndex: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return <TestCertificate />;
    }

    return (
        <div className="practice-test-modal">
            <div className="practice-test-header">
                <h3>{`2025 반려인 능력시험 모의고사 (${currentQuestionIndex + 1}/${questions.length})`}</h3>
            </div>
            <div className="practice-test-body">
                <div className="question-block">
                    <span className="question-q">Q.</span>
                    <p className="question-text" style={{ whiteSpace: 'pre-line' }}>{currentQuestion.questionText}</p>
                </div>
                <ul className="options-list">
                    {currentQuestion.options.map((option, index) => (
                        <li
                            key={index}
                            className={`option-item ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectOption(index); }}
                            aria-pressed={selectedAnswers[currentQuestionIndex] === index}
                        >
                            <span className="option-number">{index + 1}</span>
                            <span className="option-text" style={{ whiteSpace: 'pre-line' }}>{option}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="practice-test-footer">
                <span>후원사 : 펫후</span>
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                >
                    {currentQuestionIndex < questions.length - 1 ? '다음 문제 ▶' : '결과 보기 ▶'}
                </button>
            </div>
        </div>
    );
};

const SkincareTestCertificate = () => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (certificateRef.current === null) {
            return;
        }
        try {
            const dataUrl = await toPng(certificateRef.current, { cacheBust: true });
            const link = document.createElement('a');
            link.download = '2025-스킨케어능력시험-응시확인증.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('oops, something went wrong!', err);
        }
    };

    return (
        <div className="test-certificate-wrapper">
            <div className="test-certificate-container skincare-certificate" ref={certificateRef}>
                <div className="certificate-header">
                    <h2 className="certificate-main-title">2025 제 1회 스킨케어 능력시험</h2>
                    <h3 className="certificate-subtitle">응시 확인증</h3>
                </div>
                <div className="certificate-info">
                    <div className="info-field">
                        <span>부문</span>
                        <span>스킨케어</span>
                    </div>
                    <div className="info-field">
                        <span>이름</span>
                        <span>나지금</span>
                    </div>
                </div>
                <div className="certificate-body">
                    <p>귀하는 나지금 Beauty가 공동으로 주최하는</p>
                    <p className="highlight">'2025 제 1회 나지금 Beauty 스킨케어 능력시험'에</p>
                    <p>응시하였음을 확인합니다.</p>
                    <br />
                    <p>건강한 피부를 위한 귀하의 지식과 노력에 찬사를 보내며</p>
                    <p>늘 빛나는 피부와 함께 자신감 넘치는 날들이 계속되길 기원합니다.</p>
                </div>
            </div>
            <button className="download-btn" onClick={handleDownload}>다운로드</button>
        </div>
    );
};


const SkincareTestModalContent = () => {
    const [questions] = useState(skincareTestData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectOption = (optionIndex: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return <SkincareTestCertificate />;
    }

    return (
        <div className="practice-test-modal">
            <div className="practice-test-header">
                <h3>{`2025 제 1회 스킨케어 능력시험 모의고사 (${currentQuestionIndex + 1}/${questions.length})`}</h3>
            </div>
            <div className="practice-test-body">
                <div className="question-block">
                    <span className="question-q">Q.</span>
                    <p className="question-text" style={{ whiteSpace: 'pre-line' }}>{currentQuestion.questionText}</p>
                </div>
                <ul className="options-list">
                    {currentQuestion.options.map((option, index) => (
                        <li
                            key={index}
                            className={`option-item ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectOption(index); }}
                            aria-pressed={selectedAnswers[currentQuestionIndex] === index}
                        >
                            <span className="option-number">{index + 1}</span>
                            <span className="option-text" style={{ whiteSpace: 'pre-line' }}>{option}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="practice-test-footer">
                <span>후원사 : 뷰티인아시아, 투쿨포스쿨</span>
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                >
                    {currentQuestionIndex < questions.length - 1 ? '다음 문제 ▶' : '결과 보기 ▶'}
                </button>
            </div>
        </div>
    );
};

const NoiseTestCertificate = () => {
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleDownload = async () => {
        if (certificateRef.current === null) {
            return;
        }
        try {
            const dataUrl = await toPng(certificateRef.current, { cacheBust: true });
            const link = document.createElement('a');
            link.download = '2025-층간소음테스트-응시확인증.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('oops, something went wrong!', err);
        }
    };

    return (
        <div className="test-certificate-wrapper">
            <div className="test-certificate-container noise-certificate" ref={certificateRef}>
                <div className="certificate-header">
                    <h2 className="certificate-main-title">2025 층간소음 사뿐사뿐! 테스트</h2>
                    <h3 className="certificate-subtitle">응시 확인증</h3>
                </div>
                <div className="certificate-info">
                    <div className="info-field">
                        <span>부문</span>
                        <span>사뿐치 테스트</span>
                    </div>
                    <div className="info-field">
                        <span>이름</span>
                        <span>나지금</span>
                    </div>
                </div>
                <div className="certificate-body">
                    <p>귀하는 나지금 생활문화개선위원회가 주최하는</p>
                    <p className="highlight">'2025 층간소음 사뿐사뿐! 사뿐치 테스트'에</p>
                    <p>응시하여 우수한 사뿐치를 확인하였습니다.</p>
                    <br />
                    <p>이웃을 배려하는 당신의 따뜻한 마음에 감사를 표하며</p>
                    <p>모두가 행복한 공동 주거 문화가 이어지길 기원합니다.</p>
                </div>
            </div>
            <button className="download-btn" onClick={handleDownload}>다운로드</button>
        </div>
    );
};

const NoiseTestModalContent = () => {
    const [questions] = useState(noiseTestData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectOption = (optionIndex: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: optionIndex
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return <NoiseTestCertificate />;
    }

    return (
        <div className="practice-test-modal">
            <div className="practice-test-header">
                <h3>{`2025 층간소음 사뿐치 테스트 (${currentQuestionIndex + 1}/${questions.length})`}</h3>
            </div>
            <div className="practice-test-body">
                <div className="question-block">
                    <span className="question-q">Q.</span>
                    <p className="question-text" style={{ whiteSpace: 'pre-line' }}>{currentQuestion.questionText}</p>
                </div>
                <ul className="options-list">
                    {currentQuestion.options.map((option, index) => (
                        <li
                            key={index}
                            className={`option-item ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectOption(index); }}
                            aria-pressed={selectedAnswers[currentQuestionIndex] === index}
                        >
                            <span className="option-number">{index + 1}</span>
                            <span className="option-text" style={{ whiteSpace: 'pre-line' }}>{option}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="practice-test-footer">
                <span>후원사 : 환경보전원</span>
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                >
                    {currentQuestionIndex < questions.length - 1 ? '다음 문제 ▶' : '결과 보기 ▶'}
                </button>
            </div>
        </div>
    );
};


const TakingPage = ({ onOpenNoiseTestModal, onOpenPracticeTestModal, onOpenSkincareTestModal }) => (
    <main>
        <HeroCarousel slides={takingSlidesData} />
        <PetTestNotice 
            onOpenNoiseTestModal={onOpenNoiseTestModal}
            onOpenPracticeTestModal={onOpenPracticeTestModal}
            onOpenSkincareTestModal={onOpenSkincareTestModal}
        />
    </main>
);

const CampaignDetailPage = ({ onBack }) => (
    <main className="campaign-detail-page container">
        <aside className="detail-sidebar">
            <h3 className="sidebar-title">키워드 미션</h3>
            <ul>
                <li className="sidebar-item active">한샘바스</li>
            </ul>
        </aside>
        <section className="detail-main-content">
            <header className="detail-header">
                <div className="detail-tags">
                    <span className="tag recommend">추천</span>
                    <span className="tag new">NEW</span>
                    <span className="tag type-reporter">기자단</span>
                </div>
                <h1 className="detail-title">[서비스 기자단] 키워드 미션 2차</h1>
                <p className="detail-reward">리워드 12,000P</p>
                <p className="detail-status">신청 11 / 모집 10</p>
            </header>

            <div className="action-boxes">
                <div className="action-box">
                    <div className="label">리뷰어 모집</div>
                    <div className="value">매주 10명 모집</div>
                </div>
                <div className="arrow">&gt;</div>
                <div className="action-box">
                    <div className="label">리뷰 등록</div>
                    <div className="value">리뷰어 선정 후 7일 이내</div>
                </div>
                <div className="arrow">&gt;</div>
                <div className="action-box">
                    <div className="label">리뷰 마감</div>
                    <div className="value">리뷰 등록 1일 후</div>
                </div>
            </div>
            
            <button className="apply-button">리뷰어 신청 &gt;</button>

            <nav className="content-tabs">
                <button className="tab active">캠페인 정보</button>
                <button className="tab">신청 현황 11/10</button>
                <button className="tab">리뷰 (0)</button>
                <button className="list-button" onClick={onBack}>목록</button>
            </nav>

            <article className="campaign-body">
                <section className="info-section">
                    <h2 className="section-title"><span className="icon">🔑</span> 키워드 연금</h2>
                    <p>키워드연금 미션은 [지정 키워드의 지정영역]를 [지정영역]에 상위노출 되었을때 순위에 따른 일별 노출비용을 정산받는 미션입니다.</p>
                    <p>키워드연금 미션은 원고작성에 대한 별도의 고료는 지급되지 않습니다.</p>
                    <ul className="info-list">
                        <li>나지금 1기 수료 포스팅 완료 자격을 수여 받은 분은 기본 키워드 단가의 1.5배 ~ 3배 내외로 정산된 추가된 비용을 받게 됩니다.</li>
                    </ul>
                </section>
                
                <section className="info-section">
                    <h4 className="sub-title">지정키워드 및 영역</h4>
                     <ul className="info-list--styled">
                        <li><strong>한샘바스 as</strong> (띄어쓰기와 대소문자 동일할것)</li>
                        <li><strong>참고 링크 :</strong> www.naver.com</li>
                        <li><strong>영역 :</strong> 스마트블록 인테리어 DIY</li>
                    </ul>
                </section>

                <section className="info-section">
                    <h4 className="sub-title">1일 노출당 순위</h4>
                     <ul className="info-list--styled">
                        <li><strong>1위 :</strong> 20,000</li>
                        <li><strong>2위 :</strong> 10,000</li>
                        <li><strong>3위 :</strong> 5,000</li>
                    </ul>
                </section>
                
                <section className="info-section">
                     <h4 className="sub-title">인정기간</h4>
                     <p>7월 25일부터 8월 25일 한달간</p>
                </section>
                
                <section className="info-section">
                     <h4 className="sub-title">예시</h4>
                     <p>1위를 30일간 유지하면, 2만원 * 30일 = 60만원</p>
                </section>

                <section className="info-section precautions">
                     <h4 className="sub-title">** 주의사항</h4>
                     <ul>
                        <li>경쟁사비방 내용이 포함되면 안됩니다.</li>
                        <li>오타 및 해당 키워드 부정내용은 인정되지 않습니다.</li>
                        <li>AI를 활용하거나, 타인의 글을 도용하시면 안됩니다.</li>
                        <li>과거의 동일 소재 글의 이미지, 소재를 재구성하시는 것은 무방합니다.</li>
                     </ul>
                </section>

                <section className="info-section">
                     <h4 className="sub-title">참고자료</h4>
                     <ul className="info-list---bullet">
                        <li>기사</li>
                        <li>공식홈페이지, SNS</li>
                     </ul>
                </section>

                <section className="campaign-mission">
                     <h2 className="section-title">캠페인 미션</h2>
                     <div className="mission-items">
                        <div className="mission-item">
                            <ImageIcon />
                            <span>15장 이상</span>
                        </div>
                        <div className="mission-item">
                            <PencilIcon />
                            <span>1,500자<br/>(300단어) 이상</span>
                        </div>
                        <div className="mission-item">
                            <GlobeIcon />
                            <span>URL 삽입</span>
                        </div>
                     </div>
                </section>
            </article>
        </section>
    </main>
);

const PointMallProductCard = ({ product }) => (
    <div className="point-mall-card">
        <div className="point-mall-card-img-wrapper">
            <img src={product.img} alt={product.name} />
            {product.hot && <span className="hot-badge">HOT</span>}
            {product.specialOverlay && (
                <div className="special-overlay">
                    <p>{product.specialOverlay.line1}</p>
                    <p>{product.specialOverlay.line2}</p>
                </div>
            )}
        </div>
        <div className="point-mall-card-content">
            {product.tag && <p className="product-tag">{product.tag}</p>}
            {product.sub && <p className="product-sub">{product.sub}</p>}
            <h4 className="product-name">{product.name}</h4>
            <div className="product-price-wrapper">
                {product.discount && <span className="product-discount">{product.discount}</span>}
                <div className="product-price-group">
                    {product.originalPrice && <p className="product-original-price">{product.originalPrice}</p>}
                    <p className="product-price">{product.price}</p>
                </div>
            </div>
        </div>
    </div>
);

const PointMallPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = pointMallData.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pointMallData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <main className="point-mall-page container">
            <header className="point-mall-header">
                <h2>포인트몰</h2>
                <div className="point-mall-search-bar">
                    <input type="text" placeholder="상품 검색" />
                    <button>검색</button>
                </div>
            </header>
            <div className="point-mall-controls">
                <span>전체 상품 목록({pointMallData.length})</span>
                <div className="sort-options">
                    <button>최신순</button>
                    <button className="active">인기순</button>
                    <button>높은가격순</button>
                    <button>낮은가격순</button>
                </div>
            </div>
            <div className="point-mall-grid">
                {currentProducts.map(product => (
                    <PointMallProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </main>
    )
}

const HotDealPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = hotDealData.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(hotDealData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <main className="point-mall-page hot-deal-page container">
            <header className="point-mall-header">
                <h2>핫딜환급중</h2>
                <div className="point-mall-search-bar">
                    <input type="text" placeholder="상품 검색" />
                    <button>검색</button>
                </div>
            </header>
            <div className="point-mall-controls">
                <span>전체 상품 목록({hotDealData.length})</span>
                <div className="sort-options">
                    <button>최신순</button>
                    <button className="active">인기순</button>
                    <button>높은가격순</button>
                    <button>낮은가격순</button>
                </div>
            </div>
            <div className="point-mall-grid">
                {currentProducts.map(product => (
                    <PointMallProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </main>
    )
}


const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [activeModalId, setActiveModalId] = useState<number | null>(null);
    const [isPracticeTestModalOpen, setIsPracticeTestModalOpen] = useState(false);
    const [isSkincareTestModalOpen, setIsSkincareTestModalOpen] = useState(false);
    const [isNoiseTestModalOpen, setIsNoiseTestModalOpen] = useState(false);
    const [showAuthInput, setShowAuthInput] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const [authError, setAuthError] = useState('');

    const navigateTo = (page: string) => {
        setCurrentPage(page);
    };

    const handleCampaignClick = (id: number) => {
        setActiveModalId(id);
    };

    const handleCloseModal = () => {
        setActiveModalId(null);
        setShowAuthInput(false);
        setAuthCode('');
        setAuthError('');
    };
    
    const handleAuthSubmit = () => {
        if (authCode === '2022100') {
            handleCloseModal();
            navigateTo('campaignDetail');
        } else {
            setAuthError('인증번호가 올바르지 않습니다.');
            setAuthCode('');
        }
    };

    const openPracticeTestModal = () => setIsPracticeTestModalOpen(true);
    const closePracticeTestModal = () => setIsPracticeTestModalOpen(false);
    
    const openSkincareTestModal = () => setIsSkincareTestModalOpen(true);
    const closeSkincareTestModal = () => setIsSkincareTestModalOpen(false);

    const openNoiseTestModal = () => setIsNoiseTestModalOpen(true);
    const closeNoiseTestModal = () => setIsNoiseTestModalOpen(false);

    return (
        <>
            <Header navigateTo={navigateTo} currentPage={currentPage} />
            {currentPage === 'home' && <HomePage onCampaignClick={handleCampaignClick} />}
            {currentPage === 'analysis' && <BlogAnalysisPage />}
            {currentPage === 'news' && <ReadingPage />}
            {currentPage === 'taking' && <TakingPage onOpenNoiseTestModal={openNoiseTestModal} onOpenPracticeTestModal={openPracticeTestModal} onOpenSkincareTestModal={openSkincareTestModal} />}
            {currentPage === 'campaignDetail' && <CampaignDetailPage onBack={() => navigateTo('home')} />}
            {currentPage === 'pointMall' && <PointMallPage />}
            {currentPage === 'hotDeal' && <HotDealPage />}
            
            {activeModalId === 1 && (
                <Modal onClose={handleCloseModal}>
                    {!showAuthInput ? (
                         <>
                            <div className="modal-header">
                                <h2>나지금1기 수료자만 가능해요~!</h2>
                            </div>
                            <div className="modal-body">
                                 <p>이 캠페인은 '나지금 1기'를 수료하신 분들만 참여할 수 있습니다. 1기 수료자이시면 인증을 진행해주세요.</p>
                            </div>
                            <div className="modal-actions">
                                <button className="btn-modal btn-primary" onClick={() => setShowAuthInput(true)}>1기 인증하기</button>
                                <button className="btn-modal btn-secondary">2기 지원하기</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="modal-header">
                                <h2>1기 수료자 인증</h2>
                            </div>
                            <div className="modal-body">
                                <p>인증번호를 입력해주세요.</p>
                                <input
                                    type="text"
                                    className="auth-input"
                                    value={authCode}
                                    onChange={(e) => {
                                        setAuthCode(e.target.value);
                                        if (authError) setAuthError('');
                                    }}
                                    placeholder="인증번호 2022100"
                                    aria-label="인증번호 입력"
                                />
                                {authError && <p className="auth-error">{authError}</p>}
                            </div>
                            <div className="modal-actions">
                                <button className="btn-modal btn-primary" onClick={handleAuthSubmit}>인증 확인</button>
                                <button className="btn-modal btn-secondary" onClick={() => setShowAuthInput(false)}>뒤로 가기</button>
                            </div>
                        </>
                    )}
                </Modal>
            )}

            {activeModalId === 2 && (
                 <Modal onClose={handleCloseModal}>
                    <div className="modal-header">
                        <h2>나지금1기 수료중인 분들이 가능해요~!</h2>
                    </div>
                    <div className="modal-body">
                         <p>이 캠페인은 '나지금 1기'를 수료중인 분들도 참여할 수 있습니다. 1기 수료중이시면 인증을 진행해주세요.</p>
                    </div>
                    <div className="modal-actions">
                        <button className="btn-modal btn-primary">1기 인증하기</button>
                        <button className="btn-modal btn-secondary">2기 지원하기</button>
                    </div>
                </Modal>
            )}
            
            {isPracticeTestModalOpen && (
                <Modal onClose={closePracticeTestModal} contentClassName="practice-test-modal-container">
                    <PracticeTestModalContent />
                </Modal>
            )}

            {isSkincareTestModalOpen && (
                <Modal onClose={closeSkincareTestModal} contentClassName="practice-test-modal-container">
                    <SkincareTestModalContent />
                </Modal>
            )}

            {isNoiseTestModalOpen && (
                <Modal onClose={closeNoiseTestModal} contentClassName="practice-test-modal-container">
                    <NoiseTestModalContent />
                </Modal>
            )}
        </>
    );
};


// --- Render App --- //
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}