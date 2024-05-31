import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7',
  d2: 'M12 21H13.25C16.7612 21 18.5167 21 19.7779 20.1573C20.3238 19.7926 20.7926 19.3238 21.1573 18.7779C22 17.5167 22 15.7612 22 12.25C22 10.1433 22 9.08996 21.4944 8.33329C21.2755 8.00572 20.9943 7.72447 20.6667 7.50559C19.91 7 18.8567 7 16.75 7H12L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.92893 21 7.28595 21 12 21Z',
  d3: 'M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 12.5094 22 12.7592 21.9997 13M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 11.7199 2 12.3848 2.00522 13',
  d4: 'M7.08264 2.25004C8.11205 2.24958 8.82373 2.24927 9.4626 2.48884C10.8581 3.01213 11.4704 4.25129 11.9425 5.20644C12.0838 5.48916 12.3409 6.00277 12.4128 6.11571C12.4348 6.15263 12.5044 6.22825 12.6064 6.23539C12.7396 6.24915 12.92 6.25008 13.2361 6.25008L16.7905 6.25008H16.7905C17.8095 6.25007 18.6312 6.25006 19.2905 6.31713C19.9711 6.38636 20.5613 6.53321 21.0834 6.88207C21.4929 7.15566 21.8444 7.50723 22.118 7.91669C22.4669 8.4388 22.6137 9.029 22.683 9.70956C22.75 10.3689 22.75 11.2733 22.75 12.2923C22.75 14.0121 22.75 15.3603 22.6408 16.4337C22.5295 17.5284 22.2983 18.4203 21.781 19.1946C21.3614 19.8225 20.8224 20.3615 20.1945 20.781C19.4202 21.2984 18.5283 21.5295 17.4336 21.6409C16.3602 21.7501 15.012 21.7501 13.2923 21.7501H11.9426C9.63423 21.7501 7.82519 21.7501 6.41371 21.5603C4.96897 21.3661 3.82895 20.9608 2.93414 20.0659C2.03933 19.1711 1.63399 18.0311 1.43975 16.5864C1.24998 15.1749 1.24999 13.3659 1.25 11.0575V11.0575V7.90959V7.90958C1.24999 7.03085 1.24998 6.32212 1.30044 5.74978C1.35242 5.16004 1.46238 4.64396 1.7254 4.17266C2.06428 3.56541 2.56533 3.06435 3.17258 2.72548C3.64388 2.46246 4.15996 2.3525 4.7497 2.30052C5.32205 2.25006 6.2039 2.25003 7.08264 2.25004Z',
  d5: 'M7.08264 2.25004C8.11205 2.24958 8.82373 2.24927 9.4626 2.48884C10.8581 3.01213 11.4704 4.25129 11.9425 5.20644C12.0838 5.48916 12.3409 6.00277 12.4128 6.11571C12.4348 6.15263 12.5044 6.22825 12.6064 6.23539C12.7396 6.24915 12.92 6.25008 13.2361 6.25008L16.7905 6.25008H16.7905C17.8095 6.25007 18.6312 6.25006 19.2905 6.31713C19.9711 6.38636 20.5613 6.53321 21.0834 6.88207C21.4929 7.15566 21.8444 7.50723 22.118 7.91669C22.4669 8.4388 22.6137 9.029 22.683 9.70956C22.75 10.3689 22.75 11.2733 22.75 12.2923C22.75 14.0121 22.75 15.3603 22.6408 16.4337C22.5295 17.5284 22.2983 18.4203 21.781 19.1946C21.3614 19.8225 20.8224 20.3615 20.1945 20.781C19.4202 21.2984 18.5283 21.5295 17.4336 21.6409C16.3602 21.7501 15.012 21.7501 13.2923 21.7501H11.9426C9.63423 21.7501 7.82519 21.7501 6.41371 21.5603C4.96897 21.3661 3.82895 20.9608 2.93414 20.0659C2.03933 19.1711 1.63399 18.0311 1.43975 16.5864C1.24998 15.1749 1.24999 13.3659 1.25 11.0575V11.0575V7.90959V7.90957C1.24999 7.26427 1.24999 6.71065 1.26997 6.23539C1.27719 6.06347 1.28704 5.90181 1.30044 5.74978C1.35242 5.16004 1.46238 4.64396 1.7254 4.17266C2.06428 3.56541 2.56533 3.06435 3.17258 2.72548C3.64388 2.46246 4.15996 2.3525 4.7497 2.30052C5.32205 2.25006 6.2039 2.25003 7.08264 2.25004Z',
  d6: 'M7.0061 6.99446H12.0179M12.0179 6.99446H22.0095C22.0151 6.99446 22.0195 6.99893 22.0195 7.00445V20.989C22.0195 20.9946 22.015 20.999 22.0095 20.999L2.02995 20.9447C2.02444 20.9447 2.01997 20.9403 2.01997 20.9347L2.01953 3.00902C2.01953 3.0035 2.02401 2.99902 2.02954 2.99902H9.01469L12.0179 6.99446Z',
  d7: 'M1.46967 2.46967C1.61032 2.32902 1.80109 2.25 2 2.25L9.375 2.25001L12.375 6.25H22C22.4142 6.25 22.75 6.58579 22.75 7V21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V3C1.25 2.80109 1.32902 2.61032 1.46967 2.46967Z',
} as const;

export const IconFolder01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-stroke-rounded IconFolder01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolder01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-duotone-rounded IconFolder01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolder01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-twotone-rounded IconFolder01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolder01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-solid-rounded IconFolder01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolder01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-bulk-rounded IconFolder01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolder01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-stroke-sharp IconFolder01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolder01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-01-solid-sharp IconFolder01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolder01: TheIconSelfPack = {
  name: 'Folder01',
  StrokeRounded: IconFolder01StrokeRounded,
  DuotoneRounded: IconFolder01DuotoneRounded,
  TwotoneRounded: IconFolder01TwotoneRounded,
  SolidRounded: IconFolder01SolidRounded,
  BulkRounded: IconFolder01BulkRounded,
  StrokeSharp: IconFolder01StrokeSharp,
  SolidSharp: IconFolder01SolidSharp,
};