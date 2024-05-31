import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z',
  d2: 'M15.25 10.0002V12.5002C15.25 13.3286 15.9216 14.0002 16.75 14.0002C17.5784 14.0002 18.25 13.3286 18.25 12.5002V12C18.25 9.23858 16.0114 7 13.25 7C10.4886 7 8.25 9.23858 8.25 12C8.25 14.7614 10.4886 17 13.25 17C14.3758 17 15.4147 16.6279 16.2505 16M15.25 12.0002C15.25 13.1048 14.3546 14.0002 13.25 14.0002C12.1454 14.0002 11.25 13.1048 11.25 12.0002C11.25 10.8956 12.1454 10.0002 13.25 10.0002C14.3546 10.0002 15.25 10.8956 15.25 12.0002Z',
  d3: 'M4.5 6L2 6M4.5 12L2 12M4.5 18H2',
  d4: 'M5.67157 3.17157C4.5 4.34315 4.5 6.22876 4.5 10V14C4.5 17.7712 4.5 19.6569 5.67157 20.8284C6.84315 22 8.72876 22 12.5 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12.5C8.72876 2 6.84315 2 5.67157 3.17157ZM13.25 17.25C16.1495 17.25 18.5 14.8995 18.5 12C18.5 9.1005 16.1495 6.75 13.25 6.75C10.3505 6.75 8 9.1005 8 12C8 14.8995 10.3505 17.25 13.25 17.25Z',
  d5: 'M14.0564 1.25H14.0564H14.0564H12.4436H12.4436H12.4436C10.6058 1.24998 9.15019 1.24997 8.01098 1.40314C6.83856 1.56076 5.88961 1.89288 5.14124 2.64124C4.39288 3.38961 4.06076 4.33856 3.90314 5.51098C3.74997 6.65019 3.74998 8.10581 3.75 9.94356V9.94357V9.94358V14.0564V14.0564V14.0564C3.74998 15.8942 3.74997 17.3498 3.90314 18.489C4.06076 19.6614 4.39288 20.6104 5.14124 21.3588C5.88961 22.1071 6.83856 22.4392 8.01098 22.5969C9.15018 22.75 10.6058 22.75 12.4435 22.75H12.4436H14.0564H14.0565C15.8942 22.75 17.3498 22.75 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.75 17.3498 22.75 15.8942 22.75 14.0565V14.0564V9.94359V9.94354C22.75 8.1058 22.75 6.65018 22.5969 5.51098C22.4392 4.33856 22.1071 3.38961 21.3588 2.64124C20.6104 1.89288 19.6614 1.56076 18.489 1.40314C17.3498 1.24997 15.8942 1.24998 14.0564 1.25ZM9 12C9 9.65279 10.9028 7.75 13.25 7.75C15.5972 7.75 17.5 9.65279 17.5 12V12.5002C17.5 12.9144 17.1642 13.2502 16.75 13.2502C16.3358 13.2502 16 12.9144 16 12.5002V10.0002C16 9.58597 15.6642 9.25018 15.25 9.25018C14.979 9.25018 14.7415 9.39393 14.6098 9.60934C14.2087 9.38077 13.7446 9.25018 13.25 9.25018C11.7312 9.25018 10.5 10.4814 10.5 12.0002C10.5 13.519 11.7312 14.7502 13.25 14.7502C13.9636 14.7502 14.6138 14.4784 15.1025 14.0326C15.5133 14.4741 16.0994 14.7502 16.75 14.7502C17.9926 14.7502 19 13.7428 19 12.5002V12C19 8.82436 16.4256 6.25 13.25 6.25C10.0744 6.25 7.5 8.82436 7.5 12C7.5 15.1756 10.0744 17.75 13.25 17.75C14.5438 17.75 15.7398 17.3218 16.701 16.5996C17.0322 16.3508 17.0989 15.8807 16.8501 15.5495C16.6013 15.2183 16.1311 15.1516 15.8 15.4004C15.0897 15.9341 14.2078 16.25 13.25 16.25C10.9028 16.25 9 14.3472 9 12ZM13.25 10.7502C13.9404 10.7502 14.5 11.3098 14.5 12.0002C14.5 12.6905 13.9404 13.2502 13.25 13.2502C12.5596 13.2502 12 12.6905 12 12.0002C12 11.3098 12.5596 10.7502 13.25 10.7502Z',
  d6: 'M1.25 6C1.25 5.44772 1.69772 5 2.25 5L4.75 5C5.30229 5 5.75 5.44772 5.75 6C5.75 6.55229 5.30228 7 4.75 7L2.25 7C1.69772 7 1.25 6.55228 1.25 6ZM1.25 12C1.25 11.4477 1.69772 11 2.25 11L4.75 11C5.30229 11 5.75 11.4477 5.75 12C5.75 12.5523 5.30228 13 4.75 13H2.25C1.69772 13 1.25 12.5523 1.25 12ZM1.25 18C1.25 17.4477 1.69772 17 2.25 17H4.75C5.30228 17 5.75 17.4477 5.75 18C5.75 18.5523 5.30228 19 4.75 19H2.25C1.69772 19 1.25 18.5523 1.25 18Z',
  d7: 'M14.0564 1.25C15.8942 1.24998 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64124C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65018 22.75 8.1058 22.75 9.94354V9.94359V14.0564V14.0565C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0565 22.75H14.0564H12.4436H12.4435C10.6058 22.75 9.15018 22.75 8.01098 22.5969C6.83856 22.4392 5.88961 22.1071 5.14124 21.3588C4.39288 20.6104 4.06076 19.6614 3.90314 18.489C3.74997 17.3498 3.74998 15.8942 3.75 14.0564V14.0564V9.94358V9.94357C3.74998 8.10582 3.74997 6.65019 3.90314 5.51098C4.06076 4.33856 4.39288 3.38961 5.14124 2.64124C5.88961 1.89288 6.83856 1.56076 8.01098 1.40314C9.15019 1.24997 10.6058 1.24998 12.4436 1.25H12.4436H14.0564H14.0564Z',
  d8: 'M13.25 7.75C10.9028 7.75 9 9.65279 9 12C9 14.3472 10.9028 16.25 13.25 16.25C14.2078 16.25 15.0897 15.9341 15.8 15.4004C16.1311 15.1516 16.6013 15.2183 16.8501 15.5495C17.0989 15.8807 17.0322 16.3508 16.701 16.5996C15.7398 17.3218 14.5438 17.75 13.25 17.75C10.0744 17.75 7.5 15.1756 7.5 12C7.5 8.82436 10.0744 6.25 13.25 6.25C16.4256 6.25 19 8.82436 19 12V12.5002C19 13.7428 17.9926 14.7502 16.75 14.7502C16.0994 14.7502 15.5133 14.4741 15.1025 14.0326C14.6138 14.4784 13.9636 14.7502 13.25 14.7502C11.7312 14.7502 10.5 13.519 10.5 12.0002C10.5 10.4814 11.7312 9.25018 13.25 9.25018C13.7446 9.25018 14.2087 9.38076 14.6098 9.60934C14.7415 9.39393 14.979 9.25018 15.25 9.25018C15.6642 9.25018 16 9.58597 16 10.0002V12.5002C16 12.9144 16.3358 13.2502 16.75 13.2502C17.1642 13.2502 17.5 12.9144 17.5 12.5002V12C17.5 9.65279 15.5972 7.75 13.25 7.75ZM14.5 12.0002C14.5 11.3098 13.9404 10.7502 13.25 10.7502C12.5596 10.7502 12 11.3098 12 12.0002C12 12.6905 12.5596 13.2502 13.25 13.2502C13.9404 13.2502 14.5 12.6905 14.5 12.0002Z',
  d9: 'M22 2H5V22H22V2Z',
  d10: 'M5 6H2M5 12H2M5 18H2',
  d11: 'M16.4791 15.9781C15.6444 16.6105 14.6059 16.9854 13.4802 16.9854C10.7254 16.9854 8.49219 14.74 8.49219 11.9702C8.49219 9.20043 10.7254 6.95508 13.4802 6.95508C16.235 6.95508 18.4683 9.20043 18.4683 11.9702C18.5471 12.5741 18.4132 13.8772 17.2392 13.9701C15.755 14.0877 15.5163 12.9325 15.4588 12.2655V9.25284M15.4915 12.001C15.4915 13.105 14.5931 14 13.485 14C12.3768 14 11.4785 13.105 11.4785 12.001C11.4785 10.8969 12.3768 10.002 13.485 10.002C14.5931 10.002 15.4915 10.8969 15.4915 12.001Z',
  d12: 'M4.25 2C4.25 1.58579 4.58579 1.25 5 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V22C22.75 22.4142 22.4142 22.75 22 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V19H1.25V17H4.25V13H1.25V11H4.25V7H1.25V5H4.25V2ZM9.25195 12C9.25195 9.65279 11.1547 7.75 13.502 7.75C15.8492 7.75 17.752 9.65279 17.752 12V12.5002C17.752 12.9144 17.4162 13.2502 17.002 13.2502C16.5877 13.2502 16.252 12.9144 16.252 12.5002V9.25018H14.752V9.55004C14.3769 9.35832 13.9521 9.25018 13.502 9.25018C11.9832 9.25018 10.752 10.4814 10.752 12.0002C10.752 13.519 11.9832 14.7502 13.502 14.7502C14.2156 14.7502 14.8657 14.4784 15.3545 14.0326C15.7653 14.4741 16.3514 14.7502 17.002 14.7502C18.2446 14.7502 19.252 13.7428 19.252 12.5002V12C19.252 8.82436 16.6776 6.25 13.502 6.25C10.3263 6.25 7.75195 8.82436 7.75195 12C7.75195 15.1756 10.3263 17.75 13.502 17.75C14.7958 17.75 15.9918 17.3218 16.9529 16.5996L16.0519 15.4004C15.3416 15.9341 14.4598 16.25 13.502 16.25C11.1547 16.25 9.25195 14.3472 9.25195 12ZM13.502 10.7502C14.1923 10.7502 14.752 11.3098 14.752 12.0002C14.752 12.6905 14.1923 13.2502 13.502 13.2502C12.8116 13.2502 12.252 12.6905 12.252 12.0002C12.252 11.3098 12.8116 10.7502 13.502 10.7502Z',
} as const;

export const IconAddressBookStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-stroke-rounded IconAddressBookStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconAddressBookDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-duotone-rounded IconAddressBookDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconAddressBookTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-twotone-rounded IconAddressBookTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAddressBookSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-solid-rounded IconAddressBookSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAddressBookBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-bulk-rounded IconAddressBookBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAddressBookStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-stroke-sharp IconAddressBookStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconAddressBookSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="address-book-solid-sharp IconAddressBookSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAddressBook: TheIconSelfPack = {
  name: 'AddressBook',
  StrokeRounded: IconAddressBookStrokeRounded,
  DuotoneRounded: IconAddressBookDuotoneRounded,
  TwotoneRounded: IconAddressBookTwotoneRounded,
  SolidRounded: IconAddressBookSolidRounded,
  BulkRounded: IconAddressBookBulkRounded,
  StrokeSharp: IconAddressBookStrokeSharp,
  SolidSharp: IconAddressBookSolidSharp,
};