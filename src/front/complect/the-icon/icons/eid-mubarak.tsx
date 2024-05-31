import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 11.8049C2.5 17.1594 6.84065 21.5 12.1951 21.5C16.601 21.5 20.3204 18.5611 21.5 14.5367C20.0791 15.5691 18.3306 16.1779 16.44 16.1779C11.6804 16.1779 7.82208 12.3196 7.82208 7.56005C7.82208 5.66937 8.43094 3.9209 9.46326 2.5C5.4389 3.67959 2.5 7.39904 2.5 11.8049Z',
  d2: 'M13.2503 8.5C10.8263 5.5 14.9612 4 15.9999 2.5C17.0388 4 21.1737 5.5 18.7497 8.5M13.2503 8.5H18.7497M13.2503 8.5V15.5M18.7497 8.5V15.5',
  d3: 'M13.2503 8.5C10.8263 5.5 14.9612 4 15.9999 2.5C17.0388 4 21.1737 5.5 18.7497 8.5H13.2503Z',
  d4: 'M10.0764 2.06806C10.2612 2.3304 10.2587 2.68126 10.07 2.94088C9.12767 4.23795 8.57208 5.83304 8.57208 7.5601C8.57208 11.9054 12.0947 15.428 16.44 15.428C18.167 15.428 19.7621 14.8724 21.0592 13.93C21.3188 13.7414 21.6697 13.7389 21.932 13.9237C22.1943 14.1085 22.31 14.4398 22.2197 14.7477C20.949 19.0829 16.9429 22.25 12.1951 22.25C6.42643 22.25 1.75 17.5736 1.75 11.8049C1.75 7.05715 4.91711 3.05103 9.25231 1.78033C9.56026 1.69006 9.89152 1.80573 10.0764 2.06806Z',
  d5: 'M12.5 8.88513C12.5 8.82127 12.5 8.78934 12.4909 8.76016C12.4817 8.73098 12.4625 8.70328 12.424 8.64787C11.9052 7.90041 11.6869 7.15975 11.7656 6.42763C11.8532 5.61343 12.2944 4.953 12.7742 4.43033C13.2132 3.95203 13.7482 3.52333 14.2038 3.15822L14.3215 3.0638C14.8403 2.64696 15.1979 2.34095 15.3834 2.07302C15.5235 1.87072 15.7539 1.75001 16 1.75C16.2461 1.74999 16.4765 1.87069 16.6166 2.07298C16.8022 2.34093 17.1598 2.64695 17.6786 3.06379L17.7963 3.15818C18.2519 3.5233 18.7869 3.95201 19.226 4.43032C19.7058 4.953 20.147 5.61342 20.2346 6.42762C20.3133 7.15984 20.0949 7.90059 19.576 8.64815C19.5375 8.70356 19.5183 8.73127 19.5091 8.76045C19.5 8.78963 19.5 8.82156 19.5 8.88543V15.3056C19.5 15.8272 19.0821 16.25 18.5666 16.25C18.0511 16.25 17.6332 15.8272 17.6332 15.3056V9.65C17.6332 9.46144 17.6332 9.36716 17.5746 9.30858C17.516 9.25 17.4218 9.25 17.2332 9.25H14.7668C14.5782 9.25 14.484 9.25 14.4254 9.30858C14.3668 9.36716 14.3668 9.46144 14.3668 9.65V15.3056C14.3668 15.8272 13.9489 16.25 13.4334 16.25C12.9179 16.25 12.5 15.8272 12.5 15.3056V8.88513Z',
  d6: 'M2.5 11.7992C2.5 17.1504 6.84065 21.4883 12.1951 21.4883C16.601 21.4883 20.3204 18.5512 21.5 14.5293C20.0791 15.561 18.3306 16.1695 16.44 16.1695C11.6804 16.1695 7.82208 12.3135 7.82208 7.55693C7.82208 5.66742 8.43094 3.92002 9.46326 2.5C5.4389 3.67886 2.5 7.39602 2.5 11.7992Z',
  d7: 'M13.1378 8.48551C11.6981 6.12149 13.0878 4.88316 13.5583 4.38936C13.9246 4.00498 15.3739 3.03088 16.0048 2.48438C16.5399 2.9577 18.103 4.01095 18.4693 4.39534C18.9398 4.88913 20.3295 6.12746 18.8899 8.49149M13.1378 8.48551H16.0138L18.8899 8.49149M13.1378 8.48551V15.4892M18.8899 8.49149V15.4892',
  d8: 'M2 11.7946C2 17.4309 6.5691 22 12.2054 22C16.8431 22 20.7583 18.9064 22 14.6702C20.5043 15.7569 18.6638 16.3978 16.6736 16.3978C11.6636 16.3978 7.60219 12.3364 7.60219 7.32636C7.60219 5.33618 8.24309 3.49568 9.32975 2C5.09358 3.24168 2 7.15688 2 11.7946Z',
  d9: 'M15.0003 3L15.5024 3.45243C15.7187 3.64735 16.0008 3.84447 16.3518 4.08977C16.4718 4.17366 16.5999 4.26318 16.7362 4.36019C17.2365 4.71621 17.8079 5.14885 18.2739 5.67859C18.7457 6.21506 19.1388 6.88406 19.2302 7.71216C19.316 8.48985 19.1263 9.32061 18.6297 10.2109V17.0096H17.1297V10.7596H12.8697V17.0096H11.3697V10.2108C10.8734 9.3204 10.6839 8.48957 10.7701 7.71188C10.8618 6.88384 11.2551 6.21491 11.727 5.6785C12.193 5.14881 12.7645 4.7162 13.2647 4.36019C13.4007 4.26338 13.5286 4.17403 13.6484 4.09029L13.6485 4.09026C13.9997 3.84475 14.2819 3.64753 14.4982 3.45254L15.0003 3Z',
} as const;

export const IconEidMubarakStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-stroke-rounded IconEidMubarakStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEidMubarakDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-duotone-rounded IconEidMubarakDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEidMubarakTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-twotone-rounded IconEidMubarakTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEidMubarakSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-solid-rounded IconEidMubarakSolidRounded"
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

export const IconEidMubarakBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-bulk-rounded IconEidMubarakBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEidMubarakStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-stroke-sharp IconEidMubarakStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconEidMubarakSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eid-mubarak-solid-sharp IconEidMubarakSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEidMubarak: TheIconSelfPack = {
  name: 'EidMubarak',
  StrokeRounded: IconEidMubarakStrokeRounded,
  DuotoneRounded: IconEidMubarakDuotoneRounded,
  TwotoneRounded: IconEidMubarakTwotoneRounded,
  SolidRounded: IconEidMubarakSolidRounded,
  BulkRounded: IconEidMubarakBulkRounded,
  StrokeSharp: IconEidMubarakStrokeSharp,
  SolidSharp: IconEidMubarakSolidSharp,
};