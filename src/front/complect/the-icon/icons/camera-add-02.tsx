import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M11.9998 6H12.0088',
  d4: 'M8.5 14.5H15.5M12 18L12 11',
  d5: 'M2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6H7.4L7.88583 4.78543C8.26801 3.82996 8.60061 2.7461 9.58335 2.25955C10.1076 2 10.7384 2 12 2C13.2616 2 13.8924 2 14.4166 2.25955C15.3994 2.7461 15.732 3.82996 16.1142 4.78543L16.6 6H17C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z',
  d6: 'M11.9686 1.25H12.0314H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V16.0549V11.4548V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25H11.9686ZM11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V13.5H8.5C7.94772 13.5 7.5 13.9477 7.5 14.5C7.5 15.0523 7.94772 15.5 8.5 15.5H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V15.5H15.5C16.0523 15.5 16.5 15.0523 16.5 14.5C16.5 13.9477 16.0523 13.5 15.5 13.5H13V11Z',
  d7: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d8: 'M11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6Z',
  d9: 'M12 10C12.5523 10 13 10.4477 13 11L13 13.5H15.5C16.0523 13.5 16.5 13.9477 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5C7.5 13.9477 7.94772 13.5 8.5 13.5H11V11C11 10.4477 11.4477 10 12 10Z',
  d10: 'M12 6H12.009',
  d11: 'M8 14H16M12 18V10',
  d12: 'M22.0635 21.9107V6.11047C22.0635 6.05524 22.0187 6.01047 21.9635 6.01047H17.0621L15.074 2.0638C15.057 2.03007 15.0225 2.00879 14.9847 2.00879H9.09895C9.0609 2.00879 9.02615 2.03038 9.00929 2.06449L7.05978 6.01047H6.89845H2.15859C2.10337 6.01047 2.05859 6.05524 2.05859 6.11047V21.9107C2.05859 21.966 2.10337 22.0107 2.15859 22.0107H21.9635C22.0187 22.0107 22.0635 21.966 22.0635 21.9107Z',
  d13: 'M8.32866 1.6644C8.4557 1.41028 8.71541 1.24976 8.99951 1.24976H14.9995C15.2836 1.24976 15.5433 1.41026 15.6703 1.66435L17.463 5.24976H22.0005C22.4147 5.24976 22.7505 5.58554 22.7505 5.99976V22.0001C22.7505 22.4143 22.4147 22.7501 22.0005 22.7501H1.99951C1.5853 22.7501 1.24951 22.4143 1.24951 22.0001V6.00059C1.24951 5.58637 1.5853 5.25059 1.99951 5.25059H6.53594L8.32866 1.6644ZM12.9995 4.99976H10.9995V6.99976H12.9995V4.99976ZM12.9995 19.0002V16.0002H15.9995V14.0002H12.9995V11.0002H10.9995V14.0002H7.99951V16.0002H10.9995V19.0002H12.9995Z',
} as const;

export const IconCameraAdd02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-stroke-rounded IconCameraAdd02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAdd02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-duotone-rounded IconCameraAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAdd02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-twotone-rounded IconCameraAdd02TwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAdd02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-solid-rounded IconCameraAdd02SolidRounded"
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

export const IconCameraAdd02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-bulk-rounded IconCameraAdd02BulkRounded"
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

export const IconCameraAdd02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-stroke-sharp IconCameraAdd02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraAdd02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-add-02-solid-sharp IconCameraAdd02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraAdd02: TheIconSelfPack = {
  name: 'CameraAdd02',
  StrokeRounded: IconCameraAdd02StrokeRounded,
  DuotoneRounded: IconCameraAdd02DuotoneRounded,
  TwotoneRounded: IconCameraAdd02TwotoneRounded,
  SolidRounded: IconCameraAdd02SolidRounded,
  BulkRounded: IconCameraAdd02BulkRounded,
  StrokeSharp: IconCameraAdd02StrokeSharp,
  SolidSharp: IconCameraAdd02SolidSharp,
};