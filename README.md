# Next initial folders and files ( Next.js )  

## [Create Next.js app](https://nextjs.org/docs/getting-started/installation)  

```bash
npx create-next-app@latest
```  

## Install Package  
```bash
npm install -g next-initial
```  

## Initial create folders and files components  

- In File `tailwind.config.ts`  
```ts
iimport type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onPrimary: "#334155", // Define custom color to `onPrimary:`
        onSecondary: '#64758B', // Define custom color to `onSecondary:`
        onError: '#FF5349',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;

```  

## content[]

```ts
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
```  

### Usage  
> we must change directory to [ `src/pages` or `src/components` or `src/app`]  
> - If not: tailwind CSS **not active**

- Example : Create `components` folder in `src`
- `cd` in `components` and run command  

### Run command
```bash
nextinit
```  

> type your folder name; like `widget` >> Enter.  

> FINISH  

## Define custom Color ( can change one point to effect all )  
> `onPrimary`  
> `onSecondary`  

- In File `tailwind.config.ts`  

```ts
theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        onPrimary: "#334155",
        onSecondary: '#64758B',
        onTertiary: '#64758B',
        onError: '#FF5349',
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
```  

## Define `protocol` and `hostname` in `images / remotePatterns`...  

- In File `next.config.mjs`  

```ts 

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"images.pexels.com"
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

```  

## Structure tree  

```plaintext    


src/
├── app/
│
├── components/ `mkdir components`
    │
    ├── widget/     // folder name that you create first.
        ├── button/
        │   ├── button_default.tsx
        │   └── button_learn_more.tsx
        ├── image/
        │   ├── image_content_fill_vertical.tsx
        │   ├── image_content_fill.tsx
        │   ├── image_icon_small.tsx
        │   ├── image_profile_extra_small.tsx
        │   ├── image_profile_medium.tsx
        │   └── image_profile_small.tsx
        ├── layout/
        │   ├── layout_card.tsx
        │   ├── layout_image_profile_title_medium.tsx
        │   ├── layout_image_profile_title.tsx
        │   ├── layout_special_image_title_description.tsx
        │   └── Layout_two_column_between.tsx
        ├── text/
        │   ├── text_base_bold.tsx
        │   ├── text_base_medium.tsx
        │   ├── text_base.tsx
        │   ├── text_extra_large_bold.tsx
        │   ├── text_extra_large_medium.tsx
        │   ├── text_extra_large.tsx
        │   ├── text_extra_small_bold.tsx
        │   ├── text_extra_small_medium.tsx
        │   ├── text_extra_small.tsx
        │   ├── text_large_bold.tsx
        │   ├── text_large_medium.tsx
        │   ├── text_large.tsx
        │   ├── text_small_bold.tsx
        │   ├── text_small_medium.tsx
        │   ├── text_small.tsx
        │   ├── text_two_extra_large_bold.tsx
        │   ├── text_two_extra_large_medium.tsx
        │   └── text_two_extra_large.tsx
        ├── widget/
            ├── list_image_caption_title_description_widget.tsx
            ├── profile_card_widget.tsx

```  

---  

## Usage widget
###  `<ProfileCardWidget />`  

> profile_card.tsx  
```ts
import ProfileCardWidget from "@/components/widget/widget/profile_card_widget";

export default function Home() {
  return (
    <div className="">
      <ProfileCardWidget
        coverImage="https://images.pexels.com/photos/26840789/pexels-photo-26840789.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        coverAlt="profile"
        profileImage="https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        profileAlt="profile"
        name="Nell Abbott"
        followerCount="213"
        buttonTitle="My Profile"
      />
    </div>
  );
}
```  

<img width="387" alt="Screenshot 2567-07-19 at 20 27 06" src="https://github.com/user-attachments/assets/e6b274de-e59c-481a-b6dc-cfe63d738709"> 

---   


### `<ListImageCaptionTitleDescriptionWidget />`  

```ts
<ListImageCaptionTitleDescription
  imageUrl="https://images.pexels.com/photos/19171623/pexels-photo-19171623.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
  imageAlt="Somethings"
  caption="Isabel Obrien"
  title="9364ae85-2697-5e30-870a-1b483a7a25ce"
  description="movement attack concerned shaking charge grown exactly did event burst earth porch dirt dull cookies national gate air blue stuck son that biggest chose"
/>
```  

<img width="853" alt="Screenshot 2567-07-22 at 13 40 27" src="https://github.com/user-attachments/assets/b77dcc30-9d6d-4714-b29e-0879b9a8ff09">  

---  



