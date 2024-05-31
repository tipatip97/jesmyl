import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z',
  d2: 'M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C10.6211 22 9.30745 21.7209 8.11235 21.2162C7.45185 20.9372 7.12161 20.7977 6.87202 20.7805C6.62244 20.7632 6.34788 20.8367 5.79877 20.9836L2 22L3.01642 18.2012C3.16334 17.6521 3.2368 17.3776 3.21953 17.128C3.20226 16.8784 3.06278 16.5481 2.78382 15.8877C2.27907 14.6926 2 13.3789 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.8824 16.5C14.0519 16.5 15 15.4926 15 14.25C15 13.0074 14.0519 12 12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88461V15.1154C9 15.7681 9 16.0945 9.20675 16.2972C9.4135 16.5 9.74625 16.5 10.4118 16.5H12.8824Z',
  d4: 'M12 1.25C6.06296 1.25 1.25002 6.06294 1.25002 12C1.25002 13.4809 1.54989 14.8937 2.09293 16.1795C2.23539 16.5168 2.33142 16.7447 2.39557 16.9198C2.46099 17.0985 2.47018 17.1631 2.47134 17.1798C2.47783 17.2737 2.45407 17.4013 2.29192 18.0074L1.2755 21.8061C1.20627 22.0649 1.28029 22.3409 1.46969 22.5303C1.65909 22.7197 1.93512 22.7937 2.19387 22.7245L5.99264 21.7081C6.59867 21.5459 6.72635 21.5222 6.82026 21.5287C6.83692 21.5298 6.90154 21.539 7.08019 21.6045C7.25534 21.6686 7.48326 21.7646 7.82056 21.9071C9.10634 22.4501 10.5191 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.4118 6.75001L10.3723 6.75001C10.0739 6.74994 9.78119 6.74988 9.53919 6.78179C9.26642 6.81776 8.94808 6.90597 8.6816 7.16733C8.4131 7.43067 8.32042 7.74874 8.28281 8.02312C8.24987 8.26339 8.24994 8.55319 8.25001 8.84454V8.84455L8.25001 8.88463L8.25001 15.1154L8.25001 15.1555V15.1555C8.24994 15.4468 8.24987 15.7366 8.28281 15.9769C8.32042 16.2513 8.4131 16.5693 8.6816 16.8327C8.94808 17.094 9.26642 17.1823 9.53919 17.2182C9.78119 17.2501 10.0739 17.2501 10.3723 17.25L10.4118 17.25H12.8824C14.5083 17.25 15.75 15.8634 15.75 14.25C15.75 13.3697 15.3803 12.5569 14.7803 12C15.3803 11.4431 15.75 10.6303 15.75 9.75001C15.75 8.13664 14.5083 6.75001 12.8824 6.75001H10.4118ZM14.25 9.75001C14.25 10.6219 13.5955 11.25 12.8824 11.25H9.75001V8.88463C9.75001 8.57065 9.75136 8.39012 9.76429 8.26545C9.89503 8.25133 10.0833 8.25001 10.4118 8.25001H12.8824C13.5955 8.25001 14.25 8.8781 14.25 9.75001ZM12.8824 12.75H9.75001V15.1154C9.75001 15.4294 9.75136 15.6099 9.76429 15.7346C9.89503 15.7487 10.0833 15.75 10.4118 15.75L12.8824 15.75C13.5955 15.75 14.25 15.1219 14.25 14.25C14.25 13.3781 13.5955 12.75 12.8824 12.75Z',
  d5: 'M1.25002 12C1.25002 6.06294 6.06296 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.5191 22.75 9.10634 22.4501 7.82056 21.9071C7.48326 21.7646 7.25534 21.6686 7.08019 21.6045C6.90154 21.539 6.83692 21.5298 6.82026 21.5287C6.72635 21.5222 6.59867 21.5459 5.99264 21.7081L2.19387 22.7245C1.93512 22.7937 1.65909 22.7197 1.46969 22.5303C1.28029 22.3409 1.20627 22.0649 1.2755 21.8061L2.29192 18.0074C2.45407 17.4013 2.47783 17.2737 2.47134 17.1798C2.47018 17.1631 2.46099 17.0985 2.39557 16.9198C2.33142 16.7447 2.23539 16.5168 2.09293 16.1795C1.54989 14.8937 1.25002 13.4809 1.25002 12Z',
  d6: 'M10.3723 6.75001C10.3855 6.75001 10.3986 6.75001 10.4118 6.75001H12.8824C14.5083 6.75001 15.75 8.13664 15.75 9.75001C15.75 10.6303 15.3803 11.4431 14.7803 12C15.3803 12.5569 15.75 13.3697 15.75 14.25C15.75 15.8634 14.5083 17.25 12.8824 17.25H10.4118C10.3986 17.25 10.3855 17.25 10.3723 17.25C10.0739 17.2501 9.78119 17.2501 9.53919 17.2182C9.26642 17.1823 8.94808 17.094 8.6816 16.8327C8.4131 16.5693 8.32042 16.2513 8.28281 15.9769C8.24987 15.7366 8.24994 15.4468 8.25001 15.1555C8.25001 15.1421 8.25001 15.1288 8.25001 15.1154V8.88463C8.25001 8.87127 8.25001 8.85791 8.25001 8.84455C8.24994 8.5532 8.24987 8.26339 8.28281 8.02312C8.32042 7.74874 8.4131 7.43067 8.6816 7.16733C8.94808 6.90597 9.26642 6.81776 9.53919 6.78179C9.78119 6.74988 10.0739 6.74994 10.3723 6.75001ZM12.8824 11.25C13.5955 11.25 14.25 10.6219 14.25 9.75001C14.25 8.8781 13.5955 8.25001 12.8824 8.25001H10.4118C10.0833 8.25001 9.89503 8.25133 9.76429 8.26545C9.75136 8.39012 9.75001 8.57065 9.75001 8.88463V11.25H12.8824ZM9.75001 12.75H12.8824C13.5955 12.75 14.25 13.3781 14.25 14.25C14.25 15.1219 13.5955 15.75 12.8824 15.75H10.4118C10.0833 15.75 9.89503 15.7487 9.76429 15.7346C9.75136 15.6099 9.75001 15.4294 9.75001 15.1154V12.75Z',
  d7: 'M12 22.002C17.5239 22.002 22.002 17.5239 22.002 12C22.002 6.47607 17.5239 1.99805 12 1.99805C6.47607 1.99805 1.99805 6.47607 1.99805 12C1.99805 13.8889 2.43201 15.4979 3.34204 17.005L2.00256 21.9852C2.00056 21.9926 2.00737 21.9995 2.01481 21.9974L6.97044 20.666C8.48343 21.5862 10.0997 22.002 12 22.002Z',
  d8: 'M8.99805 12H12.782M8.99805 12V7.5166H12.782C14.02 7.5166 15.0237 8.52024 15.0237 9.7583C15.0237 10.9964 14.02 12 12.782 12M8.99805 12V16.4834H12.782C14.02 16.4834 15.0237 15.4798 15.0237 14.2417C15.0237 13.0036 14.02 12 12.782 12',
  d9: 'M12 1.25C6.06296 1.25 1.25002 6.06294 1.25002 12C1.25002 13.8443 1.71505 15.5819 2.53467 17.1001L1.2755 21.8061C1.20627 22.0649 1.28029 22.3409 1.46969 22.5303C1.65909 22.7197 1.93512 22.7937 2.19387 22.7245L6.8999 21.4653C8.41808 22.285 10.1558 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.8824 6.75L8.25 6.75L8.25 17.25H12.8824C14.5083 17.25 15.75 15.8634 15.75 14.25C15.75 13.3697 15.3803 12.5569 14.7803 12C15.3803 11.4431 15.75 10.6303 15.75 9.75C15.75 8.13663 14.5083 6.75 12.8824 6.75ZM14.25 9.75C14.25 10.6219 13.5955 11.25 12.8824 11.25H9.75V8.25H12.8824C13.5955 8.25 14.25 8.87809 14.25 9.75ZM12.8824 12.75H9.75L9.75 15.75L12.8824 15.75C13.5955 15.75 14.25 15.1219 14.25 14.25C14.25 13.3781 13.5955 12.75 12.8824 12.75Z',
} as const;

export const IconWhatsappBusinessStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-stroke-rounded IconWhatsappBusinessStrokeRounded"
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

export const IconWhatsappBusinessDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-duotone-rounded IconWhatsappBusinessDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconWhatsappBusinessTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-twotone-rounded IconWhatsappBusinessTwotoneRounded"
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

export const IconWhatsappBusinessSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-solid-rounded IconWhatsappBusinessSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappBusinessBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-bulk-rounded IconWhatsappBusinessBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWhatsappBusinessStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-stroke-sharp IconWhatsappBusinessStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWhatsappBusinessSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="whatsapp-business-solid-sharp IconWhatsappBusinessSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWhatsappBusiness: TheIconSelfPack = {
  name: 'WhatsappBusiness',
  StrokeRounded: IconWhatsappBusinessStrokeRounded,
  DuotoneRounded: IconWhatsappBusinessDuotoneRounded,
  TwotoneRounded: IconWhatsappBusinessTwotoneRounded,
  SolidRounded: IconWhatsappBusinessSolidRounded,
  BulkRounded: IconWhatsappBusinessBulkRounded,
  StrokeSharp: IconWhatsappBusinessStrokeSharp,
  SolidSharp: IconWhatsappBusinessSolidSharp,
};