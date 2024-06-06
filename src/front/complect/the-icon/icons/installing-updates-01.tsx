import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 10.75C15 12.4069 13.6569 13.75 12 13.75C10.3431 13.75 9 12.4069 9 10.75C9 9.09315 10.3431 7.75 12 7.75C13.6569 7.75 15 9.09315 15 10.75Z',
  d2: 'M20.0684 6.49188L19.6381 5.74236C19.3127 5.17551 19.1499 4.89208 18.8731 4.77906C18.5962 4.66604 18.2831 4.75522 17.6569 4.93359L16.5931 5.23432C16.1933 5.32686 15.7738 5.27437 15.4087 5.08611L15.1151 4.91603C14.802 4.71479 14.5612 4.41808 14.4279 4.06931L14.1368 3.1966C13.9454 2.61908 13.8497 2.33033 13.6218 2.16516C13.3939 2 13.0913 2 12.4859 2H11.5141C10.9087 2 10.6061 2 10.3782 2.16516C10.1503 2.33033 10.0546 2.61908 9.8632 3.1966L9.57206 4.06931C9.43878 4.41808 9.198 4.71479 8.88495 4.91603L8.59126 5.08611C8.2262 5.27437 7.80673 5.32686 7.40693 5.23432L6.34313 4.93359C5.71689 4.75522 5.40377 4.66604 5.12691 4.77906C4.85005 4.89208 4.68734 5.17551 4.3619 5.74236L3.93159 6.49188C3.62655 7.02323 3.47402 7.2889 3.50362 7.57172C3.53323 7.85453 3.73741 8.08244 4.14579 8.53827L5.04464 9.54689C5.26433 9.82603 5.4203 10.3125 5.4203 10.7499C5.4203 11.1875 5.26438 11.6738 5.04467 11.953L4.14579 12.9617C3.73742 13.4175 3.53323 13.6454 3.50363 13.9282C3.47402 14.211 3.62655 14.4767 3.9316 15.008L4.36189 15.7575C4.68732 16.3244 4.85005 16.6078 5.12691 16.7209C5.40378 16.8339 5.7169 16.7447 6.34315 16.5663L7.40689 16.2656C7.80677 16.173 8.22631 16.2255 8.59142 16.4139L8.88506 16.584C9.19804 16.7852 9.43878 17.0819 9.57204 17.4306L9.8632 18.3034C10.0546 18.8809 10.1503 19.1697 10.3782 19.3348C10.6061 19.5 10.9087 19.5 11.5141 19.5H12.4859C13.0913 19.5 13.3939 19.5 13.6218 19.3348C13.8497 19.1697 13.9454 18.8809 14.1368 18.3034L14.428 17.4306C14.5612 17.0819 14.802 16.7852 15.1149 16.584L15.4086 16.4139C15.7737 16.2255 16.1932 16.173 16.5931 16.2656L17.6569 16.5663C18.2831 16.7447 18.5962 16.8339 18.8731 16.7209C19.15 16.6078 19.3127 16.3244 19.6381 15.7575L20.0684 15.008C20.3735 14.4767 20.526 14.211 20.4964 13.9282C20.4668 13.6454 20.2626 13.4175 19.8542 12.9617L18.9553 11.953C18.7356 11.6738 18.5797 11.1875 18.5797 10.7499C18.5797 10.3125 18.7357 9.82603 18.9554 9.54689L19.8542 8.53827C20.2626 8.08244 20.4668 7.85453 20.4964 7.57172C20.526 7.2889 20.3735 7.02323 20.0684 6.49188Z',
  d3: 'M22 18C22 18.93 22 19.395 21.8978 19.7765C21.6204 20.8117 20.8117 21.6204 19.7765 21.8978C19.395 22 18.93 22 18 22H6C5.07003 22 4.60504 22 4.22354 21.8978C3.18827 21.6204 2.37962 20.8117 2.10222 19.7765C2 19.395 2 18.93 2 18',
  d4: 'M19.6381 5.74236L20.0684 6.49188C20.3735 7.02323 20.526 7.2889 20.4964 7.57172C20.4668 7.85453 20.2626 8.08244 19.8542 8.53827L18.9554 9.54689C18.7357 9.82603 18.5797 10.3125 18.5797 10.7499C18.5797 11.1875 18.7356 11.6738 18.9553 11.953L19.8542 12.9617C20.2626 13.4175 20.4668 13.6454 20.4964 13.9282C20.526 14.211 20.3735 14.4767 20.0684 15.008L19.6381 15.7575C19.3127 16.3244 19.15 16.6078 18.8731 16.7209C18.5962 16.8339 18.2831 16.7447 17.6569 16.5663L16.5931 16.2656C16.1932 16.173 15.7737 16.2255 15.4086 16.4139L15.1149 16.584C14.802 16.7852 14.5612 17.0819 14.428 17.4306L14.1368 18.3034C13.9454 18.8809 13.8497 19.1697 13.6218 19.3348C13.3939 19.5 13.0913 19.5 12.4859 19.5H11.5141C10.9087 19.5 10.6061 19.5 10.3782 19.3348C10.1503 19.1697 10.0546 18.8809 9.8632 18.3034L9.57204 17.4306C9.43878 17.0819 9.19804 16.7852 8.88506 16.584L8.59142 16.4139C8.22631 16.2255 7.80677 16.173 7.40689 16.2656L6.34315 16.5663C5.7169 16.7447 5.40378 16.8339 5.12691 16.7209C4.85005 16.6078 4.68732 16.3244 4.36189 15.7575L3.9316 15.008C3.62655 14.4767 3.47402 14.211 3.50363 13.9282C3.53323 13.6454 3.73742 13.4175 4.14579 12.9617L5.04467 11.953C5.26438 11.6738 5.4203 11.1875 5.4203 10.7499C5.4203 10.3125 5.26433 9.82603 5.04464 9.54689L4.14579 8.53827C3.73741 8.08244 3.53323 7.85453 3.50362 7.57172C3.47402 7.2889 3.62655 7.02323 3.93159 6.49188L4.3619 5.74236C4.68734 5.17551 4.85005 4.89208 5.12691 4.77906C5.40377 4.66604 5.71689 4.75522 6.34313 4.93359L7.40693 5.23432C7.80673 5.32686 8.2262 5.27437 8.59126 5.08611L8.88495 4.91603C9.198 4.71479 9.43878 4.41808 9.57206 4.06931L9.8632 3.1966C10.0546 2.61908 10.1503 2.33033 10.3782 2.16516C10.6061 2 10.9087 2 11.5141 2H12.4859C13.0913 2 13.3939 2 13.6218 2.16516C13.8497 2.33033 13.9454 2.61908 14.1368 3.1966L14.4279 4.06931C14.5612 4.41808 14.802 4.71479 15.1151 4.91603L15.4087 5.08611C15.7738 5.27437 16.1933 5.32686 16.5931 5.23432L17.6569 4.93359C18.2831 4.75522 18.5962 4.66604 18.8731 4.77906C19.1499 4.89208 19.3127 5.17551 19.6381 5.74236ZM12 13.75C13.6569 13.75 15 12.4069 15 10.75C15 9.09315 13.6569 7.75 12 7.75C10.3431 7.75 9 9.09315 9 10.75C9 12.4069 10.3431 13.75 12 13.75Z',
  d5: 'M2.5001 17.25C3.05238 17.25 3.5001 17.6977 3.5001 18.25C3.5001 19.2444 3.50869 19.5454 3.56824 19.7676C3.75318 20.4578 4.29227 20.9969 4.98246 21.1819C5.20474 21.2414 5.50574 21.25 6.5001 21.25H17.5001C18.4944 21.25 18.7955 21.2414 19.0177 21.1819C19.7079 20.9969 20.247 20.4578 20.4319 19.7676C20.4915 19.5454 20.5001 19.2444 20.5001 18.25C20.5001 17.6977 20.9478 17.25 21.5001 17.25C22.0524 17.25 22.5001 17.6977 22.5001 18.25C22.5001 18.2965 22.5001 18.3424 22.5001 18.3876C22.5006 19.183 22.5009 19.7736 22.3638 20.2853C21.9939 21.6656 20.9157 22.7438 19.5354 23.1137C19.0237 23.2508 18.4331 23.2505 17.6377 23.25C17.5925 23.25 17.5466 23.25 17.5001 23.25H6.5001C6.45356 23.25 6.40771 23.25 6.36251 23.25C5.56713 23.2505 4.97647 23.2508 4.46482 23.1137C3.08445 22.7438 2.00626 21.6656 1.63639 20.2853C1.4993 19.7736 1.49962 19.183 1.50005 18.3876C1.50007 18.3424 1.5001 18.2965 1.5001 18.25C1.5001 17.6977 1.94781 17.25 2.5001 17.25Z',
  d6: 'M10.7647 19.75C10.5184 19.7218 10.2593 19.6567 10.0176 19.4822C9.77604 19.3077 9.63265 19.0824 9.52826 18.8576C9.43449 18.6557 8.96206 17.2413 8.96206 17.2413C8.96206 17.2413 8.73129 16.8494 8.54176 16.7247C8.16956 16.4798 7.794 16.4267 7.54933 16.4798C7.54933 16.4798 5.89186 16.9479 5.65777 16.9851C5.39743 17.0264 5.11263 17.0317 4.81813 16.912C4.52372 16.7922 4.32339 16.5898 4.16567 16.3786L2.89839 14.1848C2.79918 13.9558 2.726 13.6972 2.75734 13.399C2.78868 13.1007 2.91403 12.863 3.05872 12.6596C3.18864 12.4769 4.28359 11.2542 4.47303 11.0436C4.47303 11.0436 4.70211 10.6913 4.70211 10.2499C4.70211 9.73308 4.47302 9.45629 4.47302 9.45629C4.47302 9.45629 3.18863 8.02301 3.05871 7.84035C2.91402 7.63694 2.78867 7.39921 2.75734 7.10095C2.726 6.80273 2.79918 6.54413 2.89838 6.31508C2.98747 6.10937 4.16568 4.12128 4.16568 4.12128C4.3234 3.91015 4.52372 3.70768 4.81812 3.58796C5.11262 3.46821 5.39742 3.47348 5.65775 3.51481C5.89183 3.55196 7.25868 3.93756 7.54937 4.02008C7.54937 4.02008 8.01569 4.12128 8.54172 3.77524C8.73128 3.65053 8.87815 3.47021 8.9621 3.25864C8.9621 3.25864 9.43449 1.84431 9.52826 1.64239C9.63265 1.41759 9.77604 1.19228 10.0176 1.01784C10.2593 0.843324 10.5184 0.778172 10.7647 0.75H13.2353C13.4816 0.778172 13.7407 0.843324 13.9824 1.01784C14.224 1.19228 14.3673 1.41759 14.4717 1.64239C14.5655 1.84431 15.0379 3.25864 15.0379 3.25864C15.1219 3.47021 15.2687 3.65053 15.4583 3.77524C15.9843 4.12128 16.4506 4.02008 16.4506 4.02008C16.7413 3.93756 18.1082 3.55196 18.3422 3.51481C18.6026 3.47348 18.8874 3.46821 19.1819 3.58796C19.4763 3.70768 19.6766 3.91015 19.8343 4.12128C19.8343 4.12128 21.0125 6.10937 21.1016 6.31508C21.2008 6.54413 21.274 6.80273 21.2427 7.10095C21.2113 7.39921 21.086 7.63694 20.9413 7.84035C20.8114 8.02301 19.527 9.45629 19.527 9.45629C19.527 9.45629 19.2979 9.73308 19.2979 10.2499C19.2979 10.6913 19.527 11.0436 19.527 11.0436C19.7164 11.2542 20.8114 12.4769 20.9413 12.6596C21.086 12.863 21.2113 13.1007 21.2427 13.399C21.274 13.6972 21.2008 13.9558 21.1016 14.1848L19.8343 16.3786C19.6766 16.5898 19.4763 16.7922 19.1819 16.912C18.8874 17.0317 18.6026 17.0264 18.3422 16.9851C18.1081 16.9479 16.4507 16.4798 16.4507 16.4798C16.206 16.4267 15.8304 16.4798 15.4582 16.7247C15.2687 16.8494 15.0379 17.2413 15.0379 17.2413C15.0379 17.2413 14.5655 18.6557 14.4717 18.8576C14.3673 19.0824 14.224 19.3077 13.9824 19.4822C13.7407 19.6567 13.4816 19.7218 13.2353 19.75H10.7647ZM12 13.25C13.6569 13.25 15 11.9069 15 10.25C15 8.59315 13.6569 7.25 12 7.25C10.3431 7.25 9 8.59315 9 10.25C9 11.9069 10.3431 13.25 12 13.25Z',
  d7: 'M10.0176 19.4822C10.2593 19.6567 10.5184 19.7218 10.7647 19.75H13.2353C13.4816 19.7218 13.7407 19.6567 13.9824 19.4822C14.224 19.3077 14.3673 19.0824 14.4717 18.8576C14.5655 18.6557 15.0379 17.2413 15.0379 17.2413C15.0379 17.2413 15.2687 16.8494 15.4582 16.7247C15.8304 16.4798 16.206 16.4267 16.4507 16.4798C16.4507 16.4798 18.1081 16.9479 18.3422 16.9851C18.6026 17.0264 18.8874 17.0317 19.1819 16.912C19.4763 16.7922 19.6766 16.5898 19.8343 16.3786L21.1016 14.1848C21.2008 13.9558 21.274 13.6972 21.2427 13.399C21.2113 13.1007 21.086 12.863 20.9413 12.6596C20.8114 12.4769 19.7164 11.2542 19.527 11.0436C19.527 11.0436 19.2979 10.6913 19.2979 10.2499C19.2979 9.73308 19.527 9.45629 19.527 9.45629C19.527 9.45629 20.8114 8.02301 20.9413 7.84035C21.086 7.63694 21.2113 7.39921 21.2427 7.10095C21.274 6.80273 21.2008 6.54413 21.1016 6.31508C21.0125 6.10937 19.8343 4.12128 19.8343 4.12128C19.6766 3.91015 19.4763 3.70768 19.1819 3.58796C18.8874 3.46821 18.6026 3.47348 18.3422 3.51481C18.1082 3.55196 16.7413 3.93756 16.4506 4.02008C16.4506 4.02008 15.9843 4.12128 15.4583 3.77524C15.2687 3.65053 15.1219 3.47021 15.0379 3.25864C15.0379 3.25864 14.5655 1.84431 14.4717 1.64239C14.3673 1.41759 14.224 1.19228 13.9824 1.01784C13.7407 0.843324 13.4816 0.778172 13.2353 0.75H10.7647C10.5184 0.778172 10.2593 0.843324 10.0176 1.01784C9.77604 1.19228 9.63265 1.41759 9.52826 1.64239C9.43449 1.84431 8.9621 3.25864 8.9621 3.25864C8.87815 3.47021 8.73128 3.65053 8.54172 3.77524C8.01569 4.12128 7.54937 4.02008 7.54937 4.02008C7.25868 3.93756 5.89183 3.55196 5.65775 3.51481C5.39742 3.47348 5.11262 3.46821 4.81812 3.58796C4.52372 3.70768 4.3234 3.91015 4.16568 4.12128C4.16568 4.12128 2.98747 6.10937 2.89838 6.31508C2.79918 6.54413 2.726 6.80273 2.75734 7.10095C2.78867 7.39921 2.91402 7.63694 3.05871 7.84035C3.18863 8.02301 4.47302 9.45629 4.47302 9.45629C4.47302 9.45629 4.70211 9.73308 4.70211 10.2499C4.70211 10.6913 4.47303 11.0436 4.47303 11.0436C4.28359 11.2542 3.18864 12.4769 3.05872 12.6596C2.91403 12.863 2.78868 13.1007 2.75734 13.399C2.726 13.6972 2.79918 13.9558 2.89839 14.1848L4.16567 16.3786C4.32339 16.5898 4.52372 16.7922 4.81813 16.912C5.11263 17.0317 5.39743 17.0264 5.65777 16.9851C5.89186 16.9479 7.54933 16.4798 7.54933 16.4798C7.794 16.4267 8.16956 16.4798 8.54176 16.7247C8.73129 16.8494 8.96206 17.2413 8.96206 17.2413C8.96206 17.2413 9.43449 18.6557 9.52826 18.8576C9.63265 19.0824 9.77604 19.3077 10.0176 19.4822Z',
  d8: 'M15 10.25C15 11.9069 13.6569 13.25 12 13.25C10.3431 13.25 9 11.9069 9 10.25C9 8.59315 10.3431 7.25 12 7.25C13.6569 7.25 15 8.59315 15 10.25Z',
  d9: 'M14.5 2H9.48047V4.19429L7.87171 5.13962L5.99996 4.04164L3.49019 8.45836L5.36148 9.55607L5.36149 11.444L3.49028 12.5416L6.00004 16.9584L7.87175 15.8604L9.48047 16.8057V19H14.5V16.8057L16.1087 15.8604L17.9803 16.9584L20.4901 12.5416L18.619 11.444L18.619 9.55603L20.4902 8.45837L17.9804 4.04164L16.1087 5.13959L14.5 4.19429V2Z',
  d10: 'M22 18V22H2V18',
  d11: 'M9.48063 1.25C9.06642 1.25 8.73063 1.58579 8.73063 2V3.7651L7.87155 4.26991L6.3796 3.39472C6.20649 3.29317 5.99989 3.26525 5.80603 3.31719C5.61216 3.36913 5.4472 3.4966 5.34805 3.6711L2.83828 8.08783C2.63563 8.44446 2.75707 8.89773 3.11087 9.10528L4.61165 9.98564L4.61165 11.0144L3.11096 11.8947C2.75715 12.1023 2.63571 12.5555 2.83836 12.9122L5.34813 17.3289C5.44729 17.5034 5.61225 17.6309 5.80611 17.6828C5.99998 17.7348 6.20657 17.7068 6.37969 17.6053L7.87159 16.7301L8.73063 17.2349V19C8.73063 19.4142 9.06642 19.75 9.48063 19.75H14.5002C14.9144 19.75 15.2502 19.4142 15.2502 19V17.2349L16.1092 16.7301L17.601 17.6053C17.7741 17.7068 17.9807 17.7348 18.1746 17.6828C18.3685 17.6309 18.5334 17.5034 18.6326 17.3289L21.1423 12.9122C21.345 12.5555 21.2236 12.1023 20.8698 11.8947L19.3691 11.0145L19.3691 9.98559L20.8698 9.10528C21.2236 8.89773 21.3451 8.44446 21.1424 8.08783L18.6327 3.6711C18.5335 3.4966 18.3685 3.36913 18.1747 3.31719C17.9808 3.26525 17.7742 3.29317 17.6011 3.39472L16.1092 4.26988L15.2502 3.7651V2C15.2502 1.58579 14.9144 1.25 14.5002 1.25H9.48063ZM12 13.75C13.6569 13.75 15 12.4069 15 10.75C15 9.09315 13.6569 7.75 12 7.75C10.3431 7.75 9 9.09315 9 10.75C9 12.4069 10.3431 13.75 12 13.75Z',
  d12: 'M1.25 21.75V17.75H3.25V20.75H20.75V17.75H22.75V21.75C22.75 22.3023 22.3023 22.75 21.75 22.75H2.25C1.69772 22.75 1.25 22.3023 1.25 21.75Z',
};

export const IconInstallingUpdates01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-stroke-rounded IconInstallingUpdates01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
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

export const IconInstallingUpdates01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-duotone-rounded IconInstallingUpdates01DuotoneRounded"
    >
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconInstallingUpdates01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-twotone-rounded IconInstallingUpdates01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInstallingUpdates01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-solid-rounded IconInstallingUpdates01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconInstallingUpdates01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-bulk-rounded IconInstallingUpdates01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconInstallingUpdates01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-stroke-sharp IconInstallingUpdates01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInstallingUpdates01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="installing-updates-01-solid-sharp IconInstallingUpdates01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInstallingUpdates01: TheIconSelfPack = {
  name: 'InstallingUpdates01',
  StrokeRounded: IconInstallingUpdates01StrokeRounded,
  DuotoneRounded: IconInstallingUpdates01DuotoneRounded,
  TwotoneRounded: IconInstallingUpdates01TwotoneRounded,
  SolidRounded: IconInstallingUpdates01SolidRounded,
  BulkRounded: IconInstallingUpdates01BulkRounded,
  StrokeSharp: IconInstallingUpdates01StrokeSharp,
  SolidSharp: IconInstallingUpdates01SolidSharp,
};