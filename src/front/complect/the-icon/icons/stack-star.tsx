import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.8284 7.06234C18 8.12469 18 9.83451 18 13.2541V14.7459C18 18.1655 18 19.8753 16.8284 20.9377C15.6569 22 13.7712 22 10 22C6.22876 22 4.34315 22 3.17157 20.9377C2 19.8753 2 18.1655 2 14.7459V13.2541C2 9.83451 2 8.12469 3.17157 7.06234C4.34315 6 6.22876 6 10 6C13.7712 6 15.6569 6 16.8284 7.06234Z',
  d2: 'M6.06641 6C6.17344 4.61213 6.451 3.71504 7.1708 3.06234C8.34237 2 10.228 2 13.9992 2C17.7705 2 19.6561 2 20.8277 3.06234C21.9992 4.12469 21.9992 5.83451 21.9992 9.25414V10.7459C21.9992 14.1655 21.9992 15.8753 20.8277 16.9377C20.1745 17.5299 19.2993 17.792 17.9992 17.908',
  d3: 'M10.6911 10.5777L11.395 11.9972C11.491 12.1947 11.7469 12.3843 11.9629 12.4206L13.2388 12.6343C14.0547 12.7714 14.2467 13.3682 13.6587 13.957L12.6668 14.9571C12.4989 15.1265 12.4069 15.4531 12.4589 15.687L12.7428 16.925C12.9668 17.9049 12.4509 18.284 11.591 17.7718L10.3951 17.0581C10.1791 16.929 9.82315 16.929 9.60318 17.0581L8.40731 17.7718C7.5514 18.284 7.03146 17.9009 7.25543 16.925L7.5394 15.687C7.5914 15.4531 7.49941 15.1265 7.33143 14.9571L6.33954 13.957C5.7556 13.3682 5.94358 12.7714 6.75949 12.6343L8.03535 12.4206C8.24732 12.3843 8.5033 12.1947 8.59929 11.9972L9.30321 10.5777C9.68717 9.80744 10.3111 9.80744 10.6911 10.5777Z',
  d4: 'M18 13.2541C18 9.83451 18 8.12469 16.8284 7.06234C15.6569 6 13.7712 6 10 6C6.22876 6 4.34315 6 3.17157 7.06234C2 8.12469 2 9.83451 2 13.2541V14.7459C2 18.1655 2 19.8753 3.17157 20.9377C4.34315 22 6.22876 22 10 22C13.7712 22 15.6569 22 16.8284 20.9377C18 19.8753 18 18.1655 18 14.7459V13.2541ZM11.395 11.9972L10.6911 10.5777C10.3111 9.80744 9.68717 9.80744 9.30321 10.5777L8.59929 11.9972C8.5033 12.1947 8.24732 12.3843 8.03535 12.4206L6.75949 12.6343C5.94358 12.7714 5.7556 13.3682 6.33954 13.957L7.33143 14.9571C7.49941 15.1265 7.5914 15.4531 7.5394 15.687L7.25543 16.925C7.03146 17.9009 7.5514 18.284 8.40731 17.7718L9.60318 17.0581C9.82315 16.929 10.1791 16.929 10.3951 17.0581L11.591 17.7718C12.4509 18.284 12.9668 17.9049 12.7428 16.925L12.4589 15.687C12.4069 15.4531 12.4989 15.1265 12.6668 14.9571L13.6587 13.957C14.2467 13.3682 14.0547 12.7714 13.2388 12.6343L11.9629 12.4206C11.7469 12.3843 11.491 12.1947 11.395 11.9972Z',
  d5: 'M18.4793 1.38831C17.3447 1.24998 15.893 1.24999 14.0512 1.25H14.0512H13.9477H13.9477C12.1059 1.24999 10.6542 1.24998 9.5196 1.38831C8.3597 1.52971 7.41735 1.82656 6.66722 2.50675C5.84898 3.24871 5.51656 4.21266 5.37122 5.4075C4.27928 5.55604 3.38554 5.85591 2.66778 6.50675C1.90716 7.19645 1.56545 8.07914 1.40456 9.16426C1.24996 10.2069 1.24998 11.5352 1.25 13.1932V13.1933V14.8067V14.8068C1.24998 16.4648 1.24996 17.7931 1.40456 18.8357C1.56545 19.9209 1.90716 20.8036 2.66778 21.4933C3.4179 22.1734 4.36025 22.4703 5.52015 22.6117C6.65479 22.75 8.10649 22.75 9.94825 22.75H9.94827H10.0517H10.0517C11.8935 22.75 13.3452 22.75 14.4799 22.6117C15.6398 22.4703 16.5821 22.1734 17.3322 21.4933C18.0928 20.8036 18.4346 19.9209 18.5954 18.8357C18.6072 18.7563 18.6181 18.6753 18.6281 18.5926C19.7216 18.4439 20.615 18.1431 21.3317 17.4933C22.0923 16.8035 22.434 15.9209 22.5949 14.8357C22.7495 13.7931 22.7495 12.4648 22.7495 10.8067V10.8067V10.8067V9.1933V9.19327V9.19325C22.7495 7.53516 22.7495 6.20695 22.5949 5.16426C22.434 4.07914 22.0923 3.19645 21.3317 2.50675C20.5815 1.82656 19.6392 1.52971 18.4793 1.38831ZM12.8663 6.77733C12.073 6.75047 11.1329 6.75 10.0002 6.75L12.8663 6.77733ZM12.8663 6.77733C13.407 6.79564 13.8795 6.82622 14.2983 6.87728C15.3169 7.00146 15.9032 7.23579 16.3246 7.61794C16.7356 7.99058 16.9797 8.49398 17.1117 9.38426C17.2481 10.3042 17.25 11.521 17.25 13.2541V14.7459C17.25 16.479 17.2481 17.6958 17.1117 18.6157C16.9797 19.506 16.7356 20.0094 16.3246 20.3821C15.9032 20.7642 15.3169 20.9985 14.2983 21.1227C13.2651 21.2487 11.9049 21.25 10 21.25C8.09511 21.25 6.73494 21.2487 5.70168 21.1227C4.68307 20.9985 4.09682 20.7642 3.67537 20.3821C3.26442 20.0094 3.02034 19.506 2.88834 18.6157C2.75193 17.6958 2.75 16.479 2.75 14.7459V13.2541C2.75 11.521 2.75193 10.3042 2.88834 9.38426C3.02034 8.49398 3.26442 7.99058 3.67537 7.61794C4.09682 7.23579 4.68307 7.00146 5.70168 6.87728C5.83845 6.86061 5.98096 6.84612 6.1297 6.83352L6.12977 6.8336C6.49366 6.80286 6.89332 6.78342 7.33595 6.77113C8.08572 6.75039 8.96199 6.75 10 6.75',
  d6: 'M9.99864 9.25C10.6705 9.25 11.1206 9.75346 11.3633 10.2452L12.0592 11.6484L13.3631 11.8947C13.9033 11.9855 14.491 12.275 14.6898 12.8985C14.8882 13.521 14.578 14.0974 14.1904 14.486L14.1894 14.487L13.2137 15.5L13.474 16.7579C13.6 17.3093 13.6121 18.0753 13.0175 18.5123C12.4199 18.9516 11.6918 18.7048 11.2066 18.4159L10 17.7142L8.79197 18.4157C8.30507 18.7069 7.57876 18.9496 6.98197 18.5106C6.38883 18.0742 6.39745 17.3106 6.52445 16.7572L6.80362 15.5L5.80704 14.4851C5.42178 14.0967 5.11283 13.5211 5.30958 12.8998C5.50724 12.2757 6.09462 11.9855 6.63559 11.8946L7.93495 11.6487L8.6313 10.2445L8.63199 10.2431C8.87667 9.75224 9.32779 9.25 9.99864 9.25Z',
  d7: 'M9.94828 5.25H10.0517C11.8935 5.24999 13.3452 5.24998 14.4799 5.38831C15.6398 5.52971 16.5821 5.82656 17.3322 6.50675C18.0928 7.19645 18.4346 8.07914 18.5954 9.16426C18.75 10.2069 18.75 11.5352 18.75 13.1932V14.8068C18.75 16.4648 18.75 17.7931 18.5954 18.8357C18.4346 19.9209 18.0928 20.8035 17.3322 21.4933C16.5821 22.1734 15.6398 22.4703 14.4799 22.6117C13.3452 22.75 11.8935 22.75 10.0517 22.75H9.94827C8.1065 22.75 6.6548 22.75 5.52015 22.6117C4.36025 22.4703 3.4179 22.1734 2.66778 21.4933C1.90716 20.8035 1.56545 19.9209 1.40456 18.8357C1.24996 17.7931 1.24998 16.4648 1.25 14.8067V13.1933C1.24998 11.5352 1.24996 10.2069 1.40456 9.16426C1.56545 8.07914 1.90716 7.19645 2.66778 6.50675C3.4179 5.82656 4.36025 5.52971 5.52015 5.38831C6.6548 5.24998 8.1065 5.24999 9.94828 5.25ZM5.70168 6.87728C4.68307 7.00146 4.09682 7.23579 3.67537 7.61794C3.26442 7.99058 3.02034 8.49398 2.88834 9.38426C2.75193 10.3042 2.75 11.521 2.75 13.2541V14.7459C2.75 16.479 2.75193 17.6958 2.88834 18.6157C3.02034 19.506 3.26442 20.0094 3.67537 20.3821C4.09682 20.7642 4.68307 20.9985 5.70168 21.1227C6.73494 21.2487 8.09511 21.25 10 21.25C11.9049 21.25 13.2651 21.2487 14.2983 21.1227C15.3169 20.9985 15.9032 20.7642 16.3246 20.3821C16.7356 20.0094 16.9797 19.506 17.1117 18.6157C17.2481 17.6958 17.25 16.479 17.25 14.7459V13.2541C17.25 11.521 17.2481 10.3042 17.1117 9.38426C16.9797 8.49398 16.7356 7.99058 16.3246 7.61794C15.9032 7.23579 15.3169 7.00146 14.2983 6.87728C13.2651 6.75131 11.9049 6.75 10 6.75C8.09511 6.75 6.73494 6.75131 5.70168 6.87728Z',
  d8: 'M14.0512 1.25C15.893 1.24999 17.3447 1.24998 18.4793 1.38831C19.6392 1.52971 20.5815 1.82656 21.3317 2.50675C22.0923 3.19645 22.434 4.07914 22.5949 5.16426C22.7495 6.20695 22.7495 7.53517 22.7495 9.19327V9.1933V10.8067V10.8067C22.7495 12.4648 22.7495 13.793 22.5949 14.8357C22.434 15.9209 22.0923 16.8035 21.3317 17.4933C20.4958 18.2512 19.4198 18.5343 18.0661 18.655L17.1917 17.8551C17.2498 17.0336 17.2502 16.0279 17.2502 14.7459V13.2541C17.2502 11.521 17.2483 10.3043 17.1119 9.38426C16.9799 8.49398 16.7358 7.99058 16.3249 7.61794C15.9034 7.23579 15.3172 7.00146 14.2985 6.87728C13.2653 6.75131 11.9051 6.75 10.0002 6.75C8.35483 6.75 7.11202 6.75061 6.12977 6.8336L5.31885 5.94233C5.4303 4.49713 5.73023 3.35639 6.66723 2.50675C7.41735 1.82656 8.3597 1.52971 9.5196 1.38831C10.6542 1.24998 12.1059 1.24999 13.9477 1.25H13.9477H14.0512H14.0512Z',
  d9: 'M18 6V22H2L1.99951 6H18Z',
  d10: 'M5.99951 6V2H22V18H17.9995',
  d11: 'M10.005 9.60113C10.0065 9.59765 10.0084 9.59427 10.0109 9.59148C10.0307 9.56981 10.065 9.56977 10.0849 9.59134C10.0875 9.5942 10.0894 9.59768 10.0909 9.60126L11.4007 12.6887H14.5149C14.5154 12.6887 14.516 12.6888 14.5165 12.6889L14.5171 12.689C14.5178 12.6891 14.5186 12.6893 14.5193 12.6897C14.5245 12.6928 14.5267 12.7024 14.5269 12.7304C14.5269 12.7329 14.5259 12.7354 14.5243 12.7372L12.3081 15.1974L13.4212 18.5158C13.4228 18.5205 13.4238 18.5255 13.4233 18.5304C13.4199 18.5604 13.3906 18.5811 13.361 18.5737C13.3583 18.573 13.3558 18.5718 13.3534 18.5705L10.0445 16.7954L6.72219 18.5703C6.71978 18.5715 6.71728 18.5727 6.71463 18.5734C6.68518 18.5808 6.65603 18.5604 6.65236 18.5306C6.65173 18.5255 6.65282 18.5205 6.65445 18.5156L7.77636 15.1974L5.5488 12.7359C5.52748 12.7095 5.51546 12.6998 5.54235 12.6908C5.54661 12.6894 5.55113 12.6888 5.55562 12.6888H8.67432L10.005 9.60113Z',
  d12: 'M1.53474 5.53477C1.71706 5.35243 1.96435 5.25 2.2222 5.25H17.7778C18.3147 5.25 18.75 5.68528 18.75 6.22222V21.7778C18.75 22.3147 18.3147 22.75 17.7778 22.75H2.22267C1.68575 22.75 1.25049 22.3147 1.25047 21.7778L1.25 6.22225C1.24999 5.9644 1.35242 5.7171 1.53474 5.53477ZM3.19442 7.19444L3.19484 20.8056H16.8056V7.19444H3.19442Z',
  d13: 'M10 9C10.2857 9 10.544 9.17028 10.6565 9.43291L11.7567 12H14.2857C14.5684 12 14.8245 12.1668 14.9389 12.4253C15.0533 12.6839 15.0044 12.9856 14.8142 13.1948L12.9528 15.2424L13.8919 18.0598C13.9843 18.3372 13.8985 18.6428 13.6751 18.8314C13.4518 19.02 13.1361 19.0535 12.8781 18.916L10 17.3809L7.12186 18.916C6.86392 19.0535 6.5482 19.02 6.32486 18.8314C6.10152 18.6428 6.01565 18.3372 6.10809 18.0598L7.04724 15.2424L5.18577 13.1948C4.99559 12.9856 4.9467 12.6839 5.06107 12.4253C5.17545 12.1668 5.43157 12 5.7143 12H8.24329L9.34347 9.43291C9.45603 9.17028 9.71427 9 10 9Z',
  d14: 'M5.25 2C5.25 1.58579 5.58579 1.25 6 1.25H22.0005C22.4147 1.25 22.7505 1.58579 22.7505 2V18C22.7505 18.4142 22.4147 18.75 22.0005 18.75H18C17.5858 18.75 17.25 18.4142 17.25 18V6.75H6C5.58579 6.75 5.25 6.41421 5.25 6V2Z',
} as const;

export const IconStackStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-stroke-rounded IconStackStarStrokeRounded"
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

export const IconStackStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-duotone-rounded IconStackStarDuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconStackStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-twotone-rounded IconStackStarTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStackStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-solid-rounded IconStackStarSolidRounded"
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

export const IconStackStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-bulk-rounded IconStackStarBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStackStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-stroke-sharp IconStackStarStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStackStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stack-star-solid-sharp IconStackStarSolidSharp"
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStackStar: TheIconSelfPack = {
  name: 'StackStar',
  StrokeRounded: IconStackStarStrokeRounded,
  DuotoneRounded: IconStackStarDuotoneRounded,
  TwotoneRounded: IconStackStarTwotoneRounded,
  SolidRounded: IconStackStarSolidRounded,
  BulkRounded: IconStackStarBulkRounded,
  StrokeSharp: IconStackStarStrokeSharp,
  SolidSharp: IconStackStarSolidSharp,
};