import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z',
  d2: 'M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z',
  d3: 'M1.25 11.375C1.25 12.9628 2.49721 14.25 4.03571 14.25C6.08706 14.25 7.75 12.5338 7.75 10.4167V6.58333C7.75 4.46624 6.08706 2.75 4.03571 2.75C2.49721 2.75 1.25 4.03718 1.25 5.625V11.375ZM4.03571 12.3333C3.52288 12.3333 3.10714 11.9043 3.10714 11.375V5.625C3.10714 5.09573 3.52288 4.66667 4.03571 4.66667C5.06139 4.66667 5.89286 5.52479 5.89286 6.58333V10.4167C5.89286 11.4752 5.06139 12.3333 4.03571 12.3333Z',
  d4: 'M12.799 20.815C13.5298 21.4511 14.6525 21.3829 15.2964 20.6544C15.4097 20.5125 15.6704 20.1672 15.807 19.9207C16.4367 18.8803 16.6286 17.6412 16.3392 16.4638C16.3068 16.3322 16.2656 16.1992 16.2023 15.9946L15.9289 15.1118C15.8154 14.7453 15.7468 14.5208 15.7117 14.3527C15.6855 14.26 15.6985 14.0717 15.9601 14.0602C16.1402 14.0442 16.8457 14.0435 17.2394 14.0435C18.4766 14.0435 19.4811 14.0435 20.2488 13.9419C21.0337 13.838 21.7462 13.6087 22.2315 13.0005C22.3273 12.8804 22.4127 12.7524 22.4867 12.618C22.8663 11.9283 22.7859 11.1853 22.5573 10.4375C22.335 9.70996 21.9188 8.81395 21.409 7.71633C20.9359 6.6976 20.516 5.79345 20.1401 5.15929C19.7512 4.5033 19.3355 3.98759 18.7609 3.5954C18.0878 3.13597 17.1903 2.89563 16.4221 2.8217C15.6771 2.75 14.7621 2.75001 13.6144 2.75002C12.2303 2.75 10.5147 2.74998 9.64051 2.86387C8.73584 2.98172 7.97376 3.23334 7.3663 3.82191C6.75553 4.4137 6.49136 5.16154 6.36819 6.04919C6.25001 6.90085 6.25003 7.98266 6.25005 9.31985L6.25003 10.4925C6.24964 11.8105 6.24939 12.6719 6.55913 13.4706C6.86812 14.2674 7.45104 14.9125 8.34723 15.9043L12.5574 20.5663C12.6369 20.6546 12.7182 20.7447 12.799 20.815Z',
  d5: 'M2 13.5V3.50002L7 3.5V13.5H2Z',
  d6: 'M19 3.5H7.01C7.00448 3.5 7 3.50448 7 3.51V13.4959C7 13.4985 7.00105 13.5011 7.00293 13.5029L13.9929 20.4929C13.9968 20.4968 14.0032 20.4968 14.0071 20.4929L15.9958 18.5042C15.9984 18.5016 15.9993 18.4978 15.9983 18.4943L14.5 13.5H21.9866C21.9933 13.5 21.9981 13.4935 21.9961 13.4871L19 3.5Z',
  d7: 'M2.25195 14.25C1.69967 14.25 1.25195 13.8209 1.25195 13.2917V3.70833C1.25195 3.17906 1.69967 2.75 2.25195 2.75H7.25195C7.25371 2.75 7.25547 2.75 7.25723 2.75001L19.5572 2.75L22.7181 13.2348C22.7866 13.462 22.7435 13.7081 22.602 13.8986C22.4605 14.089 22.2373 14.2013 22 14.2013H15.5052L16.7189 18.2864C16.7973 18.5502 16.7249 18.8358 16.5303 19.0303L14.5303 21.0303C14.3894 21.1713 14.1981 21.2504 13.9987 21.25C13.7993 21.2497 13.6083 21.17 13.4678 21.0285L6.73619 14.25H2.25195ZM6.25 4.66667V12.3333H3.25195V4.66667H6.25Z',
} as const;

export const IconThumbsDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-stroke-rounded IconThumbsDownStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconThumbsDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-duotone-rounded IconThumbsDownDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconThumbsDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-twotone-rounded IconThumbsDownTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconThumbsDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-solid-rounded IconThumbsDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-bulk-rounded IconThumbsDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-stroke-sharp IconThumbsDownStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconThumbsDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-down-solid-sharp IconThumbsDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThumbsDown: TheIconSelfPack = {
  name: 'ThumbsDown',
  StrokeRounded: IconThumbsDownStrokeRounded,
  DuotoneRounded: IconThumbsDownDuotoneRounded,
  TwotoneRounded: IconThumbsDownTwotoneRounded,
  SolidRounded: IconThumbsDownSolidRounded,
  BulkRounded: IconThumbsDownBulkRounded,
  StrokeSharp: IconThumbsDownStrokeSharp,
  SolidSharp: IconThumbsDownSolidSharp,
};