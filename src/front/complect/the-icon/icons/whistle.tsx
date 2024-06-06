import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.10335 11.5252C4.55184 9.4378 7.06778 8.86485 8.53726 9.00054H11.0605C11.5883 9.09126 11.7336 9.30978 12.3875 10.3428C12.5064 10.6673 14.4417 10.4487 14.9503 10.5017C15.5087 9.96055 14.9503 8.85082 16.1907 9.00826C18.3191 9.00826 20.3586 8.91699 21.2922 9.0542C21.6777 9.11085 21.863 9.45879 21.9186 9.84439C22.1418 11.3942 21.876 12.5285 21.6189 12.7882C20.9321 14.004 18.9499 15.1828 17.9673 14.9959C15.1327 14.9959 14.5197 14.9221 14.2739 15.3924L13.4097 17.6267C12.8326 18.8562 10.8094 21.283 7.41581 20.9705C4.02221 20.6581 2.54663 17.9449 2.24363 16.6574C1.94063 15.8329 1.6539 13.6141 3.10335 11.5252Z',
  d2: 'M13.4895 5.00318V3.00195M10.9943 6.00379L9.99622 5.00318M15.9846 6.00379L16.9827 5.00318',
  d3: 'M8.08411 17C9.18868 17 10.0841 16.1046 10.0841 15C10.0841 13.8954 9.18868 13 8.08411 13C6.97954 13 6.08411 13.8954 6.08411 15C6.08411 16.1046 6.97954 17 8.08411 17Z',
  d4: 'M13.6723 16.9638C12.8589 19.3131 10.6269 21 8.00098 21C4.68727 21 2.00098 18.3137 2.00098 15C2.00098 11.6863 4.68727 9 8.00098 9H10.9658C11.3002 9 11.6124 9.1671 11.7979 9.4453L12.3526 10.2774C12.4453 10.4164 12.6014 10.5 12.7686 10.5H14.9289C15.0957 10.5 15.2427 9.90409 15.3259 9.56731C15.3481 9.47738 15.3657 9.40593 15.3779 9.36924C15.4514 9.14873 15.6578 9 15.8902 9H20.4658C20.9648 9 21.2143 9 21.4091 9.08705C22.0015 9.35185 22.0013 9.94082 22.001 10.501C22.001 10.5124 22.001 10.5238 22.001 10.5352C22.001 11.3725 22.001 11.7912 21.8979 12.1743C21.6041 13.2655 20.7692 13.8217 19.8827 14.4122C19.8627 14.4255 19.8427 14.4389 19.8226 14.4523C19.2304 14.847 18.7385 15 18.0136 15H16.001C15.1634 15 14.7445 15 14.4842 15.1854C14.2238 15.3708 14.0399 15.9019 13.6723 16.9638ZM8.00098 17C9.10555 17 10.001 16.1046 10.001 15C10.001 13.8954 9.10555 13 8.00098 13C6.89641 13 6.00098 13.8954 6.00098 15C6.00098 16.1046 6.89641 17 8.00098 17Z',
  d5: 'M3.10457 11.5252C4.55306 9.4378 7.069 8.86485 8.53848 9.00054H11.0617C11.5895 9.09126 11.7348 9.30978 12.3887 10.3428C12.5076 10.6673 14.4429 10.4487 14.9515 10.5017C15.5099 9.96055 14.9515 8.85082 16.1919 9.00826C18.3203 9.00826 20.3598 8.91699 21.2934 9.0542C21.6789 9.11085 21.8642 9.45879 21.9198 9.84439C22.143 11.3942 21.8772 12.5285 21.6201 12.7882C20.9333 14.004 18.9511 15.1828 17.9685 14.9959C15.1339 14.9959 14.5209 14.9221 14.2751 15.3924L13.4109 17.6267C12.8338 18.8562 10.8106 21.283 7.41703 20.9705C4.02343 20.6581 2.54785 17.9449 2.24485 16.6574C1.94185 15.8329 1.65512 13.6141 3.10457 11.5252Z',
  d6: 'M8.00098 17C9.10555 17 10.001 16.1046 10.001 15C10.001 13.8954 9.10555 13 8.00098 13C6.89641 13 6.00098 13.8954 6.00098 15C6.00098 16.1046 6.89641 17 8.00098 17Z',
  d7: 'M13.501 5V3M11.001 6L10.001 5M16.001 6L17.001 5',
  d8: 'M7.99963 16.9922C9.1042 16.9922 9.99963 16.0973 9.99963 14.9934C9.99963 13.8895 9.1042 12.9946 7.99963 12.9946C6.89506 12.9946 5.99963 13.8895 5.99963 14.9934C5.99963 16.0973 6.89506 16.9922 7.99963 16.9922Z',
  d9: 'M13.4996 4.99949V3.00073M10.9996 5.99887L9.99963 4.99949M15.9996 5.99887L16.9996 4.99949',
  d10: 'M3.10335 11.5324C4.55184 9.4463 7.06778 8.87371 8.53726 9.00931H11.0605C11.5883 9.09998 11.7336 9.31837 12.3875 10.3507C12.5064 10.675 14.4417 10.4566 14.9503 10.5096C15.5087 9.96873 14.9503 8.85969 16.1907 9.01703C18.3188 9.01703 20.3581 8.92585 21.2918 9.06289C21.6775 9.11949 21.8631 9.46749 21.9187 9.8533C22.1418 11.4018 21.876 12.5352 21.6189 12.7946C20.9321 14.0097 18.9499 15.1877 17.9673 15.001C15.1327 15.001 14.5197 14.9272 14.2739 15.3972L13.4097 17.6301C12.8326 18.8589 10.8094 21.2841 7.41581 20.9719C4.02221 20.6596 2.54663 17.9481 2.24363 16.6615C1.94063 15.8375 1.6539 13.62 3.10335 11.5324Z',
  d11: 'M21.7139 8.52733C21.5038 8.43341 21.295 8.40175 21.1049 8.38787C20.9282 8.37497 20.7174 8.37499 20.488 8.375H15.889C15.3337 8.375 14.8408 8.73031 14.6652 9.25707C14.6538 9.2913 14.5851 9.55357 14.5404 9.72525C14.5174 9.81348 14.4378 9.875 14.3467 9.875H13.0082C12.9413 9.875 12.8789 9.84158 12.8418 9.78594L12.4207 9.15428C12.0961 8.66743 11.5497 8.375 10.9646 8.375H7.99978C4.27186 8.375 1.24978 11.3971 1.24978 15.125C1.24978 18.8529 4.27186 21.875 7.99978 21.875C10.9551 21.875 13.4651 19.9762 14.3798 17.3342C14.5677 16.7915 14.6951 16.4249 14.8059 16.1678C14.8923 15.9524 15.0355 15.896 15.0964 15.8948C15.2942 15.8758 15.5658 15.875 15.9998 15.875H18.0123C18.887 15.875 19.6384 15.6008 20.3524 15.1249C21.197 14.5642 22.2521 13.8639 22.6208 12.4943C22.7502 12.0138 22.7501 11.3471 22.7499 10.6049C22.7505 10.3512 22.7514 9.97155 22.6524 9.62016C22.53 9.18597 22.2519 8.76781 21.7139 8.52733ZM7.99988 12.375C6.48109 12.375 5.24988 13.6062 5.24988 15.125C5.24988 16.6438 6.48109 17.875 7.99988 17.875C9.51866 17.875 10.7499 16.6438 10.7499 15.125C10.7499 13.6062 9.51866 12.375 7.99988 12.375Z',
  d12: 'M13.4999 2.125C14.0522 2.125 14.4999 2.57272 14.4999 3.125V5.125C14.4999 5.67728 14.0522 6.125 13.4999 6.125C12.9476 6.125 12.4999 5.67728 12.4999 5.125V3.125C12.4999 2.57272 12.9476 2.125 13.4999 2.125ZM8.29277 4.41789C8.6833 4.02737 9.31646 4.02737 9.70698 4.41789L10.707 5.41789C11.0975 5.80842 11.0975 6.44158 10.707 6.83211C10.3165 7.22263 9.6833 7.22263 9.29277 6.83211L8.29277 5.83211C7.90225 5.44158 7.90225 4.80842 8.29277 4.41789ZM17.2928 4.41789C17.6833 4.02737 18.3165 4.02737 18.707 4.41789C19.0975 4.80842 19.0975 5.44158 18.707 5.83211L17.707 6.83211C17.3165 7.22263 16.6833 7.22263 16.2928 6.83211C15.9022 6.44158 15.9022 5.80842 16.2928 5.41789L17.2928 4.41789Z',
  d13: 'M21.1049 8.38787C21.295 8.40175 21.5037 8.43341 21.7139 8.52733C22.2519 8.76782 22.53 9.18597 22.6524 9.62016C22.7514 9.97156 22.7505 10.3512 22.7498 10.6049C22.7501 11.3471 22.7502 12.0138 22.6208 12.4943C22.2521 13.8639 21.197 14.5642 20.3524 15.1249C19.6384 15.6008 18.887 15.875 18.0123 15.875H15.9998C15.5657 15.875 15.2941 15.8758 15.0964 15.8948C15.0355 15.896 14.8922 15.9524 14.8059 16.1678C14.6951 16.4249 14.5676 16.7915 14.3797 17.3342C13.465 19.9762 10.9551 21.875 7.99976 21.875C4.27183 21.875 1.24976 18.8529 1.24976 15.125C1.24976 11.3971 4.27183 8.375 7.99976 8.375H10.9646C11.5497 8.375 12.0961 8.66743 12.4207 9.15428L12.8418 9.78594C12.8789 9.84158 12.9413 9.875 13.0082 9.875H14.3466C14.4378 9.875 14.5174 9.81348 14.5404 9.72525C14.5851 9.55357 14.6538 9.2913 14.6652 9.25707C14.8408 8.73031 15.3337 8.375 15.889 8.375L20.4879 8.375C20.7174 8.37499 20.9281 8.37497 21.1049 8.38787Z',
  d14: 'M5.24988 15.125C5.24988 13.6062 6.48109 12.375 7.99988 12.375C9.51866 12.375 10.7499 13.6062 10.7499 15.125C10.7499 16.6438 9.51866 17.875 7.99988 17.875C6.48109 17.875 5.24988 16.6438 5.24988 15.125Z',
  d15: 'M8 21C11.3137 21 14 18.3137 14 15H19L22 12V9H15.5L14.5 10.5H12.5L11.5 9H8C4.68629 9 2 11.6863 2 15C2 18.3137 4.68629 21 8 21Z',
  d16: 'M13.5 5V3M11 6L9.5 4.5M16 6L17.5 4.5',
  d17: 'M8 7.75C4.27208 7.75 1.25 10.7721 1.25 14.5C1.25 18.2279 4.27208 21.25 8 21.25C11.4744 21.25 14.3357 18.625 14.7088 15.25H19C19.1989 15.25 19.3897 15.171 19.5303 15.0303L22.5303 12.0303C22.671 11.8897 22.75 11.6989 22.75 11.5V8.5C22.75 8.08579 22.4142 7.75 22 7.75H15.5C15.2492 7.75 15.0151 7.87533 14.876 8.08397L14.0986 9.25H12.9014L12.124 8.08397C11.9849 7.87533 11.7508 7.75 11.5 7.75H8ZM8 11.75C6.48122 11.75 5.25 12.9812 5.25 14.5C5.25 16.0188 6.48122 17.25 8 17.25C9.51878 17.25 10.75 16.0188 10.75 14.5C10.75 12.9812 9.51878 11.75 8 11.75Z',
  d18: 'M14.2491 2.75V4.75H12.7491V2.75H14.2491ZM10.0294 3.71967L11.5294 5.21967L10.4688 6.28033L8.96875 4.78033L10.0294 3.71967ZM18.0294 4.78033L16.5294 6.28033L15.4688 5.21967L16.9688 3.71967L18.0294 4.78033Z',
};

export const IconWhistleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-stroke-rounded IconWhistleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWhistleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-duotone-rounded IconWhistleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWhistleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-twotone-rounded IconWhistleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWhistleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-solid-rounded IconWhistleSolidRounded"
    >
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

export const IconWhistleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-bulk-rounded IconWhistleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
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

export const IconWhistleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-stroke-sharp IconWhistleStrokeSharp"
    >
      <circle 
        cx="8" 
        cy="15" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWhistleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="whistle-solid-sharp IconWhistleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWhistle: TheIconSelfPack = {
  name: 'Whistle',
  StrokeRounded: IconWhistleStrokeRounded,
  DuotoneRounded: IconWhistleDuotoneRounded,
  TwotoneRounded: IconWhistleTwotoneRounded,
  SolidRounded: IconWhistleSolidRounded,
  BulkRounded: IconWhistleBulkRounded,
  StrokeSharp: IconWhistleStrokeSharp,
  SolidSharp: IconWhistleSolidSharp,
};