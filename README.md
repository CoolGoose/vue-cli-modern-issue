`.\node_modules\.bin\vue-cli-service build --modern`

```
λ  .\node_modules\.bin\vue-cli-service build --modern
\  Building legacy bundle for production... ERROR  TypeError: Cannot read property 'tapAsync' of undefined
TypeError: Cannot read property 'tapAsync' of undefined
```

Commenting out 

```
config.plugins
      .delete("html")
      .delete("prefetch")
      .delete("preload");
```

And re-running the command

`.\node_modules\.bin\vue-cli-service build --modern`

Builds

```
File                            Size                  Gzipped

dist\assets\chunk-vendors.js    95.23 kb              32.57 kb
dist\assets\app.js              5.21 kb               1.84 kb
dist\assets\app.css             0.42 kb               0.26 kb
```

but the modern bundle is ignored

Commenting `configureWebpack` and `chainWebpack`


Builds

```
-a----       2018-07-05   6:31 PM           5379 app-legacy.29f09dbe.js
-a----       2018-07-05   6:31 PM          25816 app-legacy.29f09dbe.js.map
-a----       2018-07-05   6:31 PM           5345 app.82a28902.js
-a----       2018-07-05   6:31 PM          25759 app.82a28902.js.map
-a----       2018-07-05   6:31 PM         110189 chunk-vendors-legacy.24971a46.js
-a----       2018-07-05   6:31 PM         525539 chunk-vendors-legacy.24971a46.js.map
-a----       2018-07-05   6:31 PM          97520 chunk-vendors.372a74b7.js
-a----       2018-07-05   6:31 PM         473541 chunk-vendors.372a74b7.js.map
```