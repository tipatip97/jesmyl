import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 18.2676C19.2447 18.6636 20 19.1837 20 19.7534C20 20.9941 16.4183 21.9998 12 21.9998C7.58172 21.9998 4 20.9941 4 19.7534C4 19.1837 4.75527 18.6636 6 18.2676',
  d2: 'M10.4375 11.6667L10.4375 6.33333M12 6.33333V5M12 13V11.6667M10.4375 9H13.5625M13.5625 9C14.0803 9 14.5 9.44772 14.5 10V10.6667C14.5 11.219 14.0803 11.6667 13.5625 11.6667H9.5M13.5625 9C14.0803 9 14.5 8.55228 14.5 8V7.33333C14.5 6.78105 14.0803 6.33333 13.5625 6.33333H9.5',
  d3: 'M13.3471 18.4619C12.9857 18.8071 12.5027 19 12 19C11.4973 19 11.0143 18.8071 10.6529 18.4619C7.34373 15.2821 2.90897 11.7299 5.07167 6.57272C6.24102 3.78428 9.04799 2 12 2C14.952 2 17.759 3.78428 18.9283 6.57272C21.0883 11.7234 16.6644 15.293 13.3471 18.4619Z',
  d4: 'M7.09314 18.156C7.25592 18.6362 6.97308 19.1493 6.46141 19.302C5.90507 19.4681 5.5293 19.6408 5.31325 19.7883C5.58748 19.9591 6.10633 20.186 6.76311 20.359C8.06315 20.7016 9.91501 20.9253 12 20.9253C14.085 20.9253 15.9368 20.7016 17.2369 20.359C17.8937 20.186 18.4125 19.9591 18.6867 19.7883C18.4707 19.6408 18.0949 19.4681 17.5386 19.302C17.0269 19.1493 16.7441 18.6362 16.9069 18.156C17.0696 17.6759 17.6164 17.4104 18.1281 17.5632C18.7816 17.7583 19.3779 18.0034 19.8316 18.3134C20.2628 18.608 20.75 19.0942 20.75 19.7882C20.75 20.5417 20.1798 21.0498 19.7043 21.3461C19.1914 21.6656 18.5133 21.918 17.7625 22.1158C16.2476 22.515 14.2106 22.75 12 22.75C9.78944 22.75 7.75241 22.515 6.23745 22.1158C5.48673 21.918 4.80864 21.6656 4.29572 21.3461C3.82015 21.0498 3.25 20.5417 3.25 19.7882C3.25 19.0942 3.73723 18.608 4.1684 18.3134C4.62209 18.0034 5.21843 17.7583 5.87192 17.5632C6.3836 17.4104 6.93035 17.6759 7.09314 18.156Z',
  d5: 'M12.0006 1.25C8.75653 1.25 5.67064 3.20636 4.38057 6.28267C3.17965 9.14639 3.83178 11.5859 5.18167 13.667C6.28481 15.3676 7.89417 16.8856 9.33472 18.2444L9.33474 18.2444L9.33501 18.2447C9.60894 18.5031 9.87677 18.7557 10.1338 19.0027L10.1355 19.0043C10.6373 19.4836 11.3062 19.75 12.0006 19.75C12.6949 19.75 13.3638 19.4835 13.8657 19.0042C14.1088 18.772 14.3614 18.5346 14.6195 18.2921L14.6195 18.292C16.0756 16.9236 17.7072 15.3903 18.8219 13.668C20.1701 11.5848 20.82 9.14286 19.6205 6.28267C18.3305 3.20637 15.2446 1.25 12.0006 1.25ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V5.58333H9.5C9.08579 5.58333 8.75 5.91912 8.75 6.33333C8.75 6.74755 9.08579 7.08333 9.5 7.08333H9.6875V10.9167H9.5C9.08579 10.9167 8.75 11.2525 8.75 11.6667C8.75 12.0809 9.08579 12.4167 9.5 12.4167H11.25V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4142 13.75 12.75 13.4142 12.75 13V12.4167H13.5625C14.5393 12.4167 15.25 11.5868 15.25 10.6667V10C15.25 9.6376 15.1398 9.2892 14.9465 9C15.1398 8.7108 15.25 8.3624 15.25 8V7.33333C15.25 6.41317 14.5393 5.58333 13.5625 5.58333H12.75V5ZM11.1875 8.25V7.08333H13.5625C13.6212 7.08333 13.75 7.14893 13.75 7.33333V8C13.75 8.1844 13.6212 8.25 13.5625 8.25H11.1875ZM11.1875 9.75H13.5625C13.6212 9.75 13.75 9.8156 13.75 10V10.6667C13.75 10.8511 13.6212 10.9167 13.5625 10.9167H11.1875V9.75Z',
  d6: 'M4.38057 6.28267C5.67064 3.20636 8.75653 1.25 12.0006 1.25C15.2446 1.25 18.3305 3.20637 19.6205 6.28267C20.82 9.14286 20.1701 11.5848 18.8219 13.668C17.7072 15.3903 16.0756 16.9236 14.6195 18.292L14.6195 18.2921C14.3614 18.5346 14.1088 18.772 13.8657 19.0042C13.3638 19.4835 12.6949 19.75 12.0006 19.75C11.3062 19.75 10.6373 19.4836 10.1355 19.0043L10.1338 19.0027C9.87668 18.7556 9.60877 18.5029 9.33474 18.2444L9.33472 18.2444C7.89417 16.8856 6.28481 15.3676 5.18167 13.667C3.83178 11.5859 3.17965 9.14639 4.38057 6.28267Z',
  d7: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V5.58333H13.5625C14.5393 5.58333 15.25 6.41317 15.25 7.33333V8C15.25 8.3624 15.1398 8.7108 14.9465 9C15.1398 9.2892 15.25 9.6376 15.25 10V10.6667C15.25 11.5868 14.5393 12.4167 13.5625 12.4167H12.75V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.4167H9.5C9.08579 12.4167 8.75 12.0809 8.75 11.6667C8.75 11.2525 9.08579 10.9167 9.5 10.9167H9.6875L9.6875 7.08333H9.5C9.08579 7.08333 8.75 6.74755 8.75 6.33333C8.75 5.91912 9.08579 5.58333 9.5 5.58333H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25ZM11.1875 7.08333V8.25H13.5625C13.6212 8.25 13.75 8.1844 13.75 8V7.33333C13.75 7.14893 13.6212 7.08333 13.5625 7.08333H11.1875ZM13.5625 9.75H11.1875L11.1875 10.9167H13.5625C13.6212 10.9167 13.75 10.8511 13.75 10.6667V10C13.75 9.8156 13.6212 9.75 13.5625 9.75Z',
  d8: 'M10.4375 12.1667L10.4375 6.83333M12 6.83333V5.5M12 13.5V12.1667M10.4375 9.5H13.5625M13.5625 9.5C14.0803 9.5 14.5 9.94772 14.5 10.5V11.1667C14.5 11.719 14.0803 12.1667 13.5625 12.1667H9.5M13.5625 9.5C14.0803 9.5 14.5 9.05228 14.5 8.5V7.83333C14.5 7.28105 14.0803 6.83333 13.5625 6.83333H9.5',
  d9: 'M6 18.2676C4.75527 18.6636 4 19.1837 4 19.7534C4 20.9941 7.58172 21.9998 12 21.9998C16.4183 21.9998 20 20.9941 20 19.7534C20 19.1837 19.2447 18.6636 18 18.2676',
  d10: 'M19.5 9.65C19.5 15.6 12 19 12 19C12 19 4.5 15.6 4.5 9.65C4.5 5.42502 7.85786 2 12 2C16.1421 2 19.5 5.42502 19.5 9.65Z',
  d11: 'M6.46141 19.0756C5.90507 19.2526 5.5293 19.4366 5.31325 19.5938C5.58748 19.7758 6.10633 20.0176 6.76311 20.202C8.06315 20.567 9.91501 20.8054 12 20.8054C14.085 20.8054 15.9368 20.567 17.2369 20.202C17.8937 20.0176 18.4125 19.7758 18.6867 19.5938C18.4707 19.4366 18.0949 19.2526 17.5386 19.0756L18.1281 17.2227C18.7816 17.4306 19.3779 17.6918 19.8316 18.0221C20.2628 18.336 20.75 18.8542 20.75 19.5937C20.75 20.3966 20.1798 20.9381 19.7043 21.2538C19.1914 21.5943 18.5133 21.8632 17.7625 22.074C16.2476 22.4994 14.2106 22.7499 12 22.7499C9.78944 22.7499 7.75241 22.4994 6.23745 22.074C5.48673 21.8632 4.80864 21.5943 4.29572 21.2538C3.82015 20.9381 3.25 20.3966 3.25 19.5937C3.25 18.8542 3.73723 18.336 4.1684 18.0221C4.62209 17.6918 5.21843 17.4306 5.87192 17.2227L6.46141 19.0756Z',
  d12: 'M11.337 19.5104L12 19.8235L12.663 19.5104C12.8794 19.4001 13.1853 19.2371 13.5509 19.023C14.2804 18.5958 15.2562 17.9603 16.2357 17.1277C18.1716 15.4822 20.25 12.9545 20.25 9.65C20.25 5.02488 16.5703 1.25 12 1.25C7.42972 1.25 3.75 5.02488 3.75 9.65C3.75 12.9545 5.82838 15.4822 7.76426 17.1277C8.74377 17.9603 9.71963 18.5958 10.4491 19.023C10.8147 19.2371 11.1206 19.4001 11.337 19.5104ZM12.75 6.08333V4.75H11.25V6.08333H8.75V7.58333H9.6875V11.4167H8.75V12.9167H11.25V14.25H12.75V12.9167H13.5625C14.5393 12.9167 15.25 12.0868 15.25 11.1667V10.5C15.25 10.1376 15.1398 9.7892 14.9465 9.5C15.1398 9.2108 15.25 8.8624 15.25 8.5V7.83333C15.25 6.91317 14.5393 6.08333 13.5625 6.08333H12.75ZM11.1875 8.75V7.58333H13.5625C13.6212 7.58333 13.75 7.64893 13.75 7.83333V8.5C13.75 8.6844 13.6212 8.75 13.5625 8.75H11.1875ZM11.1875 10.25H13.5625C13.6212 10.25 13.75 10.3156 13.75 10.5V11.1667C13.75 11.3511 13.6212 11.4167 13.5625 11.4167H11.1875V10.25Z',
} as const;

export const IconBitcoinLocationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-stroke-rounded IconBitcoinLocationStrokeRounded"
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

export const IconBitcoinLocationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-duotone-rounded IconBitcoinLocationDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinLocationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-twotone-rounded IconBitcoinLocationTwotoneRounded"
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

export const IconBitcoinLocationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-solid-rounded IconBitcoinLocationSolidRounded"
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

export const IconBitcoinLocationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-bulk-rounded IconBitcoinLocationBulkRounded"
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

export const IconBitcoinLocationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-stroke-sharp IconBitcoinLocationStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconBitcoinLocationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-location-solid-sharp IconBitcoinLocationSolidSharp"
    >
      <path 
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

export const iconPackOfBitcoinLocation: TheIconSelfPack = {
  name: 'BitcoinLocation',
  StrokeRounded: IconBitcoinLocationStrokeRounded,
  DuotoneRounded: IconBitcoinLocationDuotoneRounded,
  TwotoneRounded: IconBitcoinLocationTwotoneRounded,
  SolidRounded: IconBitcoinLocationSolidRounded,
  BulkRounded: IconBitcoinLocationBulkRounded,
  StrokeSharp: IconBitcoinLocationStrokeSharp,
  SolidSharp: IconBitcoinLocationSolidSharp,
};