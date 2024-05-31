import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M13.5413 16H12.4299C11.9857 16 11.7636 16 11.5885 16.0761C10.9919 16.3353 11 16.9447 11 17.5C11 18.0553 10.9919 18.6647 11.5885 18.9239C11.7636 19 11.9857 19 12.4299 19C12.874 19 13.0961 19 13.2713 19.0761C13.8678 19.3353 13.8597 19.9447 13.8597 20.5C13.8597 21.0553 13.8678 21.6647 13.2713 21.9239C13.0961 22 12.874 22 12.4299 22H11.2193M3.5 16L5.5 19M5.5 19L7.5 22M5.5 19L7.5 16M5.5 19L3.5 22M20.5 22H19.5C18.5572 22 18.0858 22 17.7929 21.7071C17.5 21.4142 17.5 20.9428 17.5 20V16',
  d4: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d5: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d6: 'M3.08405 15.376C3.4287 15.1463 3.89435 15.2394 4.12412 15.5841L5.50008 17.648L6.87604 15.5841C7.10581 15.2394 7.57146 15.1463 7.9161 15.376C8.26075 15.6058 8.35388 16.0715 8.12412 16.4161L6.40147 19.0001L8.12412 21.5841C8.35388 21.9287 8.26075 22.3944 7.9161 22.6241C7.57146 22.8539 7.10581 22.7608 6.87604 22.4161L5.50008 20.3522L4.12412 22.4161C3.89435 22.7608 3.4287 22.8539 3.08405 22.6241C2.73941 22.3944 2.64628 21.9287 2.87604 21.5841L4.59869 19.0001L2.87604 16.4161C2.64628 16.0715 2.73941 15.6058 3.08405 15.376Z',
  d7: 'M12.43 15.25H13.5414C13.9556 15.25 14.2914 15.5858 14.2914 16C14.2914 16.4142 13.9556 16.75 13.5414 16.75H12.43C12.1971 16.75 12.0619 16.7504 11.962 16.7576C11.9139 16.7543 11.8126 16.7748 11.7918 16.8829C11.7539 17.0157 11.7501 17.192 11.7501 17.5C11.7501 17.808 11.7539 17.9843 11.7918 18.1171C11.8016 18.157 11.8492 18.2378 11.962 18.2424C12.0619 18.2496 12.2193 18.25 12.4522 18.25C12.6551 18.25 12.845 18.25 13.0051 18.2614C13.1785 18.2738 13.3727 18.3024 13.5703 18.3883C14.1103 18.6229 14.388 19.042 14.5105 19.4712C14.6111 19.8235 14.6104 20.2979 14.6099 20.5475C14.6104 20.7972 14.6111 21.1765 14.5105 21.5288C14.388 21.958 14.1103 22.3771 13.5703 22.6117C13.3727 22.6976 13.1785 22.7262 13.0051 22.7386C12.845 22.75 12.6551 22.75 12.4522 22.75L11.2195 22.75C10.8052 22.75 10.4695 22.4142 10.4695 22C10.4695 21.5858 10.8052 21.25 11.2195 21.25H12.43C12.6628 21.25 12.7981 21.2496 12.898 21.2424C12.9995 21.238 13.0537 21.1571 13.0681 21.1171C13.106 20.9843 13.1098 20.808 13.1098 20.5C13.1098 20.192 13.106 20.0157 13.0681 19.8829C13.0446 19.7486 12.9449 19.7434 12.898 19.7576C12.7981 19.7504 12.6406 19.75 12.4078 19.75C12.2048 19.75 12.015 19.75 11.8549 19.7386C11.6815 19.7262 11.4873 19.6976 11.2897 19.6117C10.7497 19.3771 10.4719 18.958 10.3494 18.5288C10.2489 18.1765 10.2496 17.7972 10.2501 17.5475C10.2496 17.2979 10.2489 16.8235 10.3494 16.4712C10.4719 16.042 10.7497 15.6229 11.2897 15.3883C11.4873 15.3024 11.6815 15.2738 11.8549 15.2614C12.015 15.25 12.227 15.25 12.43 15.25Z',
  d8: 'M17.5 15.25C17.9142 15.25 18.25 15.5858 18.25 16V20C18.25 20.4926 18.2516 20.7866 18.2799 20.9973C18.2929 21.0939 18.3082 21.1423 18.3172 21.164C18.3192 21.1691 18.3209 21.1724 18.3219 21.1743L18.3232 21.1768L18.3257 21.1781C18.3276 21.1791 18.3309 21.1808 18.336 21.1828C18.3578 21.1918 18.4061 21.2071 18.5027 21.2201C18.7134 21.2484 19.0074 21.25 19.5 21.25H20.5C20.9142 21.25 21.25 21.5858 21.25 22C21.25 22.4142 20.9142 22.75 20.5 22.75H19.5C19.4851 22.75 19.4701 22.75 19.4553 22.75C19.0224 22.7501 18.6256 22.7501 18.3028 22.7067C17.9473 22.6589 17.5716 22.5465 17.2626 22.2374C16.9535 21.9284 16.8411 21.5527 16.7933 21.1972C16.7499 20.8744 16.75 20.4776 16.75 20.0447C16.75 20.0299 16.75 20.015 16.75 20V16C16.75 15.5858 17.0858 15.25 17.5 15.25Z',
  d9: 'M14.5 16H11V18.5H14V21.5H10.5M3.5 15.5L5.5 19M5.5 19L7.5 22M5.5 19L7.5 15.5M5.5 19L3.5 22M20.5 21.5H17.5V15.5',
  d10: 'M20.4493 12.9909V2.09987C20.4493 2.04471 20.4048 2 20.3498 2H10.5346L3.5202 8.97842L3.51953 13.0131M10.5346 2.58822V8.97842H4.11507',
  d11: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d12: 'M3.49808 15.25L5.29006 17.6479L7.08205 15.25L8.33013 16.0821L6.19145 19L8.33013 21.9179L7.08205 22.75L5.29006 20.3521L3.49808 22.75L2.25 21.9179L4.38868 19L2.25 16.0821L3.49808 15.25ZM10.499 16C10.499 15.5858 10.8348 15.25 11.249 15.25H14.999V16.75H11.999V18.25H14.249C14.6633 18.25 14.999 18.5858 14.999 19V22C14.999 22.4142 14.6633 22.75 14.249 22.75H10.499V21.25H13.499V19.75H11.249C10.8348 19.75 10.499 19.4142 10.499 19V16ZM18.75 15.25V21.25H21.75V22.75H18C17.5858 22.75 17.25 22.4142 17.25 22V15.25H18.75Z',
} as const;

export const IconXsl01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-stroke-rounded IconXsl01StrokeRounded"
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

export const IconXsl01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-duotone-rounded IconXsl01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconXsl01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-twotone-rounded IconXsl01TwotoneRounded"
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

export const IconXsl01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-solid-rounded IconXsl01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconXsl01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-bulk-rounded IconXsl01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconXsl01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-stroke-sharp IconXsl01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconXsl01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xsl-01-solid-sharp IconXsl01SolidSharp"
    >
      <path 
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

export const iconPackOfXsl01: TheIconSelfPack = {
  name: 'Xsl01',
  StrokeRounded: IconXsl01StrokeRounded,
  DuotoneRounded: IconXsl01DuotoneRounded,
  TwotoneRounded: IconXsl01TwotoneRounded,
  SolidRounded: IconXsl01SolidRounded,
  BulkRounded: IconXsl01BulkRounded,
  StrokeSharp: IconXsl01StrokeSharp,
  SolidSharp: IconXsl01SolidSharp,
};