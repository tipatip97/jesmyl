import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.0455 18L14.5368 16.3333M11.485 18L12.9174 13.3066C12.9718 13.1283 13.0648 13 13.2652 13C13.4657 13 13.5587 13.1283 13.6131 13.3066L14.5368 16.3333M7 18V16M7 16V14C7 13.2675 7.05472 13 7.71209 13H8.78021C9.37013 13 9.84834 13.6716 9.84834 14.5C9.84834 15.3284 9.37013 16 8.78021 16M7 16H8.78021M8.78021 16L9.4923 18M11.9993 16.3333H14.5368M21 13L20.637 17.1657C20.6062 17.5191 20.5908 17.6958 20.4772 17.7287C20.3637 17.7617 20.2474 17.6233 20.0149 17.3464L19.0875 16.2423C18.9614 16.0922 18.8983 16.0171 18.8142 16.0171C18.7301 16.0171 18.667 16.0922 18.5409 16.2423L17.6131 17.347C17.3807 17.6237 17.2645 17.762 17.151 17.7291C17.0375 17.6961 17.022 17.5196 16.991 17.1665L16.625 13',
  d2: 'M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M15.0494 18L14.5407 16.3333M11.4889 18L12.9213 13.3066C12.9757 13.1283 13.0687 13 13.2692 13C13.4696 13 13.5626 13.1283 13.617 13.3066L14.5407 16.3333M7.00391 18V16M7.00391 16V14C7.00391 13.2675 7.05862 13 7.71599 13H8.78412C9.37403 13 9.85225 13.6716 9.85225 14.5C9.85225 15.3284 9.37403 16 8.78412 16M7.00391 16H8.78412M8.78412 16L9.49621 18M12.0032 16.3333H14.5407M21.0039 13L20.6409 17.1657C20.6101 17.5191 20.5947 17.6958 20.4811 17.7287C20.3676 17.7617 20.2513 17.6233 20.0188 17.3464L19.0914 16.2423C18.9653 16.0922 18.9022 16.0171 18.8181 16.0171C18.734 16.0171 18.6709 16.0922 18.5448 16.2423L17.617 17.347C17.3846 17.6237 17.2684 17.762 17.1549 17.7291C17.0414 17.6961 17.0259 17.5196 16.9949 17.1665L16.6289 13',
  d6: 'M7.75408 13.75C7.75126 13.8156 7.75 13.897 7.75 14V15.25H8.78021C8.78017 15.25 8.78024 15.25 8.78021 15.25C8.78145 15.25 8.79108 15.2503 8.81296 15.2373C8.83821 15.2223 8.87918 15.1893 8.92456 15.1256C9.01741 14.9952 9.09834 14.7764 9.09834 14.5C9.09834 14.2236 9.01741 14.0048 8.92456 13.8744C8.87918 13.8107 8.83821 13.7777 8.81297 13.7627C8.79108 13.7497 8.78155 13.75 8.78032 13.75C8.78027 13.75 8.78034 13.75 8.78032 13.75L7.75408 13.75ZM7.75 16.75V18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V14C6.25 13.8157 6.25292 13.622 6.27418 13.4452C6.29512 13.271 6.3404 13.0477 6.46782 12.8371C6.77872 12.3232 7.32285 12.25 7.71209 12.25H8.78021C9.38128 12.25 9.85381 12.5934 10.1464 13.0043C10.4402 13.4168 10.5983 13.948 10.5983 14.5C10.5983 15.052 10.4402 15.5832 10.1464 15.9957C10.0331 16.1549 9.8927 16.304 9.72831 16.4268L10.1989 17.7484C10.3378 18.1387 10.1341 18.5676 9.74386 18.7066C9.35365 18.8455 8.92468 18.6418 8.78575 18.2516L8.25113 16.75H7.75Z',
  d7: 'M13.2687 12.25C12.9883 12.25 12.7204 12.3482 12.5133 12.5525C12.3305 12.7328 12.2468 12.9457 12.2035 13.0876L10.7711 17.7811C10.6502 18.1773 10.8734 18.5964 11.2696 18.7173C11.6657 18.8382 12.0849 18.6151 12.2058 18.2189L12.5524 17.0833H13.985L14.3316 18.2189C14.4525 18.6151 14.8717 18.8382 15.2678 18.7173C15.664 18.5964 15.8872 18.1773 15.7662 17.7811L14.3339 13.0876C14.2906 12.9457 14.2069 12.7328 14.0241 12.5525C13.817 12.3482 13.5491 12.25 13.2687 12.25ZM13.0103 15.5833L13.2688 14.7361L13.5274 15.5833H13.0103Z',
  d8: 'M16.5594 12.2529C16.972 12.2167 17.3359 12.5218 17.3722 12.9344L17.6531 16.1333L17.9667 15.76C17.9706 15.7553 17.9748 15.7503 17.9792 15.745C18.0291 15.6854 18.1095 15.5893 18.1938 15.514C18.3029 15.4166 18.5114 15.2671 18.8143 15.2671C19.1171 15.2671 19.3256 15.4166 19.4347 15.514C19.519 15.5893 19.5995 15.6854 19.6493 15.745C19.6537 15.7503 19.6579 15.7553 19.6619 15.76L19.9743 16.1319L20.2529 12.9349C20.2888 12.5223 20.6525 12.2169 21.0652 12.2529C21.4778 12.2888 21.7832 12.6525 21.7472 13.0652L21.3842 17.2309C21.3832 17.2415 21.3823 17.2523 21.3814 17.2634C21.3688 17.4094 21.353 17.5924 21.318 17.7402C21.2857 17.8767 21.1635 18.3105 20.6864 18.449C20.2241 18.5833 19.8898 18.302 19.789 18.2113C19.6763 18.1098 19.5582 17.969 19.4614 17.8537C19.4544 17.8452 19.4474 17.8369 19.4406 17.8288L18.8143 17.0831L18.1874 17.8294C18.1806 17.8375 18.1736 17.8458 18.1666 17.8543C18.0699 17.9695 17.9519 18.1102 17.8392 18.2117C17.7383 18.3025 17.4042 18.5834 16.9421 18.4494C16.4652 18.3111 16.3428 17.8778 16.3104 17.7412C16.2753 17.5935 16.2594 17.4106 16.2467 17.2647C16.2458 17.2537 16.2448 17.2428 16.2439 17.2322L15.8779 13.0657C15.8417 12.653 16.1468 12.2892 16.5594 12.2529Z',
  d9: 'M7.13841 20.7033C8.00786 20.7942 9.13899 20.7955 10.7476 20.7955H14.9079C15.4456 20.7955 15.8816 21.233 15.8816 21.7727C15.8816 22.3125 15.4456 22.75 14.9079 22.75H10.6927C9.15159 22.75 7.91879 22.75 6.93654 22.6473C5.92712 22.5417 5.0659 22.3186 4.32113 21.7919C3.93077 21.5159 3.58222 21.1871 3.28704 20.8146C2.71721 20.0956 2.47396 19.2577 2.35985 18.2843C2.24996 17.3469 2.24998 16.1743 2.25 14.7262V12.1428V12.1427C2.25 10.7244 2.24999 9.61179 2.30919 8.71107C2.36944 7.79422 2.49398 7.02952 2.77509 6.31755C3.61848 4.1815 5.39221 2.51875 7.61221 1.73658C8.99465 1.2495 10.6813 1.24971 13.5209 1.25007L13.7572 1.25009L13.9605 1.25004L13.9606 1.25004C15.5156 1.2495 16.548 1.24914 17.4068 1.55172C18.7834 2.03673 19.8918 3.071 20.4206 4.41031C20.6039 4.87447 20.6795 5.36014 20.7153 5.90477C20.75 6.43335 20.75 7.08083 20.75 7.87999V7.88006V10.0455C20.75 10.5852 20.3141 11.0228 19.7763 11.0228C19.2386 11.0228 18.8026 10.5852 18.8026 10.0455V7.91329C18.8026 7.07303 18.8021 6.49008 18.7721 6.03341C18.7427 5.58546 18.6879 5.32704 18.6102 5.1304C18.3001 4.34503 17.6344 3.70339 16.7618 3.39593C16.2584 3.21858 15.5913 3.20463 13.7572 3.20463C13.4591 3.20463 13.1023 3.2058 12.7641 3.20732C12.426 3.20885 11.8726 3.21134 11.4104 3.48025C11.1057 3.65756 10.8849 3.85945 10.7582 4.08004C10.5409 4.45845 10.4166 4.89711 10.4166 5.3648C10.4166 5.51193 10.4262 5.70446 10.4344 5.88206L10.4344 5.88212C10.4417 6.03696 10.4496 6.20566 10.4531 6.3737C10.461 6.75379 10.449 7.19733 10.3343 7.62548C10.1108 8.45945 9.4594 9.11086 8.62543 9.33432C8.19728 9.44904 7.75374 9.46105 7.37365 9.45315C7.20551 9.44966 7.03693 9.44174 6.88201 9.43446C6.70441 9.42622 6.48041 9.41667 6.33328 9.41667C5.88661 9.41667 5.46642 9.53003 5.09991 9.72955C4.87246 9.85337 4.65104 10.0965 4.47811 10.3875C4.19749 10.8596 4.19732 11.4982 4.19734 11.7652L4.19737 14.6653C4.19737 16.1888 4.19894 17.2461 4.29387 18.0559C4.38611 18.8427 4.55555 19.2754 4.81111 19.5979C4.9889 19.8223 5.20128 20.0234 5.44274 20.1941C5.80057 20.4472 6.28449 20.6139 7.13841 20.7033Z',
  d10: 'M20.0368 22.0088H3.08633C3.0311 22.0088 2.98633 21.964 2.98633 21.9088V8.99642L9.96706 2.00879H19.8781C19.9333 2.00879 19.9781 2.05356 19.9781 2.10879V10.013M9.97289 2.57761L10.0387 8.99642H3.62226',
  d11: 'M17.6903 12.5146V18.1969C17.6903 18.2955 17.8176 18.3347 17.8728 18.253L19.3258 16.104L20.8085 18.2585C20.8641 18.3393 20.9905 18.2998 20.9905 18.2016V12.5146M11.9019 18.6043L12.4085 17.0223M12.4085 17.0223L13.6893 13.0225C13.719 12.9298 13.85 12.9299 13.8795 13.0227L15.6315 18.5354M12.4085 17.0223H14.9526M8.16055 15.5105H8.69462C9.37421 15.5105 9.92512 14.9584 9.92512 14.2774C9.92512 13.5963 9.37421 13.0442 8.69463 13.0442L7.19055 13.0442C7.08987 13.0442 7.00825 13.126 7.00825 13.2269L7.00806 15.5105M8.16055 15.5105H7.00806M8.16055 15.5105L9.50791 18.5156M7.00806 15.5105L7.00781 18.5156',
  d12: 'M13.7941 12.25C14.1078 12.25 14.3884 12.4452 14.4974 12.7394L16.6109 18.4426L15.2044 18.9639L14.6619 17.5H12.9262L12.3838 18.9634L10.9773 18.4422L13.0909 12.7394C13.1999 12.4452 13.4804 12.25 13.7941 12.25ZM13.4821 16H14.1061L13.7941 15.1582L13.4821 16ZM18.4559 12.2502V16.1741L19.3529 15.2664L20.25 16.1741V12.2502H21.75V18C21.75 18.3041 21.5663 18.5782 21.285 18.6937C21.0036 18.8093 20.6803 18.7435 20.4666 18.5272L19.3529 17.4004L18.2393 18.5272C18.0255 18.7435 17.7023 18.8093 17.4209 18.6937C17.1396 18.5782 16.9559 18.3041 16.9559 18V12.2502H18.4559ZM6.25 13.0002C6.25 12.586 6.58579 12.2502 7 12.2502H8.64706C9.75182 12.2502 10.6324 13.154 10.6324 14.2502C10.6324 15.0875 10.1186 15.8126 9.3835 16.1083L10.5078 18.3307L9.16933 19.0078L7.77421 16.2501H7.75V18.7495H6.25V13.0002ZM7.75 14.7501V13.7502H8.64706C8.90677 13.7502 9.13235 13.9657 9.13235 14.2502C9.13235 14.5346 8.90677 14.7501 8.64706 14.7501H7.75Z',
  d13: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H20.75V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V10H20.75V2.22727Z',
} as const;

export const IconRaw02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-stroke-rounded IconRaw02StrokeRounded"
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

export const IconRaw02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-duotone-rounded IconRaw02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const IconRaw02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-twotone-rounded IconRaw02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRaw02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-solid-rounded IconRaw02SolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRaw02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-bulk-rounded IconRaw02BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRaw02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-stroke-sharp IconRaw02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRaw02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="raw-02-solid-sharp IconRaw02SolidSharp"
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

export const iconPackOfRaw02: TheIconSelfPack = {
  name: 'Raw02',
  StrokeRounded: IconRaw02StrokeRounded,
  DuotoneRounded: IconRaw02DuotoneRounded,
  TwotoneRounded: IconRaw02TwotoneRounded,
  SolidRounded: IconRaw02SolidRounded,
  BulkRounded: IconRaw02BulkRounded,
  StrokeSharp: IconRaw02StrokeSharp,
  SolidSharp: IconRaw02SolidSharp,
};