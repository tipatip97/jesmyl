import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 17C4 19.2091 5.75326 21 7.91602 21C9.68999 21 11.1885 19.7951 11.6699 18.1429H15.8599C16.2819 18.1429 16.3075 18.169 16.3075 18.6V19.8571C16.3075 20.3959 16.3075 20.6653 16.4713 20.8326C16.6352 21 16.8989 21 17.4263 21H18.1874C18.6265 21 18.846 21 19.0007 20.8705C19.1554 20.741 19.1984 20.5211 19.2845 20.0813L19.2845 20.0813L19.5921 18.5103C19.661 18.1585 19.6797 18.1429 20.031 18.1429H20.7829C21.3104 18.1429 21.5741 18.1429 21.7379 17.9755C22.1045 17.6011 22.0698 15.7921 21.7379 15.4531C21.5741 15.2857 21.3104 15.2857 20.7829 15.2857H11.4552C10.8267 13.9343 9.47817 13 7.91602 13C5.75326 13 4 14.7909 4 17Z',
  d2: 'M8.00896 17H8',
  d3: 'M19 12.5V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V14',
  d4: 'M13.3206 2.25C14.6747 2.24997 15.7913 2.24994 16.6751 2.36875C17.6029 2.4935 18.4223 2.76547 19.0784 3.42158C19.7345 4.07768 20.0065 4.89711 20.1313 5.82494C20.2501 6.7087 20.25 7.82531 20.25 9.17944V9.17946V12.75C20.25 13.3023 19.8023 13.75 19.25 13.75C18.6977 13.75 18.25 13.3023 18.25 12.75V9.25C18.25 7.80752 18.2479 6.82625 18.1491 6.09143C18.0542 5.38538 17.8868 5.05836 17.6642 4.83579C17.4416 4.61322 17.1146 4.44585 16.4086 4.35092C15.6738 4.25213 14.6925 4.25 13.25 4.25H8.25C6.80752 4.25 5.82625 4.25213 5.09143 4.35092C4.38538 4.44585 4.05836 4.61322 3.83579 4.83579C3.61322 5.05836 3.44585 5.38538 3.35092 6.09143C3.25213 6.82625 3.25 7.80752 3.25 9.25V12.75C3.25 13.3023 2.80229 13.75 2.25 13.75C1.69772 13.75 1.25 13.3023 1.25 12.75L1.25 9.17943V9.17939C1.24997 7.82529 1.24994 6.70869 1.36875 5.82494C1.4935 4.89711 1.76547 4.07768 2.42158 3.42158C3.07768 2.76547 3.89711 2.4935 4.82494 2.36875C5.70869 2.24994 6.82529 2.24997 8.17939 2.25H8.17943H13.3206H13.3206Z',
  d5: 'M7.91602 12.25C5.32412 12.25 3.25 14.3917 3.25 17C3.25 19.6083 5.32412 21.75 7.91602 21.75C9.70047 21.75 11.2406 20.7331 12.0259 19.2502L12.0259 19.2502C12.1217 19.0693 12.1696 18.9788 12.241 18.9358C12.3124 18.8929 12.4058 18.8929 12.5926 18.8929H14.9575C15.2403 18.8929 15.3817 18.8929 15.4696 18.9807C15.5575 19.0686 15.5575 19.21 15.5575 19.4929L15.5575 19.8934C15.5574 20.1309 15.5573 20.3765 15.5844 20.582C15.6154 20.8179 15.6938 21.1105 15.9354 21.3573C16.1792 21.6064 16.472 21.6894 16.7105 21.7221L18.794 21.728C19.0023 21.7019 19.2537 21.6368 19.4822 21.4455C19.7091 21.2555 19.8178 21.0208 19.8818 20.8234C19.918 20.7116 20.0795 19.9119 20.1857 19.3774C20.2318 19.1457 20.2549 19.0299 20.3367 18.9619C20.4186 18.894 20.5375 18.8926 20.7754 18.8899C21.064 18.8866 21.392 18.8796 21.4988 18.865C21.7373 18.8322 22.03 18.7492 22.2739 18.5002C22.4188 18.3522 22.5037 18.1791 22.5556 18.0457C22.6107 17.9043 22.6489 17.7543 22.6761 17.6107C22.7306 17.3234 22.7523 17.0009 22.7498 16.695C22.7474 16.3887 22.7205 16.0709 22.6652 15.7919C22.6376 15.6526 22.6001 15.508 22.5477 15.3727C22.4996 15.2484 22.4178 15.0754 22.2739 14.9284C22.03 14.6794 21.7373 14.5964 21.4988 14.5636C21.2944 14.5355 21.0509 14.5356 20.8196 14.5357L12.2461 14.5357C12.0842 14.5357 12.0033 14.5357 11.9381 14.5018C11.873 14.4678 11.8222 14.3952 11.7207 14.2499C10.8779 13.0439 9.49173 12.25 7.91602 12.25ZM7.99331 15.5C7.16858 15.5 6.5 16.1716 6.5 17C6.5 17.8284 7.16858 18.5 7.99331 18.5H8.00669C8.83142 18.5 9.5 17.8284 9.5 17C9.5 16.1716 8.83142 15.5 8.00669 15.5H7.99331Z',
  d6: 'M8.00685 16.9868H7.99789',
  d7: 'M18.9617 12.9916V3.00244H1.99789V12.9916',
  d8: 'M3.97153 16.9947C3.97153 19.2054 5.7285 20.9977 7.89576 20.9977C9.70539 20.9977 11.2049 19.8214 11.6584 18.122H16.2975V20.8777C16.2975 20.9329 16.3422 20.9776 16.3973 20.9776H18.9016C18.9439 20.9776 18.9817 20.9508 18.9957 20.9108L19.9777 18.1146H21.9023C21.958 18.1146 22.0029 18.069 22.0021 18.0133L21.9638 15.3474C21.963 15.2926 21.9182 15.2487 21.8634 15.249L11.4552 15.3071C10.8311 13.9396 9.47193 12.9917 7.89576 12.9917C5.7285 12.9917 3.97153 14.7839 3.97153 16.9947Z',
  d9: 'M7.91602 12.25C5.32412 12.25 3.25 14.3917 3.25 17C3.25 19.6083 5.32412 21.75 7.91602 21.75C9.84046 21.75 11.4807 20.5673 12.1966 18.8929H16.5V21C16.5 21.4142 16.8358 21.75 17.25 21.75H19C19.3161 21.75 19.5982 21.5519 19.7055 21.2546L20.5577 18.8929H22C22.4142 18.8929 22.75 18.5571 22.75 18.1429V15.2857C22.75 14.8715 22.4142 14.5357 22 14.5357H11.9056C11.0903 13.1709 9.6131 12.25 7.91602 12.25ZM7.99331 15.5C7.16858 15.5 6.5 16.1716 6.5 17C6.5 17.8284 7.16858 18.5 7.99331 18.5H8.00669C8.83142 18.5 9.5 17.8284 9.5 17C9.5 16.1716 8.83142 15.5 8.00669 15.5H7.99331Z',
  d10: 'M2.22368 2.25L18.7763 2.25C19.0346 2.25 19.2822 2.35296 19.4648 2.53624C19.6474 2.71951 19.75 2.96808 19.75 3.22727V13H17.8026V4.20455L3.19737 4.20455V13H1.25V3.22727C1.25 2.68754 1.68593 2.25 2.22368 2.25Z',
} as const;

export const IconAuthorizedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-stroke-rounded IconAuthorizedStrokeRounded"
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

export const IconAuthorizedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-duotone-rounded IconAuthorizedDuotoneRounded"
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

export const IconAuthorizedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-twotone-rounded IconAuthorizedTwotoneRounded"
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

export const IconAuthorizedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-solid-rounded IconAuthorizedSolidRounded"
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

export const IconAuthorizedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-bulk-rounded IconAuthorizedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAuthorizedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-stroke-sharp IconAuthorizedStrokeSharp"
    >
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

export const IconAuthorizedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="authorized-solid-sharp IconAuthorizedSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAuthorized: TheIconSelfPack = {
  name: 'Authorized',
  StrokeRounded: IconAuthorizedStrokeRounded,
  DuotoneRounded: IconAuthorizedDuotoneRounded,
  TwotoneRounded: IconAuthorizedTwotoneRounded,
  SolidRounded: IconAuthorizedSolidRounded,
  BulkRounded: IconAuthorizedBulkRounded,
  StrokeSharp: IconAuthorizedStrokeSharp,
  SolidSharp: IconAuthorizedSolidSharp,
};