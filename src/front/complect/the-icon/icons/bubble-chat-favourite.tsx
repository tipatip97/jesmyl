import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 2C6.21 2.24942 2 6.43482 2 11.5606C2 14.1004 3.03333 16.4082 4.71889 18.1208C5.09 18.4979 5.33778 19.0131 5.23778 19.5433C5.07275 20.4103 4.69874 21.2189 4.15111 21.8929C5.59195 22.1611 7.09014 21.9196 8.37499 21.2359C8.82918 20.9943 9.05627 20.8734 9.21653 20.8489C9.37678 20.8244 9.60633 20.8676 10.0654 20.9538C10.7032 21.0737 11.3507 21.1337 12 21.1329C17.5222 21.1329 22 16.8468 22 11.5606C22 11.3702 21.9942 11.1812 21.9827 10.9935',
  d2: 'M15.015 2.38661C16.0876 1.74692 17.0238 2.00471 17.5863 2.41534C17.8169 2.58371 17.9322 2.66789 18 2.66789C18.0678 2.66789 18.1831 2.58371 18.4137 2.41534C18.9762 2.00471 19.9124 1.74692 20.985 2.38661C22.3928 3.22614 22.7113 5.99577 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.2887 5.99577 13.6072 3.22614 15.015 2.38661Z',
  d3: 'M11.9955 12H12.0045M15.991 12H16M8 12H8.00897',
  d4: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 9.95087 21.5811 8.42852 20.8416 7.09363C20.4806 7.51136 20.0257 7.92836 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.3359 6.02974 13.5987 3.30658 14.9543 2.42445C14.0205 2.14855 13.0284 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d5: 'M17.9996 1.78934C18.7725 1.23972 20.0195 0.938062 21.3688 1.74274C22.3751 2.34288 22.8968 3.56706 22.7128 4.90087C22.5274 6.24475 21.645 7.68711 19.9019 8.94146C19.348 9.34117 18.7809 9.75028 17.9996 9.75028C17.2183 9.75028 16.6513 9.34117 16.0974 8.94146C14.3543 7.68711 13.4719 6.24475 13.2865 4.90087C13.1025 3.56706 13.6241 2.34288 14.6305 1.74274C15.9798 0.938062 17.2268 1.23972 17.9996 1.78934Z',
  d6: 'M12 1.24989C6.09523 1.24989 1.25 5.83828 1.25 11.5666C1.25 14.3143 2.36972 16.8064 4.18451 18.6493C4.45227 18.9212 4.53937 19.1999 4.50088 19.4051C4.35863 20.1512 4.03697 20.8444 3.56917 21.4197C3.40224 21.6251 3.35586 21.9032 3.44713 22.1515C3.5384 22.3999 3.75381 22.5818 4.01396 22.6302C5.62504 22.9299 7.29542 22.6599 8.72714 21.8985C8.96068 21.7743 9.11322 21.6934 9.22775 21.639C9.25931 21.6218 9.34334 21.5906 9.42696 21.6035C9.53909 21.6188 9.68979 21.6469 9.92698 21.6915C10.6103 21.8198 11.3041 21.8841 12 21.8833C17.9048 21.8833 22.75 17.2949 22.75 11.5666C22.75 10.9674 22.697 10.3806 22.5953 9.81026C22.5165 9.36856 22.4771 9.14772 22.3122 9.08959C22.1473 9.03146 21.962 9.19284 21.5914 9.51562C21.3377 9.73661 21.0667 9.95109 20.7789 10.1582C20.2585 10.5358 19.2741 11.25 17.9999 11.25C16.9346 11.25 15.7027 10.5217 15.2199 10.1575C13.2391 8.73176 12.0564 6.9586 11.8008 5.10554C11.6505 4.01615 11.8408 2.9083 12.3645 1.9881C12.4978 1.75386 12.5645 1.63674 12.5683 1.56605C12.5751 1.43905 12.5166 1.33841 12.4029 1.28155C12.3395 1.24989 12.2263 1.24989 12 1.24989ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955Z',
  d7: 'M1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C12.2263 1.25 12.3395 1.25 12.4029 1.28166C12.5166 1.33852 12.5751 1.43916 12.5683 1.56615C12.5645 1.63685 12.4978 1.75398 12.3645 1.98822C11.8408 2.90842 11.6505 4.01626 11.8008 5.10565C12.0564 6.95871 13.2391 8.73187 15.2199 10.1576C15.7027 10.5218 16.9346 11.2501 17.9999 11.2501C19.2741 11.2501 20.2585 10.5359 20.7789 10.1583C21.0667 9.9512 21.3377 9.73672 21.5914 9.51573C21.962 9.19295 22.1473 9.03157 22.3122 9.0897C22.4771 9.14782 22.5165 9.36867 22.5953 9.81037C22.697 10.3807 22.75 10.9675 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667Z',
  d8: 'M7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12Z',
  d9: 'M20.4931 2.2896C18.8965 1.45704 17.75 2.68433 17.75 2.68433C17.75 2.68433 16.6035 1.45704 15.0068 2.2896C13.073 3.29799 12.9341 7.24689 17.75 9C22.566 7.24689 22.427 3.29799 20.4931 2.2896Z',
  d10: 'M11.7455 12H11.7545M15.741 12H15.75M7.75 12H7.75897',
  d11: 'M21.8899 10.0038C22.8094 16.1006 17.8346 21.0082 12.0016 21.0082C10.5768 21.0082 9.22165 20.7251 7.99494 20.2149L4.01757 21.9991C4.00986 22.0026 4.00161 21.9955 4.00382 21.9874L5.00518 18.2923C3.16179 16.5119 2 14.1818 2 11.5041C2 6.25513 6.47786 2 12.0016 2',
  d12: 'M17.5167 1.48121C17.7018 1.55798 17.8639 1.64579 18.0008 1.73167C18.1378 1.64579 18.2999 1.55798 18.485 1.48121C19.1377 1.21056 20.0606 1.08834 21.0907 1.62246C22.423 2.31323 23.0226 3.93004 22.6322 5.51934C22.2329 7.14433 20.8381 8.72298 18.2574 9.65714L18.0009 9.75L17.7443 9.65714C15.1636 8.72298 13.7688 7.14433 13.3695 5.51935C12.979 3.93005 13.5786 2.31323 14.9109 1.62246C15.9411 1.08833 16.864 1.21056 17.5167 1.48121Z',
  d13: 'M12 1.25C12.4234 1.25 12.8414 1.27345 13.2525 1.31909C12.1326 2.48075 11.7634 4.22105 12.1557 5.81759C12.6793 7.94867 14.4535 9.7953 17.3189 10.8325L18.0009 11.0794L18.6829 10.8325C20.2071 10.2808 21.4225 9.50004 22.3052 8.56928C22.5945 9.49649 22.75 10.4799 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045Z',
};

export const IconBubbleChatFavouriteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-stroke-rounded IconBubbleChatFavouriteStrokeRounded"
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

export const IconBubbleChatFavouriteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-duotone-rounded IconBubbleChatFavouriteDuotoneRounded"
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

export const IconBubbleChatFavouriteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-twotone-rounded IconBubbleChatFavouriteTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBubbleChatFavouriteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-solid-rounded IconBubbleChatFavouriteSolidRounded"
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

export const IconBubbleChatFavouriteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-bulk-rounded IconBubbleChatFavouriteBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatFavouriteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-stroke-sharp IconBubbleChatFavouriteStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatFavouriteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-favourite-solid-sharp IconBubbleChatFavouriteSolidSharp"
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

export const iconPackOfBubbleChatFavourite: TheIconSelfPack = {
  name: 'BubbleChatFavourite',
  StrokeRounded: IconBubbleChatFavouriteStrokeRounded,
  DuotoneRounded: IconBubbleChatFavouriteDuotoneRounded,
  TwotoneRounded: IconBubbleChatFavouriteTwotoneRounded,
  SolidRounded: IconBubbleChatFavouriteSolidRounded,
  BulkRounded: IconBubbleChatFavouriteBulkRounded,
  StrokeSharp: IconBubbleChatFavouriteStrokeSharp,
  SolidSharp: IconBubbleChatFavouriteSolidSharp,
};