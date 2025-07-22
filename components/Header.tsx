import React from 'react';
import { SearchIcon } from './Icons.tsx';

interface HeaderProps {
    navigateTo: (page: string) => void;
    currentPage: string;
}

const Header = ({ navigateTo, currentPage }: HeaderProps) => (
    <header>
        <div className="top-banner">
             <div className="scrolling-text-container">
                <div className="scrolling-text">
                    <span>나지금2기 절찬리 모집 중!! 지난 1기 혜택(포스팅 10건 500만원 선불지금)</span>
                    <span>25년 크라우드워커 모집중!)</span>
                    <span> 크라우드워커 1차 출금신청 8/1일~5일까지 !)</span>                  
                </div>
            </div>
        </div>
        <div className="main-header">
            <div className="container">
                <div className="header-left">
                    <button onClick={() => navigateTo('home')} className="logo-btn" aria-label="블로그 나지금 홈으로"><span className="logo">나<span>지금</span></span></button>
                    <nav className="main-nav" aria-label="메인 네비게이션">
                        <button onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'active' : ''}>캠페인 찾는중</button>
                        <button onClick={() => navigateTo('news')} className={currentPage === 'news' ? 'active' : ''}>읽는 중</button>
                        <button onClick={() => navigateTo('analysis')} className={currentPage === 'analysis' ? 'active' : ''}>블로그 분석중</button>
                        <button onClick={() => navigateTo('taking')} className={currentPage === 'taking' ? 'active' : ''}>응시중</button>
                        <button onClick={() => navigateTo('pointMall')} className={currentPage === 'pointMall' ? 'active' : ''}>포인트몰</button>
                        <button onClick={() => navigateTo('hotDeal')} className={currentPage === 'hotDeal' ? 'active' : ''}>핫딜환급중</button>
                        <button onClick={() => navigateTo('home')}>고객센터</button>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="search-bar">
                        <SearchIcon />
                        <input type="search" placeholder="무엇이든 물어보세요?" aria-label="캠페인 검색" />
                    </div>
                    <div className="user-auth">
                        <a href="#">로그인 중</a><span>·</span><a href="#">회원가입 중</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;