import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5166 3C4.68817 3 4.0166 3.67157 4.0166 4.5C4.0166 5.32843 4.68817 6 5.5166 6C6.34503 6 7.0166 5.32843 7.0166 4.5C7.0166 3.67157 6.34503 3 5.5166 3Z',
  d2: 'M18.5166 3C17.6882 3 17.0166 3.67157 17.0166 4.5C17.0166 5.32843 17.6882 6 18.5166 6C19.345 6 20.0166 5.32843 20.0166 4.5C20.0166 3.67157 19.345 3 18.5166 3Z',
  d3: 'M10.0166 6H10.5166',
  d4: 'M13.5166 6H14.0166',
  d5: 'M20.5166 14V17C20.5166 17.4647 20.5166 17.697 20.4782 17.8902C20.3204 18.6836 19.7002 19.3038 18.9068 19.4616C18.7136 19.5 18.4813 19.5 18.0166 19.5M3.5166 14V17C3.5166 17.4647 3.5166 17.697 3.55503 17.8902C3.71284 18.6836 4.33304 19.3038 5.12642 19.4616C5.31962 19.5 5.55194 19.5 6.0166 19.5',
  d6: 'M10.5166 17.0022C10.6668 17 10.8327 17 11.0166 17H13.0166C13.2005 17 13.3664 17 13.5166 17.0022M10.5166 17.0022C9.89671 17.0111 9.54526 17.0571 9.30949 17.2929C9.0166 17.5858 9.0166 18.0572 9.0166 19C9.0166 19.9428 9.0166 20.4142 9.30949 20.7071C9.60239 21 10.0738 21 11.0166 21H13.0166C13.9594 21 14.4308 21 14.7237 20.7071C15.0166 20.4142 15.0166 19.9428 15.0166 19C15.0166 18.0572 15.0166 17.5858 14.7237 17.2929C14.4879 17.0571 14.1365 17.0111 13.5166 17.0022M10.5166 17.0022V15.5C10.5166 14.6716 11.1882 14 12.0166 14C12.845 14 13.5166 14.6716 13.5166 15.5V17.0022',
  d7: 'M5.49849 11.5054H3.7284C3.52283 11.5054 3.31638 11.475 3.12757 11.3899C2.51293 11.1129 2.20109 10.747 2.05576 10.5182C1.97307 10.388 1.98484 10.2221 2.07456 10.0971C2.78667 9.10478 4.43774 8.50542 5.49849 8.50537M5.50151 11.5054H7.2716C7.47717 11.5054 7.68362 11.475 7.87243 11.3899C8.48707 11.1129 8.79891 10.747 8.94424 10.5182C9.02693 10.388 9.01515 10.2221 8.92544 10.0971C8.21333 9.10478 6.56226 8.50542 5.50151 8.50537',
  d8: 'M18.4985 11.5054H16.7284C16.5228 11.5054 16.3164 11.475 16.1276 11.3899C15.5129 11.1129 15.2011 10.747 15.0558 10.5182C14.9731 10.388 14.9848 10.2221 15.0746 10.0971C15.7867 9.10478 17.4377 8.50542 18.4985 8.50537M18.5015 11.5054H20.2716C20.4772 11.5054 20.6836 11.475 20.8724 11.3899C21.4871 11.1129 21.7989 10.747 21.9442 10.5182C22.0269 10.388 22.0152 10.2221 21.9254 10.0971C21.2133 9.10478 19.5623 8.50542 18.5015 8.50537',
  d9: 'M12.9817 17H10.985C10.8014 17 10.6358 17 10.4858 17.0022C9.86695 17.0111 9.51608 17.0571 9.28069 17.2929C8.98828 17.5858 8.98828 18.0572 8.98828 19C8.98828 19.9428 8.98828 20.4142 9.28069 20.7071C9.57311 21 10.0438 21 10.985 21H12.9817C13.923 21 14.3936 21 14.686 20.7071C14.9785 20.4142 14.9785 19.9428 14.9785 19C14.9785 18.0572 14.9785 17.5858 14.686 17.2929C14.4506 17.0571 14.0998 17.0111 13.4809 17.0022C13.331 17 13.1653 17 12.9817 17Z',
  d10: 'M5.49462 3C4.66754 3 3.99707 3.67157 3.99707 4.5C3.99707 5.32843 4.66754 6 5.49462 6C6.32169 6 6.99216 5.32843 6.99216 4.5C6.99216 3.67157 6.32169 3 5.49462 3Z',
  d11: 'M18.4731 3C17.6461 3 16.9756 3.67157 16.9756 4.5C16.9756 5.32843 17.6461 6 18.4731 6C19.3002 6 19.9707 5.32843 19.9707 4.5C19.9707 3.67157 19.3002 3 18.4731 3Z',
  d12: 'M3.389 9.05559C2.83971 9.3715 1.39951 10.0165 2.2767 10.8237C2.70518 11.218 3.18242 11.5 3.78242 11.5H7.20613C7.80613 11.5 8.28336 11.218 8.71185 10.8237C9.58904 10.0165 8.14883 9.3715 7.59954 9.05559C6.31147 8.3148 4.67707 8.3148 3.389 9.05559Z',
  d13: 'M16.3676 9.05559C15.8183 9.3715 14.378 10.0165 15.2552 10.8237C15.6837 11.218 16.161 11.5 16.7609 11.5H20.1847C20.7846 11.5 21.262 11.218 21.6905 10.8237C22.5676 10.0165 21.1274 9.3715 20.5781 9.05559C19.29 8.3148 17.6557 8.3148 16.3676 9.05559Z',
  d14: 'M9.9873 6H10.485',
  d15: 'M13.4814 6H13.9792',
  d16: 'M20.4693 14V17C20.4693 17.4647 20.4693 17.697 20.4309 17.8902C20.2734 18.6836 19.6542 19.3038 18.8621 19.4616C18.6692 19.5 18.4373 19.5 17.9734 19.5M3.49707 14V17C3.49707 17.4647 3.49707 17.697 3.53544 17.8902C3.69299 18.6836 4.31217 19.3038 5.10426 19.4616C5.29714 19.5 5.52908 19.5 5.99298 19.5',
  d17: 'M5.5091 11.4895H3.73365C3.52745 11.4895 3.32038 11.4592 3.13099 11.3744C2.51449 11.0984 2.2017 10.7338 2.05593 10.5058C1.97299 10.376 1.9848 10.2107 2.07479 10.0861C2.78906 9.09731 4.44514 8.50005 5.5091 8.5M5.51214 11.4895H7.28759C7.49379 11.4895 7.70086 11.4592 7.89025 11.3744C8.50675 11.0984 8.81954 10.7338 8.96531 10.5058C9.04825 10.376 9.03644 10.2107 8.94645 10.0861C8.23218 9.09731 6.5761 8.50005 5.51214 8.5',
  d18: 'M18.4876 11.4895H16.7122C16.5059 11.4895 16.2989 11.4593 16.1095 11.3745C15.493 11.0984 15.1802 10.7338 15.0344 10.5058C14.9515 10.376 14.9634 10.2107 15.0533 10.0862C15.7675 9.0974 17.4236 8.5001 18.4876 8.5M18.4907 11.4895H20.2661C20.4723 11.4895 20.6794 11.4593 20.8688 11.3745C21.4853 11.0984 21.7981 10.7338 21.9438 10.5058C22.0268 10.376 22.015 10.2107 21.9249 10.0862C21.2107 9.0974 19.5546 8.5001 18.4907 8.5',
  d19: 'M10.4858 17.0022C10.6358 17 10.8014 17 10.985 17H12.9817C13.1653 17 13.331 17 13.4809 17.0022M10.4858 17.0022C9.86695 17.0111 9.51608 17.0571 9.28069 17.2929C8.98828 17.5858 8.98828 18.0572 8.98828 19C8.98828 19.9428 8.98828 20.4142 9.28069 20.7071C9.57311 21 10.0438 21 10.985 21H12.9817C13.923 21 14.3936 21 14.686 20.7071C14.9785 20.4142 14.9785 19.9428 14.9785 19C14.9785 18.0572 14.9785 17.5858 14.686 17.2929C14.4506 17.0571 14.0998 17.0111 13.4809 17.0022M10.4858 17.0022V15.5C10.4858 14.6716 11.1563 14 11.9834 14C12.8104 14 13.4809 14.6716 13.4809 15.5V17.0022',
  d20: 'M7.75 4.5C7.75 5.74264 6.74264 6.75 5.5 6.75C4.25736 6.75 3.25 5.74264 3.25 4.5C3.25 3.25736 4.25736 2.25 5.5 2.25C6.74264 2.25 7.75 3.25736 7.75 4.5Z',
  d21: 'M20.75 4.5C20.75 5.74264 19.7426 6.75 18.5 6.75C17.2574 6.75 16.25 5.74264 16.25 4.5C16.25 3.25736 17.2574 2.25 18.5 2.25C19.7426 2.25 20.75 3.25736 20.75 4.5Z',
  d22: 'M9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H10.5C10.9142 5.25 11.25 5.58579 11.25 6C11.25 6.41421 10.9142 6.75 10.5 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6Z',
  d23: 'M12.75 6C12.75 5.58579 13.0858 5.25 13.5 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H13.5C13.0858 6.75 12.75 6.41421 12.75 6Z',
  d24: 'M3.50005 13.25C3.91426 13.25 4.25005 13.5858 4.25005 14V17C4.25005 17.5006 4.25368 17.6414 4.27407 17.7439C4.3727 18.2397 4.76032 18.6273 5.25618 18.726C5.35867 18.7464 5.49944 18.75 6.00005 18.75C6.41426 18.75 6.75005 19.0858 6.75005 19.5C6.75005 19.9142 6.41426 20.25 6.00005 20.25C5.97528 20.25 5.95086 20.25 5.92677 20.25C5.53405 20.2502 5.23105 20.2504 4.96355 20.1972C3.87265 19.9802 3.01988 19.1274 2.80289 18.0365C2.74968 17.769 2.74983 17.466 2.75002 17.0733C2.75004 17.0492 2.75005 17.0248 2.75005 17V14C2.75005 13.5858 3.08583 13.25 3.50005 13.25ZM20.5 13.25C20.9143 13.25 21.25 13.5858 21.25 14V17C21.25 17.0248 21.2501 17.0492 21.2501 17.0733C21.2503 17.466 21.2504 17.769 21.1972 18.0365C20.9802 19.1274 20.1274 19.9802 19.0365 20.1972C18.769 20.2504 18.466 20.2502 18.0733 20.25C18.0492 20.25 18.0248 20.25 18 20.25C17.5858 20.25 17.25 19.9142 17.25 19.5C17.25 19.0858 17.5858 18.75 18 18.75C18.5007 18.75 18.6414 18.7464 18.7439 18.726C19.2398 18.6273 19.6274 18.2397 19.726 17.7439C19.7464 17.6414 19.75 17.5006 19.75 17V14C19.75 13.5858 20.0858 13.25 20.5 13.25Z',
  d25: 'M7.98239 8.40518C8.25072 8.55032 8.87868 8.89106 9.21661 9.21001C9.42585 9.4075 9.69245 9.72751 9.74225 10.1669C9.79781 10.657 9.56429 11.0693 9.23047 11.376C8.73064 11.8352 8.07904 12.25 7.21488 12.25H3.78556C2.9214 12.25 2.2698 11.8352 1.76997 11.376C1.43614 11.0693 1.20263 10.657 1.25818 10.1669C1.30799 9.72751 1.57459 9.4075 1.78383 9.21001C2.12175 8.89106 2.74972 8.55032 3.01805 8.40518C4.53949 7.53161 6.46094 7.53161 7.98239 8.40518Z',
  d26: 'M20.9824 8.40518C21.2507 8.55032 21.8787 8.89106 22.2166 9.21001C22.4258 9.4075 22.6924 9.72751 22.7423 10.1669C22.7978 10.657 22.5643 11.0693 22.2305 11.376C21.7306 11.8352 21.079 12.25 20.2149 12.25H16.7856C15.9214 12.25 15.2698 11.8352 14.77 11.376C14.4361 11.0693 14.2026 10.657 14.2582 10.1669C14.308 9.72751 14.5746 9.4075 14.7838 9.21001C15.1218 8.89106 15.7497 8.55032 16.018 8.40518C17.5395 7.53161 19.4609 7.53161 20.9824 8.40518Z',
  d27: 'M14.25 16.3002V15.5C14.25 14.2574 13.2426 13.25 12 13.25C10.7574 13.25 9.75001 14.2574 9.75001 15.5V16.3002C9.39498 16.3558 9.04563 16.4795 8.76257 16.7626C8.45355 17.0716 8.3411 17.4473 8.29331 17.8028C8.24991 18.1256 8.24995 18.6119 8.25 19.0447C8.24995 19.4776 8.24991 19.8744 8.29331 20.1972C8.3411 20.5527 8.45355 20.9284 8.76257 21.2374C9.07159 21.5465 9.44732 21.6589 9.8028 21.7067C10.1256 21.7501 10.5224 21.7501 10.9552 21.75H13.0448C13.4776 21.7501 13.8744 21.7501 14.1972 21.7067C14.5527 21.6589 14.9284 21.5465 15.2374 21.2374C15.5465 20.9284 15.6589 20.5527 15.7067 20.1972C15.7501 19.8744 15.7501 19.4776 15.75 19.0448C15.7501 18.6119 15.7501 18.1256 15.7067 17.8028C15.6589 17.4473 15.5465 17.0716 15.2374 16.7626C14.9544 16.4795 14.605 16.3558 14.25 16.3002ZM11.25 15.5C11.25 15.0858 11.5858 14.75 12 14.75C12.4142 14.75 12.75 15.0858 12.75 15.5V16.25H11.25V15.5Z',
  d28: 'M10 6H10.5',
  d29: 'M13.5 6H14',
  d30: 'M20.5 14.5V19.5H18M3.5 14.5V19.5H6',
  d31: 'M4 4.5L4.75 4.5L4 4.5ZM5.5 3V2.25V3ZM7 4.5L7.75 4.5L7 4.5ZM5.5 6V5.25V6ZM2 11.5H1.25V12.25H2V11.5ZM9 11.5V12.25H9.75V11.5H9ZM4.75 4.5C4.75 4.08579 5.08579 3.75 5.5 3.75V2.25C4.25736 2.25 3.25 3.25736 3.25 4.5L4.75 4.5ZM5.5 3.75C5.91421 3.75 6.25 4.08579 6.25 4.5L7.75 4.5C7.75 3.25736 6.74264 2.25 5.5 2.25V3.75ZM6.25 4.5C6.25 4.91421 5.91421 5.25 5.5 5.25V6.75C6.74264 6.75 7.75 5.74264 7.75 4.5L6.25 4.5ZM5.5 5.25C5.08579 5.25 4.75 4.91421 4.75 4.5L3.25 4.5C3.25 5.74264 4.25736 6.75 5.5 6.75V5.25ZM2 12.25H9V10.75H2V12.25ZM5.5 7.75C3.26542 7.75 1.25 9.32463 1.25 11.5H2.75C2.75 10.3617 3.86859 9.25 5.5 9.25V7.75ZM9.75 11.5C9.75 9.32463 7.73458 7.75 5.5 7.75V9.25C7.13141 9.25 8.25 10.3617 8.25 11.5H9.75Z',
  d32: 'M17 4.5L17.75 4.5L17 4.5ZM18.5 3V2.25V3ZM20 4.5L20.75 4.5L20 4.5ZM18.5 6V5.25V6ZM15 11.5H14.25V12.25H15V11.5ZM22 11.5V12.25H22.75V11.5H22ZM17.75 4.5C17.75 4.08579 18.0858 3.75 18.5 3.75V2.25C17.2574 2.25 16.25 3.25736 16.25 4.5L17.75 4.5ZM18.5 3.75C18.9142 3.75 19.25 4.08579 19.25 4.5L20.75 4.5C20.75 3.25736 19.7426 2.25 18.5 2.25V3.75ZM19.25 4.5C19.25 4.91421 18.9142 5.25 18.5 5.25V6.75C19.7426 6.75 20.75 5.74264 20.75 4.5L19.25 4.5ZM18.5 5.25C18.0858 5.25 17.75 4.91421 17.75 4.5L16.25 4.5C16.25 5.74264 17.2574 6.75 18.5 6.75V5.25ZM15 12.25H22V10.75H15V12.25ZM18.5 7.75C16.2654 7.75 14.25 9.32463 14.25 11.5H15.75C15.75 10.3617 16.8686 9.25 18.5 9.25V7.75ZM22.75 11.5C22.75 9.32463 20.7346 7.75 18.5 7.75V9.25C20.1314 9.25 21.25 10.3617 21.25 11.5H22.75Z',
  d33: 'M10.5 17.0022V15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5V17.0022M9 17H15V21H9V17Z',
  d34: 'M9.25 5.25L11.25 5.25V6.75H9.25V5.25Z',
  d35: 'M12.75 5.25L14.75 5.25V6.75H12.75V5.25Z',
  d36: 'M4.25 13.75V18.75H6.75V20.25H2.75V13.75H4.25ZM21.25 13.75V20.25H17.25V18.75H19.75V13.75H21.25Z',
  d37: 'M3.25 4.5C3.25 3.25736 4.25736 2.25 5.5 2.25C6.74264 2.25 7.75 3.25736 7.75 4.5C7.75 5.74264 6.74264 6.75 5.5 6.75C4.25736 6.75 3.25 5.74264 3.25 4.5Z',
  d38: 'M1.25 11.5C1.25 9.32463 3.26542 7.75 5.5 7.75C7.73458 7.75 9.75 9.32463 9.75 11.5V12.25H1.25V11.5Z',
  d39: 'M16.25 4.5C16.25 3.25736 17.2574 2.25 18.5 2.25C19.7426 2.25 20.75 3.25736 20.75 4.5C20.75 5.74264 19.7426 6.75 18.5 6.75C17.2574 6.75 16.25 5.74264 16.25 4.5Z',
  d40: 'M14.25 11.5C14.25 9.32463 16.2654 7.75 18.5 7.75C20.7346 7.75 22.75 9.32463 22.75 11.5V12.25H14.25V11.5Z',
  d41: 'M14.25 16.25V15.5C14.25 14.2574 13.2426 13.25 12 13.25C10.7574 13.25 9.75 14.2574 9.75 15.5V16.25H8.25V21.75H15.75V16.25H14.25ZM11.25 15.5C11.25 15.0858 11.5858 14.75 12 14.75C12.4142 14.75 12.75 15.0858 12.75 15.5V16.25H11.25V15.5Z',
} as const;

export const IconPeerToPeer03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-stroke-rounded IconPeerToPeer03StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-duotone-rounded IconPeerToPeer03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-twotone-rounded IconPeerToPeer03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-solid-rounded IconPeerToPeer03SolidRounded"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-bulk-rounded IconPeerToPeer03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-stroke-sharp IconPeerToPeer03StrokeSharp"
    >
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPeerToPeer03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="peer-to-peer-03-solid-sharp IconPeerToPeer03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d40} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d41} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPeerToPeer03: TheIconSelfPack = {
  name: 'PeerToPeer03',
  StrokeRounded: IconPeerToPeer03StrokeRounded,
  DuotoneRounded: IconPeerToPeer03DuotoneRounded,
  TwotoneRounded: IconPeerToPeer03TwotoneRounded,
  SolidRounded: IconPeerToPeer03SolidRounded,
  BulkRounded: IconPeerToPeer03BulkRounded,
  StrokeSharp: IconPeerToPeer03StrokeSharp,
  SolidSharp: IconPeerToPeer03SolidSharp,
};