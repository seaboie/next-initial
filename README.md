# Next initial folders and files  

## Install  
```bash
npm install -g next-initial
```  

## Initial create folders and files components  

- In File `tailwind.config.ts`  
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

```  

- content[]

```ts
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
```  

## Usage  
> we must change directory to [ `src/pages` or `src/components` or `src/app`]  
> - If not: tailwind CSS **not active**

- Ex : Create `components` folder in `src`
- `cd` in `components` and run command  

### Run command
```bash
nextinit
```  

> type your folder name; like `widget` >> Enter.  

> FINISH  

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
        │   ├── text_base_head.tsx
        │   ├── text_extra_large.tsx
        │   ├── text_extra_small_head_bold.tsx
        │   ├── text_extra_small_head.tsx
        │   ├── text_large_head.tsx
        │   ├── text_large.tsx
        │   ├── text_small_head_bold.tsx
        │   ├── text_small_head.tsx
        │   └── text_two_extra_large.tsx
        ├── widget/
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

---  
<img width="248" alt="Screenshot 2567-07-19 at 18 13 48" src="https://github.com/user-attachments/assets/6083e955-ad00-4993-9c3c-bc107de3092d">  

---  


