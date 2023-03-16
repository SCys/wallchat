# vim: set ft=dockerfile ts=2 sw=2 et:

FROM node:16-bullseye

WORKDIR /data/

#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

RUN apt-get update -q && apt-get -qy install --no-install-recommends \
    libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    libnss3 libgbm-dev libxshmfence-dev \
    git ffmpeg \
    && rm -rf /var/lib/apt/lists/*

ADD . /data/

#RUN yarn && yarn build && yarn global add forever && mkdir data
RUN npm i && npm run build && npm i -g forever && mkdir data

ENTRYPOINT ["forever", "build/main/index.js", "-c", "config.json"]
