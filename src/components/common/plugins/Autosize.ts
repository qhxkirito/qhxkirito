const evt : any = 'orientationchange' in window
  ? 'orientationchange' : 'resize';

// 监听listenResize 如果成为false就不监听或者移除
let needListenResize : boolean = true;
let isListenResize : boolean = false;

const resizeFontSize: any = () => {
  const docEl : HTMLElement = document.documentElement;
  const { clientWidth, clientHeight} : {clientWidth: number, clientHeight: number} = docEl;
  if(!clientWidth || !clientHeight) {
    // 部分手机可能出现初始化获取不到宽高的问题
    console.log('没有获取到屏幕宽度，监听resize');
    return;
  }

  const minSize : number = Math.min(clientWidth, clientHeight);
  const fs : number = 50 * (minSize / 375);
  docEl.style.fontSize = `${fs}px`;

  // 获取到了 取消监听，或者不监听
  needListenResize = false;
  // 如果有监听就取消监听
  if(isListenResize) {
    window.removeEventListener(evt, resizeFontSize, false);
    isListenResize = false;
  }

}

resizeFontSize();

if(window.addEventListener && needListenResize) {
  window.addEventListener(evt, resizeFontSize, false);
  isListenResize = true;
}

export default resizeFontSize;