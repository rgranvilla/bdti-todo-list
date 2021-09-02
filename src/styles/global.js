import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    /* Principals Colors */
    --primary: #0B4576;
    --secondary: #EA7025;
    --active: #29A30A;
    --alert: #CA322D;
    --unselected: #E7F2F1;

    /* Background Colors */
    --bg-button: #E7F2F1;
    --bg-dashboard: #FEFEFE;
    --bg-list: #F5F9FA;

    /* Text Colors */
    --txt-content: #888888;
    --txt-title: #555555;
    --txt-white: #FFFFFF;
  }

  html, body, #root {
    width: 100vw;
    height: 100%;
  }

  body {
    font: 14px 'Poppins', sans-serif;
    background: var(--bg-dashboard);
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }
`;
