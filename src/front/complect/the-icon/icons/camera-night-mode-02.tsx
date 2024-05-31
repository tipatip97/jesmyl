import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M11.9998 6.5H12.0088',
  d4: 'M12.1195 18C10.1205 18 8.5 16.4197 8.5 14.4702C8.5 12.7426 9.77269 11.3048 11.4536 11C11.2992 11.3925 11.2146 11.8186 11.2146 12.2641C11.2146 14.2135 12.8351 15.7939 14.8341 15.7939C15.0616 15.7939 15.2842 15.7734 15.5 15.7343C14.9787 17.0594 13.6617 18 12.1195 18Z',
  d5: 'M2 11.5V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V11.5C22 9.15442 22 7.98164 21.3801 7.17372C21.2205 6.96572 21.0343 6.77954 20.8263 6.61994C20.0184 6 19.3456 6 17 6H16.6L16.1142 4.78543C16.0754 4.68856 16.0372 4.59037 15.9987 4.49162C15.6579 3.61633 15.2998 2.69677 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.70024 2.69677 8.34214 3.61633 8.00127 4.49162C7.96281 4.59037 7.92458 4.68856 7.88583 4.78543L7.4 6H7C4.65442 6 3.98164 6 3.17372 6.61994C2.96572 6.77954 2.77954 6.96572 2.61994 7.17372C2 7.98164 2 9.15442 2 11.5ZM8.5 14.4702C8.5 16.4197 10.1205 18 12.1195 18C13.6617 18 14.9787 17.0594 15.5 15.7343C15.2842 15.7734 15.0616 15.7939 14.8341 15.7939C12.8351 15.7939 11.2146 14.2135 11.2146 12.2641C11.2146 11.8186 11.2992 11.3925 11.4536 11C9.77269 11.3048 8.5 12.7426 8.5 14.4702Z',
  d6: 'M11.9686 1.25H12.0314H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V16.0549V11.4548V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25H11.9686ZM11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6ZM11.3198 10.2621C11.5875 10.2135 11.8605 10.3137 12.0332 10.524C12.2059 10.7342 12.2512 11.0214 12.1516 11.2746C12.0309 11.5813 11.9646 11.9144 11.9646 12.2641C11.9646 13.7817 13.2315 15.0439 14.8341 15.0439C15.0165 15.0439 15.1943 15.0275 15.3662 14.9963C15.6339 14.9478 15.9068 15.048 16.0795 15.2582C16.2522 15.4684 16.2975 15.7557 16.1979 16.0089C15.5642 17.6197 13.9711 18.75 12.1195 18.75C9.72414 18.75 7.74999 16.8515 7.74999 14.4702C7.74999 12.3604 9.30176 10.628 11.3198 10.2621Z',
  d7: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d8: 'M11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6Z',
  d9: 'M12.0332 10.524C11.8605 10.3137 11.5875 10.2135 11.3198 10.2621C9.30176 10.628 7.74999 12.3604 7.74999 14.4702C7.74999 16.8515 9.72414 18.75 12.1195 18.75C13.9711 18.75 15.5642 17.6197 16.1979 16.0089C16.2975 15.7557 16.2522 15.4684 16.0795 15.2582C15.9068 15.048 15.6339 14.9478 15.3662 14.9963C15.1943 15.0275 15.0165 15.0439 14.8341 15.0439C13.2315 15.0439 11.9646 13.7817 11.9646 12.2641C11.9646 11.9144 12.0309 11.5813 12.1516 11.2746C12.2512 11.0214 12.2059 10.7342 12.0332 10.524Z',
  d10: 'M12 6H12.009',
  d11: 'M22.0635 21.9107V6.11047C22.0635 6.05524 22.0187 6.01047 21.9635 6.01047H17.0621L15.074 2.0638C15.057 2.03007 15.0225 2.00879 14.9847 2.00879H9.09895C9.0609 2.00879 9.02615 2.03038 9.00929 2.06449L7.05978 6.01047H6.89845H2.15859C2.10337 6.01047 2.05859 6.05524 2.05859 6.11047V21.9107C2.05859 21.966 2.10337 22.0107 2.15859 22.0107H21.9635C22.0187 22.0107 22.0635 21.966 22.0635 21.9107Z',
  d12: 'M8.32866 1.66452C8.4557 1.4104 8.71541 1.24988 8.99951 1.24988H14.9995C15.2836 1.24988 15.5433 1.41038 15.6703 1.66447L17.463 5.24988H22.0005C22.4147 5.24988 22.7505 5.58566 22.7505 5.99988V22.0002C22.7505 22.4144 22.4147 22.7502 22.0005 22.7502H1.99951C1.5853 22.7502 1.24951 22.4144 1.24951 22.0002V6.00071C1.24951 5.5865 1.5853 5.25071 1.99951 5.25071H6.53594L8.32866 1.66452ZM12.9995 4.99988H10.9995V6.99988H12.9995V4.99988ZM7.99951 14.4658C7.99951 16.6938 9.85152 18.4999 12.1361 18.4999C13.8986 18.4999 15.4037 17.4249 15.9995 15.9105C15.7528 15.9552 15.4985 15.9786 15.2385 15.9786C12.954 15.9786 11.1019 14.1725 11.1019 11.9445C11.1019 11.4355 11.1986 10.9484 11.3751 10.4999C9.45402 10.8483 7.99951 12.4914 7.99951 14.4658Z',
} as const;

export const IconCameraNightMode02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-stroke-rounded IconCameraNightMode02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-duotone-rounded IconCameraNightMode02DuotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-twotone-rounded IconCameraNightMode02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-solid-rounded IconCameraNightMode02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-bulk-rounded IconCameraNightMode02BulkRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-stroke-sharp IconCameraNightMode02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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

export const IconCameraNightMode02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-02-solid-sharp IconCameraNightMode02SolidSharp"
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

export const iconPackOfCameraNightMode02: TheIconSelfPack = {
  name: 'CameraNightMode02',
  StrokeRounded: IconCameraNightMode02StrokeRounded,
  DuotoneRounded: IconCameraNightMode02DuotoneRounded,
  TwotoneRounded: IconCameraNightMode02TwotoneRounded,
  SolidRounded: IconCameraNightMode02SolidRounded,
  BulkRounded: IconCameraNightMode02BulkRounded,
  StrokeSharp: IconCameraNightMode02StrokeSharp,
  SolidSharp: IconCameraNightMode02SolidSharp,
};