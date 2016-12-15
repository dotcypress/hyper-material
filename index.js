exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#eceff1',
    backgroundColor: '#263238',
    borderColor: 'transparent',
    cursorColor: '#68b6f3',
    colors: [
      '#263238',
      '#ff5252',
      '#9ccc65',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#eceff1',
      '#617d8a',
      '#fc625d',
      '#9ccc65',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#ffffff'
    ],
    termCSS: `
      ${config.termCSS || ''}
      @keyframes blink-animation {
        to {
          background-color: transparent;
        }
      }
      .cursor-node[focus=true]:not([moving]) {
        animation: blink-animation .777s ease-in-out infinite;
        box-sizing: content-box !important;
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        background: #222d32 !important;
      }
      .hyperterm_main, .tab_tab, .tab_text {
        border: none !important;
        padding: 0 !important;
      }
      .tab {
        color: red !important;
      }
      .tab_tab::before {
        position: absolute;
        content: "";
        display: block;
        left: 0px;
        right: 0px;
        bottom: 0px;
        transition: border-color .3s ease-in-out;
        border-bottom: 3px solid transparent;
      }
      .tab_active::before {
        border-bottom: 3px solid #a04a92;
      }
    `
  })
}
