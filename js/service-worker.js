self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('ednovate').then(function(cache){
      return cache.addAll([
        '/edno_recruit18/js/jquery.min.js',
        '/edno_recruit18/js/bootstrap.min.js',
        '/edno_recruit18/js/jquery.matchHeight.min.js',
        '/edno_recruit18/js/owlcarousel/owl.carousel.min.js',
        '/edno_recruit18/js/app.js',
        '/edno_recruit18/css/bootstrap.min.css',
        '/edno_recruit18/css/font-awesome.min.css',
        '/edno_recruit18/css/owlcarousel/owl.carousel.min.css',
        '/edno_recruit18/css/owlcarousel/owl.theme.default.min.css',
        '/edno_recruit18/css/ednov.css',
        '/edno_recruit18/fonts/glyphicons-halflings-regular.eot',
        '/edno_recruit18/fonts/glyphicons-halflings-regular.svg',
        '/edno_recruit18/fonts/glyphicons-halflings-regular.ttf',
        '/edno_recruit18/fonts/glyphicons-halflings-regular.woff',
        '/edno_recruit18/fonts/glyphicons-halflings-regular.woff2',
        '/edno_recruit18/fonts/fontawesome-webfont.eot',
        '/edno_recruit18/fonts/fontawesome-webfont.svg',
        '/edno_recruit18/fonts/fontawesome-webfont.ttf',
        '/edno_recruit18/fonts/fontawesome-webfont.woff',
        '/edno_recruit18/fonts/fontawesome-webfont.woff2',
        '/edno_recruit18/fonts/FontAwesome.otf'
      ]);
    })
  );
});

self.addEventListener('fetch',function(event){
  event.responseWith(
    caches.match(event.request).then(function(response){
      if(response !== undefined) {
        return response;
      } else {
        return fetch(event.request),then(function(response){
          let responseClone = response.clone();
          caches.open('ednovate').then(function(cache){
            cache.put(event.request,responseClone);
          });
          return response;
        }).catch(function(){
          return caches.match('/edno_recruit18/js/app.js');
        });
      }
    })
  );
});