import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 8V11M10 11V8',
  d2: 'M8.00297 12.0267C7.95812 11.4726 8.42638 11 9.02009 11H14.9799C15.5736 11 16.0419 11.4726 15.997 12.0267L15.8745 13.5403C15.7864 14.6285 15.4008 15.6771 14.7546 16.5856L14.3541 17.1487C13.9759 17.6805 13.3385 18 12.6558 18H11.3442C10.6615 18 10.0241 17.6805 9.64588 17.1487L9.24535 16.5856C8.59923 15.6771 8.2136 14.6285 8.12551 13.5403L8.00297 12.0267Z',
  d3: 'M16 21.2109C19.5318 19.6644 22 16.1323 22 12.0224C22 6.4872 17.5228 2 12 2C6.47715 2 2 6.4872 2 12.0224C2 17.2199 5.94741 21.4933 11.0014 21.9955C11.551 22.0501 12 21.5962 12 21.0426V18.0359',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.02009 11C8.42638 11 7.95812 11.4726 8.00297 12.0267L8.12551 13.5403C8.2136 14.6285 8.59923 15.6771 9.24535 16.5856L9.64588 17.1487C10.0241 17.6805 10.6615 18 11.3442 18H12.6558C13.3385 18 13.9759 17.6805 14.3541 17.1487L14.7546 16.5856C15.4008 15.6771 15.7864 14.6285 15.8745 13.5403L15.997 12.0267C16.0419 11.4726 15.5736 11 14.9799 11H9.02009Z',
  d5: 'M11.0014 21.926C5.94741 21.4255 2 17.1668 2 11.9871C2 6.47093 6.47715 1.99915 12 1.99915C17.5228 1.99915 22 6.47093 22 11.9871C22 16.0829 19.5318 19.6029 16 21.1441',
  d6: 'M13.9963 7.98891V10.956M10.0234 10.956V7.98889M11.9997 17.8997H12.6749C13.3776 17.8997 14.0339 17.5773 14.4233 17.0408L14.8356 16.4726C15.5008 15.5561 15.8382 14.7516 15.9289 13.6537L16.0551 12.1265C16.1013 11.5675 15.6788 10.956 15.0675 10.956H8.93187C8.32064 10.956 7.91935 11.5675 7.96552 12.1265L8.09168 13.6537C8.18237 14.7516 8.49859 15.5561 9.16377 16.4726L9.57612 17.0408C9.96556 17.5773 10.6217 17.8997 11.3245 17.8997H11.9997ZM11.9997 17.8997C11.9997 22.87 11.9659 22.0166 10.2747 21.8242',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.685 5.66298 22.3393 11.2502 22.7243V18.7485C10.3726 18.7202 9.54322 18.298 9.03495 17.5834L8.63443 17.0203C7.91169 16.0041 7.47744 14.8267 7.37821 13.6009L7.25567 12.0872C7.17129 11.0449 8.0421 10.25 9.02034 10.25H9.25025V8C9.25025 7.58579 9.58603 7.25 10.0002 7.25C10.4145 7.25 10.7502 7.58579 10.7502 8V10.25H13.2502V8C13.2502 7.58579 13.586 7.25 14.0002 7.25C14.4145 7.25 14.7502 7.58579 14.7502 8V10.25H14.9802C15.9584 10.25 16.8292 11.0449 16.7448 12.0872L16.6223 13.6009C16.523 14.8267 16.0888 16.0041 15.3661 17.0203L14.9655 17.5834C14.4573 18.298 13.6279 18.7202 12.7502 18.7485V22.7242C18.3373 22.3391 22.75 17.6849 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M10.0002 7.25C10.4145 7.25 10.7502 7.58579 10.7502 8V10.25H13.2502V8C13.2502 7.58579 13.586 7.25 14.0002 7.25C14.4145 7.25 14.7502 7.58579 14.7502 8V10.25H14.9802C15.9584 10.25 16.8292 11.0449 16.7448 12.0872L16.6223 13.6009C16.523 14.8267 16.0888 16.0041 15.3661 17.0203L14.9655 17.5834C14.4573 18.298 13.6279 18.7202 12.7502 18.7485V22.7242C12.5024 22.7413 12.2522 22.75 12 22.75C11.748 22.75 11.498 22.7413 11.2502 22.7243V18.7485C10.3726 18.7202 9.54322 18.298 9.03495 17.5834L8.63443 17.0203C7.91169 16.0041 7.47744 14.8267 7.37821 13.6009L7.25567 12.0872C7.17129 11.0449 8.0421 10.25 9.02034 10.25H9.25025V8C9.25025 7.58579 9.58603 7.25 10.0002 7.25Z',
  d10: 'M12 18V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.4292 19.1204 20.1859 15.1312 21.5',
  d11: 'M9.86852 10.7604L9.86859 8.72559M14.1112 10.7688L14.1112 8.7264M16.0632 10.9421L7.91708 10.9261L7.90918 14.999L10.4488 18.0586L13.5034 18.0646L16.0551 15.015L16.0632 10.9421Z',
  d12: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.6851 5.66306 22.3394 11.2504 22.7243V18.7498H10.1491L7.25023 15.2714L7.25 10.2498H9.25156V8H10.7516V10.2498H13.2516V8H14.7516V10.2498H16.7504V15.2714L13.8517 18.7498H12.7504V22.7242C18.3374 22.339 22.75 17.6848 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
} as const;

export const IconPlug02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-stroke-rounded IconPlug02StrokeRounded"
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

export const IconPlug02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-duotone-rounded IconPlug02DuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPlug02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-twotone-rounded IconPlug02TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlug02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-solid-rounded IconPlug02SolidRounded"
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

export const IconPlug02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-bulk-rounded IconPlug02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPlug02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-stroke-sharp IconPlug02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconPlug02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-02-solid-sharp IconPlug02SolidSharp"
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

export const iconPackOfPlug02: TheIconSelfPack = {
  name: 'Plug02',
  StrokeRounded: IconPlug02StrokeRounded,
  DuotoneRounded: IconPlug02DuotoneRounded,
  TwotoneRounded: IconPlug02TwotoneRounded,
  SolidRounded: IconPlug02SolidRounded,
  BulkRounded: IconPlug02BulkRounded,
  StrokeSharp: IconPlug02StrokeSharp,
  SolidSharp: IconPlug02SolidSharp,
};