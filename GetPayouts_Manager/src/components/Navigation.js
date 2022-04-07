import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import HamburgerMenu from './HamburgerMenu';

const Navigation = (props)=>{
    return(
        <>
		{/* <!-- Promo Banner --> */}
		<nav class="bg-bg-4 sticky-top py-2 py-lg-2 concept-1" id="animate-nav">
			<div class="d-none d-lg-block">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						<div class="col-2">
						</div>
						<div class="text-center d-flex justify-content-center col-6">
							<a href="/login" class="fw-bold mx-4 text-light-1">
								Start your e-commerce shop - no monthly fees
							</a>
						</div>
						<div class="d-flex align-items-center justify-content-end col-2">
						</div>
					</div>
				</div>
			</div>
		</nav>
		{/* <!-- Navigation 1 --> */}
		<nav class="bg-bg-3 sticky-top py-4 py-lg-7">
			<div class="d-block">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-3">
							{/* <div class="d-flex align-items-center justify-content-end">
								<a href="/login" class="btn btn-sm btn-action-1 rounded-2">
									Dashboard
								</a>
							</div> */}
							<a href="/">
								{/* <span class="gradient-font logo-font">payouts</span> */}
								<img class="gradient-font logo-font" src="../../assets/payouts-beta.png" style={{height:"40px"}}/>
							</a>
						</div>
						<div class="col-6 text-center">
							<div class="text-center d-flex justify-content-center hide-mobile">
								<a target="_blank" href="https://main.d2s6xuy4eizex8.amplifyapp.com/home" class="fw-bold mx-4 text-dark-1">
									Live Demo
								</a>
								<a href="/pricing" class="fw-bold mx-4 text-dark-1">
									Pricing
								</a>
							</div>
							{/* <a href="/">
								<span class="gradient-font logo-font">payouts</span>
							</a> */}
						</div>
						<div class="col-3 d-flex align-items-center justify-content-end">
							<a href="#" class="btn btn-width-equal-height rounded-circle custom-mobile-nav-btn" id="home-cc"
								data-bs-toggle="offcanvas" data-bs-target="#custom-id-3e86u4fq">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="none"
									xmlns="http://www.w3.org/2000/svg" class="fill-light-1">
									<path
										d="M2.00016 5.33333H14.0002C14.177 5.33333 14.3465 5.2631 14.4716 5.13807C14.5966 5.01305 14.6668 4.84348 14.6668 4.66667C14.6668 4.48986 14.5966 4.32029 14.4716 4.19526C14.3465 4.07024 14.177 4 14.0002 4H2.00016C1.82335 4 1.65378 4.07024 1.52876 4.19526C1.40373 4.32029 1.3335 4.48986 1.3335 4.66667C1.3335 4.84348 1.40373 5.01305 1.52876 5.13807C1.65378 5.2631 1.82335 5.33333 2.00016 5.33333ZM14.0002 10.6667H2.00016C1.82335 10.6667 1.65378 10.7369 1.52876 10.8619C1.40373 10.987 1.3335 11.1565 1.3335 11.3333C1.3335 11.5101 1.40373 11.6797 1.52876 11.8047C1.65378 11.9298 1.82335 12 2.00016 12H14.0002C14.177 12 14.3465 11.9298 14.4716 11.8047C14.5966 11.6797 14.6668 11.5101 14.6668 11.3333C14.6668 11.1565 14.5966 10.987 14.4716 10.8619C14.3465 10.7369 14.177 10.6667 14.0002 10.6667ZM14.0002 7.33333H2.00016C1.82335 7.33333 1.65378 7.40357 1.52876 7.5286C1.40373 7.65362 1.3335 7.82319 1.3335 8C1.3335 8.17681 1.40373 8.34638 1.52876 8.4714C1.65378 8.59643 1.82335 8.66667 2.00016 8.66667H14.0002C14.177 8.66667 14.3465 8.59643 14.4716 8.4714C14.5966 8.34638 14.6668 8.17681 14.6668 8C14.6668 7.82319 14.5966 7.65362 14.4716 7.5286C14.3465 7.40357 14.177 7.33333 14.0002 7.33333Z">
									</path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="offcanvas offcanvas-end bg-bg-3" id="custom-id-3e86u4fq" aria-hidden="true">
				<div class="offcanvas-header">
					<a href="/">
						<img class="gradient-font logo-font" src="../../assets/payouts-beta.png" style={{height:"40px"}}/>
					</a>
					<a href="#" class="btn btn-sm btn-width-equal-height  btn-light-1" data-bs-dismiss="offcanvas">
						<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="fill-dark-2">
							<path
								d="M8.9398 8L13.1398 3.80667C13.2653 3.68113 13.3359 3.51087 13.3359 3.33333C13.3359 3.1558 13.2653 2.98554 13.1398 2.86C13.0143 2.73447 12.844 2.66394 12.6665 2.66394C12.4889 2.66394 12.3187 2.73447 12.1931 2.86L7.9998 7.06L3.80646 2.86C3.68093 2.73447 3.51066 2.66394 3.33313 2.66394C3.1556 2.66394 2.98533 2.73447 2.8598 2.86C2.73426 2.98554 2.66374 3.1558 2.66374 3.33333C2.66374 3.51087 2.73426 3.68113 2.8598 3.80667L7.0598 8L2.8598 12.1933C2.79731 12.2553 2.74771 12.329 2.71387 12.4103C2.68002 12.4915 2.6626 12.5787 2.6626 12.6667C2.6626 12.7547 2.68002 12.8418 2.71387 12.9231C2.74771 13.0043 2.79731 13.078 2.8598 13.14C2.92177 13.2025 2.99551 13.2521 3.07675 13.2859C3.15798 13.3198 3.24512 13.3372 3.33313 13.3372C3.42114 13.3372 3.50827 13.3198 3.58951 13.2859C3.67075 13.2521 3.74449 13.2025 3.80646 13.14L7.9998 8.94L12.1931 13.14C12.2551 13.2025 12.3288 13.2521 12.4101 13.2859C12.4913 13.3198 12.5785 13.3372 12.6665 13.3372C12.7545 13.3372 12.8416 13.3198 12.9228 13.2859C13.0041 13.2521 13.0778 13.2025 13.1398 13.14C13.2023 13.078 13.2519 13.0043 13.2857 12.9231C13.3196 12.8418 13.337 12.7547 13.337 12.6667C13.337 12.5787 13.3196 12.4915 13.2857 12.4103C13.2519 12.329 13.2023 12.2553 13.1398 12.1933L8.9398 8Z"
								fill="#0C111E">
							</path>
						</svg>
					</a>
				</div>
				{/* <div style={{padding:"30px", borderRadius:"30px", backgroundColor:"#f7f7f7"}}>
					<div class="col-sm-12 col-lg-12 text-lg-start mb-6 mb-lg-0 pl-0">
					</div>
				</div> */}
				<div class="offcanvas-body">
				<a href="/dashboard" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
						<svg class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Products
						</a>
						<a href="/orders" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
							<svg  class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6M10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Orders
							{/* <span class="btn-action-disabled fs-6 py-1 px-1 rounded-1">Coming soon</span> */}
						</a>
						<a href="/coupons" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
							<svg  class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 7.5H7.51M21.09 13.91L13.92 21.08C13.7343 21.266 13.5137 21.4135 13.2709 21.5141C13.0281 21.6148 12.7678 21.6666 12.505 21.6666C12.2422 21.6666 11.9819 21.6148 11.7391 21.5141C11.4963 21.4135 11.2757 21.266 11.09 21.08L2.5 12.5V2.5H12.5L21.09 11.09C21.4625 11.4647 21.6716 11.9716 21.6716 12.5C21.6716 13.0284 21.4625 13.5353 21.09 13.91Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Coupons
						</a>
						<a href="/shipping" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
						<svg  class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 16V3H1V16H16ZM16 16H23V11L20 8H16V16ZM8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5ZM21 18.5C21 19.8807 19.8807 21 18.5 21C17.1193 21 16 19.8807 16 18.5C16 17.1193 17.1193 16 18.5 16C19.8807 16 21 17.1193 21 18.5Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Shipping Rates
						</a>
						{/* <a href="/taxes" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
						<svg  class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Tax Rates
						</a> */}
						<a href="#" class="disabled mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
							<img class="mr-2 mb-1" src={process.env.PUBLIC_URL+"/assets/shop-icon.png"} style={{maxWidth:"20px", maxHeight:"20px"}}/>
							Payouts <span class="btn-action-disabled fs-6 py-1 px-1 rounded-1">Coming soon</span>
						</a>
						<a href="/connect" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
						<svg class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Account Setup <span class="btn-action-3 fs-6 py-1 px-1 rounded-1">Required</span>
						</a>
						<a href="/settings" class="text-dark-1 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12 pl-0">
						<svg  class="mr-2 mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#626C80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
							Shop Settings
						</a>
						<br></br>
						<a href="https://main.d2s6xuy4eizex8.amplifyapp.com/home" target="_blank" class="btn btn-outline-action-2 fs-5 mb-lg-4 mx-lg-0 mx-2 d-lg-block mt-5 col-12" style={{marginTop:"30px", maxWidth:"200px"}}>
							Preview shop
							{/* <svg class="ml-2 mb-1" fill="#EF008F" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg> */}
						</a>
					<div>
						<a target="_blank" href="https://main.d2s6xuy4eizex8.amplifyapp.com/home" class="fw-bold text-dark-1 py-2 d-inline-block">
							Live Demo
						</a>
					</div>
					<div>
						<a href="/pricing" class="fw-bold text-dark-1 py-2 d-inline-block">
							Pricing
						</a>
					</div>
					<div>
						<a href="/login" class="fw-bold py-2 d-inline-block">
							Sign In
						</a>
					</div>
					<a href="/login" class="btn btn-sm btn-action-1 rounded-2 mt-4">
						Sign Up
					</a>
				</div>
				<div class="pl-4 pr-4">
					{/* <DashboardNav/> */}
				</div>
			</div>
		</nav>
        </>
    )
}

export default Navigation