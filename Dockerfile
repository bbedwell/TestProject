FROM iron/node:withnpm

ENV PORT 80

COPY . .
RUN npm install

EXPOSE 80
CMD ["npm","start"]
