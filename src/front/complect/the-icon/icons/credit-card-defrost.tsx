import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 9.5C21.9635 7.24771 21.7892 5.94656 20.9564 5.0129C20.7879 4.82403 20.6022 4.64935 20.4014 4.49087C19.1461 3.5 17.2659 3.5 13.5056 3.5H10.5041C6.74371 3.5 4.86352 3.5 3.60823 4.49087C3.40746 4.64935 3.22178 4.82403 3.05331 5.0129C2 6.19377 2 7.96252 2 11.5C2 15.0375 2 16.8062 3.05331 17.9871C3.22178 18.176 3.40746 18.3506 3.60823 18.5091C4.86352 19.5 6.74371 19.5 10.5041 19.5H11.5',
  d2: 'M2 8.5H22',
  d3: 'M15.0161 12.5C11.8458 15.2942 17.3195 17.2518 15.0161 20.5M18.2161 12.5C15.0458 15.2942 20.5195 17.2518 18.2161 20.5M21.4161 12.5C18.2458 15.2942 23.7195 17.2518 21.4161 20.5',
  d4: 'M10.5 19.5H13.5C17.2586 19.5 19.1379 19.5 20.3925 18.5091C20.5932 18.3506 20.7788 18.176 20.9472 17.9871C22 16.8062 22 15.0375 22 11.5C22 10.3169 22 9.3316 21.9606 8.5H2.03939C2 9.3316 2 10.3169 2 11.5C2 15.0375 2 16.8062 3.0528 17.9871C3.22119 18.176 3.40678 18.3506 3.60746 18.5091C4.86213 19.5 6.74142 19.5 10.5 19.5Z',
  d5: 'M15.5788 12.0041C15.8527 12.3149 15.8228 12.7888 15.5121 13.0627C14.846 13.6497 14.7344 14.0892 14.7516 14.4346C14.773 14.8626 14.9935 15.3231 15.3483 15.9685C15.3742 16.0156 15.4009 16.0639 15.4282 16.1131C15.7391 16.6749 16.1228 17.3682 16.2769 18.1225C16.4576 19.0071 16.3254 19.9503 15.628 20.9338C15.3884 21.2717 14.9202 21.3514 14.5823 21.1118C14.2444 20.8722 14.1648 20.4041 14.4044 20.0662C14.8586 19.4256 14.906 18.9061 14.8073 18.4227C14.7011 17.9032 14.4264 17.4041 14.0889 16.7913C14.0707 16.7582 14.0524 16.7248 14.0338 16.6911C13.7043 16.0917 13.2948 15.3359 13.2535 14.5095C13.2081 13.6005 13.6011 12.7475 14.5203 11.9374C14.831 11.6635 15.3049 11.6934 15.5788 12.0041ZM18.7788 12.0041C19.0527 12.3149 19.0228 12.7888 18.7121 13.0627C18.046 13.6497 17.9344 14.0892 17.9516 14.4346C17.973 14.8626 18.1935 15.3231 18.5483 15.9685C18.5742 16.0156 18.6009 16.0639 18.6282 16.1131C18.9391 16.6749 19.3228 17.3682 19.4769 18.1225C19.6576 19.0071 19.5254 19.9503 18.828 20.9338C18.5884 21.2717 18.1202 21.3514 17.7823 21.1118C17.4444 20.8722 17.3648 20.4041 17.6044 20.0662C18.0586 19.4256 18.106 18.9061 18.0073 18.4227C17.9011 17.9032 17.6264 17.4041 17.2889 16.7913C17.2707 16.7582 17.2524 16.7248 17.2338 16.6911C16.9043 16.0917 16.4948 15.3359 16.4535 14.5095C16.4081 13.6005 16.8011 12.7475 17.7203 11.9374C18.031 11.6635 18.5049 11.6934 18.7788 12.0041ZM21.9788 12.0041C22.2527 12.3149 22.2228 12.7888 21.9121 13.0627C21.246 13.6497 21.1344 14.0892 21.1516 14.4346C21.173 14.8626 21.3935 15.3231 21.7483 15.9685C21.7742 16.0156 21.8009 16.0639 21.8282 16.1131C22.1391 16.6749 22.5228 17.3682 22.6769 18.1225C22.8576 19.0071 22.7254 19.9503 22.028 20.9338C21.7884 21.2717 21.3202 21.3514 20.9823 21.1118C20.6444 20.8722 20.5648 20.4041 20.8044 20.0662C21.2586 19.4256 21.306 18.9061 21.2073 18.4227C21.1011 17.9032 20.8264 17.4041 20.4889 16.7913C20.4707 16.7582 20.4524 16.7248 20.4338 16.6911C20.1043 16.0917 19.6948 15.3359 19.6535 14.5095C19.6081 13.6005 20.0011 12.7475 20.9203 11.9374C21.231 11.6635 21.7049 11.6934 21.9788 12.0041Z',
  d6: 'M17.9694 2.8786C16.8308 2.74998 15.3866 2.74999 13.5476 2.75H10.4525C8.61347 2.74999 7.16918 2.74998 6.03059 2.8786C4.86843 3.00988 3.92602 3.28362 3.14264 3.90229C2.90812 4.08749 2.69069 4.29205 2.49299 4.5138C1.82682 5.26101 1.52933 6.16669 1.38764 7.27785C1.37133 7.4057 1.36318 7.46963 1.37784 7.52579C1.40128 7.61554 1.47015 7.69375 1.55622 7.72835C1.61007 7.75 1.67746 7.75 1.81224 7.75H22.1878C22.3226 7.75 22.39 7.75 22.4438 7.72835C22.5299 7.69375 22.5987 7.61553 22.6222 7.52579C22.6368 7.46963 22.6287 7.4057 22.6124 7.27785C22.4707 6.16669 22.1732 5.26101 21.507 4.5138C21.3093 4.29205 21.0919 4.08749 20.8574 3.90229C20.074 3.28362 19.1316 3.00988 17.9694 2.8786Z',
  d7: 'M22.7432 9.68781C22.7471 9.9988 22.7491 10.1543 22.7108 10.2237C22.6629 10.3106 22.6243 10.3411 22.5288 10.3677C22.4524 10.3891 22.2649 10.3423 21.89 10.2488C21.3737 10.1201 20.8122 10.1904 20.2824 10.5312C20.0297 10.6938 19.9034 10.775 19.8172 10.7761C19.7311 10.7772 19.6005 10.6978 19.3393 10.5389C18.6735 10.1338 17.849 10.0874 17.0748 10.5626C16.8321 10.7115 16.7107 10.786 16.6275 10.7868C16.5444 10.7876 16.415 10.7116 16.1562 10.5595C15.3407 10.0802 14.2769 10.1525 13.5285 10.8121C12.3579 11.8438 11.6818 13.11 11.7555 14.5844C11.8148 15.7711 12.3778 16.7933 12.6912 17.3624C13.0344 17.9858 13.2543 18.4098 13.3245 18.6681C13.334 18.7028 13.3387 18.7202 13.3412 18.7444C13.3437 18.7686 13.3435 18.772 13.3431 18.7787C13.3388 18.8527 13.3022 18.9898 13.1809 19.1985C13.0621 19.3661 12.9694 19.5443 12.9021 19.7283C12.8013 20.0039 12.7509 20.1418 12.6735 20.1959C12.5961 20.25 12.4783 20.25 12.2426 20.25H10.4525C8.61345 20.25 7.16917 20.25 6.03058 20.1214C4.86842 19.9901 3.926 19.7164 3.14263 19.0977C2.90811 18.9125 2.69068 18.7079 2.49298 18.4862C1.82681 17.739 1.52932 16.8333 1.38763 15.7222C1.24998 14.6427 1.24999 13.2767 1.25 11.5527V11.4473C1.25 10.8715 1.24999 10.3357 1.25512 9.83709C1.25795 9.5614 1.25937 9.42356 1.34704 9.33678C1.43472 9.25 1.57361 9.25 1.85139 9.25H22.2762C22.4311 9.25 22.5086 9.25 22.5693 9.27864C22.6308 9.30762 22.6814 9.35755 22.7111 9.41866C22.7405 9.47905 22.7414 9.54863 22.7432 9.68781Z',
  d8: 'M17.9703 2.8786C16.8317 2.74998 15.3875 2.74999 13.5485 2.75H10.4534C8.61437 2.74999 7.17008 2.74998 6.03149 2.8786C4.86933 3.00988 3.92692 3.28362 3.14354 3.90229C2.90902 4.08749 2.69159 4.29205 2.49389 4.5138C1.82772 5.26101 1.53023 6.16669 1.38854 7.27785C1.37223 7.4057 1.36408 7.46963 1.37874 7.52579C1.40218 7.61554 1.47105 7.69375 1.55712 7.72835C1.61097 7.75 1.67836 7.75 1.81314 7.75H22.1887C22.3235 7.75 22.3909 7.75 22.4447 7.72835C22.5308 7.69375 22.5996 7.61553 22.6231 7.52579C22.6377 7.46963 22.6296 7.4057 22.6133 7.27785C22.4716 6.16669 22.1741 5.26101 21.5079 4.5138C21.3102 4.29205 21.0928 4.08749 20.8583 3.90229C20.0749 3.28362 19.1325 3.00988 17.9703 2.8786Z',
  d9: 'M22 10.5V3.5H2V19.5H12',
  d10: 'M13.2535 15.3255C13.2081 14.4165 13.6011 13.5635 14.5203 12.7534L15.5121 13.8787C14.846 14.4658 14.7344 14.9053 14.7516 15.2507C14.773 15.6787 14.9935 16.1392 15.3483 16.7845C15.3742 16.8317 15.4009 16.8799 15.4282 16.9292C15.7391 17.491 16.1228 18.1843 16.2769 18.9386C16.4576 19.8231 16.3254 20.7664 15.628 21.7499L14.4044 20.8822C14.8586 20.2416 14.906 19.7221 14.8073 19.2388C14.7011 18.7193 14.4264 18.2202 14.0889 17.6073C14.0707 17.5743 14.0524 17.5409 14.0338 17.5071C13.7043 16.9078 13.2948 16.152 13.2535 15.3255ZM16.4535 15.3255C16.4081 14.4165 16.8011 13.5635 17.7203 12.7534L18.7121 13.8787C18.046 14.4658 17.9344 14.9053 17.9516 15.2507C17.973 15.6787 18.1935 16.1392 18.5483 16.7845C18.5742 16.8317 18.6009 16.8799 18.6282 16.9292C18.9391 17.491 19.3228 18.1843 19.4769 18.9386C19.6576 19.8231 19.5254 20.7664 18.828 21.7499L17.6044 20.8822C18.0586 20.2416 18.106 19.7221 18.0073 19.2388C17.9011 18.7193 17.6264 18.2202 17.2889 17.6073C17.2707 17.5743 17.2524 17.5409 17.2338 17.5071C16.9043 16.9078 16.4948 16.152 16.4535 15.3255ZM19.6535 15.3255C19.6081 14.4165 20.0011 13.5635 20.9203 12.7534L21.9121 13.8787C21.246 14.4658 21.1344 14.9053 21.1516 15.2507C21.173 15.6787 21.3935 16.1392 21.7483 16.7845C21.7742 16.8317 21.8009 16.8799 21.8282 16.9292C22.1391 17.491 22.5228 18.1843 22.6769 18.9386C22.8576 19.8231 22.7254 20.7664 22.028 21.7499L20.8044 20.8822C21.2586 20.2416 21.306 19.7221 21.2073 19.2388C21.1011 18.7193 20.8264 18.2202 20.4889 17.6073C20.4707 17.5743 20.4524 17.5409 20.4338 17.5071C20.1043 16.9078 19.6948 16.152 19.6535 15.3255Z',
  d11: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V7.25H1.25V3Z',
  d12: 'M1.25 8.75H22.75V12.5609L21.0538 10.6364L19.9285 11.6282C19.6965 11.8327 19.484 12.0464 19.2928 12.2691L17.8538 10.6364L16.7285 11.6282C16.4965 11.8327 16.284 12.0464 16.0928 12.2691L14.6538 10.6364L13.5285 11.6282C12.3579 12.66 11.6818 13.9261 11.7555 15.4005C11.8148 16.5872 12.3778 17.6095 12.6912 18.1786C13.0599 18.8483 13.2864 19.2879 13.3377 19.5391C13.3549 19.6236 13.3514 19.6641 13.3447 19.696C13.3424 19.7072 13.338 19.7251 13.329 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V8.75Z',
};

export const IconCreditCardDefrostStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-stroke-rounded IconCreditCardDefrostStrokeRounded"
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

export const IconCreditCardDefrostDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-duotone-rounded IconCreditCardDefrostDuotoneRounded"
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

export const IconCreditCardDefrostTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-twotone-rounded IconCreditCardDefrostTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardDefrostSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-solid-rounded IconCreditCardDefrostSolidRounded"
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

export const IconCreditCardDefrostBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-bulk-rounded IconCreditCardDefrostBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCreditCardDefrostStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-stroke-sharp IconCreditCardDefrostStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardDefrostSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-defrost-solid-sharp IconCreditCardDefrostSolidSharp"
    >
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

export const iconPackOfCreditCardDefrost: TheIconSelfPack = {
  name: 'CreditCardDefrost',
  StrokeRounded: IconCreditCardDefrostStrokeRounded,
  DuotoneRounded: IconCreditCardDefrostDuotoneRounded,
  TwotoneRounded: IconCreditCardDefrostTwotoneRounded,
  SolidRounded: IconCreditCardDefrostSolidRounded,
  BulkRounded: IconCreditCardDefrostBulkRounded,
  StrokeSharp: IconCreditCardDefrostStrokeSharp,
  SolidSharp: IconCreditCardDefrostSolidSharp,
};