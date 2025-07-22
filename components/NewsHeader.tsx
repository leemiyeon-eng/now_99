import React from 'react';
import { SearchIcon } from './Icons.tsx';

export const NewsTopBar = () => (
    <div className="news-top-bar">
        <div className="container">
            <div className="news-top-left">
                <a href="#"> 나지금 메인 가기</a>
            </div>
            <div className="news-top-right">
                <a href="#">로그인</a>
                <a href="#">메일</a>
                <a href="#">뉴스</a>
                <a href="#">판</a>
                <a href="#">TV</a>
                <a href="#">툰앤북</a>
                <a href="#">만화</a>
                <a href="#">게임</a>
                <a href="#">쇼핑</a>
                <a href="#">더보기</a>
            </div>
        </div>
    </div>
);

export const NewsMainHeader = () => (
    <div className="news-main-header">
        <div className="container">
            <a href="#" className="news-logo">
                <img src="https://i.imgur.com/k2wBv1i.png" alt="Nate News" />
            </a>
            <div className="news-search">
                <input type="text" />
                <button><SearchIcon size={20} /></button>
            </div>
            <div className="news-header-links">
                <a href="#">스포츠</a>
                <a href="#">연예</a>
                <a href="#">판</a>
                <a href="#">날씨</a>
            </div>
        </div>
    </div>
);

export const NewsNavBar = () => (
    <nav className="news-nav-bar">
        <div className="container">
            <a href="#">홈</a>
            <a href="#">최신뉴스</a>
            <a href="#">정치</a>
            <a href="#">경제</a>
            <a href="#" className="active">사회</a>
            <a href="#">세계</a>
            <a href="#">IT/과학</a>
            <a href="#">칼럼</a>
            <a href="#">포토</a>
            <a href="#">TV</a>
            <a href="#">라디오</a>
            <a href="#">랭킹뉴스</a>
            <a href="#">투데이댓글</a>
        </div>
    </nav>
);
