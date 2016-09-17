exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#eceff1',
    backgroundColor: '#263238',
    borderColor: '#222d32',
    cursorColor: 'rgba(0, 0, 0, 0)',
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
          border-color: transparent;
        }
      }
      .cursor-node, .cursor-node[focus="true"] {
        box-sizing: content-box !important;
        animation: blink-animation .8s ease-in-out infinite;
        border-width: 0 0 2px 0 !important;
        border-color: #68b6f3 !important;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        background: #222d32 !important;
      }
      .hyperterm_main, .tab_text {
        border: none !important;
      }
      .tab_tab::before {
        position: absolute;
        content: "";
        display: block;
        left: 0px;
        right: 0px;
        bottom: 0px;
        transition: border-color .3s ease-in-out;
        border-bottom: 3px solid #222d32;
      }
      .tab_active::before {
        border-color: #617d8a;
      }
    `
  })
}
