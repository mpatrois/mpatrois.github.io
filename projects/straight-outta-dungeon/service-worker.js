/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const FILES_TO_CACHE = [
    '/',
    'hotloader.js',
    'main.css',
    'maps/map.json',
    'sounds/base_instru.mp3',
    'sounds/coin.wav',
    'sounds/door.wav',
    'sounds/lester-instrumental-remake.mp3',
    'sounds/mnstr.wav',
    'sounds/music.wav',
    'sounds/ogre.wav',
    'sounds/shade.wav',
    'sounds/swing.wav',
    'sounds/sword.wav',
    'img/coin_anim_f0.png',
    'img/dungeon.gif',
    'img/DungeonTilesetII.png',
    'img/key.png',
    'img/pause.png',
    'img/volume_off.png',
    'img/volume_on.png',
    'img/ui_heart_empty.png',
    'img/ui_heart_full.png',
    'img/ui_heart_half.png',
    'img/weapon_axe.png',
    'img/icons/Icon-32.png'
];

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2';

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
          console.log('[ServiceWorker] Pre-caching offline page');
          return cache.addAll(FILES_TO_CACHE);
      }).catch((e)=>{
        console.error(e);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch(function(error) {
    // console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}


