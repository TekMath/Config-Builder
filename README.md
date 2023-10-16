# 🔧 Config Builder
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?logo=bun&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)

TS script that allow you to generate a configuration with credentials from a template and environment with Bun

## 📦 Installation
You can use the script very easily with Docker or locally with bun directly.

### Docker
- Use docker command
```bash
docker build -t configbuilder .
```
**or**
- Use package manager (npm / yarn / bun) work
```bash
npm run docker-build
```

### Local
Install bun with the command:
```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```
If you are on windows, use npm:
```bash
npm install -g bun
```

## 👨‍💻 Usage
First, create a folder `./config` where you will past all your configs.\
Note that you are able to edit path & env name in `index.ts`.\
The configuration file should look like this:
```
./config
├── template
│   ├── test1.template.json
│   ├── subfolder
│   │   └── test2.template.json
│   └── test3.template.json
└── production
```

With docker you can execute:
```bash
docker run --rm -v `pwd`/config:/usr/src/app/config configbuilder
```
**or**
```bash
npm run start
```

With bun:
```bash
bun local
```

**Made with ❤️ by [TekMath](https://github.com/TekMath)**
