import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 3C19.2867 3 23.096 3 21.7007 7.9709M21.7007 7.9709C20.3668 8.13688 18.524 8.5 18.016 6M21.7007 7.9709L21.7921 8.70069C21.9702 10.1229 21.3617 11.5302 20.197 12.39L18.016 14',
  d2: 'M7 3C4.71333 3 0.903986 3 2.29933 7.9709M2.29933 7.9709C3.63322 8.13688 5.476 8.5 5.984 6M2.29933 7.9709L2.20794 8.70069C2.02983 10.1229 2.63829 11.5302 3.80302 12.39L5.984 14',
  d3: 'M18 15.1895C18 17.471 15.3597 19.4659 13.582 20.5505C12.5998 21.1498 11.4002 21.1498 10.418 20.5505C8.64031 19.4659 6 17.471 6 15.1895C6 11.7502 8.68629 10 12 10C15.3137 10 18 11.7502 18 15.1895Z',
  d4: 'M8 19C6.54545 19 5.09091 19 4 21M16 19C17.4545 19 18.9091 19 20 21',
  d5: 'M6 16.5C5 16.5 3 16 2 14.5M18 16.5C19 16.5 21 16 22 14.5',
  d6: 'M14 10L14.5 8.5M10 10L9.5 8.5',
  d7: 'M18.778 4.07063C18.1887 4.00096 17.5798 3.99988 17 3.99988C16.4477 3.99988 16 3.55216 16 2.99988C16 2.44759 16.4477 1.99988 17 1.99988L17.0208 1.99988C17.5813 1.99987 18.2972 1.99985 19.0128 2.08447C19.7327 2.16958 20.5343 2.3482 21.2355 2.75776C21.9666 3.18482 22.5649 3.85159 22.8391 4.82619C23.0902 5.7189 23.0459 6.78579 22.7174 8.04208L22.7843 8.5763C23.0079 10.3618 22.2429 12.1226 20.7909 13.1944L18.6099 14.8044C18.1656 15.1324 17.5395 15.0381 17.2115 14.5938C16.8835 14.1494 16.9778 13.5233 17.4221 13.1953L19.6031 11.5854C20.4112 10.9889 20.8584 10.0477 20.8204 9.07552C20.3354 9.10725 19.7861 9.09558 19.2693 8.94527C18.7583 8.79662 18.2608 8.51385 17.8534 8.02977C17.4537 7.55492 17.1869 6.94141 17.036 6.19901C16.9261 5.65779 17.2756 5.12988 17.8169 5.01991C18.3581 4.90993 18.886 5.25952 18.996 5.80075C19.0991 6.30835 19.2531 6.58694 19.3836 6.74195C19.5062 6.88772 19.648 6.97254 19.8279 7.02487C20.1262 7.11162 20.4691 7.10368 20.8922 7.06048C21.0476 6.27505 21.0169 5.73422 20.9138 5.36776C20.7947 4.9443 20.5593 4.67902 20.2267 4.48472C19.8641 4.27292 19.3719 4.14086 18.778 4.07063Z',
  d8: 'M6.97921 1.99988L7.00003 1.99988C7.55231 1.99988 8.00003 2.44759 8.00003 2.99988C8.00003 3.55216 7.55231 3.99988 7.00003 3.99988C6.42025 3.99988 5.81129 4.00096 5.22206 4.07063C4.62813 4.14086 4.13591 4.27292 3.77332 4.48472C3.44068 4.67902 3.20537 4.9443 3.08625 5.36776C2.98317 5.73422 2.95238 6.27505 3.10778 7.06048C3.53093 7.10368 3.87385 7.11162 4.1721 7.02487C4.35198 6.97254 4.49378 6.88772 4.61646 6.74195C4.74691 6.58694 4.90091 6.30835 5.00405 5.80075C5.11403 5.25952 5.64193 4.90993 6.18316 5.01991C6.72438 5.12988 7.07398 5.65779 6.964 6.19901C6.81314 6.94141 6.54629 7.55492 6.14667 8.02977C5.73927 8.51385 5.24175 8.79662 4.7307 8.94527C4.21395 9.09558 3.66461 9.10725 3.17965 9.07552C3.14168 10.0477 3.58887 10.9889 4.39695 11.5854L6.57793 13.1953C7.02226 13.5233 7.11657 14.1494 6.78856 14.5938C6.46056 15.0381 5.83446 15.1324 5.39013 14.8044L3.20914 13.1944C1.75709 12.1226 0.992108 10.3618 1.21572 8.5763L1.28262 8.04208C0.954138 6.78579 0.909861 5.7189 1.16098 4.82619C1.43513 3.85159 2.03344 3.18482 2.76456 2.75776C3.46572 2.3482 4.26737 2.16958 4.98722 2.08447C5.70287 1.99985 6.41868 1.99987 6.97921 1.99988Z',
  d9: 'M7.28922 10.7189C8.54092 9.71892 10.2207 9.24988 12 9.24988C13.7793 9.24988 15.4591 9.71892 16.7108 10.7189C17.9833 11.7356 18.75 13.253 18.75 15.1894C18.75 16.6185 17.9306 17.8669 16.9988 18.838C16.0528 19.8239 14.887 20.6328 13.9727 21.1906C12.7505 21.9363 11.2495 21.9363 10.0273 21.1906C9.11297 20.6328 7.94718 19.8239 7.00119 18.838C6.06937 17.8669 5.25 16.6185 5.25 15.1894C5.25 13.253 6.01669 11.7356 7.28922 10.7189Z',
  d10: 'M7.93756 17.9999C7.95862 17.9999 7.9795 17.9999 8.00019 17.9999C8.55247 17.9999 9.00019 18.4476 9.00019 18.9999C9.00019 19.5522 8.55247 19.9999 8.00019 19.9999C7.24054 19.9999 6.69519 20.0102 6.20808 20.1888C5.78183 20.3451 5.32235 20.6643 4.87808 21.4788C4.61362 21.9636 4.00619 22.1423 3.52134 21.8778C3.03649 21.6133 2.85783 21.0059 3.12229 20.5211C3.76894 19.3355 4.58219 18.6547 5.51957 18.311C6.37 17.9992 7.25118 17.9996 7.93756 17.9999ZM17.7923 20.1888C17.3052 20.0102 16.7598 19.9999 16.0002 19.9999C15.4479 19.9999 15.0002 19.5522 15.0002 18.9999C15.0002 18.4476 15.4479 17.9999 16.0002 17.9999C16.0209 17.9999 16.0418 17.9999 16.0628 17.9999C16.7492 17.9996 17.6304 17.9992 18.4808 18.311C19.4182 18.6547 20.2314 19.3355 20.8781 20.5211C21.1425 21.0059 20.9639 21.6133 20.479 21.8778C19.9942 22.1423 19.3868 21.9636 19.1223 21.4788C18.678 20.6643 18.2186 20.3451 17.7923 20.1888Z',
  d11: 'M1.44541 13.6678C1.90493 13.3615 2.5258 13.4856 2.83216 13.9452C3.19027 14.4823 3.75438 14.8766 4.38472 15.1393C5.01839 15.4033 5.63801 15.4999 6.00011 15.4999C6.55239 15.4999 7.00011 15.9476 7.00011 16.4999C7.00011 17.0521 6.55239 17.4999 6.00011 17.4999C5.36221 17.4999 4.48182 17.3464 3.61549 16.9854C2.74583 16.6231 1.80994 16.0174 1.16806 15.0546C0.861704 14.595 0.985877 13.9742 1.44541 13.6678ZM22.5548 13.6678C23.0143 13.9742 23.1385 14.595 22.8322 15.0546C22.1903 16.0174 21.2544 16.6231 20.3847 16.9854C19.5184 17.3464 18.638 17.4999 18.0001 17.4999C17.4478 17.4999 17.0001 17.0521 17.0001 16.4999C17.0001 15.9476 17.4478 15.4999 18.0001 15.4999C18.3622 15.4999 18.9818 15.4033 19.6155 15.1393C20.2458 14.8766 20.8099 14.4823 21.1681 13.9452C21.4744 13.4856 22.0953 13.3615 22.5548 13.6678Z',
  d12: 'M9.18404 7.55147C9.70799 7.37682 10.2743 7.65998 10.449 8.18392L10.949 9.68392C11.1236 10.2079 10.8404 10.7742 10.3165 10.9488C9.79256 11.1235 9.22624 10.8403 9.05159 10.3164L8.55159 8.81638C8.37694 8.29243 8.6601 7.72611 9.18404 7.55147ZM14.8165 7.55147C15.3404 7.72611 15.6236 8.29243 15.449 8.81638L14.949 10.3164C14.7743 10.8403 14.208 11.1235 13.684 10.9488C13.1601 10.7742 12.8769 10.2079 13.0516 9.68392L13.5516 8.18392C13.7262 7.65998 14.2926 7.37682 14.8165 7.55147Z',
  d13: 'M12 21C13.7776 19.9154 18 17.471 18 15.1895C18 11.7502 15.3137 10 12 10C8.68629 10 6 11.7502 6 15.1895C6 17.471 10.2224 19.9154 12 21Z',
  d14: 'M9 19C7.54545 19 5.09091 19 4 21M15 19C16.4545 19 18.9091 19 20 21',
  d15: 'M14 10L15 8M10 10L9 8',
  d16: 'M18.8073 3.82248C18.2012 3.75081 17.5777 3.75 17 3.75V2.25L17.0161 2.25C17.5791 2.24999 18.2825 2.24998 18.9835 2.33286C19.6876 2.41611 20.4505 2.58891 21.1094 2.97375C21.7907 3.37172 22.3436 3.9883 22.5984 4.89401C22.8364 5.74015 22.7963 6.77418 22.4633 8.02524L22.5362 8.60749C22.7485 10.3022 22.0226 11.9746 20.6424 12.9934L18.4614 14.6034L17.5706 13.3966L19.7516 11.7866C20.6975 11.0884 21.1884 9.95155 21.0494 8.80588C20.5248 8.85669 19.9094 8.87122 19.3392 8.70535C18.8695 8.56874 18.4164 8.31071 18.0446 7.86891C17.6787 7.43405 17.4259 6.8624 17.281 6.14935L18.751 5.85065C18.8601 6.3876 19.0282 6.70806 19.1923 6.90305C19.3506 7.09111 19.5368 7.20068 19.7581 7.26504C20.1428 7.37694 20.5855 7.34956 21.0995 7.28969C21.3017 6.38203 21.2794 5.74457 21.1544 5.30019C21.0159 4.80783 20.7352 4.49237 20.3528 4.26897C19.9479 4.03245 19.417 3.89457 18.8073 3.82248Z',
  d17: 'M6.98388 2.25L7.00002 2.25V3.75C6.42227 3.75 5.79884 3.75081 5.1927 3.82248C4.58303 3.89457 4.05213 4.03245 3.64722 4.26897C3.26477 4.49237 2.98409 4.80783 2.84559 5.30019C2.72059 5.74457 2.6983 6.38203 2.90054 7.28969C3.41457 7.34956 3.8572 7.37694 4.24192 7.26504C4.46319 7.20068 4.64946 7.09111 4.80773 6.90305C4.97183 6.70806 5.13993 6.3876 5.24904 5.85065L6.719 6.14935C6.57411 6.8624 6.32136 7.43405 5.95538 7.86891C5.58357 8.31071 5.13052 8.56874 4.66087 8.70535C4.09059 8.87122 3.47526 8.85669 2.95067 8.80588C2.81159 9.95155 3.30253 11.0884 4.24846 11.7866L6.42944 13.3966L5.53859 14.6034L3.35761 12.9934C1.97739 11.9746 1.25154 10.3022 1.46377 8.60749L1.53669 8.02524C1.20373 6.77418 1.16361 5.74015 1.40163 4.89401C1.6564 3.9883 2.20934 3.37172 2.89065 2.97375C3.54948 2.58891 4.31246 2.41611 5.01657 2.33286C5.71748 2.24998 6.42096 2.24999 6.98388 2.25Z',
  d18: 'M7.28922 10.7191C8.54092 9.71904 10.2207 9.25 12 9.25C13.7793 9.25 15.4591 9.71904 16.7108 10.7191C17.9833 11.7357 18.75 13.2531 18.75 15.1895C18.75 15.989 18.3838 16.7266 17.9133 17.3563C17.4373 17.9933 16.8012 18.5914 16.1378 19.1271C14.9431 20.0919 13.5657 20.9272 12.6668 21.4724L12.6668 21.4724L12.6662 21.4728C12.5684 21.5321 12.4762 21.588 12.3906 21.6402C12.1508 21.7866 11.8492 21.7866 11.6094 21.6402C11.5236 21.5879 11.4312 21.5319 11.3332 21.4724C10.4343 20.9273 9.05693 20.0919 7.86218 19.1271C7.19883 18.5914 6.56266 17.9933 6.08671 17.3563C5.61623 16.7266 5.25 15.989 5.25 15.1895C5.25 13.2531 6.01669 11.7357 7.28922 10.7191Z',
  d19: 'M8.972 18.25L9.00022 18.25V19.75C8.26139 19.75 7.38048 19.7538 6.5582 19.9744C5.75561 20.1897 5.07626 20.5935 4.65864 21.3591L3.3418 20.6409C4.01508 19.4065 5.10846 18.8103 6.16951 18.5256C7.19727 18.2499 8.25647 18.25 8.972 18.25ZM17.4422 19.9744C16.62 19.7538 15.739 19.75 15.0002 19.75V18.25L15.0284 18.25C15.744 18.25 16.8032 18.2499 17.8309 18.5256C18.892 18.8103 19.9854 19.4065 20.6586 20.6409L19.3418 21.3591C18.9242 20.5935 18.2448 20.1897 17.4422 19.9744Z',
  d20: 'M4.28848 15.3702C4.95123 15.6463 5.60344 15.75 6.00001 15.75V17.25C5.39659 17.25 4.5488 17.1037 3.71155 16.7548C2.87181 16.4049 1.98239 15.8257 1.37598 14.916L2.62405 14.084C3.01764 14.6744 3.62822 15.0951 4.28848 15.3702ZM20.2885 16.7548C19.4512 17.1037 18.6034 17.25 18 17.25V15.75C18.3966 15.75 19.0488 15.6463 19.7116 15.3702C20.3718 15.0951 20.9824 14.6744 21.376 14.084L22.6241 14.916C22.0176 15.8257 21.1282 16.4049 20.2885 16.7548Z',
  d21: 'M9.67074 7.66455L10.6707 9.66455L9.3291 10.3354L8.3291 8.33537L9.67074 7.66455ZM15.6707 8.33537L14.6707 10.3354L13.3291 9.66455L14.3291 7.66455L15.6707 8.33537Z',
} as const;

export const IconCrabStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-stroke-rounded IconCrabStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCrabDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-duotone-rounded IconCrabDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCrabTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-twotone-rounded IconCrabTwotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCrabSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-solid-rounded IconCrabSolidRounded"
    >
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

export const IconCrabBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-bulk-rounded IconCrabBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconCrabStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-stroke-sharp IconCrabStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCrabSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crab-solid-sharp IconCrabSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCrab: TheIconSelfPack = {
  name: 'Crab',
  StrokeRounded: IconCrabStrokeRounded,
  DuotoneRounded: IconCrabDuotoneRounded,
  TwotoneRounded: IconCrabTwotoneRounded,
  SolidRounded: IconCrabSolidRounded,
  BulkRounded: IconCrabBulkRounded,
  StrokeSharp: IconCrabStrokeSharp,
  SolidSharp: IconCrabSolidSharp,
};