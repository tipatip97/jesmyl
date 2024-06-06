import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.56324 5.55807L7.4 8M7.4 8L11 11M7.4 8L4.50512 10.3865M7.4 8L11 5M2 4.5C2 5.32843 2.67157 6 3.5 6C4.32843 6 5 5.32843 5 4.5C5 3.67157 4.32843 3 3.5 3C2.67157 3 2 3.67157 2 4.5ZM2 11.5C2 12.3284 2.67157 13 3.5 13C4.32843 13 5 12.3284 5 11.5C5 10.6716 4.32843 10 3.5 10C2.67157 10 2 10.6716 2 11.5Z',
  d2: 'M8 15.0768V14M19.8462 7.27029C20.3409 7.41042 20.7309 7.62313 21.0537 7.94599C21.3766 8.26886 21.5893 8.65887 21.7294 9.1536M21.7294 18.8461C21.5893 19.3408 21.3766 19.7308 21.0537 20.0537C20.7309 20.3766 20.3409 20.5893 19.8462 20.7294M10.1538 20.7294C9.65913 20.5893 9.26913 20.3766 8.94627 20.0537C8.62341 19.7308 8.41071 19.3408 8.27058 18.8461M13.9231 21H16.0769M22 15.0768V12.9229M16.0769 7H13.9231',
  d3: 'M8 14C8 10.9669 8 9.45032 8.82233 8.41915C8.9983 8.19849 9.19849 7.9983 9.41915 7.82233C10.4503 7 11.9669 7 15 7C18.0331 7 19.5497 7 20.5808 7.82233C20.8015 7.9983 21.0017 8.19849 21.1777 8.41915C22 9.45032 22 10.9669 22 14C22 17.0331 22 18.5497 21.1777 19.5808C21.0017 19.8015 20.8015 20.0017 20.5808 20.1777C19.5497 21 18.0331 21 15 21C11.9669 21 10.4503 21 9.41915 20.1777C9.19849 20.0017 8.9983 19.8015 8.82233 19.5808C8 18.5497 8 17.0331 8 14Z',
  d4: 'M3.49998 4C3.77612 4 3.99998 4.22386 3.99998 4.5C3.99998 4.63557 3.94602 4.75854 3.85841 4.8486C3.85587 4.85113 3.85334 4.85368 3.85082 4.85624C3.76056 4.94514 3.63667 5 3.49998 5C3.22383 5 2.99998 4.77614 2.99998 4.5C2.99998 4.22386 3.22383 4 3.49998 4ZM4.47587 6.80236C4.17603 6.92961 3.84623 7 3.49998 7C2.11926 7 0.999975 5.88071 0.999975 4.5C0.999975 3.11929 2.11926 2 3.49998 2C4.88069 2 5.99997 3.11929 5.99997 4.5C5.99997 4.79781 5.9479 5.08345 5.85237 5.34832L7.41046 6.68955L10.3598 4.23178C10.7841 3.87821 11.4146 3.93554 11.7682 4.35982C12.1218 4.78409 12.0644 5.41466 11.6402 5.76822L8.96203 8L11.6402 10.2318C12.0644 10.5853 12.1218 11.2159 11.7682 11.6402C11.4146 12.0645 10.7841 12.1218 10.3598 11.7682L7.39654 9.29884L5.82948 10.5907C5.93956 10.8725 5.99997 11.1792 5.99997 11.5C5.99997 12.8807 4.88069 14 3.49998 14C2.11926 14 0.999975 12.8807 0.999975 11.5C0.999975 10.1193 2.11926 9 3.49998 9C3.82047 9 4.12688 9.06031 4.40847 9.17019L5.84796 7.98347L4.47587 6.80236ZM3.84197 11.1352C3.83742 11.1312 3.8329 11.1271 3.82841 11.123C3.74056 11.0464 3.62569 11 3.49998 11C3.22383 11 2.99998 11.2239 2.99998 11.5C2.99998 11.7761 3.22383 12 3.49998 12C3.77612 12 3.99998 11.7761 3.99998 11.5C3.99998 11.3561 3.93922 11.2265 3.84197 11.1352Z',
  d5: 'M12.9231 7C12.9231 6.44772 13.3708 6 13.9231 6H16.0769C16.6292 6 17.0769 6.44772 17.0769 7C17.0769 7.55228 16.6292 8 16.0769 8L13.9231 8C13.3708 8 12.9231 7.55228 12.9231 7Z',
  d6: 'M18.884 6.99775C19.0345 6.46637 19.5873 6.15763 20.1187 6.30814C20.7455 6.4857 21.2957 6.77372 21.7608 7.23889C22.226 7.70407 22.514 8.25422 22.6916 8.88107C22.8421 9.41245 22.5333 9.96523 22.0019 10.1157C21.4706 10.2663 20.9178 9.9575 20.7673 9.42612C20.6646 9.06351 20.5272 8.83365 20.3466 8.65309C20.1661 8.47254 19.9362 8.33514 19.5736 8.23243C19.0422 8.08192 18.7335 7.52913 18.884 6.99775Z',
  d7: 'M22 11.9229C22.5523 11.9229 23 12.3706 23 12.9229V15.0768C23 15.6291 22.5523 16.0768 22 16.0768C21.4477 16.0768 21 15.6291 21 15.0768V12.9229C21 12.3706 21.4477 11.9229 22 11.9229Z',
  d8: 'M8 13C8.55228 13 9 13.4477 9 14L9 15.0768C9 15.6291 8.55228 16.0768 8 16.0768C7.44772 16.0768 7 15.6291 7 15.0768V14C7 13.4477 7.44772 13 8 13Z',
  d9: 'M7.99805 17.884C8.52943 17.7334 9.08222 18.0422 9.23273 18.5736C9.33543 18.9362 9.47283 19.1661 9.65338 19.3466C9.83394 19.5272 10.0638 19.6646 10.4264 19.7673C10.9578 19.9178 11.2665 20.4706 11.116 21.002C10.9655 21.5333 10.4127 21.8421 9.88131 21.6916C9.25446 21.514 8.70432 21.226 8.23916 20.7608C7.77399 20.2956 7.48598 19.7455 7.30843 19.1186C7.15792 18.5873 7.46667 18.0345 7.99805 17.884Z',
  d10: 'M22.0019 17.884C22.5333 18.0345 22.8421 18.5873 22.6916 19.1186C22.514 19.7455 22.226 20.2956 21.7608 20.7608C21.2957 21.226 20.7455 21.514 20.1187 21.6916C19.5873 21.8421 19.0345 21.5333 18.884 21.002C18.7335 20.4706 19.0422 19.9178 19.5736 19.7673C19.9362 19.6646 20.1661 19.5272 20.3466 19.3466C20.5272 19.1661 20.6646 18.9362 20.7673 18.5736C20.9178 18.0422 21.4706 17.7334 22.0019 17.884Z',
  d11: 'M12.9231 21C12.9231 20.4477 13.3708 20 13.9231 20H16.0769C16.6292 20 17.0769 20.4477 17.0769 21C17.0769 21.5523 16.6292 22 16.0769 22H13.9231C13.3708 22 12.9231 21.5523 12.9231 21Z',
  d12: 'M4.56324 5.55758L7.4 7.99951M7.4 7.99951L11 10.9995M7.4 7.99951L4.50512 10.3861M7.4 7.99951L11 4.99951M2 4.49951C2 5.32794 2.67157 5.99951 3.5 5.99951C4.32843 5.99951 5 5.32794 5 4.49951C5 3.67108 4.32843 2.99951 3.5 2.99951C2.67157 2.99951 2 3.67108 2 4.49951ZM2 11.4995C2 12.3279 2.67157 12.9995 3.5 12.9995C4.32843 12.9995 5 12.3279 5 11.4995C5 10.6711 4.32843 9.99951 3.5 9.99951C2.67157 9.99951 2 10.6711 2 11.4995Z',
  d13: 'M8.00037 16L8 13M19 7.00005H22V10M22 18.0001V21.0001H19M11 21.0001H8.00037L8 18.0001M13 21.0001L17 21M22 16V12M17 7H13',
  d14: 'M13.0625 6.25H16.9375V8.18748L13.0625 8.18748V6.25ZM20.8125 8.18753H18.875V6.25005H21.7812C22.3163 6.25005 22.75 6.68377 22.75 7.21879V10.125H20.8125V8.18753ZM22.75 12.0624V15.9374H20.8125V12.0624H22.75ZM9.1875 13.0311L9.18786 15.9373L7.25036 15.9375L7.25 13.0313L9.1875 13.0311ZM7.25036 20.7814L7.25 17.8751L9.1875 17.8749L9.18774 19.8125H11.125V21.75H8.21911C7.68413 21.75 7.25042 21.3164 7.25036 20.7814ZM20.8125 19.8125V17.875H22.75V20.7813C22.75 21.3163 22.3163 21.75 21.7812 21.75H18.875V19.8125H20.8125ZM16.9375 21.7499L13.0625 21.75L13.0625 19.8125L16.9375 19.8124L16.9375 21.7499Z',
  d15: 'M3.64583 4.16667C3.91047 4.16667 4.125 4.3812 4.125 4.64583C4.125 4.91047 3.91047 5.125 3.64583 5.125C3.3812 5.125 3.16667 4.91047 3.16667 4.64583C3.16667 4.3812 3.3812 4.16667 3.64583 4.16667ZM6.04167 4.64583C6.04167 3.32265 4.96902 2.25 3.64583 2.25C2.32265 2.25 1.25 3.32265 1.25 4.64583C1.25 5.96902 2.32265 7.04167 3.64583 7.04167C3.97766 7.04167 4.29372 6.97421 4.58107 6.85226L5.89599 7.98416L4.51647 9.12144C4.24661 9.01613 3.95297 8.95833 3.64583 8.95833C2.32265 8.95833 1.25 10.031 1.25 11.3542C1.25 12.6773 2.32265 13.75 3.64583 13.75C4.96902 13.75 6.04167 12.6773 6.04167 11.3542C6.04167 11.0467 5.98376 10.7528 5.87827 10.4828L7.38004 9.24472L10.2198 11.6112L11.4468 10.1388L8.8803 8L11.4468 5.86121L10.2198 4.38879L7.39338 6.74416L5.90021 5.45881C5.99176 5.20497 6.04167 4.93123 6.04167 4.64583ZM3.64583 10.875C3.91047 10.875 4.125 11.0895 4.125 11.3542C4.125 11.6188 3.91047 11.8333 3.64583 11.8333C3.3812 11.8333 3.16667 11.6188 3.16667 11.3542C3.16667 11.0895 3.3812 10.875 3.64583 10.875Z',
};

export const IconVoucherStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-stroke-rounded IconVoucherStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconVoucherDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-duotone-rounded IconVoucherDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVoucherTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-twotone-rounded IconVoucherTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconVoucherSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-solid-rounded IconVoucherSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconVoucherBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-bulk-rounded IconVoucherBulkRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconVoucherStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-stroke-sharp IconVoucherStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVoucherSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="voucher-solid-sharp IconVoucherSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVoucher: TheIconSelfPack = {
  name: 'Voucher',
  StrokeRounded: IconVoucherStrokeRounded,
  DuotoneRounded: IconVoucherDuotoneRounded,
  TwotoneRounded: IconVoucherTwotoneRounded,
  SolidRounded: IconVoucherSolidRounded,
  BulkRounded: IconVoucherBulkRounded,
  StrokeSharp: IconVoucherStrokeSharp,
  SolidSharp: IconVoucherSolidSharp,
};