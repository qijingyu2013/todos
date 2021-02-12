/* Creative Commons Attribution 4.0 International (CC-BY-4.0) */
/* Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) */
/* This source code was getting from https://github.com/tastejs/todomvc-app-css/blob/03e753aa21bd555cbdc2aa09185ecb9905d1bf16/index.css */

import styled from 'styled-components'

export const Layout = styled.div`
  .stat {
    padding-inline-start: 0;
  }

  .stat li {
    display: inline;
  }

  .stat li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .stat li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .stat li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
  .view {
    text-align: center;
  }
`
