import { Link, LinkProps, NavLinkProps, useParams } from 'react-router-dom';

function mapParams(this: Record<string, string>, param: string) {
  if (!(param in this)) return null;

  return `${param}=${this[param]}`;
}

const itNNull = (it: unknown) => it !== null;

const LinkWith = ({
  rememberProps,
  to,
  ...props
}: {
  rememberProps: string[];
} & LinkProps) => {
  const search = rememberProps.map(mapParams, useParams()).filter(itNNull).join('&');

  return (
    <Link
      {...props}
      to={`${to}${search ? `?${search}` : ''}`}
    />
  );
};

interface Props {
  rememberProps?: string[];
  to: string;
}

export const LinkWithSearchRemember = <IsNavLink extends boolean | und>({
  rememberProps,
  ...props
}: Props & (IsNavLink extends true ? NavLinkProps : LinkProps)) => {
  return rememberProps !== undefined ? (
    <LinkWith
      rememberProps={rememberProps}
      {...(props as any)}
    />
  ) : (
    <Link {...(props as any)} />
  );
};
