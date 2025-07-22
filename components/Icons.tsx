import React from 'react';

export const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);

export const SearchIcon = ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);


export const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);


export const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const BlogAnalysisIcon = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#E8F5E9"/><path d="M22 30.5C26.6944 30.5 30.5 26.6944 30.5 22C30.5 17.3056 26.6944 13.5 22 13.5C17.3056 13.5 13.5 17.3056 13.5 22C13.5 26.6944 17.3056 30.5 22 30.5Z" stroke="#4CAF50" strokeWidth="2"/><path d="M28.5 28.5L33.5 33.5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/></svg>;
export const BlogTipIcon = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#E3F2FD"/><path d="M14 19L24 14L34 19V30C34 30.9317 33.4646 31.7613 32.618 32.1492L24 36L15.382 32.1492C14.5354 31.7613 14 30.9317 14 30V19Z" stroke="#2196F3" strokeWidth="2"/><path d="M24 25L32 21" stroke="#2196F3" strokeWidth="2"/><path d="M24 25V36" stroke="#2196F3" strokeWidth="2"/><path d="M24 25L16 21" stroke="#2196F3" strokeWidth="2"/><path d="M20 17L28 13" stroke="#2196F3" strokeWidth="2"/></svg>;
export const TextCountIcon = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#F3E5F5"/><path d="M24 14V34" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round"/><path d="M18 14V34" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round"/><path d="M30 14V34" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round"/></svg>;
export const KeywordIcon = () => <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#FFF3E0"/><path d="M28 16H20C17.7909 16 16 17.7909 16 20V28C16 30.2091 17.7909 32 20 32H28C30.2091 32 32 30.2091 32 28V20C32 17.7909 30.2091 16 28 16Z" stroke="#FF9800" strokeWidth="2"/><path d="M24 21V27" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/><path d="M21 24H27" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/></svg>;
export const InfoIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFB74D"/><path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const LinkIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>;
export const CommentIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
export const ViewIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
export const FileIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="16" rx="2" fill="#F3F4F6"/><path d="M9 9H15" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 13H15" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 17H12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/></svg>
export const NewspaperIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'text-bottom', marginRight: '4px', color: '#9CA3AF'}}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8"></path>
        <path d="M2 16h8"></path><path d="M2 12h8"></path>
        <path d="M12 8h8"></path><path d="M12 16h8"></path>
    </svg>
);
export const UpvoteIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.33331L4 7.33331H6.66667V12.6666H9.33333V7.33331H12L8 3.33331Z" fill="#F44336"/></svg>;
export const DownvoteIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.6667L12 8.66669H9.33333V3.33334H6.66667V8.66669H4L8 12.6667Z" fill="#64748B"/></svg>;

export const ImageIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 3.75H2.75C2.47386 3.75 2.25 3.97386 2.25 4.25V19.75C2.25 20.0261 2.47386 20.25 2.75 20.25H21.25C21.5261 20.25 21.75 20.0261 21.75 19.75V4.25C21.75 3.97386 21.5261 3.75 21.25 3.75Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.75 10.75C8.44036 10.75 9 10.1904 9 9.5C9 8.80964 8.44036 8.25 7.75 8.25C7.05964 8.25 6.5 8.80964 6.5 9.5C6.5 10.1904 7.05964 10.75 7.75 10.75Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21.75 16.25L16.75 11.25L6.75 20.25" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const PencilIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 3.75L20.25 5.75" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.25 14.75L4.75 19.25L2.75 17.25L7.25 13.75" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.75 5.25L9.25 12.75L11.25 14.75L18.75 7.25L16.75 5.25Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export const GlobeIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.25 12H21.75" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2.25C14.5028 4.97542 15.9038 8.41212 16 12C15.9038 15.5879 14.5028 19.0246 12 21.75C9.49722 19.0246 8.09623 15.5879 8 12C8.09623 8.41212 9.49722 4.97542 12 2.25V2.25Z" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;