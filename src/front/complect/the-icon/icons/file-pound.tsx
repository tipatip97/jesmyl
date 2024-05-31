import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 15.5688C20.8438 14.623 19.8863 13.7321 18.5926 14.075C17.2384 14.4339 16.6241 16.2547 17.2384 17.3925C17.875 18.5714 18.1795 19.7143 17.3493 21.3312C17.1876 21.6461 17.1067 21.8036 17.1513 21.9018C17.1959 22 17.3386 22 17.624 22H21M16 18.1905H20.375',
  d2: 'M13.5 22L10.7273 22C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273L3 12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22282 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3013 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818L20 10.5',
  d3: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M12.5 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2H13.8182C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V14.5C20 17.7875 20 19.4312 19.092 20.5376C18.9258 20.7401 18.7401 20.9258 18.5376 21.092C17.4312 22 15.7875 22 12.5 22Z',
  d5: 'M18.0864 12.8569C20.0302 12.3417 21.4982 13.7114 21.7366 15.1543C21.8266 15.6992 21.4579 16.2139 20.913 16.304C20.3681 16.394 19.8534 16.0252 19.7634 15.4803C19.7287 15.2702 19.5968 15.0463 19.3946 14.903C19.2136 14.7748 18.9561 14.6954 18.5988 14.7901C18.3069 14.8675 18.023 15.1254 17.8612 15.5479C17.6964 15.978 17.7276 16.4051 17.8684 16.6658C17.9167 16.7553 17.9642 16.8463 18.0104 16.939H20.125C20.6773 16.939 21.125 17.3867 21.125 17.939C21.125 18.4913 20.6773 18.939 20.125 18.939H18.596C18.6335 19.5246 18.55 20.1228 18.3304 20.7485H20.75C21.3023 20.7485 21.75 21.1962 21.75 21.7485C21.75 22.3008 21.3023 22.7485 20.75 22.7485H17.374C17.365 22.7485 17.3553 22.7485 17.345 22.7485C17.2338 22.7488 17.0496 22.7492 16.8898 22.7237C16.7009 22.6936 16.2238 22.5767 15.9909 22.0639C15.7872 21.6157 15.945 21.2037 15.9888 21.0894C16.0438 20.9457 16.1278 20.7822 16.1951 20.6513C16.2001 20.6416 16.2049 20.6322 16.2097 20.6229C16.5539 19.9525 16.6316 19.4479 16.5972 19.0275C16.5948 18.998 16.5918 18.9685 16.5882 18.939H15.75C15.1977 18.939 14.75 18.4913 14.75 17.939C14.75 17.3867 15.1977 16.939 15.75 16.939H15.8467C15.6685 16.2308 15.7471 15.4756 15.9935 14.8324C16.3238 13.9703 17.0241 13.1384 18.0864 12.8569Z',
  d6: 'M10.6839 22.75C9.09005 22.7501 7.83489 22.7501 6.83912 22.6463C5.82238 22.5403 4.98632 22.3192 4.2711 21.8153C3.8893 21.5463 3.54882 21.2262 3.26073 20.864C2.71584 20.179 2.47549 19.3734 2.3611 18.4012C2.24998 17.4568 2.24999 16.2693 2.25 14.7754V12.1543C2.25 10.6959 2.25 9.56438 2.31024 8.65102C2.37131 7.72522 2.49655 6.97179 2.77169 6.27748C3.60981 4.16259 5.37464 2.5114 7.58994 1.73373C8.96882 1.24969 10.6607 1.24982 13.6261 1.25004L13.9888 1.25002C15.624 1.24968 16.643 1.24947 17.4836 1.54458C18.8327 2.01816 19.9143 3.02627 20.4293 4.32588C20.6039 4.76661 20.6789 5.23452 20.7149 5.77945C20.75 6.31198 20.75 6.96761 20.75 7.79187V9.99905C20.75 10.5519 20.3019 11 19.7491 11C19.1969 11 18.7491 10.553 18.7481 10.0008L18.7463 8C18.7275 5.98374 18.6096 4.86713 17.8712 4.12873C16.9925 3.25005 15.5783 3.25005 12.7499 3.25005H12.4555C11.9509 3.25005 11.6985 3.25005 11.3592 3.43819C11.0199 3.62634 10.949 3.73982 10.8072 3.96679C10.5596 4.36319 10.4166 4.83157 10.4166 5.33338C10.4166 5.48051 10.423 5.63869 10.4313 5.81629L10.4344 5.88216C10.4416 6.03706 10.4496 6.20563 10.4531 6.37374C10.4609 6.75384 10.4489 7.19738 10.3342 7.62552C10.1108 8.4595 9.45935 9.1109 8.62538 9.33437C8.19723 9.44909 7.75369 9.46109 7.3736 9.4532C7.20546 9.44971 7.03687 9.44178 6.88195 9.4345L6.81614 9.43142C6.63854 9.42319 6.48036 9.41671 6.33323 9.41671C5.85217 9.41671 5.40182 9.5482 5.01616 9.77721C4.78124 9.9167 4.66378 9.98644 4.46739 10.3315C4.271 10.6765 4.271 10.9343 4.271 11.4501V14.7501C4.271 17.5785 4.271 18.9927 5.14968 19.8714C6.02836 20.7501 7.44257 20.7501 10.271 20.7501L13.0008 20.7501C13.5526 20.7501 14 21.1974 14 21.7493C14 22.3007 13.5533 22.7479 13.0019 22.7485L10.6839 22.75Z',
  d7: 'M20 15.5688C19.8438 14.623 18.8863 13.7321 17.5926 14.075C16.2384 14.4339 15.6241 16.2547 16.2384 17.3925C16.875 18.5714 17.5 20 16 22H21M14 18.1905H19',
  d8: 'M10 2V9H3',
  d9: 'M19.9677 10.9817V2.00999C19.9677 2.00447 19.9633 2 19.9577 2L9.95655 2.00029L3 8.98462V21.9861C3 21.9916 3.00448 21.9961 3.01 21.9961H12.9804',
  d10: 'M18.0864 12.8583C20.0302 12.3431 21.4982 13.7128 21.7366 15.1558L19.7634 15.4818C19.7287 15.2716 19.5968 15.0478 19.3946 14.9045C19.2136 14.7762 18.9561 14.6969 18.5988 14.7916C18.3069 14.8689 18.023 15.1269 17.8612 15.5494C17.6964 15.9795 17.7276 16.4066 17.8684 16.6673C17.9151 16.7539 17.9637 16.845 18.0128 16.9404H19.75V18.9404H18.6576C18.6619 18.9847 18.6655 19.0294 18.6684 19.0744C18.7031 19.6163 18.6321 20.1742 18.4305 20.75H21.75V22.75H14.75L15.95 21.15C16.5814 20.3081 16.7032 19.6813 16.6725 19.2022C16.6668 19.1142 16.6559 19.0271 16.6401 18.9404H14.75V16.9404H15.8467C15.6685 16.2323 15.7471 15.4771 15.9935 14.8339C16.3238 13.9718 17.0241 13.1399 18.0864 12.8583Z',
  d11: 'M19.7763 1.25C20.3141 1.25 20.75 1.68754 20.75 2.22727V11.0682H18.8026V3.20455L11.0132 3.20455L11.0132 10.0455H4.19737L4.19737 20.7955H12.9605V22.75H3.22368C2.68593 22.75 2.25 22.3125 2.25 21.7727V8.66338L9.63616 1.25H19.7763Z',
} as const;

export const IconFilePoundStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-stroke-rounded IconFilePoundStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFilePoundDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-duotone-rounded IconFilePoundDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconFilePoundTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-twotone-rounded IconFilePoundTwotoneRounded"
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

export const IconFilePoundSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-solid-rounded IconFilePoundSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePoundBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-bulk-rounded IconFilePoundBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePoundStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-stroke-sharp IconFilePoundStrokeSharp"
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePoundSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pound-solid-sharp IconFilePoundSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFilePound: TheIconSelfPack = {
  name: 'FilePound',
  StrokeRounded: IconFilePoundStrokeRounded,
  DuotoneRounded: IconFilePoundDuotoneRounded,
  TwotoneRounded: IconFilePoundTwotoneRounded,
  SolidRounded: IconFilePoundSolidRounded,
  BulkRounded: IconFilePoundBulkRounded,
  StrokeSharp: IconFilePoundStrokeSharp,
  SolidSharp: IconFilePoundSolidSharp,
};