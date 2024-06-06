import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5168 2.01455H7.884C6.84571 2.01455 5.43937 1.83217 4.71912 2.75868C4.29227 3.30777 4.29227 4.11843 4.29227 5.73976C4.29227 7.03795 6.03931 8.01066 6.01966 8.50982C6 9.00954 4.29227 10.0064 4.29227 11.3362V17.5311C4.29227 18.1246 4.01196 18.5844 3.75968 19.1077C3.13475 20.404 2.82228 21.0522 3.10469 21.5261C3.38709 22 4.08579 22 5.48318 22H15.8539C17.6706 22 18.579 22 19.1433 21.4146C19.7077 20.8293 19.7077 19.8872 19.7077 18.0029V6.48344C19.7077 5.88992 19.988 5.43019 20.2403 4.90687C20.8653 3.61056 21.1777 2.9624 20.8953 2.48848C20.6129 2.01455 19.9142 2.01455 18.5168 2.01455Z',
  d2: 'M15 18H9',
  d3: 'M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z',
  d4: 'M9.89128 11.5556C9.34109 11.8715 7.89853 12.5165 8.77715 13.3237C9.20634 13.718 9.68436 14 10.2853 14H13.7147C14.3156 14 14.7937 13.718 15.2229 13.3237C16.1015 12.5165 14.6589 11.8715 14.1087 11.5556C12.8185 10.8148 11.1815 10.8148 9.89128 11.5556Z',
  d5: 'M7.884 2.01455H18.5168C19.9142 2.01455 20.6129 2.01455 20.8953 2.48848C21.1777 2.9624 20.8653 3.61056 20.2403 4.90687C20.2033 4.98374 20.1656 5.05923 20.1283 5.13398C19.9117 5.56812 19.7077 5.97709 19.7077 6.48343V18.0029C19.7077 19.8871 19.7077 20.8293 19.1433 21.4146C18.579 22 17.6706 22 15.8539 22H5.48318C4.08579 22 3.38709 22 3.10469 21.5261C2.82228 21.0522 3.13475 20.404 3.75968 19.1077C3.79674 19.0308 3.83439 18.9553 3.87168 18.8806C4.08826 18.4464 4.29227 18.0375 4.29227 17.5311V11.3362C4.29227 10.5052 4.95918 9.80421 5.46426 9.2733C5.76742 8.95464 6.01229 8.69726 6.01966 8.50982C6.02727 8.31643 5.76969 8.05195 5.45126 7.72499C4.94781 7.20807 4.29227 6.53498 4.29227 5.73976C4.29227 4.11843 4.29227 3.30776 4.71912 2.75868C5.34051 1.95935 6.47255 1.98538 7.43835 2.00758C7.59202 2.01112 7.74148 2.01455 7.884 2.01455ZM9.70387 11.6594C9.77305 11.6217 9.83658 11.587 9.89128 11.5556C11.1815 10.8148 12.8185 10.8148 14.1087 11.5556C14.1634 11.587 14.2268 11.6216 14.2959 11.6593C14.9226 12.0012 16.0141 12.5968 15.2229 13.3237C14.7937 13.718 14.3156 14 13.7147 14H10.2853C9.68436 14 9.20634 13.718 8.77715 13.3237C7.98592 12.5968 9.07717 12.0014 9.70387 11.6594ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z',
  d6: 'M18.5749 1.26432H18.5749C19.2237 1.26426 19.7962 1.26421 20.2383 1.3323C20.7102 1.40497 21.229 1.58306 21.5396 2.10432C21.8449 2.61674 21.7674 3.15808 21.6233 3.6147C21.4859 4.05009 21.2319 4.57706 20.94 5.18228L20.94 5.1823L20.7884 5.49323C20.5739 5.92913 20.4577 6.16521 20.4577 6.4832L20.4577 18.0532V18.0532V18.0532V18.0533C20.4577 18.9523 20.4578 19.6994 20.3809 20.292C20.3002 20.9146 20.1231 21.4788 19.6832 21.935C19.2397 22.395 18.6848 22.5839 18.0718 22.6694C17.4951 22.7498 16.77 22.7498 15.9071 22.7498L5.42512 22.7498H5.42509C4.77631 22.7498 4.20379 22.7499 3.76164 22.6818C3.28979 22.6091 2.77101 22.431 2.46039 21.9098C2.15505 21.3973 2.23262 20.856 2.37667 20.3994C2.51404 19.964 2.76813 19.437 3.05996 18.8318L3.05996 18.8318C3.05996 18.8318 3.54226 17.8489 3.54226 17.5309L3.54226 11.336C3.54226 10.3627 4.15751 9.59238 4.59069 9.11026C4.70514 8.98288 5.15776 8.50276 5.15776 8.50276C5.0699 8.41316 4.74513 8.07608 4.61366 7.93445C4.18266 7.47017 3.54226 6.6658 3.54226 5.69636C3.54224 4.92246 3.54223 4.27911 3.60033 3.763C3.66111 3.22303 3.79362 2.72696 4.12699 2.29814C4.66283 1.60884 5.42846 1.37593 6.09081 1.29454C6.56485 1.23629 7.0902 1.24846 7.50846 1.25816L18.5749 1.26432ZM8.25 18.125C8.25 17.7108 8.58579 17.375 9 17.375H15C15.4142 17.375 15.75 17.7108 15.75 18.125C15.75 18.5392 15.4142 18.875 15 18.875H9C8.58579 18.875 8.25 18.5392 8.25 18.125ZM9.04774 11.6575C9.13673 11.6016 9.21843 11.5502 9.28879 11.5037C10.9476 10.4062 13.0524 10.4062 14.7112 11.5037C14.7816 11.5502 14.8633 11.6016 14.9523 11.6575C15.758 12.1641 17.161 13.0462 16.1437 14.1231C15.5918 14.7072 14.9773 15.125 14.2046 15.125L9.79543 15.125C9.02275 15.125 8.40815 14.7072 7.85633 14.1231C6.83903 13.0462 8.24199 12.1641 9.04774 11.6575ZM12 9.56944C13.2426 9.56944 14.25 8.57452 14.25 7.34722C14.25 6.11992 13.2426 5.125 12 5.125C10.7574 5.125 9.75 6.11992 9.75 7.34722C9.75 8.57452 10.7574 9.56944 12 9.56944Z',
  d7: 'M18.5749 1.26432C19.2237 1.26426 19.7962 1.2642 20.2383 1.3323C20.7102 1.40497 21.229 1.58306 21.5396 2.10432C21.8449 2.61674 21.7674 3.15808 21.6233 3.6147C21.4859 4.05009 21.2319 4.57706 20.94 5.18228L20.94 5.1823L20.7884 5.49323C20.5739 5.92913 20.4577 6.16521 20.4577 6.4832V18.0532V18.0532C20.4577 18.9523 20.4578 19.6994 20.3809 20.292C20.3002 20.9146 20.1231 21.4788 19.6832 21.935C19.2397 22.395 18.6848 22.5839 18.0718 22.6694C17.4951 22.7498 16.77 22.7498 15.9071 22.7498L5.42512 22.7498H5.42509C4.77631 22.7498 4.20379 22.7499 3.76164 22.6818C3.28979 22.6091 2.77101 22.431 2.46039 21.9098C2.15505 21.3973 2.23262 20.856 2.37667 20.3994C2.51404 19.964 2.76813 19.437 3.05996 18.8318C3.05996 18.8318 3.54226 17.8489 3.54226 17.5309V11.336C3.54226 10.3627 4.15751 9.59238 4.59069 9.11026C4.70514 8.98288 5.15776 8.50276 5.15776 8.50276C5.0699 8.41316 4.74513 8.07608 4.61366 7.93445C4.18266 7.47017 3.54226 6.6658 3.54226 5.69636C3.54224 4.92246 3.54223 4.27911 3.60033 3.763C3.66111 3.22303 3.79362 2.72697 4.12699 2.29814C4.66283 1.60884 5.42846 1.37593 6.09081 1.29454C6.56485 1.23629 7.0902 1.24846 7.50846 1.25816L18.5749 1.26432Z',
  d8: 'M8.25 18.125C8.25 17.7108 8.58579 17.375 9 17.375H15C15.4142 17.375 15.75 17.7108 15.75 18.125C15.75 18.5392 15.4142 18.875 15 18.875H9C8.58579 18.875 8.25 18.5392 8.25 18.125Z',
  d9: 'M14.25 7.34722C14.25 8.57452 13.2426 9.56944 12 9.56944C10.7574 9.56944 9.75 8.57452 9.75 7.34722C9.75 6.11992 10.7574 5.125 12 5.125C13.2426 5.125 14.25 6.11992 14.25 7.34722Z',
  d10: 'M9.28879 11.5037C8.5814 11.9717 6.72668 12.9273 7.85633 14.1231C8.40815 14.7072 9.02275 15.125 9.79543 15.125H14.2046C14.9773 15.125 15.5918 14.7072 16.1437 14.1231C17.2733 12.9273 15.4186 11.9717 14.7112 11.5037C13.0524 10.4062 10.9476 10.4062 9.28879 11.5037Z',
  d11: 'M15.0494 17.9863H9.02441',
  d12: 'M13.5437 7.49477C13.5437 8.32248 12.8693 8.99345 12.0375 8.99345C11.2056 8.99345 10.5312 8.32248 10.5312 7.49477C10.5312 6.66707 11.2056 5.99609 12.0375 5.99609C12.8693 5.99609 13.5437 6.66707 13.5437 7.49477Z',
  d13: 'M9.02441 14.4886H15.0494C15.0494 12.8331 13.7007 11.4912 12.0369 11.4912C10.3731 11.4912 9.02441 12.8331 9.02441 14.4886Z',
  d14: 'M20.9571 1.98267H4.498V6.00359L6.03323 8.48773L4.51547 10.9897V17.9862C4.51547 17.9982 4.51331 18.0101 4.50907 18.0213L3.06704 21.8457C3.04241 21.911 3.09094 21.9807 3.16105 21.9807H19.5678V4.99385L21.0464 2.12821C21.0807 2.06172 21.0322 1.98267 20.9571 1.98267Z',
  d15: 'M21.6371 1.60572C21.5004 1.38461 21.259 1.25002 20.9991 1.25002L3.7491 1.25V6.20936L5.14107 8.50831L3.74913 10.7892L3.74813 17.8641L2.29765 21.737C2.21139 21.9673 2.24353 22.2252 2.38365 22.4273C2.52377 22.6294 2.75407 22.75 3 22.75H20.2491V5.17707L21.6699 2.33543C21.7862 2.10294 21.7737 1.82683 21.6371 1.60572ZM8.25 17.25H15.75V18.75H8.25V17.25ZM9.75 7.5C9.75 6.25736 10.7574 5.25 12 5.25C13.2426 5.25 14.25 6.25736 14.25 7.5C14.25 8.74264 13.2426 9.75 12 9.75C10.7574 9.75 9.75 8.74264 9.75 7.5ZM12 10.75C9.92893 10.75 8.25 12.4289 8.25 14.5V15.25H15.75V14.5C15.75 12.4289 14.0711 10.75 12 10.75Z',
};

export const IconWantedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-stroke-rounded IconWantedStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWantedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-duotone-rounded IconWantedDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWantedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-twotone-rounded IconWantedTwotoneRounded"
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconWantedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-solid-rounded IconWantedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWantedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-bulk-rounded IconWantedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWantedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-stroke-sharp IconWantedStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWantedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wanted-solid-sharp IconWantedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWanted: TheIconSelfPack = {
  name: 'Wanted',
  StrokeRounded: IconWantedStrokeRounded,
  DuotoneRounded: IconWantedDuotoneRounded,
  TwotoneRounded: IconWantedTwotoneRounded,
  SolidRounded: IconWantedSolidRounded,
  BulkRounded: IconWantedBulkRounded,
  StrokeSharp: IconWantedStrokeSharp,
  SolidSharp: IconWantedSolidSharp,
};