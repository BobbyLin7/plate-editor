'use client'

import type { VariantProps } from 'class-variance-authority'

import type { PlateElementProps } from 'platejs/react'
import { cva } from 'class-variance-authority'

import { PlateElement } from 'platejs/react'
import * as React from 'react'

const headingVariants: ReturnType<typeof cva> = cva('relative mb-1', {
  variants: {
    variant: {
      h1: 'mt-[1.6em] pb-1 font-heading text-4xl font-bold',
      h2: 'mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight',
      h3: 'mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight',
      h4: 'mt-[0.75em] font-heading text-lg font-semibold tracking-tight',
      h5: 'mt-[0.75em] text-lg font-semibold tracking-tight',
      h6: 'mt-[0.75em] text-base font-semibold tracking-tight',
    },
  },
})

interface HeadingElementProps extends PlateElementProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function HeadingElement({
  variant = 'h1',
  ...props
}: HeadingElementProps): React.JSX.Element {
  return (
    <PlateElement
      as={variant!}
      className={headingVariants({ variant: variant as any })}
      {...props}
    >
      {props.children}
    </PlateElement>
  )
}

export function H1Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h1" {...props} />
}

export function H2Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h2" {...props} />
}

export function H3Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h3" {...props} />
}

export function H4Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h4" {...props} />
}

export function H5Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h5" {...props} />
}

export function H6Element(props: PlateElementProps): React.JSX.Element {
  return <HeadingElement variant="h6" {...props} />
}
