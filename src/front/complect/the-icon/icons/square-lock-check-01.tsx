import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 20C14 20 15 20 16 22C16 22 19.1765 17 22 16',
  d2: 'M18 14C17.9505 13.3775 17.8765 12.7622 17.7944 12.1553C17.5686 10.485 16.1797 9.17649 14.4896 9.09909C13.0673 9.03397 11.6226 9 10.0316 9C8.44068 9 6.99596 9.03397 5.57374 9.09909C3.88355 9.17649 2.49464 10.485 2.26887 12.1553C2.12152 13.2453 2 14.3624 2 15.5C2 16.6376 2.12152 17.7547 2.26887 18.8447C2.49464 20.515 3.88355 21.8235 5.57374 21.9009C6.99596 21.966 8.44068 22 10.0316 22C10.5344 22 11.0225 21.9966 11.5 21.9899',
  d3: 'M5.5 9V6.5C5.5 4.01472 7.51472 2 10 2C12.4853 2 14.5 4.01472 14.5 6.5V9',
  d4: 'M2.26781 18.8447C2.49269 20.515 3.87613 21.8235 5.55966 21.9009C6.97627 21.966 8.4153 22 10 22C11.5847 22 13.0237 21.966 14.4403 21.9009C16.1239 21.8235 17.5073 20.515 17.7322 18.8447C17.879 17.7547 18 16.6376 18 15.5C18 14.3624 17.879 13.2453 17.7322 12.1553C17.5073 10.485 16.1239 9.17649 14.4403 9.09909C13.0237 9.03397 11.5847 9 10 9C8.4153 9 6.97627 9.03397 5.55966 9.09909C3.87613 9.17649 2.49269 10.485 2.26781 12.1553C2.12104 13.2453 2 14.3624 2 15.5C2 16.6376 2.12104 17.7547 2.26781 18.8447Z',
  d5: 'M10 3.25C8.067 3.25 6.5 4.817 6.5 6.75V9.25C6.5 9.80228 6.05228 10.25 5.5 10.25C4.94772 10.25 4.5 9.80228 4.5 9.25V6.75C4.5 3.71243 6.96243 1.25 10 1.25C13.0376 1.25 15.5 3.71243 15.5 6.75V9.25C15.5 9.80228 15.0523 10.25 14.5 10.25C13.9477 10.25 13.5 9.80228 13.5 9.25V6.75C13.5 4.817 11.933 3.25 10 3.25Z',
  d6: 'M22.6926 15.4164C22.877 15.937 22.6044 16.5085 22.0838 16.6929C21.5502 16.8819 20.9337 17.2888 20.2807 17.8615C19.638 18.4251 19.0128 19.1021 18.4591 19.7659C17.9072 20.4274 17.4385 21.0611 17.1074 21.5301C16.9422 21.7641 16.5941 22.2865 16.5941 22.2865C16.4008 22.5906 16.0587 22.7674 15.6989 22.749C15.3389 22.7305 15.0168 22.5198 14.8556 22.1975C14.4149 21.3161 13.8604 20.7649 13.6564 20.7459C13.148 20.6987 12.75 20.271 12.75 19.7503C12.75 19.198 13.1977 18.7503 13.75 18.7503C14.3023 18.7503 14.6553 18.9853 14.9297 19.1682C15.204 19.3511 15.4916 19.6038 15.7804 19.9497C16.0956 19.5189 16.484 19.0113 16.9233 18.4847C17.5166 17.7735 18.215 17.0129 18.962 16.3578C19.6986 15.7118 20.538 15.1186 21.4162 14.8076C21.9368 14.6233 22.5082 14.8958 22.6926 15.4164Z',
  d7: 'M5.52522 8.34988C6.95364 8.28422 8.40416 8.25 10 8.25C11.5958 8.25 13.0464 8.28422 14.4748 8.34989C16.5328 8.4445 18.2039 10.0382 18.4755 12.0552C18.5731 12.7803 18.6613 13.5297 18.7101 14.2965C18.7197 14.4481 18.7245 14.5239 18.6947 14.5912C18.6648 14.6585 18.6021 14.7084 18.4767 14.8081C18.3009 14.9479 18.1328 15.0894 17.9729 15.2296C17.1477 15.9533 16.3944 16.7766 15.7715 17.5233C15.7232 17.5812 15.6991 17.6101 15.677 17.6282C15.5947 17.6955 15.5052 17.7137 15.4031 17.684C15.3757 17.676 15.3375 17.6565 15.2612 17.6174L15.2612 17.6174C14.8989 17.4319 14.3931 17.2498 13.75 17.2498C12.3693 17.2498 11.25 18.3691 11.25 19.7498C11.25 20.8529 11.9636 21.788 12.955 22.1204C12.9701 22.1255 12.9777 22.128 12.9829 22.13C13.0302 22.1478 13.0709 22.1762 13.1039 22.2145C13.1076 22.2187 13.0971 22.2056 13.1013 22.2109L13.1013 22.2109C13.1165 22.2298 13.124 22.2392 13.1351 22.2581C13.2314 22.4224 13.1158 22.6723 12.9281 22.7052C12.9067 22.709 12.8929 22.7094 12.8653 22.7102C11.9471 22.7365 11.0022 22.75 10 22.75C8.40416 22.75 6.95364 22.7158 5.52522 22.6501C3.46716 22.5555 1.79609 20.9618 1.52452 18.9448C1.37636 17.8444 1.25 16.6882 1.25 15.5C1.25 14.3118 1.37636 13.1556 1.52452 12.0552C1.79609 10.0382 3.46716 8.4445 5.52522 8.34988Z',
  d8: 'M5.52522 8.34988C6.95364 8.28422 8.40416 8.25 10 8.25C11.5958 8.25 13.0464 8.28422 14.4748 8.34989C16.5328 8.4445 18.2039 10.0382 18.4755 12.0552C18.5731 12.7803 18.6613 13.5297 18.7101 14.2965C18.7197 14.4481 18.7245 14.5239 18.6947 14.5912C18.6648 14.6585 18.6021 14.7084 18.4767 14.8081C18.3009 14.9479 18.1328 15.0894 17.9729 15.2296C17.1477 15.9533 16.3944 16.7766 15.7715 17.5233C15.7232 17.5812 15.6991 17.6101 15.677 17.6282C15.5947 17.6955 15.5052 17.7137 15.4031 17.684C15.3757 17.676 15.3375 17.6565 15.2612 17.6174C14.8989 17.4319 14.3931 17.2498 13.75 17.2498C12.3693 17.2498 11.25 18.3691 11.25 19.7498C11.25 20.8529 11.9636 21.788 12.955 22.1204C12.9701 22.1255 12.9777 22.128 12.9829 22.13C13.0302 22.1478 13.0709 22.1762 13.1039 22.2145C13.1076 22.2187 13.0971 22.2056 13.1013 22.2109C13.1165 22.2298 13.124 22.2392 13.1351 22.2581C13.2314 22.4224 13.1158 22.6723 12.9281 22.7052C12.9067 22.709 12.8929 22.7094 12.8653 22.7102C11.9471 22.7365 11.0022 22.75 10 22.75C8.40416 22.75 6.95364 22.7158 5.52522 22.6501C3.46716 22.5555 1.79609 20.9618 1.52452 18.9448C1.37636 17.8444 1.25 16.6882 1.25 15.5C1.25 14.3118 1.37636 13.1556 1.52452 12.0552C1.79609 10.0382 3.46716 8.4445 5.52522 8.34988Z',
  d9: 'M6.5 6.75C6.5 4.817 8.067 3.25 10 3.25C11.933 3.25 13.5 4.817 13.5 6.75V8.31016C13.827 8.32177 14.1515 8.33502 14.4748 8.34988C14.8298 8.3662 15.1732 8.42712 15.5 8.52712V6.75C15.5 3.71243 13.0376 1.25 10 1.25C6.96243 1.25 4.5 3.71243 4.5 6.75V8.52712C4.82676 8.42712 5.17023 8.3662 5.52522 8.34988C5.84854 8.33502 6.17299 8.32177 6.5 8.31016V6.75Z',
  d10: 'M13.992 19.9998L15.9906 21.9998L21.9863 15.9998M14.5082 9.00683V6.53084C14.5082 3.96508 12.5616 1.99902 10.1259 1.99902C7.69017 1.99902 5.55192 3.96508 5.55192 6.53084L5.43219 9.00683M17.9984 14.0266V9.00683H1.99121L1.99241 22.0007H11.0132',
  d11: 'M22.7501 16.0431L16.043 22.7502L13.3359 20.0431L14.7501 18.6289L16.043 19.9218L21.3359 14.6289L22.7501 16.0431Z',
  d12: 'M9.99994 3.25C8.06694 3.25 6.49994 4.817 6.49994 6.75V9.25H4.49994V6.75C4.49994 3.71243 6.96237 1.25 9.99994 1.25C13.0375 1.25 15.4999 3.71243 15.4999 6.75V9.25H13.4999V6.75C13.4999 4.817 11.9329 3.25 9.99994 3.25Z',
  d13: 'M18.7499 8.25H1.24994V22.75H13.9214L11.2148 20.0433L14.7503 16.5078L16.0432 17.8007L18.7499 15.094V8.25Z',
};

export const IconSquareLockCheck01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-stroke-rounded IconSquareLockCheck01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-duotone-rounded IconSquareLockCheck01DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-twotone-rounded IconSquareLockCheck01TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-solid-rounded IconSquareLockCheck01SolidRounded"
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

export const IconSquareLockCheck01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-bulk-rounded IconSquareLockCheck01BulkRounded"
    >
      <path 
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

export const IconSquareLockCheck01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-stroke-sharp IconSquareLockCheck01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockCheck01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-check-01-solid-sharp IconSquareLockCheck01SolidSharp"
    >
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareLockCheck01: TheIconSelfPack = {
  name: 'SquareLockCheck01',
  StrokeRounded: IconSquareLockCheck01StrokeRounded,
  DuotoneRounded: IconSquareLockCheck01DuotoneRounded,
  TwotoneRounded: IconSquareLockCheck01TwotoneRounded,
  SolidRounded: IconSquareLockCheck01SolidRounded,
  BulkRounded: IconSquareLockCheck01BulkRounded,
  StrokeSharp: IconSquareLockCheck01StrokeSharp,
  SolidSharp: IconSquareLockCheck01SolidSharp,
};