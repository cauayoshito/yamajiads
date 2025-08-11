// components/ui/button.tsx
"use client";

import Link from "next/link";
import React from "react";
import { cn } from "../../lib/utils"; // ajuste se usar alias "@/lib/utils"

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
};

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

const variants = {
  primary: "rounded-xl bg-primary text-black hover:opacity-90 active:scale-95",
  outline:
    "rounded-xl border border-white/15 text-foreground hover:bg-white/5 active:scale-95",
  ghost: "rounded-xl text-foreground hover:bg-white/5 active:scale-95",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3",
  lg: "px-6 py-4 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    ariaLabel,
    variant = "primary",
    size = "md",
    fullWidth,
    isLoading,
  } = props as CommonProps & { fullWidth?: boolean; isLoading?: boolean };

  const classes = cn(
    "inline-flex items-center justify-center font-medium transition select-none min-h-[44px]",
    "disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  // âncoras/links
  if ("href" in props && props.href) {
    const { href, onClick, target, rel, ...anchorRest } = props as AnchorProps;
    const isExternal = /^https?:\/\//.test(href);
    const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    // para links externos, use <a>
    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          className={classes}
          target={target}
          rel={safeRel}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    // internos continuam com <Link>
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        target={target}
        rel={safeRel}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  // botão nativo
  const {
    onClick,
    type = "button",
    disabled,
    ...buttonRest
  } = props as NativeButtonProps;

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled || isLoading}
      {...buttonRest}
    >
      {isLoading && (
        <span
          aria-hidden
          className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}
      {children}
    </button>
  );
}
