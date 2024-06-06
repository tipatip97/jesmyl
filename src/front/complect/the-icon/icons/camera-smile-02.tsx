import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M9 12H9.00898M15 12H15.009M10.0002 16C10.0002 16 10.7502 17 12.0002 17C13.2502 17 14.0002 16 14.0002 16',
  d4: 'M2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6H7.4L7.88583 4.78543C8.26801 3.82996 8.60061 2.7461 9.58335 2.25955C10.1076 2 10.7384 2 12 2C13.2616 2 13.8924 2 14.4166 2.25955C15.3994 2.7461 15.732 3.82996 16.1142 4.78543L16.6 6H17C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z',
  d5: 'M12.0314 1.25H11.9686H11.9686C11.3645 1.24999 10.8644 1.24998 10.4515 1.28515C10.0188 1.32201 9.62775 1.40069 9.25059 1.58742C8.57866 1.92009 8.15388 2.44877 7.85567 2.979C7.62451 3.39004 7.44502 3.85184 7.2929 4.2432C7.25701 4.33554 7.22264 4.42397 7.18947 4.50689L7.0431 4.87283C6.97009 5.05536 6.93358 5.14662 6.85754 5.19819C6.7815 5.24975 6.68297 5.24991 6.48592 5.25022C5.60137 5.2516 4.93626 5.26171 4.40786 5.33452C3.72467 5.42866 3.23063 5.63092 2.71715 6.02493C2.45715 6.22443 2.22443 6.45715 2.02493 6.71715C1.59808 7.27343 1.41725 7.92195 1.33222 8.67622C1.24998 9.4057 1.24999 10.3204 1.25 11.4548V11.4548V16.0549V16.0549C1.24998 17.4225 1.24997 18.5248 1.36653 19.3918C1.48754 20.2919 1.74644 21.0497 2.34835 21.6517C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6517C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V11.4548C22.75 10.3204 22.75 9.40571 22.6678 8.67622C22.5828 7.92195 22.4019 7.27343 21.9751 6.71715C21.7756 6.45715 21.5429 6.22443 21.2829 6.02493C20.7694 5.63092 20.2753 5.42866 19.5921 5.33452C19.0637 5.26171 18.3986 5.2516 17.5141 5.25022C17.317 5.24991 17.2185 5.24975 17.1425 5.19819C17.0664 5.14662 17.0299 5.05536 16.9569 4.87283L16.8105 4.50689C16.7774 4.42396 16.743 4.33553 16.7071 4.24318C16.555 3.85182 16.3755 3.39004 16.1443 2.979C15.8461 2.44877 15.4214 1.92009 14.7494 1.58742C14.3723 1.40069 13.9812 1.32201 13.5485 1.28515C13.1356 1.24998 12.6355 1.24999 12.0314 1.25H12.0314ZM9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5H9.00897C9.56125 12.5 10.009 12.0523 10.009 11.5C10.009 10.9477 9.56125 10.5 9.00897 10.5H9ZM14.991 10.5C14.4387 10.5 13.991 10.9477 13.991 11.5C13.991 12.0523 14.4387 12.5 14.991 12.5H15C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5H14.991ZM10.288 14.7532C9.87701 14.3871 9.24699 14.422 8.8789 14.8318C8.50989 15.2428 8.54386 15.875 8.95477 16.244L8.95662 16.2457L8.95889 16.2477L8.96471 16.2529L8.98135 16.2674C8.99463 16.2789 9.01231 16.294 9.03413 16.3121C9.07772 16.3483 9.13822 16.397 9.21369 16.4541C9.36378 16.5675 9.57762 16.7172 9.83935 16.8674C10.345 17.1575 11.1165 17.5 11.9951 17.5C12.8736 17.5 13.6451 17.1575 14.1508 16.8674L14.1536 16.8657C14.4151 16.7157 14.7723 16.5107 15.0353 16.244C15.4463 15.875 15.4802 15.2428 15.1112 14.8318C14.7431 14.422 14.1131 14.3871 13.7021 14.7532L13.7005 14.7547L13.6975 14.7573L13.6778 14.7738C13.6556 14.7923 13.6192 14.8217 13.5706 14.8584C13.4726 14.9325 13.3294 15.0328 13.1554 15.1326C12.7896 15.3425 12.3751 15.5 11.9951 15.5C11.615 15.5 11.2005 15.3425 10.8347 15.1326C10.6607 15.0328 10.5175 14.9325 10.4195 14.8584C10.3709 14.8217 10.3346 14.7923 10.3123 14.7738C10.3013 14.7646 10.2938 14.7582 10.2901 14.7551L10.288 14.7532Z',
  d6: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d7: 'M8 11.5C8 10.9477 8.44772 10.5 9 10.5H9.00897C9.56125 10.5 10.009 10.9477 10.009 11.5C10.009 12.0523 9.56125 12.5 9.00897 12.5H9C8.44772 12.5 8 12.0523 8 11.5ZM13.991 11.5C13.991 10.9477 14.4387 10.5 14.991 10.5H15C15.5523 10.5 16 10.9477 16 11.5C16 12.0523 15.5523 12.5 15 12.5H14.991C14.4387 12.5 13.991 12.0523 13.991 11.5Z',
  d8: 'M8.8789 14.8318C9.24699 14.422 9.87701 14.3871 10.288 14.7532L10.2901 14.7551C10.2938 14.7582 10.3013 14.7646 10.3123 14.7738C10.3346 14.7923 10.3709 14.8217 10.4195 14.8584C10.5175 14.9325 10.6607 15.0328 10.8347 15.1326C11.2005 15.3425 11.615 15.5 11.9951 15.5C12.3751 15.5 12.7896 15.3425 13.1554 15.1326C13.3294 15.0328 13.4726 14.9325 13.5706 14.8584C13.6192 14.8217 13.6556 14.7923 13.6778 14.7738C13.6889 14.7646 13.6968 14.7578 13.7005 14.7547L13.7021 14.7532C14.1131 14.3871 14.7431 14.422 15.1112 14.8318C15.4802 15.2428 15.4463 15.875 15.0353 16.244C14.7723 16.5107 14.4151 16.7157 14.1536 16.8657L14.1508 16.8674C13.6451 17.1575 12.8736 17.5 11.9951 17.5C11.1165 17.5 10.345 17.1575 9.83935 16.8674C9.57762 16.7172 9.36378 16.5675 9.21369 16.4541C9.13822 16.397 9.07772 16.3483 9.03413 16.3121C9.01231 16.294 8.99463 16.2789 8.98135 16.2674L8.96471 16.2529L8.95889 16.2477L8.95662 16.2457L8.95477 16.244C8.54386 15.875 8.50989 15.2428 8.8789 14.8318Z',
  d9: 'M9 12H9.00897M14.991 12H15',
  d10: 'M9 15.5C9 15.5 10.125 17 12 17C13.875 17 15 15.5 15 15.5',
  d11: 'M22.0635 21.9107V6.11047C22.0635 6.05524 22.0187 6.01047 21.9635 6.01047H17.0621L15.074 2.0638C15.057 2.03007 15.0225 2.00879 14.9847 2.00879H9.09895C9.0609 2.00879 9.02615 2.03038 9.00929 2.06449L7.05978 6.01047H6.89845H2.15859C2.10337 6.01047 2.05859 6.05524 2.05859 6.11047V21.9107C2.05859 21.966 2.10337 22.0107 2.15859 22.0107H21.9635C22.0187 22.0107 22.0635 21.966 22.0635 21.9107Z',
  d12: 'M8.99951 1.24976C8.71541 1.24976 8.4557 1.41028 8.32866 1.6644L6.53594 5.25059H1.99951C1.5853 5.25059 1.24951 5.58637 1.24951 6.00059V22.0001C1.24951 22.4143 1.5853 22.7501 1.99951 22.7501H22.0005C22.4147 22.7501 22.7505 22.4143 22.7505 22.0001V5.99976C22.7505 5.58554 22.4147 5.24976 22.0005 5.24976H17.463L15.6703 1.66435C15.5433 1.41026 15.2836 1.24976 14.9995 1.24976H8.99951ZM7.99951 9.99976H10.0085V11.9998H7.99951V9.99976ZM13.9905 9.99976H15.9995V11.9998H13.9905V9.99976ZM10.3876 15.441C10.1869 15.2951 10.032 15.1491 9.92961 15.0422L8.28857 16.2071C8.33574 16.2633 8.40165 16.3384 8.48564 16.426C8.65279 16.6005 8.89629 16.8294 9.21125 17.0585C9.83731 17.5138 10.7895 17.9998 12.0025 17.9998C13.2156 17.9998 14.1678 17.5138 14.7938 17.0585C15.1088 16.8294 15.3523 16.6005 15.5195 16.426C15.6034 16.3384 15.6693 16.2633 15.7165 16.2071L14.0755 15.0422C13.9731 15.1491 13.8182 15.2951 13.6175 15.441C13.2123 15.7357 12.6645 15.9998 12.0025 15.9998C11.3406 15.9998 10.7928 15.7357 10.3876 15.441Z',
} as const;

export const IconCameraSmile02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-stroke-rounded IconCameraSmile02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCameraSmile02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-duotone-rounded IconCameraSmile02DuotoneRounded"
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

export const IconCameraSmile02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-twotone-rounded IconCameraSmile02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCameraSmile02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-solid-rounded IconCameraSmile02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-bulk-rounded IconCameraSmile02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraSmile02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-stroke-sharp IconCameraSmile02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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

export const IconCameraSmile02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-smile-02-solid-sharp IconCameraSmile02SolidSharp"
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

export const iconPackOfCameraSmile02: TheIconSelfPack = {
  name: 'CameraSmile02',
  StrokeRounded: IconCameraSmile02StrokeRounded,
  DuotoneRounded: IconCameraSmile02DuotoneRounded,
  TwotoneRounded: IconCameraSmile02TwotoneRounded,
  SolidRounded: IconCameraSmile02SolidRounded,
  BulkRounded: IconCameraSmile02BulkRounded,
  StrokeSharp: IconCameraSmile02StrokeSharp,
  SolidSharp: IconCameraSmile02SolidSharp,
};