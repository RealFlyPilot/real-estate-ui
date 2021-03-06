// import * as React from 'react';
//   import styled, { system, css } from '@xstyled/styled-components'

//   export const NotificationContainer: any = styled.div`
//     font-size: 14px;
//     box-sizing: border-box;
//     position: fixed;
//     z-index: 999999;

//     .top-right {
//     top: 12px;
//     right: 12px;
//     transition: transform .6s ease-in-out;
//     animation: toast-in-right .7s;
//   }

//   .bottom-right {
//     bottom: 12px;
//     right: 12px;
//     transition: transform .6s ease-in-out;
//     animation: toast-in-right .7s;
//   }

//   .top-left {
//     top: 12px;
//     left: 12px;
//     transition: transform .6s ease-in;
//     animation: toast-in-left .7s;
//   }

//   .bottom-left {
//     bottom: 12px;
//     left: 12px;
//     transition: transform .6s ease-in;
//     animation: toast-in-left .7s;
//   }

//   `

//   const Notification: any = styled.div`
//     background: #fff;
//     transition: .3s ease;
//     position: relative;
//     pointer-events: auto;
//     overflow: hidden;
//     margin: 0 0 6px;
//     padding: 30px;
//     margin-bottom: 15px;
//     width: 300px;
//     max-height: 100px;
//     border-radius: 3px 3px 3px 3px;
//     box-shadow: 0 0 10px #999;
//     color: #000;
//     opacity: .9;
//     background-position: 15px;
//     background-repeat: no-repeat;

//     height: 50px;
//       width: 365px;
//     color: #fff;
//     padding: 20px 15px 10px 10px;

//     &:hover {
//       box-shadow: 0 0 12px #fff;
//     opacity: 1;
//     cursor: pointer
//     }
//   `

//   export const NotificationTitle: any = styled.p`
//     font-weight: 700;
//     font-size: 16px;
//     text-align: left;
//     margin-top: 0;
//     margin-bottom: 6px;
//       width: 300px;
//       height: 18px;
//   `

//   export const NotificationMessage: any = styled.p`
//     margin: 0;
//     text-align: left;
//       height: 18px;
//       margin-left: -1px;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//   `
//   export const NotificationImage: any = styled.div`
//       float: left;
//       margin-right: 15px;
//       img {
//       width: 30px;
//       height: 30px;
//   }
//   `

//   .notification-container button {
//     position: relative;
//     right: -.3em;
//     top: -.3em;
//     float: right;
//     font-weight: 700;
//     color: #fff;
//     outline: none;
//     border: none;
//     text-shadow: 0 1px 0 #fff;
//     opacity: .8;
//     line-height: 1;
//     font-size: 16px;
//     padding: 0;
//     cursor: pointer;
//     background: 0 0;
//     border: 0
//   }

import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'
import { Alert } from '@welcome-ui/alert'

export const Toast: any = styled(Box)(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}
  `
)

export const Growl: any = styled.div(
  ({ variant }) => css`
    position: relative;
    max-width: 25rem;
    padding: lg;
    ${th('toasts.growls.default')};
    ${th(`toasts.growls.${variant}`)};
    ${system};
  `
)

export const Title: any = styled(Box)(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantColor(variant)};
    padding-bottom: md;
    ${th('toasts.growls.title')};

    & > *:first-child {
      flex-shrink: 0;
      margin-right: sm;
    }
  `
)

export const Snackbar: any = styled(Alert)`
  display: flex;
  align-items: center;

  ${Title} > *:not(:only-child):not(:last-child) {
    margin-right: sm;
  }
`
