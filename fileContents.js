import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readTemplate = (templatePath) => {
  return fs.readFileSync(templatePath, "utf-8").trim();
};

const createFiles = (projectPath) => {
  const packageJsonContent = readTemplate(
    path.join(__dirname, "templates", "package.json")
  ).replace("PROJECT_NAME_PLACEHOLDER", path.basename(projectPath));

  const files = [
    // button
    {
      name: "button/button_default.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/button", "button_default.tsx")
      ),
    },
    {
      name: "button/button_learn_more.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/button",
          "button_learn_more.tsx"
        )
      ),
    },
    // image
    {
      name: "image/image_content_fill_vertical.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_content_fill_vertical.tsx"
        )
      ),
    },
    {
      name: "image/image_content_fill.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_content_fill.tsx"
        )
      ),
    },
    {
      name: "image/image_icon_small.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_icon_small.tsx"
        )
      ),
    },
    {
      name: "image/image_profile_extra_small.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_profile_extra_small.tsx"
        )
      ),
    },
    {
      name: "image/image_profile_medium.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_profile_medium.tsx"
        )
      ),
    },
    {
      name: "image/image_profile_small.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/image",
          "image_profile_small.tsx"
        )
      ),
    },
    // layout 
    {
      name: "layout/layout_card.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/layout", "layout_card.tsx")
      ),
    },
    {
      name: "layout/layout_image_profile_title_medium.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/layout",
          "layout_image_profile_title_medium.tsx"
        )
      ),
    },
    {
      name: "layout/layout_image_profile_title.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/layout",
          "layout_image_profile_title.tsx"
        )
      ),
    },
    {
      name: "layout/layout_special_image_title_description.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/layout",
          "layout_special_image_title_description.tsx"
        )
      ),
    },
    {
      name: "layout/layout_two_column_between.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/layout",
          "layout_two_column_between.tsx"
        )
      ),
    },
    // text
    {
      name: "text/text_base_head.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_base_head.tsx")
      ),
    },
    {
      name: "text/text_extra_large.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_extra_large.tsx")
      ),
    },
    {
      name: "text/text_extra_large_semi_bold.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_extra_large_semi_bold.tsx")
      ),
    },
    {
      name: "text/text_extra_small_head_bold.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/text",
          "text_extra_small_head_bold.tsx"
        )
      ),
    },
    {
      name: "text/text_extra_small_head.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/text",
          "text_extra_small_head.tsx"
        )
      ),
    },
    {
      name: "text/text_large_head.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_large_head.tsx")
      ),
    },
    {
      name: "text/text_large.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_large.tsx")
      ),
    },
    {
      name: "text/text_small_head_bold.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/text",
          "text_small_head_bold.tsx"
        )
      ),
    },
    {
      name: "text/text_small_head.tsx",
      content: readTemplate(
        path.join(__dirname, "templates", "layout/text", "text_small_head.tsx")
      ),
    },
    {
      name: "text/text_two_extra_large.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/text",
          "text_two_extra_large.tsx"
        )
      ),
    },
    // Widget
    {
      name: "widget/profile_card_widget.tsx",
      content: readTemplate(
        path.join(
          __dirname,
          "templates",
          "layout/widget",
          "profile_card_widget.tsx"
        )
      ),
    },

    // { name: `pages/index.${isTypeScript ? 'tsx' : 'js'}`, content: readTemplate(path.join(__dirname, 'templates', isTypeScript ? 'ts' : 'js', `index.${isTypeScript ? 'tsx' : 'js'}`)) }
  ];

  // if (isTypeScript) {
  // files.push(
  //   { name: 'tsconfig.json', content: readTemplate(path.join(__dirname, 'templates', 'ts', 'tsconfig.json')) },
  //   { name: 'next-env.d.ts', content: readTemplate(path.join(__dirname, 'templates', 'ts', 'next-env.d.ts')) }
  // );
  // }

  files.forEach((file) => {
    const filePath = path.join(projectPath, file.name);
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, file.content);
  });
};

export { createFiles };
