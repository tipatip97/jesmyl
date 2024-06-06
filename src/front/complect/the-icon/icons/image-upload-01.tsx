import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 21C9.20998 16.2487 13.9412 9.9475 21 14.6734',
  d2: 'M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10',
  d3: 'M20.9999 13C20.998 17.147 20.9472 19.2703 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C11.6699 3 14 3.00008 14 3.00008',
  d4: 'M3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088L4.58365 21.3991C4.84455 21.0865 5.10737 20.7684 5.37249 20.4476L5.37254 20.4475C9.52909 15.4169 14.2504 9.7027 20.9974 14.0538C21 13.568 21 13.051 21 12.5C21 8.02166 21 5.78249 19.6088 4.39124C18.2175 3 15.9783 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124Z',
  d5: 'M18.2835 4.51688C18.0954 4.75637 17.8848 5.02443 17.7171 5.19699C17.3321 5.59302 16.699 5.60202 16.303 5.21708C15.907 4.83214 15.898 4.19904 16.2829 3.80301C16.3602 3.72347 16.4964 3.55421 16.7131 3.27834C16.7286 3.25859 16.7444 3.23847 16.7604 3.21803C16.9501 2.9764 17.1759 2.68877 17.4088 2.41389C17.6577 2.12011 17.9437 1.80608 18.2347 1.55821C18.3806 1.43392 18.5513 1.30592 18.7399 1.20499C18.9205 1.10831 19.1848 1 19.5 1C19.8152 1 20.0795 1.10831 20.2601 1.20499C20.4487 1.30592 20.6194 1.43392 20.7653 1.55821C21.0563 1.80608 21.3423 2.12011 21.5912 2.41389C21.8241 2.68877 22.0499 2.9764 22.2395 3.21802C22.2556 3.23847 22.2714 3.25858 22.2869 3.27834C22.5036 3.55421 22.6398 3.72347 22.7171 3.80301C23.102 4.19904 23.093 4.83214 22.697 5.21708C22.301 5.60202 21.6679 5.59302 21.2829 5.19699C21.1152 5.02443 20.9046 4.75637 20.7165 4.51688L20.7141 4.51373C20.6994 4.49504 20.6846 4.47625 20.6698 4.4574C20.614 4.3863 20.5574 4.31413 20.5 4.24154V10C20.5 10.5523 20.0523 11 19.5 11C18.9477 11 18.5 10.5523 18.5 10V4.24154C18.4427 4.31412 18.386 4.38629 18.3302 4.45739C18.3154 4.47625 18.3006 4.49503 18.2859 4.51373L18.2835 4.51688Z',
  d6: 'M11.5 3.99976C9.23256 3.99976 7.63258 4.00188 6.42121 4.16475C5.2386 4.32374 4.5772 4.61925 4.09835 5.09811C3.6195 5.57696 3.32399 6.23836 3.16499 7.42096C3.00212 8.63233 3 10.2323 3 12.4998C3 14.7672 3.00212 16.3672 3.16499 17.5786C3.32399 18.7612 3.6195 19.4226 4.09835 19.9014C4.5772 20.3803 5.2386 20.6758 6.42121 20.8348C7.63258 20.9976 9.23256 20.9998 11.5 20.9998C13.7674 20.9998 15.3674 20.9976 16.5788 20.8348C17.7614 20.6758 18.4228 20.3803 18.9017 19.9014C19.3628 19.4402 19.6534 18.8103 19.8163 17.7108C19.9836 16.582 19.999 15.095 19.9999 12.9993C20.0002 12.447 20.4481 11.9995 21.0004 11.9998C21.5527 12 22.0002 12.4479 21.9999 13.0002C21.999 15.0515 21.988 16.6997 21.7947 18.0039C21.5972 19.3373 21.1932 20.4383 20.3159 21.3156C19.4035 22.228 18.2497 22.6281 16.8453 22.8169C15.4851 22.9998 13.7504 22.9998 11.5744 22.9998H11.4256C9.24959 22.9998 7.51485 22.9998 6.15471 22.8169C4.75033 22.6281 3.59653 22.228 2.68414 21.3156C1.77175 20.4032 1.37164 19.2494 1.18282 17.845C0.999959 16.4849 0.999977 14.7502 1 12.5742V12.5742V12.4253V12.4253C0.999977 10.2493 0.999959 8.5146 1.18282 7.15447C1.37164 5.75009 1.77175 4.59628 2.68414 3.68389C3.59653 2.7715 4.75033 2.37139 6.15471 2.18258C7.51484 1.99971 9.24957 1.99973 11.4255 1.99976H11.4255L13.9996 1.99983C14.5519 1.99985 15 2.44758 15 2.99987C15 3.55215 14.5522 3.99985 13.9999 3.99983L11.5 3.99976Z',
  d7: 'M21.5498 13.7964C19.6519 12.5257 17.8416 11.9557 16.1057 11.961C14.3746 11.9662 12.8123 12.5432 11.4056 13.4067C9.02727 14.8666 6.94182 17.2572 5.10133 19.3669C4.81898 19.6905 4.54237 20.0076 4.27137 20.3137L3 21.4985L4.21243 22.327C5.07755 22.6876 6.08965 22.8454 7.25301 22.9222C8.4118 22.9987 9.8082 22.9987 11.4694 22.9987H11.5751C13.7511 22.9988 15.4858 22.9988 16.846 22.8159C18.2503 22.6271 19.4042 22.227 20.3165 21.3146C21.0684 20.5627 21.4749 19.6438 21.6997 18.5489C21.9188 17.4813 21.9762 16.1876 21.9934 14.6385L21.9994 14.0975L21.5498 13.7964Z',
  d8: 'M20 10V22H2V4H10',
  d9: 'M4 22L14 13L20 17',
  d10: 'M16 10V2.52744M19 5L16 2L13 5',
  d11: 'M3 3.00024C2.44772 3.00024 2 3.44796 2 4.00024V22.0002C2 22.5525 2.44772 23.0002 3 23.0002H21C21.5523 23.0002 22 22.5525 22 22.0002V11.0002H20V15.1316L14.9397 11.7581L4 20.7087V5.00024H12V3.00024H3Z',
  d12: 'M17.293 0.999756L21.0002 4.70686L19.5859 6.12108L18.293 4.82818V10.414H16.293V4.82818L15.0002 6.12108L13.5859 4.70686L17.293 0.999756Z',
};

export const IconImageUpload01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-stroke-rounded IconImageUpload01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUpload01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-duotone-rounded IconImageUpload01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUpload01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-twotone-rounded IconImageUpload01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUpload01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-solid-rounded IconImageUpload01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUpload01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-bulk-rounded IconImageUpload01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageUpload01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-stroke-sharp IconImageUpload01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconImageUpload01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-upload-01-solid-sharp IconImageUpload01SolidSharp"
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

export const iconPackOfImageUpload01: TheIconSelfPack = {
  name: 'ImageUpload01',
  StrokeRounded: IconImageUpload01StrokeRounded,
  DuotoneRounded: IconImageUpload01DuotoneRounded,
  TwotoneRounded: IconImageUpload01TwotoneRounded,
  SolidRounded: IconImageUpload01SolidRounded,
  BulkRounded: IconImageUpload01BulkRounded,
  StrokeSharp: IconImageUpload01StrokeSharp,
  SolidSharp: IconImageUpload01SolidSharp,
};