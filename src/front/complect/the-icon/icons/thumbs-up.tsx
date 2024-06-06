import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z',
  d2: 'M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z',
  d3: 'M1.25 12.625C1.25 11.0372 2.49721 9.75 4.03571 9.75C6.08706 9.75 7.75 11.4662 7.75 13.5833V17.4167C7.75 19.5338 6.08706 21.25 4.03571 21.25C2.49721 21.25 1.25 19.9628 1.25 18.375V12.625ZM4.03571 11.6667C3.52288 11.6667 3.10714 12.0957 3.10714 12.625V18.375C3.10714 18.9043 3.52288 19.3333 4.03571 19.3333C5.06139 19.3333 5.89286 18.4752 5.89286 17.4167V13.5833C5.89286 12.5248 5.06139 11.6667 4.03571 11.6667Z',
  d4: 'M12.799 3.18496C13.5298 2.54895 14.6525 2.6171 15.2964 3.34564C15.4097 3.48748 15.6704 3.83278 15.807 4.07928C16.4367 5.11966 16.6286 6.35883 16.3392 7.53619C16.3068 7.66778 16.2656 7.80082 16.2023 8.00543L15.9289 8.88815C15.8154 9.25473 15.7468 9.47924 15.7117 9.64731C15.6855 9.74001 15.6985 9.92827 15.9601 9.93976C16.1402 9.95582 16.8457 9.95652 17.2394 9.95652C18.4766 9.9565 19.4811 9.95648 20.2488 10.0581C21.0337 10.162 21.7462 10.3913 22.2315 10.9995C22.3273 11.1196 22.4127 11.2476 22.4867 11.382C22.8663 12.0717 22.7859 12.8147 22.5573 13.5625C22.335 14.29 21.9188 15.186 21.409 16.2837C20.9359 17.3024 20.516 18.2065 20.1401 18.8407C19.7512 19.4967 19.3355 20.0124 18.7609 20.4046C18.0878 20.864 17.1903 21.1044 16.4221 21.1783C15.6771 21.25 14.7621 21.25 13.6144 21.25C12.2303 21.25 10.5147 21.25 9.64051 21.1361C8.73584 21.0183 7.97376 20.7667 7.3663 20.1781C6.75553 19.5863 6.49136 18.8385 6.36819 17.9508C6.25001 17.0991 6.25003 16.0173 6.25005 14.6801L6.25003 13.5075C6.24964 12.1895 6.24939 11.3281 6.55913 10.5294C6.86812 9.73263 7.45104 9.0875 8.34723 8.09569L12.5574 3.43368C12.6369 3.34542 12.7182 3.25526 12.799 3.18496Z',
  d5: 'M2.00195 10.498V20.498H7.00195V10.498H2.00195Z',
  d6: 'M7.00195 10.5024V20.4883C7.00195 20.4938 7.00643 20.4983 7.01195 20.4983H19.002L21.9981 10.5112C22 10.5048 21.9952 10.4983 21.9885 10.4983H14.502L16.0002 5.50402C16.0013 5.5005 16.0003 5.49668 15.9977 5.49408L14.009 3.50537C14.0051 3.50147 13.9988 3.50147 13.9949 3.50537L7.00488 10.4954C7.00301 10.4972 7.00195 10.4998 7.00195 10.5024Z',
  d7: 'M14.5303 2.96967C14.3894 2.8287 14.1981 2.74966 13.9987 2.75C13.7993 2.75035 13.6083 2.83005 13.4678 2.97151L6.7362 9.75H2.25C1.69772 9.75 1.25 10.1791 1.25 10.7083V20.2917C1.25 20.8209 1.69772 21.25 2.25 21.25H7H7.25L19.5572 21.25L22.7181 10.7652C22.7866 10.538 22.7435 10.2919 22.602 10.1014C22.4605 9.91099 22.2373 9.79872 22 9.79872H15.5052L16.7189 5.7136C16.7973 5.4498 16.7249 5.16426 16.5303 4.96967L14.5303 2.96967ZM6.25 19.3333V11.6667H3.25V19.3333H6.25Z',
};

export const IconThumbsUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-stroke-rounded IconThumbsUpStrokeRounded"
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

export const IconThumbsUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-duotone-rounded IconThumbsUpDuotoneRounded"
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

export const IconThumbsUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-twotone-rounded IconThumbsUpTwotoneRounded"
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

export const IconThumbsUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-solid-rounded IconThumbsUpSolidRounded"
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

export const IconThumbsUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-bulk-rounded IconThumbsUpBulkRounded"
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

export const IconThumbsUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-stroke-sharp IconThumbsUpStrokeSharp"
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

export const IconThumbsUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-solid-sharp IconThumbsUpSolidSharp"
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

export const iconPackOfThumbsUp: TheIconSelfPack = {
  name: 'ThumbsUp',
  StrokeRounded: IconThumbsUpStrokeRounded,
  DuotoneRounded: IconThumbsUpDuotoneRounded,
  TwotoneRounded: IconThumbsUpTwotoneRounded,
  SolidRounded: IconThumbsUpSolidRounded,
  BulkRounded: IconThumbsUpBulkRounded,
  StrokeSharp: IconThumbsUpStrokeSharp,
  SolidSharp: IconThumbsUpSolidSharp,
};