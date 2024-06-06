import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.5 13H6.4C4.32582 13 3.28873 13 2.64437 12.3556C2 11.7113 2 10.6742 2 8.6V6.4C2 4.32582 2 3.28873 2.64437 2.64437C3.28873 2 4.32582 2 6.4 2H8.6C10.6742 2 11.7113 2 12.3556 2.64437C13 3.28873 13 4.32582 13 6.4V7.5',
  d2: 'M12.0348 19C9.17734 18.5206 7 16.0355 7 13.0418C7 9.70499 9.70499 7 13.0418 7C16.0355 7 18.5206 9.17734 19 12.0348',
  d3: 'M8.6 2H6.4C4.32582 2 3.28873 2 2.64437 2.64437C2 3.28873 2 4.32582 2 6.4V8.6C2 10.6742 2 11.7113 2.64437 12.3556C3.28873 13 4.32582 13 6.4 13H7.00014C7.02251 9.69636 9.69636 7.02251 13 7.00014V6.4C13 4.32582 13 3.28873 12.3556 2.64437C11.7113 2 10.6742 2 8.6 2Z',
  d4: 'M17.002 21.998C19.7628 21.998 22.001 19.7605 22.001 17.0004C22.001 14.2402 19.7628 12.0027 17.002 12.0027C14.2411 12.0027 12.0029 14.2402 12.0029 17.0004C12.0029 19.7605 14.2411 21.998 17.002 21.998Z',
  d5: 'M6.39914 12.9971C4.32537 12.9971 3.28848 12.9971 2.64424 12.353C2 11.709 2 10.6723 2 8.59912V6.40014C2 4.32693 2 3.29033 2.64424 2.64627C3.28848 2.0022 4.32537 2.0022 6.39914 2.0022H8.59871C10.6725 2.0022 11.7094 2.0022 12.3536 2.64627C12.9979 3.29033 12.9979 4.32693 12.9979 6.40014M12.0328 18.9943C9.17594 18.5151 6.99902 16.0311 6.99902 13.0388C6.99902 9.70359 9.70349 6.99986 13.0396 6.99986C16.0328 6.99986 18.5174 9.17619 18.9967 12.0323',
  d6: 'M11.25 17C11.25 13.8244 13.8244 11.25 17 11.25C20.1756 11.25 22.75 13.8244 22.75 17C22.75 20.1756 20.1756 22.75 17 22.75C13.8244 22.75 11.25 20.1756 11.25 17Z',
  d7: 'M13.0402 8.17855C10.3552 8.17855 8.17855 10.3552 8.17855 13.0402C8.17855 15.4482 9.93016 17.449 12.2288 17.8346C12.754 17.9227 13.1083 18.4199 13.0202 18.9451C12.9321 19.4703 12.4349 19.8247 11.9097 19.7366C8.6975 19.1977 6.25 16.4057 6.25 13.0402C6.25 9.29008 9.29008 6.25 13.0402 6.25C16.4057 6.25 19.1977 8.6975 19.7366 11.9097C19.8247 12.4349 19.4703 12.9321 18.9451 13.0202C18.4199 13.1083 17.9227 12.754 17.8346 12.2288C17.449 9.93016 15.4482 8.17855 13.0402 8.17855Z',
  d8: 'M8.65278 1.25C9.64493 1.24997 10.4647 1.24995 11.1139 1.33724C11.7962 1.42896 12.4012 1.62928 12.886 2.11404C13.3707 2.5988 13.571 3.20381 13.6628 3.88607C13.7501 4.53527 13.75 5.35508 13.75 6.34722V6.34725L13.75 7.00014C13.75 7.41237 13.4173 7.74733 13.0051 7.75013C10.1117 7.76971 7.76971 10.1117 7.75013 13.0051C7.74733 13.4173 7.41237 13.75 7.00014 13.75L6.34725 13.75H6.34722C5.35508 13.75 4.53527 13.7501 3.88607 13.6628C3.20381 13.571 2.5988 13.3707 2.11404 12.886C1.62928 12.4012 1.42896 11.7962 1.33724 11.1139C1.24995 10.4647 1.24997 9.64493 1.25 8.65278V8.65276V6.34724V6.34722C1.24997 5.35507 1.24995 4.53527 1.33724 3.88607C1.42896 3.20381 1.62928 2.5988 2.11404 2.11404C2.5988 1.62928 3.20381 1.42896 3.88607 1.33724C4.53527 1.24995 5.35507 1.24997 6.34722 1.25H6.34724H8.65276H8.65278Z',
  d9: 'M8.17855 13.0402C8.17855 10.3552 10.3552 8.17855 13.0402 8.17855C15.1033 8.17855 16.8674 9.46429 17.573 11.2782C18.3521 11.3553 19.0855 11.5879 19.7418 11.9445C19.7402 11.9329 19.7385 11.9213 19.7366 11.9097C19.1977 8.6975 16.4057 6.25 13.0402 6.25C9.29008 6.25 6.25 9.29008 6.25 13.0402C6.25 16.4057 8.6975 19.1977 11.9097 19.7366C11.9213 19.7385 11.9329 19.7402 11.9445 19.7418C11.5879 19.0855 11.3553 18.3521 11.2782 17.573C9.46429 16.8674 8.17855 15.1033 8.17855 13.0402Z',
  d10: 'M7 13H2V2H13V7',
  d11: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H13C13.4142 1.25 13.75 1.58579 13.75 2V6.38634C16.7359 6.69739 19.1372 8.97013 19.645 11.8931C21.4897 12.8505 22.75 14.7781 22.75 17C22.75 20.1756 20.1756 22.75 17 22.75C14.7773 22.75 12.8491 21.4888 11.8921 19.643C8.97086 19.1342 6.69969 16.7343 6.38809 13.75H2C1.58579 13.75 1.25 13.4142 1.25 13V2ZM11.2715 17.5011C11.2573 17.336 11.25 17.1688 11.25 17C11.25 13.8244 13.8244 11.25 17 11.25C17.1696 11.25 17.3375 11.2573 17.5034 11.2717C16.7981 9.5024 15.0683 8.25185 13.0478 8.25185C10.4 8.25185 8.25344 10.3984 8.25344 13.0462C8.25344 15.0661 9.50314 16.7954 11.2715 17.5011Z',
};

export const IconBlendStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-stroke-rounded IconBlendStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="17" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconBlendDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-duotone-rounded IconBlendDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="17" 
        cy="17" 
        r="5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="17" 
        cy="17" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconBlendTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-twotone-rounded IconBlendTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlendSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-solid-rounded IconBlendSolidRounded"
    >
      <path 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlendBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-bulk-rounded IconBlendBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlendStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-stroke-sharp IconBlendStrokeSharp"
    >
      <circle 
        cx="17" 
        cy="17" 
        r="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlendSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blend-solid-sharp IconBlendSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlend: TheIconSelfPack = {
  name: 'Blend',
  StrokeRounded: IconBlendStrokeRounded,
  DuotoneRounded: IconBlendDuotoneRounded,
  TwotoneRounded: IconBlendTwotoneRounded,
  SolidRounded: IconBlendSolidRounded,
  BulkRounded: IconBlendBulkRounded,
  StrokeSharp: IconBlendStrokeSharp,
  SolidSharp: IconBlendSolidSharp,
};