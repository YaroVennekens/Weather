import { FunctionComponent, JSX, ReactNode } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const typographyTag = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  span: "span",
} as const;

const typographySize = {
  default: "",
  title: "text-[34px] md:text-[52px] lg:text-[72px]",
  subtitle: "text-[20px] md:text-[30px] lg:text-[35px]",
  description: "text-[19px] md:text-[20px] lg:text-[30px]",
  text: "text-[12px] md:text-[14px] lg:text-[16px]",
};

const typographyColor = {
  default: "text-[#8892b0]",
  highlight: "text-[#ffb400]",
  primary: "text-blue-500",
  secondary: "text-gray-500",
};

const typographyDecoration = {
  default: "",
  bold: "font-bold",
  italic: "italic",
  underline: "underline",
  strikethrough: "line-through",
} as const;

interface TypographyComponentProps {
  classes?: string;
  children: ReactNode;
  tag?: keyof typeof typographyTag;
  size?: keyof typeof typographySize;
  color?: keyof typeof typographyColor;
  decoration?: keyof typeof typographyDecoration;
}

export const TypographyComponent: FunctionComponent<
  TypographyComponentProps
> = ({
  tag = "p",
  size = "description",
  color = "default",
  decoration = "default",
  children,
  classes,
}) => {
  const { t } = useTranslation();


  const renderHighlightedText = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    const parts = text.split(regex);

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <span key={index} style={{ color: "orange" }}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };


  const renderChildren = (children: ReactNode) => {
    if (typeof children === "string") {
      const translatedText = t(children);
      return renderHighlightedText(translatedText);
    }
    return children;
  };

  const TagElement = tag as keyof JSX.IntrinsicElements;

  return (
    <TagElement
      className={clsx(
        classes,
        typographySize[size],
        typographyColor[color],
        typographyDecoration[decoration],
      )}
    >
      {renderChildren(children)}
    </TagElement>
  );
};

export const Title: FunctionComponent<TypographyComponentProps> = ({
  children,
  classes,
  color = "default",
  decoration = "default",
}) => {
  return (
    <TypographyComponent
      tag="h1"
      size="title"
      color={color}
      decoration={decoration}
      classes={classes}
    >
      {children}
    </TypographyComponent>
  );
};

export const Subtitle: FunctionComponent<TypographyComponentProps> = ({
  children,
  classes,
  color = "default",
  decoration = "default",
}) => {
  return (
    <TypographyComponent
      tag="h2"
      size="subtitle"
      color={color}
      decoration={decoration}
      classes={classes}
    >
      {children}
    </TypographyComponent>
  );
};

export const Description: FunctionComponent<TypographyComponentProps> = ({
  children,
  classes,
  color = "default",
  decoration = "default",
}) => {
  return (
    <TypographyComponent
      tag="h3"
      size="description"
      color={color}
      decoration={decoration}
      classes={classes}
    >
      {children}
    </TypographyComponent>
  );
};

export const Text: FunctionComponent<TypographyComponentProps> = ({
  children,
  classes,
  color = "default",
  decoration = "default",
}) => {
  return (
    <TypographyComponent
      tag="p"
      size="text"
      color={color}
      decoration={decoration}
      classes={classes}
    >
      {children}
    </TypographyComponent>
  );
};
