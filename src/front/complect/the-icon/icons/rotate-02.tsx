import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 2V5.13219C20 5.42605 19.6328 5.55908 19.4447 5.33333C17.6146 3.2875 14.955 2 11.9949 2C6.47485 2 2 6.47715 2 12C2 15.9582 4.29852 19.3793 7.63298 21',
  d2: 'M12.265 22C11.7982 22 11.3387 21.9687 10.8887 21.9083M21.7344 8.66663C21.8468 9.06381 21.935 9.46524 21.9998 9.86888M21.9652 13.538C21.8949 13.938 21.8033 14.3341 21.6913 14.7244M20.1669 17.9962C19.9285 18.3496 19.6702 18.6898 19.3927 19.0146M16.5712 21.3606C16.2175 21.5631 15.8494 21.7463 15.4675 21.9083',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 8.4 20.3025 6.05556 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d4: 'M12.265 21.9993C11.7982 21.9993 11.3387 21.9681 10.8887 21.9076M21.7344 8.66602C21.8468 9.0632 21.935 9.46463 21.9998 9.86827M21.9652 13.5374C21.8949 13.9374 21.8033 14.3335 21.6913 14.7238M20.1669 17.9956C19.9285 18.349 19.6702 18.6892 19.3927 19.014M16.5712 21.36C16.2175 21.5625 15.8494 21.7456 15.4675 21.9076',
  d5: 'M12.265 22.0003C11.7982 22.0003 11.3387 21.9691 10.8887 21.9086M21.7344 8.66699C21.8468 9.06418 21.935 9.4656 21.9998 9.86925M21.9652 13.5383C21.8949 13.9384 21.8033 14.3345 21.6913 14.7247M20.1669 17.9966C19.9285 18.35 19.6702 18.6902 19.3927 19.0149M16.5712 21.361C16.2175 21.5634 15.8494 21.7466 15.4675 21.9086',
  d6: 'M11.9949 3C7.02762 3 3 7.02895 3 12C3 15.5612 5.06701 18.6409 8.07013 20.1006C8.56685 20.342 8.7738 20.9404 8.53237 21.4371C8.29094 21.9339 7.69255 22.1408 7.19583 21.8994C3.53004 20.1176 1 16.3552 1 12C1 5.92535 5.92208 1 11.9949 1C14.1731 1 16.2037 1.63426 17.9117 2.72723L19.127 1.51197C19.3403 1.2797 19.6249 1 20 1C20.5523 1 21 1.44772 21 2V5.13219C21 6.35267 19.4829 6.91172 18.6912 5.99084C17.0429 4.15339 14.6541 3 11.9949 3Z',
  d7: 'M21.4622 7.70601C21.9937 7.55563 22.5464 7.86452 22.6967 8.39593C22.8199 8.83111 22.9164 9.27057 22.9873 9.71205C23.0748 10.2574 22.7036 10.7704 22.1583 10.8579C21.613 10.9454 21.1 10.5742 21.0125 10.0289C20.9538 9.6631 20.874 9.29971 20.7723 8.94052C20.6219 8.4091 20.9308 7.85639 21.4622 7.70601ZM22.1384 12.5547C22.6824 12.6503 23.0458 13.1687 22.9502 13.7127C22.8738 14.1476 22.7743 14.5781 22.6525 15.002C22.5001 15.5328 21.9461 15.8396 21.4153 15.6871C20.8845 15.5346 20.5778 14.9807 20.7302 14.4499C20.8326 14.0934 20.9163 13.7316 20.9804 13.3665C21.076 12.8225 21.5945 12.4591 22.1384 12.5547ZM20.7261 17.1687C21.184 17.4775 21.3049 18.099 20.9961 18.5569C20.7368 18.9414 20.4555 19.3119 20.153 19.6658C19.7942 20.0857 19.163 20.1352 18.7431 19.7764C18.3233 19.4176 18.2738 18.7864 18.6326 18.3665C18.8851 18.071 19.1205 17.761 19.3379 17.4387C19.6467 16.9808 20.2682 16.8599 20.7261 17.1687ZM17.4392 20.8655C17.7136 21.3448 17.5474 21.9558 17.0681 22.2301C16.6804 22.452 16.2768 22.6528 15.8582 22.8304C15.3498 23.0461 14.7627 22.8088 14.547 22.3004C14.3313 21.792 14.5686 21.205 15.0771 20.9893C15.4221 20.8429 15.7548 20.6773 16.0746 20.4943C16.5539 20.22 17.1649 20.3862 17.4392 20.8655ZM9.89769 21.7767C9.97124 21.2293 10.4746 20.8452 11.0219 20.9188C11.4279 20.9733 11.8429 21.0016 12.2652 21.0016C12.8174 21.0016 13.2652 21.4493 13.2652 22.0016C13.2652 22.5538 12.8174 23.0016 12.2652 23.0016C11.7536 23.0016 11.2497 22.9673 10.7556 22.901C10.2083 22.8274 9.82415 22.3241 9.89769 21.7767Z',
  d8: 'M20.0007 2V6C18.1763 3.57111 15.2716 2 12 2C6.47715 2 2 6.47715 2 12C2 15.9582 4.2997 19.3793 7.63587 21',
  d9: 'M11.9875 3.20455C7.13553 3.20455 3.20226 7.1424 3.20226 12C3.20226 15.48 5.22082 18.4898 8.15403 19.9164L7.30095 21.6745C3.72107 19.9333 1.25 16.2565 1.25 12C1.25 6.06294 6.05732 1.25 11.9875 1.25C14.5839 1.25 16.965 2.17319 18.8211 3.70792V2.22727H20.7734V6.13636C20.7734 6.55688 20.5047 6.93025 20.1062 7.06337C19.7078 7.1965 19.269 7.05952 19.0167 6.72329C17.4123 4.58476 14.861 3.20455 11.9875 3.20455Z',
  d10: 'M22.0462 7.32153L22.312 8.26188C22.4322 8.68717 22.5265 9.11664 22.5956 9.54808L22.7503 10.513L20.8227 10.8227L20.668 9.85775C20.6107 9.50025 20.5328 9.14512 20.4335 8.79408L20.1677 7.85374L22.0462 7.32153ZM22.7284 12.4952L22.5595 13.4578C22.4849 13.8828 22.3877 14.3036 22.2689 14.7178L21.9994 15.6571L20.123 15.1176L20.3925 14.1783C20.4924 13.8298 20.574 13.4763 20.6367 13.1195L20.8056 12.1569L22.7284 12.4952ZM21.1977 17.3817L20.6519 18.1919C20.3989 18.5677 20.1243 18.9297 19.829 19.2756L19.1949 20.0186L17.7107 18.7488L18.3449 18.0059C18.5914 17.717 18.8212 17.4141 19.0333 17.0991L19.5791 16.2889L21.1977 17.3817ZM17.6649 21.2962L16.8177 21.7816C16.4393 21.9985 16.0453 22.1947 15.6367 22.3683L14.7381 22.75L13.9756 20.9507L14.8742 20.569C15.211 20.4259 15.5358 20.2642 15.8479 20.0853L16.6951 19.5999L17.6649 21.2962ZM9.94844 20.37L10.9159 20.5001C11.3122 20.5534 11.7173 20.581 12.1294 20.581H13.1056V22.5356H12.1294C11.6301 22.5356 11.1382 22.5021 10.6559 22.4372L9.68848 22.3071L9.94844 20.37Z',
} as const;

export const IconRotate02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-stroke-rounded IconRotate02StrokeRounded"
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

export const IconRotate02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-duotone-rounded IconRotate02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotate02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-twotone-rounded IconRotate02TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotate02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-solid-rounded IconRotate02SolidRounded"
    >
      <path 
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

export const IconRotate02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-bulk-rounded IconRotate02BulkRounded"
    >
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

export const IconRotate02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-stroke-sharp IconRotate02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotate02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-02-solid-sharp IconRotate02SolidSharp"
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

export const iconPackOfRotate02: TheIconSelfPack = {
  name: 'Rotate02',
  StrokeRounded: IconRotate02StrokeRounded,
  DuotoneRounded: IconRotate02DuotoneRounded,
  TwotoneRounded: IconRotate02TwotoneRounded,
  SolidRounded: IconRotate02SolidRounded,
  BulkRounded: IconRotate02BulkRounded,
  StrokeSharp: IconRotate02StrokeSharp,
  SolidSharp: IconRotate02SolidSharp,
};