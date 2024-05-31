import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M3.5 16L5.38235 19M5.38235 19L7.26471 22M5.38235 19L7.26471 16M5.38235 19L3.5 22M20.5 22H19.5588C18.6715 22 18.2278 22 17.9521 21.7071C17.6765 21.4142 17.6765 20.9428 17.6765 20V16M10.1176 21.9999L10.5081 17.0015C10.5413 16.5775 10.5578 16.3655 10.68 16.3259C10.8021 16.2864 10.9272 16.4525 11.1773 16.7847L12.1748 18.1095C12.3104 18.2897 12.3783 18.3798 12.4688 18.3798C12.5592 18.3798 12.6271 18.2897 12.7627 18.1095L13.7608 16.784C14.0107 16.452 14.1357 16.286 14.2578 16.3256C14.3799 16.3651 14.3965 16.5769 14.4299 17.0005L14.8235 21.9999',
  d4: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d5: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d6: 'M3.10148 15.3648C3.45235 15.1447 3.91525 15.2506 4.1354 15.6015L5.38245 17.589L6.62951 15.6015C6.84966 15.2506 7.31256 15.1447 7.66342 15.3648C8.01429 15.585 8.12025 16.0479 7.9001 16.3987L6.26786 19.0001L7.9001 21.6015C8.12025 21.9523 8.01429 22.4152 7.66342 22.6354C7.31256 22.8555 6.84966 22.7496 6.62951 22.3987L5.38245 20.4112L4.1354 22.3987C3.91525 22.7496 3.45235 22.8555 3.10148 22.6354C2.75062 22.4152 2.64465 21.9523 2.8648 21.6015L4.49704 19.0001L2.8648 16.3987C2.64465 16.0479 2.75062 15.585 3.10148 15.3648Z',
  d7: 'M12.4683 17.1863L13.1691 16.3207L13.1826 16.3028C13.2878 16.1628 13.4098 16.0006 13.5254 15.8845C13.6146 15.795 13.9757 15.4445 14.4882 15.6104C14.9796 15.7694 15.0845 16.2404 15.1102 16.3612C15.1444 16.5218 15.1603 16.725 15.1744 16.905L15.1772 16.94L15.5708 21.9394C15.6033 22.3524 15.2949 22.7135 14.882 22.746C14.469 22.7785 14.1079 22.4701 14.0754 22.0572L13.7545 17.9814L13.3621 18.4661L13.348 18.4835C13.2904 18.5549 13.2046 18.6612 13.1156 18.7437C13.0041 18.8471 12.7873 19.0103 12.4683 19.0103C12.1494 19.0103 11.9325 18.8471 11.821 18.7437C11.732 18.6612 11.6463 18.555 11.5886 18.4836L11.5886 18.4836L11.5746 18.4661L11.1832 17.9828L10.8649 22.0567C10.8327 22.4697 10.4718 22.7783 10.0588 22.746C9.64585 22.7137 9.33724 22.3528 9.3695 21.9399L9.76 16.9415L9.76273 16.9064C9.77671 16.7263 9.79249 16.5229 9.8266 16.3622C9.85222 16.2415 9.95683 15.7701 10.4484 15.6108C10.9612 15.4447 11.3225 15.7956 11.4116 15.885C11.5273 16.0011 11.6493 16.1634 11.7546 16.3035L11.7546 16.3035L11.7681 16.3215L12.4683 17.1863Z',
  d8: 'M17.6758 15.25C18.09 15.25 18.4258 15.5858 18.4258 16V20C18.4258 20.4914 18.4272 20.7889 18.4543 21.0031C18.4668 21.1021 18.4819 21.1537 18.4915 21.1786C18.4935 21.1838 18.4952 21.1875 18.4964 21.1901C18.511 21.1962 18.5496 21.2092 18.6315 21.2209C18.8224 21.2482 19.092 21.25 19.5581 21.25H20.4993C20.9135 21.25 21.2493 21.5858 21.2493 22C21.2493 22.4142 20.9135 22.75 20.4993 22.75H19.5581C19.5428 22.75 19.5276 22.75 19.5124 22.75C19.1083 22.7501 18.7293 22.7501 18.4194 22.7059C18.0713 22.6561 17.7035 22.5379 17.4053 22.2211C17.1132 21.9107 17.0102 21.5389 16.9662 21.1914C16.9257 20.8715 16.9257 20.4774 16.9258 20.0429C16.9258 20.0286 16.9258 20.0143 16.9258 20V16C16.9258 15.5858 17.2616 15.25 17.6758 15.25Z',
  d9: 'M20.5 2H21.25C21.25 1.58579 20.9142 1.25 20.5 1.25V2ZM10.5 2V1.25H10.1893L9.96967 1.46967L10.5 2ZM3.5 9L2.96967 8.46967L2.75 8.68934V9H3.5ZM10.5 9V9.75H11.25V9H10.5ZM19.75 2V13H21.25V2H19.75ZM20.5 1.25H10.5V2.75H20.5V1.25ZM2.75 9V13H4.25V9H2.75ZM9.96967 1.46967L2.96967 8.46967L4.03033 9.53033L11.0303 2.53033L9.96967 1.46967ZM9.75 2V9H11.25V2H9.75ZM10.5 8.25H3.5V9.75H10.5V8.25Z',
  d10: 'M20.4493 12.9909V2.09987C20.4493 2.04471 20.4048 2 20.3498 2H10.5346L3.5202 8.97842L3.51953 13.0131M4.12792 8.97842H10.5346V2.61428',
  d11: 'M3.49219 15.5095L7.50975 21.996M10.4915 21.9895L10.491 16.0647C10.491 15.9758 10.5983 15.9311 10.6612 15.9938L12.7329 18.0573L14.8081 15.9935C14.871 15.9309 14.9782 15.9755 14.9782 16.0644V21.9895M17.4748 15.4883V21.3931C17.4748 21.4483 17.5195 21.493 17.5746 21.493H20.4884M7.50242 15.4963L3.49226 21.9828',
  d12: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d13: 'M3.8139 15.25L5.54007 17.6479L7.39788 15.25L8.64596 16.0821L6.44147 19L8.58013 21.918L7.33206 22.75L5.54008 20.3521L3.74808 22.7501L2.5 21.918L4.63869 19L2.56583 16.0821L3.8139 15.25ZM10.2328 15.3158C10.5022 15.1948 10.8176 15.2432 11.0383 15.4395L12.7901 16.9965L14.5418 15.4395C14.7625 15.2432 15.0779 15.1948 15.3473 15.3158C15.6167 15.4368 15.7901 15.7047 15.7901 16V22.7499H14.2901V17.6701L12.7901 19.0035L11.2901 17.6701V22.75H9.79006V16C9.79006 15.7047 9.9634 15.4368 10.2328 15.3158ZM18.5 15.25V21.25H21.5V22.75H17.75C17.3358 22.75 17 22.4142 17 22V15.25H18.5Z',
} as const;

export const IconXml01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-stroke-rounded IconXml01StrokeRounded"
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

export const IconXml01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-duotone-rounded IconXml01DuotoneRounded"
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

export const IconXml01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-twotone-rounded IconXml01TwotoneRounded"
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

export const IconXml01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-solid-rounded IconXml01SolidRounded"
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

export const IconXml01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-bulk-rounded IconXml01BulkRounded"
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

export const IconXml01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-stroke-sharp IconXml01StrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconXml01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="xml-01-solid-sharp IconXml01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfXml01: TheIconSelfPack = {
  name: 'Xml01',
  StrokeRounded: IconXml01StrokeRounded,
  DuotoneRounded: IconXml01DuotoneRounded,
  TwotoneRounded: IconXml01TwotoneRounded,
  SolidRounded: IconXml01SolidRounded,
  BulkRounded: IconXml01BulkRounded,
  StrokeSharp: IconXml01StrokeSharp,
  SolidSharp: IconXml01SolidSharp,
};