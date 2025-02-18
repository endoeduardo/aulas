FROM mongo:latest

# Set working directory
WORKDIR /data

# Copy JSON data into container
COPY data/ /data/
COPY import.sh /docker-entrypoint-initdb.d/import.sh

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secretpassword

# Grant execution permissions to the script
RUN chmod +x /docker-entrypoint-initdb.d/import.sh
