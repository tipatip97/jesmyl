import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 8.5L22 3',
  d2: 'M8 17L22 9',
  d3: 'M15.5525 12.6975C15.2987 12.0688 14.9493 11.4609 14.5214 10.9028C12.5803 8.57474 12.0206 6.80237 12.0171 6C11.9582 7.60728 9.99859 8.47735 9.012 7C8.02541 8.47735 6.06578 7.60728 6.00686 6C6.00336 6.80237 5.44368 8.57474 3.50257 10.9028C2.56153 12.1304 2 13.5985 2 15C2 18.3137 5.13938 21 9.012 21C12.6878 21 15.7031 18.5798 16 15.5',
  d4: 'M7.5 10.5L7 11.5M10.5 10.5L11 11.5',
  d5: 'M14.5214 10.9028C12.5803 8.57474 12.0206 6.80237 12.0171 6C11.9582 7.60728 9.99859 8.47735 9.012 7C8.02541 8.47735 6.06578 7.60728 6.00686 6C6.00336 6.80237 5.44368 8.57474 3.50257 10.9028C2.56153 12.1304 2 13.5985 2 15C2 18.3137 5.13938 21 9.012 21C12.6878 21 15.7031 18.5798 16 15.5C16.1112 14.2029 15.748 13.0912 15.5525 12.6975C15.2987 12.0688 14.9493 11.4609 14.5214 10.9028Z',
  d6: 'M22.7147 2.58187C23.0147 3.04555 22.8821 3.66466 22.4184 3.96469L13.9184 9.46469C13.4547 9.76472 12.8356 9.63205 12.5355 9.16837C12.2355 8.70469 12.3682 8.08558 12.8319 7.78555L21.3319 2.28555C21.7955 1.98552 22.4147 2.11819 22.7147 2.58187Z',
  d7: 'M16.3909 13.4107L22.3712 9.99341C22.8507 9.7194 23.0173 9.10855 22.7433 8.62903C22.4693 8.14951 21.8585 7.98292 21.379 8.25693L15.6172 11.5494C15.9547 12.1412 16.2181 12.7689 16.3909 13.4107Z',
  d8: 'M5.86975 5.3751C6.27792 5.36851 6.6164 5.68958 6.63135 6.09752C6.64947 6.59158 6.95597 6.94994 7.30092 7.07988C7.57481 7.18304 7.89811 7.15615 8.17454 6.82724C8.22988 6.69897 8.32165 6.58465 8.44648 6.50129C8.57824 6.4133 8.72774 6.37254 8.875 6.37503C9.02226 6.37254 9.17176 6.4133 9.30352 6.50129C9.42835 6.58465 9.52012 6.69897 9.57546 6.82724C9.85189 7.15615 10.1752 7.18304 10.4491 7.07988C10.794 6.94994 11.1005 6.59158 11.1186 6.09752C11.1336 5.68958 11.4721 5.36851 11.8803 5.3751C12.2884 5.38169 12.6164 5.71352 12.6181 6.12174C12.6205 6.6737 13.0581 8.28028 14.9485 10.5475C14.955 10.5553 14.9614 10.5633 14.9677 10.5715C15.2064 10.8829 15.424 11.2102 15.6173 11.5492L7.37903 16.2567C6.89951 16.5308 6.73292 17.1416 7.00693 17.6211C7.28094 18.1006 7.89179 18.2672 8.37131 17.9932L16.391 13.4106C16.5432 13.976 16.625 14.5524 16.625 15.125C16.625 18.9479 13.0553 21.8592 8.89692 21.8749L8.887 21.875L8.875 21.875L8.863 21.875L8.85308 21.8749C4.69465 21.8592 1.125 18.9479 1.125 15.125C1.125 13.5301 1.75976 11.9055 2.78232 10.5715C2.78856 10.5633 2.79497 10.5553 2.80154 10.5475C4.69193 8.28028 5.12946 6.6737 5.13186 6.12174C5.13364 5.71352 5.46158 5.38169 5.86975 5.3751ZM8.04598 10.9604C8.23123 10.5899 8.08106 10.1394 7.71057 9.95416C7.34009 9.76892 6.88959 9.91909 6.70434 10.2896L6.20434 11.2896C6.0191 11.6601 6.16927 12.1106 6.53975 12.2958C6.91024 12.481 7.36074 12.3309 7.54598 11.9604L8.04598 10.9604ZM11.046 10.2896C10.8607 9.91909 10.4102 9.76892 10.0398 9.95416C9.66927 10.1394 9.5191 10.5899 9.70434 10.9604L10.2043 11.9604C10.3896 12.3309 10.8401 12.481 11.2106 12.2958C11.5811 12.1106 11.7312 11.6601 11.546 11.2896L11.046 10.2896Z',
  d9: 'M6.63135 6.09752C6.6164 5.68958 6.27792 5.36851 5.86975 5.3751C5.46158 5.38169 5.13364 5.71352 5.13186 6.12174C5.12946 6.6737 4.69193 8.28028 2.80154 10.5475C2.79497 10.5553 2.78856 10.5633 2.78232 10.5715C1.75976 11.9055 1.125 13.5301 1.125 15.125C1.125 18.9479 4.69465 21.8592 8.85308 21.8749L8.863 21.875L8.875 21.875L8.887 21.875L8.89692 21.8749C13.0553 21.8592 16.625 18.9479 16.625 15.125C16.625 14.5524 16.5432 13.976 16.391 13.4106L8.37131 17.9932C7.89179 18.2672 7.28094 18.1006 7.00693 17.6211C6.73292 17.1416 6.89951 16.5308 7.37903 16.2567L15.6173 11.5492C15.424 11.2102 15.2064 10.8829 14.9677 10.5715C14.9614 10.5633 14.955 10.5553 14.9485 10.5475C13.0581 8.28028 12.6205 6.6737 12.6181 6.12174C12.6164 5.71352 12.2884 5.38169 11.8803 5.3751C11.4721 5.36851 11.1336 5.68958 11.1186 6.09752C11.1005 6.59158 10.794 6.94994 10.4491 7.07988C10.1752 7.18304 9.85189 7.15615 9.57546 6.82724C9.52012 6.69897 9.42835 6.58465 9.30352 6.50129C9.17176 6.4133 9.02226 6.37254 8.875 6.37503C8.72774 6.37254 8.57824 6.4133 8.44648 6.50129C8.32165 6.58465 8.22988 6.69897 8.17454 6.82724C7.89811 7.15615 7.57481 7.18304 7.30092 7.07988C6.95597 6.94994 6.64947 6.59158 6.63135 6.09752Z',
  d10: 'M22.42 3.96469C22.8837 3.66466 23.0164 3.04555 22.7163 2.58187C22.4163 2.11819 21.7972 1.98552 21.3335 2.28555L13.0547 7.64244C13.2755 8.13209 13.5971 8.71491 14.0557 9.37689L22.42 3.96469Z',
  d11: 'M22.7434 8.62903C23.0174 9.10855 22.8508 9.7194 22.3713 9.99341L8.37131 17.9934C7.89179 18.2674 7.28094 18.1008 7.00693 17.6213C6.73292 17.1418 6.89951 16.5309 7.37903 16.2569L21.379 8.25693C21.8585 7.98292 22.4694 8.14951 22.7434 8.62903Z',
  d12: 'M7.71057 9.95434C8.08106 10.1396 8.23123 10.5901 8.04598 10.9606L7.54598 11.9606C7.36074 12.3311 6.91024 12.4812 6.53975 12.296C6.16927 12.1107 6.0191 11.6602 6.20434 11.2898L6.70434 10.2898C6.88959 9.91927 7.34009 9.7691 7.71057 9.95434ZM10.0398 9.95434C10.4102 9.7691 10.8607 9.91927 11.046 10.2898L11.546 11.2898C11.7312 11.6602 11.5811 12.1107 11.2106 12.296C10.8401 12.4812 10.3896 12.3311 10.2043 11.9606L9.70434 10.9606C9.5191 10.5901 9.66927 10.1396 10.0398 9.95434Z',
  d13: 'M7.5 10.5L6.5 12M10.5 10.5L11.5 12',
  d14: 'M16.6688 13.038L22.4634 9.77284L21.7205 8.47047L16.0879 11.6429C16.3264 12.0923 16.5224 12.5604 16.6688 13.038Z',
  d15: 'M9.22442 5.64966L9.84704 6.58362C10.1405 7.02386 10.5045 7.06944 10.8077 6.95501C11.1521 6.82508 11.458 6.46672 11.4761 5.97266L12.973 5.99687C12.9754 6.54884 13.4121 8.15541 15.2992 10.4226L15.309 10.4344L15.3184 10.4466C15.6075 10.8245 15.8656 11.2256 16.087 11.6428L7.86576 16.3489L8.60867 17.6512L16.6679 13.0379C16.8654 13.6821 16.9728 14.3436 16.9728 15.0001C16.9728 18.8304 13.4175 21.7501 9.24838 21.7501C5.08279 21.7501 1.5 18.8335 1.5 15.0001C1.5 13.4052 2.13365 11.7807 3.15441 10.4466L3.16376 10.4344L3.1736 10.4226C5.06067 8.15541 5.49744 6.54884 5.49983 5.99687L6.99669 5.97266C7.01496 6.47186 7.31989 6.82805 7.65536 6.95587C7.94786 7.06731 8.3063 7.0269 8.60181 6.58362L9.22442 5.64966ZM7.11513 10.0837L6.11689 11.5837L7.36277 12.4158L8.36102 10.9158L7.11513 10.0837ZM10.1099 10.9158L11.1081 12.4158L12.354 11.5837L11.3558 10.0837L10.1099 10.9158Z',
  d16: 'M21.6871 2.25L22.5005 3.50936L15.5525 8.21146C15.2117 7.70591 14.9713 7.26876 14.8047 6.90956L21.6871 2.25Z',
};

export const IconDimSum01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-stroke-rounded IconDimSum01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-duotone-rounded IconDimSum01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-twotone-rounded IconDimSum01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-solid-rounded IconDimSum01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDimSum01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-bulk-rounded IconDimSum01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDimSum01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-stroke-sharp IconDimSum01StrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDimSum01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dim-sum-01-solid-sharp IconDimSum01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDimSum01: TheIconSelfPack = {
  name: 'DimSum01',
  StrokeRounded: IconDimSum01StrokeRounded,
  DuotoneRounded: IconDimSum01DuotoneRounded,
  TwotoneRounded: IconDimSum01TwotoneRounded,
  SolidRounded: IconDimSum01SolidRounded,
  BulkRounded: IconDimSum01BulkRounded,
  StrokeSharp: IconDimSum01StrokeSharp,
  SolidSharp: IconDimSum01SolidSharp,
};