import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.9909 22H7.00911C5.74413 22 5.84958 20.2425 6.34622 19.4962C7.19456 18.2213 8.83234 16.6274 9.07261 15.0628L10.0036 9H13.9964L14.9274 15.0628C15.1677 16.6274 16.8054 18.2213 17.6538 19.4962C18.1504 20.2425 18.2559 22 16.9909 22Z',
  d2: 'M7.5 5.1513V2.20709C7.5 2.03185 7.69777 1.93612 7.82804 2.0483L10.2219 4.1099C10.4016 4.26468 10.6281 4.34944 10.8621 4.34944H13.1379C13.3719 4.34944 13.5984 4.26468 13.7781 4.1099L16.172 2.0483C16.3022 1.93612 16.5 2.03185 16.5 2.20709V5.1513C16.5 5.63483 16.336 6.10305 16.0364 6.4745L14.2998 8.62815C14.1099 8.86377 13.8284 9 13.5316 9H10.4684C10.1716 9 9.89015 8.86377 9.70015 8.62815L7.96356 6.47451C7.66403 6.10305 7.5 5.63483 7.5 5.1513Z',
  d3: 'M6 18H18',
  d4: 'M9.11632 9.10288C9.14715 9.1411 9.17942 9.17787 9.21303 9.21312L8.3316 14.9512C8.21264 15.7256 7.62598 16.5858 6.88404 17.5416C6.70852 17.7678 6.67709 18.074 6.80302 18.3311C6.92894 18.5881 7.19027 18.7511 7.47657 18.7511H16.524C16.8103 18.7511 17.0717 18.5881 17.1976 18.3311C17.3235 18.074 17.2921 17.7678 17.1166 17.5416C16.3746 16.5858 15.788 15.7256 15.669 14.9512L14.7875 9.21258C14.8209 9.17749 14.853 9.1409 14.8837 9.10288L16.6203 6.94989C17.0289 6.44332 17.25 5.80858 17.25 5.15644V2.21311C17.25 1.44686 16.3368 0.922996 15.6825 1.48624L13.2887 3.54723C13.243 3.58654 13.1895 3.60504 13.138 3.60504H10.8621C10.8105 3.60504 10.757 3.58654 10.7113 3.54723L8.31747 1.48624C7.66326 0.92299 6.75001 1.44686 6.75001 2.21311V5.15644C6.75001 5.80858 6.97113 6.44332 7.37973 6.94989L9.11632 9.10288Z',
  d5: 'M6 17C5.44772 17 5 17.4476 5 17.9997C5 18.4774 5.33519 18.8769 5.78329 18.9759C5.77045 18.9939 5.75776 19.0118 5.74524 19.0297C5.36932 19.5665 5.17882 20.3651 5.27447 21.06C5.32413 21.4207 5.46308 21.8419 5.7916 22.1857C6.14467 22.5551 6.63485 22.7483 7.18727 22.7483H16.8127C17.3652 22.7483 17.8553 22.5551 18.2084 22.1857C18.5369 21.8419 18.6759 21.4207 18.7255 21.06C18.8212 20.3651 18.6307 19.5665 18.2548 19.0297C18.2422 19.0118 18.2296 18.9939 18.2167 18.9759C18.6648 18.8769 19 18.4774 19 17.9997C19 17.4476 18.5523 17 18 17H6ZM7.35084 20.0451C7.55659 19.7512 7.81272 19.4405 8.10799 19.0827H15.892C16.1873 19.4405 16.4434 19.7512 16.6492 20.0451C16.6885 20.1012 16.7459 20.2189 16.7843 20.3833C16.822 20.5443 16.8299 20.701 16.8132 20.8222C16.8075 20.8635 16.8001 20.8939 16.7933 20.9155H7.20672C7.19991 20.8939 7.19246 20.8635 7.18679 20.8222C7.1701 20.701 7.17801 20.5443 7.21567 20.3833C7.25413 20.2189 7.3115 20.1012 7.35084 20.0451Z',
  d6: 'M13.9958 9.01904L14.6998 13.6158C14.8507 14.601 15.1094 15.5671 15.5102 16.4792C16.008 17.6121 16.7293 19.1427 17.2843 19.8657C17.7652 20.4919 17.9998 21.2643 18 22.0547H6C6 21.2639 6.23443 20.4917 6.71544 19.8652C7.27043 19.1422 7.99158 17.6114 8.48921 16.4786C8.88969 15.5669 9.14823 14.6012 9.29902 13.6166L10.0031 9.01904H13.9958Z',
  d7: 'M5 18.0437H19',
  d8: 'M10.4857 4.51698L12.0432 4.49366L13.5224 4.51698L16.337 2.08312C16.4018 2.02708 16.5023 2.07325 16.5023 2.15906V6.50637L14.035 9.00817C14.0162 9.02722 13.9906 9.03794 13.9638 9.03794H12.0088H10.0443C10.0176 9.03794 9.99197 9.02722 9.97318 9.00817L7.50586 6.50637V2.15906C7.50586 2.07325 7.60636 2.02708 7.67117 2.08312L10.4857 4.51698Z',
  d9: 'M7.18188 1.32082C7.44542 1.19738 7.75658 1.23754 7.98014 1.42384L10.7715 3.75001H13.2285L16.0199 1.42384C16.2434 1.23754 16.5546 1.19738 16.8181 1.32082C17.0817 1.44425 17.25 1.709 17.25 2.00001V6.81076L14.5303 9.53043C14.3897 9.67109 14.1989 9.7501 14 9.7501H10C9.80109 9.7501 9.61032 9.67109 9.46967 9.53043L6.75 6.81076V2.00001C6.75 1.709 6.91834 1.44425 7.18188 1.32082Z',
  d10: 'M19 18.75H5V17.25H19V18.75Z',
  d11: 'M15.4411 13.4703C15.562 14.2576 15.7549 15.0232 16.0364 15.7499H7.96276C8.24407 15.0235 8.43685 14.2581 8.55772 13.4711L9.35951 8.24988H14.6395L15.4411 13.4703Z',
  d12: 'M5 17.2499V18.7499H6.51855C6.3777 18.9916 6.24327 19.2002 6.12113 19.3589C5.52857 20.1287 5.25 21.0641 5.25 21.9999V22.7499H18.7502L18.75 21.9997C18.7498 21.0643 18.471 20.1288 17.8786 19.3593C17.7564 19.2006 17.6219 18.9918 17.4809 18.7499H19V17.2499H5Z',
};

export const IconChess01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-stroke-rounded IconChess01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChess01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-duotone-rounded IconChess01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconChess01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-twotone-rounded IconChess01TwotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconChess01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-solid-rounded IconChess01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChess01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-bulk-rounded IconChess01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChess01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-stroke-sharp IconChess01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChess01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chess-01-solid-sharp IconChess01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChess01: TheIconSelfPack = {
  name: 'Chess01',
  StrokeRounded: IconChess01StrokeRounded,
  DuotoneRounded: IconChess01DuotoneRounded,
  TwotoneRounded: IconChess01TwotoneRounded,
  SolidRounded: IconChess01SolidRounded,
  BulkRounded: IconChess01BulkRounded,
  StrokeSharp: IconChess01StrokeSharp,
  SolidSharp: IconChess01SolidSharp,
};