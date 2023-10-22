FROM 172.16.0.135:20080/public/nginx:1.18.0

# 将dist文件中的内容复制到 `/usr/share/nginx/html/` 这个目录下面
COPY ./docs-dist /usr/share/nginx/html
# 用本地配置文件来替换nginx镜像里的默认配置
#COPY nginx.conf /etc/nginx/nginx.conf
ENV TZ=Asia/Shanghai
ENV LANG=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
