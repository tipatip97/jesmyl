import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 9H18C18.9319 9 19.3978 9 19.7654 9.15224C20.2554 9.35523 20.6448 9.74458 20.8478 10.2346C21 10.6022 21 11.0681 21 12C21 12.9319 21 13.3978 20.8478 13.7654C20.6448 14.2554 20.2554 14.6448 19.7654 14.8478C19.3978 15 18.9319 15 18 15H13',
  d2: 'M6 15H3',
  d3: 'M13 15H15C15.9319 15 16.3978 15 16.7654 15.1522C17.2554 15.3552 17.6448 15.7446 17.8478 16.2346C18 16.6022 18 17.0681 18 18C18 18.9319 18 19.3978 17.8478 19.7654C17.6448 20.2554 17.2554 20.6448 16.7654 20.8478C16.3978 21 15.9319 21 15 21H3',
  d4: 'M3 3H14C14.9319 3 15.3978 3 15.7654 3.15224C16.2554 3.35523 16.6448 3.74458 16.8478 4.23463C17 4.60218 17 5.06812 17 6C17 6.93188 17 7.39782 16.8478 7.76537C16.6448 8.25542 16.2554 8.64477 15.7654 8.84776C15.3978 9 14.9319 9 14 9H3',
  d5: 'M13 9L13 15.1905C13 16.3045 13 16.8616 12.6735 16.9803C12.3469 17.0991 11.9782 16.6761 11.2407 15.8303L10.7593 15.278C10.4064 14.8733 10.23 14.6709 10 14.6709C9.77003 14.6709 9.5936 14.8733 9.24074 15.278L8.75926 15.8303C8.02179 16.6761 7.65305 17.0991 7.32653 16.9803C7 16.8616 7 16.3045 7 15.1905L7 9',
  d6: 'M7 15H3V21H14.7857C15.7842 21 16.2834 21 16.6772 20.8478C17.2022 20.6448 17.6194 20.2554 17.8369 19.7654C18 19.3978 18 18.9319 18 18C18 17.0681 18 16.6022 17.8369 16.2346C17.6194 15.7446 17.2022 15.3552 16.6772 15.1522C16.2834 15 15.7842 15 14.7857 15H13V15.1905C13 16.3045 13 16.8616 12.6735 16.9803C12.3469 17.0991 11.9782 16.6761 11.2407 15.8303L10.7593 15.278C10.6662 15.1713 10.5854 15.0786 10.5126 15H9.48736C9.41462 15.0786 9.33382 15.1713 9.24074 15.278L8.75926 15.8303C8.02179 16.6761 7.65305 17.0991 7.32653 16.9803C7 16.8616 7 16.3045 7 15.1905V15Z',
  d7: 'M3 3H14C14.9319 3 15.3978 3 15.7654 3.15224C16.2554 3.35523 16.6448 3.74458 16.8478 4.23463C17 4.60218 17 5.06812 17 6C17 6.93188 17 7.39782 16.8478 7.76537C16.6448 8.25542 16.2554 8.64477 15.7654 8.84776C15.3978 9 14.9319 9 14 9H3V3Z',
  d8: 'M7.25 15C7.25 14.4477 6.80228 14 6.25 14L3.25 14C2.69772 14 2.25 14.4477 2.25 15C2.25 15.5523 2.69772 16 3.25 16H6.25C6.80228 16 7.25 15.5523 7.25 15Z',
  d9: 'M18.8506 10.1947C18.6195 10.1791 18.3176 10.1786 17.85 10.1786H3.225C2.68652 10.1786 2.25 9.74685 2.25 9.21429C2.25 8.68173 2.68652 8.25 3.225 8.25L17.8812 8.25C18.3089 8.24999 18.6779 8.24998 18.9833 8.27059C19.3049 8.29229 19.6266 8.34002 19.9443 8.47021C20.6611 8.76381 21.2305 9.32698 21.5273 10.0358C21.659 10.3501 21.7072 10.6682 21.7292 10.9863C21.75 11.2883 21.75 11.6533 21.75 12.0763V12.138C21.75 12.561 21.75 12.9259 21.7292 13.228C21.7072 13.5461 21.659 13.8642 21.5273 14.1785C21.2305 14.8873 20.6611 15.4505 19.9443 15.7441C19.6266 15.8743 19.3049 15.922 18.9833 15.9437C18.8808 15.9506 18.7711 15.9552 18.6544 15.9583C18.7474 16.2279 18.7854 16.5 18.8042 16.772C18.825 17.0741 18.825 17.439 18.825 17.862V17.9237C18.825 18.3467 18.825 18.7117 18.8042 19.0137C18.7822 19.3318 18.734 19.6499 18.6023 19.9642C18.3055 20.673 17.7361 21.2362 17.0193 21.5298C16.7016 21.66 16.3799 21.7077 16.0583 21.7294C15.7529 21.75 15.3839 21.75 14.9562 21.75H3.225C2.68652 21.75 2.25 21.3183 2.25 20.7857C2.25 20.2532 2.68652 19.8214 3.225 19.8214H14.925C15.3926 19.8214 15.6945 19.8209 15.9256 19.8053C16.1479 19.7903 16.2325 19.7646 16.2731 19.748C16.512 19.6502 16.7018 19.4624 16.8008 19.2262C16.8176 19.186 16.8435 19.1023 16.8587 18.8824C16.8745 18.6539 16.875 18.3554 16.875 17.8929C16.875 17.4304 16.8745 17.1318 16.8587 16.9033C16.8435 16.6834 16.8176 16.5997 16.8008 16.5596C16.7018 16.3233 16.512 16.1356 16.2731 16.0377C16.2325 16.0211 16.1479 15.9954 15.9256 15.9804C15.6982 15.9651 15.4023 15.9643 14.9473 15.9643C14.9399 15.9643 14.9325 15.9643 14.925 15.9643H12.975C12.4365 15.9643 12 15.5326 12 15C12 14.4674 12.4365 14.0357 12.975 14.0357L14.9562 14.0357C14.9794 14.0357 15.0025 14.0357 15.0254 14.0357H17.85C18.3176 14.0357 18.6195 14.0352 18.8506 14.0196C19.0729 14.0046 19.1575 13.9789 19.1981 13.9623C19.437 13.8644 19.6268 13.6767 19.7258 13.4404C19.7426 13.4003 19.7685 13.3166 19.7837 13.0967C19.7995 12.8682 19.8 12.5696 19.8 12.1071C19.8 11.6446 19.7995 11.3461 19.7837 11.1176C19.7685 10.8977 19.7426 10.814 19.7258 10.7738C19.6268 10.5376 19.437 10.3498 19.1981 10.252C19.1575 10.2354 19.0729 10.2097 18.8506 10.1947Z',
  d10: 'M14.0253 2.25C14.4697 2.24999 14.8408 2.24999 15.1454 2.27077C15.4625 2.29241 15.762 2.33905 16.0524 2.45933C16.7262 2.73844 17.2616 3.2738 17.5407 3.94762C17.661 4.23801 17.7076 4.53754 17.7292 4.85464C17.75 5.15925 17.75 5.53029 17.75 5.97475V6.02526C17.75 6.46972 17.75 6.84076 17.7292 7.14537C17.7076 7.46247 17.661 7.76199 17.5407 8.05238C17.2616 8.72621 16.7262 9.26156 16.0524 9.54067C15.762 9.66095 15.4625 9.7076 15.1454 9.72923C14.8408 9.75002 14.4697 9.75001 14.0253 9.75H3C2.58579 9.75 2.25 9.41422 2.25 9L2.25 6.948V6.94797C2.24997 6.04951 2.24995 5.3003 2.32991 4.70552C2.41432 4.07773 2.59999 3.51093 3.05546 3.05546C3.51093 2.59999 4.07773 2.41432 4.70552 2.32991C5.3003 2.24995 6.04951 2.24997 6.94797 2.25H6.948L14.0253 2.25Z',
  d11: 'M12.6486 8.27501C12.8679 8.3045 13.1481 8.38033 13.3839 8.61613C13.6197 8.85193 13.6955 9.13212 13.725 9.35145C13.7502 9.53866 13.7501 9.76046 13.75 9.96558L13.75 10L13.75 15.1905L13.75 15.2443C13.7501 15.7549 13.7501 16.2164 13.702 16.562C13.6584 16.8757 13.5294 17.4671 12.9298 17.6852C12.337 17.9008 11.857 17.5407 11.6179 17.332C11.3537 17.1013 11.049 16.7517 10.7104 16.3633L10.7104 16.3632L10.6754 16.3232L10.194 15.7709C10.1172 15.6829 10.0549 15.6115 10 15.5508C9.9451 15.6115 9.88282 15.6829 9.80606 15.7709L9.32458 16.3232L9.28966 16.3632C8.95105 16.7517 8.64634 17.1013 8.38209 17.332C8.14305 17.5407 7.66303 17.9008 7.0702 17.6852C6.47059 17.4671 6.34162 16.8757 6.29798 16.562C6.24989 16.2164 6.24995 15.7549 6.25 15.2443L6.25001 15.1905L6.25001 9.00002C6.25001 8.5858 6.58579 8.25002 7.00001 8.25002L12 8.25002L12.0345 8.25001C12.2396 8.24993 12.4614 8.24984 12.6486 8.27501Z',
  d12: 'M6.25001 14C6.25001 14 6.25001 14 6.25001 14H3.25C2.69772 14 2.25 14.4477 2.25 15C2.25 15.5523 2.69772 16 3.25 16H6.25C6.25231 16 6.25462 16 6.25693 16C6.24994 15.7682 6.24997 15.5131 6.25 15.2443L6.25001 14Z',
  d13: 'M3 3.00003L14 3C15.6569 3 17 4.34314 17 6C17 7.65685 15.6569 8.99999 14 8.99999H3',
  d14: 'M3 9.00003L18 9C19.6569 9 21 10.3431 21 12C21 13.6568 19.6569 15 18 15H13M7 15H3',
  d15: 'M3 21H15C16.6569 21 18 19.6568 18 18C18 16.3431 16.6569 15 15 15L13 15M3 15L7 15',
  d16: 'M7 9V17L10 14.5L13 17V9',
  d17: 'M13.5 2.25C15.7091 2.24999 17.5 3.92893 17.5 6C17.5 8.07107 15.7091 9.75 13.5 9.75H2.5L2.5 2.25003L13.5 2.25Z',
  d18: 'M17.5 10.125L2.5 10.125L2.5 8.25003L17.5 8.25C19.7091 8.25 21.5 9.92893 21.5 12C21.5 14.0711 19.7091 15.75 17.5 15.75H12.5V13.875H17.5C18.6046 13.875 19.5 13.0355 19.5 12C19.5 10.9645 18.6046 10.125 17.5 10.125ZM2.5 13.875H6.5V15.75H2.5V13.875Z',
  d19: 'M14.5 16.125L12.5 16.125L12.5 14.25L14.5 14.25C16.7091 14.25 18.5 15.9289 18.5 18C18.5 20.0711 16.7091 21.75 14.5 21.75H2.5V19.875H14.5C15.6046 19.875 16.5 19.0355 16.5 18C16.5 16.9645 15.6046 16.125 14.5 16.125ZM6.5 16.125L2.5 16.125L2.5 14.25L6.5 14.25L6.5 16.125Z',
  d20: 'M5.75 17V9H13.25V17C13.25 17.291 13.0817 17.5558 12.8181 17.6792C12.5546 17.8026 12.2434 17.7625 12.0199 17.5762L9.5 15.4763L6.98014 17.5762C6.75658 17.7625 6.44542 17.8026 6.18188 17.6792C5.91834 17.5558 5.75 17.291 5.75 17Z',
} as const;

export const IconBooks02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-stroke-rounded IconBooks02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-duotone-rounded IconBooks02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-twotone-rounded IconBooks02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-solid-rounded IconBooks02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-bulk-rounded IconBooks02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBooks02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-stroke-sharp IconBooks02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconBooks02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="books-02-solid-sharp IconBooks02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBooks02: TheIconSelfPack = {
  name: 'Books02',
  StrokeRounded: IconBooks02StrokeRounded,
  DuotoneRounded: IconBooks02DuotoneRounded,
  TwotoneRounded: IconBooks02TwotoneRounded,
  SolidRounded: IconBooks02SolidRounded,
  BulkRounded: IconBooks02BulkRounded,
  StrokeSharp: IconBooks02StrokeSharp,
  SolidSharp: IconBooks02SolidSharp,
};