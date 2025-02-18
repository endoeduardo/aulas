FROM ubuntu:latest

# Install Python, pip, and dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && pip3 install --no-cache-dir pymongo

# Set Python3 as default
RUN ln -s /usr/bin/python3 /usr/bin/python

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["python3"]
