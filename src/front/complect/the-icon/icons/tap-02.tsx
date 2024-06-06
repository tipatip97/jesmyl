import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.2499 22.0018C16.2802 20.1368 16.213 20.522 16.3656 20.0475C16.5182 19.573 17.1087 18.7488 17.4741 17.699C18.4967 14.7603 17.9524 13.5543 16.4382 12.618C14.8428 11.6315 13.2322 11.2488 11.8211 11.371V6.73412C11.8211 5.77221 11.2755 5.02979 10.3121 5.02979C9.34882 5.02979 8.86277 5.86743 8.86277 6.82933L8.91343 11.6649M8.89521 22.0018V21.3334C8.89521 20.5482 8.63746 20.213 7.5474 18.6363C6.34577 16.8982 6.35081 16.8157 6.07555 16.0589C6.02681 15.7056 5.72823 14.881 6.83244 13.7307L8.91343 11.6649M8.91343 15.1913V11.6649',
  d2: 'M6.49776 6.02368C6.43198 5.10371 6.99798 3.28377 8.55112 2.5228C9.19157 2.1333 10.9495 1.53023 12.6309 2.60481C14.2879 3.66382 14.3997 5.22521 14.5039 6.01333',
  d3: 'M17.0826 18.3348C17.6632 17.0796 18.4577 14.6232 17.3475 13.4665C15.5973 11.6432 13.1497 11.3094 11.7471 11.374V6.48652C11.7471 5.665 11.1038 4.99902 10.3104 4.99902C9.51679 4.99902 8.8735 5.665 8.8735 6.48652V11.7991C8.85438 11.814 6.51038 13.648 6.10154 14.8663C5.73557 15.9568 6.43703 16.9276 6.96437 17.8267C7.37269 18.5229 8.87362 20.2408 8.87362 21.1532V21.999H16.174V20.6237C16.174 19.8369 16.7685 19.0138 17.0826 18.3348Z',
  d4: 'M16.2659 22.0013C16.2959 20.1363 16.2293 20.5215 16.3806 20.047C16.532 19.5725 17.1179 18.7483 17.4804 17.6985C18.4949 14.7598 17.9549 13.5538 16.4527 12.6175C14.8699 11.631 13.2721 11.2483 11.8722 11.3705V6.73363C11.8722 5.77172 11.3309 5.0293 10.3751 5.0293C9.41947 5.0293 8.93727 5.86694 8.93727 6.82884L8.98753 11.6644M8.98753 11.6644L6.92303 13.7302C5.82757 14.8805 6.12379 15.7051 6.17214 16.0584C6.44522 16.8152 6.44022 16.8977 7.63233 18.6358C8.71375 20.2125 8.96946 20.5477 8.96946 21.3329V22.0013M8.98753 11.6644V15.1908',
  d5: 'M14.4327 5.99902C14.4327 3.78988 12.656 1.99902 10.4644 1.99902C8.27276 1.99902 6.49609 3.78988 6.49609 5.99902',
  d6: 'M16.2499 22.0018C16.2802 20.1368 16.213 20.522 16.3656 20.0475C16.5182 19.573 17.1087 18.7488 17.4741 17.699C18.4967 14.7603 17.9524 13.5543 16.4382 12.618C14.8428 11.6315 13.2322 11.2488 11.8211 11.371V6.73412C11.8211 5.77221 11.2755 5.02979 10.3121 5.02979C9.34882 5.02979 8.86277 5.86743 8.86277 6.82933L8.91343 11.6649M8.91343 11.6649L6.83244 13.7307C5.72823 14.881 6.02681 15.7056 6.07555 16.0589C6.35081 16.8157 6.34577 16.8982 7.5474 18.6363C8.63746 20.213 8.89521 20.5482 8.89521 21.3334V22.0018M8.91343 11.6649V15.1913',
  d7: 'M8.14658 11.5661V6.6125C8.14658 5.39578 9.11203 4.375 10.3449 4.375C11.5777 4.375 12.5432 5.39578 12.5432 6.6125V10.7532C14.1049 10.8295 16.3082 11.3459 17.9773 13.071C18.7892 13.9103 18.8281 15.1233 18.686 16.0979C18.5384 17.1107 18.1616 18.1116 17.851 18.7777C17.7603 18.9722 17.6522 19.1713 17.5533 19.3529L17.5533 19.3529C17.4542 19.5349 17.352 19.7226 17.269 19.8931C17.0918 20.257 17.0054 20.5325 17.0054 20.7497C17.0061 21.0228 17.0068 21.3803 16.93 21.6334C16.7603 22.1924 16.3228 22.6298 15.7639 22.7995C15.5108 22.8764 15.2254 22.8757 14.9523 22.8751L9.74253 22.875C8.86117 22.875 8.1467 22.1605 8.1467 21.2792C8.1467 21.2288 8.11647 21.078 7.9814 20.8045C7.85573 20.55 7.67608 20.2611 7.46901 19.9572C7.28486 19.687 7.09058 19.4215 6.90659 19.1701C6.7139 18.9065 6.3034 18.2999 6.17794 18.0877C5.95569 17.7218 5.68554 17.2772 5.50357 16.8235C5.26567 16.2304 5.13145 15.5223 5.39201 14.752C5.53849 14.319 5.83143 13.8925 6.12867 13.5275C6.43581 13.1504 6.79498 12.7823 7.13015 12.4638C7.52418 12.0893 7.8999 11.7693 8.14658 11.5661Z',
  d8: 'M10.3457 3.125C8.68885 3.125 7.3457 4.46815 7.3457 6.125C7.3457 6.67728 6.89799 7.125 6.3457 7.125C5.79342 7.125 5.3457 6.67728 5.3457 6.125C5.3457 3.36358 7.58428 1.125 10.3457 1.125C13.1071 1.125 15.3457 3.36358 15.3457 6.125C15.3457 6.67728 14.898 7.125 14.3457 7.125C13.7934 7.125 13.3457 6.67728 13.3457 6.125C13.3457 4.46815 12.0026 3.125 10.3457 3.125Z',
  d9: 'M16.2553 22V20C16.2553 20 16.8545 19.0148 17.1711 18.3358C17.7564 17.0806 18.5572 14.6242 17.4381 13.4675C15.674 11.6442 13.2068 11.3104 11.793 11.375V6.4875C11.793 5.66598 11.1446 5 10.3448 5C9.54488 5 8.89646 5.66598 8.89646 6.4875V15.2M8.89658 22V20C8.89658 20 7.38366 18.5239 6.97207 17.8277C6.44052 16.9286 5.73346 15.9578 6.10235 14.8673C6.51615 13.644 8.89658 11.8 8.89658 11.8',
  d10: 'M6.5 6C6.5 3.79086 8.29086 2 10.5 2C12.7091 2 14.5 3.79086 14.5 6',
  d11: 'M8.1467 20.3121L8.12177 20.287C7.97031 20.1346 7.76351 19.9234 7.54291 19.6892C7.12449 19.2451 6.58229 18.6419 6.32657 18.2094C6.28096 18.1322 6.23081 18.0497 6.17794 17.9627L6.17793 17.9627C5.95568 17.5968 5.68554 17.1522 5.50357 16.6985C5.26567 16.1054 5.13145 15.3973 5.39201 14.627C5.53904 14.1923 5.83373 13.7641 6.13248 13.3979C6.44124 13.0194 6.80219 12.6501 7.13845 12.3309C7.47638 12.0102 7.79931 11.7308 8.03722 11.5318C8.07595 11.4995 8.1125 11.4692 8.14658 11.4411V6.4875C8.14658 5.27078 9.11203 4.25 10.3449 4.25C11.5777 4.25 12.5432 5.27078 12.5432 6.4875V10.6282C14.1049 10.7045 16.3082 11.2209 17.9773 12.946C18.7892 13.7853 18.8281 14.9983 18.686 15.9729C18.5384 16.9857 18.1616 17.9866 17.851 18.6527C17.6789 19.0218 17.4371 19.4601 17.2457 19.7948C17.1519 19.9589 17.0676 20.1026 17.0054 20.2073V22.75H8.1467V20.3121Z',
  d12: 'M10.5 2.75C8.70507 2.75 7.25 4.20507 7.25 6H5.75C5.75 3.37665 7.87665 1.25 10.5 1.25C13.1234 1.25 15.25 3.37665 15.25 6H13.75C13.75 4.20507 12.2949 2.75 10.5 2.75Z',
};

export const IconTap02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-stroke-rounded IconTap02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-duotone-rounded IconTap02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-twotone-rounded IconTap02TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-solid-rounded IconTap02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-bulk-rounded IconTap02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-stroke-sharp IconTap02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-02-solid-sharp IconTap02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTap02: TheIconSelfPack = {
  name: 'Tap02',
  StrokeRounded: IconTap02StrokeRounded,
  DuotoneRounded: IconTap02DuotoneRounded,
  TwotoneRounded: IconTap02TwotoneRounded,
  SolidRounded: IconTap02SolidRounded,
  BulkRounded: IconTap02BulkRounded,
  StrokeSharp: IconTap02StrokeSharp,
  SolidSharp: IconTap02SolidSharp,
};