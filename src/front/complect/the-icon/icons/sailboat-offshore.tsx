import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 19C4.59373 18.0625 3.80546 16.9647 3.39377 15.9482C3.10599 15.2376 2.96211 14.8823 3.2594 14.4411C3.55669 14 4.0378 14 5 14L19 14C19.9622 14 20.4433 14 20.7406 14.4411C21.0379 14.8823 20.894 15.2376 20.6062 15.9482C20.1945 16.9647 19.4063 18.0625 18 19',
  d2: 'M15.1049 3.67393L17.0016 6.92522C17.7979 8.29018 18.1961 8.97266 17.9047 9.48633C17.6133 10 16.8281 10 15.2575 10L10.326 10C8.32157 10 7.31937 10 7.05561 9.38447C6.79185 8.76895 7.47873 8.03307 8.85247 6.56134L11.8873 3.31006C12.7349 2.40195 13.1587 1.9479 13.6615 2.00476C14.1643 2.06161 14.4778 2.59905 15.1049 3.67393Z',
  d3: 'M14 14L14 3',
  d4: 'M2 21.6083C2.79944 22.106 3.83288 22.106 4.65182 21.6083C5.95823 20.7972 7.6546 20.7972 8.9805 21.6083C8.9805 21.6267 9.00001 21.6267 9.00001 21.6267C9.79945 22.1244 10.8524 22.1244 11.6518 21.6267C12.9777 20.8157 14.6741 20.8157 16 21.6267C16.7994 22.1244 17.8329 22.106 18.6518 21.6083C19.6529 20.9868 20.8831 20.8415 22 21.1726',
  d5: 'M6 19C4.59373 18.0625 3.80546 16.9647 3.39377 15.9482C3.10599 15.2376 2.96211 14.8823 3.2594 14.4411C3.55669 14 4.0378 14 5 14L19 14C19.9622 14 20.4433 14 20.7406 14.4411C21.0379 14.8823 20.894 15.2376 20.6062 15.9482C20.1945 16.9647 19.4063 18.0625 18 19L6 19Z',
  d6: 'M6.00047 19C4.5942 18.0625 3.80593 16.9647 3.39424 15.9482C3.10646 15.2376 2.96258 14.8823 3.25987 14.4411C3.55716 14 4.03827 14 5.00047 14H19.0005C19.9627 14 20.4438 14 20.7411 14.4411C21.0384 14.8823 20.8945 15.2376 20.6067 15.9482C20.195 16.9647 19.4068 18.0625 18.0005 19',
  d7: 'M14 14V3M15.1049 3.67393L17.0016 6.92522C17.7979 8.29018 18.1961 8.97266 17.9047 9.48633C17.6133 10 16.8281 10 15.2575 10H10.326C8.32157 10 7.31937 10 7.05561 9.38447C6.79185 8.76895 7.47873 8.03307 8.85247 6.56134L11.8873 3.31006C12.7349 2.40195 13.1587 1.9479 13.6615 2.00476C14.1643 2.06161 14.4778 2.59905 15.1049 3.67393Z',
  d8: 'M13.0938 1.87752C13.4694 1.63635 13.8901 1.46162 14.3934 1.50727C14.9035 1.55354 15.2809 1.80632 15.5943 2.12206C15.875 2.40475 16.1605 2.79744 16.4761 3.23148L18.6144 6.17128C19.0157 6.72295 19.3721 7.21287 19.5777 7.62393C19.7942 8.05668 19.9712 8.66199 19.5669 9.23363C19.2101 9.73813 18.6225 9.8786 18.1233 9.93852C17.6103 10.0001 16.9309 10.0001 16.1172 10L10.6343 10C9.58558 10.0001 8.7307 10.0001 8.10486 9.92776C7.53342 9.86173 6.80085 9.7072 6.45768 9.06487C6.27603 8.72485 6.27183 8.36515 6.38339 8.03759C6.48304 7.74497 6.67079 7.48659 6.8636 7.26498C7.2384 6.83422 7.83393 6.32253 8.5412 5.71483L11.9386 2.79547L11.9386 2.79547C12.3689 2.42563 12.7495 2.09853 13.0938 1.87752Z',
  d9: 'M14.0586 2.25C14.6109 2.25 15.0586 2.69772 15.0586 3.25L15.0586 13.25C15.0586 13.8023 14.6109 14.25 14.0586 14.25C13.5063 14.25 13.0586 13.8023 13.0586 13.25L13.0586 3.25C13.0586 2.69772 13.5063 2.25 14.0586 2.25Z',
  d10: 'M9.33341 20.1563C9.39027 20.1881 9.44662 20.2211 9.50246 20.2552L9.64786 20.3442C10.108 20.5721 10.6862 20.55 11.1234 20.2778L11.1301 20.2736L11.1301 20.2737C12.7763 19.2667 14.8758 19.2667 16.522 20.2737L16.5287 20.2778L16.5286 20.2778C16.9866 20.5629 17.6125 20.5681 18.1292 20.2558C19.3813 19.4804 20.906 19.3053 22.2843 19.7138C22.8138 19.8707 23.1159 20.4272 22.9589 20.9568C22.802 21.4863 22.2455 21.7883 21.716 21.6313C20.8622 21.3783 19.9287 21.4927 19.1794 21.9579L19.1713 21.9629L19.1713 21.9629C18.0521 22.6431 16.6148 22.6852 15.4755 21.978C14.4712 21.3652 13.1809 21.3652 12.1766 21.978C11.0774 22.6604 9.65368 22.6737 8.54173 22.0181C8.48872 21.9915 8.42908 21.9558 8.3686 21.9082C7.3747 21.3455 6.13138 21.3669 5.17941 21.9579L5.17132 21.9629L5.1713 21.9629C4.0372 22.6521 2.59845 22.6587 1.47163 21.9572C1.00278 21.6653 0.85932 21.0486 1.15121 20.5798C1.44309 20.1109 2.05979 19.9675 2.52864 20.2594C2.99967 20.5526 3.62605 20.5599 4.12926 20.2558C5.68757 19.2907 7.67367 19.2523 9.27983 20.1267L9.28588 20.1267L9.33341 20.1563Z',
  d11: 'M10.6217 18.9521C10.5587 18.95 10.4914 18.9406 10.4278 18.9249C10.4062 18.9196 10.3868 18.914 10.3697 18.9085C10.3558 18.904 10.3488 18.9018 10.334 18.8952C10.3193 18.8886 10.3085 18.8823 10.2868 18.8696C8.79777 18.0018 7.02342 17.7805 5.39289 18.2192C5.22754 18.2636 5.14487 18.2859 5.07092 18.2683C4.99696 18.2507 4.94003 18.1997 4.82616 18.0979C3.89558 17.2653 3.30184 16.3558 2.94706 15.4797L2.92618 15.4283C2.80057 15.1187 2.66215 14.7776 2.61386 14.4545C2.55172 14.0386 2.63116 13.65 2.88589 13.272C3.16831 12.853 3.5556 12.6543 3.98273 12.5695C4.33423 12.4997 4.76007 12.4999 5.19079 12.5L19.3022 12.5C19.7325 12.4999 20.1483 12.4998 20.4907 12.5607C20.8952 12.6326 21.2811 12.8019 21.5758 13.1874C21.852 13.5488 21.9366 13.9324 21.9101 14.3327C21.8888 14.6563 21.7902 15.0177 21.6947 15.3683L21.6807 15.4196C21.4776 16.1658 21.1554 16.9955 20.6638 17.7835C20.5936 17.8961 20.5584 17.9524 20.5018 17.9888C20.4451 18.0253 20.3712 18.0349 20.2232 18.0542C19.3528 18.1679 18.5001 18.461 17.7271 18.9382C17.6647 18.975 17.6006 18.9904 17.5453 18.9909C17.4883 18.9914 17.453 18.9763 17.4374 18.9666L17.4223 18.9573C15.4133 17.7284 12.8679 17.7059 10.8392 18.8896C10.7905 18.9181 10.7661 18.9323 10.7267 18.9427C10.6873 18.9531 10.6713 18.9529 10.6392 18.9525C10.6336 18.9524 10.6277 18.9523 10.6217 18.9521Z',
  d12: 'M10.6237 18.9521C10.5607 18.95 10.4934 18.9406 10.4297 18.9249C10.4082 18.9196 10.3888 18.914 10.3717 18.9085C10.3577 18.904 10.3508 18.9018 10.336 18.8952C10.3212 18.8886 10.3104 18.8823 10.2887 18.8696C8.79973 18.0018 7.02537 17.7805 5.39484 18.2192C5.2295 18.2636 5.14682 18.2859 5.07287 18.2683C4.99892 18.2507 4.94198 18.1997 4.82811 18.0979C3.89753 17.2653 3.30379 16.3558 2.94901 15.4797L2.92814 15.4283C2.80252 15.1187 2.6641 14.7776 2.61582 14.4545C2.55368 14.0386 2.63311 13.65 2.88785 13.272C3.17026 12.853 3.55755 12.6543 3.98469 12.5695C4.33618 12.4997 4.76202 12.4999 5.19275 12.5L19.3041 12.5C19.7345 12.4999 20.1503 12.4998 20.4927 12.5607C20.8972 12.6326 21.2831 12.8019 21.5778 13.1874C21.8539 13.5488 21.9386 13.9324 21.9121 14.3327C21.8907 14.6563 21.7922 15.0177 21.6966 15.3683L21.6826 15.4196C21.4795 16.1658 21.1574 16.9955 20.6658 17.7835C20.5955 17.8961 20.5604 17.9524 20.5037 17.9888C20.4471 18.0253 20.3731 18.0349 20.2251 18.0542C19.3548 18.1679 18.5021 18.461 17.7291 18.9382C17.6666 18.975 17.6025 18.9904 17.5473 18.9909C17.4902 18.9914 17.4549 18.9763 17.4394 18.9666L17.4242 18.9573C15.4153 17.7284 12.8699 17.7059 10.8412 18.8896C10.7925 18.9181 10.7681 18.9323 10.7287 18.9427C10.6892 18.9531 10.6732 18.9529 10.6412 18.9525C10.6355 18.9524 10.6297 18.9523 10.6237 18.9521Z',
  d13: 'M13.0566 10H15.0566L15.0566 13.25C15.0566 13.8022 14.6089 14.25 14.0566 14.25C13.5044 14.25 13.0566 13.8022 13.0566 13.25V10Z',
  d14: 'M6 19C3.6 17.4 3 15.3333 3 14L21 14C21 15.3333 20.4 17.4 18 19',
  d15: 'M14 2L18 9.99999L7 10L14 2Z',
  d16: 'M14 14L14 2',
  d17: 'M13.002 10.75L7.00197 10.75C6.70768 10.75 6.44059 10.5779 6.31899 10.3099C6.19739 10.042 6.24375 9.72762 6.43753 9.50614L13.4375 1.50613C13.6021 1.31806 13.8495 1.22431 14.0974 1.25611C14.3453 1.2879 14.561 1.44108 14.6728 1.6646L18.6728 9.66459C18.789 9.89708 18.7766 10.1732 18.6399 10.3943C18.5033 10.6154 18.2619 10.75 18.002 10.75L15.002 10.75V14H13.002L13.002 10.75Z',
  d18: 'M2.92383 20.5058C4.55497 19.4956 6.65482 19.5007 8.29702 20.5052C8.3247 20.5222 8.35136 20.5403 8.37697 20.5596C8.84669 20.8237 9.45981 20.8131 9.91801 20.5278L9.92468 20.5236C11.5709 19.5167 13.6703 19.5167 15.3165 20.5237L15.3232 20.5278C15.7812 20.8129 16.4071 20.8181 16.9238 20.5058C18.1758 19.7304 19.7006 19.5553 21.0789 19.9638L20.5105 21.8813C19.6567 21.6283 18.7233 21.7427 17.974 22.2079L17.9659 22.2129C16.8467 22.8931 15.4093 22.9352 14.27 22.228C13.2658 21.6152 11.9754 21.6152 10.9712 22.228C9.87193 22.9104 8.44825 22.9237 7.3363 22.2681C7.28329 22.2415 7.22365 22.2058 7.16316 22.1582C6.16927 21.5955 4.92595 21.6169 3.97398 22.2079L2.92383 20.5058Z',
  d19: 'M3.59978 18.5575C5.41147 17.9851 7.42448 18.2141 9.07818 19.2257C9.09125 19.2337 9.10424 19.2418 9.11713 19.25L9.1207 19.25C9.12583 19.2499 9.1299 19.2493 9.13263 19.2488L9.14036 19.244C11.2652 17.9442 13.9664 17.9432 16.0922 19.2408C16.1035 19.24 16.1217 19.2362 16.1433 19.2239C17.4817 18.3986 19.048 18.104 20.5457 18.3169C20.7654 17.9385 20.9474 17.5538 21.0971 17.1768C21.5834 15.9519 21.75 14.7577 21.75 14V13.25L2.25 13.25V14C2.25 14.7577 2.41661 15.952 2.90294 17.1768C3.0845 17.634 3.31352 18.1026 3.59978 18.5575Z',
};

export const IconSailboatOffshoreStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-stroke-rounded IconSailboatOffshoreStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatOffshoreDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-duotone-rounded IconSailboatOffshoreDuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatOffshoreTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-twotone-rounded IconSailboatOffshoreTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatOffshoreSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-solid-rounded IconSailboatOffshoreSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconSailboatOffshoreBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-bulk-rounded IconSailboatOffshoreBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSailboatOffshoreStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-stroke-sharp IconSailboatOffshoreStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatOffshoreSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-offshore-solid-sharp IconSailboatOffshoreSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSailboatOffshore: TheIconSelfPack = {
  name: 'SailboatOffshore',
  StrokeRounded: IconSailboatOffshoreStrokeRounded,
  DuotoneRounded: IconSailboatOffshoreDuotoneRounded,
  TwotoneRounded: IconSailboatOffshoreTwotoneRounded,
  SolidRounded: IconSailboatOffshoreSolidRounded,
  BulkRounded: IconSailboatOffshoreBulkRounded,
  StrokeSharp: IconSailboatOffshoreStrokeSharp,
  SolidSharp: IconSailboatOffshoreSolidSharp,
};