import { cn } from "@/libs/utils.lib";
import { Box, BoxRF } from "@/types/component.type";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

export const typograhpyVariants = cva("font-satoshi", {
  defaultVariants: {
    variant: "body-md",
    weight: "regular",
  },
  variants: {
    variant: {
      inherit: "",
      h1: "text-h4 leading-h4 md:text-h2 md:leading-h4 lg:text-h1 lg:leading-h1",
      h2: "text-h5 leading-h5 md:text-h3 md:leading-h3 lg:text-h2 lg:leading-h2",
      h3: "text-h6 leading-h6 md:text-h4 md:leading-h4 lg:text-h3 lg:leading-h3",
      h4: "text-h6 leading-h6 md:text-h5 md:leading-h5 lg:text-h4 lg:leading-h4",
      h5: "text-xl leading-xl md:text-h6 md:leading-h6 lg:text-h5 lg:leading-h5",
      h6: "text-lg leading-lg md:text-xl md:leading-xl lg:text-h6 lg:leading-h6",
      "body-lg": "text-lg leading-lg",
      "body-md": "text-md leading-md",
      "body-sm": "text-sm leading-sm",
      "body-xl": "text-xl leading-xl",
      "body-xs": "text-xs leading-xs",
    },
    weight: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-normal",
      semibold: "font-semibold",
    },
  },
});

export interface TypograhpyProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof typograhpyVariants> {}

const PrimitiveTypograhpy = forwardRef<Element, BoxRF<TypograhpyProps>>(
  (props, ref) => {
    const {
      as: Element = "p",
      children,
      className,
      variant,
      weight,
      ...restProps
    } = props;

    return (
      <Element
        className={cn(typograhpyVariants({ className, variant, weight }))}
        ref={ref}
        {...restProps}>
        {children}
      </Element>
    );
  },
);
PrimitiveTypograhpy.displayName = "Typograhpy";

const Typograhpy: Box<TypograhpyProps> = PrimitiveTypograhpy;

export default Typograhpy;
