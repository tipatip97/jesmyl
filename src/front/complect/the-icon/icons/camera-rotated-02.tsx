import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6',
  d2: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d3: 'M14.4868 10L14.9861 12.0844L14.1566 11.5661C13.5657 11.1173 12.8313 10.8512 12.0354 10.8512C10.0828 10.8512 8.5 12.4515 8.5 14.4256C8.5 16.3997 10.0828 18 12.0354 18C13.7457 18 15.1724 16.772 15.5 15.1405',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6H7.4L7.88583 4.78543C8.26801 3.82996 8.60061 2.7461 9.58335 2.25955C10.1076 2 10.7384 2 12 2C13.2616 2 13.8924 2 14.4166 2.25955C15.3994 2.7461 15.732 3.82996 16.1142 4.78543L16.6 6H17C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z',
  d6: 'M11.9686 1.25H12.0314H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V16.0549V11.4548V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25H11.9686ZM11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6ZM13.7573 10.1749C13.6608 9.77209 13.9091 9.36731 14.3119 9.27081C14.7147 9.17431 15.1195 9.42262 15.216 9.82544L15.7153 11.9098C15.7863 12.2059 15.6712 12.5155 15.424 12.6933C15.1769 12.8711 14.8468 12.8819 14.5886 12.7206L13.759 12.2023C13.7397 12.1902 13.721 12.1773 13.7028 12.1635C13.2372 11.8099 12.6609 11.6014 12.0352 11.6014C10.5046 11.6014 9.24985 12.8581 9.24985 14.4258C9.24985 15.9934 10.5046 17.2502 12.0352 17.2502C13.3757 17.2502 14.5048 16.2867 14.7645 14.993C14.8461 14.5869 15.2414 14.3238 15.6475 14.4053C16.0536 14.4869 16.3167 14.8822 16.2352 15.2883C15.8398 17.2576 14.1155 18.7502 12.0352 18.7502C9.66073 18.7502 7.74986 16.8063 7.74986 14.4258C7.74986 12.0453 9.66073 10.1014 12.0352 10.1014C12.6779 10.1014 13.288 10.2446 13.8353 10.5006L13.7573 10.1749Z',
  d7: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4214 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L16.9569 4.87283C17.0299 5.05536 17.0664 5.14662 17.1425 5.19819C17.2185 5.24975 17.317 5.24991 17.5141 5.25022C18.3986 5.2516 19.0637 5.26171 19.5921 5.33452C20.2753 5.42866 20.7694 5.63092 21.2829 6.02493C21.5429 6.22443 21.7756 6.45715 21.9751 6.71715C22.4019 7.27343 22.5828 7.92195 22.6678 8.67622C22.75 9.40571 22.75 10.3204 22.75 11.4548V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24997 18.5248 1.24998 17.4225 1.25 16.0549V11.4548C1.24999 10.3204 1.24998 9.4057 1.33222 8.67622C1.41725 7.92195 1.59808 7.27343 2.02493 6.71715C2.22443 6.45715 2.45715 6.22443 2.71715 6.02493C3.23063 5.63092 3.72467 5.42866 4.40786 5.33452C4.93626 5.26171 5.60137 5.2516 6.48592 5.25022C6.68297 5.24991 6.7815 5.24975 6.85754 5.19819C6.93358 5.14662 6.97009 5.05536 7.0431 4.87283L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d8: 'M11 6C11 5.44772 11.4457 5 11.9955 5C12.5433 5 13 5.44981 13 6C13 6.55228 12.5543 7 12.0045 7C11.4567 7 11 6.55019 11 6Z',
  d9: 'M14.3119 9.27081C13.9091 9.36731 13.6608 9.77209 13.7573 10.1749L13.8353 10.5006C13.288 10.2446 12.6779 10.1014 12.0352 10.1014C9.66073 10.1014 7.74986 12.0453 7.74986 14.4258C7.74986 16.8063 9.66073 18.7502 12.0352 18.7502C14.1155 18.7502 15.8398 17.2576 16.2352 15.2883C16.3167 14.8822 16.0536 14.4869 15.6475 14.4053C15.2414 14.3238 14.8461 14.5869 14.7645 14.993C14.5048 16.2867 13.3757 17.2502 12.0352 17.2502C10.5046 17.2502 9.24985 15.9934 9.24985 14.4258C9.24985 12.8581 10.5046 11.6014 12.0352 11.6014C12.6609 11.6014 13.2372 11.8099 13.7028 12.1635C13.721 12.1773 13.7397 12.1902 13.759 12.2023L14.5886 12.7206C14.8468 12.8819 15.1769 12.8711 15.424 12.6933C15.6712 12.5155 15.7863 12.2059 15.7153 11.9098L15.216 9.82544C15.1195 9.42262 14.7147 9.17431 14.3119 9.27081Z',
  d10: 'M12 6H12.009',
  d11: 'M14.9861 10V12.0844L14.1566 11.5661C13.5657 11.1173 12.8313 10.8512 12.0354 10.8512C10.0828 10.8512 8.5 12.4515 8.5 14.4256C8.5 16.3997 10.0828 18 12.0354 18C13.7457 18 15.1724 16.772 15.5 15.1405',
  d12: 'M22.0635 21.9107V6.11047C22.0635 6.05524 22.0187 6.01047 21.9635 6.01047H17.0621L15.074 2.0638C15.057 2.03007 15.0225 2.00879 14.9847 2.00879H9.09895C9.0609 2.00879 9.02615 2.03038 9.00929 2.06449L7.05978 6.01047H6.89845H2.15859C2.10337 6.01047 2.05859 6.05524 2.05859 6.11047V21.9107C2.05859 21.966 2.10337 22.0107 2.15859 22.0107H21.9635C22.0187 22.0107 22.0635 21.966 22.0635 21.9107Z',
  d13: 'M8.32866 1.66452C8.4557 1.4104 8.71541 1.24988 8.99951 1.24988H14.9995C15.2836 1.24988 15.5433 1.41038 15.6703 1.66447L17.463 5.24988H22.0005C22.4147 5.24988 22.7505 5.58566 22.7505 5.99988V22.0002C22.7505 22.4144 22.4147 22.7502 22.0005 22.7502H1.99951C1.5853 22.7502 1.24951 22.4144 1.24951 22.0002V6.00071C1.24951 5.5865 1.5853 5.25071 1.99951 5.25071H6.53594L8.32866 1.66452ZM12.9995 4.99988H10.9995V6.99988H12.9995V4.99988ZM15.7347 9.99988V12.0842C15.7347 12.3569 15.5868 12.608 15.3483 12.7402C15.1099 12.8724 14.8185 12.8648 14.5873 12.7203L13.7577 12.202C13.7384 12.1899 13.7197 12.177 13.7015 12.1632C13.2359 11.8096 12.6596 11.6011 12.0339 11.6011C10.5034 11.6011 9.24856 12.8578 9.24856 14.4255C9.24856 15.9931 10.5034 17.2499 12.0339 17.2499C13.3744 17.2499 14.5035 16.2864 14.7632 14.9927L16.2339 15.288C15.8385 17.2574 14.1142 18.7499 12.0339 18.7499C9.65944 18.7499 7.74856 16.806 7.74856 14.4255C7.74856 12.045 9.65944 10.1011 12.0339 10.1011C12.8383 10.1011 13.5917 10.3254 14.2347 10.7145V9.99988H15.7347Z',
} as const;

export const IconCameraRotated02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-stroke-rounded IconCameraRotated02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraRotated02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-duotone-rounded IconCameraRotated02DuotoneRounded"
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
        d={d.d4} 
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

export const IconCameraRotated02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-twotone-rounded IconCameraRotated02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraRotated02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-solid-rounded IconCameraRotated02SolidRounded"
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

export const IconCameraRotated02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-bulk-rounded IconCameraRotated02BulkRounded"
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

export const IconCameraRotated02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-stroke-sharp IconCameraRotated02StrokeSharp"
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

export const IconCameraRotated02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-rotated-02-solid-sharp IconCameraRotated02SolidSharp"
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

export const iconPackOfCameraRotated02: TheIconSelfPack = {
  name: 'CameraRotated02',
  StrokeRounded: IconCameraRotated02StrokeRounded,
  DuotoneRounded: IconCameraRotated02DuotoneRounded,
  TwotoneRounded: IconCameraRotated02TwotoneRounded,
  SolidRounded: IconCameraRotated02SolidRounded,
  BulkRounded: IconCameraRotated02BulkRounded,
  StrokeSharp: IconCameraRotated02StrokeSharp,
  SolidSharp: IconCameraRotated02SolidSharp,
};