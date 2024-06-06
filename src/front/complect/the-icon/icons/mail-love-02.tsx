import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d2: 'M11.5 19.4959C11.0337 19.4898 9.56682 19.5077 9.09883 19.4959C5.95033 19.4166 4.37608 19.377 3.24496 18.2394C2.11383 17.1018 2.08114 15.5661 2.01577 12.4947C1.99475 11.5071 1.99474 10.5254 2.01576 9.53781C2.08114 6.46642 2.11382 4.93072 3.24495 3.79312C4.37608 2.65551 5.95033 2.61589 9.09882 2.53663C11.0393 2.48779 12.9607 2.48779 14.9012 2.53664C18.0497 2.6159 19.6239 2.65553 20.755 3.79313C21.8862 4.93073 21.9189 6.46643 21.9842 9.53783C21.9983 10.1973 22.0029 10.8542 21.9982 11.512',
  d3: 'M15.015 14.8866C16.0876 14.2469 17.0238 14.5047 17.5863 14.9153C17.8169 15.0837 17.9322 15.1679 18 15.1679C18.0678 15.1679 18.1831 15.0837 18.4137 14.9153C18.9762 14.5047 19.9124 14.2469 20.985 14.8866C22.3928 15.7261 22.7113 18.4958 19.4642 20.8324C18.8457 21.2775 18.5365 21.5 18 21.5C17.4635 21.5 17.1543 21.2775 16.5358 20.8324C13.2887 18.4958 13.6072 15.7261 15.015 14.8866Z',
  d4: 'M3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C22.0053 10.5101 22.0053 11.4899 21.9842 12.4756C21.954 13.8912 21.9308 14.98 21.8032 15.8537C21.6265 15.4336 21.3405 15.0986 20.985 14.8866C19.9124 14.2469 18.9762 14.5047 18.4137 14.9153C18.1831 15.0837 18.0678 15.1679 18 15.1679C17.9322 15.1679 17.8169 15.0837 17.5863 14.9153C17.0239 14.5047 16.0876 14.2469 15.015 14.8866C13.8766 15.5655 13.4505 17.5063 15.0459 19.4598C14.998 19.461 14.9498 19.4622 14.9012 19.4634C12.9607 19.5122 11.0393 19.5122 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094Z',
  d5: 'M14.92 1.78681C12.967 1.73773 11.033 1.73773 9.07999 1.7868L9.02182 1.78826C7.497 1.82655 6.27002 1.85735 5.2867 2.0286C4.2572 2.20789 3.42048 2.55177 2.71362 3.26132C2.00971 3.9679 1.66764 4.7926 1.49176 5.8054C1.32429 6.76978 1.29878 7.9668 1.26719 9.44965L1.26593 9.50839C1.24469 10.5047 1.24469 11.4953 1.26594 12.4916L1.26719 12.5504C1.29879 14.0332 1.32429 15.2302 1.49176 16.1946C1.66764 17.2074 2.00972 18.0321 2.71362 18.7387C3.42048 19.4482 4.2572 19.7921 5.2867 19.9714C6.27001 20.1426 7.49697 20.1735 9.02177 20.2117L9.07999 20.2132C9.96815 20.2355 10.8524 20.2477 11.7362 20.2497C12.2054 20.2508 12.4399 20.2513 12.5288 20.1137C12.6177 19.976 12.5136 19.7468 12.3053 19.2884C12.0538 18.7346 11.8772 18.1593 11.8008 17.6056C11.5499 15.787 12.2482 13.9169 13.8624 12.9542C15.2718 12.1137 16.6596 12.1105 17.7681 12.4987C17.8886 12.5409 17.9489 12.562 17.9999 12.562C18.0509 12.562 18.1111 12.5409 18.2317 12.4987C19.3402 12.1105 20.728 12.1137 22.1373 12.9542C22.24 13.0155 22.2914 13.0461 22.3097 13.054C22.5066 13.1383 22.6914 13.036 22.7243 12.8243C22.7274 12.8046 22.7284 12.7556 22.7305 12.6576V12.6575L22.7328 12.5503L22.7341 12.4916C22.7553 11.4953 22.7553 10.5047 22.7341 9.5084L22.7328 9.44967C22.7012 7.96683 22.6757 6.76979 22.5082 5.80542C22.3324 4.79261 21.9903 3.96792 21.2864 3.26134C20.5795 2.55179 19.7428 2.20791 18.7133 2.02862C17.73 1.85737 16.503 1.82656 14.9782 1.78827L14.92 1.78681ZM7.38182 6.85439C7.02527 6.64358 6.56533 6.76174 6.35452 7.11829C6.14371 7.47485 6.26186 7.93479 6.61841 8.1456L9.56043 9.88503C10.4313 10.3999 11.1827 10.75 12.0001 10.75C12.8175 10.75 13.569 10.3999 14.4398 9.88503L17.3818 8.1456C17.7384 7.93479 17.8565 7.47485 17.6457 7.11829C17.4349 6.76174 16.975 6.64358 16.6184 6.85439L13.6764 8.59382C12.832 9.09304 12.3831 9.25 12.0001 9.25C11.6171 9.25 11.1682 9.09304 10.3238 8.59382L7.38182 6.85439Z',
  d6: 'M17.9996 14.2893C18.7725 13.7397 20.0195 13.4381 21.3688 14.2427C22.3751 14.8429 22.8968 16.0671 22.7128 17.4009C22.5274 18.7448 21.645 20.1871 19.9019 21.4415C19.348 21.8412 18.7809 22.2503 17.9996 22.2503C17.2183 22.2503 16.6513 21.8412 16.0974 21.4415C14.3543 20.1871 13.4719 18.7448 13.2865 17.4009C13.1025 16.0671 13.6241 14.8429 14.6305 14.2427C15.9798 13.4381 17.2268 13.7397 17.9996 14.2893Z',
  d7: 'M9.07999 1.7868C11.033 1.73773 12.967 1.73773 14.92 1.78681L14.9782 1.78827C16.503 1.82656 17.73 1.85737 18.7133 2.02862C19.7428 2.20791 20.5795 2.55179 21.2864 3.26134C21.9903 3.96792 22.3324 4.79261 22.5082 5.80542C22.6757 6.76979 22.7012 7.96683 22.7328 9.44967L22.7341 9.5084C22.7553 10.5047 22.7553 11.4953 22.7341 12.4916L22.7305 12.6575C22.7284 12.7555 22.7274 12.8046 22.7243 12.8243C22.6914 13.036 22.5066 13.1383 22.3097 13.054C22.2914 13.0461 22.24 13.0155 22.1373 12.9542C20.728 12.1137 19.3402 12.1105 18.2317 12.4987C18.1111 12.5409 18.0509 12.562 17.9999 12.562C17.9489 12.562 17.8886 12.5409 17.7681 12.4987C16.6596 12.1105 15.2718 12.1137 13.8624 12.9542C12.2482 13.9169 11.5499 15.787 11.8008 17.6056C11.8772 18.1593 12.0538 18.7346 12.3053 19.2884C12.5136 19.7468 12.6177 19.976 12.5288 20.1137C12.4399 20.2513 12.2054 20.2508 11.7362 20.2497C10.8524 20.2477 9.96815 20.2355 9.07999 20.2132L9.02177 20.2117C7.49697 20.1735 6.27001 20.1426 5.2867 19.9714C4.2572 19.7921 3.42048 19.4482 2.71362 18.7387C2.00972 18.0321 1.66764 17.2074 1.49176 16.1946C1.32429 15.2302 1.29879 14.0332 1.26719 12.5504L1.26594 12.4916C1.24469 11.4953 1.24469 10.5047 1.26593 9.50839L1.26719 9.44965C1.29878 7.9668 1.32429 6.76978 1.49176 5.8054C1.66764 4.7926 2.00971 3.9679 2.71362 3.26132C3.42048 2.55177 4.2572 2.20789 5.2867 2.0286C6.27002 1.85735 7.497 1.82655 9.02182 1.78826L9.07999 1.7868Z',
  d8: 'M16.4912 6.63919C16.9666 6.35811 17.5798 6.51564 17.8609 6.99105C18.142 7.46646 17.9845 8.07971 17.509 8.36079L14.567 10.1002C13.6915 10.6179 12.8897 11 12.0001 11C11.1105 11 10.3087 10.6179 9.43319 10.1002L6.49117 8.36079C6.01576 8.07971 5.85823 7.46646 6.13931 6.99105C6.42039 6.51564 7.03364 6.35811 7.50905 6.63919L10.4511 8.37862C11.2914 8.87545 11.6897 8.99999 12.0001 8.99999C12.3105 8.99999 12.7088 8.87545 13.5492 8.37862L16.4912 6.63919Z',
  d9: 'M22 11V2.5H2V19.5H10',
  d10: 'M6 7L12 11L18 7',
  d11: 'M20.7431 14.7896C19.1464 13.957 18 15.1843 18 15.1843C18 15.1843 16.8535 13.957 15.2568 14.7896C13.3229 15.798 13.1841 19.7469 18 21.5C22.8159 19.7469 22.677 15.798 20.7431 14.7896Z',
  d12: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V13.8199C22.4445 13.5029 22.0832 13.229 21.6661 13.0127C20.2501 12.2786 18.934 12.4418 18.0062 12.8265L18.0009 12.8288L17.9955 12.8265C17.0677 12.4418 15.7516 12.2785 14.3356 13.0127C12.3904 14.0213 11.6564 16.2858 12.1557 18.3176C12.3224 18.9962 12.616 19.646 13.0312 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d13: 'M17.5167 13.9812C17.7018 14.058 17.8639 14.1458 18.0008 14.2317C18.1378 14.1458 18.2999 14.058 18.485 13.9812C19.1377 13.7106 20.0606 13.5883 21.0907 14.1225C22.423 14.8132 23.0226 16.43 22.6322 18.0193C22.2329 19.6443 20.8381 21.223 18.2574 22.1571L18.0009 22.25L17.7443 22.1571C15.1636 21.223 13.7688 19.6443 13.3695 18.0193C12.979 16.43 13.5786 14.8132 14.9109 14.1225C15.9411 13.5883 16.864 13.7106 17.5167 13.9812Z',
};

export const IconMailLove02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-stroke-rounded IconMailLove02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMailLove02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-duotone-rounded IconMailLove02DuotoneRounded"
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

export const IconMailLove02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-twotone-rounded IconMailLove02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailLove02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-solid-rounded IconMailLove02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailLove02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-bulk-rounded IconMailLove02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailLove02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-stroke-sharp IconMailLove02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailLove02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-love-02-solid-sharp IconMailLove02SolidSharp"
    >
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

export const iconPackOfMailLove02: TheIconSelfPack = {
  name: 'MailLove02',
  StrokeRounded: IconMailLove02StrokeRounded,
  DuotoneRounded: IconMailLove02DuotoneRounded,
  TwotoneRounded: IconMailLove02TwotoneRounded,
  SolidRounded: IconMailLove02SolidRounded,
  BulkRounded: IconMailLove02BulkRounded,
  StrokeSharp: IconMailLove02StrokeSharp,
  SolidSharp: IconMailLove02SolidSharp,
};