# Real UI

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/real-estate-ui.svg)](https://www.npmjs.com/package/real-estate-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save real-estate-ui
```

### Documentation

[Component Docs](src/docs/components)

"prepare": "run-s build",

## Status

- [ ] Define Custom Component APIs
- [x] Mitigate the presence of both xStyledComponent and StyledComponents

**
Currently experiencing issues with properly defining and exporting our own custom components when the base WelcomeUI components that they wrap internally have properties that reference sub components. As an example,
a <BaseDropdownComponent> that itself exposes <BaseDropdownComponent.Trigger> as well as <BaseDropdownComponent.Item>. How do we properly define the API around our own components when the underlying dependencies are composed like this?
**
We are presently handling this in two ways

Either we simply import the base component and set our custom component equal to it.

```
import { Alert as BaseAlert } from '@welcome-ui/alert'

const Alert = BaseAlert

export { Alert }

```

or we wrap the internal component in our custom component and then define properties on our custom component that mirror the underlying WelcomeUI component's API.

```
import { Breadcrumb as BaseBreadCrumb } from '@welcome-ui/breadcrumb'

export interface BreadcrumbProps extends BaseComponentStylePropType {
  separator?: any
}

const Breadcrumb: React.SFC<BreadcrumbProps> = (props) => {
  return <BaseBreadCrumb {...props} />
}

// @ts-ignore
Breadcrumb.Item = BaseBreadCrumb.Item

export { Breadcrumb }

```

These both seem far from ideal but the second way seems particularly worse. Since the underlying component already has sub components mapped to its properties of the same name, to define those same properties on the wrapper component
seems redundant and likely to cause bloat. **Would like a second pair of eyes on this**

**Latest solution to this problem looks like this**

```
export interface CardProps extends BaseComponentStylePropType {
  children: any
  style?: any
}

export interface CardInterface extends React.SFC<CardProps> {
  Cover: React.SFC<CardProps>
  Body: React.SFC<CardProps>
  style?: any
}

// CheckboxPropsBaseComponentStylePropType
const Card: CardInterface = (props) => {
  return <BaseCard {...props} />
}

Card.Cover = BaseCard.Cover
Card.Body = BaseCard.Body

export { Card }

```

Two additional obvious solutions would be to 1. create a class definition on our wrapper component so that we can declare properties on the class or 2. declare properties on the imported WelcomeUI type definition
like

```
declare module '@welcome-ui/card' {
  export class Card {
      Body: React.SFC
      // .etc
  }
}
```

Configuring/Dependency Issues:

- [x] Picker - requires [Formik](https://formik.org/), _all form related components imported from WelcomeUI will require Formik_
- [x] Swiper - `Cannot read property 'breakpoints' of undefined`
- [ ] Toast
