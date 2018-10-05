# vscode-snippet
> Generate Visual Studio Code snippets from an existing file. 

# Install

```bash
npm install -g vscode-snippet
```

# Basic Usage

```bash
vscode-snippet ./InputFile.js
```

# Advanced Usage

```bash
$ vscode-snippet generate --help

vscode-snippet generate <input>

Generate a component

Positionals:
  input  The file to generate a snippet from.                         [required]

Options:
  --help             Show help                                         [boolean]
  --version          Show version number                               [boolean]
  --name, -n         The name of the snippet.          [default: "Snippet Name"]
  --description, -d  The description for the snippet.              [default: ""]
  --prefix, -p       The snippet's prefix.                  [default: "snippet"]
  --output, -o       The output file.
```

# License

MIT @ [Jesse Dunlap](https://github.com/jessedunlap)