import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.00136 6.5H16.754C18.8613 6.5 19.9149 6.5 20.6718 7.00559C20.9995 7.22447 21.2808 7.50572 21.4997 7.83329C21.8937 8.42282 21.9808 9.19244 22 10.5M12.0027 6.5L11.3691 5.23313C10.8442 4.18358 10.3645 3.12712 9.20122 2.69101C8.69172 2.5 8.10969 2.5 6.94562 2.5C5.12865 2.5 4.22017 2.5 3.53848 2.88032C3.05255 3.15142 2.6516 3.55227 2.38042 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46487 19.0355C4.92973 20.5 7.2874 20.5 12.0027 20.5H13.5031',
  d2: 'M16 14.478C16 13.3856 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3856 20 14.478C20 14.8718 19.8837 15.2387 19.6831 15.5469C19.0854 16.4656 18 17.3416 18 18.4341V18.9286M18 21.5H18.012',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M18 13.375C17.4373 13.375 17 13.8233 17 14.353C17 14.9053 16.5523 15.353 16 15.353C15.4477 15.353 15 14.9053 15 14.353C15 12.6979 16.3536 11.375 18 11.375C19.6464 11.375 21 12.6979 21 14.353C21 14.9468 20.8239 15.5022 20.5213 15.9673C20.3402 16.2457 20.1303 16.5087 19.9437 16.7381C19.9087 16.781 19.8747 16.8227 19.8414 16.8634C19.687 17.0525 19.5499 17.2203 19.4229 17.3929C19.1066 17.8229 19 18.0957 19 18.3091V18.8036C19 19.3559 18.5523 19.8036 18 19.8036C17.4477 19.8036 17 19.3559 17 18.8036V18.3091C17 17.43 17.4361 16.7185 17.8119 16.2077C17.9719 15.9902 18.1476 15.7754 18.3027 15.5856C18.3335 15.548 18.3634 15.5114 18.3923 15.4759C18.5773 15.2485 18.7272 15.0575 18.8449 14.8766C18.9434 14.7252 19 14.5468 19 14.353C19 13.8233 18.5627 13.375 18 13.375ZM17 21.375C17 20.8227 17.4477 20.375 18 20.375H18.012C18.5643 20.375 19.012 20.8227 19.012 21.375C19.012 21.9273 18.5643 22.375 18.012 22.375H18C17.4477 22.375 17 21.9273 17 21.375Z',
  d5: 'M9.4626 1.86408C8.82373 1.62451 8.11205 1.62483 7.08264 1.62528C6.2039 1.62527 5.32205 1.62531 4.7497 1.67576C4.15996 1.72775 3.64388 1.83771 3.17258 2.10072C2.56533 2.4396 2.06428 2.94066 1.7254 3.5479C1.46238 4.01921 1.35242 4.53528 1.30044 5.12502C1.24999 5.69737 1.24999 6.4061 1.25 7.28483V10.4327C1.24999 12.7411 1.24998 14.5501 1.43975 15.9616C1.63399 17.4064 2.03933 18.5464 2.93414 19.4412C3.82895 20.336 4.96897 20.7413 6.41371 20.9356C7.82519 21.1253 9.63423 21.1253 11.9426 21.1253C11.9427 21.1253 13.9177 21.1253 14.9834 21.1187C15.2172 21.1172 15.3341 21.1165 15.4123 21.0595C15.4904 21.0025 15.535 20.8667 15.6242 20.595C15.6447 20.5325 15.6676 20.4711 15.6928 20.4109C15.7656 20.2368 15.8021 20.1498 15.8021 20.0895C15.8021 20.0293 15.7656 19.9423 15.6928 19.7682C15.5686 19.4714 15.5 19.1456 15.5 18.8038V18.3093C15.5 18.0574 15.5228 17.8167 15.5627 17.5881C15.6234 17.2404 15.6537 17.0665 15.6041 16.9748C15.5544 16.8831 15.3747 16.806 15.0153 16.6519C14.1242 16.2696 13.5 15.3843 13.5 14.3533C13.5 11.8526 15.5424 9.87524 18 9.87524C19.8745 9.87524 21.5076 11.0257 22.1769 12.6813C22.2234 12.7964 22.3332 12.8752 22.4573 12.8752C22.6183 12.8752 22.7489 12.7451 22.7493 12.5842C22.75 12.291 22.75 11.9856 22.75 11.6676C22.75 10.6486 22.75 9.74413 22.683 9.08481C22.6137 8.40425 22.4669 7.81404 22.118 7.29193C21.8444 6.88247 21.4929 6.53091 21.0834 6.25731C20.5613 5.90845 19.9711 5.7616 19.2905 5.69237C18.6312 5.6253 17.8095 5.62531 16.7905 5.62532L13.2361 5.62532C12.92 5.62532 12.7396 5.6244 12.6064 5.61063C12.5044 5.60349 12.4348 5.52787 12.4128 5.49095C12.3409 5.37802 12.0838 4.86441 11.9425 4.58168C11.4704 3.62654 10.8581 2.38737 9.4626 1.86408Z',
  d6: 'M14.9971 14C14.9971 12.6193 16.1169 11.5 17.4982 11.5C18.8796 11.5 19.9994 12.6193 19.9994 14C19.9994 15.3807 18.8796 16.5 17.4982 16.5V18.5M17.4982 20V21.5',
  d7: 'M13.9966 20.4987H2.09419C2.03893 20.4987 1.99414 20.454 1.99414 20.3987L1.99425 2.60139C1.99425 2.54616 2.03904 2.50139 2.09429 2.50139L8.96786 2.50098L12.0086 6.48288M12.0086 6.48288H6.98192M12.0086 6.48288H21.8954C21.9507 6.48288 21.9955 6.52765 21.9955 6.58288V10.9893',
  d8: 'M19.25 13.75C18.4216 13.75 17.75 14.4216 17.75 15.25H15.75C15.75 13.317 17.317 11.75 19.25 11.75C21.183 11.75 22.75 13.317 22.75 15.25C22.75 16.8355 21.6957 18.1748 20.25 18.6051V19.75H18.25V16.75H19.25C20.0784 16.75 20.75 16.0784 20.75 15.25C20.75 14.4216 20.0784 13.75 19.25 13.75ZM18.25 22.75V21.25H20.25V22.75H18.25Z',
  d9: 'M1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25L9.375 1.25001L12.375 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V11.6793C21.8481 10.7952 20.6127 10.25 19.25 10.25C16.4886 10.25 14.25 12.4886 14.25 15.25V16.75H16.75V20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967Z',
} as const;

export const IconFolderUnknownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-stroke-rounded IconFolderUnknownStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderUnknownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-duotone-rounded IconFolderUnknownDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderUnknownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-twotone-rounded IconFolderUnknownTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderUnknownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-solid-rounded IconFolderUnknownSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderUnknownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-bulk-rounded IconFolderUnknownBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderUnknownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-stroke-sharp IconFolderUnknownStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderUnknownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-unknown-solid-sharp IconFolderUnknownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFolderUnknown: TheIconSelfPack = {
  name: 'FolderUnknown',
  StrokeRounded: IconFolderUnknownStrokeRounded,
  DuotoneRounded: IconFolderUnknownDuotoneRounded,
  TwotoneRounded: IconFolderUnknownTwotoneRounded,
  SolidRounded: IconFolderUnknownSolidRounded,
  BulkRounded: IconFolderUnknownBulkRounded,
  StrokeSharp: IconFolderUnknownStrokeSharp,
  SolidSharp: IconFolderUnknownSolidSharp,
};