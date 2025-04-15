import localFont from "next/font/local";

export const workSans = localFont({
  src: [
    {
      path: "../fonts/static/WorkSans-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../fonts/static/WorkSans-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/static/WorkSans-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../fonts/static/WorkSans-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/static/WorkSans-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../fonts/static/WorkSans-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
  ],
  variable: "--font-work-sans",
});
