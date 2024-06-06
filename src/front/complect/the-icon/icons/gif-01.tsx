import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.50406 17C7.46902 16.2336 7.11117 16.0342 6.00567 16H4.50727C3.95558 16 3.50834 16.4477 3.50834 17V19.8944C3.50834 20.6301 3.37142 21.6207 4.05202 21.8983C4.17356 21.9478 4.32262 21.9801 4.50727 22H6.9047C7.23572 22 7.50406 21.7314 7.50406 21.4V19.9C7.50406 19.6791 7.32517 19.5 7.10449 19.5H6.00567M10.5009 16H13.9971M10.5009 22H12.249M12.249 22H13.9971M12.249 22V16.1399M16.9939 22V16.6C16.9939 16.2686 17.2622 16 17.5933 16H20.4902M16.9939 19H19.4912',
  d2: 'M3.50781 13V12.1963C3.50781 9.22889 3.50781 7.7452 3.97656 6.56021C4.73012 4.65518 6.32381 3.15252 8.3442 2.44198C9.60096 2 11.1745 2 14.3216 2C16.12 2 17.0191 2 17.7372 2.25256C18.8918 2.65858 19.8024 3.51725 20.233 4.60584C20.5009 5.28297 20.5009 6.13079 20.5009 7.82643V12.0142V13',
  d3: 'M3.50781 12C3.50781 10.1591 4.99959 8.66667 6.83979 8.66667C7.50531 8.66667 8.28991 8.78333 8.93697 8.60988C9.51189 8.45576 9.96095 8.00652 10.115 7.43136C10.2884 6.78404 10.1718 5.99912 10.1718 5.33333C10.1718 3.49238 11.6636 2 13.5037 2',
  d4: 'M9.49977 8.49792C5.89977 8.49792 3.50098 9.5 3.50098 12.1963V13H20.501V7.82643C20.501 6.13079 20.501 5.28297 20.233 4.60583C19.8022 3.51725 18.8912 2.65858 17.7362 2.25256C17.0178 2 16.1182 2 14.3192 2C13.9891 2 13.6763 2 13.3793 2.00051C9.49977 2.00051 10.5342 5.05948 10.5509 6.55167C10.5919 8.19467 9.80118 8.49792 9.49977 8.49792Z',
  d5: 'M7.50504 17C7.47 16.2336 7.11215 16.0342 6.00665 16H4.50825C3.95656 16 3.50932 16.4477 3.50932 17V19.8944C3.50932 20.6301 3.3724 21.6207 4.053 21.8983C4.17454 21.9478 4.3236 21.9801 4.50825 22H6.90568C7.2367 22 7.50504 21.7314 7.50504 21.4V19.9C7.50504 19.6791 7.32615 19.5 7.10547 19.5H6.00665M10.5019 16H13.9981M10.5019 22H12.25M12.25 22H13.9981M12.25 22V16.1399M16.9949 22V16.6C16.9949 16.2686 17.2632 16 17.5943 16H20.4912M16.9949 19H19.4922',
  d6: 'M3.50098 13V12.1963C3.50098 9.22889 3.50098 7.7452 3.96992 6.56021C4.72379 4.65518 6.31812 3.15252 8.33934 2.44198C9.59661 2 11.1708 2 14.3192 2C16.1183 2 17.0178 2 17.7362 2.25256C18.8912 2.65858 19.8022 3.51725 20.233 4.60584C20.501 5.28297 20.501 6.13079 20.501 7.82643V12.0142V13',
  d7: 'M3.50098 12C3.50098 10.1591 4.99336 8.66667 6.83431 8.66667C7.5001 8.66667 8.28502 8.78333 8.93235 8.60988C9.5075 8.45576 9.95674 8.00652 10.1109 7.43136C10.2843 6.78404 10.1677 5.99912 10.1677 5.33333C10.1677 3.49238 11.6601 2 13.501 2',
  d8: 'M3.5 13.0005V12.1968C3.5 9.22938 3.5 7.74569 3.96894 6.5607C4.72281 4.65567 6.31714 3.15301 8.33836 2.44247C9.59563 2.00049 11.1698 2.00049 14.3182 2.00049C16.1173 2.00049 17.0168 2.00049 17.7352 2.25305C18.8902 2.65907 19.8012 3.51774 20.232 4.60633C20.5 5.28346 20.5 6.13128 20.5 7.82692V12.0147V13.0005',
  d9: 'M3.5 12.0005C3.5 10.1596 4.99238 8.66716 6.83333 8.66716C7.49912 8.66716 8.28404 8.78382 8.93137 8.61037C9.50652 8.45625 9.95576 8.00701 10.1099 7.43185C10.2833 6.78453 10.1667 5.99961 10.1667 5.33382C10.1667 3.49287 11.6591 2.00049 13.5 2.00049',
  d10: 'M7.51383 16.9995C7.47879 16.2331 7.12094 16.0337 6.01543 15.9995H4.51704C3.96534 15.9995 3.51811 16.4472 3.51811 16.9995V19.8939C3.51811 20.6297 3.38119 21.6202 4.06179 21.8978C4.18332 21.9474 4.33239 21.9796 4.51704 21.9995H6.91447C7.24549 21.9995 7.51383 21.7309 7.51383 21.3995V19.8995C7.51383 19.6786 7.33493 19.4995 7.11425 19.4995H6.01543M10.5106 15.9995H14.0069M10.5106 21.9995H12.2587M12.2587 21.9995H14.0069M12.2587 21.9995V16.1394M16.8961 21.9995V16.7686C16.8961 16.6535 16.9265 16.5383 17.0006 16.4502C17.3797 15.9995 17.9035 15.9995 18.2056 15.9995H20.4457M16.8961 18.9995H19.4467',
  d11: 'M5.56452 16.7525C5.05736 16.7525 4.7501 16.754 4.52872 16.7829C4.33961 16.7987 4.28457 16.9398 4.28068 17.0084C4.2517 17.2172 4.25001 17.5093 4.25001 18.0025V20.0025C4.25001 20.4958 4.2517 20.7879 4.28068 20.9967C4.29403 21.0658 4.36232 21.2075 4.52872 21.2222C4.7501 21.251 5.05736 21.2525 5.56452 21.2525C6.07169 21.2525 6.37895 21.251 6.60033 21.2222C6.78909 21.1621 6.84434 21.0468 6.84837 20.9967C6.87219 20.825 6.87757 20.597 6.87874 20.2472C6.78162 20.2362 6.5056 20.2205 6.17846 20.2461C6.17819 20.2462 6.17792 20.2462 6.17765 20.2462C5.76741 20.2996 5.39102 20.0106 5.33706 19.6003C5.28304 19.1897 5.57217 18.813 5.98285 18.7589C6.17619 18.734 6.63555 18.6958 6.92629 18.7421C7.1559 18.764 7.47003 18.8172 7.74861 18.9704C8.06147 19.1425 8.37904 19.4798 8.37904 20.0025C8.3791 20.4345 8.37915 20.8785 8.33413 21.2029C8.28418 21.5628 8.16644 21.9404 7.84855 22.2483C7.53398 22.5531 7.15407 22.6628 6.79406 22.7096C6.46404 22.7526 6.05727 22.7526 5.60868 22.7525C5.16009 22.7526 4.66501 22.7526 4.33499 22.7096C3.97498 22.6628 3.59507 22.5531 3.2805 22.2483C2.96261 21.9404 2.84487 21.5628 2.79492 21.2029C2.7499 20.8785 2.74995 20.4802 2.75 20.0483L2.75 17.9568C2.74995 17.5249 2.7499 17.1266 2.79492 16.8022C2.84487 16.4422 2.96261 16.0647 3.2805 15.7567C3.59507 15.452 3.97498 15.3423 4.33499 15.2954C4.66501 15.2524 5.27672 15.2514 5.72531 15.2514C6.10046 15.2476 6.63589 15.2421 7.08582 15.3752C7.3715 15.4596 7.67871 15.6118 7.92502 15.8918C8.17491 16.1759 8.30884 16.5311 8.34901 16.9268C8.39085 17.3389 8.09071 17.7069 7.67861 17.7487C7.26652 17.7905 6.89853 17.4904 6.85669 17.0783C6.82187 16.9287 6.71143 16.8395 6.66057 16.8136C6.55492 16.7824 6.40944 16.7629 6.21059 16.7552C6.06706 16.7496 5.71971 16.7515 5.56452 16.7525Z',
  d12: 'M9.96094 16C9.96094 15.5858 10.2967 15.25 10.7109 15.25H13.8077C14.2219 15.25 14.5577 15.5858 14.5577 16C14.5577 16.4142 14.2219 16.75 13.8077 16.75H13.0093V21.25H13.8077C14.2219 21.25 14.5577 21.5858 14.5577 22C14.5577 22.4142 14.2219 22.75 13.8077 22.75H10.7109C10.2967 22.75 9.96094 22.4142 9.96094 22C9.96094 21.5858 10.2967 21.25 10.7109 21.25H11.5093V16.75H10.7109C10.2967 16.75 9.96094 16.4142 9.96094 16Z',
  d13: 'M20.4996 15.25C20.9138 15.25 21.2496 15.5858 21.2496 16C21.2496 16.4142 20.9138 16.75 20.4996 16.75H18.9512C18.4441 16.75 18.1368 16.7515 17.9154 16.7803C17.7608 16.7943 17.6856 16.9365 17.6674 17.0058C17.6384 17.2146 17.6367 17.7567 17.6367 18.25H19.4674C19.8816 18.25 20.2174 18.5858 20.2174 19C20.2174 19.4142 19.8816 19.75 19.4674 19.75H17.6367V22C17.6367 22.4142 17.3009 22.75 16.8867 22.75C16.4725 22.75 16.1367 22.4142 16.1367 22L16.1367 17.9543L16.1367 17.9543C16.1367 17.5223 16.1366 17.124 16.1816 16.7996C16.2316 16.4397 16.3493 16.0622 16.6672 15.7542C16.9818 15.4495 17.3617 15.3398 17.7217 15.2929C18.0517 15.2499 18.4585 15.25 18.9071 15.25L20.4996 15.25Z',
  d14: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d15: 'M20.5039 13.0188V2.10679C20.5039 2.05159 20.4591 2.00684 20.4039 2.00684H10.5017L3.50098 9.00878V12.9993M10.5017 2.59411V8.99706L4.00899 9.00793',
  d16: 'M10.4883 15.4961H14.4922',
  d17: 'M8.00233 16.9835V15.5836C8.00233 15.5284 7.95756 15.4836 7.90233 15.4836H3.6C3.54477 15.4836 3.5 15.5284 3.5 15.5836V21.4017C3.5 21.4569 3.54477 21.5017 3.6 21.5017H7.90233C7.95756 21.5017 8.00233 21.4569 8.00233 21.4017V18.4838H5.9817M10.488 15.491H12.49M12.49 15.491H14.4919M12.49 15.491V21.5022M12.49 21.5022H10.5M12.49 21.5022H14.5039M20.4958 15.491H16.9924V18.4935M16.9924 18.4935L16.9924 22.0038M16.9924 18.4935H19.9998',
  d18: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d19: 'M16.2506 15.25L21.2506 15.25L21.2506 16.75L17.7506 16.75V18.25H19.999V19.75H17.7506V22.75H16.2506V15.25ZM11.749 16.75L10.499 16.75V15.25H14.499V16.75L13.249 16.75V21.25H14.499V22.75H10.499V21.25H11.749V16.75ZM2.96858 15.4698C3.10924 15.3291 3.30006 15.25 3.49902 15.25H7.99902C8.41324 15.25 8.74902 15.5858 8.74902 16V17.5H7.24902V16.75H4.24935L4.25128 21.25H7.24902V19.75L5.99904 19.75L5.99901 18.25L8.74902 18.2499V22C8.74902 22.4142 8.41324 22.75 7.99902 22.75H3.5016C3.08751 22.75 2.75178 22.4144 2.7516 22.0003L2.74902 16.0003C2.74894 15.8014 2.82792 15.6105 2.96858 15.4698Z',
} as const;

export const IconGif01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-stroke-rounded IconGif01StrokeRounded"
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

export const IconGif01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-duotone-rounded IconGif01DuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGif01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-twotone-rounded IconGif01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGif01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-solid-rounded IconGif01SolidRounded"
    >
      <path 
        d={d.d11} 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGif01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-bulk-rounded IconGif01BulkRounded"
    >
      <path 
        d={d.d11} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGif01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-stroke-sharp IconGif01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGif01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gif-01-solid-sharp IconGif01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfGif01: TheIconSelfPack = {
  name: 'Gif01',
  StrokeRounded: IconGif01StrokeRounded,
  DuotoneRounded: IconGif01DuotoneRounded,
  TwotoneRounded: IconGif01TwotoneRounded,
  SolidRounded: IconGif01SolidRounded,
  BulkRounded: IconGif01BulkRounded,
  StrokeSharp: IconGif01StrokeSharp,
  SolidSharp: IconGif01SolidSharp,
};