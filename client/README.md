# Client

The project structure is as follows

```shell
client/
├── README.md
├── assets                  --- resources and code scripts 
│   ├── resources       
│   │   └── common      
│   │       ├── prefab      --- ui prefab
│   │       └── texture     --- images and icons
│   ├── scene
│   │   └── main.scene      --- game main scene
│   └── scripts
│       ├── game
│       │   ├── const
│       │   ├── core        --- game framework code
│       │   └── logic       --- game logic code
│       └── libs
│           └── ethers.js   --- third party library
├── build-templates
│   ├── templates-version.json
│   ├── web-desktop
│   │   └── index.ejs
│   └── web-mobile
│       ├── favicon.ico
│       └── index.ejs       --- index.html template
├── package.json            --- project configuration file
└── tsconfig.json
```

## How to run

- Install dependencies

```shell
npm install
```

- Use CocosCreator 3.7.2 to open client directory as a project
