/**

 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '@welcome-ui/field'
declare module '@welcome-ui/connected-field'
declare module '@welcome-ui/field-group'
declare module '@welcome-ui'
declare module '@welcome-ui/core'
declare module '@welcome-ui/input-text'
declare module '@welcome-ui/accordion'
declare module '@welcome-ui/file-drop'
declare module '@welcome-ui/box'
declare module '@welcome-ui/card'
declare module '@welcome-ui/stack'
declare module '@welcome-ui/button'
declare module '@welcome-ui/dropdown-menu'
declare module '@welcome-ui/alert'
declare module '@welcome-ui/avatar'
declare module '@welcome-ui/badge'
declare module '@welcome-ui/breadcrumb'
declare module '@welcome-ui/hint'
declare module '@welcome-ui/group'
declare module '@welcome-ui/icons'
declare module '@welcome-ui/icons.font'
declare module '@welcome-ui/link'
declare module '@welcome-ui/loader'
declare module '@welcome-ui/modal'
declare module '@welcome-ui/swiper'
declare module '@welcome-ui/table'
declare module '@welcome-ui/tabs'
declare module '@welcome-ui/tag'
declare module '@welcome-ui/pagination'
declare module '@welcome-ui/toast'
declare module '@welcome-ui/tooltip'
declare module '@welcome-ui/shape'
declare module '@welcome-ui/field'
declare module '@welcome-ui/checkbox'
declare module '@welcome-ui/date-picker'
declare module '@welcome-ui/date-time-picker'
declare module '@welcome-ui/file-drop'
declare module '@welcome-ui/file-upload'
declare module '@welcome-ui/markdown-editor'
declare module '@welcome-ui/picker'
declare module '@welcome-ui/radio-group'
declare module '@welcome-ui/radio-tab'
declare module '@welcome-ui/search'
declare module '@welcome-ui/select'
declare module '@welcome-ui/textarea'
declare module '@welcome-ui/time-picker'
declare module '@welcome-ui/toggle'
declare module '@welcome-ui/utils.copy'
declare module '@welcome-ui/text'
