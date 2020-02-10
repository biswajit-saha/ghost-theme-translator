# ghost-theme-translator (gtt)

CLI tool for automatically parse translatable strings in Ghost theme and generate language file.

**NOTE:** As of now this tools overwrite any existing language file with the same name.  No string will be translated. It only generates the language json file by extracting all translatable strings. within theme's `.hbs` file. 



## Install

Install ghost theme-translator globally to use it from any directory.

```
npm install -g ghost-theme-translator
```

## Uses

### Prerequisites

Before using this tool prepare your theme files. Use `{{t}}` in your `.hbs` files to make the hard coded strings translatable. Know more about `{{t}}` helper [here at Ghost official documentation](https://ghost.org/docs/api/v3/handlebars-themes/helpers/translate/).

After preparing your theme you can use this tool to generate your language file.

**Example:** `en.json` file will be created within `locales` directory for English language.

If there is no `locales` directory in your theme root then it will be created by the tool.



### CLI commands

You can use `ghost-theme-translator [options] <command>` command

But for easy uses `gtt [options] <command>` is also available and convenient to use.

#### gtt

 `gtt [option]` 

| Options           | Description               |
| ----------------- | ------------------------- |
| `-V`, `--version` | Output the version number |
| `-h`, `--help`    | Output usage information  |

#### gtt create

`gtt create [options]` or `gtt c [options]`

| Options                 | Description                                                  |
| ----------------------- | :----------------------------------------------------------- |
| `-l ` , `--language`    | Language code or name default to English (en). <br/>No need to pass this option if you want to generate en.json file.<br/>Pass any valid language code or name otherwise.<br/>**Example:** `--language=french` or `-l french` |
| `-d`, `--dir`           | Path to a Ghost theme root directory.<br>This option is required if your current working directory<br/>is not a Ghost theme root or Ghost installation root directory.<br/>**Example:** `--dir="path to theme root"` or `-d "path to theme root"` |
| ```-n```,`--theme-name` | Name of the theme folder.<br/>It is required and only takes effect when current working directory <br/> is Ghost installation root directory.<br/>Example:** `--theme-name=xyz` or `-n xyz` |
| `-h`, `--help`          | output usage information.                                    |



## Developer Setup

1. Fork this repo
2. `git clone https://github.com/<your-username>/ghost-theme-translator.git path/to/your/workspace`
3. `cd path/to/your/workspace`
4. `npm install`

To run the CLI using your workspace files

1. `npm link`
2. `gtt <command> [options]` ( you can run anywhere on your system)



## Author

* **Biswajit Saha** Creator of many Ghost themes at [gbjsolution.com](https://gbjsolution.com/)

## Copyright & License

Copyright (c) 2020 Biswajit Saha.

This project is licensed under the MIT License - see the [LICENSE](https://github.com/biswajit-saha/ghost-theme-translator/blob/master/LICENSE) file for details.

Owner of this project do not own Ghost and the Ghost Logo.

Ghost and the Ghost Logo are trademarks of Ghost Foundation Ltd.