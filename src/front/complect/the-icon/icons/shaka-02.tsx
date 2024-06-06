import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.7116 11.671L15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L6.899 10V4.75C6.899 3.7835 6.13811 3 5.1995 3C4.26089 3 3.5 3.7835 3.5 4.75V13.1795C3.5 15.8106 3.5 17.1261 3.98274 18.1435C4.47679 19.1846 5.31535 20.0232 6.35655 20.5173C7.37391 21 8.68944 21 11.3205 21C12.791 21 13.5263 21 14.188 20.7435C14.392 20.6643 14.5893 20.5677 14.7776 20.4545C15.3882 20.0874 15.8519 19.4998 16.7792 18.3246L20.1218 14.0883C20.623 13.4531 20.6264 12.5441 20.1299 11.905C19.5331 11.1369 18.4369 11.0308 17.7116 11.671Z',
  d2: 'M15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L6.899 10V4.75C6.899 3.7835 6.13811 3 5.1995 3C4.26089 3 3.5 3.7835 3.5 4.75V13.1795C3.5 15.8106 3.5 17.1261 3.98274 18.1435C4.47679 19.1846 5.31535 20.0232 6.35655 20.5173C7.37391 21 8.68944 21 11.3205 21C12.0247 21 12.5603 21 13 20.9718',
  d3: 'M2.75 4.75C2.75 3.39014 3.82613 2.25 5.1995 2.25C6.57287 2.25 7.649 3.39014 7.649 4.75V9.09182L10.748 8.4966L10.7481 8.49659C11.394 8.39682 11.9144 8.31643 12.3395 8.27861C12.7747 8.2399 13.1676 8.23937 13.5494 8.32953C14.7359 8.6097 15.7006 9.47186 16.1383 10.6194C16.2784 10.9866 16.3355 11.3792 16.3627 11.8249L16.3647 11.8594L17.2153 11.1086C18.2682 10.1794 19.8625 10.3384 20.7221 11.4449C21.4302 12.3562 21.4255 13.6469 20.7106 14.5529L17.2766 18.905C16.4378 19.9687 15.8937 20.6587 15.164 21.0973C14.9391 21.2325 14.7033 21.3481 14.4591 21.4427C13.6648 21.7507 12.6181 21.7504 11.289 21.75H11.2889C10.0001 21.75 8.98961 21.75 8.1759 21.6875C7.34756 21.6238 6.66132 21.492 6.03503 21.1948C4.83766 20.6267 3.87331 19.6623 3.30515 18.465C3.00798 17.8387 2.87623 17.1524 2.81255 16.3241C2.74999 15.5104 2.75 14.4999 2.75 13.211V13.211V4.75Z',
  d4: 'M17.7116 11.671L15.6393 13.5C15.6393 12.1103 15.6393 11.4155 15.4376 10.8867C15.0858 9.96466 14.3147 9.28087 13.377 9.05945C12.8393 8.93248 12.172 9.03555 10.8373 9.2417L6.899 10V4.75C6.899 3.7835 6.13811 3 5.1995 3C4.26089 3 3.5 3.7835 3.5 4.75V17C3.5 19.2091 5.29086 21 7.5 21H12.9856C14.2527 21 15.4449 20.3996 16.1994 19.3815L20.1218 14.0883C20.623 13.4531 20.6264 12.5441 20.1299 11.905C19.5331 11.1369 18.4369 11.0308 17.7116 11.671Z',
  d5: 'M2.75 4.75C2.75 3.39014 3.82613 2.25 5.1995 2.25C6.57287 2.25 7.649 3.39014 7.649 4.75V9.09182L10.7091 8.50261L10.748 8.4966L10.7481 8.49659C11.394 8.39682 11.9144 8.31643 12.3395 8.27861C12.7747 8.2399 13.1676 8.23937 13.5494 8.32953C14.7359 8.6097 15.7006 9.47186 16.1383 10.6194C16.2784 10.9866 16.3355 11.3792 16.3627 11.8249L16.3647 11.8594L17.2153 11.1086C18.2682 10.1794 19.8625 10.3384 20.7221 11.4449C21.4277 12.353 21.4256 13.6377 20.7182 14.5432L16.8019 19.8281C15.906 21.037 14.4903 21.75 12.9856 21.75H7.5C4.87665 21.75 2.75 19.6234 2.75 17V4.75Z',
} as const;

export const IconShaka02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-stroke-rounded IconShaka02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-duotone-rounded IconShaka02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-twotone-rounded IconShaka02TwotoneRounded"
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

export const IconShaka02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-solid-rounded IconShaka02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-bulk-rounded IconShaka02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-stroke-sharp IconShaka02StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShaka02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shaka-02-solid-sharp IconShaka02SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShaka02: TheIconSelfPack = {
  name: 'Shaka02',
  StrokeRounded: IconShaka02StrokeRounded,
  DuotoneRounded: IconShaka02DuotoneRounded,
  TwotoneRounded: IconShaka02TwotoneRounded,
  SolidRounded: IconShaka02SolidRounded,
  BulkRounded: IconShaka02BulkRounded,
  StrokeSharp: IconShaka02StrokeSharp,
  SolidSharp: IconShaka02SolidSharp,
};