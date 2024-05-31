import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z',
  d2: 'M13 20.8434C11.8824 21.5748 10.5465 22 9.11116 22C5.18378 22 2 18.8162 2 14.8888C2 13.4535 2.42523 12.1176 3.15657 11',
  d3: 'M16 7.87274C15.875 7.04516 15.109 6.26561 14.0741 6.56561C12.9907 6.87966 12.4993 8.4729 12.9907 9.46841C13.5 10.5 13.7436 11.5 13.0794 12.9148C12.95 13.1904 12.8854 13.3282 12.921 13.4141C12.9567 13.5 13.0709 13.5 13.2992 13.5H16M12 10.1667H15.5',
  d4: 'M2.98539 10.2046C3.25498 9.87533 3.38978 9.71071 3.52076 9.75762C3.65173 9.80454 3.65134 10.0329 3.65055 10.4897C3.65054 10.4955 3.65054 10.5012 3.65054 10.507C3.65054 15.9427 8.05704 20.3492 13.4927 20.3492C13.4985 20.3492 13.5043 20.3492 13.5101 20.3492C13.9668 20.3484 14.1952 20.348 14.2421 20.479C14.289 20.61 14.1244 20.7448 13.7952 21.0144C12.4707 22.099 10.7772 22.7498 8.93172 22.7498C4.68922 22.7498 1.25 19.3105 1.25 15.068C1.25 13.2226 1.90079 11.5291 2.98539 10.2046Z',
  d5: 'M14 1.24976C9.16751 1.24976 5.25 5.16726 5.25 9.99976C5.25 14.8322 9.16751 18.7498 14 18.7498C18.8325 18.7498 22.75 14.8322 22.75 9.99976C22.75 5.16726 18.8325 1.24976 14 1.24976ZM16.7416 7.76055C16.6522 7.16875 16.3363 6.58983 15.8378 6.20339C15.3194 5.80159 14.6223 5.62565 13.8653 5.84509C13.0172 6.09093 12.4819 6.80566 12.234 7.51336C12.0287 8.09967 11.979 8.79041 12.1675 9.41649H12C11.5858 9.41649 11.25 9.75228 11.25 10.1665C11.25 10.5807 11.5858 10.9165 12 10.9165H12.7058C12.7154 10.9788 12.7225 11.0411 12.7272 11.1036C12.7578 11.5129 12.6858 11.9881 12.4005 12.5959L12.3898 12.6187C12.3348 12.7357 12.2714 12.8705 12.2305 12.9875C12.1965 13.0845 12.0948 13.38 12.2284 13.7016C12.3897 14.0899 12.7377 14.198 12.909 14.2279C13.0383 14.2505 13.1873 14.2501 13.276 14.2499L13.2992 14.2498H16C16.4142 14.2498 16.75 13.914 16.75 13.4998C16.75 13.0856 16.4142 12.7498 16 12.7498H13.9601C14.1855 12.1297 14.2648 11.5513 14.223 10.9918C14.2211 10.9666 14.219 10.9415 14.2167 10.9165H15.5C15.9142 10.9165 16.25 10.5807 16.25 10.1665C16.25 9.75228 15.9142 9.41649 15.5 9.41649H13.7955C13.7529 9.32158 13.7087 9.22821 13.6633 9.13623C13.5251 8.8563 13.5044 8.42398 13.6497 8.00922C13.7955 7.59291 14.0476 7.35399 14.2829 7.28578C14.5608 7.20522 14.7641 7.26905 14.9188 7.38892C15.0932 7.52415 15.2228 7.74879 15.2584 7.98458C15.3203 8.39414 15.7024 8.67601 16.112 8.61415C16.5216 8.55229 16.8035 8.17012 16.7416 7.76055Z',
  d6: 'M5.25 9.99976C5.25 5.16726 9.16751 1.24976 14 1.24976C18.8325 1.24976 22.75 5.16726 22.75 9.99976C22.75 14.8322 18.8325 18.7498 14 18.7498C9.16751 18.7498 5.25 14.8322 5.25 9.99976Z',
  d7: 'M15.8378 6.20339C16.3363 6.58983 16.6522 7.16875 16.7416 7.76055C16.8035 8.17012 16.5216 8.55229 16.112 8.61415C15.7024 8.67601 15.3203 8.39414 15.2584 7.98458C15.2228 7.74879 15.0932 7.52415 14.9188 7.38892C14.7641 7.26905 14.5608 7.20522 14.2829 7.28578C14.0476 7.35399 13.7955 7.59291 13.6497 8.00922C13.5044 8.42398 13.5251 8.8563 13.6633 9.13623C13.7087 9.22821 13.7529 9.32158 13.7955 9.41649H15.5C15.9142 9.41649 16.25 9.75228 16.25 10.1665C16.25 10.5807 15.9142 10.9165 15.5 10.9165H14.2167C14.219 10.9415 14.2211 10.9666 14.223 10.9918C14.2648 11.5513 14.1855 12.1297 13.9601 12.7498H16C16.4142 12.7498 16.75 13.0856 16.75 13.4998C16.75 13.914 16.4142 14.2498 16 14.2498H13.2992C13.292 14.2498 13.2843 14.2498 13.276 14.2499C13.1873 14.2501 13.0383 14.2505 12.909 14.2279C12.7377 14.198 12.3897 14.0899 12.2284 13.7016C12.0948 13.38 12.1965 13.0845 12.2305 12.9875C12.2714 12.8705 12.3348 12.7357 12.3898 12.6187C12.3934 12.611 12.397 12.6034 12.4005 12.5959C12.6858 11.9881 12.7578 11.5129 12.7272 11.1036C12.7225 11.0411 12.7154 10.9788 12.7058 10.9165H12C11.5858 10.9165 11.25 10.5807 11.25 10.1665C11.25 9.75228 11.5858 9.41649 12 9.41649H12.1675C11.979 8.79041 12.0287 8.09967 12.234 7.51336C12.4819 6.80566 13.0172 6.09093 13.8653 5.84509C14.6223 5.62565 15.3194 5.80159 15.8378 6.20339Z',
  d8: 'M16.5 7.56885C16.3438 6.62304 15.3863 5.73213 14.0926 6.07499C12.7384 6.4339 12.1241 8.25475 12.7384 9.39246C13.375 10.5714 14 12 12.5 14H17.5M10.5 10.1905H15.5',
  d9: 'M4.03233 7.60083C3.84776 8.37045 3.75 9.17383 3.75 10C3.75 15.661 8.33908 20.25 14 20.25C14.8262 20.25 15.6296 20.1523 16.3992 19.9677C14.802 21.6797 12.526 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 11.474 2.32039 9.19802 4.03233 7.60083Z',
  d10: 'M14 1.25C9.16751 1.25 5.25 5.16751 5.25 10C5.25 14.8325 9.16751 18.75 14 18.75C18.8325 18.75 22.75 14.8325 22.75 10C22.75 5.16751 18.8325 1.25 14 1.25ZM17.24 7.44659C17.0221 6.1279 15.6817 4.87791 13.9005 5.35001C12.9345 5.60604 12.2862 6.36621 11.977 7.17336C11.7084 7.87433 11.6569 8.70738 11.9372 9.44047H10.5V10.9405H12.5905C12.6329 11.1031 12.6612 11.2675 12.672 11.4363C12.7071 11.9842 12.561 12.6686 11.9 13.55L11 14.75H17.5V13.25H13.8135C14.1057 12.5826 14.2078 11.9478 14.1689 11.3404C14.1601 11.2037 14.1443 11.0704 14.1226 10.9405H15.5V9.44047H13.6089C13.5383 9.29787 13.4669 9.16302 13.3984 9.03612C13.216 8.69836 13.1926 8.19314 13.3777 7.70998C13.5606 7.23254 13.8966 6.90283 14.2848 6.79995C15.0908 6.58633 15.6654 7.11817 15.76 7.69108L17.24 7.44659Z',
} as const;

export const IconCoinsPoundStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-stroke-rounded IconCoinsPoundStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsPoundDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-duotone-rounded IconCoinsPoundDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsPoundTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-twotone-rounded IconCoinsPoundTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCoinsPoundSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-solid-rounded IconCoinsPoundSolidRounded"
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

export const IconCoinsPoundBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-bulk-rounded IconCoinsPoundBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsPoundStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-stroke-sharp IconCoinsPoundStrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsPoundSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-pound-solid-sharp IconCoinsPoundSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCoinsPound: TheIconSelfPack = {
  name: 'CoinsPound',
  StrokeRounded: IconCoinsPoundStrokeRounded,
  DuotoneRounded: IconCoinsPoundDuotoneRounded,
  TwotoneRounded: IconCoinsPoundTwotoneRounded,
  SolidRounded: IconCoinsPoundSolidRounded,
  BulkRounded: IconCoinsPoundBulkRounded,
  StrokeSharp: IconCoinsPoundStrokeSharp,
  SolidSharp: IconCoinsPoundSolidSharp,
};