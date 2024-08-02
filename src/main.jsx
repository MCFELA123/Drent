import React from 'react'
import user from './img/john-doe.jpg'
import mavicAirTwo from './img/pngimg.com - mavic_PNG18.png'
import air from './img/air2.png'
import mini from './img/mini-two.png'
import drentAi from './img/drent-ai.png'
import SearchResults from './SearchResults'

export const main = () => {

function moreTools() {
  var more = document.getElementById("more-tools")
  var drop = document.getElementById("more-drop")
  var tool = document.getElementById("tool-bar")

  setTimeout(() => {
    more.style.display = 'unset'
    tool.style.display = 'unset'
  }, 300);

  setTimeout(() => {
    drop.onmouseleave = leave
    more.onmouseleave = leave_more
  }, 0);

  function leave() {
    more.style.display = 'none'
  }
  function leave_more() {
    more.style.display = 'none'
  }
}

function more_tools() {
  var more = document.getElementById("more-tools")
  var drop = document.getElementById("more-drp")

  setTimeout(() => {
    more.style.display = 'unset'
  }, 300);
}

function tools() {
  var tool = document.getElementById("tool-bar")

  setTimeout(() => {
    tool.style.display = 'unset'
  }, 0);

setTimeout(() => {
  tool.onmouseleave = tool_leave
  tool.onpointerleave = tool_leave
}, 0);

function tool_leave() {
      tool.style.display = 'none'
}
}

function Preview() {
  var prev = document.getElementById('preview')
  var prevs = document.getElementById('previews')

  prev.style.transform = 'translateX(0)'
      setTimeout(() => {
        prevs.style.opacity = 1
      }, 500);
}

function SearchResul() {
  var result = document.getElementById('result')
  var results = document.getElementById('results')
  var inp = document.getElementById('inputBar')
  var stats = document.getElementById('status')
  var mini2 = document.getElementById('mini2')
    var spin = document.getElementById('spinner')
  var mavic_air = document.getElementById('mavic-air2')
     
  if(inp.onfocus = true) {
      result.className = 'visible'
    }
  
  setTimeout(() => {
    if(inp.value == '') {
      result.className = 'search-results'
      results.innerHTML = ''
    }
    stats.innerHTML = inp.value
  }, 0);
  
  setTimeout(() => {
    
  if(inp.value == 'd') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }
  
  else {
    setTimeout(() => {
      results.innerHTML = ''
    }, 0);
setTimeout(() => {
  results.innerHTML = 'No results for ' + inp.value
  results.style.display = 'flex'
  results.style.alignItems = 'center'
  results.style.justifyContent = 'center'
}, 1000);
  }

  }, 0);  

  setTimeout(() => {
    
  if(inp.value == 'dj') {
  results.innerHTML = ''
setTimeout(() => {
      results.style.display = 'unset'
    results.innerHTML = mini2.innerHTML
}, 1000);
  }

  if(inp.value == 'D') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }

  
  if(inp.value == 'Dj') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }

  if(inp.value == 'DJ') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }

  if(inp.value == 'Dji') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }

  if(inp.value == 'dji') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }

  if(inp.value == 'DJI') {
    results.innerHTML = ''
    setTimeout(() => {
          results.style.display = 'unset'
        results.innerHTML = mini2.innerHTML
    }, 1000);
  }
  }, 0);
}

  return (
    <div className='main'>
          <div id="spinner" hidden>
      <div className="spinner"></div>
    </div>
       <div id="mini2" hidden>
    <div className="result-after">
    <div className="p-det d-center">
            <img src={mini} alt="" />
          </div>
          <div className="p-det">
              <div className="span plet">
              <text className='ink-text bold' style={{fontSize:'1.4em'}}>DJI mini 2</text>
              </div>
              <div className="span plet">
              <text className='ink-text bold' style={{fontSize:'.85em'}}>
              <div className="child-status" style={{marginTop:'7px',marginLeft:'0'}}>
                     <text className='tagged'>$65.00 </text>
                      <text className='off-white-col med'>per day</text>
                    </div>
              </text>
              </div>
          </div>
          <div className="p-det d-center">
            <button className='d-center' onClick={Preview}>
              <text>View</text>
            </button>
          </div>
      </div>

      <div className="result-after">
    <div className="p-det d-center">
            <img src={mavicAirTwo} alt="" />
          </div>
          <div className="p-det">
              <div className="span plet">
              <text className='ink-text bold' style={{fontSize:'1.4em'}}>DJI mavic 3</text>
              </div>
              <div className="span plet">
              <text className='ink-text bold' style={{fontSize:'.85em'}}>
              <div className="child-status" style={{marginTop:'7px',marginLeft:'0'}}>
                     <text className='tagged'>$60.00 </text>
                      <text className='off-white-col med'>per day</text>
                    </div>
              </text>
              </div>
          </div>
          <div className="p-det d-center">
            <button type="button" className='d-center'>
              <text>View</text>
            </button>
          </div>
      </div>
      </div>
        <div className="header-container d-align">
         <div className="header d-center">
         <div className="header-span left user">
            <div className="user-group d-center">
              <img src={user} alt="" />
              <div className="user-badge"></div>
            </div>
          </div>
          <div className="header-span right icons">
          <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 24 24"
  fill="none"
  stroke-width="2.3"
  stroke-linecap="round"
  stroke-linejoin="round">
<path d="M20 7h-9" />
  <path d="M14 17H5" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
</svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='bell-holde'>
<path d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"/>
<path className='bel' d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"/>
</svg>
 </div>
         </div>
        </div>
        <br />
        <br />
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <div style={{
          width: '80%',
          position: 'absolute'
        }}>
            <text style={{
              lineHeight: '2em'
            }}><text style={{
              fontSize: '1.3em',
              color: '#5b72f1'
            }}>Hi John,</text> <br />
            <text style={{
              fontSize: '2em',
            }} className='white-col'>Explore top notch drones.</text>
            </text>
                <br />
                <br />
                <br />
            <div style={{width: '100%'}}>
              <div>
                 <div style={{float: 'left'}}>
          <text style={{fontSize: '1.2em'}} className='off-white-col2 med'>Most popular</text>
        </div>
        
        <div style={{float: 'right'}}>
          <text style={{color: '#5b72f1', fontSize: '1.2em'}}>See all</text>
        </div><br /><br />
        <div className="search-bar dAlign">
          <div className="input-icon d-center">
            <label htmlFor="inputBar" className='d-center'>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='search-icon'>
        <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            </label>
          </div>
                  <div className="input-bar">
                    <input type="text" placeholder='DJI mini 2' onKeyDown={SearchResul} id='inputBar'/>
                  </div>
                  <div className="input-settings d-center" id='tool-box' onClick={tools}>
                  <svg width="35" height="35" className='browse' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.62918 14.2761C5.64802 13.8623 5.32784 13.5116 4.91406 13.4928C4.50027 13.4739 4.14957 13.7941 4.13073 14.2079L5.62918 14.2761ZM9.08026 18.995L9.04067 19.744C9.05385 19.7447 9.06705 19.745 9.08026 19.745L9.08026 18.995ZM14.3297 18.995V19.745C14.3429 19.745 14.3561 19.7447 14.3693 19.744L14.3297 18.995ZM19.2792 14.2079C19.2603 13.7941 18.9096 13.4739 18.4959 13.4928C18.0821 13.5116 17.7619 13.8623 17.7807 14.2761L19.2792 14.2079ZM4.12996 14.242C4.12996 14.6562 4.46574 14.992 4.87996 14.992C5.29417 14.992 5.62996 14.6562 5.62996 14.242H4.12996ZM4.87996 12.831H5.62996C5.62996 12.8196 5.6297 12.8082 5.62917 12.7967L4.87996 12.831ZM9.08026 8.077V7.327C9.06706 7.327 9.05386 7.32735 9.04067 7.32805L9.08026 8.077ZM14.3297 8.077L14.3692 7.32805C14.3561 7.32735 14.3429 7.327 14.3297 7.327V8.077ZM18.53 12.831L17.7807 12.7967C17.7802 12.8082 17.78 12.8196 17.78 12.831L18.53 12.831ZM17.78 14.242C17.78 14.6562 18.1157 14.992 18.53 14.992C18.9442 14.992 19.28 14.6562 19.28 14.242H17.78ZM4.88008 13.492C4.46587 13.492 4.13008 13.8278 4.13008 14.242C4.13008 14.6562 4.46587 14.992 4.88008 14.992V13.492ZM8.29258 14.992C8.7068 14.992 9.04258 14.6562 9.04258 14.242C9.04258 13.8278 8.7068 13.492 8.29258 13.492V14.992ZM7.54246 14.242C7.54246 14.6562 7.87824 14.992 8.29246 14.992C8.70667 14.992 9.04246 14.6562 9.04246 14.242H7.54246ZM9.04246 13.214C9.04246 12.7998 8.70667 12.464 8.29246 12.464C7.87824 12.464 7.54246 12.7998 7.54246 13.214H9.04246ZM9.04246 14.241C9.04246 13.8268 8.70667 13.491 8.29246 13.491C7.87824 13.491 7.54246 13.8268 7.54246 14.241H9.04246ZM7.54246 15.268C7.54246 15.6822 7.87824 16.018 8.29246 16.018C8.70667 16.018 9.04246 15.6822 9.04246 15.268H7.54246ZM8.29246 13.491C7.87824 13.491 7.54246 13.8268 7.54246 14.241C7.54246 14.6552 7.87824 14.991 8.29246 14.991V13.491ZM15.1175 14.991C15.5317 14.991 15.8675 14.6552 15.8675 14.241C15.8675 13.8268 15.5317 13.491 15.1175 13.491V14.991ZM18.53 14.991C18.9442 14.991 19.28 14.6552 19.28 14.241C19.28 13.8268 18.9442 13.491 18.53 13.491V14.991ZM15.1175 13.491C14.7032 13.491 14.3675 13.8268 14.3675 14.241C14.3675 14.6552 14.7032 14.991 15.1175 14.991V13.491ZM14.3675 14.241C14.3675 14.6552 14.7032 14.991 15.1175 14.991C15.5317 14.991 15.8675 14.6552 15.8675 14.241H14.3675ZM15.8675 13.214C15.8675 12.7998 15.5317 12.464 15.1175 12.464C14.7032 12.464 14.3675 12.7998 14.3675 13.214H15.8675ZM15.8675 14.241C15.8675 13.8268 15.5317 13.491 15.1175 13.491C14.7032 13.491 14.3675 13.8268 14.3675 14.241H15.8675ZM14.3675 15.268C14.3675 15.6822 14.7032 16.018 15.1175 16.018C15.5317 16.018 15.8675 15.6822 15.8675 15.268H14.3675ZM8.02996 8.089C8.02996 8.50321 8.36574 8.839 8.77996 8.839C9.19417 8.839 9.52996 8.50321 9.52996 8.089H8.02996ZM8.77996 8.077H8.02996H8.77996ZM14.0301 8.104C14.0301 8.51821 14.3659 8.854 14.7801 8.854C15.1943 8.854 15.5301 8.51821 15.5301 8.104H14.0301ZM4.13073 14.2079C3.99902 17.1017 6.17486 19.5925 9.04067 19.744L9.11985 18.246C7.112 18.1399 5.53333 16.3821 5.62918 14.2761L4.13073 14.2079ZM9.08026 19.745H14.3297V18.245H9.08026V19.745ZM14.3693 19.744C17.2351 19.5925 19.4109 17.1017 19.2792 14.2079L17.7807 14.2761C17.8766 16.3821 16.2979 18.1399 14.2901 18.246L14.3693 19.744ZM5.62996 14.242V12.831H4.12996V14.242H5.62996ZM5.62917 12.7967C5.53286 10.6904 7.11166 8.93209 9.11984 8.82595L9.04067 7.32805C6.1744 7.47954 3.99839 9.97098 4.13074 12.8653L5.62917 12.7967ZM9.08026 8.827H14.3297V7.327H9.08026V8.827ZM14.2901 8.82595C16.2983 8.93209 17.8771 10.6904 17.7807 12.7967L19.2792 12.8653C19.4115 9.97098 17.2355 7.47954 14.3692 7.32805L14.2901 8.82595ZM17.78 12.831V14.242H19.28V12.831H17.78ZM4.88008 14.992H8.29258V13.492H4.88008V14.992ZM9.04246 14.242V13.214H7.54246V14.242H9.04246ZM7.54246 14.241V15.268H9.04246V14.241H7.54246ZM8.29246 14.991H15.1175V13.491H8.29246V14.991ZM18.53 13.491H15.1175V14.991H18.53V13.491ZM15.8675 14.241V13.214H14.3675V14.241H15.8675ZM14.3675 14.241V15.268H15.8675V14.241H14.3675ZM9.52996 8.089V8.077H8.02996V8.089H9.52996ZM9.52996 8.077C9.52996 6.77382 10.5551 5.75 11.78 5.75V4.25C9.69114 4.25 8.02996 5.98142 8.02996 8.077H9.52996ZM11.78 5.75C13.0049 5.75 14.0301 6.77382 14.0301 8.077H15.5301C15.5301 5.98142 13.8689 4.25 11.78 4.25V5.75ZM14.0301 8.077V8.104H15.5301V8.077H14.0301Z"/>
                </svg>
                  </div>
                </div>
                <div className="toolmore" id='more-tools'>
                <div className="li">
                <div className="tool-ui d-center">
                <svg width="20" style={{transform: 'translateX(5px)'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0002 1.98828C6.03023 1.98828 1.99023 6.02828 1.99023 10.9983C1.99023 15.9683 6.03023 20.0083 11.0002 20.0083C15.9702 20.0083 20.0102 15.9683 20.0102 10.9983C20.0102 6.02828 15.9702 1.98828 11.0002 1.98828ZM11.0002 13.2483H8.00023C7.59023 13.2483 7.25023 12.9083 7.25023 12.4983C7.25023 12.0883 7.59023 11.7483 8.00023 11.7483H11.0002C11.4102 11.7483 11.7502 12.0883 11.7502 12.4983C11.7502 12.9083 11.4102 13.2483 11.0002 13.2483ZM14.0002 10.2483H8.00023C7.59023 10.2483 7.25023 9.90828 7.25023 9.49828C7.25023 9.08828 7.59023 8.74828 8.00023 8.74828H14.0002C14.4102 8.74828 14.7502 9.08828 14.7502 9.49828C14.7502 9.90828 14.4102 10.2483 14.0002 10.2483Z" fill="#5b72f1"/>
                  <path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill="#5b72f1"/>
                </svg>
                </div>
                <div className="tool-ui dAlign">
                <div style={{marginLeft: '10px'}} className='dAlign'>
                <text className='off-white-col '>Indexing</text>
                </div>
                </div>
                <div className="tool-ui d-center">
                </div>
              </div>
              <div className="li">
                <div className="tool-ui d-center">
                <svg style={{scale: '2', transform: 'translateX(4px)'}} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.132 9.71395C10.139 11.2496 10.3328 13.2665 11.6 14.585C12.8468 15.885 14.8527 16.0883 16.335 15.065C16.6466 14.8505 16.9244 14.5906 17.159 14.294C17.3897 14.0023 17.5773 13.679 17.716 13.334C18.0006 12.6253 18.0742 11.8495 17.928 11.1C17.7841 10.3573 17.4268 9.67277 16.9 9.12995C16.3811 8.59347 15.7128 8.22552 14.982 8.07395C14.2541 7.92522 13.4982 8.00197 12.815 8.29395C12.1254 8.58951 11.5394 9.08388 11.132 9.71395Z" stroke="#5b72f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5986 13.6868C17.2639 13.4428 16.7947 13.5165 16.5508 13.8513C16.3069 14.1861 16.3806 14.6552 16.7154 14.8991L17.5986 13.6868ZM19.0584 16.6061C19.3931 16.85 19.8623 16.7764 20.1062 16.4416C20.3501 16.1068 20.2764 15.6377 19.9416 15.3938L19.0584 16.6061ZM7.5 12.7499C7.91421 12.7499 8.25 12.4142 8.25 11.9999C8.25 11.5857 7.91421 11.2499 7.5 11.2499V12.7499ZM5.5 11.2499C5.08579 11.2499 4.75 11.5857 4.75 11.9999C4.75 12.4142 5.08579 12.7499 5.5 12.7499V11.2499ZM7.5 15.7499C7.91421 15.7499 8.25 15.4142 8.25 14.9999C8.25 14.5857 7.91421 14.2499 7.5 14.2499V15.7499ZM5.5 14.2499C5.08579 14.2499 4.75 14.5857 4.75 14.9999C4.75 15.4142 5.08579 15.7499 5.5 15.7499V14.2499ZM8.5 9.74994C8.91421 9.74994 9.25 9.41415 9.25 8.99994C9.25 8.58573 8.91421 8.24994 8.5 8.24994V9.74994ZM5.5 8.24994C5.08579 8.24994 4.75 8.58573 4.75 8.99994C4.75 9.41415 5.08579 9.74994 5.5 9.74994V8.24994ZM16.7154 14.8991L19.0584 16.6061L19.9416 15.3938L17.5986 13.6868L16.7154 14.8991ZM7.5 11.2499H5.5V12.7499H7.5V11.2499ZM7.5 14.2499H5.5V15.7499H7.5V14.2499ZM8.5 8.24994H5.5V9.74994H8.5V8.24994Z" fill="#5b72f1"/>
                </svg>
                </div>
                <div className="tool-ui dAlign">
                <div style={{marginLeft: '15px'}} className='dAlign'>
                <text className='off-white-col '>Results</text>
                </div>
                </div>
                <div className="tool-ui d-center">
                </div>
              </div>
              <div className="li">
                <div className="tool-ui d-center">
                <svg fill="#5b72f1"style={{scale: '1.3', transform: 'translateX(6px)'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z"/></svg>
                </div>
                <div className="tool-ui dAlign">
                <div style={{marginLeft: '15px'}} className='dAlign'>
                <text className='off-white-col '>FAQ</text>
                </div>
                </div>
                <div className="tool-ui d-center">
                </div>
              </div>
                </div>
                <div className="toolbar" id='tool-bar'>
                <svg width="40" height="40" className='locate si-glyph si-glyph-triangle-up' viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path d="M7.96,2.392 C8.541,1.812 9.482,1.812 10.064,2.392 L16.506,8.836 C17.088,9.417 17.345,10.939 15.506,10.939 L2.518,10.939 C0.616,10.939 0.936,9.418 1.517,8.836 L7.96,2.392 L7.96,2.392 Z" fill="#1a1f3c" class="si-glyph-fill">
                </path>
                </g>
              </svg>
              <div className="li" onMouseEnter={moreTools} onPointerEnter={moreTools}>
                <div className="tool-ui d-center" onMouseEnter={more_tools} onPointerEnter={more_tools}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#5b72f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.5 11H13.5" stroke="whitesmoke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 13.5V8.5" stroke="whitesmoke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#5b72f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <div className="tool-ui dAlign" id='more-drop'>
                <text className='off-white-col med'>Search tools</text>
                </div>
                <div className="tool-ui d-center">
                <svg viewBox="0 0 24 24" width={15} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#5b72f18f" stroke-width="2.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
              </div>
              <div className="li bg-none dAlign default-cur" style={{height: '1em'}}>
                <div style={{marginLeft: '7px'}}>
                  <text style={{color: '#5b72f1', fontSize: '1em'}}>More</text>
                </div>
              </div>
              <div className="li">
              <div className="tool-ui d-center">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891Z" fill="#5b72f1"/>
                  <path d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.5429 12.6036C11.3554 12.416 11.25 12.1617 11.25 11.8964V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="whitesmoke"/>
                </svg>
                </div>
                <div className="tool-ui dAlign">
                <text className='off-white-col med'>History</text>
                </div>
                <div className="tool-ui d-center"></div>
              </div>
              <div className="li">
              <div className="tool-ui d-center">
                <img src={drentAi} width={20} alt="" />
                </div>
                <div className="tool-ui dAlign">
                <text className='off-white-col med'>Drent AI</text>
                </div>
                <div className="tool-ui d-center"></div>
              </div>
             </div>
             <SearchResults>
              </SearchResults>
                <br />
            <div className='data-list-container'>
                <div className='data-group-list'>
                <div className="data-list" onClick={Preview}>
                <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={mini} className='rtdeg' alt="" />
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Mini 2</text>
                        <br /><text className='off-white-col med'>Power Swift Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                           <div className="child-status">
                            <text className='green-col light'>Rent</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-list" onClick={Preview}>
                  <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={mavicAirTwo} className='rtdeg' alt=""/>
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Mavic 3</text>
                        <br /><text className='off-white-col med'>Wide Range Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                          <div className="child-status">
                            <text className='warning light'>Pending</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-list">
                <div className='inner'>
                    <div className="draw"></div>
                    <div className="action d-center">
                      <div className='p0'>
                        <br /><br /><br />
                        <center>
                          <img src={air} className='air' alt="" />
                        </center>
                        <br />
                        <div className='object-details'>
                        <text className='ink-text bold'>DJI Air 2</text>
                        <br /><text className='off-white-col med'>Speedster Drone</text>
                        <br />
                        <div className="object-child-details">
                          <div className="hr-inverse"></div>
                          <div className="child-status">
                            <text className='warning light'>Pending</text> <br />
                            <text className='tagged'>$60.00 </text>
                            <text className='off-white-col med'>per day</text>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default main