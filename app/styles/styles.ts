const styles = {
  container: "w-full mx-auto px-6 md:px-16 lg:px-24",

  heading_1:     "font-michroma font-normal text-[2.75rem] leading-[3.25rem] sm:text-[4rem] sm:leading-[4.75rem] tracking-tight",
  heading_2:     "font-michroma font-normal text-[2.25rem] leading-[2.75rem] sm:text-[3.25rem] sm:leading-[3.75rem] tracking-tight",
  heading_3:     "font-michroma font-normal text-[1.75rem] leading-[2.25rem] sm:text-[2.5rem] sm:leading-[3rem] tracking-tight",
  heading_4:     "font-michroma font-normal text-[1.5rem] leading-[2rem] sm:text-[1.85rem] sm:leading-[2.35rem] tracking-tight",
  heading_5:     "font-michroma font-normal text-[1.2rem] leading-[1.7rem] sm:text-[1.4rem] sm:leading-[1.9rem] tracking-normal",
  heading_6:     "font-michroma font-normal text-[1rem] leading-[1.5rem] sm:text-[1.15rem] sm:leading-[1.65rem] tracking-normal",

  paragraph:      "font-poppins font-normal text-base leading-relaxed sm:text-lg tracking-normal",
  paragraph_sm:   "font-poppins font-normal text-sm leading-snug tracking-normal",
  paragraph_lg:   "font-poppins font-normal text-xl leading-7 tracking-normal",
  paragraph_bold: "font-poppins font-semibold text-base leading-tight sm:text-lg tracking-normal",
  button_text:    "font-poppins font-semibold text-base leading-5 capitalize tracking-normal",
  button_text_sm: "font-poppins font-semibold text-sm leading-tight capitalize tracking-normal",
  label_text:     "font-poppins font-medium text-[0.95rem] leading-5 tracking-normal",
  input_text:     "font-poppins font-normal text-base leading-normal tracking-normal",
  input_text_sm:  "font-poppins font-normal text-sm leading-snug tracking-normal",
  span_text:      "font-poppins font-normal text-sm leading-snug tracking-normal",
  caption_text:   "font-poppins font-normal text-xs leading-5 tracking-normal",
  helper_text:    "font-poppins font-normal text-xs leading-5 tracking-normal",

  flex_center:    "flex justify-center items-center",
  flex_start:     "flex justify-start items-start",
  flex_between:   "flex justify-between items-center",

  padding_x: "px-6 md:px-16 lg:px-24",
  padding_y: "py-6 sm:py-8 lg:py-14",
  padding:   "p-6 sm:p-8 lg:p-10",

  margin_x: "mx-6 sm:mx-8 lg:mx-14",
  margin_y: "my-6 sm:my-8 lg:my-14",
} as const;

export const layout = {
  section:         "flex flex-col md:flex-row py-6 sm:py-8 lg:py-14",
  section_reverse: "flex flex-col-reverse md:flex-row py-6 sm:py-8 lg:py-14",

  section_img:         "flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative",
  section_img_reverse: "flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative",
  section_info:        "flex-1 flex justify-center items-start flex-col",
} as const;

export default styles;
