import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.7774 13.6499L13.5693 15.2468C13.6773 15.4691 13.9653 15.6823 14.2083 15.7231L15.6436 15.9636C16.5615 16.1178 16.7775 16.7893 16.1161 17.4516L15.0002 18.5767C14.8112 18.7673 14.7077 19.1347 14.7662 19.3979L15.0857 20.7906C15.3377 21.893 14.7572 22.3195 13.7898 21.7433L12.4445 20.9403C12.2015 20.7952 11.801 20.7952 11.5536 20.9403L10.2082 21.7433C9.24533 22.3195 8.66039 21.8885 8.91236 20.7906L9.23183 19.3979C9.29032 19.1347 9.18683 18.7673 8.99785 18.5767L7.88198 17.4516C7.22505 16.7893 7.43653 16.1178 8.35443 15.9636L9.78977 15.7231C10.0282 15.6823 10.3162 15.4691 10.4242 15.2468L11.2161 13.6499C11.6481 12.7834 12.35 12.7834 12.7774 13.6499Z',
  d2: 'M17.2588 2.01167H6.74116C5.93143 2.01167 4.85952 1.85424 4.30576 2.69602C4 3.1608 4 3.83334 4 5.17844C4 6.32524 4 6.89864 4.20617 7.38174C4.55829 8.20684 5.34557 8.56526 6.02037 8.95504L9.31672 10.8591C10.6334 11.6197 11.2918 12 12 12C12.7082 12 13.3666 11.6197 14.6833 10.8591L17.9796 8.95504C18.6544 8.56526 19.4417 8.20684 19.7938 7.38174C20 6.89864 20 6.32524 20 5.17844C20 3.83334 20 3.1608 19.6942 2.69602C19.1405 1.85424 18.0686 2.01167 17.2588 2.01167Z',
  d3: 'M12 2V7',
  d4: 'M17.2588 2.0105H6.74116C5.93143 2.0105 4.85952 1.86882 4.30576 2.62642C4 3.04472 4 3.65001 4 4.8606C4 5.89272 4 6.40877 4.20617 6.84356C4.55829 7.58616 5.34557 7.90873 6.02037 8.25954L9.31672 9.97321C10.6334 10.6577 11.2918 11 12 11C12.7082 11 13.3666 10.6577 14.6833 9.97321L17.9796 8.25954C18.6544 7.90873 19.4417 7.58616 19.7938 6.84356C20 6.40877 20 5.89272 20 4.8606C20 3.65001 20 3.04472 19.6942 2.62642C19.1405 1.86882 18.0686 2.0105 17.2588 2.0105Z',
  d5: 'M12 2V6',
  d6: 'M11.9999 12.25C12.7032 12.25 13.1846 12.7774 13.4511 13.3172L14.2398 14.9077C14.2679 14.9414 14.3057 14.9663 14.3449 14.9853L15.7694 15.224C16.3606 15.3233 16.9798 15.6358 17.1881 16.2893C17.3961 16.9417 17.0726 17.5562 16.6482 17.9816L15.5411 19.0979C15.5179 19.1361 15.5003 19.1972 15.5014 19.2419L15.8183 20.6235C15.9583 21.2362 15.9613 22.0446 15.3407 22.5008C14.717 22.9592 13.9459 22.7083 13.4069 22.3873L12.0705 21.5897C12.0301 21.5782 11.9683 21.578 11.9282 21.591L10.5944 22.3872C10.054 22.7104 9.28466 22.9571 8.66174 22.4989C8.04248 22.0433 8.04185 21.2373 8.18284 20.6229L8.4996 19.2419C8.50069 19.1972 8.48306 19.1361 8.45994 19.0979L7.35094 17.9798C6.92919 17.5545 6.60786 16.9419 6.81412 16.2906C7.02127 15.6365 7.64002 15.3234 8.23199 15.2239L9.65236 14.986C9.69241 14.9684 9.72712 14.9397 9.7566 14.9078L10.5464 13.3153C10.815 12.7763 11.2976 12.25 11.9999 12.25Z',
  d7: 'M18.6722 1.29097C19.215 1.36437 19.8537 1.5746 20.2989 2.18368C20.5619 2.54356 20.6616 2.94841 20.7066 3.36595C20.761 3.87106 20.7491 4.38275 20.7491 4.88998C20.7492 6.22813 20.6553 7.49876 19.4236 8.32189C19.0531 8.56951 18.6182 8.77228 18.3247 8.92484L14.9984 10.6541C14.3655 10.9831 13.8463 11.2531 13.3969 11.4372C12.9267 11.6298 12.4846 11.7499 11.9991 11.7499C11.5137 11.7499 11.0716 11.6298 10.6014 11.4372C10.152 11.2531 9.63278 10.9831 8.99987 10.6541L5.67356 8.92484C3.79663 7.94907 3.2491 6.96428 3.24914 4.89004C3.24914 4.38279 3.23728 3.87108 3.29167 3.36595C3.33664 2.94841 3.43636 2.54356 3.69941 2.18368C4.14462 1.5746 4.78327 1.36437 5.32612 1.29097C5.71309 1.23865 6.14724 1.24855 6.47492 1.25602C7.78195 1.28583 9.09181 1.26035 10.3991 1.26035C10.682 1.26035 10.8234 1.26035 10.9113 1.34822C10.9991 1.43609 10.9991 1.57751 10.9991 1.86035V5C10.9991 5.55228 11.4469 6 11.9991 6C12.5514 6 12.9991 5.55228 12.9991 5V1.86035C12.9991 1.57751 12.9991 1.43609 13.087 1.34822C13.1749 1.26035 13.3163 1.26035 13.5991 1.26035C14.9065 1.26035 16.2163 1.28583 17.5234 1.25602C17.851 1.24855 18.2852 1.23865 18.6722 1.29097Z',
  d8: 'M12 2.00244V6.01173',
  d9: 'M4 2.01247C4 2.00693 4.00448 2.00244 4.01 2.00244C4.01 2.00244 4.01 2.00244 4.01 2.00244C4.01 2.00244 19.9845 2.00244 19.99 2.00244C19.9955 2.00244 20 2.00693 20 2.01247C20 2.018 20 7.01503 20 7.01503L12 10.5238L4 7.01503V2.01247Z',
  d10: 'M11.8947 13.6413C11.9344 13.5838 12.0192 13.5837 12.059 13.6411L13.6742 15.9678L16.3793 16.71C16.4487 16.729 16.4759 16.8131 16.4309 16.8693L14.6365 19.113L14.8055 21.891C14.8099 21.9631 14.739 22.0161 14.6713 21.9912L11.9767 21.0006L9.30296 21.9912C9.23559 22.0162 9.16472 21.964 9.16841 21.8921L9.31314 19.0716L7.55229 16.8691C7.50737 16.8129 7.53448 16.729 7.60375 16.7098L10.2885 15.9678L11.8947 13.6413Z',
  d11: 'M12 12.75C12.2465 12.75 12.4773 12.8711 12.6173 13.074L14.1348 15.2729L16.7107 16.0269C16.9488 16.0966 17.137 16.2795 17.2135 16.5155C17.29 16.7515 17.2448 17.01 17.0929 17.2061L15.4571 19.3172L15.5309 21.9792C15.5377 22.2262 15.4225 22.4608 15.2227 22.6062C15.023 22.7517 14.7644 22.7895 14.5314 22.7072L12 21.8133L9.46859 22.7072C9.23559 22.7895 8.97702 22.7517 8.77729 22.6062C8.57756 22.4608 8.4623 22.2262 8.46914 21.9792L8.54287 19.3172L6.90714 17.2061C6.75521 17.01 6.71006 16.7515 6.78654 16.5155C6.86302 16.2795 7.05123 16.0966 7.2893 16.0269L9.86521 15.2729L11.3827 13.074C11.5228 12.8711 11.7535 12.75 12 12.75Z',
  d12: 'M11 1.25V6H13V1.25H20C20.4142 1.25 20.75 1.58349 20.75 1.99487V7.44293L12 11.25L3.25057 7.44294L3.25 1.99495C3.24998 1.79738 3.32899 1.6079 3.46964 1.4682C3.6103 1.32849 3.80107 1.25 4 1.25H11Z',
} as const;

export const IconMedal04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-stroke-rounded IconMedal04StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-duotone-rounded IconMedal04DuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-twotone-rounded IconMedal04TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-solid-rounded IconMedal04SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-bulk-rounded IconMedal04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-stroke-sharp IconMedal04StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-04-solid-sharp IconMedal04SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedal04: TheIconSelfPack = {
  name: 'Medal04',
  StrokeRounded: IconMedal04StrokeRounded,
  DuotoneRounded: IconMedal04DuotoneRounded,
  TwotoneRounded: IconMedal04TwotoneRounded,
  SolidRounded: IconMedal04SolidRounded,
  BulkRounded: IconMedal04BulkRounded,
  StrokeSharp: IconMedal04StrokeSharp,
  SolidSharp: IconMedal04SolidSharp,
};