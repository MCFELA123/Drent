import React from 'react'
import dji from './img/dji-logo.png'
import mini from './img/mini-two.png'


export const Preview = () => {
    let em = 'em'
    let px = 'px'
     let pec = '%'
 const preview = {
    width: 100+pec,
    height: 100+pec,
    top: 0,
    left: 0,
    marginTop: 0+em,
    color: 'white',
    position: 'fixed',
    background: '#131220',
    overflowY: 'scroll',
    overflowX: 'hidden'
 }

 
function main() {
  var prev = document.getElementById('preview')
  var prevs = document.getElementById('previews')

  prev.style.transform = 'translateX(100%)'
      setTimeout(() => {
        prevs.style.opacity = 0
      }, 500);
}

  return (
    <div style={preview} className='preview' id='preview'>
      <div id='previews'>
      <div className='d-center'>
        <div className="span-header" style={{position: 'static', marginTop: 2+em, width: 87+pec}}>
          <span className='left pointer'  onClick={main}>
          <svg fill="#5b72f1" className='arrow' width={15+px} style={{
                        marginLeft: 0,
                        opacity: 1,
                        transition: 'all .3s ease',
                        transform: 'rotate(180deg) translateY(-2.3'+px +') translateX(3'+px +')',
                    }} id='arrow' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                    </path>
                    </g>
                    </svg>
<text style={{color: '#5b72f1', fontSize: '1em'}}>Back</text>
      </span>
          <span className='right'>
            <img src={dji} width={35} alt="" />
          </span>
        </div>
        </div>
        <div className="flight-container">
        <div className="flight-real d-center">
          {/* <div className="d-buy d-center">
            <text className="med">
            Make an offer
            </text>
          </div> */}
        <img src={mini} alt="" />
        </div>
        <div className="cube d-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5" stroke="#5b72f1" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
          <div className="flight-foundation d-center">
            <div className="foundation d-center">
              <text className="bold" style={{transform: 'translateY(2.5em)'}}>DJI MINI 2</text>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
            <div className="offer">
            <text style={{color: 'orangered', fontSize: '1em'}}>BEST VALUE</text>
            <div className="line-x"></div>
            </div>
            <div className="flight-title">
            <text className='bold' style={{color: 'whitesmoke', fontSize: '2em'}}>DJI MINI 2</text>
            </div>
                <div className="flight-remain">
                    <div className="flight-specs">
                      <div className="specs">
                        <div className="specification d-justify">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#5b72f1" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div className="specification d-center">
                          <div className="inner-specs">
                          <text className='off-white-col2 med' style={{fontSize: '1em'}}>Video Quality</text>
                          <br />
                          <div className="other-spec">
                          <text className='whitesmoke-col lnh-10' style={{fontSize: '1.1em'}}>
                            6k 30fps
                          <br />
                          Cinema DNG

                          </text>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="specs custom-grad custom-grad-2">
                      <div className="specification d-justify">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#5b72f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        </div>
                        <div className="specification d-center">
                          <div className="inner-specs">
                          <text className='off-white-col2 med' style={{fontSize: '1em'}}>Flight Time</text>
                          <br />
                          <div className="other-spec">
                          <text className='whitesmoke-col lnh-10' style={{fontSize: '1.1em'}}>
                            Approx.
                          <br />
                          27 min

                          </text>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight-specs">
                      <div className="specs custom-grad">
                      <div className="specification d-justify">
                      <svg width="40" height="40" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9 5L7.5 13.615H13V19L18.5 9.308H13L11.9 5Z" stroke="#5b72f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        </div>
                        <div className="specification d-center">
                          <div className="inner-specs">
                          <text className='off-white-col2 med' style={{fontSize: '1em'}}>Max Speed</text>
                          <br />
                          <div className="other-spec">
                          <text className='whitesmoke-col lnh-10' style={{fontSize: '1.1em'}}>
                            58 mph
                          <br />
                          Max Speed
                          </text>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="specs">
                      <div className="specification d-justify">
                      <svg className='scl-09' width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1929 20.542C17.4797 21.0139 18.0999 21.1704 18.5438 20.8418C19.7886 19.9206 20.8279 18.7446 21.5901 17.388C22.5159 15.74 23.0015 13.8813 23 11.9911C22.9985 10.1008 22.5099 8.24291 21.5813 6.59646C20.817 5.24112 19.7757 4.06675 18.5295 3.14756C18.0851 2.81973 17.4651 2.97722 17.179 3.44961C16.8929 3.92199 17.0462 4.53563 17.484 4.87241C18.4384 5.60674 19.2384 6.52748 19.8333 7.5823C20.5924 8.92836 20.9919 10.4473 20.9931 11.9927C20.9944 13.5381 20.5974 15.0577 19.8404 16.405C19.2472 17.4608 18.4487 18.3828 17.4955 19.1187C17.0583 19.4562 16.906 20.07 17.1929 20.542Z" fill="#5b72f1"/>
                      <path d="M15.1784 17.0884C15.471 17.5568 16.0939 17.7048 16.5159 17.3485C17.1624 16.8026 17.7068 16.1422 18.1201 15.3976C18.6959 14.3605 18.9987 13.1941 19 12.0078C19.0013 10.8216 18.7012 9.6545 18.1277 8.61609C17.716 7.87056 17.1732 7.20893 16.5279 6.66161C16.1067 6.30437 15.4834 6.45097 15.1898 6.91872C14.8961 7.38648 15.0461 7.99795 15.4461 8.37868C15.8144 8.7291 16.1285 9.13501 16.3761 9.58341C16.7856 10.325 16.9999 11.1585 16.999 12.0056C16.998 12.8527 16.7818 13.6857 16.3706 14.4264C16.122 14.8742 15.807 15.2794 15.438 15.629C15.0371 16.0088 14.8858 16.62 15.1784 17.0884Z" fill="#5b72f1"/>
                      <path d="M6.80715 3.45801C6.52025 2.98608 5.90008 2.82959 5.45615 3.15815C4.21145 4.07935 3.1721 5.25541 2.40993 6.61198C1.48406 8.25993 0.998473 10.1187 1 12.0089C1.00153 13.8991 1.49013 15.7571 2.41867 17.4035C3.18303 18.7589 4.22428 19.9332 5.47048 20.8524C5.91494 21.1802 6.53486 21.0228 6.82099 20.5504C7.10711 20.078 6.95376 19.4643 6.51604 19.1276C5.56163 18.3932 4.76161 17.4725 4.16673 16.4177C3.40759 15.0716 3.00814 13.5526 3.00689 12.0073C3.00564 10.4619 3.40263 8.94228 4.15958 7.59499C4.75275 6.53921 5.55128 5.61717 6.5045 4.8813C6.94168 4.54381 7.09404 3.92993 6.80715 3.45801Z" fill="#5b72f1"/>
                      <path d="M8.82162 6.91159C8.52904 6.44317 7.90607 6.29518 7.48409 6.65147C6.83758 7.19734 6.29322 7.85776 5.87985 8.60237C5.30409 9.63949 5.00133 10.8059 5.00001 11.9921C4.99868 13.1784 5.29882 14.3455 5.87226 15.3839C6.28396 16.1294 6.82683 16.791 7.47211 17.3384C7.8933 17.6956 8.51659 17.549 8.81023 17.0812C9.10386 16.6135 8.95393 16.002 8.55385 15.6213C8.18562 15.2709 7.87155 14.865 7.62393 14.4166C7.21442 13.675 7.00007 12.8415 7.00102 11.9944C7.00197 11.1473 7.21818 10.3143 7.62936 9.57361C7.87798 9.12576 8.19296 8.72056 8.56198 8.37096C8.96291 7.99113 9.11421 7.38 8.82162 6.91159Z" fill="#5b72f1"/>
                      <path d="M15 12C15 13.6568 13.6569 15 12 15C10.3431 15 9 13.6568 9 12C9 10.3431 10.3431 8.99998 12 8.99998C13.6569 8.99998 15 10.3431 15 12ZM10.9895 12C10.9895 12.5581 11.4419 13.0105 12 13.0105C12.5581 13.0105 13.0105 12.5581 13.0105 12C13.0105 11.4419 12.5581 10.9894 12 10.9894C11.4419 10.9894 10.9895 11.4419 10.9895 12Z" fill="#5b72f1"/>
                      </svg>
                        </div>
                        <div className="specification d-center">
                          <div className="inner-specs">
                          <text className='off-white-col2 med' style={{fontSize: '1em'}}>Connectivity</text>
                          <br />
                          <div className="other-spec">
                          <text className='whitesmoke-col lnh-10' style={{fontSize: '1.1em'}}>
                            Up To 7km
                          <br />
                          Control Range

                          </text>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              <div className="submit d-center">
              <button className="btn-primary custom-submit">
              <text className='whitesmoke-col left' style={{fontSize: '.9em'}}>
                  $160/<small className='med'>day</small>
              </text>
              <div className="right">
                 <text className='whitesmoke-col left' style={{fontSize: '.9em'}}>
                  Rent now   <svg fill="white" className='arrow' width={15+px} style={{
                        marginLeft: 0,
                        opacity: 1,
                        transition: 'all .3s ease',
                        transform: 'translateY(1px)'
                    }} id='arrow' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                    </path>
                    </g>
                    </svg>
                 </text>
              </div>
              </button>
              </div>
      </div>
    </div>
  )
}


export default Preview