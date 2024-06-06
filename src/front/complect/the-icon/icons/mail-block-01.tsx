import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.9928 11.5C22.0047 10.6743 22.0019 10.8514 21.9842 10.0244C21.9189 6.95886 21.8862 5.42609 20.7551 4.29066C19.6239 3.15523 18.0497 3.11568 14.9012 3.03657C12.9607 2.98781 11.0393 2.98781 9.09882 3.03656C5.95033 3.11566 4.37608 3.15521 3.24495 4.29065C2.11382 5.42608 2.08114 6.95885 2.01576 10.0244C1.99474 11.0101 1.99475 11.9899 2.01577 12.9756C2.08114 16.0412 2.11383 17.5739 3.24496 18.7094C4.37608 19.8448 5.95033 19.8843 9.09883 19.9634C10.0691 19.9878 11.0345 20 12 20',
  d2: 'M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5',
  d3: 'M16.0505 15C15.4022 15.6353 15 16.5207 15 17.5C15 19.433 16.567 21 18.5 21C19.4793 21 20.3647 20.5978 21 19.9495M16.0505 15C16.6818 14.3814 17.5463 14 18.5 14C20.433 14 22 15.567 22 17.5C22 18.4537 21.6186 19.3182 21 19.9495M16.0505 15L21 19.9495',
  d4: 'M14.9012 19.9647C12.9607 20.0118 11.0393 20.0118 9.09883 19.9647C5.95033 19.8883 4.37608 19.8501 3.24496 18.7539C2.11383 17.6576 2.08114 16.1777 2.01577 13.2178C1.99475 12.2661 1.99474 11.3201 2.01576 10.3684C2.0608 8.32941 2.09032 6.99275 2.47411 6L12 10.8276L21.5259 6C21.9097 6.99275 21.9392 8.32941 21.9842 10.3684C22.0053 11.3201 22.0053 12.2661 21.9842 13.2178C21.9552 14.5322 21.9326 15.5547 21.8174 16.3814C21.3508 14.997 20.0418 14 18.5 14C17.5463 14 16.6818 14.3814 16.0505 15C15.4022 15.6353 15 16.5207 15 17.5C15 18.4471 15.3762 19.3063 15.9872 19.9364C15.6474 19.9466 15.286 19.9554 14.9012 19.9647Z',
  d5: 'M15.4548 10.162L19.6905 7.76197C20.0515 7.55742 20.2321 7.45514 20.3789 7.53609C20.5257 7.61703 20.5354 7.8198 20.5548 8.2253C20.5808 8.77187 20.595 9.40551 20.611 10.1547C20.6185 10.5071 20.6233 10.7025 20.6253 10.855C20.6329 11.4149 21.0714 11.875 21.6313 11.875C22.1746 11.875 22.6294 11.4409 22.6246 10.8976C22.6231 10.7309 22.6179 10.5288 22.609 10.1121L22.6074 10.0368C22.5762 8.57128 22.5503 7.36037 22.3797 6.37916C22.1979 5.3336 21.8391 4.45811 21.0896 3.70674C20.6663 3.28228 20.1999 2.9827 19.684 2.76889C19.6055 2.72604 19.5214 2.69373 19.4337 2.67311C19.1039 2.55684 18.7546 2.47116 18.3843 2.40676C17.3834 2.23265 16.1415 2.20152 14.6321 2.16368L14.5573 2.16181C12.6015 2.11273 11.1485 2.11274 9.1927 2.16181L9.11785 2.16369C7.60849 2.20152 6.36661 2.23265 5.36564 2.40675C4.30328 2.59154 3.41376 2.95141 2.66036 3.70674C1.9109 4.45811 1.55205 5.3336 1.37026 6.37916C1.19965 7.36038 1.17383 8.57123 1.14258 10.0367L1.14097 10.1121C1.11967 11.1101 1.11968 11.64 1.14099 12.6379L1.1426 12.7133C1.17384 14.1788 1.19966 15.3896 1.37027 16.3709C1.55207 17.4164 1.91092 18.2919 2.66037 19.0433C3.41378 19.7986 4.30329 20.1585 5.36566 20.3433C6.36662 20.5174 7.6085 20.5485 9.11786 20.5863L9.19272 20.5882C9.87429 20.6053 10.9807 20.6164 11.8771 20.6216C12.4282 20.6248 12.8748 20.1782 12.8748 19.627C12.8748 19.0758 12.4282 18.6288 11.877 18.6256C10.9949 18.6204 9.90897 18.6095 9.24291 18.5928C7.63997 18.5526 6.54674 18.5226 5.70855 18.3768C4.91527 18.2388 4.4531 18.0124 4.07622 17.6345C3.69538 17.2527 3.47276 16.7968 3.33932 16.0293C3.19761 15.2143 3.17236 14.1553 3.13905 12.5953C3.11834 11.6258 3.11833 11.1242 3.13903 10.1547C3.15503 9.40561 3.16916 8.77204 3.19523 8.22553C3.21457 7.82001 3.22424 7.61725 3.37108 7.5363C3.51792 7.45535 3.69843 7.55763 4.05945 7.76219L8.29485 10.162C9.59446 10.8984 10.6936 11.375 11.8748 11.375C13.056 11.375 14.1551 10.8984 15.4548 10.162Z',
  d6: 'M17.4977 15.033L20.717 18.2523C20.8192 17.9794 20.875 17.6839 20.875 17.375C20.875 15.9943 19.7557 14.875 18.375 14.875C18.0661 14.875 17.7706 14.9308 17.4977 15.033ZM19.3248 19.6885L16.0615 16.4252C15.9412 16.7179 15.875 17.0385 15.875 17.375C15.875 18.7557 16.9943 19.875 18.375 19.875C18.7115 19.875 19.0321 19.8088 19.3248 19.6885ZM15.2256 14.1608C16.0362 13.3664 17.1492 12.875 18.375 12.875C20.8603 12.875 22.875 14.8897 22.875 17.375C22.875 18.6008 22.3836 19.7138 21.5892 20.5244C20.7736 21.3567 19.6339 21.875 18.375 21.875C15.8897 21.875 13.875 19.8603 13.875 17.375C13.875 16.1161 14.3933 14.9764 15.2256 14.1608Z',
  d7: 'M22 11.5V3H2V20H12',
  d8: 'M2 6.5L12 11.5L22 6.5',
  d9: 'M1.25 3.22368C1.25 2.68593 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68593 22.75 3.22368V12H20.796V8.10217L12.0003 12.5L3.20508 8.1024V18.8026H11V20.75H2.22727C1.68754 20.75 1.25 20.3141 1.25 19.7763V3.22368Z',
  d10: 'M16.6714 15.2881L19.7119 18.3286C19.8084 18.0709 19.8611 17.7918 19.8611 17.5C19.8611 16.196 18.804 15.1389 17.5 15.1389C17.2082 15.1389 16.9291 15.1916 16.6714 15.2881ZM18.3971 19.685L15.315 16.6029C15.2014 16.8794 15.1389 17.1822 15.1389 17.5C15.1389 18.804 16.196 19.8611 17.5 19.8611C17.8178 19.8611 18.1206 19.7986 18.3971 19.685ZM14.5256 14.4643C15.2911 13.7141 16.3423 13.25 17.5 13.25C19.8472 13.25 21.75 15.1528 21.75 17.5C21.75 18.6577 21.2859 19.7088 20.5357 20.4744C19.7654 21.2605 18.689 21.75 17.5 21.75C15.1528 21.75 13.25 19.8472 13.25 17.5C13.25 16.311 13.7395 15.2346 14.5256 14.4643Z',
};

export const IconMailBlock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-stroke-rounded IconMailBlock01StrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-duotone-rounded IconMailBlock01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-twotone-rounded IconMailBlock01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-solid-rounded IconMailBlock01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailBlock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-bulk-rounded IconMailBlock01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailBlock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-stroke-sharp IconMailBlock01StrokeSharp"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-01-solid-sharp IconMailBlock01SolidSharp"
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

export const iconPackOfMailBlock01: TheIconSelfPack = {
  name: 'MailBlock01',
  StrokeRounded: IconMailBlock01StrokeRounded,
  DuotoneRounded: IconMailBlock01DuotoneRounded,
  TwotoneRounded: IconMailBlock01TwotoneRounded,
  SolidRounded: IconMailBlock01SolidRounded,
  BulkRounded: IconMailBlock01BulkRounded,
  StrokeSharp: IconMailBlock01StrokeSharp,
  SolidSharp: IconMailBlock01SolidSharp,
};