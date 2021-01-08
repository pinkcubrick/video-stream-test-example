# run player service
docker stop player-service-for-test
docker rm player-service-for-test
docker run --name player-service-for-test -v $(pwd)/player:/usr/share/nginx/html:ro -d -p 8080:80 nginx

# selenium manager
webdriver-manager start
